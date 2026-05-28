import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

import slide2HeroArtwork from '../assets/slide2_hero.png';
import slide4Artwork from '../assets/slide4edited.png';
import slide5Artwork from '../assets/slide5edited.png';
import slide6Artwork from '../assets/slide6edited.png';
import slide7Artwork from '../assets/slide7.png';

const ARTWORK_WIDTH = 1672;
const ARTWORK_HEIGHT = 941;

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
    artworkPosition: 'center top',
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
];

const Hero = () => {
  const [heroTheme, setHeroTheme] = useState('dark');

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
    </section>
  );
};

export default Hero;
