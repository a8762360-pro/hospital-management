import React from "react";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaPaperPlane,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-btn2 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo */}
                    <div>
                        <h2 className="text-4xl font-bold">
                            <span className="text-white">MED</span>
                            <span className="text-accent">IN</span>
                        </h2>

                        <p className="mt-5 text-gray-300 leading-7 text-sm">
                            Leading the Way in Medical
                            <br />
                            Excellence, Trusted Care.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Important Links
                        </h3>

                        <ul className="space-y-3 text-gray-300 flex flex-col">

                            <NavLink to="/appoinment" >Appointment</NavLink>
                            <NavLink to="/doctors" >Doctors</NavLink>
                            <NavLink to="/services" >Services</NavLink>
                            <NavLink to="aboutus" >About Us</NavLink>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-gray-300">
                            <p>Call: 01837097197</p>
                            <p>Email: a8762360@gmail.com</p>
                            <p>Address: Mirpur-11, Dhaka</p>
                            <p>Some country</p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Newsletter
                        </h3>

                        <div className="flex bg-btn1 rounded-md overflow-hidden">

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-transparent px-4 py-3 w-full outline-none text-secondary placeholder:text-[#44517c]"
                            />

                            <button className="px-5 text-secondary hover:bg-[#9fc0ff] duration-300">
                                <FaPaperPlane />
                            </button>

                        </div>
                    </div>

                </div>

                <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

                    <p className="text-sm text-gray-300 text-center md:text-left">
                        © 2026 MEDIN All Rights Reserved by knhs
                    </p>

                    <div className="flex items-center gap-3">

                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-btn1 text-secondary flex items-center justify-center hover:scale-110 duration-300"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-btn1 text-secondary flex items-center justify-center hover:scale-110 duration-300"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-btn1 text-secondary flex items-center justify-center hover:scale-110 duration-300"
                        >
                            <FaInstagram />
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;