import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";

import Home from "../pages/Home";

/* Creating a router with two routes. */
export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/dashboard", element: <Home /> }
        ]
    }
]);