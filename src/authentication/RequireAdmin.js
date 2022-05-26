// import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
// import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import auth from '../firebase.init';
import NotFound from '../pages/NotFound';

const RequireAdmin = ({ children }) => {
    const [user, loading, authError] = useAuthState(auth);
    const email = user.email;

    const userData = useQuery('user', () =>
        fetch(`http://localhost:5000/users/${email}`).then(res =>
            res.json()
        )
    )
    // console.log(userData);
    if (loading || userData.isLoading) {
        return <div className='h-screen flex justify-center items-center'>
            <Loading></Loading>
        </div>
    }


    const { role } = userData?.data;
    if (role !== 'admin') {
        return <NotFound></NotFound>
    }

    return children
};

export default RequireAdmin;