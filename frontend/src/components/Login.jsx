import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';
import image from '../assets/image1.jpg'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login form submitted', formData);
    };

    return (
        <div className="container">
            {/* Left Side: Login Form */}
            <div className="content-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label>Password</label>
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
                <div className="link-box">
                    <p>Don't have an account? <Link to="/Signup">Sign up</Link></p>
                </div>
            </div>

            <div className="image-box">
                <img src={image} alt="Login" />
            </div>
        </div>
    );
};

export default Login;