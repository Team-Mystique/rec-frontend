import React from 'react';
import './Performance.css';

const Performance = () => {
  // Sample data for the performance page
  const performanceData = [
    {
      courseName: "Calculus I",
      percentage: 64,
      grade: "C",
      color: "#f1c40f" // Yellow
    },
    {
      courseName: "Human Computer Interaction",
      percentage: 73,
      grade: "B",
      color: "#f1c40f" // Yellow
    },
    {
      courseName: "Software Engineering",
      percentage: 85,
      grade: "A+",
      color: "#c0392b" // Red
    },
    {
      courseName: "Data Structure And Algorithm",
      percentage: 79,
      grade: "B+",
      color: "#2ecc71" // Green
    }
  ];

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return '#27ae60'; // Green
    if (grade.includes('B')) return '#2980b9'; // Blue
    if (grade.includes('C')) return '#f39c12'; // Orange
    return '#e74c3c'; // Red for D/F
  }

  return (
    <div className="main-card">
      <div className="main-card-header">
        {/* Trophy Icon */}
        <img src='/Trophy.png' alt="Trophy Icon" className="trophy-icon" style={{width: 24, height: 24}} />
        <h2>Performance</h2>
      </div>
      
      <div className="performance-list">
        {performanceData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="performance-item">
              <div className="performance-info">
                <span className="performance-color-dot" style={{ backgroundColor: item.color }}></span>
                <h3 className="performance-name">{item.courseName}</h3>
              </div>
              <div className="performance-grade">
                <span className="grade-letter">{item.grade}</span>
                <span className="grade-percentage">{item.percentage}%</span>
              </div>
              <div className="grade-bar-container">
                <div 
                  className="grade-bar-fill" 
                  style={{ width: `${item.percentage}%`, backgroundColor: getGradeColor(item.grade) }}
                ></div>
              </div>
            </div>
            {index < performanceData.length - 1 && <hr className="divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Performance;