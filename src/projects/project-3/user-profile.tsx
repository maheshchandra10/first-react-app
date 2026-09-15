import { useEffect, useState, memo } from "react";
import type { User } from "./constants";

type UserProfileProps = {
    employeeId: string | null | undefined;
    user: User;
}

const UserProfile = memo(function UserProfile({ employeeId, user }: UserProfileProps) {

    const [count, setCount] = useState(0);

    // useEffect(()=> {
    //     console.log('inside useEffect');
    //     const i = setInterval(() => {
    //         console.log('setInterval running');
    //         setCount(count + 1);
    //     }, 1000);

    //     return () => {
    //         clearInterval(i);
    //     }

    // }, [count]);
    //or
    useEffect(() => {
        console.log('inside useEffect');
        setInterval(() => {
            console.log('setInterval running');
            setCount(prevCount => prevCount + 1);
        }, 1000);
    }, []);

    console.log('inside component function');

    return (
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white">
                <div className="flex flex-col items-center gap-5 sm:flex-row">
                    {/* Avatar */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white/20 text-3xl font-bold ring-4 ring-white/30">
                        {user.name
                            ?.split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                    </div>
                    {/* Basic Info */}
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold">
                            {user.name}
                        </h1>
                        <p className="mt-1 text-blue-100">
                            {user.designation}
                        </p>
                        <span className="mt-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                            Employee ID: {user.employeeId}
                        </span>
                    </div>
                </div>
            </div>
            {/* Profile Content */}
            <div className="p-6 sm:p-6">
                {/* Personal Information */}
                <section>
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">
                        Personal Information
                    </h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Full Name */}
                        <div className="rounded-xl bg-gray-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Full Name
                            </p>
                            <p className="mt-1 font-medium text-gray-800">
                                {user.name}
                            </p>
                        </div>
                        {/* Age */}
                        <div className="rounded-xl bg-gray-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Age
                            </p>
                            <p className="mt-1 font-medium text-gray-800">
                                {user.age} years
                            </p>
                        </div>
                        {/* Gender */}
                        <div className="rounded-xl bg-gray-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Gender
                            </p>
                            <p className="mt-1 font-medium text-gray-800">
                                {user.gender}
                            </p>
                        </div>
                        {/* Phone */}
                        <div className="rounded-xl bg-gray-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Phone Number
                            </p>
                            <p className="mt-1 font-medium text-gray-800">
                                {user.phoneNumber}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Employment Information */}
                <section className="mt-8">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">
                        Employment Information
                    </h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {/* Designation */}
                        <div className="rounded-xl bg-gray-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Designation
                            </p>
                            <p className="mt-1 font-medium text-gray-800">
                                {user.designation}
                            </p>
                        </div>
                        {/* Employee ID */}
                        <div className="rounded-xl bg-gray-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                Employee ID
                            </p>
                            <p className="mt-1 font-mono font-medium text-gray-800">
                                {user.employeeId}
                            </p>
                        </div>
                    </div>
                </section>
                {/* Contact */}
                <section className="mt-8">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900">
                        Contact
                    </h2>
                    <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            ☎
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">
                                Phone Number
                            </p>
                            <p className="font-medium text-gray-800">
                                {user.phoneNumber}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <p>Count: {count}</p>
            </div>
        </div>
    );
});

export default UserProfile;


//see the above 2 console logs. The console log written outside useEffect() prints first, then the one inside useEffect().
//This is because React first needs to produce the UI. Render first, then effect.

//Closure:
//A function that has an access to a variable belonging to the render in which that function was created.

// Stale Closure:
// const [count, setCount] = useState(0);
// useEffect(()=> {
//         setInterval(() => {      //here this callback receives count as 0 when it is created. Even though setInterval will call the callback every 1 sec, it will call the same callback which was created first time.
//             console.log('setInterval running');
//             setCount(count + 1);
//         }, 1000);
//     },
// []);

//Here, the interval will run at every 1 sec, but it won't increase the count value as expected here.
// This is because the count value the callback of setInterval executes is the same everytime, the one it received during the first time, which was 0.
//This is called Stale Closure.


//React.memo:
//Syntax:
//Take the entire component function.
//Put it inside the first function argument of memo() -> memo(<entire component function>);
//assign this memo function to a const <component-name>.
//For a good practice, keep the name of the const <component-name> same as the component function named which you just put inside memo().
//The actual component function name will be the name of the const, not the inner function name. Here const 'UserProfile'.

//The name of the inner function can be useful for things like React DevTools/debugging and stack traces,
//but it doesn't determine how you reference the component in JSX.

//You can also make the inner function anonymous:
// const Child = memo(function ({...}) {
//     return (
//         <>
//         </>
//     );
// });