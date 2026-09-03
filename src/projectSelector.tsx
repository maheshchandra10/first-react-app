import { Link } from "react-router";

export default function ProjectSelector() {
    return (
        <div className="flex flex-col gap-6 p-9">
            <h1 className="text-xl font-bold">Select Project: </h1>
            <div className="flex gap-8">
                <Link
                    to="/digital-card"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                >
                    Digital Card
                </Link>
                <Link
                    to="/users"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                >
                    Users
                </Link>
            </div>
        </div>
    );
}