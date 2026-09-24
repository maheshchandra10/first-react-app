import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";

type UsersResponse = {
    users: {
        id: number;
        firstName: string;
        lastName: string;
        maidenName: string;
        age: number;
        gender: string;
        email: string;
        phone: string;
        username: string;
        password: string;
        birthDate: string;
        image: string;
        bloodGroup: string;
        height: number;
        weight: number;
        eyeColor: string;

        hair: {
            color: string;
            type: string;
        };

        ip: string;

        address: {
            address: string;
            city: string;
            state: string;
            stateCode: string;
            postalCode: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            country: string;
        };

        macAddress: string;
        university: string;

        bank: {
            cardExpire: string;
            cardNumber: string;
            cardType: string;
            currency: string;
            iban: string;
        };

        company: {
            department: string;
            name: string;
            title: string;
            address: {
                address: string;
                city: string;
                state: string;
                stateCode: string;
                postalCode: string;
                coordinates: {
                    lat: number;
                    lng: number;
                };
                country: string;
            };
        };

        ein: string;
        ssn: string;
        userAgent: string;

        crypto: {
            coin: string;
            wallet: string;
            network: string;
        };

        role: "admin" | "moderator" | "user";
    }[];
    total: number;
    skip: number;
    limit: number;
};

export default function RandomUsers() {
    const [UsersResponse, setUsersResponse] = useState<UsersResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const lightTheme = useContext(ThemeContext);

    useEffect(() => {
        async function loadUsers() {
            console.log('Inside the network call function...');
            try {
                const response = await fetch(
                    "https://dummyjson.com/users"
                );
                if (!response.ok) {
                    throw new Error(
                        `Request failed: ${response.status}`
                    );
                }
                const data = await response.json();
                setUsersResponse(data);
            } catch (error) {
                setError(
                    error instanceof Error
                        ? error.message
                        : "Something went wrong"
                );
            } finally {
                setLoading(false);
            }
        }
        loadUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-15">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
            </div>
        );
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="min-h-screen bg-background p-8 text-foreground" style={{ backgroundColor: lightTheme ? '#f8fafc' : '#111827', color: !lightTheme ? '#f8fafc' : '#111827' }}>
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">
                        Users
                    </h1>
                </div>

                {/* Users */}
                <div className="grid gap-6 md:grid-cols-2">
                    {UsersResponse?.users.map((user) => (
                        <div
                            key={user.id}
                            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                        >
                            {/* Profile header */}
                            <div className="flex items-center gap-4 border-b border-border p-5">
                                <img
                                    src={user.image}
                                    alt={`${user.firstName} ${user.lastName}`}
                                    className="h-16 w-16 rounded-full object-cover ring-2 ring-muted"
                                />

                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg font-bold">
                                            {user.firstName} {user.lastName}
                                        </h2>

                                        <span
                                            className={`rounded-full px-2.5 py-1 text-xs font-medium ${user.role === "admin"
                                                ? "bg-red-500/10 text-red-600 dark:text-red-400"
                                                : user.role === "moderator"
                                                    ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                                                    : "bg-green-500/10 text-green-600 dark:text-green-400"
                                                }`}
                                        >
                                            {user.role}
                                        </span>
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        @{user.username}
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {user.company.title} ·{" "}
                                        {user.company.name}
                                    </p>
                                </div>
                            </div>

                            {/* Basic information */}
                            <div className="grid grid-cols-2 gap-4 p-5">
                                <div>
                                    <p className="text-xs font-medium uppercase text-muted-foreground">
                                        Age
                                    </p>
                                    <p className="mt-1 text-sm font-semibold">
                                        {user.age}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase text-muted-foreground">
                                        Gender
                                    </p>
                                    <p className="mt-1 text-sm font-semibold capitalize">
                                        {user.gender}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase text-muted-foreground">
                                        Email
                                    </p>
                                    <p className="mt-1 truncate text-sm font-semibold">
                                        {user.email}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase text-muted-foreground">
                                        Phone
                                    </p>
                                    <p className="mt-1 text-sm font-semibold">
                                        {user.phone}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase text-muted-foreground">
                                        Birth Date
                                    </p>
                                    <p className="mt-1 text-sm font-semibold">
                                        {user.birthDate}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase text-muted-foreground">
                                        Blood Group
                                    </p>
                                    <p className="mt-1 text-sm font-semibold">
                                        {user.bloodGroup}
                                    </p>
                                </div>
                            </div>

                            {/* Physical information */}
                            <div className="border-t border-border px-5 py-4">
                                <h3 className="mb-3 text-sm font-semibold">
                                    Physical Information
                                </h3>

                                <div className="flex gap-6 text-sm text-muted-foreground">
                                    <span>
                                        <strong className="text-foreground">
                                            {user.height}
                                        </strong>{" "}
                                        cm
                                    </span>

                                    <span>
                                        <strong className="text-foreground">
                                            {user.weight}
                                        </strong>{" "}
                                        kg
                                    </span>

                                    <span>
                                        Eyes:{" "}
                                        <strong className="text-foreground">
                                            {user.eyeColor}
                                        </strong>
                                    </span>

                                    <span>
                                        Hair:{" "}
                                        <strong className="text-foreground">
                                            {user.hair.color}
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="border-t border-border px-5 py-4">
                                <h3 className="mb-2 text-sm font-semibold">
                                    Address
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {user.address.address},{" "}
                                    {user.address.city},{" "}
                                    {user.address.state},{" "}
                                    {user.address.country} -{" "}
                                    {user.address.postalCode}
                                </p>
                            </div>

                            {/* Company */}
                            <div className="border-t border-border bg-muted/30 px-5 py-4">
                                <p className="text-xs font-medium uppercase text-muted-foreground">
                                    Company
                                </p>

                                <p className="mt-1 text-sm font-semibold">
                                    {user.company.name}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {user.company.department} ·{" "}
                                    {user.company.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}


//AbortController:

// useEffect(() => {
//     const controller = new AbortController();    ...new line

//     async function fetchUser() {
//         try {
//             const response = await fetch(
//                 `/api/users/${userId}`,
//                 { signal: controller.signal }    ...new line
//             );

//             const data = await response.json();
//             setUser(data);
//         } catch (error) {
//             if (error.name !== "AbortError") {    ...new line
//                 setError(error);
//             }
//         }
//     }

//     fetchUser();

//     return () => {
//         controller.abort();                      ...new line
//     };
// }, [userId]);

//AbortController is comparable to switchMap() of RxJS