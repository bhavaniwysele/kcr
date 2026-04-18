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
            <span className="press-kit-icon">🖼️</span>
            <h3>Official Photos</h3>
            <p>High-resolution portraits and event photography.</p>
            <a href="#" className="download-btn">Download Kit</a>
          </div>
          <div className="press-kit-card">
            <span className="press-kit-icon">📄</span>
            <h3>Press Releases</h3>
            <p>Archived official statements and news releases.</p>
            <a href="#" className="download-btn">View Archive</a>
          </div>
          <div className="press-kit-card">
            <span className="press-kit-icon">🎭</span>
            <h3>Brand Assets</h3>
            <p>Logos, color palettes, and brand guidelines.</p>
            <a href="#" className="download-btn">Download Assets</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsMedia;
