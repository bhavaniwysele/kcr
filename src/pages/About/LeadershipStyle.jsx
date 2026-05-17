import React from 'react';
import { motion, useInView, animate, useReducedMotion, AnimatePresence } from 'framer-motion';
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
import telanganaMovementImg from '../../assets/telangana_movement.jpg';
import cultureIdentityImg from '../../assets/culture_stateformation.jpg';

const svgIcon = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const IconMovementNav = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <path d="M4 22v-7" />
  </svg>
);

const IconCrisisNav = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);

const IconFastNav = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const IconIdentityNav = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 6H10c0-3-2-4-2-6a4 4 0 0 1 4-4z" />
    <path d="M8 22h8M10 18h4" />
    <path d="M9 14h6" />
  </svg>
);

const IconUnity = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconFarmer = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M12 22V12" />
    <path d="M8 12h8" />
    <path d="M6 8c2-2 10-2 12 0" />
    <path d="M9 6c1.5-1.5 4.5-1.5 6 0" />
  </svg>
);

const IconWater = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const IconPublic = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4v18" />
    <path d="M19 21V11l-6-3" />
    <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
  </svg>
);

const IconTsipass = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const IconBhagiratha = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M4 14h16" />
    <path d="M6 18h12" />
    <path d="M8 10h8l-2-6H10l-2 6z" />
    <path d="M12 10v8" />
  </svg>
);

const IconIrrigation = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M2 20c4-4 8-4 12 0s8 4 12 0" />
    <path d="M12 4v8M9 7l3-3 3 3" />
  </svg>
);

const IconCulture = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M2 20h20" />
    <path d="M4 20V10l4-2v12M10 20V6l4-2v16M16 20V10l4 2v8" />
  </svg>
);

const IconLanguage = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="m5 8 6 6" />
    <path d="m4 14 6-6 2-3" />
    <path d="M2 5h12M2 19h12" />
    <path d="M14 5a7 7 0 0 1 0 14" />
  </svg>
);

const IconFestival = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const IconSelfRespect = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const leadershipInActionSections = [
  {
    id: 'movement',
    label: 'Section 1',
    title: 'During The Telangana Movement',
    summary: 'How leadership united people.',
    image: telanganaMovementImg,
    NavIcon: IconMovementNav,
    topics: [
      {
        title: 'How leadership united people',
        description: 'Mobilising communities, sustaining morale, and turning shared aspiration into a statewide movement for statehood.',
        Icon: IconUnity,
      },
    ],
  },
  {
    id: 'crisis',
    label: 'Section 2',
    title: 'Governance During Crisis',
    summary: 'Responsive administration when livelihoods and public trust were on the line.',
    image: inclusiveImg,
    NavIcon: IconCrisisNav,
    topics: [
      { title: 'Farmer welfare', description: 'Protecting cultivators through relief, support systems, and policies centred on rural resilience.', Icon: IconFarmer },
      { title: 'Water reforms', description: 'Prioritising equitable access, conservation, and long-term water security for every region.', Icon: IconWater },
      { title: 'Public-first administration', description: 'Putting citizens before bureaucracy with transparent, accountable, and humane governance.', Icon: IconPublic },
    ],
  },
  {
    id: 'fast',
    label: 'Section 3',
    title: 'Fast Decision Governance',
    summary: 'Decisive execution that turned vision into visible outcomes across Telangana.',
    image: welfareImg,
    NavIcon: IconFastNav,
    topics: [
      { title: 'TS-iPASS', description: 'Single-window clearances that accelerated investment and cut red tape for industry and enterprise.', Icon: IconTsipass },
      { title: 'Mission Bhagiratha', description: 'Safe drinking water pipelines reaching villages and households at scale and speed.', Icon: IconBhagiratha },
      { title: 'Irrigation execution', description: 'Major projects delivered with urgency to strengthen agriculture and rural prosperity.', Icon: IconIrrigation },
    ],
  },
  {
    id: 'identity',
    label: 'Section 4',
    title: 'Leadership Rooted In Telangana Identity',
    summary: 'Celebrating culture and dignity as foundations of confident, self-respecting governance.',
    image: cultureIdentityImg,
    NavIcon: IconIdentityNav,
    topics: [
      { title: 'Culture', description: 'Honouring arts, heritage, and traditions that define Telangana’s distinct character.', Icon: IconCulture },
      { title: 'Language', description: 'Elevating Telugu as a symbol of pride, access, and administrative inclusion.', Icon: IconLanguage },
      { title: 'Festivals', description: 'Recognising public celebrations that unite communities and reinforce shared identity.', Icon: IconFestival },
      { title: 'Self-respect', description: 'Asserting Telangana’s voice with dignity in policy, symbolism, and public life.', Icon: IconSelfRespect },
    ],
  },
];

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

const HERO_TITLE = 'Leadership Philosophy';
const LETTER_STAGGER = 0.032;
const LETTER_DURATION = 0.62;
const LETTER_EASE = [0.16, 1, 0.3, 1];
const LETTER_INITIAL_DELAY = 0.06;

function HeroAnimatedLetters({ text }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span aria-hidden="true">{text}</span>;
  }

  return (
    <span className="leadership-hero-title-letters" aria-hidden="true">
      {[...text].map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          className="leadership-hero-char"
          initial={{ opacity: 0, y: '-0.72em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: LETTER_INITIAL_DELAY + i * LETTER_STAGGER,
            duration: LETTER_DURATION,
            ease: LETTER_EASE,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

const LeadershipInAction = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = leadershipInActionSections[activeIndex];
  const ActiveNavIcon = active.NavIcon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="leadership-action-section"
      aria-labelledby="leadership-in-action-title"
    >
      <motion.div className="lia-layout">
        <aside className="lia-sidebar">
          <div className="lia-sidebar-header">
            <h2 id="leadership-in-action-title">Leadership In Action</h2>
            <p>Select a chapter to explore how leadership shaped Telangana.</p>
          </div>
          <nav className="lia-nav" aria-label="Leadership chapters">
            {leadershipInActionSections.map((section, index) => {
              const NavIcon = section.NavIcon;
              const isActive = index === activeIndex;
              return (
                <button
                  key={section.id}
                  type="button"
                  className={`lia-nav-item${isActive ? ' is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <div className="lia-nav-copy">
                    <span className="lia-nav-label">{section.label}</span>
                    <span className="lia-nav-title">{section.title}</span>
                  </div>
                  <span className="lia-nav-thumb" aria-hidden="true">
                    <NavIcon />
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        <motion.div className="lia-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="lia-main-panel"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div className="lia-feature">
                <div className="lia-feature-visual">
                  <img src={active.image} alt="" />
                  <span className="lia-feature-badge" aria-hidden="true">
                    <ActiveNavIcon />
                  </span>
                </div>
                <div className="lia-feature-copy">
                  <span className="lia-content-label">{active.label}</span>
                  <h3>{active.title}</h3>
                  <p className="lia-summary">{active.summary}</p>
                  <ul className="lia-topics">
                    {active.topics.map((topic) => {
                      const TopicIcon = topic.Icon;
                      return (
                        <li key={topic.title} className="lia-topic">
                          <span className="lia-topic-icon" aria-hidden="true">
                            <TopicIcon />
                          </span>
                          <div className="lia-topic-text">
                            <strong>{topic.title}</strong>
                            <p>{topic.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const IconHighlightScroll = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const IconHighlightLeadership = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconHighlightIdeas = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-4 10c1 .9 1 2 1 3h6c0-1 0-2.1 1-3a6 6 0 0 0-4-10z" />
  </svg>
);

const IconHighlightImpact = (props) => (
  <svg {...svgIcon} {...props} aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const StatCounter = ({ value, label, icon: Icon, suffix = "", delay = 0 }) => {
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
      <div className="h-icon">{Icon ? <Icon /> : null}</div>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="leadership-header"
          >
            <h2>
              <span className="leadership-hero-sr-only">{HERO_TITLE}</span>
              <HeroAnimatedLetters text={HERO_TITLE} />
            </h2>
            <motion.div
              className="leadership-hero-subtitle-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: LETTER_INITIAL_DELAY + HERO_TITLE.length * LETTER_STAGGER + 0.2,
                duration: 0.55,
                ease: LETTER_EASE,
              }}
            >
              <span className="leadership-hero-subtitle-accent" aria-hidden="true" />
              <p className="leadership-hero-subtitle">
                A multidimensional approach to governance, combining empathy with decisive strategic action.
              </p>
            </motion.div>
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

      <div className="leadership-infographic-section">
        <h2 className="leadership-infographic-vertical-title">
          <span className="leadership-hero-sr-only">Leadership</span>
          <span aria-hidden="true">LEADERSHIP</span>
        </h2>
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
    </div>

      <LeadershipInAction />


      <section className="highlights-section">
        <div className="highlights-grid">
          <StatCounter
            icon={IconHighlightScroll}
            value={30}
            suffix="+"
            label="Years in Public Service"
            delay={0.1}
          />
          <StatCounter
            icon={IconHighlightLeadership}
            value={10}
            suffix="+"
            label="Years in Leadership"
            delay={0.2}
          />
          <StatCounter
            icon={IconHighlightIdeas}
            value={50}
            suffix="+"
            label="Key Initiatives"
            delay={0.3}
          />
          <StatCounter
            icon={IconHighlightImpact}
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
