import React, { useRef, useState } from 'react';
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
      x: '78%',
      y: '-26%',
      scale: 0.52,
      opacity: 1,
      rotate: 6,
      filter: 'blur(0px)',
    };
  }
  if (offset === 2) {
    return {
      x: '82%',
      y: '30%',
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
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const next = Math.min(
      timelineData.length - 1,
      Math.max(0, Math.floor(latest * timelineData.length))
    );
    // Use functional setState so we always compare against the latest
    // committed value, regardless of any stale closure in this callback.
    setActiveIndex((prev) => (prev !== next ? next : prev));
  });

  const active = timelineData[activeIndex];
  const total = timelineData.length;
  const { head, tail } = splitTitle(active.title);

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
          <div className="journey-progress" aria-hidden="true">
            <strong>{String(activeIndex + 1).padStart(2, '0')}</strong>
            <span className="journey-progress-bar">
              <motion.span
                animate={{ width: `${((activeIndex + 1) / total) * 100}%` }}
                transition={{ duration: 0.7, ease: cardEase }}
              />
            </span>
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
