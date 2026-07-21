import React from 'react';
import NavBar from '../NavBar/NavBar';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Header = () => {
    return (
        <div className=''>
            {/* header  */}
            <div className='flex  justify-between px-2 py-2 lg:p-5 lg:px-40'>
                <div>
                    <h1 className='text-2xl hidden lg:flex font-bold'>MED<span className='text-[#159EEC] '>IN</span></h1>
                </div>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <FaPhoneAlt size={30} />
                        </div>
                        <div>
                            <h1 className=''>Emergency</h1>
                            <h1 className='text-[#159EEC] '>018xxxxx</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <MdOutlineWatchLater size={30} />
                        </div>
                        <div>
                            <h1>Work Hour</h1>
                            <h1 className='text-[#159EEC] '>09:00 - 20:00 Everyday</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <FaLocationDot size={30} />
                        </div>
                        <div>
                            <h1>Location</h1>
                            <h1 className='text-[#159EEC] '>Dhaka</h1>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;