import React from 'react';
import './StudentPerformance.css'; // New CSS file

const StudentPerformance = () => {
  // Mock data for course performance summaries
  const courses = [
    { 
      id: 1, 
      name: "Human Computer Interaction", 
      code: "DCIT202", 
      avgGrade: "A-", 
      topPerformer: "Jane Doe", 
      atRisk: 3 
    },
    { 
      id: 2, 
      name: "Software Engineering", 
      code: "DCIT208", 
      avgGrade: "B+", 
      topPerformer: "John Smith", 
      atRisk: 1 
    },
    { 
      id: 3, 
      name: "Calculus I", 
      code: "MATH122", 
      avgGrade: "B", 
      topPerformer: "Emily White", 
      atRisk: 5 
    },
  ];

  const handleViewReport = (courseName) => {
    console.log(`Viewing detailed report for ${courseName}`);
  };

  return (
    <div className="main-card">
      <div className="main-card-header">
        {/* Chart/Graph Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>
        <h2>Student Performance Overview</h2>
      </div>
      <div className="performance-list">
        {courses.map((course) => (
          <div key={course.id} className="performance-item">
            <div className="performance-course-info">
              <h3 className="performance-course-name">{course.name}</h3>
              <p className="performance-course-code">{course.code}</p>
            </div>
            <div className="performance-stats">
              <div className="stat">
                <span className="stat-value">{course.avgGrade}</span>
                <span className="stat-label">Avg. Grade</span>
              </div>
              <div className="stat">
                <span className="stat-value">{course.atRisk}</span>
                <span className="stat-label">Students at Risk</span>
              </div>
            </div>
            <div className="performance-actions">
                <button 
                  className="report-button"
                  onClick={() => handleViewReport(course.name)}
                >
                  View Detailed Report
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPerformance;