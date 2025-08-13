import React from 'react';
import './AssignmentReview.css'; // New CSS file

const AssignmentReview = () => {
  // Mock data for assignments needing review
  const assignments = [
    { id: 1, title: "Essay on Prototyping", course: "Human Computer Interaction", submissions: 32, total: 35, color: "#f1c40f" },
    { id: 2, title: "Project Proposal", course: "Software Engineering", submissions: 28, total: 30, color: "#c0392b" },
    { id: 3, title: "Algorithm Analysis Worksheet", course: "Data Structures", submissions: 15, total: 40, color: "#2ecc71" },
  ];

  const handleReview = (assignmentTitle) => {
    alert(`Reviewing submissions for ${assignmentTitle}`);
  };

  return (
    <div className="main-card">
      <div className="main-card-header">
        {/* Edit/Review Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        <h2>Assignment Review</h2>
      </div>
      <div className="assignments-list">
        {assignments.map((item) => (
          <div key={item.id} className="assignment-review-item">
            <div className="assignment-info">
              <span className="course-color-dot" style={{ backgroundColor: item.color }}></span>
              <div>
                <h3 className="assignment-title">{item.title}</h3>
                <p className="assignment-course">{item.course}</p>
              </div>
            </div>
            <div className="submission-status">
              <span className="submission-count">{item.submissions}/{item.total}</span>
              <p className="submission-label">Submissions Graded</p>
            </div>
            <button 
              className="review-button"
              onClick={() => handleReview(item.title)}
            >
              Review Submissions
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentReview;