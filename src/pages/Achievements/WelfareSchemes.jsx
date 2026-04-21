import React from 'react';
import './WelfareSchemes.css';

// Import images from assets
import pensionImg from '../../assets/Aasara-pension.jpg';
import weddingImg from '../../assets/Kalyana Lakshmi.jpg';
import healthKitImg from '../../assets/healthandwelfare.webp';
import welfarePanorama from '../../assets/Dalit Bandhu.jpg';
import missionBhagiratha from '../../assets/Mission_Bhagiratha.jpg';

const WelfareSchemes = () => {
  return (
    <div className="welfare-page">
      <div className="welfare-container">
        
        <header className="welfare-header">
          <p className="welfare-subtitle">Compassionate Governance</p>
          <h1 className="welfare-title">Welfare Impact</h1>
        </header>

        {/* Main Highlight Card - Aasara Pensions */}
        <div className="welfare-card cream full-width">
          <div className="welfare-card-content">
            <h2>Aasara Pensions</h2>
            <p>
              Providing dignity and financial security to the elderly, widows, weavers, and differently-abled. A lifeline that ensures no citizen is left behind in the journey of progress.
            </p>
            <a href="#" className="welfare-btn">
              <span>Know More</span>
              <div className="welfare-btn-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="30" ry="30"/>
              </svg>
            </a>
          </div>
          <div className="welfare-image">
            <img src={pensionImg} alt="Dignity and Care" />
          </div>
        </div>

        {/* Grid for other schemes */}
        <div className="welfare-grid">
          
          {/* Family Support */}
          <div className="welfare-card">
            <div className="welfare-card-content">
              <h2>Family Support</h2>
              <p>
                Supporting families in their most cherished moments. Financial assistance for marriages through Kalyana Lakshmi and Shadi Mubarak.
              </p>
            </div>
            <div className="welfare-image">
              <img src={weddingImg} alt="Marriage Support" />
            </div>
            <a href="#" className="welfare-btn" style={{ padding: '12px 25px', fontSize: '1rem', marginTop: '40px' }}>
              <span>Know More</span>
              <div className="welfare-btn-icon" style={{ width: '25px', height: '25px', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="30" ry="30"/>
              </svg>
            </a>
          </div>

          {/* KCR Kit */}
          <div className="welfare-card">
            <div className="welfare-card-content">
              <h2>KCR Kit</h2>
              <p>
                Ensuring health and happiness for mothers and newborns. A comprehensive care package that has revolutionized maternal healthcare in the state.
              </p>
            </div>
            <div className="welfare-image">
              <img src={healthKitImg} alt="Maternal Health" />
            </div>
            <a href="#" className="welfare-btn" style={{ padding: '12px 25px', fontSize: '1rem', marginTop: '40px' }}>
              <span>Know More</span>
              <div className="welfare-btn-icon" style={{ width: '25px', height: '25px', fontSize: '0.9rem' }}>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="30" ry="30"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Additional Full Width - Dalit Bandhu */}
        <div className="welfare-card" style={{ marginTop: '25px', background: '#f5f7fa' }}>
          <div className="welfare-card-content">
            <h2>Dalit Bandhu</h2>
            <p>
              The world's largest direct benefit transfer scheme for Dalit empowerment. Providing ₹10 lakh to families to start their own businesses and reclaim their economic destiny.
            </p>
            <a href="#" className="welfare-btn">
              <span>Know More</span>
              <div className="welfare-btn-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="30" ry="30"/>
              </svg>
            </a>
          </div>
          <div className="welfare-image">
            <img src={welfarePanorama} alt="Welfare Panorama" />
          </div>
        </div>

        {/* Mission Bhagiratha section */}
        <div className="welfare-card cream full-width" style={{ marginTop: '25px' }}>
          <div className="welfare-image">
            <img src={missionBhagiratha} alt="Drinking Water Mission" style={{ borderRadius: '20px' }} />
          </div>
          <div className="welfare-card-content" style={{ textAlign: 'right' }}>
            <h2>Mission Bhagiratha</h2>
            <p>
              Pure drinking water for every household. A monumental effort that has ended the fluoride crisis and brought health and dignity to millions of rural homes.
            </p>
            <a href="#" className="welfare-btn" style={{ marginLeft: 'auto' }}>
              <span>Know More</span>
              <div className="welfare-btn-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="30" ry="30"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WelfareSchemes;
