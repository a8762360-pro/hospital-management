import React, { use } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';

const Login = () => {
    const { role } = useParams();
    const navigate = useNavigate();

    console.log(role)
    const { numberPassLogin, user, setUser, setToken } = use(AuthContext);
    console.log(user)

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('login', email, password)

        numberPassLogin(email, password)
            .then(result => {
                axios.get(`http://localhost:3000/users/${email}`)
                    .then(res => {
                        const dbUser = res.data
                        console.log(user)
                        if (!dbUser) {
                            return alert("User not found")
                        }
                        if (dbUser.role !== role) {
                            return alert("Wrong login portal");
                        }

                        setUser(dbUser)
                        navigate("/")
                        e.target.reset();
                    })
            })
    }
    return (
        <div className='my-30'>
            <div className='flex justify-center  '>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset border border-gray-400 rounded-md p-10">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;