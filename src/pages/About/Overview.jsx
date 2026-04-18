import React from 'react';
import './Overview.css';
import overviewImg from '../../assets/overview.jpg';

const Overview = () => {
  return (
    <div className="overview-container">
      <section className="overview-hero">
        <div className="overview-content">
          <span className="overview-badge">Leader | Visionary | Statesman</span>
          <h1 className="overview-title">Kalvakuntla Chandrashekar Rao</h1>
          <p className="overview-subtitle">
            The visionary architect of modern Telangana and the relentless force behind its statehood.
          </p>
          <div className="bio-section summary-text">
            <p>
              Kalvakuntla Chandrashekar Rao (KCR) is a transformative figure who redefined the political landscape of South India. As the founding leader of Bharat Rashtra Samithi (BRS), he led a peaceful agitation that culminated in the formation of Telangana in 2014.
            </p>
          </div>
        </div>
        <div className="overview-image-wrapper">
          <img src={overviewImg} alt="KCR Portrait" className="overview-image" />
        </div>
      </section>

      <section className="overview-highlights">
        <div className="highlight-card">
          <div className="highlight-icon">🏗️</div>
          <h3>Statehood Architect</h3>
          <p>Led a peaceful agitation to achieve the dream of a separate Telangana in 2014.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🏛️</div>
          <h3>First Chief Minister</h3>
          <p>Served as the inaugural CM (2014–2023), laying the foundation for systemic development.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">🚀</div>
          <h3>Model for Development</h3>
          <p>Pioneered schemes like Rythu Bandhu and the Kaleshwaram Lift Irrigation Project.</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon">✨</div>
          <h3>Bangaru Telangana</h3>
          <p>Envisioned a "Golden Telangana" focused on self-reliance and inclusive growth.</p>
        </div>
      </section>

      <div className="content-grid">
        <section className="bio-section detail-text">
          <h2>The Vision of 'Bangaru Telangana'</h2>
          <p>
            KCR's governance was anchored in the vision of <strong>Bangaru Telangana</strong> (Golden Telangana)—a holistic model aimed at transforming the state into a prosperous, welfare-oriented society. This vision was not just about economic growth but about 100% literacy, quality healthcare, and irrigation for every arable acre of land.
          </p>
          <p>
            The Light Gold color in the official state emblem symbolizes this intent—reflecting an outlook of continuous progress and positive, integrated development for every citizen.
          </p>
        </section>

        <section className="bio-section detail-text">
          <h2>Governance & Impact</h2>
          <ul className="achievements-list">
            <li><strong>Mission Bhagiratha:</strong> Providing safe, piped drinking water to every household across the state.</li>
            <li><strong>Power Surplus:</strong> Transformed Telangana from a power-deficient state to a power-surplus one with 24/7 free electricity for farmers.</li>
            <li><strong>Social Welfare:</strong> Landmark schemes like Kalyana Lakshmi, Shaadi Mubarak, and Dalit Bandhu have set a national benchmark for inclusive governance.</li>
            <li><strong>Global IT Hub:</strong> Fortified Hyderabad's position as a global leader in IT, innovation, and pharmaceutical industries.</li>
          </ul>
        </section>
      </div>

      <section className="bio-section quote-section">
        <p className="quote-text">
          "The formation of Telangana is not just a political destination, but a beginning of a journey towards self-respect and prosperity for every Telanganite."
        </p>
      </section>
    </div>
  );
};

export default Overview;
