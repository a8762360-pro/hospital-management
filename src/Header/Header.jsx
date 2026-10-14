
import React from 'react';
import NavBar from '../NavBar/NavBar';
import { FaHeartbeat, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className="w-full bg-white">

            {/* Top Information Bar */}
            <div className="border-b border-gray-100">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:px-8">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-btn2 text-white shadow-md">
                            <FaHeartbeat className="text-2xl" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">
                                MED<span className="text-btn3">IN</span>
                            </h1>
                            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-500">
                                Healthcare Center
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:w-auto lg:gap-8">

                        {/* Emergency */}
                        <a
                            href="tel:01887873792"
                            className="flex items-center justify-center gap-3 rounded-xl p-2 transition hover:bg-blue-50 sm:justify-start"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-btn3">
                                <FaPhoneAlt className="text-xl" />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    Emergency
                                </p>
                                <p className="whitespace-nowrap text-base font-semibold text-btn3">
                                    01887873792
                                </p>
                            </div>
                        </a>

                        {/* Working Hours */}
                        <div className="flex items-center justify-center gap-3 rounded-xl p-2 sm:justify-start">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-btn3">
                                <MdOutlineWatchLater className="text-2xl" />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    Work Hours
                                </p>
                                <p className="whitespace-nowrap text-base font-semibold text-btn3">
                                    09:00 - 20:00 Everyday
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-center gap-3 rounded-xl p-2 sm:justify-start">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-btn3">
                                <FaLocationDot className="text-xl" />
                            </div>

                            <div>
                                <p className="text-sm font-medium text-gray-500">
                                    Our Location
                                </p>
                                <p className="whitespace-nowrap text-base font-semibold text-btn3">
                                    Mirpur-11, Dhaka
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Navigation */}
            <NavBar />

        </header>
    );
};

export default Header;