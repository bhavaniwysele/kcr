import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import RythuBandhu from './RythuBandhu';
import MissionBhagiratha from './MissionBhagiratha';
import KCRKit from './KCRKit';
import AasaraPension from './AasaraPension';
import bhkHeroBg from '../../assets/2bhkherobg.jpg';
import bhkAboutHero from '../../assets/bhk_about_hero.png';
import iconCommunity from '../../assets/bhk_icon_community.png';
import iconHouse from '../../assets/bhk_icon_house.png';
import iconBuilding from '../../assets/bhk_icon_building.png';
import iconFacilities from '../../assets/bhk_icon_facilities.png';
import iconPeople from '../../assets/bhk_icon_people.png';
import bhkStatsBg from '../../assets/bhk_stats_bg.png';
import './SchemePage.css';
import './SchemesHub.css';
import './2bhk.css';

const LABEL_TEXT = 'Government scheme';

const BHK_ABOUT_INITIATIVE_LABEL = 'Government Housing Initiative';

const BHK_ABOUT_INITIATIVE_BODY =
  'An initiative focused on providing safe and dignified housing for eligible families through modern living spaces, improved residential infrastructure, and stronger community development across Telangana. The 2BHK Housing Scheme aims to create secure environments that support better living conditions, social stability, and a stronger future for economically vulnerable families.';

export function TwoBhkAboutInitiativeSection({ imageSrc }) {
  const innerRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    let finished = false;
    let alive = true;

    const reveal = () => {
      if (finished || !alive) return;
      finished = true;
      setRevealed(true);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) reveal();
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    );
    io.observe(el);

    const onScrollOrResize = () => {
      if (finished || !innerRef.current) return;
      const r = innerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.height <= 0) return;
      if (r.bottom > 0 && r.top < vh) reveal();
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    requestAnimationFrame(() => requestAnimationFrame(onScrollOrResize));

    return () => {
      alive = false;
      finished = true;
      io.disconnect();
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  const easeOut = [0.22, 1, 0.36, 1];

  const contentColumn = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.45 } } }
    : {
        hidden: { opacity: 0, x: -80 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 1.45, ease: easeOut },
        },
      };

  const backdropMotion = {
    rest: { opacity: 0, scale: 0.92 },
    on: {
      opacity: 1,
      scale: 1,
      transition: { duration: reduceMotion ? 0.35 : 0.95, ease: easeOut },
    },
  };

  const imageMotion = {
    rest: { opacity: 0, y: reduceMotion ? 0 : 28 },
    on: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.38 : 1.2,
        ease: easeOut,
        delay: reduceMotion ? 0 : 0.72,
      },
    },
  };

  return (
    <section className="bhk-about-initiative" aria-labelledby="bhk-about-initiative-heading">
      <div ref={innerRef} className="bhk-about-initiative__inner">
        <motion.div
          className="bhk-about-initiative__content"
          variants={contentColumn}
          initial="hidden"
          animate={revealed ? 'visible' : 'hidden'}
        >
          <div>
            <p className="bhk-about-initiative__label">
              <span className="bhk-about-initiative__label-line" aria-hidden="true" />
              <span>{BHK_ABOUT_INITIATIVE_LABEL}</span>
            </p>
            <h2 id="bhk-about-initiative-heading" className="bhk-about-initiative__title">
              About <span className="bhk-about-initiative__title-accent">2BHK Housing</span>
            </h2>
          </div>

          <div>
            <div className="bhk-about-initiative__title-rule" aria-hidden="true" />
            <p className="bhk-about-initiative__body">{BHK_ABOUT_INITIATIVE_BODY}</p>
          </div>
        </motion.div>

        <div className="bhk-about-initiative__visual">
          <div
            className="bhk-about-initiative__figure-wrap"
            style={{ '--bg-img': `url(${imageSrc})` }}
          >
            <motion.div
              className="bhk-about-initiative__figure-backdrop"
              aria-hidden="true"
              initial={backdropMotion.rest}
              animate={revealed ? backdropMotion.on : backdropMotion.rest}
            />
            <motion.div
              className="bhk-about-initiative__figure-crop"
              initial={imageMotion.rest}
              animate={revealed ? imageMotion.on : imageMotion.rest}
            >
              <img
                src={imageSrc}
                alt="Modern apartment-style housing and community spaces in Telangana"
                width={720}
                height={960}
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BHK_HOUSING_DEV_LEDE =
  'Building stronger communities through modern housing infrastructure and improved residential development across Telangana.';

const BHK_HOUSING_DEV_CARDS = {
  safe: {
    title: 'Safe Housing Infrastructure',
    body:
      'Modern and durable homes built with quality standards to ensure safety, security, and long-term comfort for families.',
  },
  community: {
    title: 'Community Living Spaces',
    body:
      'Creating connected neighborhoods that support healthier family environments and a strong sense of belonging.',
  },
  urban: {
    title: 'Urban Development',
    body:
      'Improving housing accessibility and promoting planned residential growth in urban and peri-urban areas.',
  },
  residential: {
    title: 'Residential Facilities',
    body:
      'Enhancing essential infrastructure like roads, water, sanitation, and electricity for better everyday living.',
  },
  stronger: {
    title: 'Stronger Communities',
    body:
      'Supporting long-term social stability, inclusion, and growth through people-centric housing initiatives.',
  },
};

function BhkHousingDevIcon({ name }) {
  const icons = {
    house: iconHouse,
    community: iconCommunity,
    building: iconBuilding,
    facilities: iconFacilities,
    people: iconPeople,
  };
  const src = icons[name] ?? iconHouse;
  return (
    <img
      src={src}
      alt=""
      width={40}
      height={40}
      style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
    />
  );
}

function BhkHousingDevDecoIcon({ name }) {
  const stroke = 'currentColor';
  const svgProps = { width: '100%', height: '100%', viewBox: '0 0 64 64', fill: 'none', 'aria-hidden': true };

  if (name === 'community') {
    return (
      <svg {...svgProps}>
        <path
          d="M16 48v-4a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v4"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="20" r="8" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M50 48v-4a8 8 0 0 0-4.5-7.2M14 48v-4a8 8 0 0 1 4.5-7.2"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="26" r="6" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="26" r="6" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === 'house') {
    return (
      <svg {...svgProps}>
        <path d="M8 32l24-20 24 20" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 26v26h32V26" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 52V36h12v16" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M44 18V8h6v15" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="46" r="4" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="48" r="4" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="50" r="3" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === 'urban') {
    return (
      <svg {...svgProps}>
        <path d="M16 56V16h32v40" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 56H8m40 0h8" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 56V40h16v16" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 24h4m8 0h4M24 32h4m8 0h4" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 16L32 8l16 8" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === 'facilities') {
    return (
      <svg {...svgProps}>
        <path
          d="M32 56c12 0 16-10 16-16 0-10-16-32-16-32S16 30 16 40c0 6 4 16 16 16z"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M32 48a8 8 0 0 1-6-3" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === 'people') {
    return (
      <svg {...svgProps}>
        <path d="M22 36a10 10 0 0 1 20 0v12" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="20" r="6" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 40a8 8 0 0 1 12-6v14" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="26" r="4" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 40a8 8 0 0 0-12-6v14" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="48" cy="26" r="4" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return null;
}

function TwoBhkHousingCommunitySection() {
  const { safe, community, urban, residential, stronger } = BHK_HOUSING_DEV_CARDS;
  const reduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : 60 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.15,
        ease: [0.22, 1, 0.36, 1],
        delay: custom * 0.24,
      },
    }),
    hover: {
      rotate: reduceMotion ? 0 : -2.5,
      y: reduceMotion ? 0 : -4,
      scale: reduceMotion ? 1 : 1.02,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section className="bhk-housing-dev" aria-labelledby="bhk-housing-dev-heading">
      <div className="bhk-housing-dev__inner">
        <div className="bhk-housing-dev__top">
          <header className="bhk-housing-dev__intro">
            <span className="bhk-housing-dev__accent-line" aria-hidden="true" />
            <h2 id="bhk-housing-dev-heading" className="bhk-housing-dev__title">
              Housing &{' '}
              <span className="bhk-housing-dev__title-accent">Community Development</span>
            </h2>
            <p className="bhk-housing-dev__lede">{BHK_HOUSING_DEV_LEDE}</p>
          </header>

          <motion.article
            className="bhk-housing-dev__card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <div className="bhk-housing-dev__card-icon" aria-hidden="true">
              <BhkHousingDevIcon name="community" />
            </div>
            <h3 className="bhk-housing-dev__card-title">{community.title}</h3>
            <p className="bhk-housing-dev__card-body">{community.body}</p>
            <div className="bhk-housing-dev__card-deco" aria-hidden="true">
              <BhkHousingDevDecoIcon name="community" />
            </div>
          </motion.article>

          <motion.article
            className="bhk-housing-dev__card bhk-housing-dev__card--top"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <div className="bhk-housing-dev__card-icon" aria-hidden="true">
              <BhkHousingDevIcon name="house" />
            </div>
            <h3 className="bhk-housing-dev__card-title">{safe.title}</h3>
            <p className="bhk-housing-dev__card-body">{safe.body}</p>
            <div className="bhk-housing-dev__card-deco bhk-housing-dev__card-deco--house" aria-hidden="true">
              <BhkHousingDevDecoIcon name="house" />
            </div>
          </motion.article>
        </div>

        <div className="bhk-housing-dev__bottom">
          <motion.article
            className="bhk-housing-dev__card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            <div className="bhk-housing-dev__card-icon" aria-hidden="true">
              <BhkHousingDevIcon name="building" />
            </div>
            <h3 className="bhk-housing-dev__card-title">{urban.title}</h3>
            <p className="bhk-housing-dev__card-body">{urban.body}</p>
            <div className="bhk-housing-dev__card-deco bhk-housing-dev__card-deco--urban" aria-hidden="true">
              <BhkHousingDevDecoIcon name="urban" />
            </div>
          </motion.article>
          <motion.article
            className="bhk-housing-dev__card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            <div className="bhk-housing-dev__card-icon" aria-hidden="true">
              <BhkHousingDevIcon name="facilities" />
            </div>
            <h3 className="bhk-housing-dev__card-title">{residential.title}</h3>
            <p className="bhk-housing-dev__card-body">{residential.body}</p>
            <div className="bhk-housing-dev__card-deco bhk-housing-dev__card-deco--facilities" aria-hidden="true">
              <BhkHousingDevDecoIcon name="facilities" />
            </div>
          </motion.article>
          <motion.article
            className="bhk-housing-dev__card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            custom={4}
          >
            <div className="bhk-housing-dev__card-icon" aria-hidden="true">
              <BhkHousingDevIcon name="people" />
            </div>
            <h3 className="bhk-housing-dev__card-title">{stronger.title}</h3>
            <p className="bhk-housing-dev__card-body">{stronger.body}</p>
            <div className="bhk-housing-dev__card-deco bhk-housing-dev__card-deco--people" aria-hidden="true">
              <BhkHousingDevDecoIcon name="people" />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

const BETTER_LIVING_FEATURES = [
  {
    id: 'secure',
    title: 'Secure Living',
    body: 'Providing safe and dignified homes for long-term family stability.'
  },
  {
    id: 'healthier',
    title: 'Healthier Environments',
    body: 'Improving living conditions through better housing infrastructure.'
  },
  {
    id: 'community',
    title: 'Community Growth',
    body: 'Supporting connected neighborhoods and stronger social development.'
  },
  {
    id: 'future',
    title: 'Future Opportunities',
    body: 'Helping families build a safer and more confident future.'
  }
];

const BETTER_LIVING_STATS = [
  {
    id: 'supported',
    number: '500+',
    title: 'Families Supported',
    body: 'Providing safe and dignified homes to families in need.'
  },
  {
    id: 'satisfaction',
    number: '98%',
    title: 'Community Satisfaction',
    body: 'Families satisfied with their homes and living conditions.'
  },
  {
    id: 'communities',
    number: '35+',
    title: 'Housing Communities',
    body: 'Developed across Telangana for stronger, better living.'
  }
];

function BetterLivingFeatureIcon({ name }) {
  const stroke = "currentColor";
  const props = { viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === 'secure') {
    return (
      <svg {...props}>
        <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
        <path d="M9 11l3-2 3 2v3c0 2-1.5 4-3 5-1.5-1-3-3-3-5v-3z" />
      </svg>
    );
  }
  if (name === 'healthier') {
    return (
      <svg {...props}>
        <path d="M12 15C6.5 10 4 7.5 4 5a4.5 4.5 0 0 1 8-2 4.5 4.5 0 0 1 8 2c0 2.5-2.5 5-8 10z" />
        <path d="M3 16h2c2 0 4 1.5 5 3l2 2 2-2c1-1.5 3-3 5-3h2" />
        <line x1="12" y1="4" x2="12" y2="8" />
        <line x1="10" y1="6" x2="14" y2="6" />
      </svg>
    );
  }
  if (name === 'community') {
    return (
      <svg {...props}>
        <circle cx="12" cy="7" r="3" />
        <path d="M12 13c-3.3 0-6 2-6 5v2h12v-2c0-3-2.7-5-6-5z" />
        <circle cx="5" cy="10" r="2.5" />
        <path d="M2 20v-1.5c0-2 1.5-3.5 3.5-3.5H7" />
        <circle cx="19" cy="10" r="2.5" />
        <path d="M22 20v-1.5c0-2-1.5-3.5-3.5-3.5H17" />
      </svg>
    );
  }
  if (name === 'future') {
    return (
      <svg {...props}>
        <circle cx="10" cy="10" r="2.5" />
        <path d="M10 15c-2.5 0-4.5 1.5-4.5 3.5v1.5h9v-1.5c0-2-2-3.5-4.5-3.5z" />
        <circle cx="16" cy="12" r="2" />
        <path d="M16 16c-1.5 0-3 1-3 2.5v1.5h6v-1.5c0-1.5-1.5-2.5-3-2.5z" />
        <circle cx="5" cy="13" r="1.5" />
        <path d="M5 17c-1 0-2 .8-2 2v1h4v-1c0-1.2-1-2-2-2z" />
        <polygon points="12 2 12.8 4 15 4.3 13.5 5.5 13.8 7.5 12 6.5 10.2 7.5 10.5 5.5 9 4.3 11.2 4" />
      </svg>
    );
  }
  return null;
}

function BetterLivingStatIcon({ name }) {
  const stroke = "currentColor";
  const props = { viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === 'supported') {
    return (
      <svg {...props}>
        <circle cx="10" cy="8" r="3.5" />
        <path d="M10 14c-3.5 0-6 2-6 5v1h12v-1c0-3-2.5-5-6-5z" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M16 13c1.5 0 3 1 3 2.5v2.5h2v-2.5c0-2.5-2-4.5-4-4.5" />
      </svg>
    );
  }
  if (name === 'satisfaction') {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="9" r="1.25" fill="currentColor" stroke="none" />
        <circle cx="15" cy="9" r="1.25" fill="currentColor" stroke="none" />
        <path d="M8 14s1.5 2.5 4 2.5 4-2.5 4-2.5" />
      </svg>
    );
  }
  if (name === 'communities') {
    return (
      <svg {...props}>
        <rect x="4" y="10" width="4" height="10" rx="1" />
        <rect x="10" y="4" width="5" height="16" rx="1" />
        <rect x="17" y="8" width="4" height="12" rx="1" />
        <line x1="6" y1="13" x2="6.01" y2="13" />
        <line x1="6" y1="16" x2="6.01" y2="16" />
        <line x1="12" y1="7" x2="13" y2="7" />
        <line x1="12" y1="10" x2="13" y2="10" />
        <line x1="12" y1="13" x2="13" y2="13" />
        <line x1="12" y1="16" x2="13" y2="16" />
        <line x1="19" y1="11" x2="19.01" y2="11" />
        <line x1="19" y1="14" x2="19.01" y2="14" />
      </svg>
    );
  }
  return null;
}

function TwoBhkBetterLivingSection() {
  const innerRef = useRef(null);
  const statsRef = useRef(null);
  const headerInView = useInView(innerRef, { once: true, amount: 'some', margin: '0px 0px -10% 0px' });
  const statsInView = useInView(statsRef, { once: true, amount: 'some' });
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.26 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] } }
  };

  const featureListVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0.06 : 0.2,
        delayChildren: 0.12,
      },
    },
  };

  const featureEase = [0.22, 1, 0.36, 1];
  const featureDuration = reduceMotion ? 0.35 : 1.2;

  const featureFromLeft = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: featureDuration } } }
    : {
        hidden: { opacity: 0, x: -56 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: featureDuration, ease: featureEase },
        },
      };

  const featureFromRight = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: featureDuration } } }
    : {
        hidden: { opacity: 0, x: 56 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: featureDuration, ease: featureEase },
        },
      };

  return (
    <section className="bhk-better-living" aria-label="Better Living for Families">
      <div ref={innerRef} className="bhk-better-living__inner">
        <motion.div 
          className="bhk-better-living__header"
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="bhk-better-living__ornament">
             <div className="bhk-better-living__ornament-dot" />
             <div className="bhk-better-living__ornament-line" />
             <div className="bhk-better-living__ornament-dot" />
          </motion.div>
          <motion.h2 variants={itemVariants} className="bhk-better-living__title">
            Better Living <span className="bhk-better-living__title-accent">for Families</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="bhk-better-living__lede">
            Creating safer and more stable living environments that support healthier families and stronger communities across Telangana.
          </motion.p>
        </motion.div>

        <motion.ul 
          className="bhk-better-living__features"
          variants={featureListVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          {BETTER_LIVING_FEATURES.map((feature, index) => (
            <motion.li
              key={feature.id}
              className="bhk-better-living__feature"
              variants={index < 2 ? featureFromLeft : featureFromRight}
            >
              <div className="bhk-better-living__feature-icon" aria-hidden="true">
                <BetterLivingFeatureIcon name={feature.id} />
              </div>
              <h3 className="bhk-better-living__feature-title">{feature.title}</h3>
              <p className="bhk-better-living__feature-body">{feature.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="bhk-better-living__stats-anchor">
        <div className="bhk-better-living__stats-bg" style={{ '--bhk-stats-bg': `url(${bhkStatsBg})` }} />
        <motion.div 
          ref={statsRef}
          className="bhk-better-living__stats-bar"
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          {BETTER_LIVING_STATS.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <motion.div className="bhk-better-living__stat" variants={itemVariants}>
                <div className="bhk-better-living__stat-icon-wrap" aria-hidden="true">
                  <BetterLivingStatIcon name={stat.id} />
                </div>
                <div className="bhk-better-living__stat-value">{stat.number}</div>
                <div className="bhk-better-living__stat-label">{stat.title}</div>
                <p className="bhk-better-living__stat-sub">{stat.body}</p>
              </motion.div>
              {index < BETTER_LIVING_STATS.length - 1 && (
                <div className="bhk-better-living__stat-sep" aria-hidden="true">
                  <div className="bhk-better-living__stat-sep-line" />
                  <div className="bhk-better-living__stat-sep-dot" />
                  <div className="bhk-better-living__stat-sep-line" />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const BRIEF_SCHEMES = {
  '2bhk-housing': {
    title: '2BHK Housing',
    subtitle: 'Safe and modern housing for stronger families across Telangana.',
    intro:
      'The 2BHK scheme aims to expand access to quality housing for those who need it most, as part of inclusive urban and rural development.',
  },
  'dalit-bandhu': {
    title: 'Dalit Bandhu',
    subtitle:
      'An empowerment programme supporting entrepreneurship and economic mobility among Dalit communities through targeted investment.',
    intro:
      'Dalit Bandhu is structured to unlock livelihood opportunities and asset creation at the household level, with a focus on long-term uplift.',
  },
};

const SCHEME_ANCHOR_IDS = new Set([
  'rythu-bandhu',
  'mission-bhagiratha',
  'kcr-kit',
  '2bhk-housing',
  'aasara-pensions',
  'dalit-bandhu',
]);

const BRIEF_LETTER_STAGGER = 0.028;
const BRIEF_LETTER_DURATION = 0.42;
const BRIEF_LETTER_EASE = [0.22, 1, 0.36, 1];
const BRIEF_LETTER_INITIAL_DELAY = 0.06;
/** Motion starts from south-west (left + down) per letter */
const BRIEF_SW_FROM = { opacity: 0, x: '-0.4em', y: '0.45em' };
const BRIEF_SW_TO = { opacity: 1, x: 0, y: 0 };

function BriefHeroAnimatedLetters({ text, globalBaseIndex, inView, reduceMotion, wrapperClassName, slowHero }) {
  const chars = [...text];
  const stagger = slowHero ? 0.045 : BRIEF_LETTER_STAGGER;
  const duration = slowHero ? 0.68 : BRIEF_LETTER_DURATION;
  const initialDelay = slowHero ? 0.1 : BRIEF_LETTER_INITIAL_DELAY;
  if (reduceMotion) {
    return (
      <span className={wrapperClassName} aria-hidden="true">
        {text}
      </span>
    );
  }
  return (
    <span className={wrapperClassName} aria-hidden="true">
      {chars.map((char, i) => (
        <motion.span
          key={`${globalBaseIndex + i}-${i}`}
          className="scheme-hero-char"
          initial={BRIEF_SW_FROM}
          animate={inView ? BRIEF_SW_TO : BRIEF_SW_FROM}
          transition={{
            delay: initialDelay + (globalBaseIndex + i) * stagger,
            duration,
            ease: BRIEF_LETTER_EASE,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

function BriefSchemeSection({ anchorId, scheme }) {
  const titleId = `scheme-title-${anchorId}`;
  const contentRef = useRef(null);
  const bhkPageEntryRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const briefHeroInView = useInView(contentRef, { once: true, amount: 0.38 });
  const bhkHeroInView = useInView(bhkPageEntryRef, {
    once: true,
    amount: 'some',
    margin: '0px 0px 12% 0px',
  });
  const is2bhkHero = anchorId === '2bhk-housing';
  const heroLettersInView = is2bhkHero ? bhkHeroInView : briefHeroInView;

  const titleLen = [...scheme.title].length;
  const subtitleBaseIndex = titleLen;

  const heroBlock = (
    <div
      ref={is2bhkHero ? undefined : contentRef}
      className={`scheme-hero-content${is2bhkHero ? ' scheme-hero-content--2bhk' : ''}`}
    >
      <div className="scheme-hero-label">{LABEL_TEXT}</div>
      <h1 id={titleId} className="scheme-hero-title">
        <span className="scheme-sr-only">{scheme.title}</span>
        <BriefHeroAnimatedLetters
          text={scheme.title}
          globalBaseIndex={0}
          inView={heroLettersInView}
          reduceMotion={reduceMotion}
          slowHero={is2bhkHero}
        />
      </h1>
      <p
        className={
          is2bhkHero ? 'scheme-hero-subtitle scheme-hero-subtitle--2bhk' : 'scheme-hero-subtitle'
        }
      >
        <span className="scheme-sr-only">{scheme.subtitle}</span>
        <BriefHeroAnimatedLetters
          text={scheme.subtitle}
          globalBaseIndex={subtitleBaseIndex}
          inView={heroLettersInView}
          reduceMotion={reduceMotion}
          slowHero={is2bhkHero}
        />
      </p>
    </div>
  );

  const hero2bhkStyle = is2bhkHero ? { '--2bhk-hero-bg': `url(${bhkHeroBg})` } : undefined;

  const heroShell = (
    <>
      {is2bhkHero ? <div className="scheme-hero--2bhk-overlay" aria-hidden="true" /> : null}
      {heroBlock}
    </>
  );

  const heroClassName = `scheme-hero${is2bhkHero ? ' scheme-hero--2bhk' : ''}`;

  return (
    <section
      id={anchorId}
      className={`schemes-hub-anchor scheme-page${is2bhkHero ? ' scheme-page--2bhk' : ''}`}
      aria-labelledby={titleId}
    >
      <div
        className={heroClassName}
        style={hero2bhkStyle}
        ref={is2bhkHero ? bhkPageEntryRef : undefined}
      >
        {heroShell}
      </div>
      {is2bhkHero ? <TwoBhkAboutInitiativeSection imageSrc={bhkAboutHero} /> : null}
      {is2bhkHero ? <TwoBhkHousingCommunitySection /> : null}
      {is2bhkHero ? <TwoBhkBetterLivingSection /> : null}
      {!is2bhkHero ? (
        <div className="scheme-body">
          <p className="scheme-intro">{scheme.intro}</p>
        </div>
      ) : null}
    </section>
  );
}

export function SchemesLegacyRedirect() {
  const { schemeSlug } = useParams();
  if (!schemeSlug || !SCHEME_ANCHOR_IDS.has(schemeSlug)) {
    return <Navigate to="/schemes" replace />;
  }
  return <Navigate to={`/schemes#${schemeSlug}`} replace />;
}

const SchemesHub = () => {
  return (
    <div className="schemes-hub">
      <section id="rythu-bandhu" className="schemes-hub-anchor" aria-label="Rythu Bandhu scheme">
        <RythuBandhu />
      </section>
      <section id="mission-bhagiratha" className="schemes-hub-anchor" aria-label="Mission Bhagiratha scheme">
        <MissionBhagiratha />
      </section>
      <section id="kcr-kit" className="schemes-hub-anchor" aria-label="KCR Kit scheme">
        <KCRKit />
      </section>
      <BriefSchemeSection
        key="2bhk-housing"
        anchorId="2bhk-housing"
        scheme={BRIEF_SCHEMES['2bhk-housing']}
      />
      <section id="aasara-pensions" className="schemes-hub-anchor" aria-label="Aasara Pension scheme">
        <AasaraPension />
      </section>
      <BriefSchemeSection
        key="dalit-bandhu"
        anchorId="dalit-bandhu"
        scheme={BRIEF_SCHEMES['dalit-bandhu']}
      />
    </div>
  );
};

export default SchemesHub;
