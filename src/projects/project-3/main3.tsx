import { useContext, useEffect, useState } from "react";
import UserCard from "./user-cards";
import UserSearch from "./user-search";
import Greeting from "./greeting";
import { totalUsers } from "./constants";
import { Link } from "react-router";
import { ThemeContext } from "../../ThemeContext";

export default function Main3() {

    const [search, setSearch] = useState<string>('');
    const [isGreeting, setIsGreeting] = useState(true);

    const lightTheme = useContext(ThemeContext);

    const users = totalUsers.filter(user =>
        user.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    useEffect(() => {
        setTimeout(() => {
            setIsGreeting(false);
        }, 500);
    }, []
    ); //usually similar to ngOnInit() if the 2nd param is kept [], like here.

    function onSearch(event) {
        setSearch(event.target.value.trim().toLowerCase());
    }

    return (
        <main style={{ backgroundColor: lightTheme ? '#f8fafc' : '#111827', color: !lightTheme ? '#f8fafc' : '#111827' }} className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            {isGreeting && <Greeting />}
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Employees
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Search and view employee information
                        </p>
                    </div>
                </div>
                <div className="relative mb-8 flex items-center justify-center">
                    <UserSearch onSearch={onSearch} />
                    <Link to={`add`}
                        className="absolute right-0 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        + Add User
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <UserCard users={users} />
                </div>
            </div>
        </main >
    );
}


//Not related to React, but a general idea-
//Any questions like- something is slow; something is taking time; how will you debug this that?
//Try to follow this approach in your answer-
//1. I will first reproduce the issue to measure the extent of the issue (which part is slow and taking time).
//2. I will also check logs (production logs) for any ambiguity.
//3. Then I will determine from where the issue (latency, slowness etc) is coming- frontend (UI), network (Response time, Payload size, Number of requests), API (backend), database.
//4. Once I get hold of the source of the issue, I will rectify it using- <throw optimzation techniques based on the source of the issue IF the solution is not too obvious>. For example if the issue is from UI, throw react/angular optimization terms, recent code etc.
//5. I will then do the impact analysis of the recitification change, add monitoring, then deploy it.
//6. I will measure again if the issue is actually fixed.


// Is the browser slow?
//        ↓
// Is the API slow?
//        ↓
// Is the backend processing slow?
//        ↓
// Is the database slow?
//        ↓
// Where exactly is the time being spent?


// Reproduce to Measure the extent
//    ↓
// Check logs
//    ↓
// Identify where failure occurs to narrow the scope
//    ↓
// Check inputs/config/environment
//    ↓
// Form hypothesis
//    ↓
// Test hypothesis
//    ↓
// Fix with smallest appropriate change
//    ↓
// Measure again
//    ↓
// Add test/monitoring to prevent recurrence


//How to debug an issue in the database:
//review the query (SELECT, JOIN, WHERE etc)
//whether the query is retrieving more data than necessary
//whether unnecessary filtering or joins are happening in the query
//whether appropriate index is there, or whether indexes are used or not
//recent code/query changes

//need to check the actual use case of useReducer
//need to practice via code also about useMemo, useCallback, React.memo