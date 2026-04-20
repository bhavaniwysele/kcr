import React, { useRef } from 'react';
import './TimelineSection.css';

const TimelineSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth; // Scroll by full view width (4 items)
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
      icon: 'fa-baby'
    },
    {
      year: '1970',
      title: 'Political Prelude',
      description: 'Began his political journey as a student leader in the Youth Congress during his college years.',
      icon: 'fa-user-graduate'
    },
    {
      year: '1975',
      title: 'Marriage & Personal Life',
      description: 'Married Smt. Shobha, starting a lifelong partnership that would support his political journey.',
      icon: 'fa-heart'
    },
    {
      year: '1985',
      title: 'First MLA Victory',
      description: 'Elected as MLA for the first time from Siddipet, marking the start of his legislative legacy.',
      icon: 'fa-vote-yea'
    },
    {
      year: '1987',
      title: 'Ministerial Debut',
      description: 'Served as the Minister for Drought and Relief, gaining first-hand experience in public service.',
      icon: 'fa-briefcase'
    },
    {
      year: '1999',
      title: 'Deputy Speaker',
      description: 'Appointed as the Deputy Speaker of the Andhra Pradesh Legislative Assembly.',
      icon: 'fa-gavel'
    },
    {
      year: '2001',
      title: 'Birth of TRS',
      description: 'Resigned from TDP to form the Telangana Rashtra Samithi (TRS) to fight for a separate state.',
      icon: 'fa-flag'
    },
    {
      year: '2004',
      title: 'Union Ministry',
      description: 'Became the Union Minister for Labour and Employment in the UPA government.',
      icon: 'fa-landmark'
    },
    {
      year: '2009',
      title: 'The Great Fast',
      description: 'His fast-unto-death became the catalyst for the historic announcement of Telangana statehood.',
      icon: 'fa-fist-raised'
    },
    {
      year: '2014',
      title: 'The First CM',
      description: 'Sworn in as the first Chief Minister of the newly formed state of Telangana.',
      icon: 'fa-user-tie'
    },
    {
      year: '2017',
      title: 'Welfare Revolution',
      description: 'Launched the KCR Kit and Rythu Bandhu schemes, transforming rural and maternal healthcare.',
      icon: 'fa-hands-helping'
    },
    {
      year: '2019',
      title: 'Engineering Marvel',
      description: "Inaugurated the Kaleshwaram Project, the world's largest multi-stage lift irrigation system.",
      icon: 'fa-water'
    },
    {
      year: '2022',
      title: 'National Vision',
      description: 'Transformed TRS into BRS (Bharat Rashtra Samithi) to take the Telangana model to the nation.',
      icon: 'fa-globe'
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
                      {/* Front: Year & Title */}
                      <div className="timeline-box-front">
                        <div className="timeline-year-header">{item.year}</div>
                        <div className="timeline-front-content">
                          <i className={`fas ${item.icon} main-icon`}></i>
                          <h4>{item.title}</h4>
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
                  </div>
                  <div className="timeline-connector">
                    <div className="connector-line"></div>
                    <div className="connector-dot"></div>
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
