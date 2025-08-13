import React from 'react';
import './TeacherWelcome.css'; // New CSS file for styling
const TeacherWelcome = () => {
    // Data for the teacher dashboard cards
    const teacherWidgets = [
        {
            title: "Class Schedule",
            description: "3 classes scheduled for today.",
            icon: "📅"
        },
        {
            title: "Assignment Review",
            description: "12 submissions need grading.",
            icon: "📝"
        },
        {
            title: "Student Performance",
            description: "View analytics and progress reports.",
            icon: "📊"
        },
        {
            title: "Content Upload",
            description: "Manage course materials and files.",
            icon: "📤"
        },
    ];
    return (
        <div className="teacher-welcome-grid">
            {teacherWidgets.map((widget, index) => (
                <div key={index} className="widget-card">
                    <div className="widget-icon">{widget.icon}</div>
                    <div className="widget-content">
                        <h3 className="widget-title">{widget.title}</h3>
                        <p className="widget-description">{widget.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TeacherWelcome;