import React, { useEffect, useRef, useState } from 'react';
import './LeadersShowcase.css';

const LEADERS = [
  {
    name: 'K. Chandrashekar Rao',
    role: 'President & Leader of Opposition',
    area: 'Gajwel',
    initials: 'KCR',
    gradient: 'linear-gradient(135deg, #ec008c 0%, #7c0049 100%)',
    featured: true,
  },
  {
    name: 'K. T. Rama Rao',
    role: 'Working President · MLA',
    area: 'Sircilla',
    initials: 'KTR',
    gradient: 'linear-gradient(135deg, #ff5e62 0%, #ff9966 100%)',
  },
  {
    name: 'T. Harish Rao',
    role: 'Senior Leader · MLA',
    area: 'Siddipet',
    initials: 'HR',
    gradient: 'linear-gradient(135deg, #654ea3 0%, #ea384d 100%)',
  },
  {
    name: 'Ravula Chandrasekhar Reddy',
    role: 'General Secretary',
    area: 'Party Office',
    initials: 'RCR',
    gradient: 'linear-gradient(135deg, #4776e6 0%, #8e54e9 100%)',
  },
  {
    name: 'Talasani Srinivas Yadav',
    role: 'MLA',
    area: 'Sanathnagar',
    initials: 'TSY',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    name: 'Maganti Gopinath',
    role: 'MLA',
    area: 'Jubilee Hills',
    initials: 'MG',
    gradient: 'linear-gradient(135deg, #f27121 0%, #e94057 100%)',
  },
  {
    name: 'P. Sabitha Indra Reddy',
    role: 'MLA',
    area: 'Maheshwaram',
    initials: 'SI',
    gradient: 'linear-gradient(135deg, #3a7bd5 0%, #3a6073 100%)',
  },
  {
    name: 'Kadiyam Srihari',
    role: 'MLA',
    area: 'Ghanpur Station',
    initials: 'KS',
    gradient: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)',
  },
  {
    name: 'Padi Kaushik Reddy',
    role: 'MLA',
    area: 'Huzurabad',
    initials: 'PK',
    gradient: 'linear-gradient(135deg, #00b4db 0%, #0083b0 100%)',
  },
  {
    name: 'Jogu Ramanna',
    role: 'MLA',
    area: 'Adilabad',
    initials: 'JR',
    gradient: 'linear-gradient(135deg, #ff8008 0%, #ffc837 100%)',
  },
];

// Duplicate the deck once so the marquee can loop seamlessly without a visible jump
const LOOP = [...LEADERS, ...LEADERS];

const LeadersShowcase = () => {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which card is closest to the horizontal center of the viewport
  // so we can scale it up to mimic the "center card bigger" effect.
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    let raf = 0;
    const updateActive = () => {
      const cards = cardRefs.current.filter(Boolean);
      if (cards.length === 0) return;
      const vpRect = viewport.getBoundingClientRect();
      const center = vpRect.left + vpRect.width / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const r = card.getBoundingClientRect();
        const cardCenter = r.left + r.width / 2;
        const d = Math.abs(cardCenter - center);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      setActiveIndex(bestIdx);
    };

    const tick = () => {
      updateActive();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => updateActive();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="leaders-showcase">
      <header className="leaders-showcase-header">
        <span className="leaders-showcase-eyebrow">Visionaries of Telangana</span>
        <h2 className="leaders-showcase-title">
          Our <span>Leaders</span>
        </h2>
        <p className="leaders-showcase-subtitle">
          The minds and voices shaping public welfare, growth and the future of Telangana.
        </p>
      </header>

      <div className="leaders-showcase-viewport" ref={viewportRef}>
        <div className="leaders-showcase-track" ref={trackRef}>
          {LOOP.map((leader, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={`${leader.name}-${idx}`}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`leader-show-card ${isActive ? 'is-active' : ''} ${
                  leader.featured ? 'is-featured' : ''
                }`}
                style={{ background: leader.gradient }}
              >
                <div className="leader-show-card-pattern" aria-hidden="true">
                  <span>{leader.initials}</span>
                </div>

                <div className="leader-show-card-overlay" aria-hidden="true" />

                <div className="leader-show-card-content">
                  <span className="leader-show-card-area">{leader.area}</span>
                  <h3 className="leader-show-card-name">{leader.name}</h3>
                  <p className="leader-show-card-role">{leader.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadersShowcase;
