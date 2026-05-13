import React from 'react';
import { motion } from 'framer-motion';
import './NewsSection.css';
import { UserIcon, CalendarIcon, CommentIcon } from './NewsMetaIcons';

// Import images
import news1 from '../assets/jeevan-reddy-kcr.webp';
import news2 from '../assets/brs-telangana-expired-medicines.jpeg';
import news3 from '../assets/kcr-press-conference.avif';
import news4 from '../assets/newsNreports.webp'; // Using as a placeholder for others if needed

const NewsSection = () => {
  const newsData = [
    {
      id: 1,
      category: 'POLITICAL',
      title: "Jeevan Reddy Meets KCR After Quitting Congress, Indicates He Will Join BRS",
      date: "April 10, 2026",
      source: "NDTV",
      author: "Ashish Kumar Pandey",
      image: news1,
      excerpt: "Reddy was with the Congress for over 40 years. His meeting with KCR signals a significant shift in Telangana politics."
    },
    {
      id: 2,
      category: 'HEALTH',
      title: "KCR's Party Alleges Expired Medicines Distributed To Patients",
      date: "October 21, 2025",
      source: "NDTV",
      author: "Manne Krishank",
      image: news2,
      excerpt: "In a shocking discovery, BRS Official Spokesperson revealed that patients were being administered medicines that expired three months ago."
    },
    {
      id: 3,
      category: 'LEGAL',
      title: "KCR Questioned By Probe Team At His Hyderabad Home In Phone Tapping Case",
      date: "February 1, 2026",
      source: "NDTV",
      author: "Press Trust of India",
      image: news3,
      excerpt: "Former Chief Minister K Chandrasekhar Rao was questioned by the Telangana Police SIT in connection with a case related to alleged phone tapping."
    },
    {
      id: 4,
      category: 'PROTEST',
      title: "BRS Calls For Protests In Telangana Over 'Political Harassment' Of KCR",
      date: "January 31, 2026",
      source: "NDTV",
      author: "ANI",
      image: news3, 
      excerpt: "BRS party leaders have called for massive protests to condemn the undemocratic and politically motivated actions against KCR."
    },
    {
      id: 5,
      category: 'DEVELOPMENT',
      title: "Telangana's Growth Trajectory: A Legacy of Visionary Leadership",
      date: "May 7, 2026",
      source: "KCR Official",
      author: "Admin",
      image: news4,
      excerpt: "Detailed report on how the foundations laid by KCR continue to drive Telangana's economic and social parameters."
    }
  ];

  return (
    <section id="news-media" className="news-section">
      <div className="news-container">
        <div className="news-header">
          <h2 className="title">News & <span>Media</span></h2>
        </div>

        <div className="news-grid">
          {/* Main Featured Card (Center/Large) */}
          <motion.div 
            className="news-card featured"
            initial={{ y: -120, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-image">
              <img src={newsData[0].image} alt={newsData[0].title} />
              <span className="badge">{newsData[0].category}</span>
            </div>
            <div className="card-content">
              <h3>{newsData[0].title}</h3>
              <p className="excerpt">{newsData[0].excerpt}</p>
              <div className="card-meta">
                <span className="author">
                  <UserIcon size={14} /> {newsData[0].author}
                </span>
                <span className="date">
                  <CalendarIcon size={14} /> {newsData[0].date}
                </span>
                <span className="comments">
                  <CommentIcon size={14} /> 0
                </span>
              </div>
            </div>
          </motion.div>

          {/* Other Cards */}
          <motion.div 
            className="news-card secondary-1"
            initial={{ x: -60, opacity: 0, filter: "blur(4px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-image">
              <img src={newsData[1].image} alt={newsData[1].title} />
              <span className="badge">{newsData[1].category}</span>
            </div>
            <div className="card-content">
              <h3>{newsData[1].title}</h3>
              <div className="card-meta">
                <span className="author">{newsData[1].author}</span>
                <span className="date">{newsData[1].date}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="news-card secondary-2"
            initial={{ x: 60, opacity: 0, filter: "blur(4px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-image">
              <img src={newsData[2].image} alt={newsData[2].title} />
              <span className="badge">{newsData[2].category}</span>
            </div>
            <div className="card-content">
              <h3>{newsData[2].title}</h3>
              <div className="card-meta">
                <span className="author">{newsData[2].author}</span>
                <span className="date">{newsData[2].date}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="news-card secondary-3"
            initial={{ x: -60, opacity: 0, filter: "blur(4px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-image">
              <img src={newsData[3].image} alt={newsData[3].title} />
              <span className="badge">{newsData[3].category}</span>
            </div>
            <div className="card-content">
              <h3>{newsData[3].title}</h3>
              <div className="card-meta">
                <span className="author">{newsData[3].author}</span>
                <span className="date">{newsData[3].date}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="news-card secondary-4"
            initial={{ x: 60, opacity: 0, filter: "blur(4px)" }}
            whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-image">
              <img src={newsData[4].image} alt={newsData[4].title} />
              <span className="badge">{newsData[4].category}</span>
            </div>
            <div className="card-content">
              <h3>{newsData[4].title}</h3>
              <div className="card-meta">
                <span className="author">{newsData[4].author}</span>
                <span className="date">{newsData[4].date}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
