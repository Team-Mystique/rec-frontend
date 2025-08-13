import React from 'react';
import './Analytics.css'; // Link to the separate CSS file

const Analytics = () => {
  // Mock data for the page
  const keyMetrics = [
    { label: "Total Revenue", value: "$84,521", change: "+12.5%", isPositive: true },
    { label: "New Enrollments (30d)", value: "312", change: "+8.2%", isPositive: true },
    { label: "Course Completions", value: "1,489", change: "+21.1%", isPositive: true },
    { label: "Average Session", value: "24m 15s", change: "-1.8%", isPositive: false },
  ];

  const topCourses = [
    { name: "Introduction to Python", revenue: "$12,500", enrollments: 250 },
    { name: "Human Computer Interaction", revenue: "$9,600", enrollments: 120 },
    { name: "Software Engineering", revenue: "$8,550", enrollments: 95 },
    { name: "Calculus I", revenue: "$7,200", enrollments: 180 },
  ];

  return (
    <div className="analytics-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Analytics & Reports</h1>
        <div className="date-range-picker">
          <label htmlFor="date-range">Date Range:</label>
          <select id="date-range">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
            <option>All Time</option>
          </select>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="key-metrics-grid">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <p className="metric-label">{metric.label}</p>
            <p className="metric-value">{metric.value}</p>
            <p className={`metric-change ${metric.isPositive ? 'positive' : 'negative'}`}>
              {metric.change} vs previous period
            </p>
          </div>
        ))}
      </div>

      {/* Main Chart Placeholder */}
      <div className="main-chart-container">
        <h3>Enrollment Trends</h3>
        <div className="chart-placeholder large">
          <span>Chart Area: Enrollment Over Time</span>
        </div>
      </div>

      {/* Secondary Widgets Grid */}
      <div className="secondary-widgets-grid">
        <div className="chart-container">
          <h3>Course Popularity</h3>
          <div className="chart-placeholder">
            <span>Doughnut Chart: Enrollments by Course</span>
          </div>
        </div>
        <div className="data-table-widget">
          <h3>Top Performing Courses</h3>
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Revenue</th>
                <th>Enrollments</th>
              </tr>
            </thead>
            <tbody>
              {topCourses.map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.revenue}</td>
                  <td>{course.enrollments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;