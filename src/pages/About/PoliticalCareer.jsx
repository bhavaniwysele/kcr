import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './PoliticalCareer.css';
import Timeline from './Timeline';

const resistanceTopics = [
  {
    id: 'criticism',
    title: 'Criticism',
    text: 'Dismissed in press rooms and assembly halls, the demand was mocked as impractical—yet every attack only sharpened the clarity of the cause.',
  },
  {
    id: 'pressure',
    title: 'Political Pressure',
    text: 'Alliances tested, offices offered and withdrawn—the movement faced constant pressure to compromise, dilute, or abandon the goal of statehood.',
  },
  {
    id: 'challenges',
    title: 'Movement Challenges',
    text: 'Splits, setbacks, and years of stalemate tested organizers and volunteers alike. Each obstacle demanded renewed strategy and collective discipline.',
  },
  {
    id: 'mobilization',
    title: 'Public Mobilization',
    text: 'From village squares to capital streets, students, farmers, employees, and families marched—turning private grief into a statewide chorus for justice.',
  },
  {
    id: 'sacrifices',
    title: 'Sacrifices',
    text: 'Lives lost, careers paused, and families strained—the price of resistance was paid in courage long before it was written into history books.',
  },
  {
    id: 'persistence',
    title: 'Persistence',
    text: 'Through fasts, elections, and decades of agitation, the conviction never faded: Telangana deserved dignity, self-rule, and a future of its own.',
  },
];

// Import assets
import politicalHeroImg from '../../assets/political_career_hero.jpg';
import fractureBgImg from '../../assets/political_career_2.png';
import mainImg4 from '../../assets/political_main4.jpg';
import resistanceIntroImg from '../../assets/pl_2.jpg';

const slideFromTopTransition = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1],
};

const heroSlideFromLeftTransition = {
  duration: 1.45,
  ease: [0.16, 1, 0.3, 1],
};

const fractureCallouts = [
  {
    id: 'catalyst',
    title: 'The Catalyst:',
    text:
      'Deeply rooted discrimination. KCR argued the Telangana region suffered a raw deal, citing farmer suicides, distress sales of infants, and the closure of key industrial plants while other regions prospered.',
    placement: 'catalyst',
  },
  {
    id: 'vehicle',
    title: 'The Vehicle:',
    text:
      'Formed the Telangana Rashtra Samithi (TRS) at Jala Drushyam, Hyderabad. The single-point agenda: achieving separate Telangana statehood.',
    placement: 'vehicle',
  },
  {
    id: 'validation',
    title: 'Early Validation:',
    text:
      'Won five MP seats in the 2004 general elections allied with Congress, elevating KCR to Union Cabinet Minister of Labour and Employment.',
    placement: 'validation',
  },
];

const PoliticalCareer = () => {
  const fractureSectionRef = useRef(null);
  const fractureInView = useInView(fractureSectionRef, { once: true, amount: 0.12 });
  return (
    <div className="political-career-new">
      {/* Hero Section */}
      <section className="political-hero">
        <img
          src={politicalHeroImg}
          alt=""
          className="political-hero-bg"
          aria-hidden="true"
        />
        <motion.div className="political-hero-content">
          <motion.h1
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={heroSlideFromLeftTransition}
          >
            Journey of a Visionary Architect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...heroSlideFromLeftTransition, delay: 0.4 }}
          >
            Redefining the political landscape of a nation through resilience,
            strategic brilliance, and the unwavering pursuit of a people&apos;s dream.
          </motion.p>
        </motion.div>

      </section>

      {/* The Fracture and the Founding */}
      <section
        className="fracture-founding-section"
        ref={fractureSectionRef}
        aria-label="The Fracture and the Founding"
      >
        <div className="fracture-founding-canvas">
          <img
            src={fractureBgImg}
            alt="The Fracture and the Founding: Andhra Pradesh map splitting at 2001"
            className="fracture-founding-base"
          />

          {fractureCallouts.map((item, index) => (
            <motion.article
              key={item.id}
              className={`fracture-callout fracture-callout--${item.placement}`}
              initial={false}
              animate={fractureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -56 }}
              transition={{ ...slideFromTopTransition, delay: 0.08 + index * 0.12 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Path to Statehood Section */}
      <section className="career-stepper-minimal">
        <div className="stepper-minimal-container">
          <motion.div 
            className="stepper-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={mainImg4} 
              alt="Historical context" 
              className="stepper-title-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <h2>The Path to Telangana <br/> Statehood</h2>
          </motion.div>
          
          <div className="stepper-right">
            <motion.div 
              className="vertical-line"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            {[
              { label: 'The Foundation', title: '2001: TRS Founding', desc: 'Resigned as Deputy Speaker to float TRS with a single-point agenda.' },
              { label: 'The Agitation', title: '2009: The Historic Fast', desc: 'Undertook a fast unto death, forcing national focus on the demand.' },
              { label: 'The Breakthrough', title: '2013: Cabinet Approval', desc: 'The Union Cabinet finally approves the formation of the new state.' },
              { label: 'The Vision Realized', title: '2014: State Formation', desc: 'Telangana is officially formed, and KCR takes oath as the first CM.' }
            ].map((item, idx) => (
              <motion.div 
                className="minimal-step-item" 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
              >
                <h3>{item.label}</h3>
                <p><strong>{item.title}</strong> - {item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Years of Resistance */}
      <section className="years-resistance-section" aria-labelledby="years-resistance-heading">
        <div className="years-resistance-inner">
          <div className="years-resistance-stage">
          <motion.div
            className="years-resistance-intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="years-resistance-intro-media">
              <img src={resistanceIntroImg} alt="Telangana movement gathering" />
            </div>
            <div className="years-resistance-intro-copy">
              <h2 id="years-resistance-heading">Years of Resistance</h2>
              <p>
                Before statehood was won, the movement endured criticism, coercion, and loss—held
                together by mobilization, sacrifice, and an unbroken will to see Telangana free.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="years-resistance-carousel"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <button type="button" className="years-resistance-prev" aria-label="Previous slide">
              ←
            </button>

            <div className="years-resistance-slider-wrap">
            <Swiper
              className="years-resistance-swiper"
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={14}
              slidesPerView={1}
              loop
              speed={950}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              navigation={{
                prevEl: '.years-resistance-prev',
                nextEl: '.years-resistance-next',
              }}
              pagination={{
                clickable: true,
                el: '.years-resistance-pagination',
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 14 },
                1024: { slidesPerView: 3, spaceBetween: 14 },
              }}
            >
              {resistanceTopics.map((topic) => (
                <SwiperSlide key={topic.id}>
                  <article className="resistance-card">
                    <div className="resistance-card-head">
                      <span className="resistance-card-dot" aria-hidden="true" />
                      <h3>{topic.title}</h3>
                    </div>
                    <p>{topic.text}</p>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>

            <button type="button" className="years-resistance-next" aria-label="Next slide">
              →
            </button>

            <div className="years-resistance-pagination" aria-label="Slide pagination" />
          </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />
    </div>
  );
};

export default PoliticalCareer;
