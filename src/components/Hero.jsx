import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

import slide2HeroArtwork from '../assets/slide2_hero.png';
import slide3Artwork from '../assets/slide3.png';
import slide4Artwork from '../assets/slide4edited.png';
import slide5Artwork from '../assets/slide5edited.png';
import slide6Artwork from '../assets/slide6edited.png';
import slide7Artwork from '../assets/slide7.png';
import slide8Artwork from '../assets/slide8.png';

const ARTWORK_WIDTH = 1672;
const ARTWORK_HEIGHT = 941;

const HERO_SWAP_MS = 480;

/* ——————————————————————————————————————————
   Hero A — existing artwork carousel
   —————————————————————————————————————————— */
const HeroA = ({ onThemeChange }) => {
  const slides = [
    {
      id: 1,
      variant: 'artwork',
      image: slide2HeroArtwork,
      alt: 'From Struggle to Statehood — the Telangana movement journey',
      bgColor: '#1a0a10',
      heroTheme: 'dark',
      artworkFill: true,
      artworkFitHero: true,
      artworkPosition: 'center 60%',
      artworkFit: 'cover',
    },
    {
      id: 4,
      variant: 'artwork',
      image: slide3Artwork,
      alt: 'Building Tomorrow, Today — infrastructure and opportunity for Telangana',
      bgColor: '#f8f4f6',
      heroTheme: 'light',
      artworkFill: true,
      artworkFitHero: true,
      artworkPosition: 'center 38%',
      artworkFit: 'cover',
    },
    {
      id: 5,
      variant: 'artwork',
      image: slide4Artwork,
      alt: 'A State on the Rise — infrastructure, investment and growth for Telangana',
      bgColor: '#f8f4f6',
      heroTheme: 'light',
      artworkFill: true,
      artworkFitHero: true,
      artworkPosition: 'center center',
      artworkFit: 'contain',
    },
    {
      id: 6,
      variant: 'artwork',
      image: slide5Artwork,
      alt: 'Fields That Feed Telangana — Agriculture, water and rural growth',
      bgColor: '#fdf9f5',
      heroTheme: 'light',
      artworkFill: true,
      artworkFitHero: true,
      artworkPosition: 'center center',
      artworkFit: 'contain',
    },
    {
      id: 7,
      variant: 'artwork',
      image: slide6Artwork,
      alt: 'Opportunities Today, Success Tomorrow — Youth, innovation, employment and progress for Telangana',
      bgColor: '#e8eff5',
      heroTheme: 'light',
      artworkFill: true,
      artworkFitHero: true,
      artworkPosition: 'center center',
      artworkFit: 'contain',
    },
    {
      id: 8,
      variant: 'artwork',
      image: slide7Artwork,
      alt: 'Empowered Women, Stronger Telangana — Women, dignity, empowerment and progress for Telangana',
      bgColor: '#fdf4f6',
      heroTheme: 'light',
      artworkFill: true,
      artworkFitHero: true,
      artworkPosition: 'center center',
      artworkFit: 'contain',
    },
    {
      id: 9,
      variant: 'artwork',
      image: slide8Artwork,
      alt: 'Rooted in Culture, United in Pride — Telangana culture, heritage, festivals and progress',
      bgColor: '#fbf9fa',
      heroTheme: 'light',
      artworkFill: true,
      artworkFitHero: true,
      artworkPosition: 'center center',
      artworkFit: 'contain',
    },
  ];

  const handleSlideTheme = (swiper) => {
    const active = slides[swiper.realIndex];
    onThemeChange?.(active?.heroTheme || 'light');
  };

  const handleSwiperInit = (swiper) => {
    if (swiper.params.loop) {
      swiper.slideToLoop(0, 0);
    } else {
      swiper.slideTo(0, 0);
    }
    handleSlideTheme(swiper);
  };

  return (
    <Swiper
      modules={[Autoplay, EffectCreative, Pagination, Navigation]}
      effect="creative"
      speed={1500}
      creativeEffect={{
        prev: {
          translate: ['-20%', 0, 0],
          opacity: 0,
        },
        next: {
          translate: ['100%', 0, 0],
          scale: 0.98,
          shadow: true,
        },
      }}
      initialSlide={0}
      autoplay={{
        delay: 5200,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true, el: '.hero-swiper-pagination' }}
      navigation={{
        nextEl: '.hero-button-next',
        prevEl: '.hero-button-prev',
      }}
      loop={true}
      className="hero-swiper"
      onSwiper={handleSwiperInit}
      onSlideChange={handleSlideTheme}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="hero-slide-content hero-slide-content--artwork"
            style={{ backgroundColor: slide.bgColor || 'transparent' }}
          >
            <div className="hero-bg hero-bg--artwork">
              <div
                className={`hero-artwork-frame${slide.artworkFill ? ' hero-artwork-frame--fill' : ''}${slide.artworkFitHero ? ' hero-artwork-frame--hero-fit' : ''}`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt || 'Hero slide background'}
                  className={`hero-img hero-img--artwork${slide.artworkFill ? ' hero-img--artwork--fill' : ''}${slide.artworkFitHero ? ' hero-img--artwork--hero-fit' : ''}`}
                  width={ARTWORK_WIDTH}
                  height={ARTWORK_HEIGHT}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  style={
                    slide.artworkPosition || slide.artworkFit
                      ? {
                          '--artwork-pos': slide.artworkPosition || 'center center',
                          '--artwork-fit': slide.artworkFit || 'cover',
                        }
                      : undefined
                  }
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="hero-carousel-line" role="group" aria-label="Featured slides">
        <div className="hero-button-prev" />
        <div className="hero-swiper-pagination" />
        <div className="hero-button-next" />
      </div>
    </Swiper>
  );
};

/* ——————————————————————————————————————————
   Hero B — empty placeholder (fill later)
   —————————————————————————————————————————— */
const HeroB = ({ onThemeChange }) => {
  // Reports a neutral theme so the outer section background matches.
  useEffect(() => {
    onThemeChange?.('light');
  }, [onThemeChange]);

  return (
    <div className="hero-b-placeholder" role="presentation">
      <div className="hero-b-placeholder__inner">
        <p className="hero-b-placeholder__eyebrow">Hero B</p>
        <h2 className="hero-b-placeholder__title">Second hero coming soon</h2>
        <p className="hero-b-placeholder__desc">
          This is the placeholder for the second hero section. Replace the contents of
          <code> &lt;HeroB /&gt; </code> in <code>src/components/Hero.jsx</code>.
        </p>
      </div>
    </div>
  );
};

/* ——————————————————————————————————————————
   Hero (switcher) — wraps both heroes & animates between them
   —————————————————————————————————————————— */
const Hero = () => {
  const [heroTheme, setHeroTheme] = useState('dark');
  const [view, setView] = useState('A'); // 'A' | 'B'
  const [displayedView, setDisplayedView] = useState('A');

  const isAnimating = view !== displayedView;
  const isHeroBActive = displayedView === 'B';

  // Resolve target view to either an explicit value or a toggle.
  const resolveTarget = (next) => {
    if (next === 'A' || next === 'B') return next;
    return view === 'A' ? 'B' : 'A';
  };

  const switchView = (next) => {
    const target = resolveTarget(next);
    if (target === view) return;
    setView(target);
  };

  // Listen for external trigger so any button anywhere can flip the hero:
  //   window.dispatchEvent(new CustomEvent('hero:switch'))                // toggle
  //   window.dispatchEvent(new CustomEvent('hero:switch', { detail: 'B' })) // jump to B
  useEffect(() => {
    const onSwitch = (e) => switchView(e?.detail);
    window.addEventListener('hero:switch', onSwitch);
    return () => window.removeEventListener('hero:switch', onSwitch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  // Dev keyboard shortcut: Ctrl/Cmd + Shift + H to toggle between heroes.
  useEffect(() => {
    const onKey = (e) => {
      const metaOrCtrl = e.metaKey || e.ctrlKey;
      if (metaOrCtrl && e.shiftKey && (e.key === 'H' || e.key === 'h')) {
        e.preventDefault();
        switchView();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  // Swap the displayed view after the exit animation finishes.
  useEffect(() => {
    if (view === displayedView) return undefined;
    const t = window.setTimeout(() => setDisplayedView(view), HERO_SWAP_MS);
    return () => window.clearTimeout(t);
  }, [view, displayedView]);

  return (
    <section
      className={`hero-section hero-section--switcher${isHeroBActive ? ' hero-section--b' : ''}`}
      data-hero-theme={heroTheme}
    >
      <div
        key={displayedView}
        className={`hero-view hero-view--${displayedView}${isAnimating ? ' is-exiting' : ''}`}
      >
        {displayedView === 'A' ? (
          <HeroA onThemeChange={setHeroTheme} />
        ) : (
          <HeroB onThemeChange={setHeroTheme} />
        )}
      </div>

      {/* Temporary visible toggle so you can see the swap.
          Remove this block (or restyle/move it) once you wire your own buttons. */}
      <div className="hero-switch-toggle" role="tablist" aria-label="Hero variant">
        <button
          type="button"
          role="tab"
          aria-selected={view === 'A'}
          className={`hero-switch-toggle__btn${view === 'A' ? ' is-active' : ''}`}
          onClick={() => switchView('A')}
        >
          Hero 1
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={view === 'B'}
          className={`hero-switch-toggle__btn${view === 'B' ? ' is-active' : ''}`}
          onClick={() => switchView('B')}
        >
          Hero 2
        </button>
      </div>
    </section>
  );
};

export default Hero;
