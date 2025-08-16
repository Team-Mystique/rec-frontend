import React from "react";
import OverJoyed from "./OverJoyed.png";
import "./LandingPage.css";

const logoUrl = '/Logo.png';

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    {/* Header and navigation elements remain the same */}
                    <div className="rectangle" />
                    <img className="logo" alt="Logo" src={logoUrl} />
                    <div className="text-wrapper">Home</div>
                    <div className="div">Courses</div>
                    <div className="text-wrapper-2">About us</div>
                    <div className="text-wrapper-3">Contact us</div>

                    {/* --- REWRITTEN BUTTONS --- */}
                    {/* The old rectangle and text divs are replaced by a single styled link */}
                    <a href="/register" className="btn btn-register">
                        Register
                    </a>

                    <a href="/register" className="btn btn-login">
                        Log in
                    </a>

                    {/* Other elements remain the same */}
                    <img
                        className="overjoyed-successful"
                        alt="Overjoyed successful"
                        src={OverJoyed}
                    />
                    <div className="rectangle-3" />
                    <p className="rise-edu-consult">
                        Rise Edu Consult: Institute of Educational Technology &amp; Innovation
                    </p>
                    <div className="text-wrapper-5">Get Started</div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;