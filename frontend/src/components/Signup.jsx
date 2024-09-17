import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/login.css';
import image from '../assets/image1.jpg'
const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
        console.log('Sign-up form submitted', formData);
    };

    return (
        <div className="container">
            {/* Left Side: Sign-Up Form */}
            <div className="content-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <label>Full Name</label>
                    </div>
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
                    <div className="input-box">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <label>Confirm Password</label>
                    </div>
                    <button type="submit" className="btn">Sign Up</button>
                </form>
                <div className="link-box">
                    <p>Already have an account? <Link to="/Login">Login</Link></p>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="image-box">
                <img src={image} alt="Sign Up" />
            </div>
        </div>
    );
};

export default Signup;