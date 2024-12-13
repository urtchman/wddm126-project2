import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import logo from '../assets/images/logo.png'; 

const Header = () => {
    return (
        <header>
          <div className="logo">
            <img src={logo} alt="TravelAgent" />
          </div>
          <nav id="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/destinations">Destinations</Link>
            <Link to="/services">Services</Link>
            <Link to="/travelguide">Travel Guide</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/account/login" className="login">Login</Link>
          </nav>
          <div className="hamburger" id="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>
    );
};

export default Header;
