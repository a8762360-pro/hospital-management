import axios from 'axios';
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';


const Contact = () => {
    const sendMessage = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        console.log('send', name, email, subject, message)
        const postMessage = {
            name, email, subject, message
        }
        axios.post('http://localhost:3000/messages', postMessage)
            .then(data => {
                console.log(data.data)
            })
        alert(" go to your message")
    }
    return (
        <div className='max-w-7xl mx-auto my-5'>
            <h1 className='text-secondary pb-8 font-bold text-4xl text-center'>Contact</h1>
            <div className='flex justify-center '>
                <iframe className='border border-gray-200 w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5049.880892303517!2d90.39521066952115!3d23.72546338453626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e6474187cf%3A0xb3d3783755659522!2sDhaka%20Medical%20College%20Hospital!5e0!3m2!1sen!2sbd!4v1784503038456!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <section className="max-w-7xl mx-auto px-5 py-20">
                <div className="grid lg:grid-cols-2 gap-8">
                    <form onSubmit={sendMessage} className="overflow-hidden rounded-md">
                        <p className="uppercase tracking-[4px] text-primary font-bold text-sm">Get In Touch</p>
                        <h2 className="text-5xl font-bold text-secondary mt-2 mb-10">Contact</h2>

                        <div className="grid md:grid-cols-2 ">
                            <input name='name' required type="text" placeholder="Name" className="bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none" />
                            <input name='email' required type="email" placeholder="Email" className="bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none" />
                        </div>

                        <input name='subject' required type="text" placeholder="Subject" className="w-full bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none" />
                        <textarea name='message' required rows="8" placeholder="Message" className="w-full bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none resize-none"></textarea>
                        <button type="submit" className="w-full bg-btn1 text-secondary font-semibold py-4 hover:bg-primary hover:text-white duration-300">SUBMIT</button>
                    </form>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="bg-btn1 rounded-md p-8 text-secondary hover:bg-btn2 hover:text-white duration-300">
                            <FiPhoneCall size={34} />
                            <h2 className="font-bold text-xl mt-6 mb-5">
                                EMERGENCY
                            </h2>
                            <p>01812589426</p>
                            <p>01887873792</p>
                        </div>

                        <div className="bg-btn1 rounded-md p-8 text-secondary hover:bg-btn2 hover:text-white duration-300">
                            <FiMapPin size={34} />
                            <h2 className="font-bold text-xl mt-6 mb-5">
                                LOCATION
                            </h2>
                            <p>Mirpur</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>

                        <div className="bg-btn1  duration-300bg-[#BFD2F8] rounded-md p-8 text-secondary hover:bg-btn2 hover:text-white duration-300">
                            <FiMail size={34} />
                            <h2 className="font-bold text-xl mt-6 mb-5">
                                EMAIL
                            </h2>
                            <p>medinHospital@gmail.com</p>
                            <p>emergencyMedin@gmail.com</p>
                        </div>

                        {/* Working Hours */}
                        <div className="bg-btn1  text-secondary hover:bg-btn2 hover:text-white duration-300bg-[#BFD2F8] rounded-md p-8   duration-300">
                            <FiClock size={34} />
                            <h2 className="font-bold text-xl mt-6 mb-5">
                                WORKING HOURS
                            </h2>
                            <p>Sat-Fri 09:00-20:00</p>
                            <p>Sunday Emergency Only</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;