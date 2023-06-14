import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useAuth()
    const location = useLocation()

    if (loader) {
      return  <button className="btn loading md:my-96 md:ml-[43rem]">loading</button>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;