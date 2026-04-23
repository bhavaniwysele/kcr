import React, { useRef } from 'react';
import './TimelineSection.css';

// Import assets
import img1954 from '../assets/1954.jpg';
import img1970 from '../assets/Political Prelude.jpg';
import img1975 from '../assets/Marriage & Personal Life.jpg';
import img1985 from '../assets/overview_main2.jpg';
import img1987 from '../assets/Ministerial Debut.jpg';
import img1999 from '../assets/Deputy Speaker.jpg';
import img2001 from '../assets/Birth of TRS.jpg';
import img2004 from '../assets/Union Ministry.jpg';
import img2009 from '../assets/The Great Fast.webp';
import img2014 from '../assets/kcr The First CM.jpg';
import img2017 from '../assets/Welfare Expansion.jpg';
import img2019 from '../assets/Kaleshwaram Project.webp';
import img2022 from '../assets/National Vision.webp';

const TimelineSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth; // Scroll by full view width (variable items based on viewport)
      const targetScroll = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const timelineData = [
    {
      year: '1954',
      title: 'A Leader is Born',
      description: 'Kalvakuntla Chandrashekar Rao was born on February 17 in Chintamadaka village, Telangana.',
      image: img1954
    },
    {
      year: '1970',
      title: 'Political Prelude',
      description: 'Began his political journey as a student leader in the Youth Congress during his college years.',
      image: img1970
    },
    {
      year: '1975',
      title: 'Marriage & Personal Life',
      description: 'Married Smt. Shobha, starting a lifelong partnership that would support his political journey.',
      image: img1975
    },
    {
      year: '1985',
      title: 'First MLA Victory',
      description: 'Elected as MLA for the first time from Siddipet, marking the start of his legislative legacy.',
      image: img1985
    },
    {
      year: '1987',
      title: 'Ministerial Debut',
      description: 'Served as the Minister for Drought and Relief, gaining first-hand experience in public service.',
      image: img1987
    },
    {
      year: '1999',
      title: 'Deputy Speaker',
      description: 'Appointed as the Deputy Speaker of the Andhra Pradesh Legislative Assembly.',
      image: img1999
    },
    {
      year: '2001',
      title: 'Birth of TRS',
      description: 'Resigned from TDP to form the Telangana Rashtra Samithi (TRS) to fight for a separate state.',
      image: img2001
    },
    {
      year: '2004',
      title: 'Union Ministry',
      description: 'Became the Union Minister for Labour and Employment in the UPA government.',
      image: img2004
    },
    {
      year: '2009',
      title: 'The Great Fast',
      description: 'His fast-unto-death became the catalyst for the historic announcement of Telangana statehood.',
      image: img2009
    },
    {
      year: '2014',
      title: 'The First CM',
      description: 'Sworn in as the first Chief Minister of the newly formed state of Telangana.',
      image: img2014
    },
    {
      year: '2017',
      title: 'Welfare Revolution',
      description: 'Launched the KCR Kit and Rythu Bandhu schemes, transforming rural and maternal healthcare.',
      image: img2017
    },
    {
      year: '2019',
      title: 'Engineering Marvel',
      description: "Inaugurated the Kaleshwaram Project, the world's largest multi-stage lift irrigation system.",
      image: img2019
    },
    {
      year: '2022',
      title: 'National Vision',
      description: 'Transformed TRS into BRS (Bharat Rashtra Samithi) to take the Telangana model to the nation.',
      image: img2022
    }
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-header">
          <h4 className="subtitle">Milestones</h4>
          <h2 className="title">Telangana <span>Growth Timeline</span></h2>
        </div>

        <div className="timeline-wrapper">
          <button className="nav-btn left" onClick={() => scroll('left')} aria-label="Scroll Left">
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="timeline-scroll-container" ref={scrollRef}>
            <div className="timeline-flow">
              {timelineData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-box">
                    <div className="timeline-box-inner">
                      {/* Front: Year & Full Image */}
                      <div className="timeline-box-front">
                        <div className="timeline-year-header">{item.year}</div>
                        <div className="timeline-img-wrapper">
                          <img src={item.image} alt={item.title} className="timeline-card-img" />
                        </div>
                      </div>
                      
                      {/* Back: Description */}
                      <div className="timeline-box-back">
                        <div className="timeline-year-header back-year">{item.year}</div>
                        <div className="timeline-back-content">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    {/* Glowing Dot at the bottom of the box */}
                    <div className="connector-dot"></div>
                  </div>
                  
                  {/* Outside Info */}
                  <div className="timeline-card-info">
                    <h4>{item.title}</h4>
                  </div>

                  <div className="timeline-connector">
                    <div className="connector-line"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn right" onClick={() => scroll('right')} aria-label="Scroll Right">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
