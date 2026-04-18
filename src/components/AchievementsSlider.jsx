import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
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
    title: "Irrigation & Infrastructure",
    description: "Building world-class dams and irrigation networks like Kaleshwaram Project.",
    image: irrigation
  },
  {
    title: "Agriculture & Farmers",
    description: "Empowering farmers through Rythu Bandhu and 24x7 free electricity.",
    image: agriculture
  },
  {
    title: "Welfare Schemes",
    description: "Transforming lives through Aasara pensions and welfare-centric governance.",
    image: welfare
  },
  {
    title: "Health & Women Empowerment",
    description: "Championing healthcare with KCR Kit and robust medical infrastructure.",
    image: health
  },
  {
    title: "Economic Growth",
    description: "Driving TS-iPASS and making Telangana a global destination for investment.",
    image: economic
  },
  {
    title: "Culture & Heritage",
    description: "Restoring and celebrating the unique identity and festivals of Telangana.",
    image: culture
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
                    <button className="learn-more-btn">Learn More</button>
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
