import React, { useState } from 'react';
import './LoginPage.css';
import { FaEnvelope, FaLock, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaXTwitter } from "react-icons/fa6";


// You can replace this with your actual logo
const logoUrl = '/logo.png';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            // Reset errors if validation is successful
            setErrors({});
            // --- SUBMIT LOGIN DATA ---
            console.log('Login Submitted', { email, password, rememberMe });
            alert(`Logged in with Email: ${email}`);
            // In a real app, you would make an API call here
        }
    };

    return (
        <div className="login-page">
            <header className="login-header">
               <img src={logoUrl} alt="REC - Rise Edu Consult Logo" className="signup-logo" />
            </header>
            <main className="login-main">
                <div className="login-container">
                    <h1>Welcome back</h1>
                    <p className="subtitle">Welcome back! Please enter your details.</p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-with-icon">
                                <FaEnvelope className="icon" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={errors.email ? 'input-error' : ''}
                                />
                            </div>
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                             <div className="input-with-icon">
                                <FaLock className="icon" />
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={errors.password ? 'input-error' : ''}
                                />
                            </div>
                            {errors.password && <p className="error-text">{errors.password}</p>}
                        </div>

                        <div className="options">
                            <div className="remember-me">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            <a href="/forgot-password">Forgot Password</a>
                        </div>

                        <button type="submit" className="login-button">Log in</button>
                    </form>

                    <div className="divider">Or Sign in with</div>

                    <div className="social-login">
                         <a href="/auth/instagram" className="social-icon instagram"><FaInstagram /></a>
                         <a href="/auth/twitter" className="social-icon twitter"><FaXTwitter /></a>
                         <a href="/auth/facebook" className="social-icon facebook"><FaFacebook /></a>
                         <a href="/auth/google" className="social-icon google"><FcGoogle /></a>
                    </div>

                    <p className="signup-link">
                        Don't have an account? <a href="/signup1">Sign up</a>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;