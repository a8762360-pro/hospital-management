import React, { use, useEffect, useState } from "react";
import { FaUserMd, FaUsers, FaCalendarCheck, FaNewspaper, FaMoneyBillWave, FaCheck, FaTimes, } from "react-icons/fa";
import useAxiosSecure from "../hook/UseAxiosSeceure";
import { AuthContext } from "../AuthContext/AuthContext";

const AdminDashbord = () => {
    const axiosSeceure = useAxiosSecure();
    const [ message, setMessage ] = useState([]);
    const [ recentAppoinment, setRecentAppoinment ] = useState([])
    const [ doctorRequests, setDoctorRequests ] = useState([]);
    const { user, numberPassLogin , createUser} = use(AuthContext);

    console.log(doctorRequests)
    console.log(numberPassLogin)

    useEffect(() => {
        axiosSeceure.get("http://localhost:3000/recentAppoinments")
            .then(msj => {
                setRecentAppoinment(msj.data)
            })
        axiosSeceure.get("http://localhost:3000/messages")
            .then(msj => {
                setMessage(msj.data)
            })

        axiosSeceure.get("http://localhost:3000/doctorSignupRequest")
            .then(res => {
                setDoctorRequests(res.data);
            })
            .catch(err => console.error("Error fetching doctor requests:", err));
    }, [])


    const handleApprove = (doctorId) => {
        axiosSeceure.get(`http://localhost:3000/doctorSignupRequest/${doctorId}`,)
            .then(res => {
                console.log(res.data);
                const newDoctorData = res.data;
                const email = newDoctorData.email;
                const password = newDoctorData.password;
                const role = "doctor";
                console.log(email, password, role)
                createUser(email, password)
                    .then(res => {
                        const doctor = (res.data)
                        if (doctor) {
                            alert("Doctor account created successfully");
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })

                // setDoctorRequests(prevRequests => prevRequests.filter(doc => doc._id !== doctorId));
            })
            .catch(err => console.error("Error approving doctor request:", err));
    }

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
                            <h2 className="text-4xl font-bold text-secondary mt-2">
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
                            <h2 className="text-4xl font-bold text-secondary mt-2">
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
                            <h2 className="text-4xl font-bold text-secondary mt-2">
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
                            <h2 className="text-4xl font-bold text-secondary mt-2">
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
                    <h2 className="text-2xl font-bold text-secondary mb-6">
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
                            {
                                recentAppoinment.map(recApp =>
                                    <tr key={recApp._id}>
                                        <td>{recApp.name}</td>
                                        <td>{recApp.doctor}</td>
                                        <td>{recApp.date}</td>
                                        <td>
                                            <span className="badge badge-error">
                                                Cancelled
                                            </span>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
                {/* Latest message */}
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

                {/* message */}
                <div className="bg-white rounded-2xl p-8 shadow-lg w-full">
                    <h2 className="text-4xl font-bold text-[#1F2B6C] mb-8">
                        Messages
                    </h2>
                    <div className="space-y-6">

                        {message.map((message) => (

                            <div
                                key={message._id}
                                className="flex items-start gap-5 border-b pb-5"
                            >

                                <div className="w-14 h-14 rounded-full bg-blue-100 flex justify-center items-center">

                                    <span className="text-2xl">📩</span>

                                </div>

                                <div className="flex-1">

                                    <h3 className="text-xl font-semibold">
                                        {message.subject}
                                    </h3>

                                    <p className="text-gray-500">
                                        {message.name}
                                    </p>

                                    <p className="text-gray-600 line-clamp-2">
                                        {message.message}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>
                </div>

                {/* doctor registration requests */}
                <div className="p-6 bg-slate-50 min-h-screen">
                    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                        {/* Header */}
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
                                {/* Pending Requests: {doctorRequests.length} */}
                            </span>
                        </div>

                        {/* Table Structure */}
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

                                            {/* Name, Email, Image */}
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

                                            {/* Department & Experience */}
                                            <td className="p-4">
                                                <span className="bg-blue-50 text-[#159EEC] font-medium px-2.5 py-1 rounded text-xs border border-blue-100">
                                                    {doctor.department}
                                                </span>
                                                <p className="text-xs text-gray-500 mt-1.5">
                                                    Exp: <span className="font-medium text-gray-700">{doctor.experience} Years</span>
                                                </p>
                                            </td>

                                            {/* BMDC & Degree */}
                                            <td className="p-4">
                                                <p className="font-medium text-gray-800">{doctor.degree}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">
                                                    BMDC: <span className="font-mono text-gray-700">{doctor.bmdcRegNo}</span>
                                                </p>
                                            </td>

                                            {/* Workplace & Fee */}
                                            <td className="p-4">
                                                <p className="text-gray-800">{doctor.workplace}</p>
                                                <p className="text-xs text-emerald-600 font-semibold mt-0.5">
                                                    Fee: ৳{doctor.consultationFee}
                                                </p>
                                            </td>

                                            {/* Action Buttons */}
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

                            {/* Empty State */}
                            {/* {doctorRequests.length === 0 && (
                                <div className="text-center py-10 text-gray-500">
                                    No pending registration requests found.
                                </div>
                            )} */}
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default AdminDashbord;