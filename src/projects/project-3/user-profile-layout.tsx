import { useLocation, useNavigate, useParams } from "react-router";
import Back from "./back";
import UserProfile from "./user-profile";
import { useCallback, useMemo } from "react";

export default function UserProfileLayout() {

    const params = useParams();
    const location = useLocation();
    // const employeeId = params.employeeId;
    // const user = location.state?.user;
    const employeeId = useMemo(() => params?.employeeId, [params.employeeId]); //actually not required for type string (primitive), but just for practice
    const user = useMemo(() => location.state?.user, [location.state?.user]);

    const foo = useCallback(() => {
        console.log('I am line 1');
        console.log('I am line 2');
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Back />
                <div className="flex justify-center">
                    <UserProfile employeeId={employeeId} user={user} />
                </div>
            </div>
        </div>
    );
}


//React.memo does a shallow comparison of props.
//That means the parent component does not need to have useMemo for primitive values (number, string, boolean) because they are compared by values.
//For objects though, which are compared by reference, we need useMemmo
//Same for functions, which are also compared by reference, we need useCallback.

//Syntax:
// useMemo:
//UseMemo will be used for objects basically, where you could assign an object to a variable, or create an object then and there for a variable.
//1. Assigning an object to a variable:
//Normally we do- 
//const obj = someObj; (const user = location.state?.user;)
// in useMemo-
// const obj = useMemo (() => <use the variable here>, []);
// or 
// const obj = useMemo (() => { 
//  return <use the variable here>
// }, []);
//That variable has to be returned. You can explicitly write the return statement inside {}, or directly write the variable name to be returned on the same line. (you know this)
//That returned variable will become the value of const obj as it was for normal const obj.

//useCallback:
//for function as props
//Normally we do- 
// function foo() {
//     console.log('I am line 1');
//     console.log('I am line 2');
// }
// in useCallback:
// const foo = useCallback(() => {
//     console.log('I am line 1');
//     console.log('I am line 2');
// }, []);
//The body of the callback (starting from { and ending at }) is the body of the original function. The name of the function is foo, which is given as const foo.