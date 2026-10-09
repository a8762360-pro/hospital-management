import React, { useEffect } from 'react';
import useAxiosSecure from '../../../hook/UseAxiosSeceure';

const Appoinments = () => {
    const AxiosSeceure = useAxiosSecure();
    const [ appoinments, setAppoinments ] = React.useState([]);
    console.log(appoinments)

    const handleAccept = (id) => {
        // Handle accept logic here
        console.log(`Acce ID: ${id}`);
        console.log(id)
        AxiosSeceure.patch(`/appoinments/${id}`, { status: 'accepted' })
            .then(res => {
                // Update the appointment status in the UI
                setAppoinments(prevAppoinments =>
                    prevAppoinments.map(app => app._id === id ? { ...app, status: 'accepted' } : app)
                );
            });
    }

    const handleCancel = (id) => {
        // Handle cancel logic here
        console.log(`Cancel appointment with ID: ${id}`);
        AxiosSeceure.delete(`/appoinments/${id}`)
            .then(res => {
                // Remove the appointment from the UI
                setAppoinments(prevAppoinments =>
                    prevAppoinments.filter(app => app._id !== id)
                );
            });
    }

    useEffect(() => {
        AxiosSeceure.get('/appoinments')
            .then(res => {
                setAppoinments(res.data);
            })

            
    }, [])
    return (
        <div className="max-w-7xl mx-auto border  my-20">
            <h1 className='text-3xl font-bold text-center my-10'>All Appoinments ({appoinments.length})</h1>
            <section className="w-11/12 mx-auto">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appoinments.map((recApp) => (
                            <tr key={recApp._id}>
                                <td>{recApp.name}</td>
                                <td>{recApp.doctor}</td>
                                <td>{recApp.date}</td>
                                <td>
                                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-md">
                                        {recApp.status}
                                    </span>
                                </td>
                                <td className="flex gap-2">
                                    <button onClick={()=>handleAccept(recApp._id)} className=" bg-green-500 text-white px-2 py-1 rounded-md cursor-pointer">
                                        accept
                                    </button>
                                    <button onClick={()=>handleCancel(recApp._id)} className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer">
                                        cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Appoinments;