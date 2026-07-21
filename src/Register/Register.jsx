import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { use } from "react";
import axios from "axios";

const Register = () => {
    const { createUser, user, setUser } = use(AuthContext);
    console.log(user)
    console.log(user?.uid)
    const register = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const password = e.target.password.value;
        const role = e.target.role.value;
        console.log('register', email, name, number, password, role)
        const status = "active"
        const newUser = {
            name, email, role, status
        }
        createUser(email, password)
            .then(result => {
                console.log(result)
                const user = result.user
                user.phoneNumber = number;
                setUser(user);
                console.log(user)
            })

        axios.post('http://localhost:3000/users', newUser)
        .then(result => {
            console.log(result.data)
            console.log('post post')
        })


    }
    return (
        <div className="min-h-screen bg-[#BFD2F8] flex justify-center items-center p-5">

            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-[#1F2B6C] py-8 text-center">

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

                    <select name="role" required className="w-full border rounded-lg px-5 py-4 outline-none focus:border-[#159EEC]">
                        <option>Select Role</option>
                        <option>Patient</option>
                        <option>Doctor</option>

                    </select>

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