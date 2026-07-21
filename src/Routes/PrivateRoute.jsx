import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoute = ({children, role}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/loginPortal" state={{from : location}} replace></Navigate>
    }
    if(role && user.role !== role){
        return <Navigate to="/" replace></Navigate>
    }
    return children;
};

export default PrivateRoute;