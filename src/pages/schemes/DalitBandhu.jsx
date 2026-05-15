import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import dalitHeroBg from '../../assets/dalitbandhuhero.jpg';
import aboutVisual from '../../assets/savingsdb2.avif';
import imgLivelihoodBusiness from '../../assets/db-livelihood-business.png';
import imgLivelihoodEnterprises from '../../assets/db-livelihood-enterprises.png';
import imgLivelihoodLivelihood from '../../assets/db-livelihood-livelihood.png';
import imgLivelihoodEmployment from '../../assets/db-livelihood-employment.png';
import imgLivelihoodCommunity from '../../assets/db-livelihood-community.png';
import './SchemePage.css';
import './DalitBandhu.css';

const LABEL_TEXT = 'Government scheme';
const HERO_TITLE = 'Dalit Bandhu';
const HERO_SUBTITLE =
  'An empowerment programme supporting entrepreneurship and economic mobility among Dalit communities through targeted investment.';

const SECTION_LABEL = 'About Dalit Bandhu';
const MAIN_HEADING = 'Empowering Lives. Building Futures.';
const MAIN_PARAGRAPH =
  'Dalit Bandhu is a flagship initiative focused on promoting economic empowerment through financial assistance, self-employment opportunities, and entrepreneurial support, enabling families to build independent and self-reliant futures.';

const VISION_TITLE = 'Our Vision';
const VISION_TEXT =
  'To create stronger and more self-reliant communities by encouraging entrepreneurship, financial independence, and inclusive economic growth across Telangana.';

const FEATURE_CARDS = [
  {
    id: 'vision',
    title: 'Scheme Vision',
    body: 'To uplift families through targeted financial support and sustainable opportunities.',
    Icon: IconSchemeVision,
  },
  {
    id: 'financial',
    title: 'Financial Assistance',
    body: 'Providing substantial support to help individuals start and grow their own ventures.',
    Icon: IconFinancialAssistance,
  },
  {
    id: 'self-employment',
    title: 'Self-Employment Support',
    body: 'Encouraging entrepreneurship and independent livelihoods through welfare-focused initiatives.',
    Icon: IconSelfEmployment,
  },
  {
    id: 'empowerment',
    title: 'Economic Empowerment',
    body: 'Driving long-term growth, financial stability, and stronger community development.',
    Icon: IconEconomicEmpowerment,
  },
];

const LETTER_STAGGER = 0.028;
const LETTER_DURATION = 0.42;
const LETTER_EASE = [0.22, 1, 0.36, 1];
const LETTER_INITIAL_DELAY = 0.06;
const SW_FROM = { opacity: 0, x: '-0.4em', y: '0.45em' };
const SW_TO = { opacity: 1, x: 0, y: 0 };

function HeroAnimatedLetters({ text, globalBaseIndex, inView, reduceMotion }) {
  if (reduceMotion) {
    return <span aria-hidden="true">{text}</span>;
  }
  return (
    <span aria-hidden="true">
      {[...text].map((char, i) => (
        <motion.span
          key={`${globalBaseIndex + i}-${i}`}
          className="db-hero-char"
          initial={SW_FROM}
          animate={inView ? SW_TO : SW_FROM}
          transition={{
            delay: LETTER_INITIAL_DELAY + (globalBaseIndex + i) * LETTER_STAGGER,
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

function IconLeaf() {
  return (
    <svg className="db-about__label-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3c-4 2.5-6 6-6 10a6 6 0 0 0 12 0c0-4-2-7.5-6-10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 13v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconVisionEye() {
  return (
    <svg className="db-about__vision-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconSchemeVision() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconFinancialAssistance() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M14 28c0-4.5 3.5-8 10-8s10 3.5 10 8-3.5 8-10 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path d="M18 20c1.5-3 4.5-5 8-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <circle cx="28" cy="22" r="5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M26.5 22h3M28 20.5v3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconSelfEmployment() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="10" y="16" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M18 16v-3a6 6 0 0 1 12 0v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M10 24h28" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconEconomicEmpowerment() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M12 34V22M22 34V16M32 34V26" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M10 34h28" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M28 14l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const LIVELIHOOD_SECTION_TITLE = 'Empowering Entrepreneurship & Livelihoods';

const LIVELIHOOD_CARDS = [
  {
    id: 'business',
    title: 'Business Opportunities',
    body:
      'Creating pathways for individuals to explore, start, and grow diverse business opportunities with confidence.',
    image: imgLivelihoodBusiness,
    imageAlt: 'Small shop owner representing business opportunities',
  },
  {
    id: 'enterprises',
    title: 'Small Enterprises',
    body:
      'Encouraging and strengthening small enterprises to build sustainable, self-reliant, and successful ventures.',
    image: imgLivelihoodEnterprises,
    imageAlt: 'Woman entrepreneur at a small enterprise storefront',
  },
  {
    id: 'livelihood',
    title: 'Livelihood Generation',
    body:
      'Generating sustainable livelihood opportunities that empower families and improve economic independence.',
    image: imgLivelihoodLivelihood,
    imageAlt: 'Vendor with fresh produce representing livelihood generation',
  },
  {
    id: 'employment',
    title: 'Employment Support',
    body:
      'Supporting employment creation through skill development, training, and placement opportunities.',
    image: imgLivelihoodEmployment,
    imageAlt: 'Tailor at work representing employment and skill support',
  },
  {
    id: 'community',
    title: 'Community Growth',
    body:
      'Building stronger communities by fostering collaboration, inclusion, and long-term socio-economic development.',
    image: imgLivelihoodCommunity,
    imageAlt: 'Community members collaborating for inclusive growth',
  },
];

const LIVELIHOOD_VISIBLE_COUNT = 3;
const LIVELIHOOD_SLIDE_COUNT = LIVELIHOOD_CARDS.length;
/** Three copies: start in the middle, jump invisibly at loop edges for infinite scroll. */
const LIVELIHOOD_CAROUSEL_SLIDES = [
  ...LIVELIHOOD_CARDS,
  ...LIVELIHOOD_CARDS,
  ...LIVELIHOOD_CARDS,
];
const LIVELIHOOD_CAROUSEL_START = LIVELIHOOD_SLIDE_COUNT;
const LIVELIHOOD_CAROUSEL_LOOP = LIVELIHOOD_CAROUSEL_START + LIVELIHOOD_SLIDE_COUNT;
const LIVELIHOOD_CAROUSEL = {
  autoplayMs: 4500,
  duration: 0.65,
  ease: [0.25, 0.1, 0.25, 1],
};

function LivelihoodCard({ card, ariaHidden }) {
  return (
    <article className="db-livelihood__card" role="listitem" aria-hidden={ariaHidden || undefined}>
      <div className="db-livelihood__avatar">
        <img
          src={card.image}
          alt={card.imageAlt}
          width={136}
          height={136}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="db-livelihood__card-panel">
        <h3 className="db-livelihood__card-title">{card.title}</h3>
        <div className="db-livelihood__card-rule" aria-hidden="true" />
        <p className="db-livelihood__card-body">{card.body}</p>
      </div>
    </article>
  );
}

function DalitBandhuLivelihood() {
  const viewportRef = useRef(null);
  const [carouselOffset, setCarouselOffset] = useState(LIVELIHOOD_CAROUSEL_START);
  const [stepPx, setStepPx] = useState(0);
  const [instantMove, setInstantMove] = useState(false);
  const carouselOffsetRef = useRef(LIVELIHOOD_CAROUSEL_START);
  const reduceMotion = useReducedMotion();
  carouselOffsetRef.current = carouselOffset;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const measure = () => {
      const track = viewport.querySelector('.db-livelihood__track');
      const width = viewport.getBoundingClientRect().width;
      const styles = track ? getComputedStyle(track) : null;
      const gap =
        (styles && Number.parseFloat(styles.columnGap)) ||
        (styles && Number.parseFloat(styles.gap)) ||
        21;
      const cardW = Math.max(0, (width - gap * (LIVELIHOOD_VISIBLE_COUNT - 1)) / LIVELIHOOD_VISIBLE_COUNT);
      viewport.style.setProperty('--db-livelihood-card-basis', `${cardW}px`);
      setStepPx(cardW + gap);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (carouselOffset <= LIVELIHOOD_CAROUSEL_LOOP) return undefined;
    setInstantMove(true);
    setCarouselOffset(
      LIVELIHOOD_CAROUSEL_START +
        ((carouselOffset - LIVELIHOOD_CAROUSEL_START) % LIVELIHOOD_SLIDE_COUNT)
    );
    return undefined;
  }, [carouselOffset]);

  useEffect(() => {
    if (!instantMove) return undefined;
    const id = requestAnimationFrame(() => setInstantMove(false));
    return () => cancelAnimationFrame(id);
  }, [instantMove]);

  const snapToLoopStart = useCallback(() => {
    if (reduceMotion) return;
    if (carouselOffsetRef.current !== LIVELIHOOD_CAROUSEL_LOOP) return;
    setInstantMove(true);
    setCarouselOffset(LIVELIHOOD_CAROUSEL_START);
  }, [reduceMotion]);

  const handleTrackAnimationComplete = useCallback(() => {
    snapToLoopStart();
  }, [snapToLoopStart]);

  useEffect(() => {
    if (reduceMotion || instantMove) return undefined;
    if (carouselOffset !== LIVELIHOOD_CAROUSEL_LOOP || stepPx <= 0) return undefined;
    const timeoutId = setTimeout(snapToLoopStart, LIVELIHOOD_CAROUSEL.duration * 1000 + 80);
    return () => clearTimeout(timeoutId);
  }, [carouselOffset, instantMove, reduceMotion, snapToLoopStart, stepPx]);

  const goNext = useCallback(() => {
    if (reduceMotion) {
      setCarouselOffset(
        (o) =>
          LIVELIHOOD_CAROUSEL_START +
          ((o - LIVELIHOOD_CAROUSEL_START + 1) % LIVELIHOOD_SLIDE_COUNT)
      );
      return;
    }
    setCarouselOffset((o) => Math.min(o + 1, LIVELIHOOD_CAROUSEL_LOOP));
  }, [reduceMotion]);

  const goPrev = useCallback(() => {
    if (reduceMotion) {
      setCarouselOffset(
        (o) =>
          LIVELIHOOD_CAROUSEL_START +
          ((o - LIVELIHOOD_CAROUSEL_START - 1 + LIVELIHOOD_SLIDE_COUNT) % LIVELIHOOD_SLIDE_COUNT)
      );
      return;
    }
    setCarouselOffset((o) => {
      if (o === LIVELIHOOD_CAROUSEL_START) {
        setInstantMove(true);
        return LIVELIHOOD_CAROUSEL_LOOP - 1;
      }
      return o - 1;
    });
  }, [reduceMotion]);

  useEffect(() => {
    if (stepPx <= 0) return undefined;
    const intervalId = setInterval(goNext, LIVELIHOOD_CAROUSEL.autoplayMs);
    return () => clearInterval(intervalId);
  }, [goNext, stepPx]);

  return (
    <section className="db-livelihood" aria-labelledby="db-livelihood-heading">
      <div className="db-livelihood__stage">
        <header className="db-livelihood__header">
          <h2 id="db-livelihood-heading" className="db-livelihood__title">
            {LIVELIHOOD_SECTION_TITLE}
          </h2>
        </header>

        <div className="db-livelihood__band" aria-hidden="true" />
        <div className="db-livelihood__carousel" aria-live="polite">
          <div ref={viewportRef} className="db-livelihood__viewport">
            <motion.div
              className="db-livelihood__track"
              role="list"
              aria-label="Entrepreneurship and livelihood initiatives"
              animate={{ x: stepPx > 0 ? -carouselOffset * stepPx : 0 }}
              transition={{
                duration: reduceMotion || instantMove ? 0 : LIVELIHOOD_CAROUSEL.duration,
                ease: LIVELIHOOD_CAROUSEL.ease,
              }}
              onAnimationComplete={reduceMotion ? undefined : handleTrackAnimationComplete}
            >
              {(reduceMotion ? LIVELIHOOD_CARDS : LIVELIHOOD_CAROUSEL_SLIDES).map((card, idx) => (
                <LivelihoodCard
                  key={reduceMotion ? card.id : `db-livelihood-${idx}`}
                  card={card}
                  ariaHidden={
                    reduceMotion
                      ? undefined
                      : idx < LIVELIHOOD_SLIDE_COUNT || idx >= LIVELIHOOD_SLIDE_COUNT * 2
                  }
                />
              ))}
            </motion.div>
          </div>

          <div className="db-livelihood__nav-wrap">
            <div className="db-livelihood__nav" aria-label="Carousel navigation">
              <button type="button" className="db-livelihood__nav-btn" onClick={goNext} aria-label="Next slide">
                &#8594;
              </button>
              <button
                type="button"
                className="db-livelihood__nav-btn db-livelihood__nav-btn--muted"
                onClick={goPrev}
                aria-label="Previous slide"
              >
                &#8592;
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function DalitBandhuHero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const heroInView = useInView(heroRef, { once: true, amount: 0.38 });
  const subtitleBaseIndex = [...HERO_TITLE].length;

  return (
    <section className="db-hero" aria-labelledby="dalit-bandhu-hero-title" ref={heroRef}>
      <div className="db-hero-shell" style={{ '--db-hero-bg': `url(${dalitHeroBg})` }}>
        <div className="db-hero-overlay" aria-hidden="true" />
        <div className="db-hero-content">
          <div className="db-hero-label">{LABEL_TEXT}</div>
          <h1 id="dalit-bandhu-hero-title" className="db-hero-title">
            <span className="scheme-sr-only">{HERO_TITLE}</span>
            <HeroAnimatedLetters text={HERO_TITLE} globalBaseIndex={0} inView={heroInView} reduceMotion={reduceMotion} />
          </h1>
          <p className="db-hero-subtitle">
            <span className="scheme-sr-only">{HERO_SUBTITLE}</span>
            <HeroAnimatedLetters
              text={HERO_SUBTITLE}
              globalBaseIndex={subtitleBaseIndex}
              inView={heroInView}
              reduceMotion={reduceMotion}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

function DalitBandhuAbout() {
  return (
    <section className="db-about" aria-labelledby="db-about-heading">
      <div className="db-about__inner">
        <div className="db-about__top">
          <div className="db-about__intro">
            <p className="db-about__label">
              <IconLeaf />
              <span>{SECTION_LABEL}</span>
            </p>
            <h2 id="db-about-heading" className="db-about__title">
              {MAIN_HEADING}
            </h2>
            <div className="db-about__title-rule" aria-hidden="true" />
            <p className="db-about__lede">{MAIN_PARAGRAPH}</p>
          </div>

          <div className="db-about__vision-wrap">
            <div className="db-about__vision-divider" aria-hidden="true" />
            <div className="db-about__vision">
              <div className="db-about__vision-head">
                <IconVisionEye />
                <h3 className="db-about__vision-title">{VISION_TITLE}</h3>
              </div>
              <p className="db-about__vision-text">{VISION_TEXT}</p>
            </div>
          </div>

          <div className="db-about__visual">
            <span className="db-about__dots" aria-hidden="true" />
            <div className="db-about__figure">
              <span className="db-about__figure-tab" aria-hidden="true" />
              <div className="db-about__figure-frame">
                <img
                  src={aboutVisual}
                  alt="Economic growth and development across Telangana communities"
                  width={480}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="db-about__cards">
          {FEATURE_CARDS.map((card) => (
            <article key={card.id} className="db-about__card">
              <div className="db-about__card-icon" aria-hidden="true">
                <card.Icon />
              </div>
              <h3 className="db-about__card-title">{card.title}</h3>
              <p className="db-about__card-body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconSocialTransformation() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 26c0-2.5 2-4.5 4.5-4.5h5c2.5 0 4.5 2 4.5 4.5v4H17v-4z" />
      <circle cx="24" cy="15" r="4.5" />
      <path d="M10 28c0-2 1.5-3.5 3.5-3.5h2" />
      <circle cx="14" cy="18" r="3.5" />
      <path d="M38 28c0-2-1.5-3.5-3.5-3.5h-2" />
      <circle cx="34" cy="18" r="3.5" />
      <path d="M6 28c0 4 3 8 8 11l10 4 10-4c5-3 8-7 8-11" />
      <path d="M14 35c3 3 7 4 10 4s7-1 10-4" />
    </svg>
  );
}

function IconFutureOpportunities() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 36v-6h8v-6h8v-6h8" />
      <path d="M12 36h24" />
      <path d="M28 14h8v8" />
      <path d="M20 22l16-16" />
      <circle cx="16" cy="14" r="3" />
      <path d="M16 17v8" />
      <path d="M12 21l4-4 4 4" />
      <path d="M12 31l4-6 4 6" />
    </svg>
  );
}

function IconInclusiveDevelopment() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="24" cy="24" r="14" strokeDasharray="4 6" />
      <circle cx="24" cy="10" r="3" />
      <path d="M20 16h8" />
      <circle cx="24" cy="38" r="3" />
      <path d="M20 32h8" />
      <circle cx="10" cy="24" r="3" />
      <path d="M16 20v8" />
      <circle cx="38" cy="24" r="3" />
      <path d="M32 20v8" />
    </svg>
  );
}

function IconStrongerTelangana() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10c4-2 8-2 12 0 4 2 6 6 8 10 2 4 2 8 0 12-2 4-8 8-14 8s-12-4-14-8c-2-4-2-8 0-12 2-4 4-8 8-10z" />
      <path d="M18 30v-6 M24 30v-10 M30 30v-14" />
      <path d="M16 24l6-6 6-4" />
      <path d="M30 14h4v4" />
    </svg>
  );
}

const IMPACT_CARDS = [
  {
    id: 'social-transformation',
    title: 'SOCIAL TRANSFORMATION',
    body: 'Empowering communities through education, awareness, and equal opportunities, driving positive social change and creating a more just and equitable society.',
    Icon: IconSocialTransformation,
  },
  {
    id: 'future-opportunities',
    title: 'FUTURE OPPORTUNITIES',
    body: 'Creating a strong foundation for the next generation by enabling access to skills, innovation, and resources for a brighter and more prosperous tomorrow.',
    Icon: IconFutureOpportunities,
  },
  {
    id: 'inclusive-development',
    title: 'INCLUSIVE DEVELOPMENT',
    body: 'Promoting inclusive growth that reaches every individual, ensures equal participation, and builds a stronger, more balanced and progressive Telangana.',
    Icon: IconInclusiveDevelopment,
  },
  {
    id: 'stronger-telangana',
    title: 'STRONGER TELANGANA VISION',
    body: 'Building a self-reliant, empowered, and united Telangana where every citizen can live with dignity, opportunity, and pride in their future.',
    Icon: IconStrongerTelangana,
  },
];

const IMPACT_SECTION_TITLE = 'Building an Inclusive Future';
const IMPACT_SECTION_SUBTITLE = 'Fostering empowerment, economic independence, and social equity across communities to ensure long-term prosperity for every family.';

function DalitBandhuImpact() {
  return (
    <section className="db-impact" aria-labelledby="db-impact-heading">
      <div className="db-impact__inner">
        <header className="db-impact__header">
          <h2 id="db-impact-heading" className="db-impact__section-title">
            {IMPACT_SECTION_TITLE}
          </h2>
          <p className="db-impact__section-subtitle">
            {IMPACT_SECTION_SUBTITLE}
          </p>
        </header>
        <div className="db-impact__list">
          {IMPACT_CARDS.map((card) => (
            <article key={card.id} className="db-impact__card">
              <div className="db-impact__card-content">
                <span className="db-impact__bullet" aria-hidden="true" />
                <div className="db-impact__text">
                  <h3 className="db-impact__title">{card.title}</h3>
                  <p className="db-impact__body">{card.body}</p>
                </div>
              </div>
              <div className="db-impact__visual">
                <div className="db-impact__avatar">
                  <card.Icon />
                </div>
                <svg className="db-impact__arc" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                  <path
                    d="M 60 5 A 55 55 0 0 1 60 115"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="2 6"
                    strokeLinecap="round"
                  />
                  <circle cx="107.6" cy="32.5" r="3.5" fill="currentColor" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const DalitBandhu = () => {
  return (
    <div className="db-page">
      <DalitBandhuHero />
      <DalitBandhuAbout />
      <DalitBandhuLivelihood />
      <DalitBandhuImpact />
    </div>
  );
};

export default DalitBandhu;
