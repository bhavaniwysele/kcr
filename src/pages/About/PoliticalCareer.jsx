import React from 'react';
import { motion } from 'framer-motion';
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
import mainImg4 from '../../assets/new_kcr.jpg';
import resistanceIntroImg from '../../assets/pl_2.jpg';

const heroSlideFromLeftTransition = {
  duration: 1.9,
  ease: [0.22, 1, 0.36, 1],
};

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.32, delayChildren: 0.2 },
  },
};

const heroSlideLeftVariants = {
  hidden: { opacity: 0, x: -160 },
  visible: {
    opacity: 1,
    x: 0,
    transition: heroSlideFromLeftTransition,
  },
};

const statehoodSteps = [
  { label: 'The Foundation', title: '2001: TRS Founding', desc: 'Resigned as Deputy Speaker to float TRS with a single-point agenda.' },
  { label: 'The Agitation', title: '2009: The Historic Fast', desc: 'Undertook a fast unto death, forcing national focus on the demand.' },
  { label: 'The Breakthrough', title: '2013: Cabinet Approval', desc: 'The Union Cabinet finally approves the formation of the new state.' },
  { label: 'The Vision Realized', title: '2014: State Formation', desc: 'Telangana is officially formed, and KCR takes oath as the first CM.' },
];

const PoliticalCareer = () => {
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
        <motion.div
          className="political-hero-content"
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
        >
          <motion.h1 variants={heroSlideLeftVariants}>
            Journey of a Visionary Architect
          </motion.h1>
          <motion.p variants={heroSlideLeftVariants}>
            Redefining the political landscape of a nation through resilience,
            strategic brilliance, and the unwavering pursuit of a people&apos;s dream.
          </motion.p>
        </motion.div>

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
            <div className="stepper-title-image-wrap">
              <motion.img
                src={mainImg4}
                alt="KCR and leaders at the Telangana statehood movement"
                className="stepper-title-image"
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
            <h2>The Path to Telangana <br/> Statehood</h2>
          </motion.div>
          
          <div className="stepper-right">
            {statehoodSteps.map((item, idx) => (
              <div className="minimal-step-item" key={idx}>
                <div className="minimal-step-rail" aria-hidden="true">
                  <motion.span
                    className="minimal-step-marker"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.55 }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.18,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="minimal-step-marker-inner" />
                  </motion.span>
                  {idx < statehoodSteps.length - 1 && (
                    <motion.span
                      className="minimal-step-connector"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: false, amount: 0.35 }}
                      transition={{
                        duration: 0.55,
                        delay: idx * 0.18 + 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  )}
                </div>
                <motion.div
                  className="minimal-step-body"
                  initial={{ opacity: 0, y: -32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.45 }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.18 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3>{item.label}</h3>
                  <p>
                    <strong>{item.title}</strong> - {item.desc}
                  </p>
                </motion.div>
              </div>
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
            <div className="years-resistance-slider-wrap">
            <button type="button" className="years-resistance-prev" aria-label="Previous slide">
              ←
            </button>
            <Swiper
              className="years-resistance-swiper"
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
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
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
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
            <button type="button" className="years-resistance-next" aria-label="Next slide">
              →
            </button>
            </div>

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
