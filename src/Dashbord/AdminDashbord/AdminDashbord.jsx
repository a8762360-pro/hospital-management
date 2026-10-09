import React, { useContext, useEffect, useState } from "react";
import {
    FaUserMd,
    FaUsers,
    FaCalendarCheck,
    FaNewspaper,
    FaMoneyBillWave,
    FaCheck,
    FaTimes
} from "react-icons/fa";
import useAxiosSecure from "../../hook/UseAxiosSeceure";
import { AuthContext } from "../../AuthContext/AuthContext";
import Doctor from "./Doctor/AllDoctor";
import Patients from "./Patients/AllPatients";
import { NavLink } from "react-router";
import RecentAppoinments from "./RecentAppointments/RecentAppoinments";
// import useAxiosSecure from "../../hook/UseAxiosSeceure";
// import { AuthContext } from "../../AuthContext/AuthContext";

const AdminDashbord = () => {
    const axiosSecure = useAxiosSecure();
    const [ messages, setMessages ] = useState([]);
    const [ doctorRequests, setDoctorRequests ] = useState([]);
    const { user, numberPassLogin, createUser } = useContext(AuthContext);
    const [ appointments, setAppointments ] = useState([]);
    const [ doctors, setDoctors ] = useState([]);
    const [ DP, setDP ] = useState([]);
    console.log('total patient:', DP.patients)
    console.log(appointments)


    useEffect(() => {
    
        axiosSecure.get("/appoinments")
            .then(res => setAppointments(res.data))
            .catch(err => console.error("Error fetching appointments:", err));

        axiosSecure.get("/messages")
            .then(res => setMessages(res.data))
            .catch(err => console.error("Error fetching messages:", err));

        axiosSecure.get("/doctorSignupRequest")
            .then(res => setDoctorRequests(res.data))
            .catch(err => console.error("Error fetching doctor requests:", err));

        axiosSecure.get("/doctors")
            .then(res => setDoctors(res.data))
            .catch(err => console.error("Error fetching doctors:", err));

        axiosSecure.get("/admin-stats")
            .then(res => {
                setDP(res.data)
            })
    }, [ axiosSecure ]);

    const handleApprove = async (id) => {
        try {
            const res = await axiosSecure.patch(`/doctorSignupRequest/approve/${id}`);

            if (res.data.success) {
                alert("Doctor approved & user created successfully!");
                // Remove approved doctor from UI state
                setDoctorRequests((prev) => prev.filter((doc) => doc._id !== id));
            }
        } catch (err) {
            console.error("Approval error:", err);
            alert(err.response?.data?.message || "Failed to approve doctor request.");
        }
    };

    const handleReject = async (doctorId) => {
        try {
            const res = await axiosSecure.delete(`/doctorSignupRequest/reject/${doctorId}`);

            if (res.data.success) {
                alert("Doctor request rejected successfully!");
                // Remove rejected doctor from UI state
                setDoctorRequests((prev) => prev.filter((doc) => doc._id !== doctorId));
            }
        } catch (err) {
            console.error("Reject error:", err);
            alert(err.response?.data?.message || "Failed to reject doctor request.");
        }


    };

    // handle masseage
    const handleMessageDelete = async (messageId) => {
        try {
            const res = await axiosSecure.delete(`messages/${messageId}`);
            setMessages((prev) => prev.filter((msg) => msg._id !== messageId));
        }
        catch (err) {
            console.error("Message delete error:", err);
        }
    };;

    return (
        <div className="bg-gray-100 min-h-screen p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-secondary">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Welcome back! Here's today's hospital overview.
                    </p>
                </div>

                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.yYUwl3GDU07Q5J5ttyW9fQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Admin Avatar"
                    className="w-14 h-14 rounded-full border-4 border-white shadow"
                />
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <NavLink to="/allDoctor" className="">
                    <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-500">Total Doctors</p>
                                <h2 className="text-4xl font-bold text-secondary mt-2">{DP.doctors}</h2>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex justify-center items-center">
                                <FaUserMd className="text-3xl text-blue-600" />
                            </div>
                        </div>
                    </div>
                </NavLink>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <NavLink to="/AllPatients" className="">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Patients</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">{DP.patients}</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-green-100 flex justify-center items-center">
                            <FaUsers className="text-3xl text-green-600" />
                        </div>
                    </div>
                    </NavLink>
                </div>

                <NavLink to="/appoinments" >


                    <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-gray-500">Appointments</p>
                                <h2 className="text-4xl font-bold text-secondary mt-2">{appointments.length}</h2>
                            </div>
                            <div className="w-16 h-16 rounded-full bg-yellow-100 flex justify-center items-center">
                                <FaCalendarCheck className="text-3xl text-yellow-600" />
                            </div>
                        </div>
                    </div>
                </NavLink>

                <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl duration-300">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500">Revenue</p>
                            <h2 className="text-4xl font-bold text-secondary mt-2">$52K</h2>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex justify-center items-center">
                            <FaMoneyBillWave className="text-3xl text-purple-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="grid lg:grid-cols-3 gap-6 mt-10">
                {/* Recent Appointments */}
                
                <RecentAppoinments></RecentAppoinments>

                {/* Latest News */}
                <div className="bg-white rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-secondary mb-6">
                        Latest News
                    </h2>

                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex justify-center items-center">
                                <FaNewspaper className="text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold">New MRI Machine Installed</h3>
                                <p className="text-sm text-gray-500">2 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center">
                                <FaNewspaper className="text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Free Health Camp</h3>
                                <p className="text-sm text-gray-500">Yesterday</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex justify-center items-center">
                                <FaNewspaper className="text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Blood Donation Program</h3>
                                <p className="text-sm text-gray-500">3 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div className="bg-white rounded-xl p-6 shadow lg:col-span-1">
                    <h2 className="text-2xl font-bold text-[#1F2B6C] mb-6">
                        Messages
                    </h2>
                    <div className="space-y-6">
                        {messages.map((msg) => (
                            <div key={msg._id} className="flex items-start gap-4 border-b pb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex justify-center items-center flex-shrink-0">
                                    <span className="text-lg">📩</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold">{msg.subject}</h3>
                                    <p className="text-xs text-gray-500">{msg.name}</p>
                                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">{msg.message}</p>
                                </div>
                                <button onClick={() => handleMessageDelete(msg._id)} className="text-red-600 font-bold text-xl">x</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Doctor Requests */}
                <div className="bg-white rounded-xl shadow p-6 lg:col-span-2">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <FaUserMd className="text-[#159EEC]" /> Doctor Registration Requests
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Review and verify pending doctor accounts before approval.
                            </p>
                        </div>
                        <span className="bg-[#159EEC]/10 text-[#159EEC] font-semibold text-sm px-4 py-1.5 rounded-full">
                            Pending Requests: {doctorRequests.length}
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100 text-gray-600 text-sm font-semibold uppercase">
                                    <th className="p-4 rounded-l-lg">Doctor Info</th>
                                    <th className="p-4">Specialization</th>
                                    <th className="p-4">BMDC & Degree</th>
                                    <th className="p-4">Workplace & Fee</th>
                                    <th className="p-4 text-center rounded-r-lg">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {doctorRequests?.map((doctor) => (
                                    <tr key={doctor._id} className="hover:bg-slate-50/80 transition-colors">
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={doctor.image || "https://via.placeholder.com/150"}
                                                    alt={doctor.name}
                                                    className="w-12 h-12 rounded-full object-cover border"
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-800">{doctor.name}</p>
                                                    <p className="text-xs text-gray-500">{doctor.email}</p>
                                                    <p className="text-xs text-gray-500">{doctor.number}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="bg-blue-50 text-[#159EEC] font-medium px-2.5 py-1 rounded text-xs border border-blue-100">
                                                {doctor.department}
                                            </span>
                                            <p className="text-xs text-gray-500 mt-1.5">
                                                Exp: <span className="font-medium text-gray-700">{doctor.experience} Years</span>
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="font-medium text-gray-800">{doctor.degree}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                BMDC: <span className="font-mono text-gray-700">{doctor.bmdcRegNo}</span>
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="text-gray-800">{doctor.workplace}</p>
                                            <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                                                Fee: ৳{doctor.consultationFee}
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    onClick={() => handleApprove(doctor._id)}
                                                    className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all shadow-sm"
                                                    title="Approve Request"
                                                >
                                                    <FaCheck /> Accept
                                                </button>
                                                <button
                                                    onClick={() => handleReject(doctor._id)}
                                                    className="flex items-center gap-1 bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all shadow-sm"
                                                    title="Reject Request"
                                                >
                                                    <FaTimes /> Reject
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {doctorRequests.length === 0 && (
                            <div className="text-center py-10 text-gray-500">
                                No pending registration requests found.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashbord;