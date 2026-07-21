import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { NavLink } from 'react-router';

const LoginPortal = () => {
    return (
        <div className='my-10'>
            {/* login */}
            <div className="w-[360px] rounded-xl min-h-screen bg-btn1 mx-auto shadow-2xl">
                {/* Body */}
                <div className="px-8 pt-14">

                    <h2 className="text-4xl font-bold text-center text-secondary">
                        Login Portal
                    </h2>

                    <p className="text-center text-gray-600 mt-3 mb-12">
                        Choose how you want to continue
                    </p>

                    <div className="space-y-5">

                        <NavLink
                            to="/login/patient"
                            className="block w-full text-center bg-btn2 text-white py-4 rounded-full text-lg font-medium hover:bg-btn3 duration-300"
                        >
                            Patient Login
                        </NavLink>

                        <NavLink
                            to="/login/doctor"
                            className="block w-full text-center bg-btn2 text-white py-4 rounded-full text-lg font-medium hover:bg-btn3 duration-300"
                        >
                            Doctor Login
                        </NavLink>

                        <NavLink
                            to="/login/staff"
                            className="block w-full text-center bg-btn2 text-white py-4 rounded-full text-lg font-medium hover:bg-btn3 duration-300"
                        >
                            Staff Login
                        </NavLink>

                        <NavLink
                            to="/login/admin"
                            className="block w-full text-center bg-btn2 text-white py-4 rounded-full text-lg font-medium hover:bg-btn3 duration-300"
                        >
                            Admin Login
                        </NavLink>

                    </div>

                    <div className="mt-14 text-center">

                        <p className="text-gray-600 mb-5">
                            Don't have an account?
                        </p>

                        <NavLink to="/register" className="bg-white text-secondary px-14 py-4 rounded-full font-bold text-xl border-2 border-btn2 hover:bg-btn2 hover:text-white duration-300">
                            Register
                        </NavLink>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default LoginPortal;