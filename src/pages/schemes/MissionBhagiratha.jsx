import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, useInView } from 'framer-motion';
import './MissionBhagiratha.css';

import mbBgImg from '../../assets/mb_bg.png';
import modiImg from '../../assets/mb4.jpg';
import cardGridImg from '../../assets/mb_card_grid.png';
import cardTapImg from '../../assets/mb_card_tap.png';
import cardInfraImg from '../../assets/mb_card_infra.png';
import drinkingWaterImg from '../../assets/Drinking-water.webp';
import sustainBgImg from '../../assets/mb_sustain_bg.jpg';

const LABEL_TEXT = 'Government scheme';
const HERO_TITLE = 'Mission Bhagiratha';
const HERO_SUBTITLE =
  'Safe piped drinking water to every household across Telangana.';

const DURATION = 1.2;
const EASE = [0.25, 0.1, 0.25, 1];

const ABOUT_POINTS = [
  {
    num: '01',
    title: 'Piped Water to Every Home',
    desc: 'Ensuring 100 litres per person per day of safe drinking water to every rural and urban household.',
  },
  {
    num: '02',
    title: 'World-Class Treatment Plants',
    desc: 'State-of-the-art purification facilities sourcing water from rivers and reservoirs across Telangana.',
  },
  {
    num: '03',
    title: 'Bridging Urban-Rural Divide',
    desc: 'Delivering the same quality of treated water to villages that cities enjoy.',
  },
  {
    num: '04',
    title: '26,000 km Pipeline Network',
    desc: 'One of the largest drinking water supply projects in the country, connecting every corner of the state.',
  },
];

function SlideRevealLine({ children, delay = 0, className, inView = true }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`mb-reveal-mask ${className || ''}`}>
      <motion.div
        className="mb-reveal-inner"
        initial={{ x: '100%', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        transition={{
          delay: inView ? delay : 0,
          duration: DURATION,
          ease: EASE,
          opacity: { delay: inView ? delay : 0, duration: DURATION * 0.6, ease: 'easeOut' },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function ScrubItem({ children, index, scrollYProgress }) {
  const stagger = 0.15;
  const itemStart = 0.1 + index * stagger;
  const itemEnd = itemStart + 0.35;

  const opacity = useTransform(scrollYProgress, [itemStart, itemEnd], [0, 1]);
  const y = useTransform(scrollYProgress, [itemStart, itemEnd], [60, 0]);

  return (
    <motion.div style={{ opacity, y }}>
      {children}
    </motion.div>
  );
}

const INFRA_CARDS = [
  {
    num: '01',
    title: 'Statewide Water Grid',
    desc: 'A massive pipeline network delivering safe drinking water across Telangana villages and cities.',
    color: '#1976d2',
    img: cardGridImg,
  },
  {
    num: '02',
    title: 'Tap Connection Access',
    desc: 'Providing direct household tap connections to ensure clean water reaches every family daily.',
    color: '#2e7d32',
    img: cardTapImg,
  },
  {
    num: '03',
    title: 'Reliable Water Infrastructure',
    desc: 'Modern reservoirs, pumping stations, and pipelines ensuring uninterrupted water distribution.',
    color: '#1565c0',
    img: cardInfraImg,
  },
];

function InfraSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end 0.75'],
  });

  const frameScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <section className="mb-infra" ref={sectionRef}>
      <motion.div className="mb-infra-frame" style={{ scale: frameScale }}>
        <div className="mb-infra-header">
          <motion.div style={{ opacity: headerOpacity, y: headerY }}>
            <h2 className="mb-infra-title">Water Infrastructure & Connectivity</h2>
            <p className="mb-infra-subtitle">
              Mission Bhagiratha strengthens Telangana with a modern drinking water network connecting homes, villages, and urban communities.
            </p>
          </motion.div>
        </div>

        <div className="mb-infra-cards">
          {INFRA_CARDS.map((card, i) => (
            <ScrubItem key={card.num} index={i} scrollYProgress={scrollYProgress}>
              <div className="mb-infra-card">
                <img
                  className="mb-infra-card-bg"
                  src={card.img}
                  alt=""
                  aria-hidden="true"
                />
                <span
                  className="mb-infra-card-num"
                  style={{ background: card.color }}
                >
                  {card.num}
                </span>
                <h3 className="mb-infra-card-title">{card.title}</h3>
                <p className="mb-infra-card-desc">{card.desc}</p>
              </div>
            </ScrubItem>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const IMPACT_HIGHLIGHTS = [
  {
    title: 'Reliable Access',
    desc: 'Safe drinking water reaches every home.',
    icon: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1565c0" strokeWidth="1.5" fill="#e8f0fe"/><path d="M20 10c-3.5 5.5-8 9.5-8 13.5a8 8 0 0016 0c0-4-4.5-8-8-13.5z" stroke="#1565c0" strokeWidth="1.5" fill="none"/><path d="M17 26a3 3 0 003 3" stroke="#1565c0" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
  {
    title: 'Better Health',
    desc: 'Cleaner water leads to healthier communities.',
    icon: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1565c0" strokeWidth="1.5" fill="#e8f0fe"/><path d="M20 28s-7-4-7-9a4 4 0 017-2.5A4 4 0 0127 19c0 5-7 9-7 9z" stroke="#1565c0" strokeWidth="1.5" fill="none"/></svg>,
  },
  {
    title: 'Empowered Lives',
    desc: 'Women and children live with greater ease and dignity.',
    icon: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1565c0" strokeWidth="1.5" fill="#e8f0fe"/><circle cx="20" cy="15" r="4" stroke="#1565c0" strokeWidth="1.5"/><path d="M13 30c0-4 3-7 7-7s7 3 7 7" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
];

const IMPACT_STATS = [
  {
    value: '100%+',
    label: 'Households provided with tap water supply',
    icon: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1565c0" strokeWidth="1.5" fill="#e8f0fe"/><rect x="13" y="16" width="14" height="12" rx="2" stroke="#1565c0" strokeWidth="1.5" fill="none"/><path d="M16 16v-3a4 4 0 018 0v3" stroke="#1565c0" strokeWidth="1.5"/><path d="M18 22h4" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    value: 'Improved',
    label: 'Health and well-being across communities',
    icon: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1565c0" strokeWidth="1.5" fill="#e8f0fe"/><path d="M14 22l4 4 8-10" stroke="#1565c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
  },
  {
    value: 'Hours Saved',
    label: 'Reduced time spent on fetching water daily',
    icon: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1565c0" strokeWidth="1.5" fill="#e8f0fe"/><circle cx="20" cy="20" r="8" stroke="#1565c0" strokeWidth="1.5" fill="none"/><path d="M20 15v5l3 3" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    value: 'Stronger Villages',
    label: 'Better quality of life and rural transformation',
    icon: <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#1565c0" strokeWidth="1.5" fill="#e8f0fe"/><path d="M14 28h12M16 28v-6h8v6M20 22v-8l-5 5h10l-5-5z" stroke="#1565c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
  },
];

const SUSTAINABILITY_POINTS = [
  {
    title: 'Water Conservation',
    desc: 'Promoting mindful use of water for a better tomorrow.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="#1565c0" opacity="0.15"/><path d="M24 10c-4.5 7-10 12.5-10 17a10 10 0 0020 0c0-4.5-5.5-10-10-17z" stroke="#64b5f6" strokeWidth="2" fill="none"/><path d="M20 30a4 4 0 004 4" stroke="#64b5f6" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Efficient Distribution',
    desc: 'Strengthening systems to ensure reliable and equitable supply.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="#1565c0" opacity="0.15"/><path d="M12 24h8m8 0h8M24 16v16" stroke="#64b5f6" strokeWidth="2" strokeLinecap="round"/><circle cx="24" cy="24" r="4" stroke="#64b5f6" strokeWidth="2"/><path d="M16 18l4 3m12-3l-4 3m-12 6l4-3m12 6l-4-3" stroke="#64b5f6" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Sustainable Infrastructure',
    desc: 'Investing in smart, durable and environment-friendly solutions.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="#1565c0" opacity="0.15"/><rect x="14" y="22" width="20" height="14" rx="2" stroke="#64b5f6" strokeWidth="2" fill="none"/><path d="M18 22v-4a6 6 0 0112 0v4" stroke="#64b5f6" strokeWidth="2"/><path d="M20 28h8m-6 4h4" stroke="#64b5f6" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: 'Future Resource Planning',
    desc: 'Preparing today for a resilient and water-secure tomorrow.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="#1565c0" opacity="0.15"/><circle cx="24" cy="24" r="10" stroke="#64b5f6" strokeWidth="2" fill="none"/><path d="M24 14v10l6 4" stroke="#64b5f6" strokeWidth="2" strokeLinecap="round"/><path d="M34 14l2-2m-24 24l-2 2m24 0l2 2M12 14l-2-2" stroke="#64b5f6" strokeWidth="1.5" strokeLinecap="round"/></svg>
    ),
  },
];

function ImpactSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end 0.75'],
  });

  const frameScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0, 0.25], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0.05, 0.25], [40, 0]);

  return (
    <section className="mb-impact" ref={sectionRef}>
      <motion.div className="mb-impact-frame" style={{ scale: frameScale }}>
        <div className="mb-impact-top">
          <motion.div className="mb-impact-image" style={{ opacity: imageOpacity, y: imageY }}>
            <img src={drinkingWaterImg} alt="Villagers accessing clean drinking water" />
          </motion.div>

          <motion.div className="mb-impact-content" style={{ opacity: headerOpacity, y: headerY }}>
            <span className="mb-impact-label">Impact on Communities</span>
            <h2 className="mb-impact-title">Transforming Everyday Life</h2>
            <p className="mb-impact-desc">
              Mission Bhagiratha has improved access to safe drinking water and strengthened daily life across rural and urban communities in Telangana.
            </p>
            <div className="mb-impact-highlights">
              {IMPACT_HIGHLIGHTS.map((item, i) => (
                <ScrubItem key={i} index={i} scrollYProgress={scrollYProgress}>
                  <div className="mb-impact-highlight">
                    <span className="mb-impact-highlight-icon">{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </ScrubItem>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mb-impact-stats">
          {IMPACT_STATS.map((stat, i) => (
            <ScrubItem key={i} index={i} scrollYProgress={scrollYProgress}>
              <div className="mb-impact-stat">
                <span className="mb-impact-stat-icon">{stat.icon}</span>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            </ScrubItem>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SustainabilitySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end 0.75'],
  });

  const frameScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <section className="mb-sustain" ref={sectionRef}>
      <motion.div className="mb-sustain-frame" style={{ scale: frameScale }}>
        <img
          className="mb-sustain-bg"
          src={sustainBgImg}
          alt=""
          aria-hidden="true"
        />
        <div className="mb-sustain-overlay" />

        <motion.div className="mb-sustain-header" style={{ opacity: headerOpacity, y: headerY }}>
          <span className="mb-sustain-label">Future Water Sustainability</span>
          <h2 className="mb-sustain-title">Building a Sustainable Water Future</h2>
          <p className="mb-sustain-desc">
            Mission Bhagiratha is committed to long-term water security through sustainable practices, innovative solutions, and responsible resource management for generations to come.
          </p>
        </motion.div>

        <div className="mb-sustain-points">
          <div className="mb-sustain-line" />
          {SUSTAINABILITY_POINTS.map((point, i) => (
            <ScrubItem key={i} index={i} scrollYProgress={scrollYProgress}>
              <div className="mb-sustain-point">
                <div className="mb-sustain-icon">{point.icon}</div>
                <h4>{point.title}</h4>
                <p>{point.desc}</p>
              </div>
            </ScrubItem>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end 0.75'],
  });

  const frameScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [40, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.05, 0.3], [80, 0]);

  return (
    <section className="mb-about" ref={sectionRef}>
      <motion.div className="mb-about-frame" style={{ scale: frameScale }}>
        <motion.h2
          className="mb-about-title"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          About Mission Bhagiratha
        </motion.h2>

        <div className="mb-about-inner">
          <motion.div
            className="mb-about-image"
            style={{ opacity: imageOpacity, y: imageY }}
          >
            <img src={modiImg} alt="PM Modi launches Mission Bhagiratha in Telangana" />
          </motion.div>

          <div className="mb-about-content">
            {ABOUT_POINTS.map((point, i) => (
              <ScrubItem key={point.num} index={i} scrollYProgress={scrollYProgress}>
                <div className="mb-about-point">
                  <span className="mb-about-number">{point.num}</span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </div>
              </ScrubItem>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

const MissionBhagiratha = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.32 });

  return (
    <div className="mb-page">
      <section ref={heroRef} className="mb-hero" aria-labelledby="mb-hero-title">
        <div className="mb-hero-shell">
          <div className="mb-hero-bg">
            <img
              className="mb-hero-bg-img"
              src={mbBgImg}
              alt=""
              aria-hidden="true"
              draggable={false}
            />
          </div>

          <div className="mb-hero-overlay" />

          <div className="mb-hero-content">
            <SlideRevealLine delay={0.1} className="mb-hero-label-wrap" inView={heroInView}>
              <span className="mb-hero-label">{LABEL_TEXT}</span>
            </SlideRevealLine>

            <SlideRevealLine delay={0.3} inView={heroInView}>
              <h1 id="mb-hero-title" className="mb-hero-title">
                {HERO_TITLE}
              </h1>
            </SlideRevealLine>

            <SlideRevealLine delay={0.55} inView={heroInView}>
              <p className="mb-hero-subtitle">{HERO_SUBTITLE}</p>
            </SlideRevealLine>
          </div>
        </div>
      </section>

      <AboutSection />
      <InfraSection />
      <ImpactSection />
      <SustainabilitySection />
    </div>
  );
};

export default MissionBhagiratha;
