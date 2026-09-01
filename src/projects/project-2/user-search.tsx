const UserSearch = () => {
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
                type="text"
                placeholder="Search users..."
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
        </div>
    );
};

export default UserSearch;
