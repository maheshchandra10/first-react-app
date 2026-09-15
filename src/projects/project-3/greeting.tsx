import { useEffect } from "react";

const Greeting = () => {

    useEffect(() => {
        console.log('Inside useEffect of Greetings');

        return () => {
            console.log('Inside useEffect cleanup of Greetings');
        }
        console.log('after the cleanup function'); //unreachable code
    }, []);

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

//Inside useEffect:
//When the components in unmounted, ONLY the cleanup function runs from useEffect(), and not anything written above it.
//But when there's a dependency array in useEffect which gets changed, then the cleanup will run first with the old values (values of States, variables etc from the old render),
//then the complete effect will run from the beginning with the values from the new render.

// The cleanup belongs to the previous useEffect instance, not the new one.

//Anything written after the cleanup function is unreachable at any point of time, because it is written after the return statement. It won't run during the mounting procedure either.
//So essentially, it will never execute.

//Cleanup isn't only for when the component is unmounting:

// useEffect(() => {
//   console.log("Effect for user:", userId);

//   return () => {
//     console.log("Cleanup for user:", userId);
//   };
// }, [userId]);

//Suppose userId = 10
//Effect runs: Effect for user: 10
//Then userId changes: 10 → 20
//React does:
// dependency changed
//       ↓
// cleanup previous effect (!important)
//       ↓
// run new effect

//So: Effect for user: 10 -> userId changes -> Cleanup for user: 10 -> Effect for user: 20

//The cleanup function isn't exclusively an "unmount function."
// It's really: Cleanup for the previous effect setup.
// Unmount is one situation where that cleanup occurs.

// Lifecycle: 
//      FIRST APPEARANCE
//            │
//            ▼
//         MOUNT
//            │
//            ▼
//     component renders
//            │
//            ▼
//      DOM committed
//            │
//            ▼
//       effect runs.
//            │
//            ▼
//   ┌─────────────────┐
//   │                 │
//   │  STATE/PROPS/   │
//   │ CONTEXT CHANGE  │
//   │                 │
//   └────────┬────────┘
//            │
//            ▼
//         UPDATE
//            │
//            ▼
//     component renders
//            │
//            ▼
//      DOM committed
//            │
//            ▼
// relevant effect cleanup
//            │
//            ▼
//     effect runs again.
//            │
//            │
//   Component needs to disappear
//            │
//            ▼
//        UNMOUNT process
//            │
//            ▼
//     effect cleanup
//            │
//            ▼
//     Component removed.