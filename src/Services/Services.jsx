import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    FaHandHoldingMedical,
    FaAmbulance,
    FaTooth,
    FaHeartbeat,
    FaSyringe,
    FaFlask,
} from "react-icons/fa";
import { FiClock, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const iconMap = {
    FaHandHoldingMedical,
    FaAmbulance,
    FaTooth,
    FaHeartbeat,
    FaSyringe,
    FaFlask,
};

const Services = () => {
    const [ services, setServices ] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/services")
            .then((result) => {
                setServices(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-5 py-20">
            <div className="text-center mb-14">
                <p className="uppercase tracking-[4px] text-primary font-bold">
                    CARE YOU CAN TRUST
                </p>

                <h1 className="text-5xl font-bold text-[#1F2B6C] mt-3">
                    Our Services
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service) => {
                    const Icon = iconMap[ service.icon ];

                    return (
                        <div
                            key={service._id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl duration-300"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-72 object-cover"
                                />

                                {/* Icon */}
                                <div className="absolute -bottom-8 right-8 w-16 h-16 rounded-full bg-btn2 flex items-center justify-center">
                                    {Icon && <Icon className="text-white text-3xl" />}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-12 p-6">
                                <h2 className="text-3xl font-bold text-secondary">
                                    {service.title}
                                </h2>

                                <p className="mt-4 text-gray-500 leading-7">
                                    {service.description}
                                </p>

                                <button className="mt-6 text-primary font-semibold hover:underline">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
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
                    <div className="bg-btn1 rounded-md p-8 text-secondary hover:bg-btn2 hover:text-white duration-300bg-[#BFD2F8] rounded-md p-8 text-[#1F2B6C] hover:bg-btn2 hover:text-white duration-300">

                        <FiClock size={34} />

                        <h2 className="font-bold text-xl mt-6 mb-5">
                            WORKING HOURS
                        </h2>

                        <p>Mon-Sat 09:00-20:00</p>
                        <p>Sunday Emergency Only</p>

                    </div>

                </div>

            </section>
        </section>
    );
};

export default Services;