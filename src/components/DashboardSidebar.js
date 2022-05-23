import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const DashboardSidebar = ({ children }) => {
    const [user] = useAuthState(auth)
    return (
        <div className='bg-accent'>
            <div class="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    {children}

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {user && <li><NavLink to="my-profile">My Profile</NavLink></li>}
                        {user && <li><NavLink to="add-review">Add a review</NavLink></li>}
                        <li><NavLink to="my-orders">My Orders</NavLink></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;