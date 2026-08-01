import React, { use, useEffect, useState } from "react";
import { FaCalendarCheck, FaFileMedical, FaUserInjured, FaNotesMedical, FaClock } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthContext";
import axios from "axios";
import { FaTrash } from "react-icons/fa";


const PatientDashbord = () => {
    const [ appointments, setAppoinments ] = useState([]);
    console.log(appointments)
    const { user } = use(AuthContext);
    console.log(user)

    useEffect(() => {
        axios.get(`http://localhost:3000/appoinments/${user.email}`)
            .then(res => {
                console.log(res.data)
                setAppoinments(res.data)
            })
    }, [])
    return (
        <div className="bg-gray-100 min-h-screen max-w-7xl mx-auto p-8 mb-10">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-secondary">Patient Dashboard</h1>
                    <p className="text-gray-500 mt-2">Welcome back, {user.name}</p>
                </div>

                {/* <img src={user.patientImage} alt="" className="w-14 h-14 rounded-full  shadow" /> */}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Appointments</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">{appointments.length}</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex justify-center items-center"><FaCalendarCheck className="text-3xl text-blue-600" /></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Prescriptions</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">5</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-green-100 flex justify-center items-center"><FaNotesMedical className="text-3xl text-green-600" /></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Medical Reports</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">3</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-yellow-100 flex justify-center items-center"><FaFileMedical className="text-3xl text-yellow-600" /></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Pending Bills</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">25000</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-red-100 flex justify-center items-center"><FaClock className="text-3xl text-red-600" /></div>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="grid lg:grid-cols-3 gap-6 mt-10">

                {/* Appointment Table */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-secondary mb-6">My Appointments</h2>

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {

                                appointments.map(appoinment => <tr>
                                    <td>{appoinment.doctor}</td>
                                    <td>{appoinment.date}</td>
                                    <td>{appoinment.time}</td>
                                    <td><span className="badge badge-warning">Pending</span></td>

                                    
                                </tr>)}



                        </tbody>
                    </table>
                </div>

                {/* Patient Profile */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex flex-col items-center">
                        <img src={user.patientImage
                        } alt="" className="w-28 h-28 rounded-full border border-blue-100" />

                        <h2 className="text-2xl font-bold text-secondary mt-5">{user.name}</h2>
                        <p className="text-gray-500">{user.role}</p>

                        <div className="mt-8 w-full space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Age</span>
                                <span className="font-semibold">{user.patientAge} Years</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Blood Group</span>
                                <span className="font-semibold">{user.patientBlod}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Gender</span>
                                <span className="font-semibold">{user.patientGender}</span>
                            </div>

                            <button className="w-full mt-6 bg-[#1F2B6C] text-white py-3 rounded-lg hover:bg-[#159EEC] duration-300">
                                View Profile
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PatientDashbord;