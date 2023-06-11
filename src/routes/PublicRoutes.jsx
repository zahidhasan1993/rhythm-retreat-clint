import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Register from "../pages/Shared/Authentication/Register";
import Login from "../pages/Shared/Authentication/Login";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'registration',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    }
])


export default router;