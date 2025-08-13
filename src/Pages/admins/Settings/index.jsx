import React from 'react';
import './Settings.css'; // Link to the separate CSS file

const Settings = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully! (This is a simulation)");
  };

  return (
    <div className="settings-page">
      <form onSubmit={handleSubmit}>
        {/* Page Header */}
        <div className="page-header">
          <h1>Platform Settings</h1>
          <button type="submit" className="save-button">Save All Changes</button>
        </div>

        {/* General Settings Card */}
        <div className="settings-card">
          <h3 className="card-title">General Settings</h3>
          <div className="form-group">
            <label htmlFor="siteName">Site Name</label>
            <input type="text" id="siteName" className="form-input" defaultValue="REC Learning Platform" />
          </div>
          <div className="form-group">
            <label htmlFor="siteLogo">Site Logo</label>
            <input type="file" id="siteLogo" className="form-input" />
            <small>Upload a new logo. Current logo: logo.png</small>
          </div>
          <div className="form-group">
            <label htmlFor="adminEmail">Administrator Email</label>
            <input type="email" id="adminEmail" className="form-input" defaultValue="admin@example.com" />
          </div>
        </div>

        {/* User Settings Card */}
        <div className="settings-card">
          <h3 className="card-title">User & Registration</h3>
          <div className="form-group">
            <label htmlFor="defaultRole">Default Role for New Users</label>
            <select id="defaultRole" className="form-select">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <div className="form-group toggle-group">
            <label htmlFor="requireVerification">Require Email Verification</label>
            <label className="switch">
              <input type="checkbox" id="requireVerification" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="form-group toggle-group">
            <label htmlFor="allowRegistration">Allow New User Registrations</label>
            <label className="switch">
              <input type="checkbox" id="allowRegistration" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        
        {/* Security Settings Card */}
        <div className="settings-card">
          <h3 className="card-title">Security</h3>
          <div className="form-group toggle-group">
            <label htmlFor="twoFactorAuth">Enable Two-Factor Authentication (2FA)</label>
            <label className="switch">
              <input type="checkbox" id="twoFactorAuth" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="sessionTimeout">Session Timeout (in minutes)</label>
            <input type="number" id="sessionTimeout" className="form-input" defaultValue="60" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;