import React, { useEffect, useRef, useState } from 'react';
import './CulturalRevival.css';
import culturalRevivalHero from '../../assets/cultural_revival_herosection.png';
import bathkamma from '../../assets/bathkamma.jpg';
import bonalu from '../../assets/bonalu.jpg';
import sammakkaSaralammaJatara from '../../assets/Sammakka Saralamma Jatara.jpg';
import telanganaFolkCelebrations from '../../assets/Telangana Folk Celebrations1.jpg';
import traditionalDanceMusicOne from '../../assets/Traditional Dance & Music.jpg';
import traditionalDanceMusicTwo from '../../assets/Traditional Dance & Music2.jpg';

const CulturalRevival = () => {
  const heroTitle = 'CULTURAL REVIVAL';
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([false, false, false, false]);
  const [activeFestivalIndex, setActiveFestivalIndex] = useState(0);

  useEffect(() => {
    const elements = itemRefs.current.filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.dataset.index);
          setVisibleItems((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  const highlights = [
    {
      icon: '◈',
      title: 'Pride in Our Roots',
      description:
        'Rediscovering our history, traditions, and way of life through folk arts, native knowledge, community rituals, and stories passed across generations.'
    },
    {
      icon: '✿',
      title: 'Celebrating Our Festivals',
      description:
        'Bathukamma, Bonalu, and countless community festivals that bring families together, strengthen social bonds, and keep Telangana’s collective spirit vibrant.'
    },
    {
      icon: 'తె',
      title: 'Telangana Language & Dialect',
      description:
        'Promoting our language, literature, and local expressions through education, storytelling, creative arts, and everyday pride in Telangana’s voice.'
    },
    {
      icon: '⌂',
      title: 'Preserving Our Heritage',
      description:
        'Protecting our cultural heritage, arts, crafts, and historic sites by supporting artisans, conserving monuments, and passing traditional skills to future generations.'
    }
  ];

  const festivalSlides = [
    { title: 'Bathukamma', image: bathkamma },
    { title: 'Bonalu', image: bonalu },
    { title: 'Sammakka Saralamma Jatara', image: sammakkaSaralammaJatara },
    { title: 'Telangana Folk Celebrations', image: telanganaFolkCelebrations },
    { title: 'Traditional Dance & Music', image: traditionalDanceMusicOne },
    { title: 'Traditional Dance & Music', image: traditionalDanceMusicTwo }
  ];

  const heritageTourismCards = [
    {
      title: 'Bonalu Festival',
      description:
        'A vibrant celebration of devotion and tradition that reflects Telangana’s spiritual and cultural roots.',
      image: bonalu
    },
    {
      title: 'Bathukamma Festival',
      description:
        'Telangana’s iconic floral festival celebrating womanhood, unity, and the cultural spirit of the region.',
      image: bathkamma,
      featured: true
    },
    {
      title: 'Folk Arts & Traditions',
      description:
        'Traditional music, dance, and folk performances continue to preserve Telangana’s artistic heritage.',
      image: traditionalDanceMusicOne
    }
  ];

  const showPrevFestival = () => {
    setActiveFestivalIndex((prev) => (prev - 1 + festivalSlides.length) % festivalSlides.length);
  };

  const showNextFestival = () => {
    setActiveFestivalIndex((prev) => (prev + 1) % festivalSlides.length);
  };

  const getFestivalPosition = (index) => {
    const total = festivalSlides.length;
    let offset = index - activeFestivalIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <div className="cultural-revival-page">
      <section
        className="cultural-revival-hero"
        aria-label="Cultural Revival hero"
        style={{ backgroundImage: `url(${culturalRevivalHero})` }}
      >
        <h1 className="cultural-revival-hero-title">
          {heroTitle.split('').map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={`hero-letter ${char === ' ' ? 'hero-letter-space' : ''}`}
              style={{ '--letter-delay': `${index * 0.08}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        <p className="cultural-revival-hero-subtitle">
          Honoring traditions, preserving heritage, and inspiring pride in Telangana&apos;s identity.
        </p>
      </section>

      <section className="cultural-revival-identity" aria-label="Cultural revival highlights">
        <div className="identity-layout">
          <div className="identity-left-panel">
            <p className="identity-tag">WAY TO SUCCESS</p>
            <h2 className="identity-title">Cultural revival</h2>
            <p className="identity-description">
              The formation of Telangana sparked renewed pride in roots, language, festivals, and heritage. Each
              effort strengthens belonging and carries our cultural identity to future generations.
            </p>
          </div>

          <div className="identity-right-panel">
            <div className="identity-timeline-line" aria-hidden="true" />
            {highlights.map((item, index) => (
              <article
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-index={index}
                className={`identity-timeline-item ${visibleItems[index] ? 'is-visible' : ''}`}
                style={{ '--pop-delay': `${index * 0.08}s` }}
              >
                <div className="identity-icon-wrap" aria-hidden="true">
                  <span className="identity-icon">{item.icon}</span>
                </div>
                <div className="identity-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cultural-revival-festival-slider" aria-label="Telangana cultural festivals gallery">
        <div className="festival-slider-head">
          <p className="festival-slider-tag">CULTURAL CELEBRATIONS</p>
          <h2 className="festival-slider-title">Festivals and Folk Traditions</h2>
        </div>

        <div className="festival-carousel">
          <button type="button" className="festival-nav festival-nav-left" aria-label="Previous slide" onClick={showPrevFestival}>
            &#8592;
          </button>

          <div className="festival-slider-window">
            {festivalSlides.map((slide, index) => {
              const position = getFestivalPosition(index);
              const positionClass =
                position === 0
                  ? 'is-active'
                  : position === -1
                    ? 'is-prev'
                    : position === 1
                      ? 'is-next'
                      : position < -1
                        ? 'is-hidden-left'
                        : 'is-hidden-right';

              return (
                <article className={`festival-slide-card ${positionClass}`} key={`${slide.title}-${index}`}>
                  <div className="festival-slide-image-wrap">
                    <img src={slide.image} alt={slide.title} className="festival-slide-image" loading="lazy" />
                  </div>
                  <div className="festival-slide-meta">
                    <h3>{slide.title}</h3>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <button type="button" className="festival-nav festival-nav-right" aria-label="Next slide" onClick={showNextFestival}>
            &#8594;
          </button>
        </div>
      </section>

      <section className="heritage-tourism-growth" aria-label="Heritage and tourism growth">
        <div className="heritage-tourism-head">
          <p className="heritage-tourism-tag">HERITAGE & TOURISM GROWTH</p>
          <h2 className="heritage-tourism-title">Boosting Telangana Through Cultural Tourism</h2>
        </div>

        <div className="heritage-tourism-grid">
          {heritageTourismCards.map((card, index) => (
            <article
              key={card.title}
              className={`heritage-tourism-card ${card.featured ? 'heritage-tourism-card-featured' : ''}`}
              style={{ '--card-delay': `${index * 0.08}s` }}
            >
              <div className="heritage-tourism-image-wrap">
                <img src={card.image} alt={card.title} className="heritage-tourism-image" loading="lazy" />
              </div>
              <div className="heritage-tourism-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CulturalRevival;
