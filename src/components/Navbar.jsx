import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo_kcr.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="KCR Official Logo" />
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">About KCR <span className="dropdown-icon">▾</span></span>
            <ul className="dropdown-menu">
              <li><Link to="/about-kcr/overview">Overview</Link></li>
              <li><Link to="/about-kcr/political-career">Political Career</Link></li>
              <li><Link to="/about-kcr/leadership-style">Leadership Style</Link></li>
              <li><Link to="/about-kcr/timeline">Timeline</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/vision-mission" className="nav-link">Vision & Mission</Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Achievements <span className="dropdown-icon">▾</span></span>
            <ul className="dropdown-menu">
              <li><Link to="/achievements/irrigation">Irrigation & Infrastructure</Link></li>
              <li><Link to="/achievements/agriculture">Agriculture & Farmers</Link></li>
              <li><Link to="/achievements/welfare">Welfare Schemes</Link></li>
              <li><Link to="/achievements/health">Health & Women Empowerment</Link></li>
              <li><Link to="/achievements/economic">Economic Growth</Link></li>
              <li><Link to="/achievements/culture">Culture & Heritage</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link">Schemes <span className="dropdown-icon">▾</span></span>
            <ul className="dropdown-menu">
              <li><Link to="/schemes/rythu-bandhu">Rythu Bandhu</Link></li>
              <li><Link to="/schemes/mission-bhagiratha">Mission Bhagiratha</Link></li>
              <li><Link to="/schemes/kcr-kit">KCR Kit</Link></li>
              <li><Link to="/schemes/2bhk-housing">2BHK Housing</Link></li>
              <li><Link to="/schemes/aasara-pensions">Aasara Pension</Link></li>
              <li><Link to="/schemes/dalit-bandhu">Dalit Bandhu</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/news-media" className="nav-link">News & Media</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-contact-btn">
              <span>Contact</span>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="20" ry="20"/>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
