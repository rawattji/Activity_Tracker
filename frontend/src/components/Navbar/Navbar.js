import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoImage from './Logo.png'; // Adjust the path as necessary
import gearImage from './gear.png'; // Adjust the path as necessary

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/" className="navbar-brand">
          <div className="logo-container">
            <img src={logoImage} alt="Activity Tracker Logo" className="logo" />
            <span className="brand-name">Activity Tracker</span>
          </div>
        </NavLink>
      </div>

      <div className="navbar-center">
        <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
        <NavLink to="/restricted-list" activeClassName="active">Restricted List</NavLink>
        <NavLink to="/limits" activeClassName="active">Limits</NavLink>

        <div className="navbar-item" onMouseLeave={closeDropdown}>
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            More
          </button>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <NavLink to="/feedback" activeClassName="active" className="dropdown-item" onClick={closeDropdown}>Feedback</NavLink>
              <NavLink to="/motivation" activeClassName="active" className="dropdown-item" onClick={closeDropdown}>Motivation</NavLink>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-right">
        <NavLink to="/settings" activeClassName="active">
          <img src={gearImage} alt="Settings" className="icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
