import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import './SchemePage.css';

const LABEL_TEXT = 'Government scheme';

const SCHEME_CONTENT = {
  'mission-bhagiratha': {
    title: 'Mission Bhagiratha',
    subtitle:
      'A statewide mission to deliver safe, piped drinking water to every household—closing the gap between villages and towns through reliable water security.',
    intro:
      'Mission Bhagiratha focuses on sustainable sourcing, treatment, and distribution so that clean drinking water reaches communities across Telangana.',
  },
  'kcr-kit': {
    title: 'KCR Kit',
    subtitle:
      'Supporting mothers and newborns through healthcare assistance, nutrition support, and welfare-focused initiatives across Telangana.',
    intro:
      'The programme bundles essential items for mother and child so that families feel supported through pregnancy and the early months of life.',
  },
  '2bhk-housing': {
    title: '2BHK Housing',
    subtitle:
      'Dignified housing for eligible families—two-bedroom homes designed to give vulnerable households a stable roof and a stronger future.',
    intro:
      'The 2BHK scheme aims to expand access to quality housing for those who need it most, as part of inclusive urban and rural development.',
  },
  'aasara-pensions': {
    title: 'Aasara Pension',
    subtitle:
      'Social security pensions for older persons, widows, single women, and people with disabilities—regular support that upholds dignity.',
    intro:
      'Aasara strengthens the safety net by ensuring predictable financial assistance for citizens facing age, loss, or hardship.',
  },
  'dalit-bandhu': {
    title: 'Dalit Bandhu',
    subtitle:
      'An empowerment programme supporting entrepreneurship and economic mobility among Dalit communities through targeted investment.',
    intro:
      'Dalit Bandhu is structured to unlock livelihood opportunities and asset creation at the household level, with a focus on long-term uplift.',
  },
};

const STAGGER = 0.032;
const DURATION = 0.62;
const EASE = [0.16, 1, 0.3, 1];
const SECTION_GAP = 0.16;
const INITIAL_DELAY = 0.06;

function useHeroLetterTimings(title, subtitle) {
  return useMemo(() => {
    const labelLen = [...LABEL_TEXT].length;
    const titleLen = [...title].length;
    let t = INITIAL_DELAY;
    const labelBase = t;
    t += labelLen * STAGGER + SECTION_GAP;
    const titleBase = t;
    t += titleLen * STAGGER + SECTION_GAP;
    const subtitleBase = t;
    return { labelBase, titleBase, subtitleBase };
  }, [title, subtitle]);
}

function AnimatedLetters({ text, baseDelay, className }) {
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
          className="scheme-hero-char"
          initial={{ opacity: 0, y: '0.72em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: baseDelay + i * STAGGER,
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

const SchemePage = () => {
  const { schemeSlug } = useParams();
  const scheme = SCHEME_CONTENT[schemeSlug];

  const { labelBase, titleBase, subtitleBase } = useHeroLetterTimings(
    scheme?.title ?? '',
    scheme?.subtitle ?? ''
  );

  if (!scheme) {
    return <Navigate to="/schemes/rythu-bandhu" replace />;
  }

  return (
    <div className="scheme-page">
      <section className="scheme-hero" aria-labelledby="scheme-hero-title">
        <div className="scheme-hero-content" key={schemeSlug}>
          <div className="scheme-hero-label">
            <span className="scheme-sr-only">{LABEL_TEXT}</span>
            <AnimatedLetters text={LABEL_TEXT} baseDelay={labelBase} />
          </div>
          <h1 id="scheme-hero-title" className="scheme-hero-title">
            <span className="scheme-sr-only">{scheme.title}</span>
            <AnimatedLetters text={scheme.title} baseDelay={titleBase} />
          </h1>
          <p className="scheme-hero-subtitle">
            <span className="scheme-sr-only">{scheme.subtitle}</span>
            <AnimatedLetters text={scheme.subtitle} baseDelay={subtitleBase} />
          </p>
        </div>
      </section>
      <div className="scheme-body">
        <p className="scheme-intro">{scheme.intro}</p>
      </div>
    </div>
  );
};

export default SchemePage;
