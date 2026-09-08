import { createBrowserRouter } from "react-router";
import { main2Routes } from "./projects/project-2/main2.routes";
import ProjectSelector from "./projectSelector";
import { main1Routes } from "./projects/project-1/main1.routes";
import { main3Routes } from "./projects/project-3/main3.routes";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProjectSelector />,
        children: [
            {
                index: true,
                element: (
                    <div className="mx-auto mt-6 flex w-full max-w-6xl items-center justify-center px-6">
                        <div className="flex w-full items-center justify-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-5 py-3 text-sm font-medium text-blue-700 shadow-sm">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                                i
                            </span>
                            <span>Please select a project</span>
                        </div>
                    </div>
                )
            },
            main1Routes,
            main2Routes,
            main3Routes
        ]
    }
]);