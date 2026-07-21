import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";


const Contact = () => {
    // const handlePostAppoinment = (e) => {
    //     e.preventDefault();
    //     console.log("submit")
    // }
    return (
        <div className='max-w-7xl mx-auto my-5'>
            <h1 className='text-secondary pb-8 font-bold text-4xl text-center'>Contact</h1>
            <div className='flex justify-center '>
                <iframe className='border border-gray-200 w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5049.880892303517!2d90.39521066952115!3d23.72546338453626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e6474187cf%3A0xb3d3783755659522!2sDhaka%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1784503038456!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <section className="max-w-7xl mx-auto px-5 py-20">

                <div className="grid lg:grid-cols-2 gap-8">

                    <form className="overflow-hidden rounded-md">
                        <p className="uppercase tracking-[4px] text-primary font-bold text-sm">Get In Touch</p>
                        <h2 className="text-5xl font-bold text-secondary mt-2 mb-10">Contact</h2>

                        <div className="grid md:grid-cols-2 ">
                            <input type="text" placeholder="Name" className="bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none" />
                            <input type="email" placeholder="Email" className="bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none" />
                        </div>

                        <input type="text" placeholder="Subject" className="w-full bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none" />

                        <textarea rows="8" placeholder="Message" className="w-full bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none resize-none"></textarea>

                        <button type="submit" className="w-full bg-btn1 text-secondary font-semibold py-4 hover:bg-primary hover:text-white duration-300">SUBMIT</button>
                    </form>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        <div className="bg-btn1 p-8 rounded-md">
                            <FaPhoneAlt className="text-4xl text-secondary mb-6" />
                            <h3 className="font-bold text-secondary uppercase">Emergency</h3>
                            <p className="mt-4 text-secondary">(+237) 681-812-255</p>
                            <p className="text-secondary">(+237) 666-331-894</p>
                        </div>

                        <div className="bg-btn2 text-white p-8 rounded-md">
                            <FaMapMarkerAlt className="text-4xl mb-6" />
                            <h3 className="font-bold uppercase">Location</h3>
                            <p className="mt-4">123 Health Street</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>

                        <div className="bg-btn1 p-8 rounded-md">
                            <FaEnvelope className="text-4xl text-secondary mb-6" />
                            <h3 className="font-bold text-secondary uppercase">Email</h3>
                            <p className="mt-4 text-secondary">info@medinhospital.com</p>
                            <p className="text-secondary">support@medinhospital.com</p>
                        </div>

                        <div className="bg-btn1 p-8 rounded-md">
                            <FaClock className="text-4xl text-secondary mb-6" />
                            <h3 className="font-bold text-secondary uppercase">Working Hours</h3>
                            <p className="mt-4 text-secondary">Mon - Sat: 09:00 AM - 08:00 PM</p>
                            <p className="text-secondary">Sunday: Emergency Only</p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;