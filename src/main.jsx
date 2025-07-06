import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import MainPage from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
