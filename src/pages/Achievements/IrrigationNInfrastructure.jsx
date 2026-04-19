import React from 'react';
import { useParams } from 'react-router-dom';
import './IrrigationNInfrastructure.css';

// Import Kaleshwaram images
import kaleshwaram1 from '../../assets/kaleshwaram1.jpg';
import kaleshwaram2 from '../../assets/kaleshwaram2.jpg';
import kaleshwaram3 from '../../assets/kaleshwaram3.jpg';
import kaleshwaram4 from '../../assets/kaleshwaram4.jpg';
import kaleshwaram5 from '../../assets/kaleshwaram5.jpg';

const AchievementDetail = () => {
  const { category } = useParams();
  
  const contentMap = {
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

  const currentItem = contentMap[category] || { title: "Achievement", description: "Details coming soon..." };

  // Specific layout for Irrigation
  if (category === 'irrigation') {
    return (
      <div className="achievement-detail-page">
        <div className="irrigation-layout">
          <div className="irrigation-hero">
            <img src={kaleshwaram2} alt="Kaleshwaram Project View" />
          </div>

          <h1 className="section-main-title">Irrigation Up Close</h1>

          <div className="content-row-split">
            <div className="text-content">
              <p>
                The Kaleshwaram Lift Irrigation Project (KLIP) is not just an engineering accomplishment; it is the lifeline of Telangana. Conceived by KCR, it stands as the world's largest multi-stage lift irrigation system, a testament to human ingenuity and political will.
              </p>
              <p>
                By lifting water from the Godavari River at Medigadda and channeling it through a complex network of 20 reservoirs, 19 pumping stations, and over 1,500 kilometers of canals, the project has ensured that drought is a thing of the past for millions of farmers.
              </p>
              <p>
                This massive infrastructure has not only secured irrigation for one crore acres of land but has also revitalized the ecosystem. Groundwater levels across the state have risen significantly, and the project now provides essential drinking water to thousands of villages and the burgeoning metropolitan hub of Hyderabad.
              </p>
            </div>
            <div className="side-image">
              <img src={kaleshwaram4} alt="Technical Detail" />
            </div>
          </div>

          <div className="dot-separator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>

          <div className="blue-highlight-box">
            <div className="decorative-grid grid-top-right"></div>
            <div className="decorative-grid grid-bottom-left"></div>
            
            <div className="highlight-content">
              <h2 className="highlight-title">Popular Marvel</h2>
              <div className="two-column-text">
                <p>
                  The project has been hailed globally for its scale and speed of execution. It involves the construction of three barrages, dozens of pumping stations, and the world's longest irrigation tunnel. The impact is visible in the rising groundwater levels and the lush green fields that now define the state's horizon.
                </p>
                <p>
                  Beyond irrigation, the project provides drinking water to Hyderabad and other industrial hubs, securing the future of the state's economy and its people. It serves as a testament to the "Telangana Speed" – the ability to deliver world-class infrastructure in record time.
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-hero">
            <img src={kaleshwaram5} alt="Panoramic Landscape" />
          </div>
        </div>
      </div>
    );
  }

  // Fallback for other categories (can be expanded later)
  return (
    <div className="achievement-detail-page" style={{ padding: '10rem 2rem', maxWidth: '1000px', margin: '0 auto', minHeight: '80vh' }}>
      <header style={{ borderBottom: '1px solid #eee', paddingBottom: '2rem', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#000', marginBottom: '1rem' }}>{currentItem.title}</h1>
        <div style={{ height: '4px', width: '80px', background: '#e91e63' }}></div>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#444', fontWeight: '300' }}>
          {currentItem.description}
        </p>
        <div style={{ background: '#f9f9f9', padding: '3rem', borderRadius: '8px', marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: '#333' }}>Key Highlights</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Detailed information about this section is being curated. Stay tuned for an in-depth look at how this initiative has shaped the state of Telangana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementDetail;
