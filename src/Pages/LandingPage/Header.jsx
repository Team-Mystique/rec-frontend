import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './logo.png'; // Make sure your logo is here

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const NavButton = ({ text, type, onClick }) => (
        <button className={`nav-btn btn-${type}`} onClick={onClick}>
            {text}
        </button>
    );

    return (
        <header className="header">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img src={logo} alt="Rise Edu Consult Logo" />
                </a>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                <nav>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='/' className='nav-links' onClick={() => setClick(false)}>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/course-catalog' className='nav-links' onClick={() => setClick(false)}>Courses</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/about-us' className='nav-links' onClick={() => setClick(false)}>About us</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/contact' className='nav-links' onClick={() => setClick(false)}>Contact us</a>
                        </li>
                         {/* Buttons will be part of the mobile menu on small screens */}
                         <li className='nav-buttons'>
                            <a href='/register' className='nav-buttons' onClick={() => setClick(false)}><NavButton text="Log in" type="login" /></a>
                            <a href='/register' className='nav-buttons' onClick={() => setClick(false)}><NavButton text="Register" type="register" /></a>
                           
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;