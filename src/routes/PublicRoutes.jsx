import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Shared/Authentication/Register";
import Login from "../pages/Shared/Authentication/Login";
import Dashboard from "../Dashboard/Dashboard";
import ManageUsers from "../Dashboard/AdminComponents/ManageUsers";
import AdminRoute from "./AdminRoute";
import AddClass from "../Dashboard/InstructorComponents/AddClass";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../Dashboard/AdminComponents/ManageClasses";
import Feedback from "../Dashboard/AdminComponents/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //admin routes
      {
        path: "manageuser",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "feedback",
        element: (
          <AdminRoute>
            <Feedback></Feedback>
          </AdminRoute>
        ),
      },
      //instructors routes
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
