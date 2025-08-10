import React from 'react';
import './Welcome.css';

const Welcome = () => {
  // Data for the statistical cards
  const stats = [
    {
      title: "Overall GPA",
      value: "3.8",
      description: "Above average",
    },
    {
      title: "Active Courses",
      value: "3",
      description: "This semester",
    },
    {
      title: "Pending Tasks",
      value: "5",
      description: "Due this week",
    },
    {
      title: "Study Streak",
      value: "12",
      description: "Days in a row",
    },
  ];

  return (
    <div className="welcome-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <p className="stat-title">{stat.title}</p>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-description">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Welcome;