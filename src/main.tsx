import React from "react";
import ReactDOM from "react-dom/client";
import { AboutPageApp, HomePageApp } from "./App.tsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ResponsiveHomePage from "./pages/ResponsiveHomePage.tsx";
import TeamPage from "./pages/TeamPage.tsx";

const router = createBrowserRouter([
    {
        path: "/old",
        element: <HomePageApp />,
    },
    {
        path: "/about",
        element: <AboutPageApp />,
    },
    {
        path: "/",
        element: <ResponsiveHomePage />,
    },
    {
        path: "/team",
        element: <TeamPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Outlet />
    </React.StrictMode>,
);
