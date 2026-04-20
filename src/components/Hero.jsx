import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css';

import heroImage1 from '../assets/landingpageimg1.jpeg';
import heroImage2 from '../assets/landingpageimg2.webp';
import heroImage3 from '../assets/kaleshwaram5.jpg';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: heroImage1,
      title: <>Shaping the <br /> <span>Future of</span> <br /> Telangana</>,
      subtitle: "Delivering progress through strong leadership and visionary governance.",
      align: 'left',
      position: 'right top' /* Shift top to prevent heads from cutting off */
    },
    {
      id: 2,
      image: heroImage2,
      title: <>Empowering <br /> <span>Every Woman</span> <br /> Every Home</>,
      subtitle: "Transforming lives through dedicated welfare and inclusive development for a brighter future.",
      align: 'right',
      position: 'left top' /* Shift top to prevent heads from cutting off */
    },
    {
      id: 3,
      image: heroImage3,
      title: <>Lifeline of <br /> <span>Telangana</span> <br /> Kaleshwaram</>,
      subtitle: "Securing the future of agriculture with the world's largest multi-stage lift irrigation project.",
      align: 'left',
      position: 'center center' /* Balanced for infrastructure */
    }
  ];

  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.hero-button-next',
          prevEl: '.hero-button-prev',
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide-content">
              <div className="hero-bg">
                <img 
                  src={slide.image} 
                  alt="KCR Leadership" 
                  className="hero-img" 
                  style={{ objectPosition: slide.position }}
                />
                <div className="hero-overlay"></div>
              </div>
              
              <div className="hero-container">
                <div className={`hero-content ${slide.align === 'right' ? 'content-right' : ''}`}>
                  <h1 className="hero-title">
                    {slide.title}
                  </h1>
                  <p className="hero-subtitle">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Manual Navigation Buttons */}
        <div className="hero-button-prev"></div>
        <div className="hero-button-next"></div>
      </Swiper>
    </section>
  );
};

export default Hero;
