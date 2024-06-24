import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProiver, { AuthContext } from "./authentication/AuthProiver.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProiver>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProiver>
  </React.StrictMode>
);
