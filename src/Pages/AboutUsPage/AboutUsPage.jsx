import React from 'react';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <header className="header">
        <div className="logo">
          <img src="Logo.png" alt="Rise Edu Consult Logo" />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <div className="hero-text">
            <h1>Rise Edu Consult: Institute of Educational, Technology & Innovation</h1>
            <p>📍 Cape coast , Central Region,Ghana ( With Virtual reach across Ghana)</p>
          </div>
        </section>

        <section className="services">
          <h2>Overview of Services</h2>
          <ul>
            <li>AI & Digital Skills Training: Practical short courses for students, educators, and professionals.</li>
            <li>Tech Bootcamps & Webinars: Targeted training in AI, EdTech and digital tools.</li>
            <li>EdTech for Schools: Custom solutions for integrating technology in teaching and learning.</li>
            <li>Research and Thought Leadership: Publishing innovation labs and research in Education & Technology.</li>
            <li>Curriculum Development & Consulting: Support for institutions on digital integration and innovation.</li>
            <li>Volunteer & Community Programs: Youth mentorship, outreach and women-focused digital skills training.</li>
          </ul>
        </section>

        <section className="purpose">
          <h2>Purpose of Company</h2>
          <p>To empower individuals, institutions, and communities through practical, innovative, and accessible education in digital skills, technology, and AI, preparing them for opportunities in the Fourth Industrial Revolution (4IR).</p>
        </section>

        <section className="objectives">
          <h2>Objectives & Goals</h2>
          <ul>
            <li>To bridge the digital skills gap in Ghana and beyond</li>
            <li>To provide accessible and inclusive digital literacy and AI education</li>
            <li>To build capacity among youth, educators, and professionals</li>
            <li>To promote innovation and lifelong learning through technology</li>
            <li>To become a leading hub for educational technology training and research in Ghana</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Rise Edu Consult All Rights Reserved</p>
          <div className="footer-links">
            <a href="#terms">Terms and Conditions</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;