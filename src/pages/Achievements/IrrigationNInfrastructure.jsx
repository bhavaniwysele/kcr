import React from 'react';
import { motion } from 'framer-motion';
import './IrrigationNInfrastructure.css';

// Import images from assets
import kaleshwaramImg from '../../assets/kaleshwaram.png';
import hyderabadImg from '../../assets/hyderabad_infra.png';
import bhagirathaImg from '../../assets/mission_bhagiratha.png';
import lakeImg from '../../assets/lake_restoration.png';
import heroBg from '../../assets/kaleshwaram_main_final.jpg';

const IrrigationNInfrastructure = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="achievement-detail-page">
      {/* Hero Section */}
      <motion.section 
        className="irrigation-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>
          <span>Modern</span>
          <span className="accent-text">Irrigation</span>
        </h1>
        <p style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#fff', letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.8 }}>
          Building the backbone of Telangana
        </p>
      </motion.section>

      {/* Topic 1: Major Irrigation Projects (Ref 1 Pattern) */}
      <section className="ref1-pattern">
        <motion.div className="ref1-visual" {...fadeInUp}>
          <div className="ref1-img-box">
            <img src={kaleshwaramImg} alt="Kaleshwaram" />
          </div>
          <div className="ref1-overlay">
            <span className="label">Total Area</span>
            <span className="value">45L+</span>
          </div>
        </motion.div>
        
        <div className="ref1-content">
          <motion.div className="ref1-item" {...fadeInUp}>
            <div className="ref1-icon">
              <svg viewBox="0 0 24 24"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" /></svg>
            </div>
            <div className="ref1-text">
              <h3>Kaleshwaram (KLIP)</h3>
              <p>The world's largest multi-stage lift irrigation project, ensuring water for 37+ lakh acres across the state.</p>
            </div>
          </motion.div>

          <motion.div className="ref1-item" {...fadeInUp}>
            <div className="ref1-icon">
              <svg viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
            </div>
            <div className="ref1-text">
              <h3>Palamuru-Rangareddy</h3>
              <p>Eliminating drought in South Telangana by providing sustainable irrigation to 12 lakh+ acres of upland areas.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topic 2: Water Supply Initiatives (Ref 2/3 Ticket Pattern) */}
      <section className="ticket-section">
        <motion.div className="ticket-header" {...fadeInUp}>
          <h2>Water Supply initiatives</h2>
        </motion.div>

        <div className="ticket-grid">
          <motion.div className="ticket-card" {...fadeInUp} whileHover={{ y: -10 }}>
            <div className="ticket-card-img">
              <img src={bhagirathaImg} alt="Mission Bhagiratha" />
            </div>
            <div className="ticket-info">
              <p style={{ color: '#e91e63', fontWeight: '800', marginBottom: '0.5rem' }}>MISSION BHAGIRATHA</p>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem' }}>Safe Water to Every Home</h3>
              <p style={{ color: '#666' }}>Providing treated, piped drinking water to 23,968 habitations across the state.</p>
            </div>
          </motion.div>

          <motion.div className="ticket-card" {...fadeInUp} whileHover={{ y: -10 }}>
            <div className="ticket-info" style={{ paddingLeft: '0' }}>
              <p style={{ color: '#e91e63', fontWeight: '800', marginBottom: '0.5rem' }}>EVALUATION</p>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>Fluoride Free Telangana</h3>
              <p style={{ color: '#666' }}>Recognized by NITI Aayog for achieving 100% household drinking water connectivity.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topic 3 & 4: Management & Infrastructure (Modern Split) */}
      <section className="management-row">
        <motion.div className="m-box" {...fadeInUp}>
          <div style={{ height: '150px', background: '#eee', borderRadius: '20px', marginBottom: '2rem' }}>
            <img src={lakeImg} alt="Mission Kakatiya" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
          </div>
          <h4>Mission Kakatiya</h4>
          <p>Restoring 46,500 minor irrigation tanks to revive groundwater and ancient storage systems.</p>
        </motion.div>

        <motion.div className="m-box pink" {...fadeInUp}>
          <h4 style={{ color: '#fff' }}>Urban Expansion</h4>
          <div style={{ padding: '1.5rem 0' }}>
            <div style={{ fontSize: '3.2rem', fontWeight: '800' }}>SRDP</div>
            <p style={{ marginTop: '0.8rem', opacity: 0.9 }}>Transforming Hyderabad landscape with flyovers, skywalks, and underpasses.</p>
          </div>
        </motion.div>
      </section>

      {/* Topic 5: Power Support (Ref 4 Stats Banner) */}
      <section className="stats-banner">
        <motion.div className="stats-container" {...fadeInUp}>
          <div className="big-stat">
            <span className="number">24/7</span>
            <span className="label">Free Power Supply</span>
          </div>
          <div className="big-stat">
            <span className="number">27L+</span>
            <span className="label">Benefitted Farmers</span>
          </div>
          <div className="big-stat">
            <span className="number">100%</span>
            <span className="label">Power Quality</span>
          </div>
        </motion.div>
        
        <motion.div style={{ marginTop: '4rem', opacity: 0.7 }} {...fadeInUp}>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Telangana is the only state in India providing round-the-clock free power to agricultural sector, ensuring irrigation stability across all seasons.
          </p>
        </motion.div>
      </section>

      <footer style={{ textAlign: 'center', padding: '3rem 0' }}>
        <div style={{ width: '100px', height: '4px', background: '#e91e63', margin: '0 auto 1.5rem' }}></div>
        <p style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.65rem', fontWeight: '800' }}>
          Excellence in infrastructure & water management
        </p>
      </footer>
    </div>
  );
};

export default IrrigationNInfrastructure;
