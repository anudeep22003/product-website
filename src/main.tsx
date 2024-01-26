import React from "react";
import ReactDOM from "react-dom/client";
import { AboutPageApp, HomePageApp } from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePageApp />,
    },
    {
        path: "/about",
        element: <AboutPageApp />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Outlet />
        </ThemeProvider>
    </React.StrictMode>,
);
