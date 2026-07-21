import React from "react";
import { FaCalendarCheck, FaUsers, FaClipboardList, FaMoneyBillWave, FaUserTie } from "react-icons/fa";

const StaffDashbord = () => {
    return (
        <div className="bg-gray-100 min-h-screen max-w-7xl mx-auto p-8">

            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-[#1F2B6C]">Staff Dashboard</h1>
                    <p className="text-gray-500 mt-2">Welcome back, Staff Member.</p>
                </div>

                <img src="https://i.pravatar.cc/100?img=18" alt="" className="w-14 h-14 rounded-full border-4 border-white shadow" />
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Today's Patients</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">42</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex justify-center items-center"><FaUsers className="text-3xl text-blue-600" /></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Appointments</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">26</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-green-100 flex justify-center items-center"><FaCalendarCheck className="text-3xl text-green-600" /></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Pending Bills</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">15</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-yellow-100 flex justify-center items-center"><FaMoneyBillWave className="text-3xl text-yellow-600" /></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Tasks</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">9</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex justify-center items-center"><FaClipboardList className="text-3xl text-purple-600" /></div>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="grid lg:grid-cols-3 gap-6 mt-10">

                {/* Patient List */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-[#1F2B6C] mb-6">Today's Patient List</h2>

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Alomgir Islam</td>
                                <td>Dr. James Carter</td>
                                <td>09:30 AM</td>
                                <td><span className="badge badge-success">Checked In</span></td>
                            </tr>

                            <tr>
                                <td>Rakib Hasan</td>
                                <td>Dr. Emily Stone</td>
                                <td>10:30 AM</td>
                                <td><span className="badge badge-warning">Waiting</span></td>
                            </tr>

                            <tr>
                                <td>Nusrat Jahan</td>
                                <td>Dr. John Smith</td>
                                <td>11:00 AM</td>
                                <td><span className="badge badge-info">Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Staff Profile */}
                <div className="bg-white rounded-xl shadow p-6">
                    <div className="flex flex-col items-center">
                        <img src="https://i.pravatar.cc/150?img=18" alt="" className="w-28 h-28 rounded-full border-4 border-blue-100" />

                        <h2 className="text-2xl font-bold text-[#1F2B6C] mt-5">Sarah Wilson</h2>
                        <p className="text-gray-500">Reception Staff</p>

                        <div className="mt-8 w-full space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Department</span>
                                <span className="font-semibold">Reception</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Shift</span>
                                <span className="font-semibold">Morning</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-500">Experience</span>
                                <span className="font-semibold">5 Years</span>
                            </div>

                            <button className="w-full mt-6 bg-[#1F2B6C] text-white py-3 rounded-lg hover:bg-[#159EEC] duration-300 flex justify-center items-center gap-2">
                                <FaUserTie />
                                View Profile
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default StaffDashbord;