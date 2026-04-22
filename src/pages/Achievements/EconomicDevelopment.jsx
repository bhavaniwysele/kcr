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

    return (
        <div className="economic-page editorial-layout">
            
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
                    <p>Driving innovation, investment, and prosperity across Telangana</p>
                </div>
            </section>

            {/* INDUSTRIAL GROWTH - Inspired by Image 4 (Overlapping Layered Layout) */}
            <section className="section-padding industrial-growth">
                <div className="container">
                    <div className="layered-profile-container">
                        <motion.div className="image-blob" {...fadeIn}>
                            <img src={industrialImg} alt="Industrial Growth" />
                        </motion.div>
                        <motion.div className="content-overlay-card" {...fadeIn}>
                            <span className="section-tag">Industrial Growth & Investment</span>
                            <h2>Policies that <br/>Attract the World</h2>
                            <p>Telangana has emerged as a preferred destination for global investors through visionary policies and seamless approvals.</p>
                            <div className="initiative-list">
                                <div className="init-item">
                                    <div className="init-icon">M</div>
                                    <div className="init-text">
                                        <h4>Major Investments</h4>
                                        <p>Over ₹3.2 Lakh Cr attracted in a decade.</p>
                                    </div>
                                </div>
                                <div className="init-item">
                                    <div className="init-icon">E</div>
                                    <div className="init-text">
                                        <h4>Ease of Doing Business</h4>
                                        <p>Self-certification with 15-day approvals via TS-iPASS.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* IT & TECH - Bento Grid (Inspired by Image 2) */}
            <section className="section-padding bento-section">
                <div className="container">
                    <div className="bento-header">
                        <h2>IT & Technology Expansion</h2>
                    </div>
                    <div className="grid-layout">
                        <motion.div className="grid-item tall-pink" {...fadeIn}>
                            <div className="item-inner">
                                <div className="icon-box"><i className="fa-solid fa-microchip"></i></div>
                                <h3>Tech Hubs</h3>
                                <p>Expanding the IT sector beyond Hyderabad to Warangal, Khammam, and Karimnagar to decentralize growth.</p>
                            </div>
                        </motion.div>
                        <motion.div className="grid-item wide" {...fadeIn}>
                            <div className="item-inner split-inner">
                                <div className="text-content">
                                    <span className="pill">Global Companies</span>
                                    <h4>IT Ecosystem</h4>
                                    <p>Presence of tech titans like Amazon, Google, and Meta, driving the state's exports to new heights.</p>
                                </div>
                                <div className="img-content">
                                    <img src={itCorridorImg} alt="IT Corridor" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="grid-item square" {...fadeIn}>
                             <div className="item-inner center">
                                <h3>4X</h3>
                                <p>Growth in IT Exports since 2014</p>
                             </div>
                        </motion.div>
                        <motion.div className="grid-item rectangle" {...fadeIn}>
                            <div className="item-inner flex-row">
                                <i className="fa-solid fa-wifi text-pink"></i>
                                <div className="ml-4">
                                    <h4>Digital Infrastructure</h4>
                                    <p>T-Fiber project connecting every household.</p>
                                </div>
                            </div>
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
                            <h2>Empowering the <br/>Youth of tomorrow</h2>
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
                                    <span><strong>Public Sector:</strong> Regular recruitment drives for government roles.</span>
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
                    <div className="startup-grid">
                        <motion.div className="startup-card-premium" {...fadeIn}>
                            <div className="card-top">
                                <span className="count">01</span>
                                <h3>T-Hub</h3>
                            </div>
                            <p>India's leading innovation gateway, nurturing thousands of startups and global connections.</p>
                            <div className="card-footer">
                                <span className="footer-tag">Largest Campus</span>
                            </div>
                        </motion.div>
                        <motion.div className="startup-card-premium pink-bg" {...fadeIn}>
                            <div className="card-top">
                                <span className="count">02</span>
                                <h3>WE-Hub</h3>
                            </div>
                            <p>First state-led incubator for women, breaking barriers and creating female-led unicorns.</p>
                            <div className="card-footer">
                                <span className="footer-tag">Women Only</span>
                            </div>
                        </motion.div>
                        <motion.div className="startup-card-premium" {...fadeIn}>
                            <div className="card-top">
                                <span className="count">03</span>
                                <h3>T-Works</h3>
                            </div>
                            <p>Premium prototyping center for hardware startups to build, test and scale rapidly.</p>
                            <div className="card-footer">
                                <span className="footer-tag">Hardware First</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default EconomicDevelopment;
