import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";

type User = {
    gender: string;

    name: {
        title: string;
        first: string;
        last: string;
    };

    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string;

        coordinates: {
            latitude: string;
            longitude: string;
        };

        timezone: {
            offset: string;
            description: string;
        };
    };

    email: string;

    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };

    dob: {
        date: string;
        age: number;
    };

    registered: {
        date: string;
        age: number;
    };

    phone: string;
    cell: string;

    id: {
        name: string;
        value: string;
    };

    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };

    nat: string;
};


const RandomUser = () => {

    const [randomUser, setRandomUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const lightTheme = useContext(ThemeContext);


    useEffect(() => {
        // const getRandomData = () => {
        //     fetch('https://randomuser.me/api')
        //     .then((res)=> res.json())
        //     .then(res => {
        //         setRandomUser(res.results[0]);
        //         console.log(res.results[0]);
        //     })
        //     .catch(error => console.error('Something went wrong: ', error));
        // }
        //or
        const interval = setInterval(async () => {
            try {
                const res = await fetch('https://randomuser.me/api');
                const resObj = await res.json();
                setRandomUser(resObj.results[0]);
                console.log(resObj.results[0]);
                setLoading(false);
            }
            catch (error) {
                console.error('Something went wrong: ', error);
            }
        }, 4000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="min-h-[92vh] bg-gray-100 flex items-center justify-center p-6" style={{ backgroundColor: lightTheme ? '#f8fafc' : '#111827', color: !lightTheme ? '#f8fafc' : '#111827' }}>
            {(loading || !randomUser) ?
                <div className="flex items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
                </div>
                :
                <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-lg">
                    {/* Header */}
                    <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600" />

                    {/* Profile */}
                    <div className="px-6 pb-8" >
                        {/* Profile Picture & Name */}
                        <div className="-mt-16 flex flex-col items-center">
                            <img
                                src={randomUser.picture.medium}
                                alt={randomUser.name.first}
                                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
                            />

                            <h1 className="mt-4 text-2xl font-bold text-gray-900">
                                {randomUser.name.first} {randomUser.name.last}
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                {randomUser.location.city}, {randomUser.location.state}, {randomUser.location.country}
                            </p>
                        </div>

                        {/* User Details */}
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Gender
                                </p>
                                <p className="mt-1 text-sm font-semibold text-gray-900">
                                    {randomUser.gender}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Date of Birth
                                </p>
                                <p className="mt-1 text-sm font-semibold text-gray-900">
                                    {randomUser.dob.date.split('T')[0]}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Email
                                </p>
                                <p className="mt-1 break-words text-sm font-semibold text-gray-900">
                                    {randomUser.email}
                                </p>
                            </div>

                            <div className="rounded-xl bg-gray-50 p-4">
                                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                                    Phone
                                </p>
                                <p className="mt-1 text-sm font-semibold text-gray-900">
                                    {randomUser.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default RandomUser;


// types vs interface:

//syntax:
// type user = {        //there's an assignment here. We assign an object to a type alias
//     name: string;
//     age: number;
// }
// interface user {     //no assignment here
//     name: string;
//     age: number;
// }

// With interface, you can only describe an object.
//Let's say I want to describe a url as type URL-> const url: URL = 'abc.com';
//with type -> type URL = string;
//with interface -> interface URL {
//     url: string;
// }
//But this is describing an object, which we don't want. We want a simple string variable.
//So it will work only for-
// const url: URL = {
//     url: 'abc.com'
// }

//Therefore, try to use type alias by default.