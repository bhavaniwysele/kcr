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
    description:
      'February 17 — Chintamadaka. A child arrives in a village that would one day lend its name to a movement.',
    quote:
      'Before the microphones, before the marches — there was only soil, sky, and a name yet to be spoken aloud.',
    image: img1954,
  },
  {
    year: '1970',
    title: 'Political Prelude',
    description:
      'Student halls and Youth Congress — the first fire of public voice, sharpened on debate and dissent.',
    quote: 'They asked us to wait. We learned to speak while the room was still listening.',
    image: imgPrelude,
  },
  {
    year: '1975',
    title: 'Marriage & Personal Life',
    description:
      'Smt. Shobha — partnership forged in tradition, steadiness that would anchor decades of struggle.',
    quote: 'A home built in quiet becomes the fortress from which a people are served.',
    image: imgMarriage,
  },
  {
    year: '1985',
    title: 'First MLA Victory',
    description:
      'Siddipet sends him to the Assembly — the legislative chapter opens, measured in constituencies kept.',
    quote: 'Siddipet did not elect a man. It entrusted a promise written in ballot ink.',
    image: imgMLA,
  },
  {
    year: '1987',
    title: 'Ministerial Debut',
    description:
      'Minister for Drought and Relief — governance learned in fields cracked by sun and debt.',
    quote: 'Relief is not charity. It is the state remembering its duty to the hungry.',
    image: imgMinister,
  },
  {
    year: '1999',
    title: 'Deputy Speaker',
    description:
      'The Andhra Pradesh Assembly — order, procedure, and the weight of the chair behind him.',
    quote: 'In the chamber, every word must carry the weight of those who sent you there.',
    image: imgSpeaker,
  },
  {
    year: '2001',
    title: 'Birth of TRS',
    description:
      'Resignation from TDP. Telangana Rashtra Samithi — a separate flag raised for a separate dream.',
    quote: 'When the door closed on compromise, we opened a new one called Telangana.',
    image: imgTRS,
  },
  {
    year: '2004',
    title: 'Union Ministry',
    description:
      'Labour and Employment at the Centre — national corridors, state cause carried in diplomatic tone.',
    quote: 'Delhi hears many voices. Ours would not be lowered until the nation understood.',
    image: imgUnion,
  },
  {
    year: '2009',
    title: 'The Great Fast',
    description:
      'Fast-unto-death — body as argument, silence as thunder, statehood trembling on the edge of announcement.',
    quote: 'I will not eat until my people are heard. Hunger became our loudest speech.',
    image: imgFast,
  },
  {
    year: '2014',
    title: 'The First CM',
    description:
      'Sworn in as Chief Minister of Telangana — a map redrawn, a capital reborn, history divided into before and after.',
    quote: 'Today we are not a region asking. We are a state answering.',
    image: imgCM,
  },
  {
    year: '2017',
    title: 'Welfare Revolution',
    description:
      'KCR Kit, Rythu Bandhu — schemes written into soil and maternity wards across the newborn state.',
    quote: 'Welfare is not a slogan. It is grain in the field and breath in the nursery.',
    image: imgWelfare,
  },
  {
    year: '2019',
    title: 'Engineering Marvel',
    description:
      'Kaleshwaram — water lifted across stages, desert logic overturned by engineering will.',
    quote: 'Rivers do not climb mountains. We taught them how.',
    image: imgEngineering,
  },
  {
    year: '2022',
    title: 'National Vision',
    description:
      'TRS becomes BRS — the Telangana model steps beyond borders, seeking a nation-scale echo.',
    quote: 'What we built here was never meant to stay within these lines on the map.',
    image: imgNational,
  },
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
                <span className="timeline-chapter-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="timeline-title">{item.title}</h2>
                <p className="timeline-desc">{item.description}</p>
                {item.quote ? (
                  <blockquote className="timeline-speech">
                    <span className="timeline-speech-mark" aria-hidden="true">
                      &ldquo;
                    </span>
                    <p className="timeline-speech-text">{item.quote}</p>
                    <footer className="timeline-speech-footer">
                      <span className="timeline-speech-line" aria-hidden="true" />
                      <cite>— recorded in spirit, {item.year}</cite>
                    </footer>
                  </blockquote>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
