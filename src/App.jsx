import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import CourseProgress from './pages/CourseProgress';
import Welcome from './pages/Welcome';
import Assignments from './pages/Assignments';
import Downloads from './pages/Downloads';
import Performance from './pages/Performance';
import UpcomingClasses from './pages/UpcomingClasses';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Welcome />} />
          <Route path='/assignments' element={<Assignments />} />
          <Route path="/course-progress" element={<CourseProgress />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/upcoming-classes" element={<UpcomingClasses />} />
          {/* Other pages like Assignment Tracker can be added here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;