import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { use, useState } from "react";
import axios from "axios";

const Register = () => {

    const navigate = useNavigate();
    const { createUser, setUser } = use(AuthContext);
    const [ role, setRole ] = useState("");

    const register = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const image = form.Image.value;
        const age = form.age.value;
        const gender = form.gender.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;


        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (role === 'patient') {
            const patientBlod = form.patientBlod.value;

            const patientData = {
                name,
                email,
                number,
                password,
                image,
                age,
                gender,
                patientBlod,
                role,
                status: "active"
            };

            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    // createdUser.phoneNumber = number;
                    // setUser(createdUser);
                    axios.post('http://localhost:3000/users', patientData)
                        .then(res => {
                            console.log(res.data);
                            alert("Patient Registered Successfully!");
                            e.target.reset();
                            navigate('/login/patient');
                        })
                        .catch(err => console.error("Database Error:", err));

                })
                .catch(err => alert(err.message));
        }
        else if (role === 'doctor') {

            axios.get('')

            const degree = form.degree.value;
            const bmdcRegNo = form.bmdcRegNo.value;
            const workplace = form.workplace.value;
            const consultationFee = form.consultationFee.value;
            const department = form.department.value;
            const experience = form.experience.value;

            const doctorData = {
                name,
                email,
                number,
                image,
                age,
                gender,
                password,
                role,
                degree,
                bmdcRegNo,
                workplace,
                consultationFee,
                department,
                experience,
                status: "pending"
            };
            axios.post('http://localhost:3000/doctorSignupRequest', doctorData)
                .then(res => {
                    console.log(res.data);
                    alert("Doctor Signup Request Sent Successfully!");
                    e.target.reset();
                    navigate('/login/doctor');
                })
                .catch(err => console.error("Database Error:", err));
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center p-5">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-[#1F2B6C] py-8 text-center">
                    <h1 className="text-5xl font-bold">
                        <span className="text-white">MED</span>
                        <span className="text-[#159EEC]">IN</span>
                    </h1>
                    <p className="text-white mt-3 text-lg">Create Your Account</p>
                </div>

                {/* Form */}
                <form onSubmit={register} className="p-8 space-y-5">

                    <input name="name" required type="text" placeholder="Full Name" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                    <input name="email" required type="email" placeholder="Email Address" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                    <input name="number" required type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                    <input name="Image" required type="text" placeholder="Image URL" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                    <input name="age" required type="number" placeholder="Age" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />

                    <select name="gender" required className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <select value={role} onChange={(e) => setRole(e.target.value)} name="role" required className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]">
                        <option value="">Select Role</option>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>

                    {/* Doctor Fields */}
                    {role === "doctor" && (
                        <>
                            <input name="degree" required type="text" placeholder="Medical Degree (e.g., MBBS, FCPS)" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                            <input name="bmdcRegNo" required type="text" placeholder="BMDC Registration Number" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />

                            <select name="department" required className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]">
                                <option value="">Select Specialization / Department</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Dental">Dental</option>
                                <option value="Orthopedic">Orthopedic</option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="Pediatrics">Pediatrics</option>
                                <option value="Gynecology">Gynecology</option>
                                <option value="General Medicine">General Medicine</option>
                            </select>

                            <input name="experience" required type="number" min="0" placeholder="Years of Experience" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                            <input name="workplace" required type="text" placeholder="Current Hospital / Clinic Name" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                            <input name="consultationFee" required type="number" placeholder="Consultation Fee (in BDT)" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                        </>
                    )}

                    {/* Patient Fields */}
                    {role === "patient" && (
                        <select name="patientBlod" required className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]">
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    )}

                    <input name="password" required type="password" placeholder="Password" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />
                    <input name="confirmPassword" required type="password" placeholder="Confirm Password" className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]" />

                    {role === "patient" && (
                        <button type="submit" className="w-full bg-[#1F2B6C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#159EEC] duration-300">
                            Create Account
                        </button>
                    )}

                    {role === "doctor" && (
                        <button type="submit" className="w-full bg-[#1F2B6C] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#159EEC] duration-300">
                            Signup Request
                        </button>
                    )}

                </form>

                {/* Footer */}
                <div className="pb-8 text-center">
                    <p className="text-gray-600">Already have an account?</p>
                    <Link to="/loginPortal" className="text-[#159EEC] font-semibold hover:underline">
                        Login Here
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Register;