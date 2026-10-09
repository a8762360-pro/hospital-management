import React, { useEffect, useState } from 'react';
import { FaUserMd, FaBriefcase, FaStethoscope, FaSearch, FaPhone, FaIdCard } from 'react-icons/fa';
import useAxiosSecure from '../../../hook/UseAxiosSeceure';

const AllDoctor = () => {
    // Variable naming: Hook instance always camelCase
    const axiosSecure = useAxiosSecure();

    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axiosSecure.get('/doctors')
            .then(res => {
                setDoctors(res.data);
            })
            .catch(err => console.error("Error fetching doctors:", err));
    }, [axiosSecure]);

    // Search filter logic
    const filteredDoctors = doctors.filter(doctor =>
        doctor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
            {/* Top Stats Banner & Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl text-2xl">
                        <FaUserMd />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">All Doctors Directory</h1>
                        <p className="text-slate-500 text-sm">Manage and view registered hospital doctors</p>
                    </div>
                </div>

                {/* Total Doctor Count Badge */}
                <div className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-sm shadow-sm shadow-blue-200">
                    Total Doctors: {doctors.length}
                </div>
            </div>

            {/* Search Filter Bar */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="relative w-full max-w-md">
                    <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                    <input
                        type="text"
                        placeholder="Search by doctor name or specialty..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>
            </div>

            {/* Main Table Section */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100 text-slate-600 text-xs uppercase tracking-wider font-semibold">
                                <th className="py-4 px-6">Doctor</th>
                                <th className="py-4 px-6">Degree</th>
                                <th className="py-4 px-6">Specialty</th>
                                <th className="py-4 px-6">Experience</th>
                                <th className="py-4 px-6">Age</th>
                                <th className="py-4 px-6">Number</th>
                                <th className="py-4 px-6">bmdcRegNo</th>
                                <th className="py-4 px-6">workplace</th>
                                <th className="py-4 px-6 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map((doctor) => (
                                    <tr key={doctor._id} className="hover:bg-slate-50/80 transition-colors">
                                        {/* Doctor Profile Info */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-base">
                                                    {doctor.image ? (
                                                        <img
                                                            src={doctor.image}
                                                            alt={doctor.name}
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        doctor.name?.charAt(0).toUpperCase() || "D"
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-800">{doctor.name}</p>
                                                    <p className="text-xs text-slate-400">{doctor.email || 'No email registered'}</p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Degree */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaStethoscope className="text-blue-500 text-xs" />
                                                <span>{doctor.degree || 'N/A'}</span>
                                            </div>
                                        </td>

                                        {/* Specialty */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaStethoscope className="text-blue-500 text-xs" />
                                                <span>{doctor.department || 'General Practitioner'}</span>
                                            </div>
                                        </td>

                                        {/* Experience */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaBriefcase className="text-slate-400 text-xs" />
                                                <span>{doctor.experience ? `${doctor.experience} Years` : 'N/A'}</span>
                                            </div>
                                        </td>

                                        {/* Age */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaBriefcase className="text-slate-400 text-xs" />
                                                <span>{doctor.age || 'N/A'} years</span>
                                            </div>
                                        </td>

                                        {/* Number */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaPhone className="text-slate-400 text-xs" />
                                                <span>{doctor.number || 'N/A'}</span>
                                            </div>
                                        </td>
                                        
                                        {/* BMDC Registration */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaIdCard className="text-slate-400 text-xs" />
                                                <span>{doctor.bmdcRegistration || 'N/A'}</span>
                                            </div>
                                        </td>

                                        {/* work place */}
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-slate-600">
                                                <FaBriefcase className="text-slate-400 text-xs" />
                                                <span>{doctor.workplace || 'N/A'}</span>
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
                                        No doctors found.
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

export default AllDoctor;