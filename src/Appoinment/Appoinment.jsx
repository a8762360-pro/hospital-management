import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import {
    FaPhoneAlt,
    FaChevronDown,
} from "react-icons/fa";
import { AuthContext } from '../AuthContext/AuthContext';
import useAxiosSecure from '../hook/UseAxiosSeceure';

const Appoinment = () => {
    const { user } = use(AuthContext);
    const [ doctors, setDoctors ] = useState([]);
    const doctorData = (id) => {
        console.log(id)
    }
    const axiosSeceure = useAxiosSecure();

    const handleApponment = (e) => {
        e.preventDefault();
        const status = 'pending';

        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const date = e.target.date.value;
        const time = e.target.time.value;
        const message = e.target.message.value;
        const gender = e.target.gender.value;
        const doctor = e.target.doctor.value;
        const department = e.target.department.value;
        console.log(name, email, number, date, message, time, gender, doctor, department)
        const newAppinment = {
            name, email, number, date, message, time, gender, doctor, department, status
        }
        axiosSeceure.post('http://localhost:3000/appoinments', newAppinment)
            .then(result => {
                console.log(result.data);
                alert("your appointment submit to successfully")
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        axiosSeceure.get('http://localhost:3000/doctors')
            .then(result => {
                console.log(result.data);
                setDoctors(result.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <h1 className='text-secondary pb-5 text-5xl text-center font-bold'>Our Doctors</h1>

            <section className="max-w-7xl mx-auto px-5 py-20">

                <div className="grid lg:grid-cols-2 gap-8">

                    <div>

                        <h2 className="text-5xl font-bold text-secondary">
                            Book an Appointment
                        </h2>

                        <p className="mt-5 text-gray-600 leading-7 max-w-lg">
                            Schedule your visit with our experienced doctors. Fill out the
                            appointment form and our team will contact you shortly to confirm
                            your booking.
                        </p>

                        <form onSubmit={handleApponment} className="mt-10 overflow-hidden rounded-md shadow-lg">

                            <div className="grid md:grid-cols-2">

                                <input name='name'
                                    type="text"
                                    placeholder="Patient Name"
                                    className="bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none"
                                />

                                <div className="relative">
                                    <select name='gender' className="w-full appearance-none bg-btn2 text-white border border-white/20 px-5 py-4 outline-none">
                                        <option>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>

                                    <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                                </div>

                            </div>

                            <div className="grid md:grid-cols-2">

                                <input name='email'
                                    type="email"
                                    placeholder="Email" defaultValue={user.email} readOnly
                                    className="bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none"
                                />

                                <input name='number'
                                    type="number"
                                    placeholder="Phone"
                                    className="bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none"
                                />

                            </div>

                            {/* Row 3 */}
                            <div className="grid md:grid-cols-2">

                                <input name='date'
                                    type="date"
                                    className="bg-btn2 text-white border border-white/20 px-5 py-4 outline-none"
                                />

                                <div className="relative">
                                    <select name='time' className="w-full appearance-none bg-btn2 text-white border border-white/20 px-5 py-4 outline-none">
                                        <option>Time</option>
                                        <option>09:00 AM</option>
                                        <option>10:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>12:00 PM</option>
                                    </select>

                                    <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                                </div>

                            </div>

                            <div className="grid md:grid-cols-2">

                                <div className="relative">
                                    {/* onChange ইভেন্টটি এখানে <select> ট্যাগে দিন */}
                                    <select
                                        name='doctor'
                                        onChange={(e) => setDoctor(e.target.value)}
                                        className="w-full appearance-none bg-btn2 text-white border border-white/20 px-5 py-4 outline-none"
                                    >
                                        <option value="">Select Doctor</option>

                                        {
                                            doctors?.map((d, index) => (
                                                <option key={d._id || index} value={d.name}>
                                                    {d.name}
                                                </option>
                                            ))
                                        }
                                    </select>

                                    <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                                </div>

                                <div className="relative">
                                    <select name='department' className="w-full appearance-none bg-btn2 text-white border border-white/20 px-5 py-4 outline-none">
                                        <option>Department</option>
                                        <option>Cardiology</option>
                                        <option>Neurology</option>
                                        <option>Dental</option>
                                        <option>Orthopedic</option>
                                    </select>

                                    <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                                </div>

                            </div>

                            <textarea name='message'
                                rows="6"
                                placeholder="Message"
                                className="w-full bg-btn2 text-white placeholder:text-gray-300 border border-white/20 px-5 py-4 outline-none resize-none"
                            ></textarea>

                            <button className="w-full py-4 bg-btn1 text-secondary font-bold hover:bg-primary hover:text-white duration-300">
                                SUBMIT
                            </button>

                        </form>

                    </div>

                    <div className="bg-btn2 text-white rounded-md p-10 shadow-lg">

                        <h2 className="text-5xl font-bold mb-10">
                            Schedule Hours
                        </h2>

                        <div className="space-y-6">

                            {[
                                [ "Monday", "09:00 AM - 07:00 PM" ],
                                [ "Tuesday", "09:00 AM - 07:00 PM" ],
                                [ "Wednesday", "09:00 AM - 07:00 PM" ],
                                [ "Thursday", "09:00 AM - 07:00 PM" ],
                                [ "Friday", "09:00 AM - 07:00 PM" ],
                                [ "Saturday", "09:00 AM - 07:00 PM" ],
                                [ "Sunday", "Closed" ],
                            ].map(([ day, time ]) => (
                                <div
                                    key={day}
                                    className="flex items-center justify-between border-b border-white/20 pb-3"
                                >
                                    <span>{day}</span>

                                    <span className="text-xl">—</span>

                                    <span>{time}</span>
                                </div>
                            ))}

                        </div>

                        <div className="border-t border-white/30 mt-10 pt-8 flex items-center gap-5">

                            <div className="w-16 h-16 rounded-full border border-white flex justify-center items-center">
                                <FaPhoneAlt className="text-2xl" />
                            </div>

                            <div>

                                <h3 className="text-2xl font-bold">
                                    Emergency
                                </h3>
                                <p className="text-xl">
                                    (+237) 681-812-255
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default Appoinment;