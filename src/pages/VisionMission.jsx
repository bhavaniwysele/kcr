import React, { useEffect, useRef, useState } from 'react';
import './VisionMission.css';
import welcomeImage from '../assets/kcr_vNm.png';

const VisionMission = () => {
  const services = [
    {
      title: 'Farmer Welfare',
      description: 'Expanding direct support, crop security, and market access for farming families.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      )
    },
    {
      title: 'Industrial Growth',
      description: 'Strengthening MSMEs and attracting new investments to generate quality employment.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      )
    },
    {
      title: 'Education Access',
      description: 'Improving schools, digital learning opportunities, and student success outcomes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      )
    },
    {
      title: 'Healthcare Support',
      description: 'Ensuring affordable healthcare, maternal care, and stronger public health systems.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      )
    },
    {
      title: 'Women & Youth',
      description: 'Building leadership and livelihood pathways through skilling and entrepreneurship.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      title: 'Digital Governance',
      description: 'Delivering transparent, citizen-first online services with faster grievance resolution.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      )
    },
  ];

  const impactStats = [
    { 
      value: '12+', 
      label: 'YEARS OF EXPERIENCE',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    },
    { 
      value: '999+', 
      label: 'COMPLETED PROJECTS',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    },
    { 
      value: '480+', 
      label: 'TOTAL CLIENTS',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    { 
      value: '15+', 
      label: 'AWARD WON',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
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
      title: 'Empowering Farmers',
      subtitle: 'Input support, irrigation confidence, and market linkage for stronger incomes.',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/11445244/pexels-photo-11445244.jpeg',
      title: 'Education & Growth',
      subtitle: 'Advancing quality education, digital access, and equal opportunities.',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [isDisplayedImageReady, setIsDisplayedImageReady] = useState(false);
  const slideRequestRef = useRef(0);

  const observerRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
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
        } catch (_err) { }
        setLoadedImages((prev) => ({ ...prev, [url]: true }));
        resolve();
      };
      img.onerror = () => resolve();
    });
  };

  const goToSlide = async (index) => {
    const nextIndex = (index + slides.length) % slides.length;
    const nextImage = slides[nextIndex].image;
    const requestId = slideRequestRef.current + 1;
    slideRequestRef.current = requestId;

    await ensureImageReady(nextImage);

    if (slideRequestRef.current === requestId) {
      setIsDisplayedImageReady(false);
      setActiveSlide(nextIndex);
    }
  };

  const goToPrevSlide = () => goToSlide(activeSlide - 1);
  const goToNextSlide = () => goToSlide(activeSlide + 1);

  useEffect(() => {
    ensureImageReady(slides[0].image).then(() => setIsHeroReady(true));
    slides.forEach((slide) => {
      if (!loadedImages[slide.image]) ensureImageReady(slide.image);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isHeroReady) return undefined;
    const intervalId = setInterval(() => goToSlide(activeSlide + 1), 6800);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide, isHeroReady]);

  return (
    <div className="vision-mission-page">
      {/* Hero Section */}
      <section className={`vision-mission-hero ${isHeroReady ? 'is-ready' : 'is-loading'}`}>
        <img
          key={slides[activeSlide].id}
          src={slides[activeSlide].image}
          alt={slides[activeSlide].title}
          className="vision-hero-bg-image"
          onLoad={() => setIsDisplayedImageReady(true)}
        />
        <button type="button" className="vision-hero-arrow vision-hero-arrow-left" onClick={goToPrevSlide} aria-label="Previous slide">❮</button>

        <div className={`vision-hero-content ${isDisplayedImageReady ? 'is-visible' : 'is-hidden'}`}>
          <h1 className="hero-title">{slides[activeSlide].title}</h1>
          <p className="hero-subtitle">{slides[activeSlide].subtitle}</p>
        </div>

        <div className="vision-hero-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`vision-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button type="button" className="vision-hero-arrow vision-hero-arrow-right" onClick={goToNextSlide} aria-label="Next slide">❯</button>
      </section>

      {/* Welcome Section */}
      <section className="vm-welcome-section" ref={addToRefs}>
        <div className="vm-welcome-inner anim-fade-up">
          <div className="vm-welcome-content">
            <h2>Our Vision</h2>
            <div className="vm-divider"></div>
            <p>
              Under KCR&apos;s leadership, Telangana has advanced through innovation, welfare,
              and infrastructure-led growth. From farmer support and industrial expansion to
              better education and healthcare, the vision of Bangaru Telangana focuses on
              inclusive progress and measurable outcomes for every community.
            </p>
          </div>
          <div className="vm-welcome-image-wrap">
            <img src={welcomeImage} alt="KCR vision and mission" className="vm-welcome-image" />
          </div>
        </div>
      </section>

      {/* 3 Column Focus Section */}
      <section className="vision-focus-section" ref={addToRefs}>
        <div className="vision-focus-container">
          {focusCards.map((card, index) => {
            let animClass = 'anim-fade-up';
            if (index === 0) animClass = 'anim-slide-left';
            if (index === 2) animClass = 'anim-slide-right';

            return (
            <div key={card.id} className={`vision-focus-wrapper ${animClass}`} style={{transitionDelay: `${index * 0.2}s`}}>
              <article className={`vision-focus-card ${card.theme}`}>
                <div className="vision-focus-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="vm-services-section" ref={addToRefs}>
        <div className="vm-services-inner">
          <div className="anim-fade-up">
            <h2>Priority Development Sectors</h2>
            <div className="vm-divider"></div>
            <p className="services-subtitle">
            Focused policy pillars for inclusive growth, stronger public systems, and
            measurable progress across Telangana.
            </p>
          </div>
          
          <div className="vm-services-grid">
            {services.map((service, index) => {
              let animClass = 'anim-fade-up';
              if (index % 3 === 0) animClass = 'anim-slide-left';
              if (index % 3 === 2) animClass = 'anim-slide-right';

              return (
              <div key={index} className={animClass} style={{transitionDelay: `${(index % 3) * 0.2}s`}}>
                <div className="vm-service-item">
                  <div className="vm-service-icon-wrap" aria-hidden="true">
                    <span className="vm-service-icon">{service.icon}</span>
                  </div>
                  <div className="vm-service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="vm-stats-strip" ref={addToRefs}>
        <div className="vm-stats-grid">
          {impactStats.map((stat, index) => (
            <article key={stat.label} className="vm-stat-card anim-fade-up" style={{transitionDelay: `${index * 0.2}s`}}>
              <div className="stat-icon">{stat.icon}</div>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
