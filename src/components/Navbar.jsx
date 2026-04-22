import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo_kcr.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      // Navbar sticky state with hysteresis
      if (!scrolled && currentScroll > 80) {
        setScrolled(true);
      } else if (scrolled && currentScroll < 30) {
        setScrolled(false);
      }

      // Show Join Us button after passing Hero CTA (~600px)
      if (currentScroll > 600) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-top">
        <div className="nav-top-container">
          <div className="nav-top-left">
            <div className="language-bar">
              <span className="lang-item active">English</span>
              <span className="lang-divider"></span>
              <span className="lang-item">Hindi</span>
              <span className="lang-divider"></span>
              <span className="lang-item">Telugu</span>
            </div>
          </div>
          
          <div className="nav-top-center">
            <Link to="/" className="nav-logo main-logo">
              <img src={logo} alt="KCR Official Logo" />
              <span className="logo-text">KCR</span>
            </Link>
          </div>
          
          <div className="nav-top-right">
            <div className="nav-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-container">
          <div className="nav-scrolled-logo">
            <Link to="/" className="nav-logo sticky-logo">
              <img src={logo} alt="KCR Official Logo" />
              <span className="logo-text">KCR</span>
            </Link>
          </div>
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
                <li><Link to="/achievements/state-formation">State Formation</Link></li>
                <li><Link to="/achievements/irrigation">Irrigation & Infrastructure</Link></li>
                <li><Link to="/achievements/agriculture">Agricultural Development</Link></li>
                <li><Link to="/achievements/welfare">Welfare Impact</Link></li>
                <li><Link to="/achievements/economic">Economic Development</Link></li>
                <li><Link to="/achievements/culture">Cultural Revival</Link></li>
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
          </ul>
          <div className="nav-actions">
            <Link to="/contact" className="nav-link nav-contact-btn">
              <span>Contact</span>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="20" ry="20"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
