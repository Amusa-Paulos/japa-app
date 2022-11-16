import React from "react";
import Home from "../Home";
import { createBrowserRouter, } from "react-router-dom";
import NewPage from "../NewPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "newpage/:id",
        element: <NewPage />,
    },
]);