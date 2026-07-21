import React from "react";
import { FaCalendarCheck, FaUserInjured, FaClock, FaNotesMedical, FaStethoscope } from "react-icons/fa";

const DoctorDashbord = () => {
    return (
        <div className="bg-gray-100 min-h-screen max-w-7xl mx-auto p-8">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-[#1F2B6C]">Doctor Dashboard</h1>
                    <p className="text-gray-500 mt-2">Welcome back, Dr. James Carter.</p>
                </div>

                <img src="https://i.pravatar.cc/100?img=11" alt="" className="w-14 h-14 rounded-full border-4 border-white shadow" />
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Today's Patients</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">18</h2>
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
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">12</h2>
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
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">6</h2>
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
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">8h</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex justify-center items-center">
                            <FaClock className="text-3xl text-purple-600" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="grid lg:grid-cols-3 gap-6 mt-10">

                {/* Today's Appointments */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-[#1F2B6C] mb-6">Today's Appointments</h2>

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
                            <tr>
                                <td>Alomgir Islam</td>
                                <td>09:30 AM</td>
                                <td>Cardiology</td>
                                <td><span className="badge badge-success">Completed</span></td>
                            </tr>

                            <tr>
                                <td>Rakib Hasan</td>
                                <td>10:30 AM</td>
                                <td>Cardiology</td>
                                <td><span className="badge badge-warning">Pending</span></td>
                            </tr>

                            <tr>
                                <td>Nusrat Jahan</td>
                                <td>11:15 AM</td>
                                <td>Cardiology</td>
                                <td><span className="badge badge-info">Ongoing</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Doctor Profile */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex flex-col items-center">
                        <img src="https://i.pravatar.cc/150?img=11" alt="" className="w-28 h-28 rounded-full border-4 border-blue-100" />

                        <h2 className="text-2xl font-bold text-[#1F2B6C] mt-5">Dr. James Carter</h2>
                        <p className="text-gray-500">Cardiology Specialist</p>

                        <div className="mt-8 w-full space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Experience</span>
                                <span className="font-semibold">12 Years</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Patients</span>
                                <span className="font-semibold">2,340</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Rating</span>
                                <span className="font-semibold">4.9 ★</span>
                            </div>

                            <button className="w-full mt-6 bg-[#1F2B6C] text-white py-3 rounded-lg hover:bg-[#159EEC] duration-300">
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