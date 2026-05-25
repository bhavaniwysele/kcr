import React from 'react';
import { motion } from 'framer-motion';
import './EconomicDevelopment.css';

// Import images
import industrialImg from '../../assets/ts_ipass_industrial_park.png';
import thubImg from '../../assets/thub_innovation_campus.png';
import itCorridorImg from '../../assets/it_corridor_hyderabad.png';
import economicBg from '../../assets/economicdevelopement_bg.jpg';

const EconomicDevelopment = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const digitalCardsContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.14,
                delayChildren: 0.08,
            },
        },
    };

    const slideFromRight = {
        hidden: { opacity: 0, x: 56 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const slideFromLeft = {
        hidden: { opacity: 0, x: -56 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const startupCardsContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.06,
            },
        },
    };

    const overlayContentContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.12,
            },
        },
    };

    const slideFromTop = {
        hidden: { opacity: 0, y: -48 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <div className="economic-page">
            
            {/* HERO SECTION - Inspired by Starbucks (Image 1) */}
            <section 
                className="hero-section"
                style={{ 
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${economicBg})` 
                }}
            >
                <div className="hero-header">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        The Engine of <br/><span>Modern Growth</span>
                    </motion.h1>
                    <p>Transforming Telangana through innovation, infrastructure, and opportunity.</p>
                </div>
            </section>

            {/* INDUSTRIAL GROWTH - Inspired by Image 4 (Overlapping Layered Layout) */}
            <section className="section-padding industrial-growth">
                <div className="container">
                    <motion.div className="layered-profile-container">
                        <motion.div className="image-blob" {...fadeIn}>
                            <img src={industrialImg} alt="Industrial Growth" />
                        </motion.div>
                        <motion.div
                            className="content-overlay-card"
                            variants={overlayContentContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <motion.span className="section-tag" variants={slideFromTop}>
                                Industrial Growth & Investment
                            </motion.span>
                            <motion.h2 variants={slideFromTop}>
                                Policies that <br/>Attract the World
                            </motion.h2>
                            <motion.p variants={slideFromTop}>
                                Telangana has emerged as a preferred destination for global investors through visionary policies and seamless approvals.
                            </motion.p>
                            <motion.div className="initiative-list" variants={overlayContentContainer}>
                                <motion.div className="init-item" variants={slideFromTop}>
                                    <div className="init-icon" aria-hidden="true">
                                        <i className="fa-solid fa-chart-line" />
                                    </div>
                                    <div className="init-text">
                                        <h4>Major Investments</h4>
                                        <p>Over ₹3.2 Lakh Cr attracted in a decade.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="init-item" variants={slideFromTop}>
                                    <div className="init-icon" aria-hidden="true">
                                        <i className="fa-solid fa-clipboard-check" />
                                    </div>
                                    <div className="init-text">
                                        <h4>Ease of Doing Business</h4>
                                        <p>Self-certification with 15-day approvals via TS-iPASS.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="init-item" variants={slideFromTop}>
                                    <div className="init-icon" aria-hidden="true">
                                        <i className="fa-solid fa-road" />
                                    </div>
                                    <div className="init-text">
                                        <h4>Infrastructure Driving Investment</h4>
                                        <p>
                                            Expanded roads and industrial corridors, stronger statewide connectivity, and logistics growth that keeps freight and supply chains moving.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* IT & TECH — Digital Telangana layout */}
            <section className="section-padding digital-section">
                <div className="container">
                    <div className="digital-layout">
                        <motion.div
                            className="digital-hero"
                            style={{ backgroundImage: `url(${itCorridorImg})` }}
                            {...fadeIn}
                        >
                            <div className="digital-hero-overlay" aria-hidden="true" />
                            <div className="digital-hero-content">
                                <span className="digital-tag">IT & Technology Expansion</span>
                                <h2 className="digital-title">
                                    Digital <span>Telangana</span>
                                </h2>
                                <p>
                                    Building a world-class digital infrastructure and ecosystem that drives
                                    innovation, creates opportunities, and powers economic growth.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="digital-cards"
                            variants={digitalCardsContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            <motion.article className="digital-card" variants={slideFromRight}>
                                <div className="digital-card-icon" aria-hidden="true">
                                    <i className="fa-solid fa-globe" />
                                </div>
                                <h3>IT Ecosystem</h3>
                                <p>
                                    Presence of global tech leaders like Amazon, Google, Meta and many more,
                                    driving Telangana&apos;s exports and strengthening its position as a leading
                                    technology destination.
                                </p>
                                <div className="digital-brands">
                                    <span className="digital-brand digital-brand--amazon">amazon</span>
                                    <span className="digital-brand digital-brand--google">Google</span>
                                    <span className="digital-brand digital-brand--meta">Meta</span>
                                </div>
                            </motion.article>

                            <motion.article className="digital-card digital-card--stat" variants={slideFromRight}>
                                <div className="digital-stat-top">
                                    <div className="digital-card-icon" aria-hidden="true">
                                        <i className="fa-solid fa-chart-line" />
                                    </div>
                                    <div className="digital-stat-copy">
                                        <p className="digital-stat">4X</p>
                                        <p className="digital-stat-label">
                                            Growth in IT Exports since 2014
                                        </p>
                                    </div>
                                </div>
                                <div className="digital-stat-bars" aria-hidden="true">
                                    <span style={{ height: '38%' }} />
                                    <span style={{ height: '58%' }} />
                                    <span style={{ height: '78%' }} />
                                    <span style={{ height: '100%' }} />
                                </div>
                                <div className="digital-growth-curve" aria-hidden="true" />
                            </motion.article>

                            <motion.article className="digital-card" variants={slideFromRight}>
                                <div className="digital-card-icon" aria-hidden="true">
                                    <i className="fa-solid fa-city" />
                                </div>
                                <h3>Tech Expansion</h3>
                                <p>
                                    Expanding the IT sector beyond Hyderabad to Warangal, Khammam, and
                                    Karimnagar — creating new tech hubs and thousands of high-quality jobs.
                                </p>
                                <div className="digital-cities">
                                    {['Warangal', 'Khammam', 'Karimnagar'].map((city) => (
                                        <span key={city} className="digital-city">
                                            <i className="fa-solid fa-building" aria-hidden="true" />
                                            {city}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>

                            <motion.article className="digital-card" variants={slideFromRight}>
                                <div className="digital-card-icon" aria-hidden="true">
                                    <i className="fa-solid fa-wifi" />
                                </div>
                                <h3>T-Fiber Connectivity</h3>
                                <p>
                                    T-Fiber project connecting every household with high-speed internet,
                                    bringing digital opportunities to rural and urban communities alike.
                                </p>
                                <p className="digital-card-footnote">
                                    <i className="fa-solid fa-house-signal" aria-hidden="true" />
                                    Every Home. Digitally Connected.
                                </p>
                            </motion.article>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* EMPLOYMENT - Minimal Split (Inspired by Image 3) */}
            <section className="section-padding employment-section">
                <div className="container">
                    <div className="split-view">
                        <motion.div className="split-image" {...fadeIn}>
                            <img src={thubImg} alt="Employment & Skills" />
                        </motion.div>
                        <motion.div className="split-text" {...fadeIn}>
                            <span className="section-tag">Employment & Skill Development</span>
                            <h2>Empowering <br/>Tomorrow’s Workforce</h2>
                            <p>Scaling youth employability through intensive industry-focused training and massive job creation.</p>
                            <ul className="check-list">
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span><strong>TASK Initiative:</strong> 7 Lakh+ students skilled for industry roles.</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span><strong>Job Creation:</strong> 17 Lakh+ jobs created via industrial expansion.</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    <span><strong>Future Workforce:</strong> Building a skilled generation ready for emerging industries and technology sectors.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* STARTUP ECOSYSTEM - High Dynamic Cards */}
            <section className="section-padding startup-cards">
                <div className="container">
                    <div className="section-header-centered">
                        <h2>Startup & Innovation Ecosystem</h2>
                        <p>Fostering the next generation of entrepreneurs and hardware innovators.</p>
                    </div>
                    <motion.div
                        className="startup-grid"
                        variants={startupCardsContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div className="startup-card-premium" variants={slideFromLeft}>
                            <div className="card-top">
                                <span className="count">01</span>
                                <h3>T-Hub</h3>
                            </div>
                            <p>India's leading innovation gateway, nurturing thousands of startups and global connections.</p>
                            <div className="card-footer">
                                <span className="footer-tag">Largest Campus</span>
                            </div>
                        </motion.div>
                        <motion.div className="startup-card-premium pink-bg" variants={slideFromTop}>
                            <div className="card-top">
                                <span className="count">02</span>
                                <h3>WE-Hub</h3>
                            </div>
                            <p>First state-led incubator for women, breaking barriers and creating female-led unicorns.</p>
                            <div className="card-footer">
                                <span className="footer-tag">Women Only</span>
                            </div>
                        </motion.div>
                        <motion.div className="startup-card-premium" variants={slideFromRight}>
                            <div className="card-top">
                                <span className="count">03</span>
                                <h3>T-Works</h3>
                            </div>
                            <p>Premium prototyping center for hardware startups to build, test and scale rapidly.</p>
                            <div className="card-footer">
                                <span className="footer-tag">Hardware First</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default EconomicDevelopment;
