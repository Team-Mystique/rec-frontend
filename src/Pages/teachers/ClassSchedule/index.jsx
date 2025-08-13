import React from 'react';
import './ClassSchedule.css'; // New CSS file

const ClassSchedule = () => {
  // Mock data for the teacher's schedule
  const schedule = [
    { id: 1, name: "Human Computer Interaction", code: "DCIT202", time: "10:00 AM - 11:30 AM", platform: "Zoom" },
    { id: 2, name: "Software Engineering", code: "DCIT208", time: "1:00 PM - 2:30 PM", platform: "Google Meet" },
    { id: 3, name: "Calculus I", code: "MATH122", time: "3:00 PM - 4:30 PM", platform: "Zoom" },
  ];

  const handleStartClass = (courseName) => {
    // In a real app, this would trigger a navigation or API call
    console.log(`Starting class for ${courseName}`);
  };

  return (
    <div className="main-card">
      <div className="main-card-header">
        {/* Calendar Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <h2>Today's Class Schedule</h2>
      </div>
      <div className="schedule-list">
        {schedule.map((item) => (
          <div key={item.id} className="schedule-item">
            <div className="schedule-info">
              <h3 className="schedule-course-name">{item.name}</h3>
              <p className="schedule-course-code">{item.code}</p>
            </div>
            <div className="schedule-details">
              <span className="schedule-time">{item.time}</span>
              <span className="schedule-platform">Platform: {item.platform}</span>
            </div>
            <button 
              className="start-class-button"
              onClick={() => handleStartClass(item.name)}
            >
              Start Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassSchedule;