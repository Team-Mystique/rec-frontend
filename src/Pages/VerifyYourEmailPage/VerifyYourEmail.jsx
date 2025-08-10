import React, { useState, useEffect, useRef } from 'react';
import './VerifyYourEmail.css';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';

// A mock email address for demonstration purposes
const userEmail = "JohnDoe@example.com";

// Reusable Logo Component
const Logo = () => (
    <div className="logo-container-verify">
        REC
        <div className="logo-subtext-verify">
            <span>Rise Edu Consult</span>
            <span>Institute of Educational</span>
            <span>Technology & Innovation</span>
        </div>
    </div>
);

// --- Main Verification Component ---
const VerifyEmailPage = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [verificationCode, setVerificationCode] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [resendTimer, setResendTimer] = useState(60);
    const [isResending, setIsResending] = useState(false);
    const inputRefs = useRef([]);

    // Function to generate a random 6-digit code
    const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

    // Function to simulate sending the code (in a real app, this would be an API call)
    const sendVerificationCode = React.useCallback(() => {
        setIsResending(true);
        const newCode = generateCode();
        setVerificationCode(newCode);

        // Simulate API call
        setTimeout(() => {
            console.log(`Verification code sent to ${userEmail}: ${newCode}`);
            alert(`A new verification code has been sent: ${newCode}`); // For demonstration
            setIsResending(false);
            setResendTimer(60); // Reset timer
        }, 1500);
    }, [generateCode]);

    // Send initial code on component mount
   
    // Countdown timer effect for the "Resend Code" button
    useEffect(() => {
        let timer;
        if (resendTimer > 0 && !isResending) {
            timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [resendTimer, isResending]);

    // Handles input changes and auto-focuses to the next field
    const handleChange = (element, index) => {
        const value = element.value;
        if (isNaN(value)) return; // Only allow numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input field if a digit is entered
        if (value && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };
    
    // Handles pasting code into the input boxes
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (/^\d{6}$/.test(pastedData)) {
            const newOtp = pastedData.split('');
            setOtp(newOtp);
            inputRefs.current[5].focus();
        }
    };


    // Handles backspace key to move to the previous field
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };
    
    // Verifies the entered code
    const handleVerify = () => {
        const enteredCode = otp.join("");
        setError("");
        setSuccess("");

        if (enteredCode.length < 6) {
            setError("Please enter the complete 6-digit code.");
            return;
        }

        if (enteredCode === verificationCode) {
            setSuccess("Email verified successfully!");
            // In a real app, navigate to the next page (e.g., dashboard)
            // history.push('/dashboard');
        } else {
            setError("The verification code is incorrect. Please try again.");
        }
    };

    // Handles the "Resend Code" button click
    const handleResend = () => {
        if (resendTimer === 0) {
            setError("");
            setSuccess("");
            setOtp(new Array(6).fill(""));
            sendVerificationCode();
        }
    };

    return (
        <div className="verify-page">
            <header className="verify-header">
                <a href="/" className="logo-link"><Logo /></a>
            </header>
            <main className="verify-main">
                <div className="verify-container">
                    <div className="icon-wrapper">
                        <FaEnvelope />
                    </div>

                    <h1>Verify Your Email</h1>
                    <p className="subtitle">We've sent a 6-digit verification code to:</p>
                    <p className="email-display">{userEmail}</p>

                    <div className="code-input-container">
                         <label className="code-label">ENTER VERIFICATION CODE</label>
                         <div className="code-inputs" onPaste={handlePaste}>
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={data}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="code-input"
                                />
                            ))}
                        </div>
                    </div>

                    {error && <p className="message error">{error}</p>}
                    {success && <p className="message success">{success}</p>}

                    <button className="verify-button" onClick={handleVerify} disabled={isResending}>
                        Verify Email
                    </button>

                    <div className="resend-section">
                        <p>Didn't receive the code?</p>
                        <button
                            className="resend-button"
                            onClick={handleResend}
                            disabled={resendTimer > 0 || isResending}
                        >
                            {isResending ? "Sending..." : (resendTimer > 0 ? `Resend Code in ${resendTimer}s` : "Resend Code")}
                        </button>
                    </div>

                    <a href="/login" className="back-link">
                        <FaArrowLeft /> Back to login
                    </a>
                </div>
            </main>
        </div>
    );
};

export default VerifyEmailPage;