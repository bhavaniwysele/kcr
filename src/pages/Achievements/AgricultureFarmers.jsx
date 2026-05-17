import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import './AgricultureFarmers.css';
import agriHeroImg from '../../assets/telangana_lush_green_paddy_field_sunset.png';
import farmerImg from '../../assets/rythu_bandhu_farmer_happy_smiling_field.png';
import rythuBandhuBg from '../../assets/rythu_bandhu_bg.png';
import freePowerBg from '../../assets/free_power_bg.png';
import missionKakatiyaBg from '../../assets/mission_kakatiya_bg.png';
import loanWaiverBg from '../../assets/loan_waiver_bg.png';

const AGRI_CARD_SLIDE_EASE = [0.16, 1, 0.3, 1];
const AGRI_CARD_SLIDE_DURATION = 1.35;

const agriCardSlideFromLeftVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: AGRI_CARD_SLIDE_DURATION, ease: AGRI_CARD_SLIDE_EASE, delay },
  }),
};

const agriCardSlideFromRightVariants = {
  hidden: { opacity: 0, x: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: AGRI_CARD_SLIDE_DURATION, ease: AGRI_CARD_SLIDE_EASE, delay },
  }),
};

function AgriSlideCard({ delay = 0, className = 'agri-card', from = 'left', children }) {
  const reduceMotion = useReducedMotion();
  const variants = from === 'right' ? agriCardSlideFromRightVariants : agriCardSlideFromLeftVariants;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

const EDITORIAL_TOP_OFFSET = 120;
const EDITORIAL_STICKY_BREAKPOINT = 1024;

const AgricultureFarmers = () => {
  const editorialSectionRef = useRef(null);
  const editorialMainRef = useRef(null);
  const sidebarSlotRef = useRef(null);
  const [sidebarMode, setSidebarMode] = useState('static');
  const [sidebarLeft, setSidebarLeft] = useState(0);

  useEffect(() => {
    const updateSidebarPosition = () => {
      const section = editorialSectionRef.current;
      const main = editorialMainRef.current;
      const slot = sidebarSlotRef.current;
      if (!section || !main || !slot) return;

      const sidebar = slot.querySelector('.editorial-sidebar');
      if (!sidebar) return;

      if (window.innerWidth <= EDITORIAL_STICKY_BREAKPOINT) {
        slot.style.height = '';
        setSidebarMode('static');
        return;
      }

      const mainHeight = main.offsetHeight;
      slot.style.height = `${mainHeight}px`;

      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      const mainBottom = window.scrollY + main.getBoundingClientRect().top + mainHeight;
      const triggerLine = window.scrollY + EDITORIAL_TOP_OFFSET;
      const sidebarHeight = sidebar.offsetHeight;

      const columnRect = slot.getBoundingClientRect();
      setSidebarLeft(columnRect.left + columnRect.width / 2);

      if (triggerLine < sectionTop) {
        setSidebarMode('static');
      } else if (triggerLine + sidebarHeight < mainBottom) {
        setSidebarMode('fixed');
      } else {
        setSidebarMode('bottom');
      }
    };

    updateSidebarPosition();
    window.addEventListener('scroll', updateSidebarPosition, { passive: true });
    window.addEventListener('resize', updateSidebarPosition);

    const main = editorialMainRef.current;
    const resizeObserver =
      main && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(updateSidebarPosition)
        : null;
    resizeObserver?.observe(main);

    return () => {
      window.removeEventListener('scroll', updateSidebarPosition);
      window.removeEventListener('resize', updateSidebarPosition);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <div className="agriculture-page">
      {/* Hero Section */}
      <section className="agri-hero">
        <img src={agriHeroImg} alt="Telangana Agriculture" />
        <div className="agri-hero-content">
          <p className="agri-hero-tagline">Cultivating Prosperity</p>
          <h1 className="agri-hero-title" aria-label="Agriculture Development">
            <span className="agri-hero-title-word agri-hero-title-word--left">Agriculture</span>
            <span className="agri-hero-title-word agri-hero-title-word--right">Development</span>
          </h1>
        </div>
      </section>

      {/* Quote/Mission Section */}
      <section className="agri-quote">
        <h2>"The farmer is the king of the state. If the farmer is happy, the state is prosperous. Our mission is to make agriculture a festival, not a burden."</h2>
        <span>— K. Chandrashekar Rao</span>
      </section>

      {/* Stats Bar */}
      <section className="agri-stats">
        <div className="stat-item">
          <i className="fa-solid fa-seedling"></i>
          <h4>3.0 Cr</h4>
          <p>Tonnes Paddy Production</p>
        </div>
        <div className="stat-item">
          <i className="fa-solid fa-hand-holding-dollar"></i>
          <h4>₹72,000 Cr</h4>
          <p>Disbursed via Rythu Bandhu</p>
        </div>
        <div className="stat-item">
          <i className="fa-solid fa-bolt"></i>
          <h4>24 X 7</h4>
          <p>Free Quality Power</p>
        </div>
        <div className="stat-item">
          <i className="fa-solid fa-shield-heart"></i>
          <h4>100%</h4>
          <p>Financial Security (Rythu Bima)</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="agri-grid">
        <AgriSlideCard delay={0}>
          <span className="card-num">01</span>
          <h3>Rythu Bandhu</h3>
          <p>
            Launched as the first-of-its-kind investment support scheme in India, Rythu Bandhu provides ₹10,000 per acre per year to farmers. It eliminates the clutches of private moneylenders and empowers farmers to purchase seeds and fertilizers on time.
          </p>
          <Link to="/schemes#rythu-bandhu-hero" className="agri-btn">
            <span>Know More</span>
            <div className="agri-btn-icon">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
            <svg width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" rx="30" ry="30"/>
            </svg>
          </Link>
          <img src={rythuBandhuBg} alt="" className="card-bg-img" />
        </AgriSlideCard>

        <AgriSlideCard delay={0.22}>
          <span className="card-num">02</span>
          <h3>24/7 Free Power</h3>
          <p>
            Telangana is the only state in India providing 24x7 free, high-quality power to over 27 lakh agricultural pump sets. This revolutionary step has stabilized irrigation and significantly increased crop yields across all seasons.
          </p>
          <img src={freePowerBg} alt="" className="card-bg-img" />
        </AgriSlideCard>

        <AgriSlideCard className="agri-card full-width" from="right">
          <div className="card-image">
            <img src={farmerImg} alt="Happy Farmer" />
          </div>
          <div className="card-text">
            <h3>Rythu Bima: A Shield for Families</h3>
            <p>
              In an unprecedented move for social security, the KCR government introduced Rythu Bima, a group life insurance scheme. In the unfortunate event of a farmer's death, the family receives ₹5 lakh within 10 days, ensuring they don't fall into poverty. Over 1 lakh families have been supported by this shield of dignity.
            </p>
          </div>
        </AgriSlideCard>

        <AgriSlideCard delay={0}>
          <span className="card-num">03</span>
          <h3>Mission Kakatiya</h3>
          <p>
            The restoration of over 46,000 age-old tanks and lakes has revived the traditional irrigation system of Telangana. This has led to a dramatic rise in groundwater levels and rejuvenated the rural ecosystem.
          </p>
          <img src={missionKakatiyaBg} alt="" className="card-bg-img" />
        </AgriSlideCard>

        <AgriSlideCard delay={0.22}>
          <span className="card-num">04</span>
          <h3>Loan Waivers</h3>
          <p>
            Understanding the financial stress on the farming community, the government has implemented multiple rounds of crop loan waivers, clearing thousands of crores in debts to give farmers a fresh start and financial freedom.
          </p>
          <img src={loanWaiverBg} alt="" className="card-bg-img" />
        </AgriSlideCard>
      </section>

      {/* Editorial Section */}
      <section className="agri-editorial" ref={editorialSectionRef}>
        <div className="editorial-sidebar-slot" ref={sidebarSlotRef}>
          <div
            className={`editorial-sidebar${
              sidebarMode === 'fixed' ? ' is-fixed' : ''
            }${sidebarMode === 'bottom' ? ' is-at-bottom' : ''}`}
            style={sidebarMode === 'fixed' ? { left: `${sidebarLeft}px` } : undefined}
          >
            <h5>THE GRANARY</h5>
            <h2>From Scarcity to Surplus</h2>
          </div>
        </div>
        <div className="editorial-main" ref={editorialMainRef}>
          <p>
            A decade ago, Telangana was known for its parched lands and distressed farmers. Today, it stands proud as the "Granary of India." The transformation is not accidental; it is the result of a visionary leader who put the farmer at the heart of every policy.
          </p>
          <div className="highlight-box">
            <p>
              Paddy production has surged from 68 lakh tonnes in 2014 to over 3 crore tonnes in 2023, a feat unmatched in modern Indian history.
            </p>
          </div>
          <p>
            By integrating massive lift irrigation projects like Kaleshwaram with grassroots initiatives like Rythu Bandhu, KCR has turned agriculture into a profitable and prestigious profession. The green fields of Telangana are now a symbol of resilience and growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AgricultureFarmers;
