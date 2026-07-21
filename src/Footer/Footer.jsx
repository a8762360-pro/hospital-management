import React from "react";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1F2B6C] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo */}
                    <div>
                        <h2 className="text-4xl font-bold">
                            <span className="text-white">MED</span>
                            <span className="text-[#159EEC]">IN</span>
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

                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="#">Appointment</a>
                            </li>
                            <li>
                                <a href="#">Doctors</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-gray-300">
                            <p>Call: (+254) 717 783 146</p>
                            <p>Email: medin@gmail.com</p>
                            <p>Address: 0123 Some place</p>
                            <p>Some country</p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-lg mb-5">
                            Newsletter
                        </h3>

                        <div className="flex bg-[#BFD2F8] rounded-md overflow-hidden">

                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-transparent px-4 py-3 w-full outline-none text-[#1F2B6C] placeholder:text-[#44517c]"
                            />

                            <button className="px-5 text-[#1F2B6C] hover:bg-[#9fc0ff] duration-300">
                                <FaPaperPlane />
                            </button>

                        </div>
                    </div>

                </div>

                <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

                    <p className="text-sm text-gray-300 text-center md:text-left">
                        © 2021 MEDIN All Rights Reserved by knhs
                    </p>

                    <div className="flex items-center gap-3">

                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-[#BFD2F8] text-[#1F2B6C] flex items-center justify-center hover:scale-110 duration-300"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-[#BFD2F8] text-[#1F2B6C] flex items-center justify-center hover:scale-110 duration-300"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 rounded-full bg-[#BFD2F8] text-[#1F2B6C] flex items-center justify-center hover:scale-110 duration-300"
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