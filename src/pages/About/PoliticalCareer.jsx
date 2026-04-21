import React from 'react';
import { motion } from 'framer-motion';
import './PoliticalCareer.css';

// Import assets
import archImg from '../../assets/about_kcr.png';
import mainImg3 from '../../assets/political_main3_final.jpg';
import mainImg4 from '../../assets/political_main4.jpg';
import welfareIcon from '../../assets/healthandwelfare.webp';
import infraIcon from '../../assets/Growth & Infrastructure.jpg';
import cultureIcon from '../../assets/cultureNheritage.jpg';

const PoliticalCareer = () => {
  return (
    <div className="political-career-new">
      {/* Hero Section */}
      <section className="hero-geometric">
        <motion.div 
          className="hero-text-side"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>The Journey of a Visionary Architect</h1>
          <p>
            Redefining the political landscape of a nation through resilience, 
            strategic brilliance, and the unwavering pursuit of a people's dream.
          </p>
        </motion.div>

        <div className="hero-image-side">
          <motion.div 
            className="arch-shape"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src={archImg} alt="KCR Arch" />
          </motion.div>
          <div className="circle-shape"></div>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="career-full-width-image">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={mainImg3} alt="Political Career Journey" />
        </motion.div>
      </section>

      {/* Path to Statehood Section */}
      <section className="career-stepper-minimal">
        <div className="stepper-minimal-container">
          <motion.div 
            className="stepper-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={mainImg4} 
              alt="Historical context" 
              className="stepper-title-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <h2>The Path to Telangana <br/> Statehood</h2>
          </motion.div>
          
          <div className="stepper-right">
            <motion.div 
              className="vertical-line"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            {[
              { label: 'The Foundation', title: '2001: TRS Founding', desc: 'Resigned as Deputy Speaker to float TRS with a single-point agenda.' },
              { label: 'The Agitation', title: '2009: The Historic Fast', desc: 'Undertook a fast unto death, forcing national focus on the demand.' },
              { label: 'The Breakthrough', title: '2013: Cabinet Approval', desc: 'The Union Cabinet finally approves the formation of the new state.' },
              { label: 'The Vision Realized', title: '2014: State Formation', desc: 'Telangana is officially formed, and KCR takes oath as the first CM.' }
            ].map((item, idx) => (
              <motion.div 
                className="minimal-step-item" 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
              >
                <h3>{item.label}</h3>
                <p><strong>{item.title}</strong> - {item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars Section - Pill Layout */}
      <section className="career-pillars-pill">
        <motion.div 
          className="pill-background-bar"
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="pillars-container">
            {[
              { img: welfareIcon, title: 'Welfare First', desc: 'Revolutionizing social safety nets through innovative schemes.' },
              { img: infraIcon, title: 'Growth & Infra', desc: 'Building world-class infrastructure for a modern Telangana.' },
              { img: cultureIcon, title: 'Cultural Identity', desc: 'Restoring regional pride and cultural self-respect.' }
            ].map((pillar, idx) => (
              <motion.div 
                className="pillar-item" 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + (idx * 0.2) }}
              >
                <motion.div 
                  className="pillar-circle"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 45px rgba(0,0,0,0.15)" }}
                >
                  <img src={pillar.img} alt={pillar.title} />
                </motion.div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PoliticalCareer;
