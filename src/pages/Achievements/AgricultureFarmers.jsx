import React from 'react';
import './AgricultureFarmers.css';

// Import local images (assuming they are in the specified paths based on generation)
// Note: You might need to verify the exact filenames from the generated output
import agriHeroImg from '../../assets/telangana_lush_green_paddy_field_sunset.png';
import farmerImg from '../../assets/rythu_bandhu_farmer_happy_smiling_field.png';

const AgricultureFarmers = () => {
  return (
    <div className="agriculture-page">
      {/* Hero Section */}
      <section className="agri-hero">
        <img src={agriHeroImg} alt="Telangana Agriculture" />
        <div className="agri-hero-content">
          <p>Cultivating Prosperity</p>
          <h1>Agriculture Development</h1>
        </div>
      </section>

      {/* Quote/Mission Section */}
      <section className="agri-quote">
        <h2>"The farmer is the king of the state. If the farmer is happy, the state is prosperous. Our mission is to make agriculture a festival, not a burden."</h2>
        <span>— K. Chandrashekar Rao</span>
      </section>

      {/* Stats Bar */}
      <section className="agri-stats">
        <div className="stat-item">
          <i className="fa-solid fa-seedling"></i>
          <h4>3.0 Cr</h4>
          <p>Tonnes Paddy Production</p>
        </div>
        <div className="stat-item">
          <i className="fa-solid fa-hand-holding-dollar"></i>
          <h4>₹72,000 Cr</h4>
          <p>Disbursed via Rythu Bandhu</p>
        </div>
        <div className="stat-item">
          <i className="fa-solid fa-bolt"></i>
          <h4>24 X 7</h4>
          <p>Free Quality Power</p>
        </div>
        <div className="stat-item">
          <i className="fa-solid fa-shield-heart"></i>
          <h4>100%</h4>
          <p>Financial Security (Rythu Bima)</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="agri-grid">
        <div className="agri-card">
          <span className="card-num">01</span>
          <h3>Rythu Bandhu</h3>
          <p>
            Launched as the first-of-its-kind investment support scheme in India, Rythu Bandhu provides ₹10,000 per acre per year to farmers. It eliminates the clutches of private moneylenders and empowers farmers to purchase seeds and fertilizers on time.
          </p>
          <a href="#" className="agri-btn">
            <span>Know More</span>
            <div className="agri-btn-icon">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <svg width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" rx="30" ry="30"/>
            </svg>
          </a>
        </div>

        <div className="agri-card">
          <span className="card-num">02</span>
          <h3>24/7 Free Power</h3>
          <p>
            Telangana is the only state in India providing 24x7 free, high-quality power to over 27 lakh agricultural pump sets. This revolutionary step has stabilized irrigation and significantly increased crop yields across all seasons.
          </p>
        </div>

        <div className="agri-card full-width">
          <div className="card-image">
            <img src={farmerImg} alt="Happy Farmer" />
          </div>
          <div className="card-text">
            <h3>Rythu Bima: A Shield for Families</h3>
            <p>
              In an unprecedented move for social security, the KCR government introduced Rythu Bima, a group life insurance scheme. In the unfortunate event of a farmer's death, the family receives ₹5 lakh within 10 days, ensuring they don't fall into poverty. Over 1 lakh families have been supported by this shield of dignity.
            </p>
          </div>
        </div>

        <div className="agri-card">
          <span className="card-num">03</span>
          <h3>Mission Kakatiya</h3>
          <p>
            The restoration of over 46,000 age-old tanks and lakes has revived the traditional irrigation system of Telangana. This has led to a dramatic rise in groundwater levels and rejuvenated the rural ecosystem.
          </p>
        </div>

        <div className="agri-card">
          <span className="card-num">04</span>
          <h3>Loan Waivers</h3>
          <p>
            Understanding the financial stress on the farming community, the government has implemented multiple rounds of crop loan waivers, clearing thousands of crores in debts to give farmers a fresh start and financial freedom.
          </p>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="agri-editorial">
        <div className="editorial-sidebar">
          <h5>THE GRANARY</h5>
          <h2>From Scarcity to Surplus</h2>
        </div>
        <div className="editorial-main">
          <p>
            A decade ago, Telangana was known for its parched lands and distressed farmers. Today, it stands proud as the "Granary of India." The transformation is not accidental; it is the result of a visionary leader who put the farmer at the heart of every policy.
          </p>
          <div className="highlight-box">
            <p>
              Paddy production has surged from 68 lakh tonnes in 2014 to over 3 crore tonnes in 2023, a feat unmatched in modern Indian history.
            </p>
          </div>
          <p>
            By integrating massive lift irrigation projects like Kaleshwaram with grassroots initiatives like Rythu Bandhu, KCR has turned agriculture into a profitable and prestigious profession. The green fields of Telangana are now a symbol of resilience and growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AgricultureFarmers;
