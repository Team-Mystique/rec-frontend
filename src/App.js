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
import DashboardLayout from './components/DashboardLayout';
import CourseProgress from './Pages/CourseProgress/index.jsx';
import Welcome from './Pages/Welcome';
import Assignments from './Pages/Assignments';
import Downloads from './Pages/Downloads';
import Performance from './Pages/Performance/index.jsx';
import UpcomingClasses from './Pages/UpcomingClasses/index.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';



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
         <Route path="/dashboard" element={<DashboardLayout />}/>
          <Route index element={<Welcome />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path="/course-progress" element={<CourseProgress />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/upcoming-classes" element={<UpcomingClasses />} />
          <Route path="/landing" element={<LandingPage />} />

      </Routes>
    </Router>
  );
}

export default App;