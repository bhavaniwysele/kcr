import React, { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './WelfareSchemes.css';

import welfareHeroImg from '../../assets/welfarehero.jpg';
import pensionImg from '../../assets/Aasara-pension.jpg';
import weddingImg from '../../assets/Kalyana Lakshmi.jpg';
import healthKitImg from '../../assets/healthandwelfare.webp';
import welfarePanorama from '../../assets/Dalit Bandhu.jpg';
import impactFeatureImg from '../../assets/welfare-impact-feature.png';
import quoteBannerImg from '../../assets/welfare-quote-banner.png';

const IMPACT_PILLARS = [
  {
    id: 'motherhood',
    title: 'Safer Motherhood',
    description:
      'Supporting mothers and newborns through comprehensive maternal care, nutrition, and safe delivery programmes.',
    icon: 'motherhood',
  },
  {
    id: 'security',
    title: 'Financial Security',
    description:
      'Monthly pensions and social assistance ensuring dignity for senior citizens and vulnerable communities.',
    icon: 'security',
  },
  {
    id: 'dignity',
    title: "Women's Dignity",
    description:
      'Marriage support schemes that ease financial burdens and uplift women and families across Telangana.',
    icon: 'dignity',
  },
  {
    id: 'community',
    title: 'Community Strength',
    description:
      'Economic empowerment initiatives helping families build self-reliant livelihoods and stronger neighbourhoods.',
    icon: 'community',
  },
];

const IMPACT_POP_EASE = [0.22, 1, 0.36, 1];
const IMPACT_LIST_VIEWPORT = { once: true, amount: 0.15, margin: '0px 0px -60px 0px' };

const impactListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

const impactItemVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.86 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: IMPACT_POP_EASE },
  },
};

const WelfareImpactPillar = ({ item, reduceMotion }) => {
  const content = (
    <>
      <div className="welfare-impact-item-icon">
        <WelfareIcon type={item.icon} />
      </div>
      <div className="welfare-impact-item-body">
        <h3>{item.title}</h3>
        <span className="welfare-impact-item-line" aria-hidden="true" />
        <p>{item.description}</p>
      </div>
    </>
  );

  if (reduceMotion) {
    return <li className="welfare-impact-item">{content}</li>;
  }

  return (
    <motion.li className="welfare-impact-item" variants={impactItemVariants}>
      {content}
    </motion.li>
  );
};

const WELFARE_STATS = [
  { id: 'beneficiaries', value: '1.30+ Crore', label: 'Beneficiaries Reached', icon: 'people' },
  { id: 'programmes', value: '50+', label: 'Welfare Programmes', icon: 'programmes' },
  { id: 'districts', value: '33', label: 'Districts Covered', icon: 'districts' },
  { id: 'years', value: '10+', label: 'Years of Commitment', icon: 'years' },
];

const WelfareIcon = ({ type }) => {
  const icons = {
    motherhood: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="14" r="6" />
        <path d="M12 38c2-8 8-12 12-12s10 4 12 12" />
        <circle cx="34" cy="20" r="4" />
        <path d="M28 38c1.5-5 4-8 6-8s4.5 3 6 8" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6L8 14v10c0 10 6.5 16.5 16 18 9.5-1.5 16-8 16-18V14L24 6z" />
        <path d="M18 24l4 4 8-8" />
      </svg>
    ),
    dignity: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="12" r="6" />
        <path d="M10 40c2-10 8-16 14-16s12 6 14 16" />
      </svg>
    ),
    community: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="16" cy="16" r="5" />
        <circle cx="32" cy="16" r="5" />
        <path d="M6 38c1.5-8 6-12 10-12s6 3 8 3 6-3 10-3 8.5 4 10 12" />
      </svg>
    ),
    people: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="14" cy="12" r="5" />
        <circle cx="28" cy="14" r="4" />
        <path d="M6 32c1.5-7 5-11 8-11s5 3 7 3 5-3 8-3 6.5 4 7 11" />
      </svg>
    ),
    programmes: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <rect x="8" y="10" width="24" height="20" rx="2" />
        <path d="M14 18h12M14 24h8" />
      </svg>
    ),
    districts: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 6l10 6v12l-10 6-10-6V12z" />
        <circle cx="20" cy="20" r="4" />
      </svg>
    ),
    years: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="22" r="12" />
        <path d="M20 14v8l5 3" />
      </svg>
    ),
  };
  return <span className="welfare-icon">{icons[type]}</span>;
};

const HERO_TITLE = 'WELFARE IMPACT';
const HERO_SUBTITLE =
  'Ensuring dignity, security, and opportunity for every family across Telangana.';

const SHOWCASE_TITLE = 'OUR WELFARE PILLARS';
const SHOWCASE_SUBTITLE =
  'Support. Empowerment. Dignity. For every stage of life.';

const IMPACT_EYEBROW = 'Lives Transformed';
const IMPACT_TITLE_LINE_1 = 'Changing Lives.';
const IMPACT_TITLE_ACCENT = 'Better Telangana.';
const IMPACT_SUBTITLE =
  'From supporting families and empowering women to ensuring dignity for seniors and opportunities for communities — our welfare initiatives create real impact where it matters most.';

const WELFARE_CATEGORIES = [
  {
    id: 'mothers',
    label: 'Mothers & Child Care',
    scheme: 'KCR Kit',
    accent: 'Child Care',
    description:
      'A comprehensive care programme ensuring health and happiness for mothers and newborns across Telangana—strengthening families from pregnancy through early childhood.',
    focus: ['maternal care', 'safe deliveries', 'newborn support'],
    image: healthKitImg,
    imageAlt: 'Maternal health and newborn care',
    link: '/schemes#kcr-kit',
  },
  {
    id: 'elderly',
    label: 'Senior Citizen Support',
    scheme: 'Aasara',
    accent: 'Support',
    description:
      'Monthly pensions and social security for the elderly, widows, weavers, and differently-abled—ensuring financial dignity so no citizen is left behind.',
    focus: ['financial dignity', 'social security', 'support for vulnerable groups'],
    image: pensionImg,
    imageAlt: 'Senior citizens receiving pension support',
    link: '/schemes#aasara-pensions',
  },
  {
    id: 'women',
    label: 'Women Empowerment',
    scheme: 'Kalyana Lakshmi / Shadi Mubarak',
    accent: 'Empowerment',
    description:
      'Financial assistance for marriages that eases the burden on families and supports women at one of life’s most important milestones.',
    focus: ['support for women and families'],
    image: weddingImg,
    imageAlt: 'Wedding support for families',
    link: '/schemes#kcr-kit',
  },
  {
    id: 'social',
    label: 'Community Development',
    scheme: 'Dalit Bandhu',
    accent: 'Development',
    description:
      'The world’s largest direct benefit transfer for Dalit empowerment—₹10 lakh per family to start businesses and build self-reliant livelihoods.',
    focus: ['economic opportunity', 'self-reliance', 'livelihood support'],
    image: welfarePanorama,
    imageAlt: 'Dalit Bandhu economic empowerment',
    link: '/schemes#dalit-bandhu',
  },
];

const TILE_FLIP_HIDDEN = { rotateX: -88, opacity: 1 };
const TILE_FLIP_VISIBLE = { rotateX: 0, opacity: 1 };
const TILE_FLIP_DURATION = 0.72;
const TILE_FLIP_BASE_DELAY = 0.08;
const TILE_FLIP_STAGGER = 0.1;
const TILE_FLIP_EASE = [0.33, 1, 0.68, 1];

const WelfareTile = ({ item, index, isActive, onSelect, inView, reduceMotion }) => {
  const tileClass = `welfare-tile welfare-tile--${item.id}${isActive ? ' welfare-tile--active' : ''}`;

  const content = (
    <>
      <span className="welfare-tile-media" aria-hidden="true">
        <img src={item.image} alt="" />
      </span>
      <span className="welfare-tile-label">{item.label}</span>
    </>
  );

  if (reduceMotion) {
    return (
      <button
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls="welfare-panel"
        id={`welfare-tab-${item.id}`}
        className={tileClass}
        onClick={onSelect}
      >
        {content}
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls="welfare-panel"
      id={`welfare-tab-${item.id}`}
      className={tileClass}
      onClick={onSelect}
      initial={TILE_FLIP_HIDDEN}
      animate={inView ? TILE_FLIP_VISIBLE : TILE_FLIP_HIDDEN}
      transition={{
        type: 'tween',
        duration: TILE_FLIP_DURATION,
        delay: inView ? TILE_FLIP_BASE_DELAY + index * TILE_FLIP_STAGGER : 0,
        ease: TILE_FLIP_EASE,
      }}
      style={{ transformStyle: 'preserve-3d', transformPerspective: 1200 }}
    >
      {content}
    </motion.button>
  );
};

const WelfareSchemes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const showcaseGridRef = useRef(null);
  const showcaseInView = useInView(showcaseGridRef, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();
  const active = WELFARE_CATEGORIES[activeIndex];

  const renderHeading = (item) => {
    const parts = item.label.split(item.accent);
    if (parts.length < 2) {
      return item.label;
    }
    return (
      <>
        {parts[0]}
        <span className="welfare-panel-accent">{item.accent}</span>
        {parts.slice(1).join(item.accent)}
      </>
    );
  };

  return (
    <div className="welfare-page">
      <section className="welfare-hero" aria-label="Welfare Schemes hero">
        <img
          src={welfareHeroImg}
          alt="Large gathering of women and families at a public welfare event"
          className="welfare-hero-bg"
        />
        <div className="welfare-hero-content">
          <p className="welfare-hero-tagline">Compassionate Governance</p>
          <h1 className="welfare-hero-title" aria-label={HERO_TITLE}>
            {HERO_TITLE.split('').map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={`welfare-hero-letter ${char === ' ' ? 'welfare-hero-letter-space' : ''}`}
                style={{ '--letter-delay': `${index * 0.08}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <p className="welfare-hero-subtitle">{HERO_SUBTITLE}</p>
        </div>
      </section>

      <div className="welfare-container">
        <section
          className="welfare-showcase-section"
          aria-labelledby="welfare-showcase-title"
        >
          <header className="welfare-showcase-head">
            <h2 id="welfare-showcase-title" className="welfare-showcase-title">
              {SHOWCASE_TITLE}
            </h2>
            <p className="welfare-showcase-subtitle">{SHOWCASE_SUBTITLE}</p>
          </header>

          <div className="welfare-showcase" aria-label="Welfare scheme categories">
          <div
              ref={showcaseGridRef}
              className="welfare-tile-grid"
              role="tablist"
              aria-label="Select a welfare category"
            >
              {WELFARE_CATEGORIES.map((item, index) => (
                <WelfareTile
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={activeIndex === index}
                  onSelect={() => setActiveIndex(index)}
                  inView={showcaseInView}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            <article
              id="welfare-panel"
              role="tabpanel"
              aria-labelledby="welfare-panel-title"
              className="welfare-panel"
              key={active.id}
            >
              <p className="welfare-panel-eyebrow">{active.scheme}</p>
              <h2 id="welfare-panel-title" className="welfare-panel-title">
                {renderHeading(active)}
              </h2>
              <p className="welfare-panel-desc">{active.description}</p>
              <div className="welfare-panel-focus">
                <p className="welfare-panel-focus-label">Focus</p>
                <ul>
                  {active.focus.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <Link to={active.link} className="welfare-panel-btn">
                Know More
              </Link>
            </article>
          </div>
        </section>

        <section
          className="welfare-impact-section"
          aria-labelledby="welfare-impact-title"
        >
          <header className="welfare-impact-head">
            <p className="welfare-impact-eyebrow">{IMPACT_EYEBROW}</p>
            <h2 id="welfare-impact-title" className="welfare-impact-title">
              {IMPACT_TITLE_LINE_1}
              <br />
              Building a <span className="welfare-impact-title-accent">{IMPACT_TITLE_ACCENT}</span>
            </h2>
            <p className="welfare-impact-subtitle">{IMPACT_SUBTITLE}</p>
          </header>

          {reduceMotion ? (
            <div className="welfare-impact">
              <div className="welfare-impact-visual">
                <img
                  src={impactFeatureImg}
                  alt="Mother holding her child, representing transformed lives through welfare"
                />
                <div className="welfare-impact-visual-overlay" aria-hidden="true" />
              </div>
              <ul className="welfare-impact-list">
                {IMPACT_PILLARS.map((item) => (
                  <WelfareImpactPillar key={item.id} item={item} reduceMotion />
                ))}
              </ul>
            </div>
          ) : (
            <div className="welfare-impact">
              <div className="welfare-impact-visual">
                <img
                  src={impactFeatureImg}
                  alt="Mother holding her child, representing transformed lives through welfare"
                />
                <div className="welfare-impact-visual-overlay" aria-hidden="true" />
              </div>
              <motion.ul
                className="welfare-impact-list"
                variants={impactListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={IMPACT_LIST_VIEWPORT}
              >
                {IMPACT_PILLARS.map((item) => (
                  <WelfareImpactPillar key={item.id} item={item} reduceMotion={false} />
                ))}
              </motion.ul>
            </div>
          )}
        </section>

        <section className="welfare-stats" aria-label="Welfare impact statistics">
          <ul className="welfare-stats-grid">
            {WELFARE_STATS.map((stat, index) => (
              <li key={stat.id} className="welfare-stat">
                {index > 0 && <span className="welfare-stat-divider" aria-hidden="true" />}
                <WelfareIcon type={stat.icon} />
                <p className="welfare-stat-value">{stat.value}</p>
                <p className="welfare-stat-label">{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="welfare-quote" aria-labelledby="welfare-quote-text">
          <img
            src={quoteBannerImg}
            alt=""
            className="welfare-quote-bg"
            aria-hidden="true"
          />
          <div className="welfare-quote-overlay" aria-hidden="true" />
          <blockquote className="welfare-quote-content">
            <span className="welfare-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p id="welfare-quote-text" className="welfare-quote-text">
              A stronger Telangana begins with empowered communities.
            </p>
            <span className="welfare-quote-line" aria-hidden="true" />
            <cite className="welfare-quote-cite">
              Building dignity, security, and hope for every family.
            </cite>
          </blockquote>
      </section>
    </div>
  );
};

export default WelfareSchemes;
