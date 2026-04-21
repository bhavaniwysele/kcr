import React from 'react';
import { motion } from 'framer-motion';
import './LeadershipStyle.css';
import visionaryImg from '../../assets/National Vision.webp';
import peopleImg from '../../assets/about_kcr.png';
import governanceImg from '../../assets/kcr-press-conference.avif';
import decisionImg from '../../assets/The Great Fast.webp';
import developmentImg from '../../assets/Growth & Infrastructure.jpg';
import inclusiveImg from '../../assets/agriculture.jpg';
import welfareImg from '../../assets/Mission_Bhagiratha.jpg';
import strategicImg from '../../assets/Kaleshwaram Project.webp';
import missionKakatiyaImg from '../../assets/mission_kakatiya.jpg';
import leadershipTopImg from '../../assets/leardership_topmain.png';

const traits = [
  {
    title: 'Visionary Leadership',
    description: 'Pioneering long-term strategies for the sustainable progress of Telangana state.',
    image: visionaryImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    ),
    color: 'hsla(210, 80%, 94%, 1)'
  },
  {
    title: 'People-Centric Approach',
    description: 'Humanistic policies crafted with the common man at the very heart of governance.',
    image: peopleImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    color: 'hsla(340, 80%, 94%, 1)'
  },
  {
    title: 'Strong Governance',
    description: 'Ensuring transparent, efficient, and robust administrative systems across all levels.',
    image: governanceImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    ),
    color: 'hsla(130, 70%, 92%, 1)'
  },
  {
    title: 'Decisive Decision-Making',
    description: 'Exhibiting firm resolve and timely clinical precision in critical administrative choices.',
    image: decisionImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
    ),
    color: 'hsla(50, 90%, 92%, 1)'
  },
  {
    title: 'Focus on Development',
    description: 'Driving rapid industrialization and world-class infrastructure growth systematically.',
    image: developmentImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
    ),
    color: 'hsla(270, 70%, 94%, 1)'
  },
  {
    title: 'Inclusive Growth',
    description: 'Bridging societal gaps to ensure prosperity reaches every marginalized community.',
    image: inclusiveImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
    ),
    color: 'hsla(180, 70%, 92%, 1)'
  },
  {
    title: 'Welfare-Oriented Policies',
    description: 'Implementing life-changing schemes that provide direct support and social security.',
    image: welfareImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l8.42 8.42 8.42-8.42a5.4 5.4 0 0 0 0-7.65z"></path></svg>
    ),
    color: 'hsla(20, 80%, 92%, 1)'
  },
  {
    title: 'Strategic Planning',
    description: 'Utilizing data-driven insights and meticulous roadmaps for state nation-building.',
    image: strategicImg,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
    ),
    color: 'hsla(150, 70%, 92%, 1)'
  }
];

const LeadershipStyle = () => {
  const [hoveredTrait, setHoveredTrait] = React.useState(null);
  const radius = 300; // Optimal radius for visibility and structure

  return (
    <div className="leadership-container">
      <div className="leadership-hero-wrap">
        <div className="hero-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="leadership-header"
          >
            <h2>Leadership Philosophy</h2>
            <p>A multidimensional approach to governance, combining empathy with decisive strategic action.</p>
          </motion.div>
        </div>
        <div className="hero-right">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={leadershipTopImg} 
            alt="Leadership" 
            className="hero-main-img"
          />
        </div>
      </div>

      <div className="infographic-wrapper">
        <motion.div 
          className="center-node"
          style={{ 
            background: 'var(--bg)',
            borderColor: hoveredTrait ? hoveredTrait.color.replace('0.7', '1') : 'var(--accent)',
            boxShadow: hoveredTrait ? `0 20px 50px ${hoveredTrait.color}` : '0 15px 40px var(--accent-bg)',
            transition: 'all 0.4s ease',
            position: 'relative'
          }}
        >
          {/* Background Image Layer */}
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: hoveredTrait ? 0.15 : 1 }}
            className="center-bg-image"
            style={{ 
              backgroundImage: `url(${missionKakatiyaImg})`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0
            }}
          />

          <motion.div
            key={hoveredTrait ? hoveredTrait.title : 'default'}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="center-content"
            style={{ position: 'relative', zIndex: 1 }}
          >
            {hoveredTrait ? (
              <div className="center-trait-detail">
                <h3>{hoveredTrait.title}</h3>
                <p>{hoveredTrait.description}</p>
              </div>
            ) : (
              <h3></h3>
            )}
          </motion.div>
        </motion.div>

        {traits.map((trait, index) => {
          const angle = (index * (360 / traits.length)) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isRightSide = x >= 0;

          return (
            <React.Fragment key={index}>
              {/* Connector Line */}
              <motion.div 
                initial={false}
                animate={{ width: radius, opacity: 0.4 }}
                transition={{ duration: 0 }}
                className="connector-line"
                style={{
                  transform: `rotate(${index * (360 / traits.length)}deg)`,
                  background: `linear-gradient(90deg, var(--accent) 0%, ${trait.color} 100%)`,
                  width: radius
                }}
              />
              
              {/* Trait Node */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1, x: x, y: y }}
                transition={{ duration: 0 }}
                whileHover={{ scale: 1.15, zIndex: 10 }}
                onMouseEnter={() => setHoveredTrait(trait)}
                onMouseLeave={() => setHoveredTrait(null)}
                className={`trait-node pos-${isRightSide ? 'right' : 'left'}`}
                style={{ 
                  background: trait.color, 
                  borderColor: trait.color.replace('0.7', '1'),
                  opacity: hoveredTrait && hoveredTrait !== trait ? 0.3 : 1,
                  filter: hoveredTrait && hoveredTrait !== trait ? 'grayscale(40%)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="trait-icon">{trait.icon}</div>
                <div className="trait-label">{trait.title}</div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="principles-section"
      >
        <div className="section-intro">
          <span>Foundational Tenets</span>
          <h2>Principles of Progress</h2>
          <p>The core values that drive every administrative decision and policy implementation in the state of Telangana.</p>
        </div>

        <div className="principles-grid">
          <div className="principle-card">
            <div className="p-icon">⚖️</div>
            <h4>Empathetic Governance</h4>
            <p>Understanding the pulse of the common man and crafting policies that prioritize human welfare above mere statistics.</p>
          </div>
          <div className="principle-card">
            <div className="p-icon">⚡</div>
            <h4>Strategic Speed</h4>
            <p>Moving from conception to implementation with clinical precision, ensuring that large-scale projects are completed in record time.</p>
          </div>
          <div className="principle-card">
            <div className="p-icon">🌱</div>
            <h4>Rooted Innovation</h4>
            <p>Blending modern technological advancements with traditional wisdom to solve local problems with global standards.</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bio-section quote-section"
        style={{ marginTop: '6rem', width: '100%' }}
      >
        <p className="quote-text">
          "Governance is not just about rules; it's about the welfare of the last person in the line. Our style is defined by results, not rhetoric."
        </p>
      </motion.section>
    </div>
  );
};


export default LeadershipStyle;

