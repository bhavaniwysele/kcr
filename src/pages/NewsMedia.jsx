import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NewsMedia.css';

// Import images
import news1 from '../assets/jeevan-reddy-kcr.webp';
import news2 from '../assets/brs-telangana-expired-medicines.jpeg';
import news3 from '../assets/kcr-press-conference.avif';
import news4 from '../assets/newsNreports.webp';
import news5 from '../assets/dalitbandhuhero.jpg';
import news6 from '../assets/rythubandu2.jpg';
import news7 from '../assets/Drinking-water.webp';
import news8 from '../assets/kaleshwaram1.jpg';
import news9 from '../assets/economicgrowth.jpeg';
import news10 from '../assets/healthNwomen1.jpg';
import news11 from '../assets/agriculture.jpg';
import news12 from '../assets/governance_final.jpg';

// Import background images for press kit cards
import bgPhotos from '../assets/press_kit_photos.png';
import bgVideos from '../assets/press_kit_videos.png';
import bgAppearances from '../assets/press_kit_appearances.png';
import bgEvents from '../assets/press_kit_events.png';

const NewsMedia = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activePage, setActivePage] = useState(0);

  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    setActivePage(0);
  };

  const newsData = [
    {
      id: 1,
      category: 'POLITICAL',
      title: "Jeevan Reddy Meets KCR After Quitting Congress, Indicates He Will Join BRS",
      date: "April 10, 2026",
      image: news1,
      excerpt: "Former minister Jeevan Reddy's meeting with KCR at Erravalli farmhouse signals a significant political realignment in Telangana.",
      commentsCount: 25
    },
    {
      id: 2,
      category: 'HEALTH',
      title: "KCR Alleges Basic Medicine Shortage and Quality Issues in Public Health",
      date: "October 21, 2025",
      image: news2,
      excerpt: "The BRS leadership has raised serious concerns about the distribution of expired medicines in government hospitals.",
      commentsCount: 20
    },
    {
      id: 3,
      category: 'LEGAL',
      title: "KCR Cooperates with Probe Teams, Maintains Stance on Political Harassment",
      date: "February 1, 2026",
      image: news3,
      excerpt: "During recent questioning sessions, the former CM reiterated that legal processes are being used for political intimidation.",
      commentsCount: 38
    },
    {
      id: 4,
      category: 'DEVELOPMENT',
      title: "The Kaleshwaram Legacy: How KCR's Dream Project Transformed Agriculture",
      date: "May 15, 2026",
      image: news4,
      excerpt: "A deep dive into the socio-economic impacts of the world's largest lift irrigation project on Telangana's farmers.",
      commentsCount: 45
    },
    {
      id: 5,
      category: 'DEVELOPMENT',
      title: "Drinking Water Revolution: Mission Bhagiratha Reaches Every Village Household",
      date: "May 28, 2026",
      image: news7,
      excerpt: "The massive project providing clean tap drinking water to rural areas achieves new milestones in pipe network integrity.",
      commentsCount: 18
    },
    {
      id: 6,
      category: 'POLITICAL',
      title: "BRS to Hold Mega Public Meeting in Warangal to Discuss Statehood Movement Legacy",
      date: "June 12, 2026",
      image: news5,
      excerpt: "Party sources confirm that KCR will address a massive gathering highlighting the milestones of the Telangana agitation.",
      commentsCount: 50
    },
    {
      id: 7,
      category: 'HEALTH',
      title: "Telangana Healthcare Infrastructure Expanded: KCR Kits Distributed to 15 Lakh Mothers",
      date: "May 20, 2026",
      image: news10,
      excerpt: "The government maternal welfare scheme shows a drastic decrease in infant mortality and rise in institutional deliveries.",
      commentsCount: 32
    },
    {
      id: 8,
      category: 'LEGAL',
      title: "Advocates Raise Objection in Court Over Biased Inquiry on Power Agreements",
      date: "June 2, 2026",
      image: news8,
      excerpt: "Legal counsels file comprehensive counters pointing to procedural gaps in the judicial commission's notifications.",
      commentsCount: 15
    },
    {
      id: 9,
      category: 'DEVELOPMENT',
      title: "Rythu Bandhu Scheme Disburses Record Crop Support Funds Directly to Farmers",
      date: "April 29, 2026",
      image: news6,
      excerpt: "The direct benefit transfer initiative ensures financial stability for millions of farming families during sowing seasons.",
      commentsCount: 29
    },
    {
      id: 10,
      category: 'POLITICAL',
      title: "BRS Working President KTR Questions Delayed Job Recruitment Calendar",
      date: "May 5, 2026",
      image: news9,
      excerpt: "Demanding transparency for state youth, the opposition calls for immediate notification of vacant government positions.",
      commentsCount: 41
    },
    {
      id: 11,
      category: 'LEGAL',
      title: "High Court Grants Stay on Execution of Arbitrary Project Land Acquisition Orders",
      date: "April 18, 2026",
      image: news11,
      excerpt: "In a victory for local landowners, the court orders a halt to acquisitions pending detailed environmental audits.",
      commentsCount: 22
    },
    {
      id: 12,
      category: 'HEALTH',
      title: "Super-Specialty Hospitals Near Completion: KCR Inspects Facilities in Gachibowli",
      date: "March 15, 2026",
      image: news12,
      excerpt: "The corporate-level health towers are slated to add 4,000 extra beds to the state's public healthcare grid.",
      commentsCount: 34
    }
  ];

  const categories = ['ALL', 'POLITICAL', 'HEALTH', 'LEGAL', 'DEVELOPMENT'];
  const pressResources = [
    {
      icon: '📸',
      title: 'Photos',
      description: 'Official high-resolution photography and portraits.',
      cta: 'View Photos',
      bgImage: bgPhotos
    },
    {
      icon: '🎥',
      title: 'Videos',
      description: 'Archive of video footage and campaign media.',
      cta: 'View Videos',
      bgImage: bgVideos
    },
    {
      icon: '🏛️',
      title: 'Public Appearances',
      description: 'Chronicles of presence at public forums and rallies.',
      cta: 'View Log',
      bgImage: bgAppearances
    },
    {
      icon: '📅',
      title: 'Major Events',
      description: 'Media kits for significant political milestones.',
      cta: 'See Events',
      bgImage: bgEvents
    }
  ];

  const filteredNews = activeFilter === 'ALL' 
    ? newsData 
    : newsData.filter(item => item.category === activeFilter);

  const itemsPerPage = 7;
  const latestItemsPerPage = 6;
  const totalLatestPages = Math.ceil(newsData.length / latestItemsPerPage);
  
  const trendingNews = filteredNews.slice(0, 7);
  const latestNews = newsData.slice(activePage * latestItemsPerPage, (activePage + 1) * latestItemsPerPage);

  return (
    <div className="news-media-page">
      <header className="news-media-hero">
        <motion.h1 
          className="news-media-hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15, mass: 1 }}
        >
          News & Media
        </motion.h1>
      </header>

      <div className="news-content-layout">
        {/* Left Column: Trending Stories */}
        <section className="news-trending-column">
          <motion.h2 
            className="section-title-line"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 16, mass: 1 }}
          >
            TRENDING <span className="title-bold">STORIES</span>
          </motion.h2>
          
          <motion.div
            className="news-filter-bar"
            role="tablist"
            aria-label="Filter articles by category"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 16, mass: 1, delay: 0.08 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeFilter === cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => handleFilterChange(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>
          
          <motion.div layout className="news-trending-grid">
            <AnimatePresence mode="popLayout">
              {trendingNews.map((item, index) => {
                const isOverlayCard = index === 4 || index === 5;
                return (
                  <motion.article 
                    layout
                    key={item.id} 
                    initial={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.1 }}
                    exit={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(8px)" }}
                    whileHover={{ 
                      y: -6, 
                      boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                      transition: { duration: 0.3, ease: "easeOut", delay: 0 } 
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 55,
                      damping: 16,
                      mass: 1,
                      delay: index * 0.05,
                      layout: { type: "spring", stiffness: 60, damping: 17 }
                    }}
                    className={`news-item-card ${isOverlayCard ? 'news-card-featured' : ''}`}
                    style={isOverlayCard ? { backgroundImage: `url(${item.image})` } : undefined}
                  >
                    {isOverlayCard && <div className="news-card-overlay-gradient" />}
                    
                    {!isOverlayCard && (
                      <div className="news-card-img-wrapper">
                        <img src={item.image} alt={item.title} className="news-card-img" />
                      </div>
                    )}
                    
                    <div className="news-card-body">
                      <div className="news-meta">
                        <span className="news-category">{item.category}</span>
                        <span className="news-date">{item.date}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.excerpt}</p>
                      
                      {isOverlayCard ? (
                        <div className="news-card-footer">
                          <span>📈 TRENDING</span>
                          <span className="news-comments">💬 {item.commentsCount}</span>
                        </div>
                      ) : (
                        <div className="news-card-footer">
                          <a href="#" className="read-more-link">Read Full Report →</a>
                          <span className="news-comments">💬 {item.commentsCount}</span>
                        </div>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Right Column: Latest Stories */}
        <section className="news-latest-column">
          <motion.h2 
            className="section-title-line"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 16, mass: 1 }}
          >
            LATEST <span className="title-bold">STORIES</span>
          </motion.h2>
          
          <div className="news-latest-list">
            {latestNews.map((item, idx) => (
              <motion.div 
                key={item.id} 
                className="news-latest-item"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 17,
                  mass: 1,
                  delay: idx * 0.04
                }}
              >
                <span className="news-latest-dot"></span>
                <div className="news-latest-content">
                  <span className="news-latest-category">{item.category}</span>
                  <h4 className="news-latest-title">{item.title}</h4>
                  <p className="news-latest-excerpt">{item.excerpt}</p>
                  <div className="news-latest-footer">
                    <span className="news-latest-date">{item.date}</span>
                    <a href="#" className="read-more-link-small">Read →</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {totalLatestPages > 1 && (
            <div className="latest-pagination-bar">
              <button 
                className="latest-pagination-btn" 
                onClick={() => setActivePage(prev => Math.max(0, prev - 1))}
                disabled={activePage === 0}
                aria-label="Previous latest stories"
              >
                ←
              </button>
              
              <div className="latest-pagination-dots">
                {Array.from({ length: totalLatestPages }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`latest-pagination-dot ${activePage === idx ? 'active' : ''}`}
                    onClick={() => setActivePage(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className="latest-pagination-btn" 
                onClick={() => setActivePage(prev => Math.min(totalLatestPages - 1, prev + 1))}
                disabled={activePage === totalLatestPages - 1}
                aria-label="Next latest stories"
              >
                →
              </button>
            </div>
          )}
        </section>
      </div>

      <section className="press-kit-section">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 16, mass: 1 }}
        >
          Press Resources
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 16, mass: 1, delay: 0.08 }}
        >
          Official assets for media and press organizations.
        </motion.p>
        <div className="press-grid">
          {pressResources.map((resource, index) => (
            <motion.article
              key={resource.title}
              className={`press-kit-card press-kit-card--col-${index % 2 === 0 ? 'left' : 'right'} press-kit-card--theme-${index}`}
              style={{ '--bg-image': `url(${resource.bgImage})` }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                mass: 1,
                delay: index * 0.06
              }}
            >
              <span className="press-kit-icon" aria-hidden="true">
                {resource.icon}
              </span>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href="#" className="press-kit-link">
                <span>{resource.cta}</span>
                <svg
                  className="press-kit-link-outline"
                  width="100%"
                  height="100%"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect x="0" y="0" width="100%" height="100%" rx="10" ry="10" />
                </svg>
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsMedia;

