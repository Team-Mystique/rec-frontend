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
        {/* Public Routes */}
        {/* <Route path="/" element={<LandingPage />} /> */}

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup1" element={<SignUpPage1 />} />
        <Route path="/signup2" element={<SignUpPage2 />} />
        <Route path="/signup3" element={<SignUpPage3 />} />
        <Route path="/verify-email" element={<VerifyYourEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-account-success" element={<CreateAccountSuccess />} />

        {/* Student Dashboard Routes */}
        <Route path="/students" element={<DashboardLayout {...studentData} />}>
          <Route index element={<Welcome />} />
          <Route path="/students/assignments" element={<Assignments />} />
          <Route path="/students/course-progress" element={<CourseProgress />} />
          <Route path="/students/downloads" element={<Downloads />} />
          <Route path="/students/performance" element={<Performance />} />
          <Route path="/students/upcoming-classes" element={<UpcomingClasses />} />
        </Route>

        {/* Teacher Dashboard Routes */}
        <Route path="/teachers" element={<DashboardLayout {...teacherData} />}>
          <Route index element={<TeacherWelcome />} />
          <Route path="/teachers/assignments" element={<AssignmentReview />} />
          <Route path="/teachers/schedule" element={<ClassSchedule />} />

          <Route path="/teachers/content" element={<ContentUpload />} />
          <Route path="/teachers/performance" element={<StudentPerformance />} />
          <Route path="/teachers/announcements" element={<Announcements />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<AdminWelcome />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/courses" element={<CourseManagement />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path="/admin/settings" element={<Settings />} />


          {/* Add more admin routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


