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

                <h1 className="text-5xl font-bold text-secondary mt-3">
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

            </section>
        </section>
    );
};

export default Services;