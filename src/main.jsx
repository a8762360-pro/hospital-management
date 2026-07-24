import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import NavBar from './NavBar/NavBar.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import Services from './Services/Services.jsx';
import Doctors from './Doctors/Doctors.jsx';
import News from './News/News.jsx';
import Contact from './Contact/Contact.jsx';
import DoctorDetails from './DoctorDetails/DoctorDetails.jsx';
import Appoinment from './Appoinment/Appoinment.jsx';
import Register from './Register/Register.jsx';
import AuthProvider from './AuthContext/AuthProvider.jsx';
import Login from './Login/Login.jsx';
import LoginPortal from './Login/LoginPortal.jsx';
import Dashbord from './Dashbord/Dashbord.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/navbar",
                Component: NavBar
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/doctors",
                element: <Doctors></Doctors>
            },
            {
                path: "/news",
                element: <News></News>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "doctorDetails/:id",
                element: <DoctorDetails></DoctorDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/${params.id}`)
            },
            {
                path: "/appoinment",
                element: <PrivateRoute>
                    <Appoinment></Appoinment>
                </PrivateRoute>
            },
            {
                path: "/login/:role",
                element: <Login></Login>
            },
            {
                path: "/loginPortal",
                element: <LoginPortal></LoginPortal>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/dashbord",
                element: <PrivateRoute>
                    <Dashbord></Dashbord>
                </PrivateRoute>
            }
        ]
    },
    // {
    //     path: "/dashbord",
    //     element: <Dashbord></Dashbord>,
    //     children: [
    //         {
    //             path: "/patient",

    //         }
    //     ]
    // }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>,
)
