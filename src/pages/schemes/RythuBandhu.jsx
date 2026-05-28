import React, { useId, useMemo, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import './RythuBandhu.css';

import rythuHeroLogo from '../../assets/Rythu Bandhu hero.png';
import rythuFieldBg from '../../assets/rythubandu_bghero.jpg';
import farmerImg from '../../assets/rythu_bandhu_farmer_happy_smiling_field.png';
import agricultureImg from '../../assets/rythubandu_bghero.jpg';
import rythubandu2Img from '../../assets/rythubandu_bghero.jpg';

const RYTHU_HERO_LINES = ['KNOW ABOUT', 'THE RYTHU BANDHU', 'SCHEME'];
const RYTHU_HERO_SR_TITLE = 'Know about the Rythu Bandhu scheme';

const STAGGER = 0.032;
const DURATION = 0.62;
const EASE = [0.16, 1, 0.3, 1];
const SECTION_GAP = 0.16;
const INITIAL_DELAY = 0.06;

function useThreeLineTimings(line1, line2, line3) {
  return useMemo(() => {
    let t = INITIAL_DELAY + 0.12;
    const base1 = t;
    t += [...line1].length * STAGGER + SECTION_GAP;
    const base2 = t;
    t += [...line2].length * STAGGER + SECTION_GAP;
    const base3 = t;
    return [base1, base2, base3];
  }, [line1, line2, line3]);
}

function AnimatedLetters({ text, baseDelay, className, play }) {
  const chars = [...text];
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span className={className} aria-hidden="true">
        {text}
      </span>
    );
  }

  return (
    <span className={className} aria-hidden="true">
      {chars.map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          className="rb-hero-char"
          initial={{ opacity: 0, y: '0.72em' }}
          animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: '0.72em' }}
          transition={{
            delay: play ? baseDelay + i * STAGGER : 0,
            duration: DURATION,
            ease: EASE,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function RythuBannerCurves() {
  const uid = useId().replace(/:/g, '');
  const fShadow = `rythu-sh-${uid}`;
  const gGreen = `rythu-g-${uid}`;

  return (
    <svg
      className="rb-hero-curves-svg"
      viewBox="0 0 820 900"
      preserveAspectRatio="xMinYMid slice"
      aria-hidden
    >
      <defs>
        <filter id={fShadow} x="-35%" y="-35%" width="170%" height="170%">
          <feDropShadow
            dx="8"
            dy="12"
            stdDeviation="16"
            floodColor="#000"
            floodOpacity="0.32"
          />
        </filter>
        <linearGradient id={gGreen} x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#0f4a14" />
          <stop offset="55%" stopColor="#1e6b24" />
          <stop offset="100%" stopColor="#2e8f38" />
        </linearGradient>
      </defs>
      <path
        filter={`url(#${fShadow})`}
        fill={`url(#${gGreen})`}
        d="M -140 -100 C 200 20 320 280 460 1040 L -140 1040 Z"
      />
      <path
        filter={`url(#${fShadow})`}
        fill="#2e7d32"
        d="M -120 40 C 220 120 300 340 400 1040 L -120 1040 Z"
      />
      <path
        filter={`url(#${fShadow})`}
        fill="#266e2c"
        opacity={0.94}
        d="M -100 130 C 190 210 260 380 340 1040 L -100 1040 Z"
      />
      <path
        fill="none"
        stroke="#fdd835"
        strokeWidth="6"
        strokeLinecap="round"
        opacity={0.92}
        d="M 48 200 Q 260 280 420 560"
      />
      <path
        fill="none"
        stroke="#fdd835"
        strokeWidth="4"
        strokeLinecap="round"
        opacity={0.72}
        d="M 12 380 Q 210 460 340 760"
      />
    </svg>
  );
}

function RythuHero() {
  const { hash } = useLocation();
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const heroInViewFromScroll = useInView(heroRef, { once: true, amount: 0.28 });
  const [heroLinkedIn, setHeroLinkedIn] = useState(false);

  useEffect(() => {
    const anchor = hash.replace(/^#/, '');
    if (anchor === 'rythu-bandhu' || anchor === 'rythu-bandhu-hero') {
      setHeroLinkedIn(true);
    }
  }, [hash]);

  const heroInView = heroInViewFromScroll || heroLinkedIn;
  const [b1, b2, b3] = useThreeLineTimings(
    RYTHU_HERO_LINES[0],
    RYTHU_HERO_LINES[1],
    RYTHU_HERO_LINES[2]
  );

  const logoMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36 },
        animate: heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 },
        transition: { duration: 0.78, ease: EASE, delay: heroInView ? 0.04 : 0 },
      };

  return (
    <section
      id="rythu-bandhu-hero"
      ref={heroRef}
      className="rb-hero"
      aria-labelledby="rb-hero-title"
    >
      <div className="rb-hero-shell">
        <div className="rb-hero-photo" aria-hidden="true">
          <img
            src={rythuFieldBg}
            alt=""
            className="rb-hero-photo-img"
          />
          <div className="rb-hero-photo-overlay" />
          <div className="rb-hero-photo-warm" />
          <div className="rb-hero-photo-fade" />
          <div className="rb-hero-photo-vignette" />
        </div>

        <div className="rb-hero-curves-wrap" aria-hidden="true">
          <RythuBannerCurves />
        </div>

        <div className="rb-hero-grid">
          <div className="rb-hero-logo-zone">
            <motion.div className="rb-hero-logo-stage" {...logoMotion}>
              <div className="rb-hero-ring">
                <div className="rb-hero-ring-inner">
                  <img
                    src={rythuHeroLogo}
                    alt="Rythu Bandhu"
                    className="rb-hero-logo-img"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="rb-hero-copy">
            <h1 id="rb-hero-title" className="rb-hero-title">
              <span className="rb-sr-only">{RYTHU_HERO_SR_TITLE}</span>
              <span className="rb-hero-headline" aria-hidden="true">
                <span className="rb-hero-line rb-hero-line--light">
                  <AnimatedLetters text={RYTHU_HERO_LINES[0]} baseDelay={b1} play={heroInView} />
                </span>
                <span className="rb-hero-line rb-hero-line--bar-wrap">
                  <span className="rb-hero-bar">
                    <AnimatedLetters text={RYTHU_HERO_LINES[1]} baseDelay={b2} play={heroInView} />
                  </span>
                </span>
                <span className="rb-hero-line rb-hero-line--light">
                  <AnimatedLetters text={RYTHU_HERO_LINES[2]} baseDelay={b3} play={heroInView} />
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Impact Section ——— */

const PROGRESS_ITEMS = [
  { label: 'Farmer Investment Support', pct: 88 },
  { label: 'Agricultural Stability', pct: 84 },
  { label: 'Rural Development Growth', pct: 92 },
];

const IMPACT_STATS = [
  {
    value: '63L+',
    label: 'Farmer Families Supported',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <path d="M3 19c0-4 3-7 6-7s6 3 6 7" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M21 19c0-3-2-5.5-4-5.5" />
      </svg>
    ),
  },
  {
    value: '₹72K Cr',
    label: 'Total Investment Disbursed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M3 10h2M19 10h2M3 14h2M19 14h2" />
      </svg>
    ),
  },
  {
    value: '₹10K',
    label: 'Per Acre Per Year Support',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V11" />
        <path d="M12 11C8 11 6 8 6 4C10 4 12 7 12 11Z" />
        <path d="M12 14C16 14 18 11 18 7C14 7 12 10 12 14Z" />
        <path d="M8 20H16" />
      </svg>
    ),
  },
  {
    value: '7+',
    label: 'Years of Agricultural Commitment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M4 10h16" />
        <path d="M8 3v4M16 3v4" />
      </svg>
    ),
  },
];

function AnimatedProgressBar({ pct, inView }) {
  return (
    <div className="rb-impact-bar-track">
      <motion.div
        className="rb-impact-bar-fill"
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
      <motion.div
        className="rb-impact-bar-thumb"
        initial={{ left: 0 }}
        animate={inView ? { left: `${pct}%` } : { left: 0 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </div>
  );
}

function useCountUp(end, inView, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const num = parseInt(end.replace(/[^0-9]/g, ''), 10);
    if (!num) { setCount(end); return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(num * ease));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  if (typeof count === 'string') return count;
  const suffix = end.replace(/[0-9]/g, '');
  return count + suffix;
}

function StatItem({ stat, inView }) {
  const display = useCountUp(stat.value, inView);
  return (
    <div className="rb-impact-stat">
      <div className="rb-impact-stat-icon">{stat.icon}</div>
      <div className="rb-impact-stat-text">
        <span className="rb-impact-stat-value">{display}</span>
        <span className="rb-impact-stat-label">{stat.label}</span>
      </div>
    </div>
  );
}

function ImpactSection() {
  const progressRef = useRef(null);
  const statsRef = useRef(null);
  const progressInView = useInView(progressRef, { once: true, amount: 0.15 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.1 });

  return (
    <section className="rb-impact">
      <div className="rb-impact-inner">
        <div className="rb-impact-layout">
          {/* Left — images */}
          <motion.div
            className="rb-impact-images"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rb-impact-img rb-impact-img--top">
              <img src={farmerImg} alt="Farmer benefiting from Rythu Bandhu" />
            </div>
            <div className="rb-impact-img rb-impact-img--bottom">
              <img src={agricultureImg} alt="Agriculture development in Telangana" />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            className="rb-impact-content"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="rb-impact-label">Farmer Support Impact</span>
            <h2 className="rb-impact-heading">
              Strengthening Farmers Through{' '}
              <span className="rb-impact-heading-accent">Direct Support</span>
            </h2>

            <div className="rb-impact-desc-row">
              <div className="rb-impact-desc-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="3" />
                  <path d="M3 19c0-4 3-7 6-7s6 3 6 7" />
                  <circle cx="17" cy="9" r="2.5" />
                  <path d="M21 19c0-3-2-5.5-4-5.5" />
                </svg>
              </div>
              <p className="rb-impact-desc">
                Rythu Bandhu is making a real difference in the lives of farmers by
                providing timely investment support, ensuring agricultural stability
                and driving overall rural development across Telangana.
              </p>
            </div>

            {/* Progress bars */}
            <div className="rb-impact-progress" ref={progressRef}>
              {PROGRESS_ITEMS.map((item) => (
                <div className="rb-impact-bar-row" key={item.label}>
                  <div className="rb-impact-bar-header">
                    <div className="rb-impact-bar-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V11" />
                        <path d="M12 11C8 11 6 8 6 4C10 4 12 7 12 11Z" />
                        <path d="M12 14C16 14 18 11 18 7C14 7 12 10 12 14Z" />
                      </svg>
                    </div>
                    <span className="rb-impact-bar-label">{item.label}</span>
                    <span className="rb-impact-bar-pct">{item.pct}%</span>
                  </div>
                  <AnimatedProgressBar pct={item.pct} inView={progressInView} />
                  <span className="rb-impact-bar-sub">Impact</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Bottom stats */}
        <div className="rb-impact-stats-wrap" ref={statsRef}>
          <div className="rb-impact-stats">
            {IMPACT_STATS.map((s) => (
              <StatItem key={s.label} stat={s} inView={statsInView} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

const VISION_ITEMS = [
  {
    title: 'Sustainable Agriculture',
    desc: 'Promoting eco-friendly and sustainable farming practices for long-term agricultural growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V11" />
        <path d="M12 11C8 11 6 8 6 4C10 4 12 7 12 11Z" />
        <path d="M12 14C16 14 18 11 18 7C14 7 12 10 12 14Z" />
        <path d="M8 20H16" />
      </svg>
    ),
  },
  {
    title: 'Farmer Empowerment',
    desc: 'Strengthening farmers with the right resources, knowledge and continuous support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <path d="M3 19c0-4 3-7 6-7s6 3 6 7" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M21 19c0-3-2-5.5-4-5.5" />
      </svg>
    ),
  },
  {
    title: 'Irrigation & Water Support',
    desc: 'Enhancing irrigation facilities and ensuring efficient water management for every field.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3C12 3 6 10 6 14a6 6 0 0012 0c0-4-6-11-6-11Z" />
        <path d="M10 16c0-1.1.9-2 2-2s2 .9 2 2" />
      </svg>
    ),
  },
  {
    title: 'Rural Development',
    desc: 'Building stronger rural communities through infrastructure, opportunities and agricultural advancement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <rect x="9" y="9" width="2" height="2" />
        <rect x="13" y="9" width="2" height="2" />
      </svg>
    ),
  },
];

function FutureVisionSection() {
  return (
    <section className="rb-vision-wrapper">
      {/* Header above the image section */}
      <motion.div
        className="rb-vision-header"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="rb-vision-label">Future Vision</span>
        <h2 className="rb-vision-heading">
          Building a Greener,{' '}
          <em>Stronger Tomorrow</em>
        </h2>
        <p className="rb-vision-sub">
          Empowering agriculture through innovation, financial support and
          sustainable practices for a better future.
        </p>
      </motion.div>

      {/* Image + arc area */}
      <div className="rb-vision">
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <clipPath id="visionImgCurve" clipPathUnits="objectBoundingBox">
              <path d="M0,0 L0.75,0 Q1,0.5 0.75,1 L0,1 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="rb-vision-img-wrap" aria-hidden="true">
          <img src={rythubandu2Img} alt="" className="rb-vision-img" />
          <div className="rb-vision-img-fade" />
        </div>

        <svg className="rb-vision-img-arc" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M445 0 Q580,500 445 1000"
            fill="none"
            stroke="rgba(46,125,50,0.18)"
            strokeWidth="3"
            strokeDasharray="12 6"
          />
        </svg>

        {/* Icon points on the parallel arc */}
        {VISION_ITEMS.map((item, i) => (
          <motion.div
            className={`rb-vision-point rb-vision-point--${i}`}
            key={item.title}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.1,
              delay: 0.15 + i * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="rb-vision-icon">{item.icon}</div>
            <div className="rb-vision-point-text">
              <h3 className="rb-vision-point-title">{item.title}</h3>
              <p className="rb-vision-point-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}

        {/* Bottom left quote */}
        <motion.div
          className="rb-vision-quote"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rb-vision-quote-accent" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V11" />
              <path d="M12 11C8 11 6 8 6 4C10 4 12 7 12 11Z" />
              <path d="M12 14C16 14 18 11 18 7C14 7 12 10 12 14Z" />
            </svg>
            <span className="rb-vision-quote-line" />
          </div>
          <p className="rb-vision-quote-text">
            Together, let's <strong>cultivate progress</strong>,{' '}
            <strong>nurture opportunities</strong> and create a{' '}
            <strong>thriving future</strong> for all.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const RythuBandhu = () => {
  return (
    <div className="rythu-bandhu-page">
      <RythuHero />
      <ImpactSection />
      <FutureVisionSection />
    </div>
  );
};

export default RythuBandhu;
