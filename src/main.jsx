import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/PublicRoutes.jsx";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="container mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
