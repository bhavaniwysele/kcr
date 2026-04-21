import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Overview.css';

// Image Imports
import topBanner from '../../assets/overview_top_edited.jpg';
import main3 from '../../assets/overview_main3.jpg';
import main4 from '../../assets/overview_main4.jpg';
import main5 from '../../assets/overview_main5.jpg';
import unionMin from '../../assets/Union Ministry.jpg';
import youngKcr from '../../assets/young kcr.webp';
import main6 from '../../assets/overview_main6.jpg';

// Navigation Section Images
import politicalImg from '../../assets/overview_main2.jpg';
import leadershipImg from '../../assets/about_kcr4.jpg';
import timelineImg from '../../assets/overview.jpg';

const Overview = () => {
  const navigate = useNavigate();
  return (
    <div className="overview-page">
      {/* Top Banner (Already requested in previous turns) */}
      <section className="overview-header">
        <img src={topBanner} alt="KCR Overview Header" className="header-bg-image" />
      </section>

      <main className="overview-container">
        {/* Intro Section - Inspired by the layout reference */}
        <section className="intro-block">
          <div className="intro-image-container">
            <div className="decoration-circle top-left">
              <i className="fas fa-leaf"></i>
            </div>
            <img src={youngKcr} alt="Young KCR" className="main-intro-img" />
            <div className="decoration-circle bottom-right">
              <i className="fas fa-seedling"></i>
            </div>
          </div>
          <div className="intro-content">
            <h2 className="section-title">The Journey of a Visionary</h2>
            <div className="narrative-text">
              <p>
                Born in the quiet village of Chintamadaka in Medak district, Kalvakuntla Chandrashekar Rao—fondly known as KCR—was shaped by the very soil and culture of Telangana. Growing up in a traditional family, he developed a deep-rooted connection to the land and its people from a very young age.
              </p>
              <p>
                As a child, he was often found with a book in his hand, showing a keen interest in literature and the history of his land. His school days in Dubbak and Siddipet were not just about academics; they were formative years where he developed his articulate nature and a strong sense of justice that would later define his leadership.
              </p>
              <div className="intro-actions">
                <button className="btn-primary">Learn More</button>
                <button className="btn-secondary">View Life</button>
              </div>
            </div>
          </div>
        </section>

        {/* Story Grid - Narrative Chapters */}
        <section className="story-grid-section">
          <h2 className="grid-main-title">A Life Dedicated to Public Service</h2>
          <div className="story-grid-viewport">
            <div className="story-grid">
              {/* Chapter 1: Early Interests */}
              <div className="story-card">
                <span className="card-number">01</span>
                <div className="card-img-wrap">
                  <img src={main3} alt="Early Interests" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Early Foundations</h3>
                  <p>
                    Before stepping into the public eye, he was a young man with a vision, briefly working in the recruitment sector. It was here that he first witnessed the stark challenges faced by ordinary citizens.
                  </p>
                  <button className="card-btn">Know More</button>
                </div>
              </div>

              {/* Chapter 2: Entry into Public Life */}
              <div className="story-card">
                <span className="card-number">02</span>
                <div className="card-img-wrap">
                  <img src={main4} alt="Public Life Entry" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">A Heart for the People</h3>
                  <p>
                    His official journey began with a simple but powerful desire: to give his people a voice. Initially working behind the scenes, he realized his heart beat solely for the cause of statehood.
                  </p>
                  <button className="card-btn">Know More</button>
                </div>
              </div>

              {/* Chapter 3: National Arena */}
              <div className="story-card">
                <span className="card-number">03</span>
                <div className="card-img-wrap">
                  <img src={unionMin} alt="Union Ministry" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">National Influence</h3>
                  <p>
                    His tenure in the national arena was a masterclass in diplomacy. Using his platform in Delhi, he relentlessly championed the identity of his people, building necessary alliances.
                  </p>
                  <button className="card-btn">Know More</button>
                </div>
              </div>

              {/* Chapter 4: Key Turning Points */}
              <div className="story-card">
                <span className="card-number">04</span>
                <div className="card-img-wrap">
                  <img src={main5} alt="Turning Points" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Uniting a Region</h3>
                  <p>
                    The true turning point came when he dedicated his life to the statehood movement. Through his gift for oratory, he united a fragmented dream into a powerful mass movement.
                  </p>
                  <button className="card-btn">Know More</button>
                </div>
              </div>

              {/* Chapter 5: Defining Identity */}
              <div className="story-card">
                <span className="card-number">05</span>
                <div className="card-img-wrap">
                  <img src={main6} alt="Present Identity" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Architect of Progress</h3>
                  <p>
                    Today, he is recognized as the architect of a new beginning. He remains a father figure to many, guiding with a unique blend of intellectual depth and deep-rooted compassion.
                  </p>
                  <button className="card-btn">Know More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Section - Custom Layout for Further Exploration */}
        <section className="about-navigation">
          <div className="nav-header">
            <h2 className="nav-main-title">Continuous Dedication</h2>
            <p className="nav-subtitle">Explore the deeper dimensions of a life committed to statehood and growth</p>
          </div>

          <div className="nav-connector-line">
            <div className="conn-dot"></div>
            <div className="conn-dot"></div>
            <div className="conn-dot"></div>
          </div>

          <div className="nav-grid">
            {/* Political Career Link */}
            <div className="nav-card-item">
              <span className="nav-index">01</span>
              <div className="nav-card-inner">
                <div className="nav-img-box">
                  <img src={politicalImg} alt="Political Career" />
                </div>
                <h4 className="nav-link-title">Political Career</h4>
                <button className="nav-link-btn" onClick={() => navigate('/about-kcr/political-career')}>
                  Know More
                </button>
              </div>
            </div>

            {/* Leadership Style Link */}
            <div className="nav-card-item">
              <span className="nav-index">02</span>
              <div className="nav-card-inner">
                <div className="nav-img-box">
                  <img src={leadershipImg} alt="Leadership Style" />
                </div>
                <h4 className="nav-link-title">Leadership Style</h4>
                <button className="nav-link-btn" onClick={() => navigate('/about-kcr/leadership-style')}>
                  Know More
                </button>
              </div>
            </div>

            {/* Timeline Link */}
            <div className="nav-card-item">
              <span className="nav-index">03</span>
              <div className="nav-card-inner">
                <div className="nav-img-box">
                  <img src={timelineImg} alt="Timeline" />
                </div>
                <h4 className="nav-link-title">Timeline & Milestones</h4>
                <button className="nav-link-btn" onClick={() => navigate('/about-kcr/timeline')}>
                  Know More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Overview;
