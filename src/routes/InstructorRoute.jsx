import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useInstructor from '../Hooks/useInstructor';


const InstructorRoute = ({children}) =>  {
    const {user,loader} = useAuth();
    const {instructor, isLoading} = useInstructor()
    const location = useLocation();

    if (loader || isLoading) {
        return <button className="btn loading md:my-96 ">loading</button>
    }
    if (user && instructor) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;

