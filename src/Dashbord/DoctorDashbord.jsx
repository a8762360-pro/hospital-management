import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { FaCalendarCheck, FaUserInjured, FaClock, FaNotesMedical, FaStethoscope } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthContext";

const DoctorDashbord = () => {
    const { user } = use(AuthContext);
    const today = new Date();
    console.log(user.experience)
    const [ appoinments, setAppoinments ] = useState([]);
    console.log(appoinments)
    useEffect(() => {
        axios.get('http://localhost:3000/appoinments')
            .then(data => {
                setAppoinments(data.data)
            })

    }, [])
    return (
        <div className="bg-gray-100 min-h-screen max-w-7xl mx-auto p-8">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-secondary">Doctor Dashboard</h1>
                    <p className="text-gray-500 mt-2">Welcome back, Dr. {user.name}</p>
                </div>

            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Today's Patients</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">0</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex justify-center items-center">
                            <FaUserInjured className="text-3xl text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Appointments</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">{appoinments.length}</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-green-100 flex justify-center items-center">
                            <FaCalendarCheck className="text-3xl text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Pending Reports</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">6</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-yellow-100 flex justify-center items-center">
                            <FaNotesMedical className="text-3xl text-yellow-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Working Hours</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">8h</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex justify-center items-center">
                            <FaClock className="text-3xl text-purple-600" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="grid lg:grid-cols-3 gap-6 mt-10">

                {/* Today's Appointments */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-secondary mb-6">Today's Appointments</h2>

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Time</th>
                                <th>Department</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                appoinments.map(appoin => 
                                    <tr>
                                        <td> {appoin.name}</td>
                                        <td>{appoin.time}</td>
                                        <td>{appoin.department}</td>
                                        <td><span className="badge badge-success">{appoin.status}</span></td>
                                    </tr>
                                )
                            }



                        </tbody>
                    </table>
                </div>

                {/* Doctor Profile */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex flex-col items-center">
                        <img src={user.Image} alt="" className="w-28 h-28 rounded-full  " />

                        <h2 className="text-2xl font-bold text-secondary mt-5">Dr.{user.name}</h2>
                        <p className="text-gray-500">Cardiology Specialist</p>

                        <div className="mt-8 w-full space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Experience</span>
                                <span className="font-semibold">{user.experience} Years</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Patients</span>
                                <span className="font-semibold">2,340</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Rating</span>
                                <span className="font-semibold">4.9 ★</span>
                            </div>

                            <button className="w-full mt-6 bg-btn2 text-white py-3 rounded-lg hover:bg-btn3 duration-300">
                                View Full Profile
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DoctorDashbord;