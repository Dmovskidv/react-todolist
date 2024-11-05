import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, TaskForm, TasksList } from "./pages";

const router = createBrowserRouter([
  {
    path: "/react-todolist/",
    element: <App />,
    children: [
      {
        path: "/react-todolist/",
        element: <TasksList />,
      },
      {
        path: "/react-todolist/login",
        element: <Login />,
      },
      {
        path: "/react-todolist/manage/:taskId?",
        element: <TaskForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
