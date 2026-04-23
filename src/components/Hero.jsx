import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

import heroBackground from '../assets/background.png';
import sliding2Img from '../assets/sliding2_img.png';
import personCutout from '../assets/landinpage_extended-removebg.png';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: heroBackground,
      lines: ["SHAPING THE", "FUTURE OF", "TELANGANA"],
      subtitle: "Delivering progress through strong leadership and visionary governance.",
      align: 'left',
      position: 'center 15%'
    },
    {
      id: 2,
      image: sliding2Img,
      lines: ["EMPOWERING", "EVERY WOMAN", "ACROSS THE STATE"],
      subtitle: "Upholding dignity and prosperity through transformative social welfare.",
      align: 'left',
      position: 'right bottom',
      width: '45%', // Decreased size as requested
      height: '80%',
      fit: 'contain',
      bgColor: '#4a3131' // Matches the brownish background of the image
    }
  ];

  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectCreative, Pagination, Navigation]}
        effect="creative"
        speed={1000}
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
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.hero-button-next',
          prevEl: '.hero-button-prev',
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => {
              if (isActive) console.log(`[Antigravity] Hero Slide ${slide.id} is active`);
              
              return (
                <div className="hero-slide-content" style={{ backgroundColor: slide.bgColor || 'transparent' }}>
                  <div className="hero-bg">
                  {slide.image && (
                    <img 
                      src={slide.image} 
                      alt="Background" 
                      className="hero-img" 
                      style={{ 
                        objectPosition: slide.position,
                        width: slide.width || '100%',
                        height: slide.height || '100%',
                        objectFit: slide.fit || 'cover',
                        position: 'absolute',
                        right: slide.position?.includes('right') ? 0 : 'auto',
                        bottom: slide.position?.includes('bottom') ? 0 : 'auto',
                        left: slide.position?.includes('left') ? 0 : (slide.position?.includes('right') ? 'auto' : 0),
                        top: slide.position?.includes('top') ? 0 : (slide.position?.includes('bottom') ? 'auto' : 0),
                      }}
                    />
                  )}
                    <div className="hero-overlay"></div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && slide.id === 1 && (
                      <motion.img 
                        key="hero-person-img"
                        src={personCutout} 
                        alt="KCR" 
                        className="hero-person-img"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <div className={`hero-container ${slide.align === 'right' ? 'content-right' : ''}`}>
                    <div className={`hero-content ${slide.align === 'right' ? 'content-right' : ''}`}>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div 
                            key={`content-${slide.id}`}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <h1 className="hero-title">
                              {slide.lines.map((line, lIndex) => (
                                <motion.span
                                  key={lIndex}
                                  className="hero-title-line"
                                  initial={{ 
                                    opacity: 0, 
                                    x: -80,
                                    letterSpacing: "-15px",
                                    filter: "blur(4px)" 
                                  }}
                                  animate={{ 
                                    opacity: 1, 
                                    x: 0,
                                    letterSpacing: "0px",
                                    filter: "blur(0px)" 
                                  }}
                                  transition={{ 
                                    duration: 1.2,
                                    delay: lIndex * 0.2 + 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                  }}
                                >
                                  {line === "FUTURE OF" || line === "EVERY WOMAN" || (line === "TELANGANA" && slide.id === 3) ? (
                                    <span className="accent-text">{line}</span>
                                  ) : (
                                    line
                                  )}
                                </motion.span>
                              ))}
                            </h1>
                            <motion.p 
                              className="hero-subtitle"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                            >
                              {slide.subtitle}
                            </motion.p>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
                            >
                              <Link to="/about" className="hero-btn">
                                <span>EXPLORE JOURNEY</span>
                                <svg viewBox="0 0 200 60">
                                  <rect x="0" y="0" width="200" height="60" rx="30" ry="30" />
                                </svg>
                              </Link>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            }}
          </SwiperSlide>
        ))}
        <div className="hero-button-prev"></div>
        <div className="hero-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Hero;
