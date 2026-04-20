import React, { useState } from 'react';
import './NewsMedia.css';

// Import images
import news1 from '../assets/jeevan-reddy-kcr.webp';
import news2 from '../assets/brs-telangana-expired-medicines.jpeg';
import news3 from '../assets/kcr-press-conference.avif';
import news4 from '../assets/newsNreports.webp';

const NewsMedia = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const newsData = [
    {
      id: 1,
      category: 'POLITICAL',
      title: "Jeevan Reddy Meets KCR After Quitting Congress, Indicates He Will Join BRS",
      date: "April 10, 2026",
      image: news1,
      excerpt: "Former minister Jeevan Reddy's meeting with KCR at Erravalli farmhouse signals a significant political realignment in Telangana."
    },
    {
      id: 2,
      category: 'HEALTH',
      title: "KCR Alleges Basic Medicine Shortage and Quality Issues in Public Health",
      date: "October 21, 2025",
      image: news2,
      excerpt: "The BRS leadership has raised serious concerns about the distribution of expired medicines in government hospitals."
    },
    {
      id: 3,
      category: 'LEGAL',
      title: "KCR Cooperates with Probe Teams, Maintains Stance on Political Harassment",
      date: "February 1, 2026",
      image: news3,
      excerpt: "During recent questioning sessions, the former CM reiterated that legal processes are being used for political intimidation."
    },
    {
      id: 4,
      category: 'DEVELOPMENT',
      title: "The Kaleshwaram Legacy: How KCR's Dream Project Transformed Agriculture",
      date: "May 15, 2026",
      image: news4,
      excerpt: "A deep dive into the socio-economic impacts of the world's largest lift irrigation project on Telangana's farmers."
    }
  ];

  const categories = ['ALL', 'POLITICAL', 'HEALTH', 'LEGAL', 'DEVELOPMENT'];

  const filteredNews = activeFilter === 'ALL' 
    ? newsData 
    : newsData.filter(item => item.category === activeFilter);

  return (
    <div className="news-media-page">
      <header className="news-media-hero">
        <h1>News & Media</h1>
        <p>Stay updated with the latest reports, press releases, and media insights.</p>
      </header>

      <section className="news-filter-container">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      <main className="news-articles-grid">
        {filteredNews.map(item => (
          <article key={item.id} className="news-item-card">
            <img src={item.image} alt={item.title} className="news-card-img" />
            <div className="news-card-body">
              <div className="news-meta">
                <span className="news-category">{item.category}</span>
                <span className="news-date">{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href="#" className="read-more-link">Read Full Report →</a>
            </div>
          </article>
        ))}
      </main>

      <section className="press-kit-section">
        <h2>Press Resources</h2>
        <p>Official assets for media and press organizations.</p>
        <div className="press-grid">
          <div className="press-kit-card">
            <span className="press-kit-icon">📸</span>
            <h3>Photos</h3>
            <p>Official high-resolution photography and portraits.</p>
            <a href="#" className="download-btn">
              <span>View Photos</span>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="25" ry="25"/>
              </svg>
            </a>
          </div>
          <div className="press-kit-card">
            <span className="press-kit-icon">🎥</span>
            <h3>Videos</h3>
            <p>Archive of video footage and campaign media.</p>
            <a href="#" className="download-btn">
              <span>View Videos</span>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="25" ry="25"/>
              </svg>
            </a>
          </div>
          <div className="press-kit-card">
            <span className="press-kit-icon">🏛️</span>
            <h3>Public Appearances</h3>
            <p>Chronicles of presence at public forums and rallies.</p>
            <a href="#" className="download-btn">
              <span>View Log</span>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="25" ry="25"/>
              </svg>
            </a>
          </div>
          <div className="press-kit-card">
            <span className="press-kit-icon">📅</span>
            <h3>Major Events</h3>
            <p>Media kits for significant political milestones.</p>
            <a href="#" className="download-btn">
              <span>See Events</span>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="25" ry="25"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsMedia;
