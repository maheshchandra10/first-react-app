import type { RouteObject } from "react-router";
import Main1 from "./main1";

export const main1Routes: RouteObject = {
    path: 'digital-card',
    children: [
        {
            index: true,
            element: <Main1 />
        }
    ]
}