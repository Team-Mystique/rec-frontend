import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './AdminLayout.css'; // Will be modified

const AdminLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const adminNavItems = [
    { path: '/', label: 'Dashboard', icon: '🏠' },
    { path: "users", label: 'User Management', icon: '👥' },
    { path: "courses", label: 'Course Management', icon: '📚' },
    { path: "analytics", label: 'Analytics', icon: '📊' },
    { path: "settings", label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className={`admin-layout ${isSidebarOpen ? 'sidebar-is-open' : ''}`}>
      {/* --- Sidebar --- */}
      <aside className="sidebar" ref={sidebarRef}>
        <div className="sidebar-header">
          <img src="/logo.png" alt="REC Logo" className="sidebar-logo" />
          <span className="sidebar-title">Admin Panel</span>
        </div>
        <nav className="sidebar-nav">
          {adminNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* --- Sidebar Overlay (for mobile) --- */}
      <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>

      {/* --- Main Content Area --- */}
      <div className="admin-main-content">
        {/* --- Top Bar --- */}
        <header className="admin-topbar">
          {/* Hamburger Menu Button (Mobile) */}
          <button 
            className="sidebar-toggle-btn" 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            ref={menuButtonRef}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          
          <div className="topbar-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="topbar-profile">
            <span>Admin User</span>
            <div className="admin-user-icon">A</div>
          </div>
        </header>

        <main className="admin-page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;