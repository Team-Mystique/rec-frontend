import React from 'react';
import './AdminWelcome.css'; // New CSS file

const AdminWelcome = () => {
  // Mock Data
  const stats = [
    { value: '1,250', label: 'Total Users', icon: '👥' },
    { value: '82', label: 'Active Courses', icon: '📚' },
    { value: '$15,750', label: 'Monthly Revenue', icon: '💰' },
    { value: '4.8%', label: 'Conversion Rate', icon: '📈' },
  ];
  const activityFeed = [
    { user: 'John Doe', action: 'enrolled in "Calculus I"', time: '2 mins ago' },
    { user: 'Dr. Smith', action: 'published an announcement', time: '15 mins ago' },
    { user: 'Jane Doe', action: 'completed "HCI"', time: '1 hour ago' },
    { user: 'Admin', action: 'approved 3 new users', time: '3 hours ago' },
  ];
  const pendingUsers = ['Richard Roe', 'Emily Stone'];

  return (
    <div className="admin-dashboard">
      {/* Page Header */}
      <div className="dashboard-header-section">
        <h1>Admin Dashboard</h1>
        <div className="quick-actions-panel">
          <button className="quick-action-btn">+ Create Course</button>
          <button className="quick-action-btn">Manage Users</button>
          <button className="quick-action-btn">View Reports</button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card-admin">
            <div className="stat-icon-admin">{stat.icon}</div>
            <div className="stat-info-admin">
              <span className="stat-value-admin">{stat.value}</span>
              <span className="stat-label-admin">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Grid for Activity and User Management */}
      <div className="dashboard-columns">
        {/* Recent Activity Feed */}
        <div className="widget-container">
          <h3 className="widget-title">Recent Activity</h3>
          <table className="activity-table">
            <tbody>
              {activityFeed.map((item, index) => (
                <tr key={index}>
                  <td><strong>{item.user}</strong> {item.action}</td>
                  <td className="time-col">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* User Management Widget */}
        <div className="widget-container">
          <h3 className="widget-title">Pending Approvals</h3>
          <div className="pending-users-list">
            {pendingUsers.map((name, index) => (
              <div key={index} className="pending-user-item">
                <span>{name}</span>
                <div className="user-actions">
                  <button className="btn-approve">Approve</button>
                  <button className="btn-deny">Deny</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminWelcome;