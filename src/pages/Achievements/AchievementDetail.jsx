import React from 'react';
import { useParams } from 'react-router-dom';

const AchievementDetail = () => {
  const { category } = useParams();
  
  const content = {
    irrigation: {
      title: "Irrigation & Infrastructure",
      description: "Building world-class dams and irrigation networks like the Kaleshwaram Project, transforming the landscape of Telangana."
    },
    agriculture: {
      title: "Agriculture & Farmers",
      description: "Revolutionizing agriculture through schemes like Rythu Bandhu, providing 24x7 free electricity, and ensuring irrigation for every acre."
    },
    welfare: {
      title: "Welfare Schemes",
      description: "Touching every life through Aasara pensions, Kalyana Lakshmi, Shadi Mubarak, and various other welfare-centric initiatives."
    },
    health: {
      title: "Health & Women Empowerment",
      description: "Strengthening healthcare with KCR Kits, Basti Dawakhanas, and advanced medical infrastructure across the state."
    },
    economic: {
      title: "Economic Growth",
      description: "Driving unprecedented economic growth through TS-iPASS, making Telangana a destination of choice for global industries."
    },
    culture: {
      title: "Culture & Heritage",
      description: "Restoring the glory of Telangana's culture, heritage, and festivals like Bathukamma and Bonalu to the global stage."
    }
  };

  const item = content[category] || { title: "Achievement", description: "Details coming soon..." };

  return (
    <div className="achievement-detail-page" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '60vh' }}>
      <h1 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>{item.title}</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text)' }}>
        {item.description}
      </p>
      {/* You can add more detailed content, images, etc. here */}
    </div>
  );
};

export default AchievementDetail;
