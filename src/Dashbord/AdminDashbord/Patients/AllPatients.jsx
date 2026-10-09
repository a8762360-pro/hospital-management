import React, { useEffect, useState } from 'react';
import { FaUsers, FaSearch, FaUserCircle, FaEnvelope, FaPhone } from 'react-icons/fa';
import useAxiosSecure from '../../../hook/UseAxiosSeceure';

const AllPatients = () => {
    const axiosSecure = useAxiosSecure();
    const [patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axiosSecure.get('/patients') // অথবা /users?role=patient
            .then(res => {
                console.log("Patients Data:", res.data);
                setPatients(res.data);
            })
            .catch(err => console.error("Error fetching patients:", err));
    }, [axiosSecure]);

    // সার্চ ফিল্টার (নাম বা ইমেইল দিয়ে খোঁজার জন্য)
    const filteredPatients = patients.filter(patient =>
        patient.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
            
            {/* Top Stat Banner */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex justify-center items-center text-2xl shadow-sm">
                        <FaUsers />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">Patients Overview</h1>
                        <p className="text-slate-500 text-sm">Registered hospital patients list</p>
                    </div>
                </div>

                {/* Total Patients Badge */}
                <div className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm shadow-sm shadow-emerald-200">
                    Total Patients: {patients.length}
                </div>
            </div>

            {/* Search Filter Bar */}
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center">
                <div className="relative w-full max-w-md">
                    <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input
                        type="text"
                        placeholder="Search patient by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                </div>
            </div>

            {/* Patients Table Section */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-slate-600 text-xs uppercase tracking-wider font-semibold">
                                <th className="py-4 px-6">Patient Name</th>
                                <th className="py-4 px-6">Email</th>
                                <th className="py-4 px-6">Contact</th>
                                <th className="py-4 px-6">Blod Groupe</th>
                                <th className="py-4 px-6">age</th>
                                <th className="py-4 px-6 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                            {filteredPatients.length > 0 ? (
                                filteredPatients.map((patient) => (
                                    <tr key={patient._id} className="hover:bg-slate-50/80 transition-colors">
                                        {/* Patient Avatar & Name */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                                                    {patient.image ? (
                                                        <img
                                                            src={patient.image}
                                                            alt={patient.name}
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        patient.name?.charAt(0).toUpperCase() || <FaUserCircle />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-800">{patient.name || 'Unnamed Patient'}</p>
                                                    <p className="text-xs text-slate-400">ID: {patient._id?.slice(-6)}</p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Email */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaEnvelope className="text-slate-400 text-xs" />
                                                <span>{patient.email || 'N/A'}</span>
                                            </div>
                                        </td>

                                        {/* Phone */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaPhone className="text-slate-400 text-xs" />
                                                <span>{patient.number  || 'Not Found'}</span>
                                            </div>
                                        </td>

                                        {/* blod group */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaPhone className="text-slate-400 text-xs" />
                                                <span>{patient.patientBlod  || 'Not Found'}</span>
                                            </div>
                                        </td>

                                        {/*  Age */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaPhone className="text-slate-400 text-xs" />
                                                <span>{patient.age  || 'Not Found'} years</span>
                                            </div>
                                        </td>

                                        {/* Status Badge */}
                                        <td className="py-4 px-6 text-center">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                Active
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="py-8 text-center text-slate-400">
                                        No patients found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllPatients;