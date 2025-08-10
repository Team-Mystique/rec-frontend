import React from 'react';
import './UpcomingClasses.css';

const UpcomingClasses = () => {
  // Sample data for upcoming classes
  const classes = [
    {
      time: "10:00 AM - 11:00 AM",
      courseName: "Software Engineering",
      location: "Room 304",
      color: "#c0392b" // Red
    },
    {
      time: "1:00 PM - 2:00 PM",
      courseName: "Data Structure And Algorithm",
      location: "Room 212",
      color: "#2ecc71" // Green
    },
    {
      time: "3:00 PM - 4:00 PM",
      courseName: "Calculus I",
      location: "Online",
      color: "#f1c40f" // Yellow
    }
  ];

  return (
    <div className="main-card">
      <div className="main-card-header">
        {/* Calendar or Clock Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <h2>Upcoming Classes</h2>
      </div>
      
      <div className="classes-list">
        {classes.map((item, index) => (
          <div key={index} className="class-item-wrapper">
            <div className="class-item" style={{ borderLeftColor: item.color }}>
              <div className="class-details">
                <p className="class-time">{item.time}</p>
                <h3 className="class-name">{item.courseName}</h3>
              </div>
              <div className="class-action">
                <p className="class-location">{item.location}</p>
                <button className="join-button">Join</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClasses;