import type { RouteObject } from "react-router";
import Main3 from "./main3";
import UserProfileLayout from "./user-profile-layout";
import AddUser from "./add-user";
import RandomUser from "./random-user";
import RandomUsers from "./basic-fetch";

export const main3Routes: RouteObject = {
    path: 'users-with-routing',
    handle: { featureRoot: true }, //tell React that this is the root route for this particular feature
    children: [
        {
            index: true,
            element: <Main3 />
        },
        {
            path: ':employeeId',
            element: <UserProfileLayout />
        },
        {
            path: 'add',
            element: <AddUser />
        },
        {
            path: 'view-random-user',
            element: <RandomUser />
        },
        {
            path: 'view-random-users',
            element: <RandomUsers />
        }
    ]
}