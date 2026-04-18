import React from 'react';
import './PoliticalCareer.css';

// Importing images
import heroImg from '../../assets/Birth of TRS.jpg';
import preludeImg from '../../assets/Political Prelude.jpg';
import movementImg from '../../assets/The Great Fast.webp';
import cmImg from '../../assets/kcr The First CM.jpg';
import nationalImg from '../../assets/National Vision.webp';
import adminImg from '../../assets/Mission_Bhagiratha.jpg';
import cultureImg from '../../assets/cultureNheritage.jpg';

const PoliticalCareer = () => {
  return (
    <div className="political-career-container">
      <section className="career-hero">
        <div className="hero-left">
          <span className="career-label">Our Journey</span>
          <h1>Dynamic Leadership & A Relentless Career</h1>
          <p>
            From a grassroots activist to the visionary architect of a state, KCR's political career is a masterclass in resilience, strategic brilliance, and unwavering commitment to the people.
          </p>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="Political Leadership" />
        </div>
      </section>

      <section className="career-intro">
        <div className="intro-left">
          <h2>Embracing Challenges & Forging Innovation</h2>
        </div>
        <div className="intro-right">
          <p>
            KCR's journey is defined by his ability to see opportunities where others saw obstacles. His political philosophy is rooted in the belief that true development only occurs when the most marginalized are empowered. Through decades of struggle and leadership, he has transformed the political landscape of Telangana.
          </p>
        </div>
      </section>

      <section className="career-gallery">
        <div className="gallery-item">
          <img src={preludeImg} alt="Early Years" />
          <div className="gallery-overlay">
            <h3>Early Political Years</h3>
            <p>Laying the foundation of grassroots activism and regional leadership.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={movementImg} alt="The Struggle" />
          <div className="gallery-overlay">
            <h3>The Telangana Agitation</h3>
            <p>Leading the historic peaceful movement that captured the soul of a nation.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={cmImg} alt="Chief Minister" />
          <div className="gallery-overlay">
            <h3>The Visionary Architect</h3>
            <p>Serving as the first Chief Minister and building a modern, welfare-heavy state.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={adminImg} alt="Administration" />
          <div className="gallery-overlay">
            <h3>Governance Excellence</h3>
            <p>Pioneering world-class infrastructure and life-changing administrative reforms.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={nationalImg} alt="National Vision" />
          <div className="gallery-overlay">
            <h3>BRS & National Impact</h3>
            <p>Expanding the Telangana model of development to the national stage.</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src={cultureImg} alt="Cultural Legacy" />
          <div className="gallery-overlay">
            <h3>Cultural Renaissance</h3>
            <p>Restoring the identity and heritage of a proud people through cultural transformation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticalCareer;
