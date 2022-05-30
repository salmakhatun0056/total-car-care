import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import auth from '../firebase.init';

const RequireAuth = ({ children, userData }) => {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    if (loading || userData?.isLoading) {
        return <Loading></Loading>
    }

    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children
}


export default RequireAuth;