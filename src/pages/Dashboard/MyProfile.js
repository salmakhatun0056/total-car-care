import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = ({ user }) => {
    return (
        <div className='min-h-screen mt-5'>
            <div className='text-center'>
                <h2 className='text-2xl text-primary font-bold'>My Profile</h2>
                <h2 className='text-xl'>Name: {user.displayName}</h2>
                <h2 className='text-xl'>Email: {user.email}</h2>
                <Link to='/edit-profile' className='btn btn-primary'>Edit</Link>
            </div>
        </div>
    );
};

export default MyProfile;