import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Effect to handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Define the navigation links for the dropdown menu
  const menuItems = [
    { path: '/course-progress', label: 'Course Progress' },
    { path: '/assignments', label: 'Assignment Tracker' },
    { path: '/upcoming-classes', label: 'Upcoming Classes' },
    { path: '/performance', label: 'Performance' },
    { path: '/downloads', label: 'Downloads' },
  ];

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <img src="/logo.png" alt="REC Logo" className="logo" />
          </div>
          <div className="header-right">
            <button className="icon-button">
              {/* Bell Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
            
            <div className="menu-container">
              <button 
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="icon-button"
              >
                {/* Menu Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
              
              {isMenuOpen && (
                <div ref={menuRef} className="dropdown-menu">
                  {menuItems.map(item => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className="dropdown-item" 
                      onClick={() => setIsMenuOpen(false)} // Close menu on item click
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="user-profile">
              {/* User Icon */}
              <span className="user-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </span>
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        <div className="welcome-section">
            <h1 className="welcome-title">Good morning, John!</h1>
            <p className="welcome-subtitle">Here's what's happening with your studies today.</p>
        </div>
        <Outlet />
      </main>

      <footer className="dashboard-footer">
        <button onClick={() => navigate(-1)} className="footer-link">
          {/* Back Arrow Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back
        </button>
        <button onClick={() => navigate('/')} className="footer-link">
          Return to homepage
        </button>
      </footer>
    </div>
  );
};

export default DashboardLayout;