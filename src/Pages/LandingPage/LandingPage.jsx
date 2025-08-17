import React from 'react';
import Header from './Header';
import Hero from './Hero';
import './LandingPage.css'; // Import the CSS

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            {/* You can add more sections of your landing page here */}
        </>
    );
};

export default LandingPage;