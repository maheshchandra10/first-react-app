const UserSearch = ({onSearch}) => {
    return (
        <div className="relative w-full max-w-md">
            {/* Search Icon */}
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                    />
                </svg>
            </div>
            {/* Input */}
            <input
                onChange={onSearch}
                type="text"
                placeholder="Search users..."
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
        </div>
    );
};

export default UserSearch;

//no need to pass 'event' as a param if directly a function is passed.
//Direct function reference → React supplies the event => onChange={onSearch}
// Arrow wrapper → I decide what arguments to pass => onChange={()=> onSearch()} (Note: if 'event' is not passed here, you can't access it in the function)


//Controlled input:
//Tries to mimic two way data binding feature of [(ngModel)] by doing the both explicitly.
//In Controlled input, we want the value of an input to be controlled by React, not by the browser.
// Therefore, we assign a State to the value attribute of the input. This will mean that the value of the input will be whatever the 
//current value of the State is.
//We then give onChange event handler of the input a function which will have the setState function of the State as setName(event.target.value) somewhere inside that function.
//This will mean that the value of the State will change to whatever the user is typing in the input field.

//<input
  //  value={name}
    //onChange={event => setName(event.target.value)}
///>

// Above we are explicitly doing two way data binding. 
// From logic -> view using value={name}
// From view -> logic using onChange={event => setName(event.target.value)}
// The state is the source of truth for the input.
// Why is it called "controlled"? Because React controls the value.
// React is effectively saying: "Whatever name currently is, that's what the input's value should be."
//Note: event.target.value will always return the value in type string, even for input type="number".
// Need to explicitly convert it in number if required: Number(event.target.value);
//Remember: we need both value={name} & onChange={event => setName(event.target.value)} for the input to be a Controlled input. Missing any one will give ambigious results.

// Every keystroke in a controlled input can cause the component to re-render.
// That's not automatically a problem. React is designed to handle this pattern.
// But it becomes relevant when you have a very large form or expensive components surrounding the input.
// That's where optimization techniques and specialized form libraries can become useful.


// Uncontrolled input: 

// const inputRef = useRef<HTMLInputElement>(null);
// value wherever required: inputRef.current?.value
// <input ref={inputRef} />

// Here the browser owns the value. You can still read the current value, but you do not control it to be whatever you want.

// Uncontrolled inputs can be useful when:
// you don't need to react to every keystroke,
// you only need the value when submitting,
// you're integrating with non-React code,
// you want simpler form handling for a straightforward form.
// you don't want rigirous error handling around the input.
