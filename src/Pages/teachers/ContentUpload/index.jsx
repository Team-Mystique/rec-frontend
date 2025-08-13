import React, { useRef, useState } from 'react';
import './ContentUpload.css'; // The CSS will also be updated

const ContentUpload = () => {
  // Ref for the hidden file input element
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Mock data for recently uploaded files
  const recentFiles = [
    { name: "Lecture_Slides_Week_5.pdf", size: "2.5 MB", date: "2025-08-10" },
    { name: "Assignment_3_Brief.docx", size: "78 KB", date: "2025-08-09" },
    { name: "Recommended_Reading_List.pdf", size: "512 KB", date: "2025-08-07" },
  ];

  // This function is triggered when the user selects files from the dialog
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log("Selected files:", files);
      alert(`${files.length} file(s) selected. Check the console.`);
      // Real app: start upload process here
    }
  };
  
  // This function is now ONLY called by the button
  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  // --- Drag and Drop Handlers (Remain on the dropzone) ---
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      fileInputRef.current.files = files;
      console.log("Dropped files:", files);
      alert(`${files.length} file(s) dropped. Check the console.`);
      // Real app: start upload process here
    }
  };

  return (
    <div className="main-card">
      <div className="main-card-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
        <h2>Content Upload & Management</h2>
      </div>

      {/* Hidden file input remains the same */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange}
        style={{ display: 'none' }}
        multiple 
      />
      
      {/* Drag and Drop Area - NO onClick here */}
      <div 
        className={`upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bdc3c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
        </div>
        <p className="upload-text">Drag & drop files here</p>
        <p className="upload-subtext">or</p>
        {/* The button now handles the click exclusively */}
        <button 
          type="button" 
          className="browse-button" 
          onClick={triggerFileSelect}
        >
          Browse Files
        </button>
      </div>

      {/* Recently Uploaded Files Section */}
      <div className="recent-uploads">
        {/* ... (This section remains unchanged) ... */}
        <h3 className="recent-uploads-title">Recently Uploaded</h3>
        <div className="file-list">
          {recentFiles.map((file, index) => (
            <div key={index} className="file-item">
              <div className="file-icon">📄</div>
              <div className="file-details">
                <span className="file-name">{file.name}</span>
                <span className="file-meta">{file.size} - {file.date}</span>
              </div>
              <div className="file-actions">
                <button className="file-action-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentUpload;