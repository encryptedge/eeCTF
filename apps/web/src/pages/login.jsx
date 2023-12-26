import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";

import '../App.css'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navbar';

function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let token = localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault()
        let data = JSON.stringify({
            "email": email,
            "password": password
        });
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: import.meta.env.VITE_API_URL + '/user/login',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        axios.request(config)
            .then((response) => {
                if (response.data.message === 'Login successful') {
                    token = response.data.token;
                    localStorage.setItem('token', token);
                    toast.success('Login Successful!', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                    setTimeout(() => {
                        window.location.href = '/app';
                    }, 3000);
                } else {
                    toast.error('Login Failed!', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                }
            })
            .catch(() => {
                toast.error('Login Failed!', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                });
            });
    }

    return (
        <>
        <Navbar />
        <div>
            <img src="/ee.png" className="logo react" alt="ee logo" />
        </div>
        <h1>Login Portal</h1>
        <div className="login-card">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="form-el-container">
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-el-container">
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
            </div>
            <div className="form-control">
                <div className="form-el-container">
                    <label htmlFor="password">Password</label>
                </div>
                <div className="form-el-container">
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                />
                </div>
            </div>
            <button className="btn" type="submit">
                Sign In
            </button>
            </form>
        </div>
        <p className="read-the-docs">
            Don&apos;t have a account, register from <Link to="/register">here</Link>.
        </p>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        </>
    )
}

export default Home
