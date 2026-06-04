import React from 'react';
import './GallerySection.css';

// Importing assets
import img1 from '../assets/kaleshwaram1.jpg';
import img2 from '../assets/agri1.png';
import img3 from '../assets/telangana_lush_green_paddy_field_sunset.png';
import img4 from '../assets/Aasara-pension.jpg';
import img5 from '../assets/rythu_bandhu_farmer_happy_smiling_field.png';
import img6 from '../assets/cultureNheritage.jpg';
import img7 from '../assets/mission_kakatiya.jpg';
import img8 from '../assets/Growth & Infrastructure.jpg';
import img9 from '../assets/kaleshwaram2.jpg';
import img10 from '../assets/agri2.png';

const deckCards = [
  { img: img1, title: 'Kaleshwaram Project' },
  { img: img2, title: 'Bumper Harvest' },
  { img: img3, title: 'Lush Greenery' },
  { img: img4, title: 'Aasara Pensions' },
  { img: img5, title: 'Happy Farmers' },
  { img: img6, title: 'Telangana Culture' },
  { img: img7, title: 'Mission Kakatiya' },
  { img: img8, title: 'Modern Growth' },
  { img: img9, title: 'Global Vision' },
  { img: img10, title: 'Sustainable Agri' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h4 className="subtitle">Visual Legacy</h4>
        <h2 className="title">
          Telangana <span>Gallery</span>
        </h2>
      </div>
      <div className="gallery-marquee-container">
        <div className="gallery-marquee-track">
          <div className="gallery-marquee-group">
            {deckCards.map((item, index) => (
              <article key={`g1-${index}`} className="gallery-deck-card">
                <img src={item.img} alt={item.title} />
                <div className="gallery-card-overlay" />
                <h3 className="gallery-card-title">{item.title}</h3>
              </article>
            ))}
          </div>
          <div className="gallery-marquee-group" aria-hidden="true">
            {deckCards.map((item, index) => (
              <article key={`g2-${index}`} className="gallery-deck-card">
                <img src={item.img} alt={item.title} />
                <div className="gallery-card-overlay" />
                <h3 className="gallery-card-title">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
