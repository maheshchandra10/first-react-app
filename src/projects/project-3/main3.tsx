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