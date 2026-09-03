const UserCard = ({ users, onCardClick }) => {
    return (
        <>
            {
                users.map((user, index) => (
                    <div key={user.employeeId} onClick={() => onCardClick(user.employeeId)} className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                        {/* Card Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg font-bold ring-2 ring-white/30">
                                    {user.name
                                        ?.split(" ")
                                        .map((word) => word[0])
                                        .join("")
                                        .slice(0, 2)
                                        .toUpperCase()}
                                </div>
                                {/* Name & Designation */}
                                <div className="min-w-0">
                                    <h2 className="truncate text-lg font-semibold">
                                        {user.name}
                                    </h2>
                                    <p className="truncate text-sm text-blue-100">
                                        {user.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* User Details */}
                        <div className="p-5">
                            <div className="grid grid-cols-1 gap-4">
                                {/* Age */}
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Age
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-gray-800">
                                        {user.age}
                                    </p>
                                </div>
                                {/* Gender */}
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Gender
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-gray-800">
                                        {user.gender}
                                    </p>
                                </div>
                                {/* Phone */}
                                <div className="col-span-2">
                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Phone Number
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-gray-800">
                                        {user.phoneNumber}
                                    </p>
                                </div>
                                {/* Employee ID */}
                                <div className="col-span-2">
                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Employee ID
                                    </p>
                                    <p className="mt-1 inline-block rounded-md bg-gray-100 px-2.5 py-1 font-mono text-sm font-semibold text-gray-700">
                                        {user.employeeId}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default UserCard;
