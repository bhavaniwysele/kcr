import React, { useEffect, useMemo, useRef, useState } from 'react';
import './VisionMission.css';
import welcomeImage from '../assets/kcr_vNm.png';
import priorityKcrImage from '../assets/vNm_kcr.jpg';

const VisionPoint = ({ index, activeIndex, children }) => {
  const isPassed = activeIndex >= 0 && index <= activeIndex;
  const isActive = activeIndex === index;

  return (
    <article
      className={`vm-vision-point${isActive ? ' is-active' : ''}${isPassed ? ' is-passed' : ''}`}
      data-point-index={index}
    >
      {children}
    </article>
  );
};

const VISION_POINT_COUNT = 3;
const VISION_STEP_MS = 980;
const VISION_START_DELAY_MS = 520;
const FOCUS_FLIP_COUNT = 3;
const FOCUS_FLIP_STEP_MS = 720;
const FOCUS_FLIP_START_MS = 400;

/** One-shot timeline: starts when showcase scrolls into view (not scroll-position-linked steps). */
const useVisionShowcaseSequence = (pointCount) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [sequenceStarted, setSequenceStarted] = useState(false);
  const [sequenceComplete, setSequenceComplete] = useState(false);
  const showcaseRef = useRef(null);
  const hasStartedRef = useRef(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const el = showcaseRef.current;
    if (!el) return undefined;

    const clearTimers = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };

    const schedule = (fn, ms) => {
      const id = setTimeout(fn, ms);
      timersRef.current.push(id);
    };

    const startSequence = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      setSequenceStarted(true);
      setActiveIndex(-1);
      clearTimers();

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        setActiveIndex(pointCount - 1);
        setSequenceComplete(true);
        return;
      }

      let step = -1;
      const advance = () => {
        step += 1;
        setActiveIndex(step);
        if (step < pointCount - 1) {
          schedule(advance, VISION_STEP_MS);
        } else {
          schedule(() => setSequenceComplete(true), VISION_STEP_MS + 1100);
        }
      };
      schedule(advance, VISION_START_DELAY_MS);
    };

    const tryStartIfVisible = () => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.88 && rect.bottom > 64;
      if (inView) startSequence();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startSequence();
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
    );

    observer.observe(el);
    requestAnimationFrame(tryStartIfVisible);

    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [pointCount]);

  return { activeIndex, sequenceStarted, sequenceComplete, showcaseRef };
};

/** Reveal focus cards with a 3D flip-in when section scrolls into view (front face only). */
const useFocusCardsScrollReveal = (cardCount) => {
  const [revealed, setRevealed] = useState(() => Array(cardCount).fill(false));
  const sectionRef = useRef(null);
  const hasStartedRef = useRef(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const clearTimers = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };

    const schedule = (fn, ms) => {
      timersRef.current.push(setTimeout(fn, ms));
    };

    const startFlips = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      clearTimers();

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        setRevealed(Array(cardCount).fill(true));
        return;
      }

      for (let i = 0; i < cardCount; i += 1) {
        schedule(() => {
          setRevealed((prev) => {
            if (prev[i]) return prev;
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, FOCUS_FLIP_START_MS + i * FOCUS_FLIP_STEP_MS);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          startFlips();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [cardCount]);

  return { revealed, sectionRef };
};

const parseStatValue = (value) => {
  const m = String(value).match(/^(\d+)(.*)$/);
  if (!m) return { target: 0, suffix: '' };
  return { target: Number(m[1]), suffix: m[2] };
};

const VisionMission = () => {
  const priorityDevelopmentSectors = [
    {
      id: 'farmer-support',
      title: 'Farmer Support',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l3 2-3 2-3-2 3-2z" />
          <path d="M9 10h6" />
          <path d="M9 13h6" />
          <path d="M8 21v-9h8v9" />
          <path d="M5 21h14" />
        </svg>
      ),
      body: 'Direct assistance, stable input support, and stronger irrigation and market linkages help farming households plan seasons with confidence. The focus is on raising productivity, reducing risk, and keeping rural incomes on a steady path.',
    },
    {
      id: 'industrial-growth',
      title: 'Industrial Growth',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" />
          <path d="M5 21V10h5v11" />
          <path d="M14 21V6h5v15" />
          <path d="M7 13h1M7 16h1M16 9h1M16 12h1M16 15h1" />
        </svg>
      ),
      body: 'MSMEs, investment-friendly clearances, and sector-specific clusters are used to widen quality jobs and deepen the industrial base. Growth is pursued so that enterprise and employment rise together across Telangana.',
    },
    {
      id: 'social-welfare',
      title: 'Social Welfare',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 20v-2a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18v2" />
          <circle cx="9" cy="8" r="3.25" />
          <path d="M20 20v-2a3.5 3.5 0 0 0-2.5-3.36" />
          <path d="M16 4.5a3.25 3.25 0 1 1 0 6.5" />
        </svg>
      ),
      body: 'Affordable healthcare, maternal and child health, pensions, and targeted inclusion programmes aim to protect the most vulnerable. Welfare is treated as a bridge to dignity and self-reliance, not dependency.',
    },
    {
      id: 'infrastructure-growth',
      title: 'Infrastructure Growth',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18" />
          <path d="M5 21l7-12 7 12" />
          <path d="M8 15h8" />
        </svg>
      ),
      body: 'Roads, water supply, power reliability, and urban connectivity are scaled to match population and economic needs. Solid infrastructure underpins daily life, logistics, and long-term competitiveness for the state.',
    },
    {
      id: 'education-empowerment',
      title: 'Education & Empowerment',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9l10-5 10 5-10 5-10-5z" />
          <path d="M6 11.5V16c0 1.8 2.7 3.2 6 3.2s6-1.4 6-3.2v-4.5" />
        </svg>
      ),
      body: 'Schools, digital access, skilling, and youth opportunity programmes are aligned so that talent is nurtured statewide. Education and empowerment are central to an equitable Bangaru Telangana.',
    },
    {
      id: 'transparent-governance',
      title: 'Transparent Governance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v6c0 4.2-2.8 7.7-7 9-4.2-1.3-7-4.8-7-9V6l7-3z" />
          <path d="M12 9v5" />
          <path d="M9.5 11.5H14.5" />
        </svg>
      ),
      body: 'Online services, clear procedures, and faster grievance redress build trust between citizens and government. Transparency and accountability are treated as core tools of good administration.',
    },
  ];

  const impactStats = [
    {
      value: '40+',
      label: 'Years of Public Service',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21V9"/><path d="M15 21V9"/><path d="M12 3v6"/></svg>
    },
    {
      value: '1000+',
      label: 'Development Initiatives',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20v-6"/><path d="M6 20V4"/><path d="M3 20h18"/></svg>
    },
    {
      value: '33',
      label: 'Districts Empowered',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    },
    {
      value: '1',
      label: 'Vision for Telangana',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    },
  ];

  const focusCards = [
    {
      id: 'story',
      title: 'Our Story',
      theme: 'color',
      desc: 'Led by K. Chandrashekar Rao (KCR), our journey began with the historic struggle for a separate Telangana state, culminating in its formation in 2014 and ushering in an era of unprecedented development.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h3M21 12h-3M12 3v3M12 21v-3M5.6 5.6l2.1 2.1M18.4 18.4l-2.1-2.1M18.4 5.6l-2.1 2.1M5.6 18.4l2.1-2.1"/></svg>
      )
    },
    {
      id: 'mission',
      title: 'Our Mission',
      theme: 'dark',
      desc: 'To foster inclusive growth through innovative policies in agriculture, industrialization, and welfare, ensuring equitable distribution of resources and opportunities for every citizen of Telangana.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      )
    },
    {
      id: 'vision',
      title: 'Our Vision',
      theme: 'color',
      desc: 'To build a self-reliant, progressive, and golden Telangana ("Bangaru Telangana") that stands as a model state in India, driven by sustainable development, technological advancement, and cultural pride.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      )
    },
  ];

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/8289978/pexels-photo-8289978.jpeg',
      title: 'Vision for Telangana',
      subtitle: 'Building a self-reliant state with strong rural and urban growth.',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/31090817/pexels-photo-31090817.jpeg',
      title: 'Industrial Growth',
      subtitle: 'Strengthening MSMEs, boosting investment confidence, and creating quality employment across Telangana.',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/11445244/pexels-photo-11445244.jpeg',
      title: 'Education & Growth',
      subtitle: 'Advancing quality education, digital access, and equal opportunities.',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [isDisplayedImageReady, setIsDisplayedImageReady] = useState(false);
  const slideRequestRef = useRef(0);
  const heroRef = useRef(null);
  const heroScrollLockRef = useRef(false);
  const autoplayPausedRef = useRef(false);
  const touchStartYRef = useRef(0);

  const observerRefs = useRef([]);
  const statsStripRef = useRef(null);
  const statsCountStartedRef = useRef(false);
  const statsRafRef = useRef(null);

  const statParsed = useMemo(
    () => impactStats.map((s) => parseStatValue(s.value)),
    // impactStats is static content for this page
    // eslint-disable-next-line react-hooks/exhaustive-deps -- stable stat values
    []
  );
  const [statCounts, setStatCounts] = useState(() => statParsed.map(() => 0));
  const [openPriorityId, setOpenPriorityId] = useState(null);
  const {
    activeIndex: visionActiveIndex,
    sequenceStarted: visionSequenceStarted,
    sequenceComplete: visionSequenceComplete,
    showcaseRef: visionShowcaseRef,
  } = useVisionShowcaseSequence(VISION_POINT_COUNT);
  const { revealed: focusRevealed, sectionRef: focusSectionRef } =
    useFocusCardsScrollReveal(FOCUS_FLIP_COUNT);

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  const bindStatsStripRef = (el) => {
    statsStripRef.current = el;
    addToRefs(el);
  };

  const bindFocusSectionRef = (el) => {
    focusSectionRef.current = el;
    addToRefs(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -100px 0px' }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = statsStripRef.current;
    if (!el) return undefined;

    const runCountUp = () => {
      if (statsCountStartedRef.current) return;
      statsCountStartedRef.current = true;
      const duration = 1600;
      const start = performance.now();
      const targets = statParsed;
      setStatCounts(targets.map(() => 0));

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) ** 3;
        setStatCounts(targets.map((p) => Math.round(p.target * eased)));
        if (t < 1) {
          statsRafRef.current = requestAnimationFrame(tick);
        } else {
          setStatCounts(targets.map((p) => p.target));
        }
      };
      statsRafRef.current = requestAnimationFrame(tick);
    };

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountUp();
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    countObserver.observe(el);
    return () => {
      countObserver.disconnect();
      if (statsRafRef.current) cancelAnimationFrame(statsRafRef.current);
      statsRafRef.current = null;
      statsCountStartedRef.current = false;
    };
  }, [statParsed]);

  const ensureImageReady = (url) => {
    if (loadedImages[url]) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = async () => {
        try {
          if (img.decode) await img.decode();
        } catch {
          // ignore decode failures (unsupported browsers, decode errors)
        }
        setLoadedImages((prev) => ({ ...prev, [url]: true }));
        resolve();
      };
      img.onerror = () => resolve();
    });
  };

  const pauseAutoplay = () => {
    autoplayPausedRef.current = true;
    window.setTimeout(() => {
      autoplayPausedRef.current = false;
    }, 9000);
  };

  const goToSlide = async (index, { fromUser = false } = {}) => {
    const nextIndex = (index + slides.length) % slides.length;
    if (nextIndex === activeSlide) return;

    if (fromUser) pauseAutoplay();

    const nextImage = slides[nextIndex].image;
    const requestId = slideRequestRef.current + 1;
    slideRequestRef.current = requestId;

    await ensureImageReady(nextImage);

    if (slideRequestRef.current === requestId) {
      setIsDisplayedImageReady(false);
      setPreviousSlide(activeSlide);
      setActiveSlide(nextIndex);
    }
  };

  useEffect(() => {
    if (!isDisplayedImageReady || previousSlide === null) return undefined;
    const clearPrevious = setTimeout(() => setPreviousSlide(null), 1500);
    return () => clearTimeout(clearPrevious);
  }, [isDisplayedImageReady, previousSlide]);

  useEffect(() => {
    ensureImageReady(slides[0].image).then(() => setIsHeroReady(true));
    slides.forEach((slide) => {
      if (!loadedImages[slide.image]) ensureImageReady(slide.image);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const url = slides[activeSlide].image;
    if (loadedImages[url]) {
      setIsDisplayedImageReady(true);
    }
  }, [activeSlide, loadedImages]);

  useEffect(() => {
    if (!isHeroReady) return undefined;
    const intervalId = setInterval(() => {
      if (autoplayPausedRef.current) return;
      goToSlide(activeSlide + 1);
    }, 5200);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide, isHeroReady]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || !isHeroReady) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const COOLDOWN_MS = 850;
    const WHEEL_THRESHOLD = 28;

    const isHeroScrollZone = () => {
      const rect = hero.getBoundingClientRect();
      return rect.top <= 8 && rect.bottom > window.innerHeight * 0.5;
    };

    const lockScroll = () => {
      heroScrollLockRef.current = true;
      window.setTimeout(() => {
        heroScrollLockRef.current = false;
      }, COOLDOWN_MS);
    };

    const onWheel = (event) => {
      if (!isHeroScrollZone()) return;

      const { deltaY } = event;
      if (Math.abs(deltaY) < WHEEL_THRESHOLD) return;

      if (heroScrollLockRef.current) {
        event.preventDefault();
        return;
      }

      const scrollingDown = deltaY > 0;

      if (scrollingDown && activeSlide < slides.length - 1) {
        event.preventDefault();
        lockScroll();
        goToSlide(activeSlide + 1, { fromUser: true });
        return;
      }

      if (!scrollingDown && activeSlide > 0) {
        event.preventDefault();
        lockScroll();
        goToSlide(activeSlide - 1, { fromUser: true });
      }
    };

    const onTouchStart = (event) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? 0;
    };

    const onTouchEnd = (event) => {
      if (!isHeroScrollZone()) return;
      const endY = event.changedTouches[0]?.clientY ?? 0;
      const delta = touchStartYRef.current - endY;
      if (Math.abs(delta) < 48 || heroScrollLockRef.current) return;

      if (delta > 0 && activeSlide < slides.length - 1) {
        lockScroll();
        goToSlide(activeSlide + 1, { fromUser: true });
      } else if (delta < 0 && activeSlide > 0) {
        lockScroll();
        goToSlide(activeSlide - 1, { fromUser: true });
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    hero.addEventListener('touchstart', onTouchStart, { passive: true });
    hero.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      hero.removeEventListener('touchstart', onTouchStart);
      hero.removeEventListener('touchend', onTouchEnd);
    };
  }, [activeSlide, isHeroReady]);

  return (
    <div className="vision-mission-page">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`vision-mission-hero ${isHeroReady ? 'is-ready' : 'is-loading'}`}
        aria-roledescription="carousel"
        aria-label="Vision and mission highlights"
      >
        {previousSlide !== null && (
          <img
            key={`prev-${slides[previousSlide].id}`}
            src={slides[previousSlide].image}
            alt=""
            aria-hidden="true"
            className="vision-hero-bg-image vision-hero-bg-image-exit"
          />
        )}
        <img
          key={slides[activeSlide].id}
          src={slides[activeSlide].image}
          alt={slides[activeSlide].title}
          className={`vision-hero-bg-image ${isDisplayedImageReady ? 'is-visible' : 'is-blurred'}`}
          onLoad={() => setIsDisplayedImageReady(true)}
        />

        <div className={`vision-hero-content ${isDisplayedImageReady ? 'is-visible' : 'is-hidden'} ${previousSlide === null ? 'is-initial' : 'is-subsequent'}`}>
          <h1 key={`hero-title-${slides[activeSlide].id}`} className="hero-title">{slides[activeSlide].title}</h1>
          <div key={`hero-subtitle-${slides[activeSlide].id}`} className="vm-hero-subtitle-row">
            <span className="vm-hero-subtitle-accent" aria-hidden="true" />
            <p className="vm-hero-subtitle">{slides[activeSlide].subtitle}</p>
          </div>
        </div>

        <div className="vision-hero-dots" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              className={`vision-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index, { fromUser: true })}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === activeSlide}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="vm-welcome-section" ref={addToRefs}>
        <div className="vm-welcome-inner">
          <div className="vm-welcome-content anim-fade-up">
            <p className="vm-welcome-eyebrow">Our Commitment</p>
            <h2>Our <span>Vision</span></h2>
            <p className="vm-welcome-lead">
              Under KCR&apos;s leadership, Telangana has advanced through innovation, welfare,
              and infrastructure-led growth. From farmer support and industrial expansion to
              better education and healthcare, the vision of Bangaru Telangana focuses on
              inclusive progress and measurable outcomes for every community.
            </p>
          </div>

          <div ref={visionShowcaseRef}
            className={`vm-vision-showcase${visionSequenceStarted ? ' is-sequence-started' : ''}${visionSequenceComplete ? ' is-sequence-complete' : ''}`}
          >
            <div className="vm-vision-column vm-vision-column-left">
              <VisionPoint index={0} activeIndex={visionActiveIndex}>
                <div className="vm-vision-point-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8 8h8" /><path d="M8 11h8" /><path d="M8 14h5.5l-3.5 5" /><path d="M10 14c4.5 0 4.5-6 0-6" /></svg>
                </div>
                <div className="vm-vision-point-body">
                  <h3>Leadership With Purpose</h3>
                  <p>Focused on building a stronger, inclusive, and future-ready Telangana for every citizen.</p>
                </div>
              </VisionPoint>

              <VisionPoint index={1} activeIndex={visionActiveIndex}>
                <div className="vm-vision-point-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M9 21v-6h6v6"/></svg>
                </div>
                <div className="vm-vision-point-body">
                  <h3>People-Centric Governance</h3>
                  <p>Delivering welfare, development, and transparent governance that directly impacts lives.</p>
                </div>
              </VisionPoint>

              <VisionPoint index={2} activeIndex={visionActiveIndex}>
                <div className="vm-vision-point-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 20h14" /><path d="M5 15l5-5 4 4 5-8" /><path d="M15 6h4v4" /></svg>
                </div>
                <div className="vm-vision-point-body">
                  <h3>Vision Backed By Progress</h3>
                  <p>Transforming ideas into measurable growth through long-term planning and execution.</p>
                </div>
              </VisionPoint>
            </div>

            <article className="vm-vision-center-card">
              <div className="vm-vision-center-media">
                <img src={welcomeImage} alt="KCR vision and mission" className="vm-welcome-image" />
                <button type="button" className="vm-vision-play-btn" aria-label="Play vision highlight">
                  <span>▶</span>
                </button>
              </div>
              <div className="vm-vision-center-content">
                <h3>Building Bangaru Telangana</h3>
                <h4>Through Vision, Commitment & Progressive Leadership</h4>
                <p>A journey driven by innovation, welfare, infrastructure, and opportunities that empower every community across Telangana.</p>
              </div>
            </article>

            <div className="vm-vision-column vm-vision-column-right">
              <VisionPoint index={0} activeIndex={visionActiveIndex}>
                <div className="vm-vision-point-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="2.5" /><path d="M17 20c0-2.8-2.2-5-5-5s-5 2.2-5 5" /><path d="M21 18c0-2.2-1.8-4-4-4" /><path d="M3 18c0-2.2 1.8-4 4-4" /><circle cx="18" cy="11" r="2" /><circle cx="6" cy="11" r="2" /></svg>
                </div>
                <div className="vm-vision-point-body">
                  <h3>Empowering Every Community</h3>
                  <p>Ensuring equal opportunities, dignity, and support for people across rural and urban Telangana.</p>
                </div>
              </VisionPoint>

              <VisionPoint index={1} activeIndex={visionActiveIndex}>
                <div className="vm-vision-point-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 0 8.38A7 7 0 0 1 11 20Z" /><path d="M11 20v-8" /></svg>
                </div>
                <div className="vm-vision-point-body">
                  <h3>Driving Sustainable Growth</h3>
                  <p>Balancing industrial progress, social welfare, and environmental responsibility for future generations.</p>
                </div>
              </VisionPoint>

              <VisionPoint index={2} activeIndex={visionActiveIndex}>
                <div className="vm-vision-point-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.2-2.8 7.7-7 9-4.2-1.3-7-4.8-7-9V6l7-3z"/><path d="M9.5 12.5l1.8 1.8 3.2-3.2"/></svg>
                </div>
                <div className="vm-vision-point-body">
                  <h3>A Stronger Telangana For Tomorrow</h3>
                  <p>Creating a state that stands as a model of development, resilience, and cultural pride.</p>
                </div>
              </VisionPoint>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="vm-stats-strip" ref={bindStatsStripRef}>
        <div className="vm-stats-grid">
          {impactStats.map((stat, index) => (
            <article key={stat.label} className="vm-stat-card anim-fade-up" style={{transitionDelay: `${index * 0.2}s`}}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="vm-stat-content">
                <h3>
                  {statCounts[index]}
                  {statParsed[index].suffix}
                </h3>
                <p>{stat.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3 Column Focus Section — scroll flip-in reveal */}
      <section className="vision-focus-section" ref={bindFocusSectionRef}>
        <div className="vision-focus-container">
          {focusCards.map((card, index) => (
            <div key={card.id} className="vision-focus-wrapper">
              <div
                className={`vision-focus-reveal${focusRevealed[index] ? ' is-revealed' : ''}`}
                style={{ '--reveal-delay': `${index * 0.14}s` }}
              >
                <article className={`vision-focus-card ${card.theme}`}>
                  <div className="vision-focus-icon" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Priority Development Sectors — intro left, accordion right */}
      <section className="vm-services-section" ref={addToRefs}>
        <div className="vm-services-inner">
          <div className="vm-priority-layout">
            <header className="vm-priority-intro anim-fade-up">
              <p className="vm-priority-eyebrow">Development priorities</p>
              <h2>Priority Development Sectors</h2>
              <figure className="vm-priority-intro-media">
                <img
                  src={priorityKcrImage}
                  alt="K. Chandrashekar Rao addressing the media"
                  loading="lazy"
                />
              </figure>
              <div className="vm-priority-intro-row">
                <span className="vm-priority-intro-accent" aria-hidden="true" />
                <p className="vm-priority-intro-text">
                  Focused policy pillars for inclusive growth, stronger public systems, and
                  measurable progress across Telangana. Select a sector to read more.
                </p>
              </div>
            </header>

            <div className="vm-priority-list-shell">
              <div className="vm-priority-accordion anim-fade-up">
            {priorityDevelopmentSectors.map((sector) => {
              const isOpen = openPriorityId === sector.id;
              const panelId = `vm-priority-panel-${sector.id}`;
              return (
                <div key={sector.id} className={`vm-priority-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="vm-priority-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    id={`vm-priority-trigger-${sector.id}`}
                    onClick={() => setOpenPriorityId(isOpen ? null : sector.id)}
                  >
                    <span className="vm-priority-icon-wrap" aria-hidden="true">
                      <span className="vm-priority-icon">{sector.icon}</span>
                    </span>
                    <span className="vm-priority-trigger-title">{sector.title}</span>
                    <span className="vm-priority-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="vm-priority-arrow-icon">
                        <path d="M5 12h12M13 8l5 4-5 4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={`vm-priority-trigger-${sector.id}`}
                    className="vm-priority-panel"
                    aria-hidden={!isOpen}
                  >
                    <div className="vm-priority-panel-inner">
                      <p className="vm-priority-body">{sector.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
