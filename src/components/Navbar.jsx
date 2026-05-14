import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import './Navbar.css';
import logo from '../assets/logo_kcr.png';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './SocialBrandIcons';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'te', label: 'Telugu' },
];

const BRAND_TAGLINES = ['Visionary', 'Progressive', 'Transformative'];
const TAGLINE_TICK_OPEN_MS = 105;
const TAGLINE_TICK_CLOSE_MS = 88;
const TAGLINE_HOLD_MS = 720;
const TAGLINE_WORD_GAP_MS = 180;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [visibleLetterCount, setVisibleLetterCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const currentLangLabel = LANGUAGES.find((l) => l.code === lang)?.label ?? 'English';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const word = BRAND_TAGLINES[taglineIndex];
    const n = word.length;
    const timeoutIds = [];

    setVisibleLetterCount(0);

    let t = 0;
    for (let k = 1; k <= n; k += 1) {
      const kk = k;
      timeoutIds.push(
        window.setTimeout(() => {
          setVisibleLetterCount(kk);
        }, t)
      );
      t += TAGLINE_TICK_OPEN_MS;
    }

    t += TAGLINE_HOLD_MS;

    for (let k = n - 1; k >= 0; k -= 1) {
      const kk = k;
      timeoutIds.push(
        window.setTimeout(() => {
          setVisibleLetterCount(kk);
        }, t)
      );
      t += TAGLINE_TICK_CLOSE_MS;
    }

    timeoutIds.push(
      window.setTimeout(() => {
        setTaglineIndex((i) => (i + 1) % BRAND_TAGLINES.length);
      }, t + TAGLINE_WORD_GAP_MS)
    );

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [taglineIndex, prefersReducedMotion]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-top">
        <div className="nav-top-container">
          <div className="nav-top-left">
            <div className="nav-tagline-flip" aria-live="polite">
              {prefersReducedMotion ? (
                <span className="nav-tagline-word nav-tagline-word-static">{BRAND_TAGLINES[0]}</span>
              ) : (
                <>
                  <span className="nav-tagline-letters" aria-hidden="true">
                    {[...BRAND_TAGLINES[taglineIndex]].map((char, i) => (
                      <span
                        key={`${taglineIndex}-${i}-${char}`}
                        className={`nav-tagline-letter${i < visibleLetterCount ? ' is-visible' : ''}`}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <span className="nav-tagline-sr">{BRAND_TAGLINES[taglineIndex]}</span>
                </>
              )}
            </div>
          </div>

          <div className="nav-top-center">
            <Link to="/" className="nav-logo main-logo">
              <img src={logo} alt="KCR Official Logo" />
              <span className="logo-text">KCR</span>
            </Link>
          </div>

          <div className="nav-top-right">
            <div className="nav-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="Facebook">
                <FacebookIcon size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-social-link" aria-label="Twitter">
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bottom">
        <div className="nav-container">
          <div className="nav-scrolled-logo">
            <Link to="/" className="nav-logo sticky-logo">
              <img src={logo} alt="KCR Official Logo" />
              <span className="logo-text">KCR</span>
            </Link>
          </div>
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">About KCR <span className="dropdown-icon">▾</span></span>
              <ul className="dropdown-menu">
                <li><Link to="/about-kcr/overview">Overview</Link></li>
                <li><Link to="/about-kcr/political-career">Political Career</Link></li>
                <li><Link to="/about-kcr/leadership-style">Leadership Style</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/vision-mission" className="nav-link">Vision & Mission</Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">Achievements <span className="dropdown-icon">▾</span></span>
              <ul className="dropdown-menu">
                <li><Link to="/achievements/state-formation">State Formation</Link></li>
                <li><Link to="/achievements/irrigation">Irrigation & Infrastructure</Link></li>
                <li><Link to="/achievements/agriculture">Agricultural Development</Link></li>
                <li><Link to="/achievements/welfare">Welfare Impact</Link></li>
                <li><Link to="/achievements/economic">Economic Development</Link></li>
                <li><Link to="/achievements/culture">Cultural Revival</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">Schemes <span className="dropdown-icon">▾</span></span>
              <ul className="dropdown-menu">
                <li><Link to="/schemes#rythu-bandhu">Rythu Bandhu</Link></li>
                <li><Link to="/schemes#mission-bhagiratha">Mission Bhagiratha</Link></li>
                <li><Link to="/schemes#kcr-kit">KCR Kit</Link></li>
                <li><Link to="/schemes#2bhk-housing">2BHK Housing</Link></li>
                <li><Link to="/schemes#aasara-pensions">Aasara Pension</Link></li>
                <li><Link to="/schemes#dalit-bandhu">Dalit Bandhu</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/news-media" className="nav-link">News & Media</Link>
            </li>
          </ul>
          <div className="nav-actions">
            <div
              className="dropdown nav-lang-dropdown"
              onMouseEnter={() => setLangMenuOpen(true)}
              onMouseLeave={() => setLangMenuOpen(false)}
              onFocus={() => setLangMenuOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setLangMenuOpen(false);
              }}
            >
              <button
                type="button"
                className="nav-lang-trigger"
                aria-haspopup="menu"
                aria-expanded={langMenuOpen}
                aria-label={`Language: ${currentLangLabel}. Open menu`}
              >
                <span>
                  {currentLangLabel}
                  <span className="dropdown-icon" aria-hidden="true">
                    ▾
                  </span>
                </span>
                <svg width="100%" height="100%" aria-hidden="true" focusable="false">
                  <rect x="0" y="0" width="100%" height="100%" rx="20" ry="20" />
                </svg>
              </button>
              <ul className="dropdown-menu nav-lang-menu" role="menu">
                {LANGUAGES.map((item) => (
                  <li key={item.code} role="none">
                    <button
                      type="button"
                      role="menuitem"
                      className={item.code === lang ? 'active' : ''}
                      onClick={() => {
                        setLang(item.code);
                        setLangMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className="nav-link nav-contact-btn">
              <span>Contact</span>
              <svg width="100%" height="100%">
                <rect x="0" y="0" width="100%" height="100%" rx="20" ry="20"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
