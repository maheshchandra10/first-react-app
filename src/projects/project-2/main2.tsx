import { useEffect, useState } from "react";
import Back from "./back";
import UserCard from "./user-cards";
import UserProfile from "./user-profile";
import UserSearch from "./user-search";
import Greeting from "./greeting";

const totalUsers = [
    {
        name: "Rahul Sharma",
        age: 29,
        designation: "Software Engineer",
        gender: "Male",
        phoneNumber: "+91 98765 43123",
        employeeId: "EMP-1924",
    },
    {
        name: "Zendaya Holland",
        age: 31,
        designation: "Actress",
        gender: "Female",
        phoneNumber: "+91 98765 48760",
        employeeId: "EMP-1125",
    },
    {
        name: "Sourav Sharma",
        age: 99,
        designation: "Software Engineer God",
        gender: "Male",
        phoneNumber: "+91 98765 43456",
        employeeId: "EMP-1445",
    },
    {
        name: "Urmila Devi",
        age: 32,
        designation: "Housewife",
        gender: "Female",
        phoneNumber: "+91 76265 43210",
        employeeId: "EMP-1074",
    },
    {
        name: "Puneet Superstar",
        age: 28,
        designation: "IAF Officer",
        gender: "Male",
        phoneNumber: "+91 98678 43210",
        employeeId: "EMP-1012",
    },
    {
        name: "Tania Sachdeva",
        age: 36,
        designation: "Commentator",
        gender: "Female",
        phoneNumber: "+91 98765 11870",
        employeeId: "EMP-1405",
    },
    {
        name: "The Undertaker",
        age: 55,
        designation: "The Deadman",
        gender: "Male",
        phoneNumber: "+91 98678 43210",
        employeeId: "EMP-4381",
    },
    {
        name: "Maya Chandra",
        age: 25,
        designation: "Queen of Hearts",
        gender: "Female",
        phoneNumber: "+91 98765 22770",
        employeeId: "EMP-1000",
    },
]

type User = {
    name: string;
    age: number;
    designation: string;
    gender: string;
    phoneNumber: string;
    employeeId: string;
};

export default function Main2() {

    const [currentUser, setCurrentUser] = useState<User | null>(null); // dont initialize with {}, because Boolean({}) = true
    const [search, setSearch] = useState<string>('');
    const [isGreeting, setIsGreeting] = useState(true);
    
    const users = totalUsers.filter(user =>
        user.name.toLowerCase().includes(search.trim().toLowerCase())
    );
    
    useEffect(() => {
            setTimeout(() => {
                setIsGreeting(false);
            }, 2000);
        }, []
    ); //usually similar to ngOnInit() if the 2nd param is kept [], like here.

    function onCardClick(employeeId: string) {
        const user = totalUsers.find(user => user.employeeId === employeeId);
        if (user) {
            setCurrentUser(user);
        }
    }

    function onBackClick() {
        setSearch('');
        setCurrentUser(null);
    }

    function onSearch(event) {
        setSearch(event.target.value.trim().toLowerCase());
    }

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            {isGreeting && <Greeting />}
            <div className="mx-auto max-w-7xl">
                {!currentUser ? (
                    <>
                        {/* Page Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                Employees
                            </h1>
                            <p className="mt-2 text-sm text-gray-500">
                                Search and view employee information
                            </p>
                        </div>
                        {/* Search */}
                        <div className="mb-8 flex justify-center">
                            <UserSearch onSearch={onSearch} />
                        </div>
                        {/* Cards */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            <UserCard users={users} onCardClick={onCardClick} />
                        </div>
                    </>
                )
                    :
                    (
                        <>
                            {/* Back Button */}
                            <Back onBackClick={onBackClick} />
                            {/* Profile */}
                            <div className="flex justify-center">
                                <UserProfile user={currentUser} />
                            </div>
                        </>
                    )}
            </div>
        </main>
    );
}