import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutKCR from './pages/AboutKCR';
import VisionMission from './pages/VisionMission';
import Achievements from './pages/Achievements';
import Schemes from './pages/Schemes';
import NewsMedia from './pages/NewsMedia';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import Overview from './pages/About/Overview';
import PoliticalCareer from './pages/About/PoliticalCareer';
import LeadershipStyle from './pages/About/LeadershipStyle';
import Timeline from './pages/About/Timeline';
import AchievementDetail from './pages/Achievements/IrrigationNInfrastructure';
import AgricultureFarmers from './pages/Achievements/AgricultureFarmers';
import WelfareSchemes from './pages/Achievements/WelfareSchemes';
import EconomicDevelopment from './pages/Achievements/EconomicDevelopment';
import CulturalRevival from './pages/Achievements/CulturalRevival';
import StateFormation from './pages/Achievements/StateFormation';
import RythuBandhu from './pages/schemes/RythuBandhu';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-kcr" element={<Navigate to="/about-kcr/overview" replace />} />
            <Route path="/about-kcr/overview" element={<Overview />} />
            <Route path="/about-kcr/political-career" element={<PoliticalCareer />} />
            <Route path="/about-kcr/leadership-style" element={<LeadershipStyle />} />
            <Route path="/about-kcr/timeline" element={<Timeline />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/achievements" element={<Navigate to="/achievements/irrigation" replace />} />
            <Route path="/achievements/irrigation" element={<AchievementDetail />} />
            <Route path="/achievements/agriculture" element={<AgricultureFarmers />} />
            <Route path="/achievements/welfare" element={<WelfareSchemes />} />
            <Route path="/achievements/economic" element={<EconomicDevelopment />} />
            <Route path="/achievements/culture" element={<CulturalRevival />} />
            <Route path="/achievements/state-formation" element={<StateFormation />} />
            {/* Catch-all for achievements */}
            <Route path="/achievements/:category" element={<Navigate to="/achievements/irrigation" replace />} />
            <Route path="/schemes" element={<Navigate to="/schemes/rythu-bandhu" replace />} />
            <Route path="/schemes/rythu-bandhu" element={<RythuBandhu />} />
            <Route path="/news-media" element={<NewsMedia />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-us" element={<JoinUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;