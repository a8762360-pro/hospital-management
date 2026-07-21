import React, { useEffect, useState } from 'react';
import nurses from './nurse.webp'
import axios from 'axios';
import { FaCircle, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import doctorTalk from "./doctorsTalk copy.jpg"
import { FaEye, FaHeart } from "react-icons/fa";
import { FiPhoneCall, FiMapPin, FiMail, FiClock, } from "react-icons/fi";



const AboutUs = () => {
    const [ services, setServices ] = useState([]);
    console.log(services)
    const [ doctors, setDoctors ] = useState([]);
    const [ newses, setNewses ] = useState([]);

    console.log(services)
    useEffect(() => {
        axios.get('http://localhost:3000/services')
            .then(result => {
                setServices(result.data)

            })
        axios.get('http://localhost:3000/doctors')
            .then(result => {
                setDoctors(result.data);
                console.log(result.data)
            })
        axios.get('http://localhost:3000/news')
            .then(result => {
                setNewses(result.data);
                console.log(result.data)
            })
    }, [])

    return (
        <div className=''>
            <h1 className='text-secondary p-3  lg:p-8 text-5xl text-center'>About Hospital</h1>
            <section className="max-w-7xl  mx-auto px-5 lg:px-10 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <div>
                        <img
                            src={nurses}
                            alt="Doctors"
                            className="w-full h-[350px] lg:h-[480px] object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div>

                        <p className="uppercase tracking-[4px] text-primary font-bold text-sm mb-3">
                            Welcome To MEDIN General Hospital
                        </p>

                        <h2 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight mb-8">
                            Best Care for Your <br /> Good Health
                        </h2>

                        {/* Feature List */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10 mb-10">

                            {
                                services.map(ser => <div className='flex items-center gap-2'>
                                    <div className='bg-btn3 w-4 p-2 rounded-full'></div>
                                    <h1> {ser.title}</h1>
                                </div>)
                            }

                        </div>

                        <p className="text-gray-600 leading-8 mb-6">
                            At Medin Hospital, we are committed to delivering exceptional healthcare with compassion, integrity, and excellence. Our team of experienced doctors, skilled nurses, and dedicated healthcare professionals works tirelessly to provide personalized medical services tailored to every patient's needs. Equipped with modern technology and advanced medical facilities, we strive to ensure accurate diagnosis, effective treatment, and a comfortable healing environment. From preventive care to specialized treatments, our mission is to improve the health and well-being of our community while building lasting trust through quality care and outstanding patient experiences.
                        </p>


                    </div>
                </div>
            </section>
            <div className="carousel w-full">

                {/* Slide 1 */}
                <div
                    id="slide1"
                    className="carousel-item relative w-full h-[450px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${doctorTalk})` }}
                >
                    <div className="absolute inset-0 bg-btn2/75"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-6">
                        <h1 className="max-w-3xl text-white text-xl lg:text-3xl leading-relaxed">
                            "From the moment I arrived, the staff treated me with kindness and professionalism. The doctors explained every step of my treatment clearly, and I felt safe and cared for throughout my recovery."
                        </h1>

                        <h2 className="mt-8 text-2xl font-bold text-white">
                            — Sarah Johnson
                        </h2>

                        <p className="text-primary">Heart Patient</p>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div
                    id="slide2"
                    className="carousel-item relative w-full h-[450px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${doctorTalk})` }}
                >
                    <div className="absolute inset-0 bg-btn2/75"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-6">
                        <h1 className="max-w-3xl text-white text-xl lg:text-3xl leading-relaxed">
                            "The medical team provided exceptional care during my surgery. The facilities were clean, the nurses were incredibly supportive, and my recovery was faster than I expected. Thank you for making such a stressful time much easier."
                        </h1>

                        <h2 className="mt-8 text-2xl font-bold text-white">
                            — Michael Brown
                        </h2>

                        <p className="text-primary">Orthopedic Patient</p>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div
                    id="slide3"
                    className="carousel-item relative w-full h-[450px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${doctorTalk})` }}
                >
                    <div className="absolute inset-0 bg-btn2/75"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-6">
                        <h1 className="max-w-3xl text-white text-xl lg:text-3xl leading-relaxed">
                            "I had an excellent experience at this hospital. The appointment process was simple, the doctors were knowledgeable, and the entire staff was friendly and attentive."
                        </h1>

                        <h2 className="mt-8 text-2xl font-bold text-white">
                            — Emily Davis
                        </h2>

                        <p className="text-primary">General Patient</p>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex justify-between -translate-y-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            {/* doctors  */}
            {/* doctors  */}
            <div className="carousel carousel-center my-4 lg:my-10 rounded-box max-w-5xl mx-auto flex">
                {
                    doctors.map(doctor =>
                        <div key={doctor._id} className="carousel-item rounded-md overflow-hidden flex flex-col m-5 shadow-md hover:shadow-2xl duration-300 bg-white">

                            {/* Doctor Image */}
                            <img src={doctor.image} alt={doctor.name} className="w-full h-[320px] object-cover"
                            />

                            {/* Content */}
                            <div className="bg-[#BFD2F8] text-center py-8 px-5">

                                <h2 className="text-3xl font-bold text-[#1F2B6C]">{doctor.name}
                                </h2>

                                <p className="uppercase tracking-[3px] text-[#1F2B6C] mt-2 font-medium">
                                    {doctor.specialist}
                                </p>

                                <div className="flex justify-center gap-4 mt-7">

                                    <a
                                        href={doctor.linkedin}
                                        target="_blank"
                                        className="w-11 h-11 rounded-full bg-[#1F2B6C] flex items-center justify-center text-white hover:bg-primary duration-300"
                                    >
                                        <FaLinkedinIn />
                                    </a>

                                    <a
                                        href={doctor.facebook}
                                        target="_blank"
                                        className="w-11 h-11 rounded-full bg-[#1F2B6C] flex items-center justify-center text-white hover:bg-primary duration-300"
                                    >
                                        <FaFacebookF />
                                    </a>

                                    <a
                                        href={doctor.instagram}
                                        target="_blank"
                                        className="w-11 h-11 rounded-full bg-[#1F2B6C] flex items-center justify-center text-white hover:bg-primary duration-300"
                                    >
                                        <FaInstagram />
                                    </a>

                                </div>
                            </div>

                            {/* Button */}
                            <button className="w-full bg-[#1F2B6C] text-white py-4 text-lg hover:bg-primary duration-300">
                                View Profile
                            </button>

                        </div>)
                }

            </div>

            {/* newa */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-7xl mx-auto my-10'>
                {
                    newses.map(news =>
                        <div key={news._id} className="flex flex-col md:flex-row lg:flex-row bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl duration-300">

                            {/* Image */}
                            <div className="md:w-44 lg:w-48">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-52 md:h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 flex flex-col justify-between">

                                <div>
                                    <p className="text-primary text-sm mb-3">
                                        {new Date(news.date).toLocaleDateString("en-US", {
                                            weekday: "long",
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                        {" | "}
                                        By {news.author}
                                    </p>

                                    <h2 className="text-2xl font-semibold text-secondary leading-snug">
                                        {news.title}
                                    </h2>
                                </div>

                                <div className="flex items-center gap-6 mt-6">
                                    <div className="flex items-center gap-2 text-primary">
                                        <FaEye />
                                        <span className="text-gray-700">{news.views}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-red-500">
                                        <FaHeart />
                                        <span className="text-gray-700">{news.likes}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }
            </div>

            {/* contact section */}
            <section className="max-w-7xl mx-auto px-5 py-20">

                <div className="text-center mb-14">
                    <p className="uppercase tracking-[4px] text-primary font-bold">
                        GET IN TOUCH
                    </p>

                    <h2 className="text-5xl font-bold text-[#1F2B6C] mt-2">
                        Contact
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Emergency */}
                    <div className="bg-btn1 rounded-md p-8 text-secondary hover:bg-btn2 hover:text-white duration-300">

                        <FiPhoneCall size={34} />

                        <h2 className="font-bold text-xl mt-6 mb-5">
                            EMERGENCY
                        </h2>

                        <p>(+254) 717 783 146</p>
                        <p>(+254) 717 783 147</p>

                    </div>

                    {/* Location */}
                    <div className="bg-btn1 rounded-md p-8 text-secondary hover:bg-btn2 hover:text-white duration-300">

                        <FiMapPin size={34} />

                        <h2 className="font-bold text-xl mt-6 mb-5">
                            LOCATION
                        </h2>

                        <p>0123 Some Place</p>
                        <p>9876 Some Country</p>

                    </div>

                    {/* Email */}
                    <div className="bg-btn1 rounded-md p-8 text-secondary hover:bg-btn2 hover:text-white duration-300bg-[#BFD2F8] rounded-md p-8 text-[#1F2B6C] hover:bg-[#1F2B6C] hover:text-white duration-300">

                        <FiMail size={34} />

                        <h2 className="font-bold text-xl mt-6 mb-5">
                            EMAIL
                        </h2>

                        <p>dnx@gmail.com</p>
                        <p>medin@gmail.com</p>

                    </div>

                    {/* Working Hours */}
                    <div className="bg-btn1 rounded-md p-8 text-secondary hover:bg-btn2 hover:text-white duration-300bg-[#BFD2F8] rounded-md p-8 text-[#1F2B6C] hover:bg-[#1F2B6C] hover:text-white duration-300">

                        <FiClock size={34} />

                        <h2 className="font-bold text-xl mt-6 mb-5">
                            WORKING HOURS
                        </h2>

                        <p>Mon-Sat 09:00-20:00</p>
                        <p>Sunday Emergency Only</p>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default AboutUs;