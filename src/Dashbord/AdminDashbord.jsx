import React from "react";
import {
    FaUserMd,
    FaUsers,
    FaCalendarCheck,
    FaNewspaper,
    FaMoneyBillWave,
} from "react-icons/fa";

const AdminDashbord = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-[#1F2B6C]">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Welcome back! Here's today's hospital overview.
                    </p>
                </div>

                <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt=""
                    className="w-14 h-14 rounded-full border-4 border-white shadow"
                />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Doctors</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">
                                84
                            </h2>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-blue-100 flex justify-center items-center">
                            <FaUserMd className="text-3xl text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Patients</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">
                                1,254
                            </h2>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-green-100 flex justify-center items-center">
                            <FaUsers className="text-3xl text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Appointments</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">
                                326
                            </h2>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-yellow-100 flex justify-center items-center">
                            <FaCalendarCheck className="text-3xl text-yellow-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Revenue</p>
                            <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">
                                $52K
                            </h2>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-purple-100 flex justify-center items-center">
                            <FaMoneyBillWave className="text-3xl text-purple-600" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="grid lg:grid-cols-3 gap-6 mt-10">

                {/* Recent Appointments */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-[#1F2B6C] mb-6">
                        Recent Appointments
                    </h2>

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Alomgir</td>
                                <td>Dr. James Carter</td>
                                <td>25 Jul</td>
                                <td>
                                    <span className="badge badge-warning">
                                        Pending
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>Sakib</td>
                                <td>Dr. Emily</td>
                                <td>26 Jul</td>
                                <td>
                                    <span className="badge badge-success">
                                        Approved
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td>Nusrat</td>
                                <td>Dr. John</td>
                                <td>27 Jul</td>
                                <td>
                                    <span className="badge badge-error">
                                        Cancelled
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Latest News */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-[#1F2B6C] mb-6">
                        Latest News
                    </h2>

                    <div className="space-y-5">

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex justify-center items-center">
                                <FaNewspaper className="text-blue-600" />
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    New MRI Machine Installed
                                </h3>
                                <p className="text-sm text-gray-500">
                                    2 hours ago
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center">
                                <FaNewspaper className="text-green-600" />
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    Free Health Camp
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Yesterday
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex justify-center items-center">
                                <FaNewspaper className="text-purple-600" />
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    Blood Donation Program
                                </h3>
                                <p className="text-sm text-gray-500">
                                    3 days ago
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDashbord;