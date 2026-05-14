import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion as Motion, useReducedMotion, useInView } from 'framer-motion';
import './KCRKit.css';
import kcrKitLogo from '../../assets/kcr_kit_logo.png';
import healthWomenImg from '../../assets/healthNwomen2.png';
import healthWelfareImg from '../../assets/healthandwelfare.webp';
import welfareSchemesImg from '../../assets/welfareschemes.jpg';

const LABEL_TEXT = 'Government scheme';
const HERO_TITLE = 'KCR Kit';
const HERO_SUBTITLE =
  'Supporting mothers and newborns through healthcare assistance, nutrition support across Telangana.';

const KIT_UPDATES = [
  {
    date: 'Published on 6 May 2025',
    title: 'Strengthening Aarogya Sri Health Care',
    desc: 'Expanded financial health support and institutional care access for vulnerable families.',
  },
  {
    date: 'Published on 5 May 2025',
    title: 'Expansion of Basti Dawakhanas',
    desc: 'Neighborhood clinics continue to improve doorstep healthcare delivery across Telangana.',
  },
  {
    date: 'Published on 3 May 2025',
    title: 'Kalyana Lakshmi & Shaadi Mubarak',
    desc: 'Welfare support for eligible beneficiaries helps reduce financial burden on families.',
  },
  {
    date: 'Published on 24 April 2025',
    title: 'Pensions for a Dignified Life',
    desc: 'Monthly pensions continue to support senior citizens, widows, and differently abled beneficiaries.',
  },
  {
    date: 'Published on 18 April 2025',
    title: 'Maternal Nutrition Reinforcement',
    desc: 'Additional nutrition assistance for pregnant women and new mothers strengthens household health outcomes.',
  },
];

const INITIATIVE_SLIDES = [
  {
    num: '01',
    title: 'Nutrition Support',
    desc: 'Supporting healthier pregnancies through nutrition-focused welfare assistance, counselling, and regular maternal wellness checkups across Telangana.',
    icon: 'nutrition',
  },
  {
    num: '02',
    title: 'Safe Deliveries',
    desc: 'Encouraging institutional childbirth with improved healthcare accessibility, timely referrals, and safer medical supervision for mothers and newborns.',
    icon: 'delivery',
  },
  {
    num: '03',
    title: 'Mother Care',
    desc: 'Providing healthcare support and wellness assistance for expecting mothers through antenatal monitoring, awareness sessions, and follow-up care.',
    icon: 'mother',
  },
  {
    num: '04',
    title: 'Newborn Essentials',
    desc: 'Helping families with essential newborn care and welfare support, including infant hygiene guidance and early postnatal assistance.',
    icon: 'newborn',
  },
  {
    num: '05',
    title: 'Healthier Families',
    desc: 'Strengthening family well-being through mother and child healthcare initiatives that build healthier homes and long-term community resilience.',
    icon: 'family',
  },
];

const InitiativeIcon = ({ kind }) => {
  switch (kind) {
    case 'nutrition':
      return <span aria-hidden="true">🍎</span>;
    case 'delivery':
      return <span aria-hidden="true">🏥</span>;
    case 'mother':
      return <span aria-hidden="true">🤰</span>;
    case 'newborn':
      return <span aria-hidden="true">🍼</span>;
    case 'family':
      return <span aria-hidden="true">👨‍👩‍👧</span>;
    default:
      return <span aria-hidden="true">★</span>;
  }
};

const INITIATIVE_SLIDE_COUNT = INITIATIVE_SLIDES.length;
/** Three copies: start in the middle, jump invisibly at loop edges for infinite scroll. */
const INITIATIVE_CAROUSEL_SLIDES = [
  ...INITIATIVE_SLIDES,
  ...INITIATIVE_SLIDES,
  ...INITIATIVE_SLIDES,
];
const INITIATIVE_CAROUSEL_START = INITIATIVE_SLIDE_COUNT;
/** First offset into the third copy; after animating here, snap back to `START` (infinite loop). */
const INITIATIVE_CAROUSEL_LOOP = INITIATIVE_CAROUSEL_START + INITIATIVE_SLIDE_COUNT;

const INIT_CAROUSEL = {
  ease: [0.42, 0, 0.58, 1],
  duration: 0.55,
  autoplayMs: 6500,
};

/** Hero intro: soft deceleration, overlapping letter motion reads as one smooth wave. */
const KIT_HERO_EASE = [0.33, 1, 0.68, 1];
const KIT_HERO_LOGO_DURATION = 1.08;
const KIT_HERO_TITLE_DELAY_CHILDREN = 0.36;
const KIT_HERO_TITLE_STAGGER = 0.022;
const KIT_HERO_TITLE_LETTER_DURATION = 0.58;
const KIT_HERO_SUBTITLE_GAP_AFTER_TITLE = 0.08;
const KIT_HERO_SUBTITLE_STAGGER = 0.0075;
const KIT_HERO_SUBTITLE_LETTER_DURATION = 0.48;

const kitHeroTitleLetterContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: KIT_HERO_TITLE_STAGGER,
      delayChildren: KIT_HERO_TITLE_DELAY_CHILDREN,
    },
  },
};

const kitHeroTitleLetter = {
  hidden: { opacity: 0, y: '0.06em' },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: KIT_HERO_TITLE_LETTER_DURATION, ease: KIT_HERO_EASE },
  },
};

const kitHeroSubtitleLetter = {
  hidden: { opacity: 0, y: '0.045em' },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: KIT_HERO_SUBTITLE_LETTER_DURATION,
      ease: KIT_HERO_EASE,
      delay:
        KIT_HERO_TITLE_DELAY_CHILDREN +
        [...HERO_TITLE].length * KIT_HERO_TITLE_STAGGER +
        KIT_HERO_SUBTITLE_GAP_AFTER_TITLE +
        i * KIT_HERO_SUBTITLE_STAGGER,
    },
  }),
};

const KitHeroSubtitleLetters = ({ text, reduceMotion, play }) => {
  if (reduceMotion) {
    return text;
  }
  const segments = text.split(/(\s+)/);
  let letterIndex = 0;
  return (
    <>
      {segments.map((segment, si) => {
        if (/^\s+$/.test(segment)) {
          return <span key={`kit-sub-sp-${si}`}>{segment}</span>;
        }
        return (
          <span key={`kit-sub-w-${si}`} className="kit-hero-subtitle-word">
            {[...segment].map((ch, ci) => {
              const i = letterIndex;
              letterIndex += 1;
              return (
                <Motion.span
                  key={`kit-sub-c-${si}-${ci}`}
                  className="kit-hero-subtitle-char"
                  custom={i}
                  variants={kitHeroSubtitleLetter}
                  initial="hidden"
                  animate={play ? 'show' : 'hidden'}
                >
                  {ch}
                </Motion.span>
              );
            })}
          </span>
        );
      })}
    </>
  );
};

const VISION_SLIDES = [
  {
    id: 'telangana',
    title: 'Healthier Telangana',
    desc: 'Building stronger communities through improved maternal and child healthcare.',
    image: healthWomenImg,
    imageAlt: 'Healthcare support for women and families in Telangana',
  },
  {
    id: 'generations',
    title: 'Future Generations',
    desc: 'Creating a healthier and more secure future for newborns and families.',
    image: healthWelfareImg,
    imageAlt: 'Public health and welfare services supporting families',
  },
  {
    id: 'communities',
    title: 'Empowered Communities',
    desc: 'Strengthening public welfare and supporting long-term family well-being.',
    image: welfareSchemesImg,
    imageAlt: 'Welfare schemes strengthening communities across Telangana',
  },
];

const KCRKit = () => {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.28 });
  const listItems = KIT_UPDATES.slice(1);
  const viewportRef = useRef(null);
  const [carouselOffset, setCarouselOffset] = useState(INITIATIVE_CAROUSEL_START);
  const [stepPx, setStepPx] = useState(0);
  const [instantMove, setInstantMove] = useState(false);
  const carouselOffsetRef = useRef(INITIATIVE_CAROUSEL_START);
  carouselOffsetRef.current = carouselOffset;

  useEffect(() => {
    const grid = viewportRef.current;
    if (!grid) return;

    const measure = () => {
      const track = grid.querySelector('.kit-initiatives-track');
      const w = grid.getBoundingClientRect().width;
      const gapRaw = track ? getComputedStyle(track).gap : '14px';
      const gap = Number.parseFloat(gapRaw) || 14;
      const cardW = Math.max(0, (w - 2 * gap) / 3);
      grid.style.setProperty('--kit-card-basis', `${cardW}px`);
      setStepPx(cardW + gap);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (carouselOffset <= INITIATIVE_CAROUSEL_LOOP) return undefined;
    setInstantMove(true);
    setCarouselOffset(
      INITIATIVE_CAROUSEL_START + ((carouselOffset - INITIATIVE_CAROUSEL_START) % INITIATIVE_SLIDE_COUNT)
    );
    return undefined;
  }, [carouselOffset]);

  useEffect(() => {
    if (!instantMove) return;
    const id = requestAnimationFrame(() => setInstantMove(false));
    return () => cancelAnimationFrame(id);
  }, [instantMove]);

  const handleInitiativeTrackAnimationComplete = useCallback(() => {
    if (reduceMotion) return;
    if (carouselOffsetRef.current !== INITIATIVE_CAROUSEL_LOOP) return;
    setInstantMove(true);
    setCarouselOffset(INITIATIVE_CAROUSEL_START);
  }, [reduceMotion]);

  const goNext = useCallback(() => {
    if (reduceMotion) {
      setCarouselOffset(
        (o) =>
          INITIATIVE_CAROUSEL_START +
          ((o - INITIATIVE_CAROUSEL_START + 1) % INITIATIVE_SLIDE_COUNT)
      );
      return;
    }
    setCarouselOffset((o) => Math.min(o + 1, INITIATIVE_CAROUSEL_LOOP));
  }, [reduceMotion]);

  const goPrev = useCallback(() => {
    if (reduceMotion) {
      setCarouselOffset(
        (o) =>
          INITIATIVE_CAROUSEL_START +
          ((o - INITIATIVE_CAROUSEL_START - 1 + INITIATIVE_SLIDE_COUNT) % INITIATIVE_SLIDE_COUNT)
      );
      return;
    }
    setCarouselOffset((o) => {
      if (o === INITIATIVE_CAROUSEL_START) {
        setInstantMove(true);
        return INITIATIVE_CAROUSEL_LOOP - 1;
      }
      return o - 1;
    });
  }, [reduceMotion]);

  useEffect(() => {
    const intervalId = setInterval(goNext, INIT_CAROUSEL.autoplayMs);
    return () => clearInterval(intervalId);
  }, [goNext]);

  return (
    <div className="kit-page">
      <section ref={heroRef} className="kit-hero" aria-labelledby="kit-hero-title">
        <div className="kit-hero-media" aria-hidden="true" />
        <div className="kit-hero-overlay" />

        <div className="kit-hero-content">
          <div className="kit-hero-heading-row">
            {reduceMotion ? (
              <img
                className="kit-hero-logo"
                src={kcrKitLogo}
                alt="KCR Kit programme logo"
                draggable={false}
              />
            ) : (
              <Motion.img
                className="kit-hero-logo"
                src={kcrKitLogo}
                alt="KCR Kit programme logo"
                initial={{ x: '-125%', rotate: -360, opacity: 0 }}
                animate={
                  heroInView
                    ? { x: 0, rotate: 0, opacity: 1 }
                    : { x: '-125%', rotate: -360, opacity: 0 }
                }
                transition={{
                  duration: heroInView ? KIT_HERO_LOGO_DURATION : 0,
                  ease: KIT_HERO_EASE,
                }}
                draggable={false}
              />
            )}

            <div className="kit-hero-heading-text">
              <span className="kit-hero-label">{LABEL_TEXT}</span>

              <h1 id="kit-hero-title" className="kit-hero-title">
                {reduceMotion ? (
                  HERO_TITLE
                ) : (
                  <Motion.span
                    className="kit-hero-title-chars"
                    variants={kitHeroTitleLetterContainer}
                    initial="hidden"
                    animate={heroInView ? 'show' : 'hidden'}
                  >
                    {[...HERO_TITLE].map((ch, i) => (
                      <Motion.span key={`kit-title-${i}`} className="kit-hero-title-char" variants={kitHeroTitleLetter}>
                        {ch === ' ' ? '\u00a0' : ch}
                      </Motion.span>
                    ))}
                  </Motion.span>
                )}
              </h1>
            </div>
          </div>

          <p className="kit-hero-subtitle">
            <KitHeroSubtitleLetters text={HERO_SUBTITLE} reduceMotion={reduceMotion} play={heroInView} />
          </p>
        </div>
      </section>

      <section className="kit-initiatives" aria-labelledby="kit-initiatives-title">
        <div className="kit-initiatives-shell">
          <div className="kit-initiatives-copy">
            <span className="kit-initiatives-label">Recent Initiatives</span>
            <h2 id="kit-initiatives-title" className="kit-initiatives-title">
              Support for{' '}
              <span className="kit-initiatives-title-nowrap">Mothers & Newborns</span>
            </h2>
            <p className="kit-initiatives-text">
              Empowering mothers and ensuring a healthy start in life for every newborn through quality healthcare,
              nutrition and financial support.
            </p>
            <p className="kit-initiatives-text">
              These initiatives reflect our commitment to building a stronger, healthier future for Telangana.
            </p>
          </div>

          <div className="kit-initiatives-nav-wrap">
            <div className="kit-initiatives-nav" aria-label="Slide navigation">
              <button type="button" className="kit-nav-btn" onClick={goNext} aria-label="Next initiatives">
                &#8594;
              </button>
              <button type="button" className="kit-nav-btn kit-nav-btn-muted" onClick={goPrev} aria-label="Previous initiatives">
                &#8592;
              </button>
            </div>
          </div>

          <div className="kit-initiatives-grid" ref={viewportRef} aria-live="polite">
            <Motion.div
              className="kit-initiatives-track"
              animate={{ x: stepPx > 0 ? -carouselOffset * stepPx : 0 }}
              transition={{
                duration: reduceMotion || instantMove ? 0 : INIT_CAROUSEL.duration,
                ease: INIT_CAROUSEL.ease,
              }}
              onAnimationComplete={reduceMotion ? undefined : handleInitiativeTrackAnimationComplete}
            >
              {(reduceMotion ? INITIATIVE_SLIDES : INITIATIVE_CAROUSEL_SLIDES).map((slide, idx) => (
                <article
                  key={reduceMotion ? slide.num : `init-slide-${idx}`}
                  className={`kit-initiative-card kit-initiative-card--${slide.icon}`}
                  aria-hidden={
                    reduceMotion
                      ? undefined
                      : idx < INITIATIVE_SLIDE_COUNT || idx >= INITIATIVE_SLIDE_COUNT * 2
                        ? true
                        : undefined
                  }
                >
                  <div className="kit-initiative-top">
                    <span className="kit-initiative-num">{slide.num}</span>
                    <span className="kit-initiative-icon">
                      <InitiativeIcon kind={slide.icon} />
                    </span>
                  </div>
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                </article>
              ))}
            </Motion.div>
          </div>
        </div>
      </section>

      <section className="kit-updates" aria-labelledby="kit-updates-title">
        <div className="kit-updates-shell">
          <div className="kit-updates-lead">
            <div className="kit-updates-top">
              <Motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -42 }}
                whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="kit-updates-label">KCR Government</span>
                <h2 id="kit-updates-title" className="kit-updates-title">
                  Health Care & Welfare Benefits
                </h2>
                <p className="kit-updates-subtitle">
                  Building a healthier, happier Telangana through public welfare.
                </p>
              </Motion.div>
            </div>

            <div className="kit-feature-card">
              <img
                className="kit-feature-image"
                src={healthWomenImg}
                alt="Doctor providing health care support to women beneficiaries"
                draggable={false}
              />
              <div className="kit-feature-content">
                <span className="kit-update-chip">{KIT_UPDATES[0].date}</span>
                <h3>{KIT_UPDATES[0].title}</h3>
                <p>{KIT_UPDATES[0].desc}</p>
              </div>
            </div>
          </div>

          <Motion.div
            className="kit-updates-list"
            aria-label="Latest welfare updates"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? {} : 'show'}
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.32,
                },
              },
            }}
          >
            {listItems.map((item) => (
              <Motion.article
                key={item.title}
                className="kit-update-item"
                variants={
                  reduceMotion
                    ? undefined
                    : {
                        hidden: { opacity: 0, scale: 0.9, y: 16 },
                        show: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
                        },
                      }
                }
              >
                <span className="kit-update-chip">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </section>

      <section className="kit-vision" aria-labelledby="kit-vision-title">
        <div className="kit-vision-bg" aria-hidden="true" />
        <div className="kit-vision-slab" aria-hidden="true" />

        <div className="kit-vision-inner">
          <header className="kit-vision-header">
            <span className="kit-vision-eyebrow">KCR Kit</span>
            <h2 id="kit-vision-title" className="kit-vision-title">
              Healthy Future Vision
            </h2>
          </header>

          <div className="kit-vision-row">
            {VISION_SLIDES.map((slide, idx) => {
              const isActive = idx === 1;
              return (
                <article key={slide.id} className={`kit-vision-card${isActive ? ' kit-vision-card--active' : ''}`}>
                  <div className="kit-vision-card-media">
                    <img src={slide.image} alt={slide.imageAlt} className="kit-vision-card-img" draggable={false} />
                  </div>
                  <div className="kit-vision-card-body">
                    <h3 className="kit-vision-card-title">{slide.title}</h3>
                    <p className="kit-vision-card-desc">{slide.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KCRKit;
