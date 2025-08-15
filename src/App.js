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
import ForgotPasswordAdmin from './Pages/ForgotPasswordPageAdmin/ForgotPasswordAdmin.jsx';
import ForgotPasswordInstructor from './Pages/ForgotPasswordPageInstructor/ForgotPasswordInstructor.jsx';
import ForgotPasswordStudent from './Pages/ForgotPasswordPageStudent/ForgotPasswordStudent.jsx';
import CreateAccountSuccessStudent from './Pages/CreateAccountSuccessPageStudent/Success.jsx'; 
import CreateAccountSuccessInstructor from './Pages/CreateAccountSuccessPageInstructor/Success.jsx'; 
import DashboardLayout from './components/DashboardLayout/index.jsx';
import AdminLayout from './components/AdminLayout';
import CourseProgress from './Pages/students/CourseProgress';
import Welcome from './Pages/students/Welcome';
import Assignments from './Pages/students/Assignments';
import Downloads from './Pages/students/Downloads';
import Performance from './Pages/students/Performance';
import UpcomingClasses from './Pages/students/UpcomingClasses';

import TeacherWelcome from './Pages/teachers/TeacherWelcome';
import AssignmentReview from './Pages/teachers/AssignmentReview';
import ClassSchedule from './Pages/teachers/ClassSchedule';
import ContentUpload from './Pages/teachers/ContentUpload';
import StudentPerformance from './Pages/teachers/StudentPerformance';
import Announcements from './Pages/teachers/AnnouncementsCreator';

import AdminWelcome from './Pages/admins/AdminWelcome';
import UserManagement from './Pages/admins/UserManagement';
import CourseManagement from './Pages/admins/CourseManagement';
import Analytics from './Pages/admins/Analytics'; 
import Settings from './Pages/admins/Settings';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage.jsx';


function App() {
  // Define user data and navigation links
  const studentData = {
    user: {
      name: 'John',
      welcomeMessage: "Here's what's happening with your studies today.",
    },
    navItems: [
      { path: '/students/course-progress', label: 'Course Progress' },
      { path: '/students/assignments', label: 'Assignment Tracker' },
      { path: '/students/upcoming-classes', label: 'Upcoming Classes' },
      { path: '/students/performance', label: 'Performance' },
      { path: '/students/downloads', label: 'Downloads' },
    ]
  };

  const teacherData = {
    user: {
      name: 'Prof. Mark',
      welcomeMessage: "Here's your teaching dashboard for today.",
    },
    navItems: [
      { path: '/teachers/schedule', label: 'Class Schedule' },
      { path: '/teachers/assignments', label: 'Assignment Review' },
      { path: '/teachers/performance', label: 'Student Performance' },
      { path: '/teachers/content', label: 'Content Upload' },
      { path: '/teachers/announcements', label: 'Announcements' },
    ]
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
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
        <Route path="/forgot-password-student" element={<ForgotPasswordStudent />} />
          <Route path="/forgot-password-admin" element={<ForgotPasswordAdmin />} />
            <Route path="/forgot-password-instructor" element={<ForgotPasswordInstructor/>} />
        <Route path="/create-account-success-student" element={<CreateAccountSuccessStudent />} />
        <Route path="/create-account-success-instructor" element={<CreateAccountSuccessInstructor />} />
         <Route path="/dashboard" element={<DashboardLayout />}/>
          <Route path="/welcome" element={<Welcome />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path="/course-progress" element={<CourseProgress />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/upcoming-classes" element={<UpcomingClasses />} />
          <Route path="/about-us" element={<AboutUsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;