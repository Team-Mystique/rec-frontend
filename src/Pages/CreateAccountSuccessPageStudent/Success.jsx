import React from 'react';
import './Success.css';
import { FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

// Reusable Logo Component
const Logo = () => (
    <div className="logo-container-success">
        REC
        <div className="logo-subtext-success">
            <span>Rise Edu Consult</span>
            <span>Institute of Educational</span>
            <span>Technology & Innovation</span>
        </div>
    </div>
);

// --- Main Account Success Component ---
// It accepts the user's email as a prop for a personalized message.
const AccountSuccessPage = ({ userEmail = "johndoe@example.com" }) => {
    return (
        <div className="success-page">
            <header className="success-header">
                <a href="/" className="logo-link-success"><Logo /></a>
            </header>
            <main className="success-main">
                <div className="success-container">
                    <div className="success-icon-wrapper">
                        <FaCheckCircle />
                    </div>

                    <h1>Account Created!</h1>
                    <p className="subtitle-success">
                        Your account has been created successfully. A verification link has been sent to
                        <span className="user-email-display">{userEmail}</span>.
                    </p>

                    <a href="/verify-email-student" className="verify-email-button">
                        Verify Your Email
                    </a>

                    <a href="/login-student" className="back-link-success">
                        <FaArrowLeft /> Skip for now, go to login
                    </a>
                </div>
            </main>
        </div>
    );
};

export default AccountSuccessPage;