import { createBrowserRouter } from "react-router";
import { main2Routes } from "./projects/project-2/main2.routes";
import ProjectSelector from "./projectSelector";
import { main1Routes } from "./projects/project-1/main1.routes";


export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <ProjectSelector />
            },
            main1Routes,
            main2Routes
        ]
    }
]);