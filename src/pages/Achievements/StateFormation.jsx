import React, { useEffect, useRef, useState } from 'react';
import './StateFormation.css';
import stateFormationHero from '../../assets/stateformation_hero.png';
import electionCampaign from '../../assets/election_campaign.png';
import electionCampaignExtension from '../../assets/election_campaign_extension.png';
import visionMissionBg from '../../assets/visionNmission_bg.png';
import visionMissionBgAlt from '../../assets/vNm_bg2.jpg';
import cultureStateFormation from '../../assets/culture_stateformation.jpg';
import buildingNewTelangana from '../../assets/Building_a_New_Telangana.jpg';
import telanganaMovement from '../../assets/telangana_movement.jpg';
import governanceFinal from '../../assets/governance_final.jpg';
import birthOfTelangana from '../../assets/birthoftelangana.jpg';

const StateFormation = () => {
  const flashcards = [
    {
      title: 'The Telangana Movement',
      description:
        'A historic people’s movement that united millions in the demand for a separate Telangana state rooted in identity, justice, and self-governance.',
      image: telanganaMovement
    },
    {
      title: 'Birth of Telangana',
      description:
        'On June 2, 2014, Telangana officially became India’s 29th state, marking a defining moment in regional history and democratic aspiration.',
      image: birthOfTelangana
    },
    {
      title: 'Building a New Telangana',
      description:
        'Focused on transforming the newly formed state through infrastructure, welfare programs, irrigation projects, and long-term development planning.',
      image: buildingNewTelangana
    },
    {
      title: 'Governance Reforms',
      description:
        'Strengthened administration through district reorganization, digital governance, and citizen-focused public service systems.',
      image: governanceFinal
    },
    {
      title: 'Cultural Identity & Revival',
      description:
        'Celebrated Telangana’s language, traditions, festivals, and heritage while reinforcing regional pride and cultural recognition.',
      image: cultureStateFormation
    }
  ];

  const timelineCards = [
    {
      year: '2001',
      title: 'Formation of TRS',
      description:
        'The Telangana Rashtra Samithi (TRS) was founded with the goal of achieving a separate Telangana state and representing regional aspirations.',
      accentClass: 'timeline-card-lime'
    },
    {
      year: '2004',
      title: 'Movement Gains Momentum',
      description:
        'Public support for Telangana statehood grew rapidly through rallies, student movements, and widespread regional participation.',
      accentClass: 'timeline-card-blue'
    },
    {
      year: '2009',
      title: 'Historic Hunger Strike',
      description:
        'A fast-unto-death protest brought national attention to the Telangana movement and intensified the demand for statehood.',
      accentClass: 'timeline-card-cyan'
    },
    {
      year: '2013',
      title: 'Statehood Approval',
      description:
        'The proposal for Telangana state formation received official approval, marking a major turning point in the movement’s history.',
      accentClass: 'timeline-card-lime'
    },
    {
      year: '2014',
      title: 'Birth of Telangana',
      description:
        'On June 2, 2014, Telangana officially became India’s 29th state, fulfilling decades of aspiration and public struggle.',
      accentClass: 'timeline-card-blue'
    },
    {
      year: '2014+',
      title: 'Building the New State',
      description:
        'Focused on governance reforms, infrastructure development, irrigation projects, and welfare-driven progress for Telangana.',
      accentClass: 'timeline-card-cyan'
    }
  ];

  const [activeCard, setActiveCard] = useState(0);
  const [graphAnimated, setGraphAnimated] = useState(false);
  const [timelineAnimated, setTimelineAnimated] = useState(false);
  const infographicRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const section = infographicRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGraphAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = timelineRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const showNextCard = () => {
    setActiveCard((prev) => (prev + 1) % flashcards.length);
  };

  const showPrevCard = () => {
    setActiveCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const getCardPositionClass = (index) => {
    const total = flashcards.length;
    const prevIndex = (activeCard - 1 + total) % total;
    const nextIndex = (activeCard + 1) % total;

    if (index === activeCard) return 'is-active';
    if (index === prevIndex) return 'is-prev';
    if (index === nextIndex) return 'is-next';
    return 'is-hidden';
  };

  return (
    <div className="achievement-detail-page">
      <section
        className="state-formation-hero"
        style={{ backgroundImage: `url(${stateFormationHero})` }}
        aria-label="State Formation hero"
      >
        <div className="state-formation-hero-content">
          <h1 className="state-formation-hero-title">The Formation of Telangana</h1>
          <p className="state-formation-hero-subtitle">
            A defining journey of resilience, identity, and the creation of a new state.
          </p>
        </div>
      </section>

      <section className="state-formation-flashcards" aria-label="State formation flashcards">
        <div className="flashcards-stage">
          <button type="button" className="flash-nav flash-nav-left" onClick={showPrevCard} aria-label="Previous card">
            &#8592;
          </button>

          <div className="flashcards-track">
            {flashcards.map((card, index) => (
              <article key={card.title} className={`flashcard ${getCardPositionClass(index)}`}>
                <div className="flashcard-image-wrap">
                  <img src={card.image} alt={card.title} className="flashcard-image" />
                </div>
                <div className="flashcard-content">
                  <h3 className="flashcard-title">{card.title}</h3>
                  <p className="flashcard-description">{card.description}</p>
                  <span className="flashcard-count">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </article>
            ))}
          </div>

          <button type="button" className="flash-nav flash-nav-right" onClick={showNextCard} aria-label="Next card">
            &#8594;
          </button>
        </div>
      </section>

      <section
        ref={timelineRef}
        className={`state-formation-timeline-cards ${timelineAnimated ? 'animate-timeline-cards' : ''}`}
        aria-label="State formation timeline cards"
      >
        <div className="timeline-cards-grid">
          {timelineCards.map((card, index) => (
            <article
              key={`${card.year}-${card.title}`}
              className={`timeline-card ${card.accentClass} ${index < 3 ? 'timeline-enter-right' : 'timeline-enter-left'}`}
              style={{ '--timeline-delay': `${index * 0.16}s` }}
              tabIndex={0}
            >
              <div className="timeline-card-plate" aria-hidden="true" />
              <div className="timeline-card-front">
                <p className="timeline-step-label">YEAR</p>
                <p className="timeline-step-number">{card.year}</p>
                <h3 className="timeline-card-title">{card.title}</h3>
                <p className="timeline-card-description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        ref={infographicRef}
        className={`state-formation-infographic ${graphAnimated ? 'animate-graph' : ''}`}
      >
        <h1 className="state-formation-title">The State Formation Curve</h1>

        <div className="state-formation-chart-wrap">
          <svg
            className="state-formation-chart"
            viewBox="0 0 1200 680"
            role="img"
            aria-label="State Formation progress from 2009 to 2013"
          >
            <defs>
              <linearGradient id="stateFormationBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0b4f8a" />
                <stop offset="100%" stopColor="#123e69" />
              </linearGradient>
            </defs>

            <g className="chart-grid">
              <line x1="120" y1="560" x2="1100" y2="560" />
              <line x1="120" y1="472" x2="1100" y2="472" />
              <line x1="120" y1="384" x2="1100" y2="384" />
              <line x1="120" y1="296" x2="1100" y2="296" />
              <line x1="120" y1="208" x2="1100" y2="208" />
              <line x1="120" y1="120" x2="1100" y2="120" />

              <line x1="120" y1="120" x2="120" y2="560" />
              <line x1="316" y1="120" x2="316" y2="560" />
              <line x1="512" y1="120" x2="512" y2="560" />
              <line x1="708" y1="120" x2="708" y2="560" />
              <line x1="904" y1="120" x2="904" y2="560" />
              <line x1="1100" y1="120" x2="1100" y2="560" />
            </g>

            <path
              className="chart-area"
              d="M120 540
                 C170 536, 210 532, 248 520
                 C286 504, 298 446, 316 430
                 C340 448, 366 470, 398 496
                 C430 514, 468 472, 512 458
                 C538 434, 548 344, 556 286
                 C568 332, 584 430, 616 404
                 C650 374, 666 208, 680 150
                 C690 206, 702 330, 716 280
                 C732 330, 744 386, 760 446
                 C778 470, 804 424, 832 438
                 C858 444, 878 378, 892 344
                 C906 402, 930 460, 962 440
                 C994 430, 1022 350, 1048 332
                 C1072 360, 1088 390, 1100 456
                 L1100 560 L120 560 Z"
            />

            <path
              className="chart-line"
              d="M120 540
                 C170 536, 210 532, 248 520
                 C286 504, 298 446, 316 430
                 C340 448, 366 470, 398 496
                 C430 514, 468 472, 512 458
                 C538 434, 548 344, 556 286
                 C568 332, 584 430, 616 404
                 C650 374, 666 208, 680 150
                 C690 206, 702 330, 716 280
                 C732 330, 744 386, 760 446
                 C778 470, 804 424, 832 438
                 C858 444, 878 378, 892 344
                 C906 402, 930 460, 962 440
                 C994 430, 1022 350, 1048 332
                 C1072 360, 1088 390, 1100 456"
            />

            <g className="chart-axis">
              <line x1="120" y1="120" x2="120" y2="560" />
              <line x1="120" y1="560" x2="1100" y2="560" />
            </g>

            <g className="chart-labels">
              <text x="110" y="530" className="y-label" transform="rotate(-90 110 530)">
                State Formation Progress
              </text>

              <text x="120" y="592">2009</text>
              <text x="316" y="592">2010</text>
              <text x="512" y="592">2011</text>
              <text x="708" y="592">2012</text>
              <text x="904" y="592">2013</text>
              <text x="560" y="638" className="x-label">Time</text>
            </g>

            <g className="chart-markers">
              <circle cx="316" cy="430" r="8" />
              <circle cx="556" cy="286" r="8" />
              <circle cx="680" cy="150" r="8" />
              <circle cx="892" cy="344" r="8" />
              <circle cx="1048" cy="332" r="8" />
            </g>
          </svg>

          <div className="callout callout-1">
            <div className="connector" />
            <p className="callout-title">Dec 2009: KCR&apos;s Foundation</p>
            <p className="callout-subtitle">(Leadership &amp; vision established)</p>
          </div>

          <div className="callout callout-2">
            <div className="connector" />
            <p className="callout-title">Mar 2011: Mass Mobilization</p>
            <p className="callout-subtitle">(Nationwide support for statehood)</p>
          </div>

          <div className="callout callout-3">
            <div className="connector" />
            <p className="callout-title">Sept-Oct 2011: State Declaration</p>
            <p className="callout-subtitle">(Constitutional framework and institutions launched)</p>
          </div>

          <div className="callout callout-4">
            <div className="connector" />
            <p className="callout-title">Mid 2012: Institution Building</p>
            <p className="callout-subtitle">(Governance and service delivery strengthened)</p>
          </div>

          <div className="callout callout-5">
            <div className="connector" />
            <p className="callout-title">June 2013: Consolidation</p>
            <p className="callout-subtitle">(State authority expanded; public trust grows)</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default StateFormation;
