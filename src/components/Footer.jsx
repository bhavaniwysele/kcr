import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo_kcr.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="KCR Official Logo" />
              <span>KCR Official</span>
            </Link>
            <p className="footer-description">
              Dedicated to the progress and prosperity of Telangana. 
              Join us in our journey towards a "Bangaru Telangana" (Golden Telangana).
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>About KCR</h4>
              <ul>
                <li><Link to="/about-kcr/overview">Overview</Link></li>
                <li><Link to="/about-kcr/early-life">Early Life</Link></li>
                <li><Link to="/about-kcr/political-career">Political Career</Link></li>
                <li><Link to="/about-kcr/timeline">Milestones</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Initiatives</h4>
              <ul>
                <li><Link to="/schemes">Welfare Schemes</Link></li>
                <li><Link to="/vision-mission">Vision & Mission</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/gallery">Image Gallery</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><Link to="/contact">Get in Touch</Link></li>
                <li><Link to="/join-us">Join the Movement</Link></li>
                <li><Link to="/news-media">Media Center</Link></li>
                <li><Link to="/contact">Office Address</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} K. Chandrashekar Rao Official Website. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
