import React from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import './Overview.css';

// Image Imports
import topBanner from '../../assets/overview_top_edited.jpg';
import main3 from '../../assets/overview_main3.jpg';
import main4 from '../../assets/overview_main4.jpg';
import main5 from '../../assets/overview_main5.jpg';
import unionMin from '../../assets/Union Ministry.jpg';
import youngKcr from '../../assets/young kcr.webp';
import main6 from '../../assets/overview_main6.jpg';
import telanganaMovement from '../../assets/telangana_movement.jpg';
import visionDignityBg from '../../assets/vision_dignity_bg.png';
import visionFutureBg from '../../assets/vision_future_bg.png';
import visionBangaruBg from '../../assets/vision_bangaru_bg.png';

const slideTransition = {
  type: 'spring',
  visualDuration: 1,
  bounce: 0.06,
};

const numberTransition = {
  duration: 0.26,
  ease: [0.22, 1, 0.36, 1],
};

const visionSlideTransition = {
  duration: 1.35,
  ease: [0.22, 1, 0.36, 1],
};

const introSlideTransition = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1],
};

const StoryStep = ({ item, index, maxRevealedStep, onInView, isActive }) => {
  const isRevealed = index <= maxRevealedStep;

  return (
    <motion.div
      className={`story-card-v ${isActive ? 'is-active' : ''}`}
      onViewportEnter={onInView}
      viewport={{ amount: 0.45, margin: '0px 0px -15% 0px' }}
      initial={false}
    >
      <motion.span
        className="story-card-accent"
        aria-hidden="true"
        animate={{ opacity: isActive ? 1 : 0.35 }}
        transition={slideTransition}
      />
      <motion.div
        className="story-card-inner"
        initial={false}
        style={{ transformOrigin: 'left center' }}
        animate={{ x: isRevealed ? 0 : '-100%' }}
        transition={isActive ? slideTransition : { duration: 0 }}
      >
        <div className="card-v-img-container">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="card-v-content">
          {item.subtitle ? <p className="card-v-subtitle">{item.subtitle}</p> : null}
          <h3 className="card-v-title">{item.title}</h3>
          <p className="card-v-text">{item.text}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Overview = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [maxRevealedStep, setMaxRevealedStep] = React.useState(-1);
  const storySectionRef = React.useRef(null);
  const storyContainerRef = React.useRef(null);
  const counterColumnRef = React.useRef(null);
  const introSectionRef = React.useRef(null);
  const introInView = useInView(introSectionRef, { once: true, amount: 0.2 });
  const visionSectionRef = React.useRef(null);
  const visionInView = useInView(visionSectionRef, { once: true, amount: 0.15 });
  const [isCounterFixed, setIsCounterFixed] = React.useState(false);
  const [counterLeft, setCounterLeft] = React.useState(0);

  const storyData = [
    {
      id: 1,
      title: "Early Foundations",
      img: main3,
      text: "Before stepping into the public eye, he was a young man with a vision, briefly working in the recruitment sector. It was here that he first witnessed the stark challenges faced by ordinary citizens."
    },
    {
      id: 2,
      title: "A Heart for the People",
      img: main4,
      text: "His official journey began with a simple but powerful desire: to give his people a voice. Initially working behind the scenes, he realized his heart beat solely for the cause of statehood."
    },
    {
      id: 3,
      title: "The Turning Point",
      subtitle: "Why Telangana became his life's calling",
      img: telanganaMovement,
      text: "Across the region he heard the same human story—water denied, jobs scarce, identity overlooked, and quiet neglect wearing families down. Listening to students, farmers, employees, and youth, he understood their pain as lives, not statistics. Telangana needed self-governance—and he chose to dedicate his entire political life to that conviction."
    },
    {
      id: 4,
      title: "National Influence",
      img: unionMin,
      text: "His tenure in the national arena was a masterclass in diplomacy. Using his platform in Delhi, he carried the voices he had heard on the ground—patiently, persistently—building alliances so Telangana's story could not be ignored."
    },
    {
      id: 5,
      title: "Uniting a Region",
      img: main5,
      text: "With his heart already committed, he took the movement to every corner of the region. Through empathy and oratory, he turned private grief into shared hope—binding families, students, farmers, and workers into one collective dream."
    },
    {
      id: 6,
      title: "Architect of Progress",
      img: main6,
      text: "Today, he is remembered not only for what was built, but for how people were made to feel seen. He remains a father figure to many—guiding with intellectual depth, rooted compassion, and the belief that leadership begins with listening."
    }
  ];
  const activeStory = storyData[activeStep] || storyData[0];

  const visionBeyondData = [
    {
      id: 1,
      icon: 'fa-solid fa-crown',
      bg: visionDignityBg,
      title: 'Dignity & Self-Respect',
      text: 'Statehood was never only about borders—it was about restoring the dignity of a people who had waited decades to be heard. Every policy, every promise, carried one unspoken vow: that Telangana would stand on its own feet, with pride intact and identity honoured.',
    },
    {
      id: 2,
      icon: 'fa-solid fa-children',
      bg: visionFutureBg,
      title: 'For Future Generations',
      text: 'The movement was fought not for headlines, but for children yet unborn—so they would inherit schools, water, opportunity, and a homeland that feels like home. Leadership, in his view, is measured by what we leave behind, not what we claim today.',
    },
    {
      id: 3,
      icon: 'fa-solid fa-sun',
      bg: visionBangaruBg,
      title: 'Bangaru Telangana',
      text: 'Bangaru Telangana—the Golden Telangana—is a dream woven from welfare, irrigation, and inclusive growth. It is a vision that rises above party lines: a prosperous, compassionate state where every family shares in the glow of progress.',
    },
  ];

  React.useEffect(() => {
    const topOffset = 130;
    const counterHeight = 120;

    const updateCounterPosition = () => {
      if (!storySectionRef.current || !storyContainerRef.current || !counterColumnRef.current) return;

      if (window.innerWidth <= 768) {
        setIsCounterFixed(false);
        return;
      }

      // Bound fixed behavior to the cards container only (prevents overlap with section title).
      const containerRect = storyContainerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + containerRect.top;
      const containerBottom = containerTop + storyContainerRef.current.offsetHeight;
      const triggerLine = window.scrollY + topOffset;

      const columnRect = counterColumnRef.current.getBoundingClientRect();
      setCounterLeft(columnRect.left + (columnRect.width / 2));

      const canFix =
        triggerLine >= containerTop &&
        triggerLine + counterHeight <= containerBottom;

      setIsCounterFixed(canFix);
    };

    updateCounterPosition();
    window.addEventListener('scroll', updateCounterPosition, { passive: true });
    window.addEventListener('resize', updateCounterPosition);

    return () => {
      window.removeEventListener('scroll', updateCounterPosition);
      window.removeEventListener('resize', updateCounterPosition);
    };
  }, []);

  return (
    <div className="overview-page">
      {/* Top Banner (Already requested in previous turns) */}
      <section className="overview-header">
        <img src={topBanner} alt="KCR Overview Header" className="header-bg-image" />
      </section>

      <main className="overview-container">
        {/* Intro Section - Inspired by the layout reference */}
        <section className="intro-block" ref={introSectionRef}>
          <motion.div
            className="intro-image-container"
            initial={false}
            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -56 }}
            transition={introSlideTransition}
          >
            <div className="decoration-circle top-left">
              <i className="fas fa-leaf"></i>
            </div>
            <img src={youngKcr} alt="Young KCR" className="main-intro-img" />
            <div className="decoration-circle bottom-right">
              <i className="fas fa-seedling"></i>
            </div>
          </motion.div>
          <motion.div
            className="intro-content"
            initial={false}
            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -56 }}
            transition={{ ...introSlideTransition, delay: 0.15 }}
          >
            <h2 className="section-title">The Journey of a Visionary</h2>
            <div className="narrative-text">
              <p>
                Born in the quiet village of Chintamadaka in Medak district, Kalvakuntla Chandrashekar Rao—fondly known as KCR—was shaped by the very soil and culture of Telangana. Growing up in a traditional family, he developed a deep-rooted connection to the land and its people from a very young age.
              </p>
              <p>
                As a child, he was often found with a book in his hand, showing a keen interest in literature and the history of his land. His school days in Dubbak and Siddipet were not just about academics; they were formative years where he developed his articulate nature and a strong sense of justice that would later define his leadership.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Story Section - Vertical Sticky Scroll Layout */}
        <section className="story-scroll-section" ref={storySectionRef}>
          <h2 className="grid-main-title">The Human Story Behind the Leader</h2>
          <p className="grid-main-subtitle">Moments of listening, conviction, and purpose—not a ledger of achievements</p>
          
          <div className="story-scroll-container" ref={storyContainerRef}>
            {/* Left Side: Sticky Counter */}
            <div className="story-counter-sticky" ref={counterColumnRef}>
              <div
                className={`counter-wrapper ${isCounterFixed ? 'counter-fixed' : 'counter-static'}`}
                style={isCounterFixed ? { left: `${counterLeft}px` } : undefined}
              >
                <div className="active-number-display">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStory.id}
                      className="active-number-wrap is-active"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={numberTransition}
                    >
                      <span className="count-number">
                        {activeStory.id < 10 ? `0${activeStory.id}` : activeStory.id}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Side: Scrolling Cards */}
            <div className="story-cards-scroll">
              {storyData.map((item, index) => (
                <StoryStep
                  key={item.id}
                  item={item}
                  index={index}
                  maxRevealedStep={maxRevealedStep}
                  isActive={activeStep === index}
                  onInView={() => {
                    setActiveStep(index);
                    setMaxRevealedStep((prev) => Math.max(prev, index));
                  }}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Vision Beyond Politics — emotional closure */}
        <section className="vision-beyond-section" ref={visionSectionRef}>
          <h2 className="vision-beyond-title">A Vision Beyond Politics</h2>
          <p className="vision-beyond-subtitle">
          Beyond politics dignity restored, pride reclaimed, and a golden Telangana for every child yet to come.
          </p>

          <motion.div
            className="vision-beyond-grid"
            initial={false}
            animate={visionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '100vw' }}
            transition={visionSlideTransition}
          >
            {visionBeyondData.map((box) => (
              <article
                key={box.id}
                className="vision-beyond-card"
                style={{ '--vision-card-bg': `url(${box.bg})` }}
              >
                <div className="vision-beyond-card-bg" aria-hidden="true" />
                <motion.div
                  className="vision-beyond-icon"
                  whileHover={{ scale: 1.08 }}
                  transition={slideTransition}
                >
                  <i className={box.icon} aria-hidden="true" />
                </motion.div>
                <h3 className="vision-beyond-card-title">{box.title}</h3>
                <p className="vision-beyond-card-text">{box.text}</p>
              </article>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Overview;
