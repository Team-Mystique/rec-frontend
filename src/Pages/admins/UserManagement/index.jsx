import React, { useState, useMemo } from 'react';
import './UserManagement.css'; // New CSS file

const UserManagement = () => {
  // A more comprehensive mock user list
  const allUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Student', status: 'Active', joinDate: '2023-01-15' },
    { id: 2, name: 'Dr. Jane Smith', email: 'jane.smith@example.com', role: 'Teacher', status: 'Active', joinDate: '2022-08-20' },
    { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'Admin', status: 'Active', joinDate: '2022-05-10' },
    { id: 4, name: 'Emily White', email: 'emily.white@example.com', role: 'Student', status: 'Suspended', joinDate: '2023-03-22' },
    { id: 5, name: 'Richard Roe', email: 'richard.roe@example.com', role: 'Student', status: 'Active', joinDate: '2023-09-01' },
    { id: 6, name: 'Prof. Alan Turing', email: 'alan.turing@example.com', role: 'Teacher', status: 'Active', joinDate: '2022-11-30' },
    { id: 7, name: 'Susan B. Anthony', email: 'susan.b@example.com', role: 'Student', status: 'Active', joinDate: '2024-02-18' },
  ];

  const [users] = useState(allUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // Memoized filtering logic
  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = roleFilter === 'All' || user.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [users, searchTerm, roleFilter]);

  // Handler for user actions
  const handleAction = (userId, action) => {
    alert(`User ID: ${userId}, Action: ${action}`);
    // In a real app, this would dispatch an action or call an API
  };

  return (
    <div className="user-management-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>User Management</h1>
        <button className="add-user-btn">+ Add New User</button>
      </div>

      {/* Filter and Search Controls */}
      <div className="filter-controls">
        <input 
          type="text" 
          placeholder="Search by name or email..." 
          className="search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="role-filter">
          <label htmlFor="role">Filter by role:</label>
          <select 
            id="role" 
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value)}
          >
            <option value="All">All Roles</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status-badge status-${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td className="actions-cell">
                  <button className="action-btn btn-edit" onClick={() => handleAction(user.id, 'Edit')}>Edit</button>
                  <button className="action-btn btn-suspend" onClick={() => handleAction(user.id, 'Suspend')}>Suspend</button>
                  <button className="action-btn btn-delete" onClick={() => handleAction(user.id, 'Delete')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;