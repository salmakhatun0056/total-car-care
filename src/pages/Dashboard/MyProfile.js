import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = ({ user, userData }) => {
    return (
        <div className='min-h-screen mt-5'>
            <div className='text-center'>
                <h2 className='text-2xl text-primary font-bold'>My Profile</h2>
                <h2 className='text-xl'>Name: {user.displayName}</h2>
                <h2 className='text-xl'>Email: {user.email}</h2>
                <div className='overflow-x-auto'>
                    <table className='table table-compact w-full mt-6'>
                        <tr className='bg-white'>
                            <td>Phone</td>
                            <td>:</td>
                            <td >00000000000</td>
                        </tr>
                        <tr className='bg-white'>
                            <td>Address</td>
                            <td>:</td>
                            <td>00000000000</td>
                        </tr>
                        <tr className='font-bold'><td className='bg-transparent'>Your educational qualification</td></tr>
                        <tr className='bg-white'>
                            <td>Educational level</td>
                            <td>:</td>
                            <td>00000000000</td>
                        </tr>
                        <tr className='bg-white'>
                            <td>Degree Title</td>
                            <td>:</td>
                            <td>00000000000</td>
                        </tr>
                        <tr className='bg-white'>
                            <td>Institute</td>
                            <td>:</td>
                            <td>00000000000</td>
                        </tr>
                        <tr className='bg-white'>
                            <td>Year</td>
                            <td>:</td>
                            <td>00000000000</td>
                        </tr>
                    </table>
                </div>
                <Link to='/edit-profile' className='btn btn-primary'>Edit</Link>
            </div>
        </div>
    );
};

export default MyProfile;