import React from 'react';
import './RegisterPage.css';
import studentsImage from './ConsultPic.jpg'; // Make sure to place your image here

// Reusable Logo Component for consistency
const Logo = () => (
    <div className="logo-container-register">
        REC
        <div className="logo-subtext-register">
            <span>Rise Edu Consult</span>
            <span>Institute of Educational</span>
            <span>Technology & Innovation</span>
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
                        <a href="/login" className="choice-button">
                            STUDENT
                        </a>
                        <a href="/login" className="choice-button">
                            INSTRUCTOR
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;