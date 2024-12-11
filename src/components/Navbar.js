import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">ADD VALUE TO INDIAN MIDDLE CLASS RESIDENTIAL PROPERTIES</h1>
      <ul className="navbar-menu">   
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/amenties">Amenties</Link></li>
        <li><Link to="/team">Team</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
