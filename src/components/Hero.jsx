import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/landing page_kcr.jpeg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src={heroImage} alt="Political Leadership" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Shaping the <br />
            <span>Future of</span> <br />
            Telangana
          </h1>
          <p className="hero-subtitle">
            Delivering progress through strong leadership and visionary governance.
          </p>
          <div className="hero-cta">
            <Link to="/join-us" className="hero-btn">
              <span>Join Us</span>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="30" ry="30"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
