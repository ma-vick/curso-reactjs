import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Company from "./routes/Company";
import NewProject from "./routes/NewProject";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/company',
        element: <Company />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/newproject',
        element: <NewProject />,
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
