import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage1 from './Pages/SignUpPage/SignUpPage1';
import SignUpPage2 from './Pages/SignUpPage/SignUpPage2';
import './App.css';
import SignUpPage3 from './Pages/SignUpPage/SignUpPage3';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import VerifyYourEmail from './Pages/VerifyYourEmailPage/VerifyYourEmail.jsx'; 
import ForgotPassword from './Pages/ForgotPasswordPage/ForgotPassword.jsx';
import CreateAccountSuccess from './Pages/CreateAccountSuccessPage/Success.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup1" element={<SignUpPage1 />} />
        <Route path="/signup2" element={<SignUpPage2 />} />
        <Route path="/signup3" element={<SignUpPage3 />} />
        <Route path="/verify-email" element={<VerifyYourEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-account-success" element={<CreateAccountSuccess />} />

      </Routes>
    </Router>
  );
}

export default App;