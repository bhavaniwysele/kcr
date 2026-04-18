import React from 'react';
import './Timeline.css';

// Importing images for timeline milestones
import img1954 from '../../assets/1954.jpg';
import imgPrelude from '../../assets/Political Prelude.jpg';
import imgMarriage from '../../assets/Marriage & Personal Life.jpg';
import imgMLA from '../../assets/young kcr.webp';
import imgMinister from '../../assets/Ministerial Debut.jpg';
import imgSpeaker from '../../assets/Deputy Speaker.jpg';
import imgTRS from '../../assets/Birth of TRS.jpg';
import imgUnion from '../../assets/Union Ministry.jpg';
import imgFast from '../../assets/The Great Fast.webp';
import imgCM from '../../assets/kcr The First CM.jpg';
import imgWelfare from '../../assets/healthandwelfare.webp';
import imgEngineering from '../../assets/Kaleshwaram Project.webp';
import imgNational from '../../assets/National Vision.webp';

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
    image: imgPrelude
  },
  {
    year: '1975',
    title: 'Marriage & Personal Life',
    description: 'Married Smt. Shobha, starting a lifelong partnership that would support his political journey.',
    image: imgMarriage
  },
  {
    year: '1985',
    title: 'First MLA Victory',
    description: 'Elected as MLA for the first time from Siddipet, marking the start of his legislative legacy.',
    image: imgMLA
  },
  {
    year: '1987',
    title: 'Ministerial Debut',
    description: 'Served as the Minister for Drought and Relief, gaining first-hand experience in public service.',
    image: imgMinister
  },
  {
    year: '1999',
    title: 'Deputy Speaker',
    description: 'Appointed as the Deputy Speaker of the Andhra Pradesh Legislative Assembly.',
    image: imgSpeaker
  },
  {
    year: '2001',
    title: 'Birth of TRS',
    description: 'Resigned from TDP to form the Telangana Rashtra Samithi (TRS) to fight for a separate state.',
    image: imgTRS
  },
  {
    year: '2004',
    title: 'Union Ministry',
    description: 'Became the Union Minister for Labour and Employment in the UPA government.',
    image: imgUnion
  },
  {
    year: '2009',
    title: 'The Great Fast',
    description: 'His fast-unto-death became the catalyst for the historic announcement of Telangana statehood.',
    image: imgFast
  },
  {
    year: '2014',
    title: 'The First CM',
    description: 'Sworn in as the first Chief Minister of the newly formed state of Telangana.',
    image: imgCM
  },
  {
    year: '2017',
    title: 'Welfare Revolution',
    description: 'Launched the KCR Kit and Rythu Bandhu schemes, transforming rural and maternal healthcare.',
    image: imgWelfare
  },
  {
    year: '2019',
    title: 'Engineering Marvel',
    description: 'Inaugurated the Kaleshwaram Project, the world\'s largest multi-stage lift irrigation system.',
    image: imgEngineering
  },
  {
    year: '2022',
    title: 'National Vision',
    description: 'Transformed TRS into BRS (Bharat Rashtra Samithi) to take the Telangana model of development to the nation.',
    image: imgNational
  }
];

const Timeline = () => {
  return (
    <div className="timeline-section">
      <div className="timeline-container">
        <header className="timeline-header">
          <h1>The Journey</h1>
          <p>Chronological highlights of a transformative career.</p>
        </header>
        
        <div className="timeline-list">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-row">
              <div className="timeline-left">
                <div className="timeline-image-container">
                  <img src={item.image} alt={item.year} className="timeline-bg-image" />
                  <span className="timeline-year">{item.year}</span>
                </div>
              </div>
              <div className="timeline-right">
                <h2 className="timeline-title">{item.title}</h2>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
