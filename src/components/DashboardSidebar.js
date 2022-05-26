import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth)
    return (
        <>
            <div class="drawer bg-accent  drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {children}

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link className='mb-3' to="/dashboard">My Orders</Link></li>
                        <li><Link className='mb-3' to="/dashboard/add-review">Add a review</Link></li>
                        <li><Link className='mb-3' to="/dashboard/my-profile">My Profile</Link></li>
                        <li><Link className='mb-3' to="/dashboard/manage-all-orders">Manage-All-Orders</Link></li>
                        <li><Link className='mb-3' to="/dashboard/add-a-product">Add A Product</Link></li>
                        <li><Link className='mb-3' to="/dashboard/make-admin">Make Admin</Link></li>
                        <li><Link className='mb-3' to="/dashboard/manage-products">Manage Products</Link></li>


                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;