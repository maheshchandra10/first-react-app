const Greeting = () => {
    return (
        <div className="fixed left-1/2 top-4 z-50 w-[90%] max-w-4xl -translate-x-1/2">
            <div className="rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 via-orange-50 to-rose-50 px-6 py-5 text-center shadow-sm">
                <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
                    Welcome to Users Widget
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Manage and explore user information
                </p>
            </div>
        </div>
    );
}

export default Greeting;