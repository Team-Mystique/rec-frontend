import React, { useState } from 'react';
import './Announcements.css'; // New CSS file

const Announcements = () => {
  // State to hold the list of announcements
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: "Mid-term Exam Schedule Update", content: "The schedule for the mid-term exam has been updated. Please check the 'Exams' section for more details.", date: "2025-08-10" },
    { id: 2, title: "Guest Lecture on Friday", content: "We will have a guest lecture this Friday by Dr. Evelyn Reed on the topic of 'AI in Modern Software'. Attendance is mandatory.", date: "2025-08-08" },
  ]);
  // State for the new announcement being drafted
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const handlePublish = () => {
    if (newAnnouncement.trim() === "") {
      alert("Announcement content cannot be empty.");
      return;
    }
    
    // Create a new announcement object
    const newEntry = {
      id: announcements.length + 1,
      // For simplicity, we'll derive a title from the content
      title: newAnnouncement.substring(0, 30) + "...",
      content: newAnnouncement,
      date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
    };

    // Add the new announcement to the top of the list
    setAnnouncements([newEntry, ...announcements]);
    // Clear the text area
    setNewAnnouncement("");
  };

  return (
    <div className="main-card">
      <div className="main-card-header">
        {/* Megaphone/Announcement Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v-2a6 6 0 0 1 12 0v2"></path><path d="M6 12h12"></path><path d="M10 16v-4"></path><path d="M14 16v-4"></path><path d="M12 12v8l-4-4"></path><path d="M12 20l4-4"></path></svg>
        <h2>Create & View Announcements</h2>
      </div>

      {/* Announcement Creator */}
      <div className="announcement-creator">
        <h3 className="creator-title">New Announcement</h3>
        <textarea
          className="creator-textarea"
          placeholder="Type your announcement here..."
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
        ></textarea>
        <div className="creator-actions">
          <button className="publish-button" onClick={handlePublish}>
            Publish Announcement
          </button>
        </div>
      </div>

      {/* Published Announcements */}
      <div className="published-announcements">
        <h3 className="published-title">Previously Published</h3>
        <div className="announcements-list">
          {announcements.map((item) => (
            <div key={item.id} className="announcement-item">
              <div className="announcement-header">
                <h4 className="announcement-item-title">{item.title}</h4>
                <span className="announcement-date">{item.date}</span>
              </div>
              <p className="announcement-content">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;