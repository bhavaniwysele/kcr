import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AchievementsSlider.css';

// Importing images
import irrigation from '../assets/irrigation.jpg';
import agriculture from '../assets/agriculture.jpg';
import welfare from '../assets/welfareschemes.jpg';
import health from '../assets/healthandwelfare.webp';
import economic from '../assets/economicgrowth.jpeg';
import culture from '../assets/cultureNheritage.jpg';

const achievements = [
  {
    title: "State Formation & Leadership",
    description: "Leading the historic movement for Telangana statehood and visionary governance.",
    image: health, // Using health image for now as a placeholder for statehood if specific one doesn't exist
    slug: "statehood-leadership"
  },
  {
    title: "Irrigation & Infrastructure",
    description: "Building world-class dams and irrigation networks like Kaleshwaram Project.",
    image: irrigation,
    slug: "irrigation"
  },
  {
    title: "Agriculture Development",
    description: "Empowering farmers through Rythu Bandhu and 24x7 free electricity.",
    image: agriculture,
    slug: "agriculture"
  },
  {
    title: "Welfare Impact",
    description: "Transforming lives through Aasara pensions and welfare-centric governance.",
    image: welfare,
    slug: "welfare"
  },
  {
    title: "Economic Development",
    description: "Driving TS-iPASS and making Telangana a global destination for investment.",
    image: economic,
    slug: "economic"
  },
  {
    title: "Cultural Revival",
    description: "Restoring and celebrating the unique identity and festivals of Telangana.",
    image: culture,
    slug: "culture"
  }
];

const AchievementsSlider = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <motion.div 
          className="section-header-compact"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="main-section-title">ACHIEVEMENTS</h2>
        </motion.div>

        {/* Featured Section (Split Layout) */}
        <div className="featured-achievement">
          {/* Picture coming from the right */}
          <motion.div 
            className="featured-image-side"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={achievements[0].image} alt="Featured Achievement" />
          </motion.div>

          {/* Content coming from the left */}
          <motion.div 
            className="featured-content-side"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="content-inner-sticky">
              <h2 className="featured-title">DRIVING PROGRESS & <span>PROSPERITY</span></h2>
              <p className="featured-desc">
                The journey of Telangana has been one of unprecedented growth and vision. 
                From pioneering irrigation projects to revolutionary welfare schemes, 
                every initiative is designed to empower the people and build a sustainable future.
              </p>
              <p className="featured-desc">
                Our commitment to excellence has made Telangana a role model for the nation, 
                combining modern infrastructure with deep-rooted cultural heritage and social justice.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid (Box Layout) with staggered animation */}
        <motion.div 
          className="achievements-boxes-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {achievements.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="achievement-box-item"
            >
              <div className="box-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="box-content">
                <h3 className="box-amount">{item.title}</h3>
                <p className="box-desc">{item.description}</p>
                <Link to={`/achievements/${item.slug}`} className="box-cta">
                  KNOW MORE <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSlider;
