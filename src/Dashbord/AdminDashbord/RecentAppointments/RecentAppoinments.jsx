import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hook/UseAxiosSeceure';

const RecentAppoinments = () => {
    const axiosSecure = useAxiosSecure();
    const [ recentAppointments, setRecentAppointments ] = useState([]);
    useEffect(() => {
        axiosSecure.get("/recentAppoinments")
            .then(res => setRecentAppointments(res.data))
            .catch(err => console.error("Error fetching appointments:", err));
    }, []);
    return (
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
                                    {recentAppointments.map((recApp) => (
                                        <tr key={recApp._id}>
                                            <td>{recApp.name}</td>
                                            <td>{recApp.doctor}</td>
                                            <td>{recApp.date}</td>
                                            <td>
                                                <span className="bg-yellow-300 px-3 py-1 rounded-md ">
                                                    {recApp.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
    );
};

export default RecentAppoinments;