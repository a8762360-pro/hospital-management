import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { use, useState } from "react";
import axios from "axios";

const Register = () => {
    const { createUser, user, setUser } = use(AuthContext);
    const [ role, setRole ] = useState("");
    console.log(user)
    console.log(role)
    const register = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const password = e.target.password.value;
        // const roole = e.target.role.value;
        let patientAge = ""
        let patientGender = ""
        let patientBlod = ""
        let experience = ""
        let department = ""

        if (role === 'patient') {
            patientAge = e.target.patientAge.value;
            patientGender = e.target.patientGender.value;
            patientBlod = e.target.patientBlod.value;
        }
        else if (role === 'doctor') {
            experience = e.target.experience.value;
            department = e.target.department.value;
        }
        const Image = e.target.Image.value;
        console.log('register', email, name, number, password, role, patientAge, patientGender, Image, department, experience)
        const status = "active"

        const newUser = {
            email,status, experience, department, password , name, number, password, role, patientAge, patientGender, Image, patientBlod
        }


        createUser(email, password)
            .then(result => {
                console.log(result)
                const user = result.user
                user.phoneNumber = number;
                setUser(user);
                console.log(user)
                alert("firebase login")
                axios.post('http://localhost:3000/users', newUser)
                    .then(result => {
                        console.log(result.data)
                        console.log('post post')
                        alert("user data post db")
                    })
            })




    }
    return (
        <div className="min-h-screen bg-btn1 flex justify-center items-center p-5">

            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-btn2 py-8 text-center">

                    <h1 className="text-5xl font-bold">
                        <span className="text-white">MED</span>
                        <span className="text-[#159EEC]">IN</span>
                    </h1>

                    <p className="text-white mt-3 text-lg">
                        Create Your Account
                    </p>

                </div>

                {/* Form */}
                <form onSubmit={register} className="p-8 space-y-5">

                    <input name="name" required
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]"
                    />

                    <input name="email" required
                        type="email"
                        placeholder="Email Address"
                        className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]"
                    />

                    <input name="number" required
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]"
                    />

                    <select value={role}
                        onChange={(e) => setRole(e.target.value)} name="role" required className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]">
                        <option>Select Role</option>
                        <option>patient</option>
                        <option>doctor</option>
                    </select>
                    <input name="Image"
                        type="text"
                        placeholder="Image URL"
                        className="input input-bordered w-full px-5 py-7 border-black  rounded-md"
                    />

                    {/* Doctor Fields */}
                    {role == "doctor" && (
                        <>
                            <input name="experience"
                                type="text"
                                placeholder="experience"
                                className="input input-bordered w-full px-5 py-7 border-black"
                            />
                            <select name='department' className="w-full appearance-none   border border-black rounded-md px-5 py-4 ">
                                <option>Select Department</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Dental</option>
                                <option>Orthopedic</option>
                            </select>
                        </>
                    )}

                    {/* patient */}
                    {role === "patient" && (
                        <>
                            <select name="patientBlod" className="px-5 py-7 rounded-md select  border-black w-full">
                                <option>Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>

                            <input name="patientAge"
                                type="number"
                                placeholder="Age"
                                className="input input-bordered w-full px-5 py-7 border-black  rounded-md"
                            />

                            <select name="patientGender" className="px-5 py-7 rounded-md select  border-black w-full">
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>



                        </>
                    )}

                    <input name="password" required
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]"
                    />

                    <input name="confirmPassword" required
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]"
                    />

                    <button
                        className="w-full bg-[#1F2B6C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#159EEC] duration-300"
                    >
                        Create Account
                    </button>

                </form>

                {/* Footer */}
                <div className="pb-8 text-center">

                    <p className="text-gray-600">
                        Already have an account?
                    </p>

                    <Link
                        to="/login"
                        className="text-[#159EEC] font-semibold hover:underline"
                    >
                        Login Here
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Register;