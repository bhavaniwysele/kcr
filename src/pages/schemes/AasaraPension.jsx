import React, { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import './AasaraPension.css';

import aasaraHeroBg from '../../assets/asarabg.jpeg';
import asaraCollage from '../../assets/asara1.webp';
import asaraPhoto from '../../assets/Aasara-pension.jpg';
import aasara3Support from '../../assets/Aasara3.avif';
import asara4Inclusive from '../../assets/asara4.jpeg';

const LABEL_TEXT = 'Government scheme';
const HERO_TITLE = 'Aasara Pension';
const HERO_SUBTITLE =
  'Social security pensions for older persons, widows, single women, and people with disabilities—regular support that upholds dignity.';

const DURATION = 1.2;
const EASE = [0.25, 0.1, 0.25, 1];

const PILLARS_PRIMARY_HEADING = 'Supporting Lives with Dignity';
/** Shown under the bento “Secure & Inclusive Future” heading */
const BENTO_SUBTITLE = PILLARS_PRIMARY_HEADING;

/** Top row: text → vertical title → image. Bottom row: image → vertical title → text */
const ABOUT_BLOCKS = [
  {
    id: 'what',
    layout: 'text-first',
    title: 'What is Aasara',
    body:
      'Aasara Pension is a flagship social security programme in Telangana—delivering regular monthly financial assistance so older citizens, widows, single women, and people with disabilities can meet everyday needs with dignity.',
    img: asaraCollage,
    alt: 'Communities supported through pension and welfare programmes',
  },
  {
    id: 'who',
    layout: 'text-first',
    title: 'Who it serves',
    body:
      'The scheme prioritises vulnerable groups: senior citizens, widows, single women, weavers, and persons with disabilities among others—aligned with clear eligibility so support reaches those who need it most.',
    img: asaraPhoto,
    alt: 'Dignity and care through pension support',
  },
  {
    id: 'support',
    layout: 'image-first',
    title: 'Monthly support',
    body:
      'Predictable pension credits help families plan rent, food, and health expenses. That stability strengthens households and reduces uncertainty for citizens on fixed incomes.',
    img: aasara3Support,
    alt: 'Monthly pension support helping families plan essentials with dignity',
  },
  {
    id: 'vision',
    layout: 'image-first',
    title: 'Inclusive Telangana',
    body:
      'Aasara sits alongside broader welfare efforts—part of a people-first vision where pensions, healthcare access, and inclusion work together toward a more secure and compassionate state.',
    img: asara4Inclusive,
    alt: 'Inclusive communities and welfare across Telangana',
  },
];

const PILLAR_CARDS = [
  {
    id: 'seniors',
    title: 'Care for senior citizens',
    body:
      'Providing financial support that helps senior citizens live with dignity, security, and peace of mind.',
    Icon: IconPillarSeniors,
  },
  {
    id: 'families',
    title: 'Support for women & families',
    body:
      'Strengthening vulnerable families through regular pension assistance and dependable welfare support.',
    Icon: IconPillarFamilies,
  },
  {
    id: 'inclusive',
    title: 'Inclusive community welfare',
    body:
      'Supporting persons with disabilities and marginalised communities with predictable, respectful assistance.',
    Icon: IconPillarInclusive,
  },
  {
    id: 'dignity',
    title: 'Dignity, security & a better tomorrow',
    body:
      'Building a more secure and inclusive society where every eligible citizen is seen, supported, and respected.',
    Icon: IconPillarDignity,
  },
];

const BENTO_FROM_TOP = { y: -36, opacity: 0 };
const BENTO_VISIBLE = { y: 0, opacity: 1 };
const BENTO_EASE = [0.22, 1, 0.36, 1];

const BENTO_TILE_BG = [
  { pos: '0% 0%' },
  { pos: '100% 0%' },
  { pos: '0% 100%' },
  { pos: '100% 100%' },
];

const BENTO_PANELS = [
  {
    letter: 'A',
    title: 'Inclusive welfare',
    body: 'Building support systems that reach older persons, widows, single women, and people with disabilities across Telangana.',
  },
  {
    letter: 'B',
    title: 'Community stability',
    body: 'Predictable monthly assistance that helps families plan ahead and strengthens neighbourhood-level security.',
  },
  {
    letter: 'C',
    title: 'Dignity & empowerment',
    body: 'Financial support delivered with respect—so beneficiaries can meet daily needs and participate with confidence.',
  },
  {
    letter: 'D',
    title: 'Future-focused care',
    body: 'A safety net aligned with inclusive growth: protecting the vulnerable today while the state invests in tomorrow.',
  },
];

function IconPillarSeniors() {
  return (
    <svg className="ap-pillar-card__icon-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M16 18c0-2.2 1.8-4 4-4s4 1.8 4 4v2M12 38v-6c0-2.2 2-4 6-4s6 1.8 6 4v6M28 18c0-2.2 1.8-4 4-4s4 1.8 4 4v2M24 38v-6c0-2.2 2-4 6-4s6 1.8 6 4v6"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPillarFamilies() {
  return (
    <svg className="ap-pillar-card__icon-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M18 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM36 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM12 38v-5a4 4 0 0 1 4-4h4M24 38v-5a4 4 0 0 1 4-4h4M24 22v16M21 26h6"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 30c-1.8 0-3.2 1-3.8 2.5"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPillarInclusive() {
  return (
    <svg className="ap-pillar-card__icon-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.65" />
      <path
        d="M14 38v-6c0-2.5 2.2-4.5 5-4.5h10c2.8 0 5 2 5 4.5V38M18 24h12M24 24v6"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="36" cy="30" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M36 33v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPillarDignity() {
  return (
    <svg className="ap-pillar-card__icon-svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M14 30c4-4 8-6 10-8s6 4 10 8M18 34c2.5-2 5-3.5 6-4.5s3.5 1.5 6 4.5"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 18c-2.8 0-5 2.1-5 4.7 0 3.5 5 8.3 5 8.3s5-4.8 5-8.3C29 20.1 26.8 18 24 18z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PillarCard({ title, body, Icon, delay, inView, reduceMotion }) {
  const inner = (
    <>
      <div className="ap-pillar-card__icon" aria-hidden="true">
        <Icon />
      </div>
      <h3 className="ap-pillar-card__title">{title}</h3>
      <span className="ap-pillar-card__rule" aria-hidden="true" />
      <p className="ap-pillar-card__body">{body}</p>
    </>
  );

  if (reduceMotion) {
    return <article className="ap-pillar-card">{inner}</article>;
  }

  return (
    <motion.article
      className="ap-pillar-card"
      initial={BENTO_FROM_TOP}
      animate={inView ? BENTO_VISIBLE : BENTO_FROM_TOP}
      transition={{ duration: 0.65, delay, ease: BENTO_EASE }}
    >
      {inner}
    </motion.article>
  );
}

function AboutBlock({ layout, title, body, img, alt, index, inView, reduceMotion }) {
  const textEl = (
    <div className="ap-about-block__text">
      <p className="ap-about-block__body">{body}</p>
    </div>
  );
  const titleEl = (
    <div className="ap-about-block__title-box">
      <h3 className="ap-about-block__title-vertical">{title}</h3>
    </div>
  );
  const figureEl = (
    <div className="ap-about-block__figure">
      <img
        className="ap-about-block__img"
        src={img}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={320}
        height={320}
      />
    </div>
  );

  const ordered =
    layout === 'text-first' ? (
      <>
        {textEl}
        {titleEl}
        {figureEl}
      </>
    ) : (
      <>
        {figureEl}
        {titleEl}
        {textEl}
      </>
    );

  const cls = `ap-about-block ap-about-block--${layout}`;

  if (reduceMotion) {
    return <article className={cls}>{ordered}</article>;
  }

  return (
    <motion.article
      className={cls}
      initial={BENTO_FROM_TOP}
      animate={inView ? BENTO_VISIBLE : BENTO_FROM_TOP}
      transition={{ duration: 0.68, delay: 0.04 + index * 0.08, ease: BENTO_EASE }}
    >
      {ordered}
    </motion.article>
  );
}

function AasaraAboutSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section ref={ref} className="ap-about" aria-labelledby="ap-about-heading">
      <h2 id="ap-about-heading" className="ap-about__heading">
        About <span className="ap-about__heading-accent">Aasara Pension</span>
      </h2>
      <div className="ap-about__grid">
        {ABOUT_BLOCKS.map((b, i) => (
          <AboutBlock key={b.id} {...b} index={i} inView={inView} reduceMotion={reduceMotion} />
        ))}
      </div>
    </section>
  );
}

function AasaraPillarsSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const headerMotion = reduceMotion
    ? {}
    : {
        initial: BENTO_FROM_TOP,
        animate: inView ? BENTO_VISIBLE : BENTO_FROM_TOP,
        transition: { duration: 0.6, delay: 0.02, ease: BENTO_EASE },
      };

  return (
    <section
      ref={ref}
      className="ap-pillars"
      aria-labelledby="ap-pillars-heading"
      aria-describedby="ap-pillars-subtitle"
    >
      {reduceMotion ? (
        <header className="ap-pillars__header">
          <h2 id="ap-pillars-heading" className="ap-pillars__title">
            {PILLARS_PRIMARY_HEADING}
          </h2>
          <p id="ap-pillars-subtitle" className="ap-pillars__subtitle">
            <span className="ap-pillars__subtitle-accent">Secure & Inclusive</span> Future
          </p>
        </header>
      ) : (
        <motion.header className="ap-pillars__header" {...headerMotion}>
          <h2 id="ap-pillars-heading" className="ap-pillars__title">
            {PILLARS_PRIMARY_HEADING}
          </h2>
          <p id="ap-pillars-subtitle" className="ap-pillars__subtitle">
            <span className="ap-pillars__subtitle-accent">Secure & Inclusive</span> Future
          </p>
        </motion.header>
      )}

      <div className="ap-pillars__grid" role="list">
        {PILLAR_CARDS.map((card, i) => (
          <div key={card.id} className="ap-pillars__cell" role="listitem">
            <PillarCard
              title={card.title}
              body={card.body}
              Icon={card.Icon}
              delay={0.08 + i * 0.07}
              inView={inView}
              reduceMotion={reduceMotion}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function SlideRevealLine({ children, delay = 0, className, inView = true }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`ap-reveal-mask ${className || ''}`}>
      <motion.div
        className="ap-reveal-inner"
        initial={{ y: '-100%', opacity: 0, x: 0 }}
        animate={inView ? { y: 0, opacity: 1, x: 0 } : { y: '-100%', opacity: 0, x: 0 }}
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

function BentoPanel({ letter, title, body, delay, inView, reduceMotion, className = '' }) {
  const bodyEl = (
    <>
      <span className="ap-bento-panel-letter" aria-hidden="true">
        {letter}
      </span>
      <h3 className="ap-bento-panel-title">{title}</h3>
      <p className="ap-bento-panel-body">{body}</p>
    </>
  );

  const panelClass = ['ap-bento-panel', className].filter(Boolean).join(' ');

  if (reduceMotion) {
    return <article className={panelClass}>{bodyEl}</article>;
  }

  return (
    <motion.article
      className={panelClass}
      initial={BENTO_FROM_TOP}
      animate={inView ? BENTO_VISIBLE : BENTO_FROM_TOP}
      transition={{ duration: 0.72, delay, ease: BENTO_EASE }}
    >
      {bodyEl}
    </motion.article>
  );
}

function AasaraBentoSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(sectionRef, { once: true, amount: 0.12 });
  const collageUrl = asaraCollage;

  const collageInner = (
    <>
      {BENTO_TILE_BG.map((tile, i) => (
        <div
          key={i}
          className="ap-bento-tile"
          style={{
            backgroundImage: `url(${collageUrl})`,
            backgroundSize: '200% 200%',
            backgroundPosition: tile.pos,
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}
    </>
  );

  return (
    <section
      ref={sectionRef}
      className="ap-bento"
      aria-labelledby="ap-bento-heading"
      aria-describedby="ap-bento-subtitle"
    >
      <h2 id="ap-bento-heading" className="ap-bento-heading">
        <span className="ap-bento-heading-accent">Secure & Inclusive</span> Future
      </h2>
      <p id="ap-bento-subtitle" className="ap-bento-subtitle">
        {BENTO_SUBTITLE}
      </p>

      <div className="ap-bento-grid">
        <BentoPanel
          className="ap-bento-cell ap-bento-cell-a"
          {...BENTO_PANELS[0]}
          delay={0.06}
          inView={inView}
          reduceMotion={reduceMotion}
        />
        <BentoPanel
          className="ap-bento-cell ap-bento-cell-b"
          {...BENTO_PANELS[1]}
          delay={0.14}
          inView={inView}
          reduceMotion={reduceMotion}
        />

        {reduceMotion ? (
          <div
            className="ap-bento-collage ap-bento-cell"
            role="img"
            aria-label="Telangana families and communities supported through social security"
          >
            {collageInner}
          </div>
        ) : (
          <motion.div
            className="ap-bento-collage ap-bento-cell"
            initial={BENTO_FROM_TOP}
            animate={inView ? BENTO_VISIBLE : BENTO_FROM_TOP}
            transition={{ duration: 0.78, delay: 0.1, ease: BENTO_EASE }}
            role="img"
            aria-label="Telangana families and communities supported through social security"
          >
            {collageInner}
          </motion.div>
        )}

        <BentoPanel
          className="ap-bento-cell ap-bento-cell-c"
          {...BENTO_PANELS[2]}
          delay={0.1}
          inView={inView}
          reduceMotion={reduceMotion}
        />
        <BentoPanel
          className="ap-bento-cell ap-bento-cell-d"
          {...BENTO_PANELS[3]}
          delay={0.18}
          inView={inView}
          reduceMotion={reduceMotion}
        />
      </div>
    </section>
  );
}

const AasaraPension = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.32 });

  return (
    <div className="ap-page">
      <section ref={heroRef} className="ap-hero" aria-labelledby="aasara-hero-title">
        <div className="ap-hero-shell">
          <div className="ap-hero-bg">
            <img
              className="ap-hero-bg-img"
              src={aasaraHeroBg}
              alt=""
              aria-hidden="true"
              draggable={false}
            />
          </div>

          <div className="ap-hero-overlay" />

          <div className="ap-hero-content">
            <SlideRevealLine delay={0.1} className="ap-hero-label-wrap" inView={heroInView}>
              <span className="ap-hero-label">{LABEL_TEXT}</span>
            </SlideRevealLine>

            <SlideRevealLine delay={0.3} inView={heroInView}>
              <h1 id="aasara-hero-title" className="ap-hero-title">
                {HERO_TITLE}
              </h1>
            </SlideRevealLine>

            <SlideRevealLine delay={0.55} inView={heroInView}>
              <p className="ap-hero-subtitle">{HERO_SUBTITLE}</p>
            </SlideRevealLine>
          </div>
        </div>
      </section>

      <AasaraAboutSection />

      <AasaraPillarsSection />

      <AasaraBentoSection />
    </div>
  );
};

export default AasaraPension;
