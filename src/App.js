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
import CourseProgress from './pages/CourseProgress';
import Welcome from './pages/Welcome';
import Assignments from './pages/Assignments';
import Downloads from './pages/Downloads';
import Performance from './pages/Performance';
import UpcomingClasses from './pages/UpcomingClasses';



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
         <Route path="/" element={<DashboardLayout />}/>
          <Route index element={<Welcome />} />
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