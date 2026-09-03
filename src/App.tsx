import { RouterProvider } from "react-router";
import { router } from "./app.routes";

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}

//instead of directly invoking a component, invoke any component based on the route, so rather invoke the route component which 
//you have created, here <AppRoutes />