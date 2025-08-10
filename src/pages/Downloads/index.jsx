import React from 'react';
import './Downloads.css';

const Downloads = () => {
  const downloads = [
    { title: "Calculus I Assignment Instructions", meta: "1 day ago . 2.4MB", type: "document" },
    { title: "Human Computer Interaction Slides", meta: "1 week ago . 5.4MB", type: "document" },
    { title: "Software Engineering Lecture Videos", meta: "1 month ago . 10.3MB", type: "video" }
  ];

  const quickActions = [
    { label: "View Calender", icon: "📅" },
    { label: "Submit Assignment", icon: "📄" },
    { label: "Study Materials", icon: "📚" }
  ];

  const FileIcon = ({ type }) => {
    if (type === 'video') {
      return (
        <span className="file-icon video-icon">
          {/* Video Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
        </span>
      );
    }
    // Default to document icon
    return (
      <span className="file-icon document-icon">
        {/* Document Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
      </span>
    );
  };

  return (
    <>
      <div className="main-card">
        <div className="main-card-header">
          {/* Download Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <h2>Recent Downloads</h2>
        </div>
        
        <div className="downloads-list">
          {downloads.map((item, index) => (
            <React.Fragment key={index}>
              <div className="download-item">
                <div className="download-info">
                  <FileIcon type={item.type} />
                  <div>
                    <h3 className="download-title">{item.title}</h3>
                    <p className="download-meta">{item.meta}</p>
                  </div>
                </div>
                <button className="download-button">
                  {/* Download Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </button>
              </div>
              {index < downloads.length - 1 && <hr className="divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="quick-actions-card">
        <h2 className="quick-actions-title">Quick Actions</h2>
        <div className="quick-actions-list">
          {quickActions.map((action, index) => (
            <button key={index} className="quick-action-button">
              <span className="quick-action-icon">{action.icon}</span>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Downloads;