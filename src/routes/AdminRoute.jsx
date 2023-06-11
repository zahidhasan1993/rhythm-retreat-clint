import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';


const AdminRoute = ({children}) => {
    const {user,loader} = useAuth();
    const {admin, isLoading} = useAdmin();
    const location = useLocation();

    if (loader || isLoading) {
        return <button className="btn loading md:my-96 ">loading</button>
    }
    if (user && admin) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;