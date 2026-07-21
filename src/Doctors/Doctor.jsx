import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Doctor = ({doctor}) => {
    return (
        <div>
            <div key={doctor._id} className="carousel-item rounded-md overflow-hidden flex flex-col m-5 shadow-md hover:shadow-2xl duration-300 bg-white">

                {/* Doctor Image */}
                <img src={doctor.image} alt={doctor.name} className="w-full  object-cover"
                />

                {/* Content */}
                <div className="bg-btn1 text-center py-8 px-5">

                    <h2 className="text-3xl font-bold text-secondary">{doctor.name}
                    </h2>

                    <p className="uppercase tracking-[3px] text-secondary mt-2 font-medium">
                        {doctor.specialist}
                    </p>

                    <div className="flex justify-center gap-4 mt-7">

                        <a
                            href={doctor.linkedin}
                            target="_blank"
                            className="w-11 h-11 rounded-full bg-btn2 flex items-center justify-center text-white hover:bg-primary duration-300"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href={doctor.facebook}
                            target="_blank"
                            className="w-11 h-11 rounded-full bg-btn2 flex items-center justify-center text-white hover:bg-primary duration-300"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href={doctor.instagram}
                            target="_blank"
                            className="w-11 h-11 rounded-full bg-btn2 flex items-center justify-center text-white hover:bg-primary duration-300"
                        >
                            <FaInstagram />
                        </a>

                    </div>
                </div>

                {/* Button */}
                <NavLink to={`/doctorDetails/${doctor._id}`} className="w-full text-center bg-btn2 text-white py-4 text-lg hover:bg-primary duration-300">
                    View Profile
                </NavLink>

            </div>
        </div>
    );
};

export default Doctor;