import React from 'react';
import { motion, useInView } from 'framer-motion';
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

const StoryStep = ({ item, onInView }) => {
  const ref = React.useRef(null);
  // Using a margin to trigger activation when the card enters the center area of the viewport
  const isInView = useInView(ref, { 
    margin: "-30% 0px -30% 0px",
    amount: 0.2
  });

  React.useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <motion.div
      ref={ref}
      className="story-card-v"
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.3, x: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="card-v-img-container">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="card-v-content">
        <h3 className="card-v-title">{item.title}</h3>
        <p className="card-v-text">{item.text}</p>
        <button className="card-v-btn">Know More</button>
      </div>
    </motion.div>
  );
};

const ActiveNumber = ({ number, active }) => {
  return (
    <motion.div
      className={`active-number-wrap ${active ? 'is-active' : ''}`}
      initial={false}
      animate={active ? { y: 0, opacity: 1, scale: 1.2 } : { y: 20, opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "backOut" }}
      style={{ position: active ? 'relative' : 'absolute' }}
    >
      <span className="count-number">{number < 10 ? `0${number}` : number}</span>
    </motion.div>
  );
};

const Overview = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  const storyData = [
    {
      id: 1,
      title: "Early Foundations",
      img: main3,
      text: "Before stepping into the public eye, he was a young man with a vision, briefly working in the recruitment sector. It was here that he first witnessed the stark challenges faced by ordinary citizens."
    },
    {
      id: 2,
      title: "A Heart for the People",
      img: main4,
      text: "His official journey began with a simple but powerful desire: to give his people a voice. Initially working behind the scenes, he realized his heart beat solely for the cause of statehood."
    },
    {
      id: 3,
      title: "National Influence",
      img: unionMin,
      text: "His tenure in the national arena was a masterclass in diplomacy. Using his platform in Delhi, he relentlessly championed the identity of his people, building necessary alliances."
    },
    {
      id: 4,
      title: "Uniting a Region",
      img: main5,
      text: "The true turning point came when he dedicated his life to the statehood movement. Through his gift for oratory, he united a fragmented dream into a powerful mass movement."
    },
    {
      id: 5,
      title: "Architect of Progress",
      img: main6,
      text: "Today, he is recognized as the architect of a new beginning. He remains a father figure to many, guiding with a unique blend of intellectual depth and deep-rooted compassion."
    }
  ];
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

        {/* Story Section - Vertical Sticky Scroll Layout */}
        <section className="story-scroll-section">
          <h2 className="grid-main-title">A Life Dedicated to Public Service</h2>
          
          <div className="story-scroll-container">
            {/* Left Side: Sticky Counter */}
            <div className="story-counter-sticky">
              <div className="counter-wrapper">
                <div className="active-number-display">
                  {storyData.map((item, index) => (
                    <ActiveNumber 
                      key={item.id} 
                      number={item.id} 
                      active={activeStep === index} 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Scrolling Cards */}
            <div className="story-cards-scroll">
              {storyData.map((item, index) => (
                <StoryStep 
                  key={item.id} 
                  item={item} 
                  onInView={() => setActiveStep(index)} 
                />
              ))}
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
