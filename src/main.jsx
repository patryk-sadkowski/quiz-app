import "reset.css";
import "@Styles/main.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QuizPage } from "./pages/QuizPage/QuizPage";
import { HomePage } from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:quizID",
    element: <QuizPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
