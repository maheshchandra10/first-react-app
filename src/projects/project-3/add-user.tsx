import { Link, useMatches, useNavigate } from "react-router";
import { totalUsers, type User } from "./constants";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../ThemeContext";

const AddUser = () => {

    const lightTheme = useContext(ThemeContext);

    const renders = useRef(0);
    renders.current++; //ignore the error for this time....

    const countRef = useRef(0);
    const [count, setCount] = useState(0);
    const [buttonLabel, setButtonLabel] = useState('Add User');
    const [errors, setErrors] = useState({
        name: false,
        age: false,
        gender: false,
        phoneNumber: false,
        designation: false,
        employeeId: false
    });
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const matches = useMatches();
    const featureRoot = matches.find(match =>
        (match.handle as { featureRoot?: boolean } | undefined)?.featureRoot
    ); //this is a feature to navigate to the root route of a feature without using absolute or relative path.


    // const submitForm = (event) => { //call onSubmit={}
    //     event.preventDefault();
    //     const formElement = event.currentTarget;
    //     const formData = new FormData(formElement);
    //     const userObject: User = {
    //         name: String(formData.get("name")),
    //         age: Number(formData.get("age")),
    //         gender: String(formData.get("gender")),
    //         phoneNumber: String(formData.get("phoneNumber")),
    //         designation: String(formData.get("designation")),
    //         employeeId: String(formData.get("employeeId")),
    //     };
    //     totalUsers.push(userObject);

    //     let time = 3;
    //     setButtonLabel('User Added, Redirecting back in ' + time + ' seconds');
    //     if (!featureRoot) return;
    //     timer = setInterval(() => {
    //         time--;
    //         setButtonLabel('User Added, Redirecting back in ' + time + ' seconds');
    //         if (time === 0) {
    //             clearInterval(timer);
    //             navigate(featureRoot.pathname);
    //         }
    //     }, 1000);
    // }

    const onCounterClick = () => {
        setCount(count + 1); //render 'count' 0, React's internal 'count' 0 + 1 = 1
        setCount(countt => countt + 1); //render 'count' 0, React's internal 'count' 1 + 1 = 2
        setCount(count + 1); //render 'count' 0, React's internal 'count' 0 + 1 = 1
        setCount(count + 1); //render 'count' 0, React's internal 'count' 0 + 1 = 1
        setCount(countt => countt + 1); //render 'count' 0, React's internal 'count' 1 + 1 = 2
        //increment per click = +2
        countRef.current++;
        console.log(countRef.current); //notice how the Ref has the lastest updated value in the existing render, unlike a State
    }

    const formAction = (formData: FormData) => {

        if (String(formData.get("phoneNumber")).length !== 10) {
            setErrors({ ...errors, phoneNumber: true });
            return;
        }

        const userObject: User = {
            name: String(formData.get("name")),
            age: Number(formData.get("age")),
            gender: String(formData.get("gender")),
            phoneNumber: String(formData.get("phoneNumber")),
            designation: String(formData.get("designation")),
            employeeId: String(formData.get("employeeId")),
            employmentType: String(formData.get("employmentType")),
            employeeDiet: Object(formData.getAll("employeeDiet"))
        };
        totalUsers.push(userObject);

        buttonTimer();
    }

    const formActionGrabAtOnce = (formData: FormData) => {

        if (String(formData.get("phoneNumber")).length !== 10) {
            setErrors({ ...errors, phoneNumber: true });
            inputRef.current?.focus();
            return;
        }

        const raw = Object.fromEntries(formData);
        const userObject = { ...raw, age: Number(formData.get("age")), employeeDiet: Object(formData.getAll("employeeDiet")) } as User; //for multi value input fields, you still need to manually fetch the final value using getAll()
        console.log(userObject);
        totalUsers.push(userObject);

        buttonTimer();
    }

    const buttonTimer = () => {
        let time = 3;
        setButtonLabel('User Added, Redirecting back in ' + time + ' seconds');
        if (!featureRoot) return;
        const timer = setInterval(() => {
            time--;
            setButtonLabel('User Added, Redirecting back in ' + time + ' seconds');
            if (time === 0) {
                clearInterval(timer);
                navigate(featureRoot.pathname);
            }
        }, 1000);
    }

    useEffect(() => {
        console.log('Inside useEffect with total renders: ', renders.current);
    }, [count]);

    return (
        <div className="flex min-h-screen items-center justify-center p-8" style={{ backgroundColor: lightTheme ? '#f8fafc' : '#111827', color: !lightTheme ? '#f8fafc' : '#111827' }}>
            <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            {/* Icon */}
                            <div aria-hidden="true" className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/20 text-3xl font-bold ring-4 ring-white/30">
                                +
                            </div>
                            {/* Basic Info */}
                            <div>
                                <h1 id="add-user-title" className="text-2xl font-bold">
                                    Add New User
                                </h1>
                                <p className="mt-1 text-blue-100">
                                    Create a new employee profile
                                </p>
                            </div>
                        </div>
                        {/* Go Back */}
                        <Link
                            to="../"
                            className="cursor-pointer rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/25"
                        >
                            ← Go Back
                        </Link>
                    </div>
                </div>
                {/* Form */}
                <form action={formActionGrabAtOnce} aria-labelledby="add-user-title" style={{ backgroundColor: lightTheme ? '#f8fafc' : '#111827', color: !lightTheme ? '#f8fafc' : '#111827' }}>
                    {/* Form Content */}
                    <div className="p-6 sm:p-8">
                        {/* Personal Information */}
                        <section aria-labelledby="personal-information-title">
                            <h2 id="personal-information-title" className="mb-4 text-lg font-semibold">
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {/* Full Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-400"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter full name"
                                        required={true}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>
                                {/* Age */}
                                <div>
                                    <label
                                        htmlFor="age"
                                        className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-400"
                                    >
                                        Age
                                    </label>
                                    <input
                                        id="age"
                                        name="age"
                                        type="text"
                                        placeholder="Enter age"
                                        required={true}
                                        aria-invalid={errors.age}
                                        aria-describedby={errors.age ? "age-error" : undefined}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    />
                                    {errors.age && <p id="age-error" role="alert" className="mt-2 text-xs font-medium text-red-400">
                                        Only numbers allowed
                                    </p>}
                                </div>
                                {/* Gender */}
                                <div>
                                    <label
                                        htmlFor="gender"
                                        className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-400"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        defaultValue=""
                                        required={true}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    >
                                        <option disabled hidden value="">
                                            Select gender
                                        </option>
                                        <option value="male">
                                            Male
                                        </option>
                                        <option value="female">
                                            Female
                                        </option>
                                        <option value="other">
                                            Other
                                        </option>
                                    </select>
                                </div>
                                {/* Phone Number */}
                                <div>
                                    <label
                                        htmlFor="phoneNumber"
                                        className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-400"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        maxLength={10}
                                        placeholder="Enter phone number"
                                        required={true}
                                        ref={inputRef}
                                        aria-invalid={errors.phoneNumber}
                                        aria-describedby={errors.phoneNumber ? "phone-number-error" : undefined}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    />
                                    {errors.phoneNumber && <p id="phone-number-error" role="alert" className="mt-2 text-xs font-medium text-red-400">
                                        Please enter 10 digits
                                    </p>}
                                </div>
                            </div>
                        </section>
                        {/* Employment Information */}
                        <section aria-labelledby="employment-information-title" className="mt-8">
                            <h2 id="employment-information-title" className="mb-4 text-lg font-semibold">
                                Employment Information
                            </h2>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {/* Designation */}
                                <div>
                                    <label
                                        htmlFor="designation"
                                        className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-400"
                                    >
                                        Designation
                                    </label>
                                    <input
                                        id="designation"
                                        name="designation"
                                        type="text"
                                        placeholder="Enter designation"
                                        required={true}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    />
                                </div>
                                {/* Employee ID */}
                                <div>
                                    <label
                                        htmlFor="employeeId"
                                        className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-400"
                                    >
                                        Employee ID
                                    </label>
                                    <input
                                        id="employeeId"
                                        name="employeeId"
                                        type="text"
                                        placeholder="Enter employee ID"
                                        required={true}
                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm font-medium text-gray-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                                    />
                                </div>
                                {/* Employment Type */}
                                <fieldset className="sm:col-span-2">
                                    <legend className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Employment Type
                                    </legend>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                                            <input
                                                name="employmentType"
                                                type="radio"
                                                value="full"
                                                className="h-4 w-4 accent-blue-600"
                                                defaultChecked={true}
                                            />
                                            Full Time
                                        </label>
                                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                                            <input
                                                name="employmentType"
                                                type="radio"
                                                value="half"
                                                className="h-4 w-4 accent-blue-600"
                                            />
                                            Half Time
                                        </label>
                                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                                            <input
                                                name="employmentType"
                                                type="radio"
                                                value="contractor"
                                                className="h-4 w-4 accent-blue-600"
                                            />
                                            Contractor
                                        </label>
                                    </div>
                                </fieldset>
                                {/* Employee Diet */}
                                <fieldset className="sm:col-span-2">
                                    <legend className="mb-2 block text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Employmee Diet
                                    </legend>
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                                            <input
                                                name="employeeDiet"
                                                type="checkbox"
                                                value="vegetarian"
                                                className="h-4 w-4 accent-blue-600"
                                                defaultChecked={true}
                                            />
                                            Vegetarian
                                        </label>
                                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                                            <input
                                                name="employeeDiet"
                                                type="checkbox"
                                                value="nonVegetarian"
                                                className="h-4 w-4 accent-blue-600"
                                            />
                                            Non-vegetarian
                                        </label>
                                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700">
                                            <input
                                                name="employeeDiet"
                                                type="checkbox"
                                                value="both"
                                                className="h-4 w-4 accent-blue-600"
                                            />
                                            Both
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                        </section>
                        {/* Actions */}
                        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
                            <Link
                                to="../"
                                className="cursor-pointer rounded-full border border-gray-200 px-6 py-2.5 text-center text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
                            >
                                Cancel
                            </Link>
                            <button aria-live="polite" aria-atomic="true" disabled={buttonLabel !== 'Add User'}
                                type="submit"
                                className={"rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 " + (buttonLabel !== 'Add User' ? '' : 'cursor-pointer')}
                            >
                                {buttonLabel}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <button onClick={onCounterClick}>Counter: </button>
            <p>{count}</p>
        </div>
    );
}

export default AddUser;

//Never ever will you use a setState function inside the component function body, because it will trigger infinite renders-
// Component mounts -> sees the setState -> triggers component rerender -> sees the setState again -> triggers rerender again ->..........

//setState function being called is not the actual reason a rerender is triggered. It is the change in the value of the state which does that.
//Because if setState is called with the same value (primitive- number, string or boolean), it WILL NOT trigger a rerender.
//Example-
//const [age, setAge] = UseState(32);
//someEventHandler() {
    //setAge(32);
// }
//Here setAge is called to set the value of age to 32, which it already has 32 as the value. Thus the component won't rerender because of this.
//But this is only true for primitive values, not for objects and arrays. Primitive values are passed by values, while objects and arrays are passed by reference.


//did you know? if a label has a "for" attribute, it will focus the input with the corresponding id when clicked. This is useful for accessibility and user experience.
//buttons, if placed inside a form, it will have input type="submit" by default. This means that clicking the button will submit the form.
//buttons also have a type attribute, and by default outside of a form, the type is "button". Inside a form, the default type is "submit". This means that if you have a button inside a form and you don't specify the type, it will submit the form when clicked.
//if we dont specify a different type of method for the form, it will default to GET. This means that when the form is submitted, the data will be appended to the URL as query parameters.
//If we set the method to POST, the data will be sent in the request body instead of the URL. This is useful for sending sensitive information or large amounts of data.
//

//From React 19, action={} inside a form will by default do following things:
//event.precentDefault()
//the event handler by default receives 'formData' instead of 'event' argument
//reset the form at the end of the function
//compare this with onSubmit={}. We need to do the above things manually.

//A component re-render does NOT restart JavaScript execution from the beginning, and it does NOT cancel an already-created setInterval.
//The important part is that setInterval is managed by the browser's timer system, not by the React component's render execution.
//The browser keeps track of this timer and schedules the callback repeatedly.

//setInterval(...)
// fetch(...)
// document.addEventListener(...)
// setTimeout(...)
//These are called side-effects. You should not put things like this directly in the component body, because they'll execute again on every render,
//creating a new one on every render.
//These can be put in UseEffect(), or inside a function-
//useEffect(() => {
// side effect
// });

//Here, 'component body' means-
//function AddUser {
// <this part is the component body, where you usually declare const, useEffect(), functions etc>
//}
//Component functions can also be called functional components.
//If an operation interacts with something outside the component's calculation of JSX, it's probably a side effect. Example-
//timers (setTimeout, SetInterval), API calls, javasript event listeners, subscriptions, sessionStorage/localStorage (why?).

//more about States:
//State is data that React remembers between renders.
//State preservation- React remembers the State value between renders.
//State as a snapshot.
// Functional updater- setCount(previousCount => previousCount + 1);-
//"Take the state value you have/remember, give it to this function (the argument of the arrow function), and use the returned value as the next state."
//Functional updaters are important when multiple state updates depend on the previous state.
//React's internal value of a state will have the latest value even in the current render, while the actual state value will not;
//But there's no way to access it, apart from the functional updater argument (previousCount).
//setCount(count + 1) - this is a direct assingment. For the count value in the same render, it will assign the same value.
//setCount(previousCount => previousCount + 1) - this is not a direct assignment. It will first check for the latest React's internal value of the count State, add 1 to it, and then assign the addition;
// It might not produce the same result again even in the current render. It is nowhere dependent on the actual State value of count in the current render.
//


//https://randomuser.me/
//https://randomuser.me/api to call


//Regarding the placement of map function for the loop in reference to parent-child components-
//If the map is written inside parent component to call the child component, then those number of child components will be created,
//and simultaneously each child component will have its each variables, States etc (whatever is written in the child component).
//all those multiple items which were looped from the parent component represent that many child components with their OWN variables, States etc.
//If the map is written inside the child component, and the child component is rendered simply from the parent component,
//then only one child component will be created. Those multiple items were looped from the child component, meaning they all belong to a single child component,
//with single instance of variables, States etc belonging to all those items.
//Conclusion: Component State is isolated per component instance.

//about && operator:
//Evaluates left to right.
//Return the first falsy value. If everything is truthy, return the last value.
//Note: if the falsy value is 0, undefined, null etc- it will return exactly that falsy value, not false.
//So we have to be really explicit in the condition.
//For example, while checking for 0 items, write {totalUsers.length > 0 && <...something based on this condition...>},
//not {totalUsers.length && <...something based on this condition...>}, because if will return '0' then on the page.

//falsy list:
// Boolean(false)      // false
// Boolean(0)          // false
// Boolean(-0)         // false
// Boolean(0n)         // false (this is BigInt zero)
// Boolean("")         // false
// Boolean(null)       // false
// Boolean(undefined)  // false
// Boolean(NaN)        // false

// But:
// Boolean("0")        // true
// Boolean("false")    // true
// Boolean([])         // true  (!remember this)
// Boolean({})         // true  (!remember this)


//About useRef: Ref values survive component rerenders just like States. Change in the value of a Ref (<someRef>.current) does not trigger rerender of the component, unlike States.
//And since it doesn't trigger a rerender, a Ref will always have its latest updated value even in the existing render, unlike States.
//Ref values (<someRef>.current) are not used in the return body of the component. It is a hook that is used for values that are not needed for rendering something on the UI.
//But one important thing is that the Ref itself can be used inside the return body of a component for various purpose, but the actual value (<someRef>.current) is not.
//For example: 
//<input ref={inputRef} /> //notice how only the Ref (inputRef) is being used here, not its value (inputRef.current).
//But you won't notice the actual value (<someRef>.current) being used anywhere in the return body.

//If we want to bind a variable value to an object property, we can simply do-
//obj = {...obj, name: <variable-name>}
//for example, 
// const nameV = 'Mahesh';
// let user = {name: '', age: ''};
// user = {...user, name: nameV};
// console.log(user);
// But what if the property name itself has to binded with a variable value? then:
// const propertyName = 'name';
// user = {...user, [propertyName]: nameV};
// console.log(user);
// you have to use [propertyName].