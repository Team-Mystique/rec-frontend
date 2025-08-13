import React, { useState } from 'react';
import './ForgotPasswordAdmin.css';
import { FaLock, FaEnvelope, FaArrowLeft, FaInfoCircle } from 'react-icons/fa';

// Reusable Logo Component for consistency
const Logo = () => (
    <div className="logo-container-forgot">
        REC
        <div className="logo-subtext-forgot">
            <span>Rise Edu Consult</span>
            <span>Institute of Educational</span>
            <span>Technology & Innovation</span>
        </div>
    </div>
);

// --- Main Forgot Password Component ---
const ForgotPasswordPageAdmin = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Basic email validation regex
    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!email) {
            setError('Email address is required.');
            return;
        }

        if (!isEmailValid(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setIsLoading(true);

        // Simulate an API call to send the reset link
        setTimeout(() => {
            console.log(`Password reset link sent to: ${email}`);
            setSuccessMessage(`A password reset link has been sent to ${email}. Please check your inbox.`);
            setEmail(''); // Clear the input field
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="forgot-password-page">
            <header className="forgot-password-header">
                <a href="/" className="logo-link-forgot"><Logo /></a>
            </header>
            <main className="forgot-password-main">
                <div className="forgot-password-container">
                    <div className="lock-icon-wrapper">
                        <FaLock />
                    </div>

                    <h1>Forgot Password?</h1>
                    <p className="subtitle">
                        No worries! Enter your email address and we'll send you a link to reset your password.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="input-group-forgot">
                            <label htmlFor="email">Email</label>
                            <div className="input-with-icon-forgot">
                                <FaEnvelope className="icon-forgot" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        {error && <p className="message-forgot error-forgot">{error}</p>}
                        {successMessage && <p className="message-forgot success-forgot">{successMessage}</p>}

                        <button type="submit" className="send-link-button" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </form>

                    <div className="divider-forgot">OR</div>

                    <a href="/login-admin" className="back-link-forgot">
                        <FaArrowLeft /> Back to login
                    </a>

                    <div className="security-note">
                        <FaInfoCircle className="info-icon" />
                        <p>
                            <strong>Security Note:</strong> We'll send you a secure link that expires in 1 hour. Check your spam folder if you don't see the email.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ForgotPasswordPageAdmin;