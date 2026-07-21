import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router';
import Doctor from './Doctor';

const Doctors = () => {
    const [ doctors, setDoctors ] = useState([]);
    console.log(doctors)

    useEffect(() => {
        axios.get("http://localhost:3000/doctors")
            .then((result) => {
                setDoctors(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <h1 className='text-secondary pb-5 text-5xl text-center font-bold'>Our Doctors</h1>
            {/* doctors */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <Suspense fallback={<h1>loading...</h1>}>
                    {
                        doctors.map(doctor =>
                            <Doctor key={doctor._id} doctor={doctor}></Doctor>
                        )
                    }
                </Suspense>
            </div>

        </div>
    );
};

export default Doctors;