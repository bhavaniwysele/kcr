import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import './Timeline.css';

// Importing images for timeline milestones
import img1954 from '../../assets/1954.jpg';
import imgPrelude from '../../assets/Political Prelude.jpg';
import imgMarriage from '../../assets/Marriage & Personal Life.jpg';
import imgMLA from '../../assets/young kcr.webp';
import imgMinister from '../../assets/Ministerial Debut.jpg';
import imgSpeaker from '../../assets/Deputy Speaker.jpg';
import imgTRS from '../../assets/Birth of TRS.jpg';
import imgUnion from '../../assets/Union Ministry.jpg';
import imgFast from '../../assets/The Great Fast.webp';
import imgCM from '../../assets/kcr The First CM.jpg';
import imgWelfare from '../../assets/healthandwelfare.webp';
import imgEngineering from '../../assets/Kaleshwaram Project.webp';
import imgNational from '../../assets/National Vision.webp';

const timelineData = [
  {
    year: '1954',
    title: 'A Leader is Born',
    description:
      'February 17 — Chintamadaka. A child arrives in a village that would one day lend its name to a movement.',
    quote:
      'Before the microphones, before the marches — there was only soil, sky, and a name yet to be spoken aloud.',
    image: img1954,
  },
  {
    year: '1970',
    title: 'Political Prelude',
    description:
      'Student halls and Youth Congress — the first fire of public voice, sharpened on debate and dissent.',
    quote: 'They asked us to wait. We learned to speak while the room was still listening.',
    image: imgPrelude,
  },
  {
    year: '1975',
    title: 'Marriage & Personal Life',
    description:
      'Smt. Shobha — partnership forged in tradition, steadiness that would anchor decades of struggle.',
    quote: 'A home built in quiet becomes the fortress from which a people are served.',
    image: imgMarriage,
  },
  {
    year: '1985',
    title: 'First MLA Victory',
    description:
      'Siddipet sends him to the Assembly — the legislative chapter opens, measured in constituencies kept.',
    quote: 'Siddipet did not elect a man. It entrusted a promise written in ballot ink.',
    image: imgMLA,
  },
  {
    year: '1987',
    title: 'Ministerial Debut',
    description:
      'Minister for Drought and Relief — governance learned in fields cracked by sun and debt.',
    quote: 'Relief is not charity. It is the state remembering its duty to the hungry.',
    image: imgMinister,
  },
  {
    year: '1999',
    title: 'Deputy Speaker',
    description:
      'The Andhra Pradesh Assembly — order, procedure, and the weight of the chair behind him.',
    quote: 'In the chamber, every word must carry the weight of those who sent you there.',
    image: imgSpeaker,
  },
  {
    year: '2001',
    title: 'Birth of TRS',
    description:
      'Resignation from TDP. Telangana Rashtra Samithi — a separate flag raised for a separate dream.',
    quote: 'When the door closed on compromise, we opened a new one called Telangana.',
    image: imgTRS,
  },
  {
    year: '2004',
    title: 'Union Ministry',
    description:
      'Labour and Employment at the Centre — national corridors, state cause carried in diplomatic tone.',
    quote: 'Delhi hears many voices. Ours would not be lowered until the nation understood.',
    image: imgUnion,
  },
  {
    year: '2009',
    title: 'The Great Fast',
    description:
      'Fast-unto-death — body as argument, silence as thunder, statehood trembling on the edge of announcement.',
    quote: 'I will not eat until my people are heard. Hunger became our loudest speech.',
    image: imgFast,
  },
  {
    year: '2014',
    title: 'The First CM',
    description:
      'Sworn in as Chief Minister of Telangana — a map redrawn, a capital reborn, history divided into before and after.',
    quote: 'Today we are not a region asking. We are a state answering.',
    image: imgCM,
  },
  {
    year: '2017',
    title: 'Welfare Revolution',
    description:
      'KCR Kit, Rythu Bandhu — schemes written into soil and maternity wards across the newborn state.',
    quote: 'Welfare is not a slogan. It is grain in the field and breath in the nursery.',
    image: imgWelfare,
  },
  {
    year: '2019',
    title: 'Engineering Marvel',
    description:
      'Kaleshwaram — water lifted across stages, desert logic overturned by engineering will.',
    quote: 'Rivers do not climb mountains. We taught them how.',
    image: imgEngineering,
  },
  {
    year: '2022',
    title: 'National Vision',
    description:
      'TRS becomes BRS — the Telangana model steps beyond borders, seeking a nation-scale echo.',
    quote: 'What we built here was never meant to stay within these lines on the map.',
    image: imgNational,
  },
];

const cardEase = [0.22, 1, 0.36, 1];
const AUTO_SCROLL_MS = 2000;
const AUTO_PAUSE_AFTER_USER_MS = 8000;
const AUTO_SCROLL_ANIM_MS = 900;

// Position each card relative to the active one.
// offset 0 = center stage, +1/+2 = preview stack on the right, -1 = exiting left.
function getCardState(offset) {
  if (offset === 0) {
    return {
      x: '0%',
      y: '0%',
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: 'blur(0px)',
    };
  }
  if (offset === 1) {
    return {
      x: '86%',
      y: '-28%',
      scale: 0.52,
      opacity: 1,
      rotate: 6,
      filter: 'blur(0px)',
    };
  }
  if (offset === 2) {
    return {
      x: '92%',
      y: '36%',
      scale: 0.44,
      opacity: 0.9,
      rotate: 8,
      filter: 'blur(0px)',
    };
  }
  if (offset > 2) {
    return {
      x: '95%',
      y: '38%',
      scale: 0.36,
      opacity: 0,
      rotate: 10,
      filter: 'blur(6px)',
    };
  }
  if (offset === -1) {
    return {
      x: '-130%',
      y: '-4%',
      scale: 0.7,
      opacity: 0,
      rotate: -10,
      filter: 'blur(6px)',
    };
  }
  return {
    x: '-160%',
    y: '0%',
    scale: 0.5,
    opacity: 0,
    rotate: -12,
    filter: 'blur(10px)',
  };
}

const splitTitle = (title) => {
  const words = title.split(' ');
  if (words.length === 1) return { head: '', tail: words[0] };
  return {
    head: words.slice(0, -1).join(' '),
    tail: words[words.length - 1],
  };
};

const Timeline = () => {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const isAutoScrollingRef = useRef(false);
  const isInViewRef = useRef(false);
  const pauseAutoRef = useRef(false);
  const activeIndexRef = useRef(0);
  const autoPauseTimerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = timelineData.length;

  const pauseAutoScroll = useCallback((duration = AUTO_PAUSE_AFTER_USER_MS) => {
    pauseAutoRef.current = true;
    if (autoPauseTimerRef.current) clearTimeout(autoPauseTimerRef.current);
    autoPauseTimerRef.current = setTimeout(() => {
      pauseAutoRef.current = false;
      autoPauseTimerRef.current = null;
    }, duration);
  }, []);

  const scrollToChapter = useCallback(
    (index, smooth = true) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop;
      const sectionTop = scrollTop + rect.top;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const targetProgress = Math.min(1, Math.max(0, (index + 0.5) / total));
      window.scrollTo({
        top: sectionTop + targetProgress * scrollable,
        behavior: smooth ? 'smooth' : 'auto',
      });
    },
    [total]
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const updateInView = useCallback((latest) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inScrollRange = latest > 0.001 && latest < 0.999;
    // Sticky is active while the tall section spans the viewport
    const inStickyZone = rect.top <= 0 && rect.bottom >= window.innerHeight;
    isInViewRef.current = inScrollRange || inStickyZone;
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    updateInView(latest);

    if (isDraggingRef.current || isAutoScrollingRef.current) return;

    const next = Math.min(
      total - 1,
      Math.max(0, Math.floor(latest * total))
    );
    setActiveIndex((prev) => (prev !== next ? next : prev));
  });

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Auto-advance chapters while the section is in view
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const id = setInterval(() => {
      if (
        pauseAutoRef.current ||
        isDraggingRef.current ||
        isAutoScrollingRef.current ||
        !isInViewRef.current
      ) {
        return;
      }

      const next = (activeIndexRef.current + 1) % total;
      isAutoScrollingRef.current = true;
      setActiveIndex(next);
      scrollToChapter(next, true);

      setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, AUTO_SCROLL_ANIM_MS + 400);
    }, AUTO_SCROLL_MS);

    return () => clearInterval(id);
  }, [total, scrollToChapter]);

  // Seed in-view state on mount (scrollYProgress may not fire until scroll)
  useEffect(() => {
    const latest = scrollYProgress.get();
    updateInView(latest);
  }, [scrollYProgress, updateInView]);

  // Pause autoplay after manual scroll / touch inside the section
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onUserScroll = () => {
      if (isAutoScrollingRef.current) return;
      pauseAutoScroll();
    };

    el.addEventListener('wheel', onUserScroll, { passive: true });
    el.addEventListener('touchstart', onUserScroll, { passive: true });

    return () => {
      el.removeEventListener('wheel', onUserScroll);
      el.removeEventListener('touchstart', onUserScroll);
      if (autoPauseTimerRef.current) clearTimeout(autoPauseTimerRef.current);
    };
  }, [pauseAutoScroll]);

  const handleSliderChange = (e) => {
    const index = Number(e.target.value);
    setActiveIndex(index);
    scrollToChapter(index, false);
    pauseAutoScroll();
  };

  const handleSliderPointerDown = () => {
    isDraggingRef.current = true;
    pauseAutoScroll(AUTO_PAUSE_AFTER_USER_MS * 2);
  };

  const handleSliderRelease = () => {
    isDraggingRef.current = false;
  };

  const active = timelineData[activeIndex];
  const { head, tail } = splitTitle(active.title);
  const sliderFill = total > 1 ? (activeIndex / (total - 1)) * 100 : 0;

  return (
    <section
      ref={containerRef}
      className="journey-scroll"
      style={{ height: `${total * 65}vh` }}
      aria-label="The Journey timeline"
    >
      <div className="journey-sticky">
        <header className="journey-top">
          <div className="journey-brand">
            <span className="journey-brand-dot" aria-hidden="true" />
            The Journey
          </div>
        </header>

        <div className="journey-grid">
          <div className="journey-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="journey-content-inner"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.55, ease: cardEase }}
              >
                <span className="journey-chapter">
                  Chapter {String(activeIndex + 1).padStart(2, '0')} ·{' '}
                  {active.year}
                </span>
                <h2 className="journey-title">
                  {head ? <>{head} </> : null}
                  <em>{tail}</em>
                </h2>
                <p className="journey-desc">{active.description}</p>
                {active.quote ? (
                  <blockquote className="journey-quote">
                    <span className="journey-quote-mark" aria-hidden="true">
                      &ldquo;
                    </span>
                    <p>{active.quote}</p>
                    <footer>
                      <span className="journey-quote-line" aria-hidden="true" />
                      <cite>— recorded in spirit, {active.year}</cite>
                    </footer>
                  </blockquote>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="journey-stage" aria-hidden="true">
            <span className="journey-stage-ring journey-stage-ring--lg" />
            <span className="journey-stage-ring journey-stage-ring--sm" />
            {timelineData.map((item, i) => {
              const offset = i - activeIndex;
              return (
                <motion.article
                  key={item.year}
                  className="journey-card"
                  initial={false}
                  animate={getCardState(offset)}
                  transition={{ duration: 0.95, ease: cardEase }}
                  style={{ zIndex: 100 - Math.abs(offset) }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="journey-card-year">{item.year}</div>
                  <div className="journey-card-foot">
                    <span className="journey-card-title">{item.title}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <footer className="journey-bottom">
          <div
            className="journey-progress"
            role="group"
            aria-label="Chapter navigation"
          >
            <strong aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')}
            </strong>
            <input
              type="range"
              className="journey-slider"
              min={0}
              max={total - 1}
              step={1}
              value={activeIndex}
              onChange={handleSliderChange}
              onPointerDown={handleSliderPointerDown}
              onPointerUp={handleSliderRelease}
              onPointerCancel={handleSliderRelease}
              onBlur={handleSliderRelease}
              style={{ '--slider-fill': `${sliderFill}%` }}
              aria-label={`Chapter ${activeIndex + 1} of ${total}`}
              aria-valuemin={1}
              aria-valuemax={total}
              aria-valuenow={activeIndex + 1}
            />
            <span className="journey-progress-total">
              {String(total).padStart(2, '0')}
            </span>
          </div>
        </footer>

        <svg
          className="journey-wave"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,64 C240,120 480,16 720,40 C960,64 1200,112 1440,64 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Timeline;
