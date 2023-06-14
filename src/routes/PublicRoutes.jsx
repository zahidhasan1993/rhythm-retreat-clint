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
import MyClasses from "../Dashboard/InstructorComponents/MyClasses";
import Classes from "../pages/Classes/Classes";
import Instructor from "../pages/Instructor/Instructor";
import SelectedClasses from "../Dashboard/StudentComponents/SelectedClasses";
import EnrolledClasses from "../Dashboard/StudentComponents/EnrolledClasses";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/Payment/PaymentHistory";

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
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // student routes
      {
        path: "selectedclass",
        element: (
          <PrivateRoute>
            <SelectedClasses></SelectedClasses>
          </PrivateRoute>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "enrolledclass",
        element: (
          <PrivateRoute>
            <EnrolledClasses></EnrolledClasses>
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
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
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
