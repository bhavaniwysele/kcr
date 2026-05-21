import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import './TimelineSection.css';

import img1954 from '../assets/1954.jpg';
import img1970 from '../assets/Political Prelude.jpg';
import img1975 from '../assets/Marriage & Personal Life.jpg';
import img1985 from '../assets/overview_main2.jpg';
import img1987 from '../assets/Ministerial Debut.jpg';
import img1999 from '../assets/Deputy Speaker.jpg';
import img2001 from '../assets/Birth of TRS.jpg';
import img2004 from '../assets/Union Ministry.jpg';
import img2009 from '../assets/The Great Fast.webp';
import img2014 from '../assets/kcr The First CM.jpg';
import img2017 from '../assets/healthandwelfare.webp';
import img2019 from '../assets/Kaleshwaram Project.webp';
import img2022 from '../assets/National Vision.webp';

const AUTO_ADVANCE_MS = 3200;
const RESUME_AFTER_INTERACTION_MS = 7500;
const STRIP_VISIBLE = 3;

const TIMELINE_DATA = [
  {
    year: '1954',
    title: 'A Leader is Born',
    description:
      'Kalvakuntla Chandrashekar Rao was born on February 17 in Chintamadaka village, Telangana.',
    image: img1954,
  },
  {
    year: '1970',
    title: 'Political Prelude',
    description:
      'Began his political journey as a student leader in the Youth Congress during his college years.',
    image: img1970,
    imageCoverScale: 1.26,
  },
  {
    year: '1975',
    title: 'Marriage & Personal Life',
    description:
      'Married Smt. Shobha, starting a lifelong partnership that would support his political journey.',
    image: img1975,
  },
  {
    year: '1985',
    title: 'First MLA Victory',
    description:
      'Elected as MLA for the first time from Siddipet, marking the start of his legislative legacy.',
    image: img1985,
  },
  {
    year: '1987',
    title: 'Ministerial Debut',
    description:
      'Served as the Minister for Drought and Relief, gaining first-hand experience in public service.',
    image: img1987,
  },
  {
    year: '1999',
    title: 'Deputy Speaker',
    description: 'Appointed as the Deputy Speaker of the Andhra Pradesh Legislative Assembly.',
    image: img1999,
  },
  {
    year: '2001',
    title: 'Birth of TRS',
    description:
      'Resigned from TDP to form the Telangana Rashtra Samithi (TRS) to fight for a separate state.',
    image: img2001,
  },
  {
    year: '2004',
    title: 'Union Ministry',
    description: 'Became the Union Minister for Labour and Employment in the UPA government.',
    image: img2004,
  },
  {
    year: '2009',
    title: 'The Great Fast',
    description:
      'His fast-unto-death became the catalyst for the historic announcement of Telangana statehood.',
    image: img2009,
  },
  {
    year: '2014',
    title: 'The First CM',
    description: 'Sworn in as the first Chief Minister of the newly formed state of Telangana.',
    image: img2014,
  },
  {
    year: '2017',
    title: 'Welfare Revolution',
    description:
      'Launched the KCR Kit and Rythu Bandhu schemes, transforming rural and maternal healthcare.',
    image: img2017,
  },
  {
    year: '2019',
    title: 'Engineering Marvel',
    description:
      "Inaugurated the Kaleshwaram Project, the world's largest multi-stage lift irrigation system.",
    image: img2019,
  },
  {
    year: '2022',
    title: 'National Vision',
    description:
      'Transformed TRS into BRS (Bharat Rashtra Samithi) to take the Telangana model to the nation.',
    image: img2022,
  },
];

const layoutEase = [0.22, 1, 0.36, 1];
const layoutIdFor = (year, role) =>
  role === 'main' ? `tl-main-${year}` : `tl-thumb-${year}`;

const getUpcomingIndices = (activeIndex) => {
  const len = TIMELINE_DATA.length;
  const indices = [];
  for (let i = 1; i < len; i += 1) {
    indices.push((activeIndex + i) % len);
  }
  return indices;
};

const TimelineSection = () => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverPauseRef = useRef(false);
  const lastInteractionRef = useRef(0);

  const active = TIMELINE_DATA[activeIndex];
  const milestoneNumber = String(activeIndex + 1).padStart(2, '0');
  const leftThumbIndex = (activeIndex - 1 + TIMELINE_DATA.length) % TIMELINE_DATA.length;
  const stripIndices = getUpcomingIndices(activeIndex).slice(0, STRIP_VISIBLE);

  const markInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
  }, []);

  const selectIndex = useCallback(
    (index) => {
      if (index === activeIndex) return;
      markInteraction();
      setActiveIndex(index);
    },
    [activeIndex, markInteraction]
  );

  const autoplayTimerRef = useRef(null);
  const [progressDurationMs, setProgressDurationMs] = useState(AUTO_ADVANCE_MS);
  const [progressEpoch, setProgressEpoch] = useState(0);

  const clearAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current !== null) {
      window.clearTimeout(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  const getAutoplayDelay = useCallback(() => {
    const sinceInteraction = Date.now() - lastInteractionRef.current;
    const interactionRemainder = Math.max(0, RESUME_AFTER_INTERACTION_MS - sinceInteraction);
    const baseDelay = reduceMotion ? AUTO_ADVANCE_MS + 1200 : AUTO_ADVANCE_MS;
    return Math.max(baseDelay, interactionRemainder);
  }, [reduceMotion]);

  const scheduleAutoplay = useCallback(() => {
    clearAutoplayTimer();

    const tryAdvance = () => {
      autoplayTimerRef.current = null;
      if (hoverPauseRef.current) {
        autoplayTimerRef.current = window.setTimeout(tryAdvance, 200);
        return;
      }

      setActiveIndex((prev) => (prev + 1) % TIMELINE_DATA.length);
    };

    const delay = getAutoplayDelay();
    setProgressDurationMs(delay);
    autoplayTimerRef.current = window.setTimeout(tryAdvance, delay);
  }, [getAutoplayDelay, clearAutoplayTimer]);

  useEffect(() => {
    scheduleAutoplay();
    return clearAutoplayTimer;
  }, [activeIndex, scheduleAutoplay, clearAutoplayTimer]);

  useEffect(() => {
    const releaseHoverPause = () => {
      if (!hoverPauseRef.current) return;
      hoverPauseRef.current = false;
      setProgressEpoch((n) => n + 1);
      scheduleAutoplay();
    };

    window.addEventListener('blur', releaseHoverPause);
    document.documentElement.addEventListener('mouseleave', releaseHoverPause);
    return () => {
      window.removeEventListener('blur', releaseHoverPause);
      document.documentElement.removeEventListener('mouseleave', releaseHoverPause);
    };
  }, [scheduleAutoplay]);

  const morphTransition = reduceMotion
    ? { duration: 0.28 }
    : { layout: { type: 'spring', stiffness: 300, damping: 32, mass: 0.8 } };

  const slotLayoutTransition = reduceMotion
    ? { duration: 0.25 }
    : { layout: { type: 'spring', stiffness: 280, damping: 30 } };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0.2 }
        : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
      filter: reduceMotion ? 'none' : 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: layoutEase },
    },
  };

  const renderImageInner = (item) => (
    <img
      src={item.image}
      alt={item.title}
      draggable={false}
      className="cinematic-card-img"
      style={
        item.imageCoverScale
          ? {
              transform: `scale(${item.imageCoverScale})`,
              transformOrigin: 'center 22%',
            }
          : undefined
      }
    />
  );

  const handleThumbParallax = (e) => {
    if (reduceMotion) return;
    const frame = e.currentTarget.querySelector('.cinematic-card-frame');
    if (!frame) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    frame.style.setProperty('--parallax-x', `${x}px`);
    frame.style.setProperty('--parallax-y', `${y}px`);
  };

  const resetThumbParallax = (e) => {
    const frame = e.currentTarget.querySelector('.cinematic-card-frame');
    if (!frame) return;
    frame.style.setProperty('--parallax-x', '0px');
    frame.style.setProperty('--parallax-y', '0px');
  };

  const renderCard = (index, role, staggerOrder = 0) => {
    const item = TIMELINE_DATA[index];
    const isMain = role === 'main';

    const frameClass = isMain
      ? 'cinematic-card-frame cinematic-card-frame--main'
      : 'cinematic-card-frame cinematic-card-frame--thumb';

    const card = (
      <motion.div
        layoutId={layoutIdFor(item.year, role)}
        className={frameClass}
        transition={morphTransition}
        style={
          isMain
            ? { willChange: 'transform', flex: '1 1 auto', minHeight: 0, width: '100%' }
            : { willChange: 'transform' }
        }
        initial={isMain && !reduceMotion ? { opacity: 0.92, filter: 'blur(4px)' } : false}
        animate={
          isMain && !reduceMotion
            ? { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: layoutEase } }
            : {}
        }
      >
        {isMain && <div className="cinematic-feature-shine" aria-hidden="true" />}
        {renderImageInner(item)}
      </motion.div>
    );

    if (isMain) {
      return (
        <div className="editorial-main-slot" key={`main-slot-${item.year}`}>
          {card}
          <button
            type="button"
            className="cinematic-feature-advance"
            onClick={() => selectIndex((activeIndex + 1) % TIMELINE_DATA.length)}
            aria-label="Next milestone"
          >
            <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>
          <div className="exchange-progress" aria-hidden="true">
            <span
              key={`progress-${item.year}-${progressEpoch}`}
              className="exchange-progress-fill"
              style={{ animationDuration: `${progressDurationMs}ms` }}
            />
          </div>
        </div>
      );
    }

    return (
      <motion.div
        key={`${role}-${item.year}`}
        layout
        className={`editorial-thumb-slot editorial-thumb-slot--${role}`}
        transition={slotLayoutTransition}
        style={!reduceMotion ? { transitionDelay: `${staggerOrder * 0.04}s` } : undefined}
      >
        <motion.button
          type="button"
          className="exchange-card-btn"
          onClick={() => selectIndex(index)}
          onMouseMove={handleThumbParallax}
          onMouseLeave={resetThumbParallax}
          aria-label={`${item.year} — ${item.title}`}
          whileHover={
            reduceMotion
              ? {}
              : {
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 420, damping: 28 },
                }
          }
          whileTap={reduceMotion ? {} : { scale: 0.98 }}
        >
          {card}
        </motion.button>
      </motion.div>
    );
  };

  return (
    <section
      className="landing-timeline-section cinematic-timeline-root"
      id="timeline"
      style={{ '--auto-ms': `${AUTO_ADVANCE_MS}ms` }}
    >
      <div className="landing-timeline-container cinematic-timeline-inner">
        <div className="landing-timeline-header">
          <h4 className="subtitle">Milestones</h4>
          <h2 className="title">
            Telangana <span>Growth Timeline</span>
          </h2>
        </div>

        <LayoutGroup id="telangana-timeline-gallery">
          <div
            className="timeline-editorial-stage"
            onMouseEnter={() => {
              hoverPauseRef.current = true;
              clearAutoplayTimer();
            }}
            onMouseLeave={() => {
              hoverPauseRef.current = false;
              setProgressEpoch((n) => n + 1);
              scheduleAutoplay();
            }}
          >
            <div className="editorial-layout">
              <div className="editorial-thumb-left">
                {renderCard(leftThumbIndex, 'left')}
              </div>

              <div className="editorial-main-cell">
                {renderCard(activeIndex, 'main')}
              </div>

              <motion.div
                key={active.year}
                className="cinematic-copy"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span className="cinematic-index" variants={lineVariants}>
                  #{milestoneNumber}
                </motion.span>
                <motion.h3 className="cinematic-headline" variants={lineVariants}>
                  {active.title}
                </motion.h3>
                <motion.p className="cinematic-body-text" variants={lineVariants}>
                  {active.description}
                </motion.p>
                <motion.p className="cinematic-year-tag" variants={lineVariants}>
                  {active.year}
                </motion.p>
              </motion.div>

              <motion.div
                layout
                className="editorial-thumb-strip"
                transition={slotLayoutTransition}
                role="listbox"
                aria-label="Upcoming milestones"
              >
                {stripIndices.map((index, i) => renderCard(index, 'strip', i))}
              </motion.div>
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default TimelineSection;
