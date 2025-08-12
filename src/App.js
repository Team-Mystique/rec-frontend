import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPageStudent1 from './Pages/SignUpPageStudent/SignUpPageStudent1.jsx';
import SignUpPageStudent2 from './Pages/SignUpPageStudent/SignUpPageStudent2.jsx';
import './App.css';
import SignUpPageStudent3 from './Pages/SignUpPageStudent/SignUpPageStudent3.jsx';
import SignUpPageInstructor1 from './Pages/SignUpPageInstructor/SignUpPageInstructor1.jsx';
import SignUpPageInstructor2 from './Pages/SignUpPageInstructor/SignUpPageInstructor2.jsx';
import SignUpPageInstructor3 from './Pages/SignUpPageInstructor/SignUpPageInstructor3.jsx';
import LoginPageAdmin from './Pages/LoginPageAdmin/LoginPage.jsx';
import LoginPageStudent from './Pages/LoginPageStudent/LoginPage.jsx';
import LoginPageInstructor from './Pages/LoginPageInstructor/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import VerifyYourEmailInstructor from './Pages/VerifyYourEmailPageInstuctor/VerifyYourEmail.jsx';
import VerifyYourEmailStudent from './Pages/VerifyYourEmailPageStudent/VerifyYourEmail.jsx'; 
import ForgotPassword from './Pages/ForgotPasswordPage/ForgotPassword.jsx';
import CreateAccountSuccessStudent from './Pages/CreateAccountSuccessPageStudent/Success.jsx'; 
import CreateAccountSuccessInstructor from './Pages/CreateAccountSuccessPageInstructor/Success.jsx'; 
import DashboardLayout from './components/DashboardLayout/index.jsx';
import CourseProgress from './Pages/CourseProgress/index.jsx';
import Welcome from './Pages/Welcome/index.jsx';
import Assignments from './Pages/Assignments/index.jsx';
import Downloads from './Pages/Downloads/index.jsx';
import Performance from './Pages/Performance/index.jsx';
import UpcomingClasses from './Pages/UpcomingClasses/index.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login-admin" element={<LoginPageAdmin />} />
         <Route path="/login-student" element={<LoginPageStudent />} />
          <Route path="/login-instructor" element={<LoginPageInstructor />} />
        <Route path="/signup-student-1" element={<SignUpPageStudent1 />} />
        <Route path="/signup-student-2" element={<SignUpPageStudent2 />} />
        <Route path="/signup-student-3" element={<SignUpPageStudent3 />} />
         <Route path="/signup-instructor-1" element={<SignUpPageInstructor1 />} />
        <Route path="/signup-instructor-2" element={<SignUpPageInstructor2 />} />
        <Route path="/signup-instructor-3" element={<SignUpPageInstructor3 />} />
        <Route path="/verify-email-student" element={<VerifyYourEmailStudent />} />
         <Route path="/verify-email-instructor" element={<VerifyYourEmailInstructor />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-account-success-student" element={<CreateAccountSuccessStudent />} />
        <Route path="/create-account-success-instructor" element={<CreateAccountSuccessInstructor />} />
         <Route path="/dashboard" element={<DashboardLayout />}/>
          <Route path="/welcome" element={<Welcome />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path="/course-progress" element={<CourseProgress />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/upcoming-classes" element={<UpcomingClasses />} />
      </Routes>
    </Router>
  );
}

export default App;