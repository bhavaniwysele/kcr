import React from 'react';
import './StayConnected.css';

const StayConnected = () => {
  const cards = [
    {
      title: "Public Grievances",
      description: "Submit your concerns, complaints, and development suggestions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Media & Press",
      description: "For interviews, press releases, and official statements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
          <path d="M18 14h-8"></path>
          <path d="M15 18h-5"></path>
          <path d="M10 6h8v4h-8V6Z"></path>
        </svg>
      )
    },
    {
      title: "Office Location",
      description: "Telangana Bhavan, Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      title: "Working Hours",
      description: "Mon - Sat: 10:00 AM - 6:00 PM | Sunday: Closed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="stay-connected-section">
      <div className="stay-connected-container">
        <div className="stay-connected-header">
          <h2 className="title">Stay Connected with Us</h2>
          <p className="subtitle">
            Reach out for public concerns and media inquiries
          </p>
        </div>

        <div className="stay-connected-grid">
          {cards.map((card, index) => (
            <div className="connected-card" key={index}>
              <div className="card-icon-wrapper">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <div className="card-divider"></div>
              <p className="card-desc">
                {card.description.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== card.description.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
