import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Task List</Link>
            <Link to="/pomodoro" className={location.pathname === '/pomodoro' ? 'active' : ''}>Pomodoro Timer</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
        </div>
    );
};

export default NavBar;
