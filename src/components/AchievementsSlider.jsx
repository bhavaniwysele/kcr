import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './AchievementsSlider.css';

// Importing images
import irrigation from '../assets/irrigation.jpg';
import agriculture from '../assets/agriculture.jpg';
import welfare from '../assets/welfareschemes.jpg';
import health from '../assets/healthandwelfare.webp';
import economic from '../assets/economicgrowth.jpeg';
import culture from '../assets/cultureNheritage.jpg';

const achievements = [
  {
    title: "State Formation & Leadership",
    description: "Leading the historic movement for Telangana statehood and visionary governance.",
    image: health, // Using health image for now as a placeholder for statehood if specific one doesn't exist
    slug: "statehood-leadership"
  },
  {
    title: "Irrigation & Infrastructure",
    description: "Building world-class dams and irrigation networks like Kaleshwaram Project.",
    image: irrigation,
    slug: "irrigation"
  },
  {
    title: "Agriculture Development",
    description: "Empowering farmers through Rythu Bandhu and 24x7 free electricity.",
    image: agriculture,
    slug: "agriculture"
  },
  {
    title: "Welfare Impact",
    description: "Transforming lives through Aasara pensions and welfare-centric governance.",
    image: welfare,
    slug: "welfare"
  },
  {
    title: "Economic Development",
    description: "Driving TS-iPASS and making Telangana a global destination for investment.",
    image: economic,
    slug: "economic"
  },
  {
    title: "Cultural Revival",
    description: "Restoring and celebrating the unique identity and festivals of Telangana.",
    image: culture,
    slug: "culture"
  }
];

const AchievementsSlider = () => {
  return (
    <section className="achievements-section">
      <div className="section-header">
        <h4 className="subtitle">Milestones</h4>
        <h2 className="title">Major <span>Achievements</span></h2>
      </div>
      
      <div className="slider-container">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4, spaceBetween: 40 },
            1920: { slidesPerView: 5, spaceBetween: 50 },
          }}
          className="achievement-swiper"
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="achievement-modern-card">
                <div className="card-image-wrap">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-content-wrap">
                  <div className="content-inner">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`/achievements/${item.slug}`} className="learn-more-btn">Learn More</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AchievementsSlider;
