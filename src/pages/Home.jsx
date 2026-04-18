import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import AchievementsSlider from '../components/AchievementsSlider';
import TimelineSection from '../components/TimelineSection';

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
      <AboutSection />
      <AchievementsSlider />
      <TimelineSection />
      {/* Additional sections can be added here */}
    </div>
  );
};

export default Home;
