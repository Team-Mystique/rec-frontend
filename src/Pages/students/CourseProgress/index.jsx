import React from 'react';
import './CourseProgress.css';

const CourseProgress = () => {

  const handleContinueCourse = (courseName) => {
    console.log(`Continuing ${courseName}`);
    // Add navigation logic here
  };

  const courses = [
    { id: 1, name: "Calculus I", code: "MATH122", progress: 78, grade: "B+", color: "#f1c40f" },
    { id: 2, name: "Human Computer Interaction", code: "DCIT202", progress: 95, grade: "A+", color: "#f1c40f" },
    { id: 3, name: "Software Engineering", code: "DCIT208", progress: 98, grade: "A+", color: "#c0392b" },
    { id: 4, name: "Data Structure And Algorithm", code: "DCIT204", progress: 70, grade: "B", color: "#2ecc71" },
  ];

  return (
    <div className="main-card">
      <div className="main-card-header">
        {/* Document Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        <h2>Course Progress</h2>
      </div>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <div className="course-info">
              <span className="course-color-dot" style={{ backgroundColor: course.color }}></span>
              <div>
                <h3 className="course-name">{course.name}</h3>
                <p className="course-code">{course.code}</p>
              </div>
            </div>
            <div className="course-details">
              <span>Grade {course.grade}</span>
              <span className="course-progress-text">{course.progress}%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${course.progress}%`, backgroundColor: '#3498db' }}></div>
            </div>
            <button 
              className="continue-button"
              onClick={() => handleContinueCourse(course.name)}
            >
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseProgress;