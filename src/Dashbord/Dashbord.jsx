import React, { use } from 'react';
import { Outlet } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
// import AdminDashbord from './AdminDashbord';
import StaffDashbord from './StaffDashbord';
import PatientDashbord from './PatientDashbord';
import DoctorDashbord from './DoctorDashbord';
import AdminDashbord from './AdminDashbord/AdminDashbord';

const Dashbord = () => {
    const {user} = use(AuthContext);
    if(user?.role === "admin"){
        return <AdminDashbord></AdminDashbord>
    }
    if(user?.role === "staff"){
        return <StaffDashbord></StaffDashbord>
    }
    if(user?.role === "patient"){
        return <PatientDashbord></PatientDashbord>
    }
    if(user?.role === "doctor"){
        return <DoctorDashbord></DoctorDashbord>
    }
    return <h1>No Access</h1>
};

export default Dashbord;