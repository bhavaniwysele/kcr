import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

// Importing images
import aboutImg1 from '../assets/about_kcr.png';
import aboutImg2 from '../assets/about_kcr2.webp';
import aboutImg3 from '../assets/about_kcr3.avif';
import aboutImg4 from '../assets/about_kcr4.jpg';
import aboutImg5 from '../assets/about_kcr5.webp';
import aboutImg6 from '../assets/kcr_about6.jpg';

const AboutSection = () => {
  const images = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5, aboutImg6];
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const handleNextPage = useCallback(() => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setShowNext(true);

    // After the flip animation (800ms), reset the state instantly
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % images.length);
      setShowNext(false);
      setIsFlipping(false);
    }, 800);
  }, [isFlipping, images.length]);

  // Automatic flip effect every 4 seconds
  useEffect(() => {
    const autoFlipInterval = setInterval(() => {
      handleNextPage();
    }, 4500); // 4.5 seconds gives breathing room between flips

    return () => clearInterval(autoFlipInterval);
  }, [handleNextPage]);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-column">
          <div className="book-container" onClick={handleNextPage}>
            <div className={`book-page ${showNext ? 'show-next' : ''}`}>
              <div className="page-front">
                <img src={images[currentPage]} alt="KCR Biography" />
              </div>
              <div className="page-back">
                <img src={images[(currentPage + 1) % images.length]} alt="KCR Biography Next" />
              </div>
            </div>
            <div className="book-shadow"></div>
          </div>
        </div>
        
        <div className="about-content">
          <h4 className="section-subtitle">Biography</h4>
          <h2 className="section-title">The Architect of <br /><span>Modern Telangana</span></h2>
          <p className="about-text">
            Kalvakuntla Chandrashekar Rao, popularly known as KCR, is a visionary leader and the 
            driving force behind the realization of a separate statehood for Telangana. As the first 
            Chief Minister of the state, his governance has been marked by transformative schemes 
            and a relentless pursuit of social and economic progress.
          </p>
          <p className="about-text">
            From revolutionary irrigation projects to pioneering welfare initiatives, his leadership 
            continues to shape the destiny of millions, turning the dream of 'Bangaru Telangana' 
            (Golden Telangana) into a reality.
          </p>
          <Link to="/about-kcr/overview" className="read-more-btn">
            Read More <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
