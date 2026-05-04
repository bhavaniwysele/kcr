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
import BorderGlow from './BorderGlow';

import heroBackground from '../assets/background.png';
import sliding2Img from '../assets/sliding2_img.png';
import backgroundSliding2 from '../assets/background_sliding2.png';
import personCutout from '../assets/final_landing-removebg-preview.png';
import sliding2Person from '../assets/slide2_mainimg_final-removebg-preview.png';
import slide3Person from '../assets/slide3_removebg.png';
import backgroundSlide3 from '../assets/slide3_bg.jpg';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: heroBackground,
      personImage: personCutout,
      lines: ["Visionary Leadership", "For a Progressive", "Telangana"],
      subtitle: "Driving growth, welfare, and innovation for every citizen across the state.",
      align: 'left',
      position: 'center 10%',
      personDuration: 3.5, // Slower person entrance
      overlay: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 45%, transparent 90%)' // Lightened Black for Slide 1
    },
    {
      id: 2,
      image: backgroundSliding2,
      personImage: sliding2Person,
      lines: ["For the People", "For the Future"],
      subtitle: "Committed to inclusive development and the welfare of every community.",
      align: 'left',
      position: 'center 10%',
      personDuration: 3.5, // Slower person entrance
      subtitleDelay: 1.2,    // Delayed subtitle for better pacing
      overlay: 'linear-gradient(to right, rgba(45, 10, 26, 0.7) 0%, rgba(45, 10, 26, 0.3) 45%, transparent 90%)' // Lightened Pink for Slide 2
    },
    {
      id: 3,
      image: backgroundSlide3, // Applied new background image
      bgColor: '#5d1a33', // Keeping as fallback
      personImage: slide3Person,
      lines: ["Building Telangana", "Stronger Every Day"],
      subtitle: "Transforming lives through bold initiatives and sustainable development programs.",
      align: 'left',
      position: 'center center',
      personDuration: 3.5,
      subtitleDelay: 1.0,
      personRight: '8%', // Shifting left to avoid overlapping arrow
      overlay: 'linear-gradient(to right, rgba(93, 26, 51, 0.85) 0%, rgba(93, 26, 51, 0.4) 45%, transparent 90%)' // Transparent gradient to show background image
    }
  ];

  return (
    <section className="hero-section">
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
                    <div className="hero-overlay" style={{ background: slide.overlay }}></div>
                  </div>
                  
                  <AnimatePresence>
                    {isActive && slide.personImage && (
                      <motion.img 
                        key={`hero-person-${slide.id}`}
                        src={slide.personImage} 
                        alt="Portrait" 
                        className="hero-person-img"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ 
                          duration: slide.personDuration || 1.5, 
                          delay: 0.2, 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        style={{ right: slide.personRight || 0 }}
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
                                    duration: 2.2,
                                    delay: lIndex * 0.2 + 0.1,
                                    ease: [0.22, 1, 0.36, 1]
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
                              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                              transition={{ duration: 1.8, delay: slide.subtitleDelay || 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                              {slide.subtitle}
                            </motion.p>
                            <motion.div 
                              className="hero-quick-links-inline"
                              initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
                              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                              transition={{ duration: 1.8, delay: (slide.subtitleDelay || 0.8) + 0.2, ease: [0.22, 1, 0.36, 1] }}
                            >
                             <BorderGlow
                                edgeSensitivity={20}
                                glowColor="340 100 80"
                                backgroundColor="rgba(255, 255, 255, 0.15)"
                                borderRadius={12}
                                glowRadius={50}
                                glowIntensity={1.2}
                                coneSpread={30}
                                animated={false}
                                colors={['#ff4d94', '#ff7eb3', '#ff0066']}
                                className="quick-link-glow-wrapper"
                              >
                                <Link 
                                  to="/news-media" 
                                  className="quick-link-card"
                                >
                                  <div className="card-content">
                                    <h3 className="card-title">Our Events <span className="card-arrow">→</span></h3>
                                  </div>
                                </Link>
                              </BorderGlow>
                              
                              <BorderGlow
                                edgeSensitivity={20}
                                glowColor="340 100 80"
                                backgroundColor="rgba(255, 255, 255, 0.15)"
                                borderRadius={12}
                                glowRadius={50}
                                glowIntensity={1.2}
                                coneSpread={30}
                                animated={false}
                                colors={['#ff4d94', '#ff7eb3', '#ff0066']}
                                className="quick-link-glow-wrapper"
                              >
                                <Link 
                                  to="/contact" 
                                  className="quick-link-card"
                                >
                                  <div className="card-content">
                                    <h3 className="card-title">Contact Us <span className="card-arrow">→</span></h3>
                                  </div>
                                </Link>
                              </BorderGlow>
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
