import React from 'react';
import { motion, useInView, animate } from 'framer-motion';
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

const StatCounter = ({ value, label, icon, suffix = "", delay = 0 }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isNumeric = typeof value === 'number';

  React.useEffect(() => {
    if (isInView && isNumeric) {
      const controls = animate(0, value, {
        duration: 2,
        delay: delay,
        onUpdate: (latest) => setCount(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, value, delay, isNumeric]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="highlight-card"
    >
      <div className="h-icon">{icon}</div>
      <div className="h-number">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="h-label">{label}</div>
    </motion.div>
  );
};

const LeadershipStyle = () => {
  const [hoveredTrait, setHoveredTrait] = React.useState(null);
  const radius = 260; // Reduced radius for a tighter, more cohesive look

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
        <div className="bg-watermark">LEADERSHIP</div>
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
          {[
            {
              icon: '⚖️',
              title: 'Empathetic Governance',
              desc: 'Understanding the pulse of the common man and crafting policies that prioritize human welfare above mere statistics.',
              initial: { x: -250, scale: 0.6, opacity: 0 },
              delay: 0.15
            },
            {
              icon: '⚡',
              title: 'Strategic Speed',
              desc: 'Moving from conception to implementation with clinical precision, ensuring that large-scale projects are completed in record time.',
              initial: { y: 100, scale: 0.5, opacity: 0 },
              delay: 0
            },
            {
              icon: '🌱',
              title: 'Rooted Innovation',
              desc: 'Blending modern technological advancements with traditional wisdom to solve local problems with global standards.',
              initial: { x: 250, scale: 0.6, opacity: 0 },
              delay: 0.15
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={item.initial}
              whileInView={{ 
                x: 0, 
                y: 0,
                scale: 1, 
                opacity: 1
              }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 1,
                delay: item.delay
              }}
              whileHover="hover"
              variants={{
                hover: { 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }
              }}
              className="principle-card"
            >
              <motion.div 
                variants={{
                  hover: { 
                    scale: 1.4, 
                    rotate: [0, -20, 20, 0],
                    transition: { duration: 0.4, ease: "easeInOut" }
                  }
                }}
                className="p-icon"
              >
                {item.icon}
              </motion.div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="highlights-section">
        <div className="highlights-grid">
          <StatCounter 
            icon="📜" 
            value={30} 
            suffix="+" 
            label="Years in Public Service" 
            delay={0.1}
          />
          <StatCounter 
            icon="⚖️" 
            value={10} 
            suffix="+" 
            label="Years in Leadership" 
            delay={0.2}
          />
          <StatCounter 
            icon="💡" 
            value={50} 
            suffix="+" 
            label="Key Initiatives" 
            delay={0.3}
          />
          <StatCounter 
            icon="🤝" 
            value="Millions" 
            label="Lives Impacted" 
            delay={0.4}
          />
        </div>
      </section>
    </div>
  );
};




export default LeadershipStyle;
