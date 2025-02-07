import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MainLayout";
import QuickSend from "./Pages/ProjectsDetails/QuickSend";
import Athletic from "./Pages/ProjectsDetails/Athletic";
import ChoiceMate from "./Pages/ProjectsDetails/ChoiceMate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/quicksend",
        element: <QuickSend />
      },
      {
        path:"/choiceMate",
        element: <ChoiceMate />
      },
      {
        path:"/athletic",
        element: <Athletic />
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
