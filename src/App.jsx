import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutKCR from './pages/AboutKCR';
import VisionMission from './pages/VisionMission';
import Achievements from './pages/Achievements';
import Schemes from './pages/Schemes';
import NewsMedia from './pages/NewsMedia';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';
import Overview from './pages/About/Overview';
import EarlyLife from './pages/About/EarlyLife';
import PoliticalCareer from './pages/About/PoliticalCareer';
import LeadershipStyle from './pages/About/LeadershipStyle';
import PersonalLife from './pages/About/PersonalLife';
import Timeline from './pages/About/Timeline';
import AchievementDetail from './pages/Achievements/AchievementDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-kcr" element={<Navigate to="/about-kcr/overview" replace />} />
            <Route path="/about-kcr/overview" element={<Overview />} />
            <Route path="/about-kcr/early-life" element={<EarlyLife />} />
            <Route path="/about-kcr/political-career" element={<PoliticalCareer />} />
            <Route path="/about-kcr/leadership-style" element={<LeadershipStyle />} />
            <Route path="/about-kcr/personal-life" element={<PersonalLife />} />
            <Route path="/about-kcr/timeline" element={<Timeline />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/achievements" element={<Navigate to="/achievements/irrigation" replace />} />
            <Route path="/achievements/:category" element={<AchievementDetail />} />
            <Route path="/schemes" element={<Navigate to="/schemes/rythu-bandhu" replace />} />
            <Route path="/news-media" element={<NewsMedia />} />
            <Route path="/gallery" element={<Gallery />} />
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