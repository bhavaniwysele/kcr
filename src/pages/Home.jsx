import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import AchievementsSlider from '../components/AchievementsSlider';
import TimelineSection from '../components/TimelineSection';
import GallerySection from '../components/GallerySection';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="home-page">
      <Hero />
      <AchievementsSlider />
      <TimelineSection />
      <NewsSection />
      <GallerySection />
      {/* Additional sections can be added here */}
    </div>
  );
};

export default Home;
