import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myIma from './Assets/1.png';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar">
            <img id="image" src={myIma} alt="Logo" />

            {/* Navbar Links */}
            <ul className="navbar-list">
                <li
                    className={`navbar-item ${activeLink === 'home' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('home')}
                >
                    <Link to="/">Home</Link>
                </li>
                <li
                    className={`navbar-item ${activeLink === 'about' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('about')}
                >
                    <Link to="/about">About</Link>
                </li>
                <li
                    className={`navbar-item ${activeLink === 'projects' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('projects')}
                >
                    <Link to="/projects">Projects</Link>
                </li>
                <li
                    className={`navbar-item ${activeLink === 'contact' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('contact')}
                >
                    <Link to="/contact">Contact</Link>
                </li>
                <li
                    className={`navbar-item ${activeLink === 'resume' ? 'active' : ''}`}
                    onClick={() => handleLinkClick('resume')}
                >
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
