import React from 'react';
import doctor from './doctors.webp'
import { FaCalendarAlt } from "react-icons/fa";
import mans from './mans.png'
import { IoCashOutline } from "react-icons/io5";
import { NavLink } from 'react-router';
const Home = () => {
    return (
        <div className="h-screen px-12 p pt-25 lg:pt-67 lg:px-40 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://wallpaperaccess.com/full/7221449.jpg)` }}>
            <h1 className='text-primary text-sm lg:text-2xl font-bold '>Caring for Life</h1>
            <h1 className='text-secondary w-200 text-2xl pb-8 lg:pb-16 lg:text-5xl'>Leading the Way <br/>
                in Medical Excellence</h1>
            <NavLink to="/services" className='btn p-2 px-3 text-secondary bg-btn1 rounded-3xl'>Our services</NavLink>
            <div className='flex gap-7 mt-8 '>
                <NavLink to="/appoinment" className='bg-btn2 rounded-md text-white flex items-center gap-12 p-6'>
                    <h1>Book an Appointment</h1>
                    <FaCalendarAlt size={40}/>
                </NavLink>
                <div className='bg-btn1 rounded-md text-secondary flex items-center gap-12 p-6'>
                    <h1>Find Doctors</h1>
                    <img src={mans} alt=""/>
                </div>
                <div className='bg-btn3 rounded-md text-white flex items-center gap-12 p-6'>
                    <h1>Online payment</h1>
                    <IoCashOutline size={45}/>
                </div>
            </div>
        </div>
    );
};

export default Home;