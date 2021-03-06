import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth)
    const { pathname } = useLocation()

    const logout = () => {
        localStorage.removeItem('accessToken');
        signOut(auth);
    };
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar   bg-base-200 lg:px-16">

                    {pathname.includes('dashboard') && <label htmlFor="my-drawer-2" tabIndex="0" className="btn lg:hidden btn-ghost ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>}

                    <Link to="/" className="flex-1 px-2 mx-2 text-xl font-bold text-primary">Total Car Care</Link>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            {/* <!-- Navbar menu content here --> */}
                            <li ><NavLink className='rounded-lg' to='/'>Home</NavLink></li>

                            <li ><NavLink className='rounded-lg' to='/blog'>Blog</NavLink></li>
                            <li ><NavLink className='rounded-lg' to='/my-portfolio'>My Portfolio</NavLink></li>

                            {user && <li><NavLink className='rounded-lg' to='/dashboard'>Dashboard</NavLink></li>}

                            <li>{user ? <button onClick={logout} className="btn btn-ghost rounded-lg">Sign Out</button> : <NavLink className='rounded-lg' to="/login">Login</NavLink>}</li>



                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li ><NavLink className='rounded-lg' to='/'>Home</NavLink></li>
                    <li ><NavLink className='rounded-lg' to='blog'>Blog</NavLink></li>
                    <li>{user ? <button onClick={logout} className="btn btn-ghost rounded-lg">Sign Out</button> : <NavLink className='rounded-lg' to="/login">Login</NavLink>}</li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;