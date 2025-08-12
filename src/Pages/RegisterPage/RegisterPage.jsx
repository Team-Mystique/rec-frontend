import React from 'react';
import './RegisterPage.css';
import studentsImage from './ConsultPic.jpg'; // Make sure to place your image here

// Reusable Logo Component for consistency
const Logo = () => (
    <div className="logo-container-register">
        <div className="logo-subtext-register">
             <img src='./logo.png' alt="REC - Rise Edu Consult Logo" className="signup-logo" />
        </div>
    </div>
);

const RegisterPage = () => {
    return (
        <div className="register-page">
            <div className="image-panel">
                <img src={studentsImage} alt="Happy students" />
            </div>
            <div className="action-panel">
                <div className="action-content">
                    <Logo />
                    <div className="button-container">
                        {/* In a real React app, you would use <Link> from react-router-dom */}
                        {/* e.g., <Link to="/register/student" className="choice-button">STUDENT</Link> */}
                         <a href="/login-admin" className="choice-button">
                            ADMIN
                        </a>
                        <a href="/login-student" className="choice-button">
                            STUDENT
                        </a>
                        <a href="/login-instructor" className="choice-button">
                            INSTRUCTOR
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;