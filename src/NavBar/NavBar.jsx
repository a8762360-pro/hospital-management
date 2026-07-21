import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const NavBar = () => {
    const { user, logOut } = use(AuthContext);
    console.log(user)
    const handleLogOut = () => {
        logOut();
    }
    const link = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "bg-btn3  px-4 py-2 rounded-md" : "px-4 py-2 hover:bg-btn1 hover:text-gray-500 rounded-md "}> Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "bg-btn3  px-4 py-2 rounded-md" : "px-4 py-2 hover:bg-btn1 hover:text-gray-500 rounded-md "} to="/aboutUs">About us</NavLink>
        <NavLink className={({ isActive }) => isActive ? "bg-btn3  px-4 py-2 rounded-md" : "px-4 py-2 hover:bg-btn1 hover:text-gray-500 rounded-md "} to="/services">Services</NavLink>
        <NavLink className={({ isActive }) => isActive ? "bg-btn3  px-4 py-2 rounded-md" : "px-4 py-2 hover:bg-btn1 hover:text-gray-500 rounded-md "} to="/doctors">Doctors</NavLink>
        <NavLink className={({ isActive }) => isActive ? "bg-btn3  px-4 py-2 rounded-md" : "px-4 py-2 hover:bg-btn1 hover:text-gray-500 rounded-md "} to="/news">News</NavLink>
        <NavLink className={({ isActive }) => isActive ? "bg-btn3  px-4 py-2 rounded-md" : "px-4 py-2 hover:bg-btn1 hover:text-gray-500 rounded-md "} to="/contact">Contact</NavLink>
    </>
    return (
        <div className=''>

            {/* navbar */}
            <div className="max-lg:collapse px-2 lg:px-0 text-white lg:mb-17  shadow-sm  rounded-md">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar py-0 lg:py-4 px-3 lg:px-30 justify-between bg-btn2  ">
                    <div className="flex items-center">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <h1 className='lg:hidden'>MED<span className='text-btn3 '>IN</span></h1>
                    </div>
                    <div className="navbar-start pl-10 hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1   gap-3">
                            {link}
                        </ul>
                    </div>
                    <div className="navbar-end flex justify-end">
                        <input type="text" placeholder="Search" className="input input-bordered w-20 lg:w-64 text-black lg:w-auto" />
                        <NavLink to="/appoinment" className='bg-btn1 hover:bg-btn3 rounded-3xl text-secondary hidden lg:flex font-semibold p-2 ml-5'>Appointment</NavLink>
                        {
                            user ? <NavLink onClick={handleLogOut} className='bg-btn1 hover:bg-btn3 rounded-3xl text-secondary hidden lg:flex font-semibold p-2 ml-5'>Log out</NavLink> :
                                <NavLink to="/loginPortal" className='bg-btn1 hover:bg-btn3 rounded-3xl text-secondary hidden lg:flex font-semibold p-2 ml-5'>Login</NavLink>
                        }
                        <div className='w-40 flex justi'>
                            {
                                user && <NavLink to="/dashbord" className='bg-btn1 hover:bg-btn3 rounded-3xl text-secondary hidden lg:flex font-semibold p-2 ml-5'> Dashbord</NavLink>
                            }
                        </div>


                    </div>
                </div>

                <div className="collapse-content text-black lg:hidden z-1">
                    <ul className="menu">
                        {link}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;