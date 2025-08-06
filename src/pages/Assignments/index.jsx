import React from 'react';
import './Assignments.css';

const Assignments = () => {
  // Sample data for the assignment tracker
  const assignments = [
    {
      courseName: "Calculus I",
      courseCode: "MATH122",
      dueDate: "Due in 1 day",
      status: "in progress",
      color: "#f1c40f" // Yellow
    },
    {
      courseName: "Human Computer Interaction",
      courseCode: "DCIT202",
      dueDate: "Due in 5 hrs",
      status: "Submitted",
      color: "#f1c40f" // Yellow
    },
    {
      courseName: "Software Engineering",
      courseCode: "DCIT208",
      dueDate: "Due in 3 days",
      status: "pending",
      color: "#c0392b" // Red
    },
    {
      courseName: "Data Structure And Algorithm",
      courseCode: "DCIT204",
      dueDate: "Due in 1 week",
      status: "pending",
      color: "#2ecc71" // Green
    }
  ];

  // Helper function to determine the class for the status tag
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'status-in-progress';
      case 'submitted':
        return 'status-submitted';
      case 'pending':
        return 'status-pending';
      default:
        return '';
    }
  };

  return (
    <div className="main-card">
      <div className="main-card-header">
        {/* Document Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        <h2>Assignment Tracker</h2>
      </div>
      
      <div className="assignments-list">
        {assignments.map((assignment, index) => (
          <React.Fragment key={index}>
            <div className="assignment-item">
              <div className="assignment-info">
                <span className="assignment-color-dot" style={{ backgroundColor: assignment.color }}></span>
                <div>
                  <h3 className="assignment-name">{assignment.courseName}</h3>
                  <p className="assignment-code">{assignment.courseCode}</p>
                </div>
              </div>
              <div className="assignment-status">
                <p className="due-date">{assignment.dueDate}</p>
                <span className={`status-tag ${getStatusClass(assignment.status)}`}>
                  {assignment.status}
                </span>
              </div>
            </div>
            {index < assignments.length - 1 && <hr className="divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Assignments;