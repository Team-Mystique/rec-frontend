import React, { useState, useMemo } from 'react';
import './CourseManagement.css'; // Link to the separate CSS file

const CourseManagement = () => {
  // Mock data for the list of courses
  const initialCourses = [
    { id: 1, title: 'Human Computer Interaction', code: 'DCIT202', teacher: 'Dr. Jane Smith', students: 120, status: 'Published' },
    { id: 2, title: 'Software Engineering', code: 'DCIT208', teacher: 'Dr. Jane Smith', students: 95, status: 'Published' },
    { id: 3, title: 'Introduction to Python', code: 'CS101', teacher: 'Prof. Alan Turing', students: 250, status: 'Published' },
    { id: 4, title: 'Advanced Algorithms', code: 'CS401', teacher: 'Prof. Alan Turing', students: 60, status: 'Draft' },
    { id: 5, title: 'Calculus I', code: 'MATH122', teacher: 'Dr. Emily Carter', students: 180, status: 'Published' },
    { id: 6, title: 'Linear Algebra', code: 'MATH221', teacher: 'Dr. Emily Carter', students: 0, status: 'Archived' },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Memoized filtering for performance
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.code.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || course.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [courses, searchTerm, statusFilter]);

  const handleAction = (courseId, action) => {
    alert(`Course ID: ${courseId}, Action: ${action}`);
    // API calls would go here in a real application
  };

  return (
    <div className="course-management-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>Course Management</h1>
        <button className="add-course-btn">+ Create New Course</button>
      </div>

      {/* Filter and Search Controls */}
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Search by course title or code..."
          className="search-input"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="status-filter">
          <label htmlFor="status">Filter by status:</label>
          <select
            id="status"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Courses Table */}
      <div className="courses-table-container">
        <table className="courses-table">
          <thead>
            <tr>
              <th>Course Title</th>
              <th>Teacher</th>
              <th>Students</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map(course => (
              <tr key={course.id}>
                <td>
                  <div className="course-title-cell">{course.title}</div>
                  <div className="course-code-cell">{course.code}</div>
                </td>
                <td>{course.teacher}</td>
                <td>{course.students}</td>
                <td>
                  <span className={`status-badge status-${course.status.toLowerCase()}`}>
                    {course.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="action-btn btn-edit" onClick={() => handleAction(course.id, 'Edit')}>Edit</button>
                  <button className="action-btn btn-view" onClick={() => handleAction(course.id, 'View Students')}>View</button>
                  <button className="action-btn btn-archive" onClick={() => handleAction(course.id, 'Archive')}>Archive</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseManagement;