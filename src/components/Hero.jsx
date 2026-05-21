import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

import slide2HeroArtwork from '../assets/slide2_hero.png';
import slide3Artwork from '../assets/slide3.png';
import slide4Artwork from '../assets/slide4edited.png';

/** Native dimensions of full artwork slides — drives hero aspect metadata */
const ARTWORK_WIDTH = 1672;
const ARTWORK_HEIGHT = 941;
const Hero = () => {
  const [heroTheme, setHeroTheme] = useState('dark');

  const slides = [
    {
      id: 1,
      variant: 'artwork',
      image: slide2HeroArtwork,
      alt: 'From Struggle to Statehood — the Telangana movement journey',
      bgColor: '#1a0a10',
      heroTheme: 'dark',
      artworkFill: true,
      artworkPosition: 'center 60%',
    },
    {
      id: 4,
      variant: 'artwork',
      image: slide3Artwork,
      alt: 'Building Tomorrow, Today — infrastructure and opportunity for Telangana',
      bgColor: '#f8f4f6',
      heroTheme: 'light',
      artworkFill: true,
      artworkPosition: 'center 38%',
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
    },
  ];

  const handleSlideTheme = (swiper) => {
    const active = slides[swiper.realIndex];
    setHeroTheme(active?.heroTheme || 'light');
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
    <section className="hero-section" data-hero-theme={heroTheme}>
      <Swiper
        modules={[Autoplay, EffectCreative, Pagination, Navigation]}
        effect="creative"
        speed={1500} /* Ultra smooth slow transition */
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
        loopAdditionalSlides={1}
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
                      slide.artworkPosition
                        ? { objectPosition: slide.artworkPosition }
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
    </section>
  );
};

export default Hero;
