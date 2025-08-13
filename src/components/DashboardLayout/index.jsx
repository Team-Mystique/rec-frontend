import React, { useState, useEffect, useRef } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import './DashboardLayout.css';

// The layout is now configured by props
const DashboardLayout = ({ user, navItems = [] }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

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

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <img src="/logo.png" alt="REC Logo" className="logo" />
          </div>
          <div className="header-right">
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </button>
            
            <div className="menu-container">
              <button 
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="icon-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
              
              {isMenuOpen && (
                <div ref={menuRef} className="dropdown-menu">
                  {navItems.map(item => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className="dropdown-item" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="user-profile">
              <span className="user-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </span>
              {/* User name is now dynamic */}
              <span>{user.name}</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        <div className="welcome-section">
            {/* The welcome message is also dynamic */}
            <h1 className="welcome-title">Good morning, {user.name}!</h1>
            <p className="welcome-subtitle">{user.welcomeMessage}</p>
        </div>
        <Outlet />
      </main>

      <footer className="dashboard-footer">
        <button onClick={() => navigate(-1)} className="footer-link">
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