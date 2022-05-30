import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const DashboardSidebar = ({ children, userData }) => {
    if (userData?.isLoading) {
        <Loading></Loading>
    }
    // console.log(userData)
    return (
        <div className='mb-2'>
            <div className="drawer bg-accent  drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {children}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        {
                            !userData?.data?.role ?
                                <>
                                    <li><Link className='mb-3' to="/dashboard">My Orders</Link></li>
                                    <li><Link className='mb-3' to="/dashboard/add-review">Add a review</Link></li>
                                </>
                                :
                                <>
                                    <li><Link className='mb-3' to="/dashboard">Manage-All-Orders</Link></li>
                                    <li><Link className='mb-3' to="/dashboard/add-a-product">Add A Product</Link></li>
                                    <li><Link className='mb-3' to="/dashboard/make-admin">Make Admin</Link></li>
                                    <li><Link className='mb-3' to="/dashboard/manage-products">Manage Products</Link></li>
                                </>
                        }
                        <li><Link className='mb-3' to="/dashboard/my-profile">My Profile</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;