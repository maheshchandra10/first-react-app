const UserProfile = ({ user }) => {
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
        </div>
    );
};

export default UserProfile;
