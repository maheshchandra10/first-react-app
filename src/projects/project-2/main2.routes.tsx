import type { RouteObject } from "react-router";
import Main2 from "./main2";
import UserProfile from "./user-profile";

export const main2Routes: RouteObject = {
    path: 'users',
    children: [
        {
            index: true,
            element: <Main2 />
        }
    ]
}