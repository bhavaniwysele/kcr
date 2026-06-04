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

const MARQUEE_ITEMS = [
  'Jeevan Reddy Meets KCR After Quitting Congress, Indicates He Will Join BRS',
  "KCR's Party Alleges Expired Medicines Distributed To Patients",
  'KCR Questioned By Probe Team At His Hyderabad Home In Phone Tapping Case',
  "BRS Calls For Protests In Telangana Over 'Political Harassment' Of KCR",
  "Telangana's Growth Trajectory: A Legacy Of Visionary Leadership",
  'Rythu Bandhu, Mission Bhagiratha & Dalit Bandhu — Welfare At The Heart Of Governance',
];

const Navbar = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [visibleLetterCount, setVisibleLetterCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const currentLangLabel = LANGUAGES.find((l) => l.code === lang)?.label ?? 'English';

  /**
   * Close the parent dropdown immediately on click so it doesn't stay "stuck"
   * open via :hover / :focus-within after route navigation. We:
   *   1. blur() the clicked link to drop the focus-within state,
   *   2. tag the parent .dropdown with a transient class that overrides hover,
   *   3. remove the tag after a short delay so future hovers work normally.
   */
  const handleDropdownLinkClick = (e) => {
    const link = e.currentTarget;
    if (typeof link.blur === 'function') link.blur();
    const dropdown = link.closest('.dropdown');
    if (dropdown) {
      dropdown.classList.add('dropdown-just-clicked');
      window.setTimeout(() => {
        dropdown.classList.remove('dropdown-just-clicked');
      }, 600);
    }
  };

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
        <div className="nav-marquee" aria-hidden="true">
          <div className="nav-marquee-track">
            {[0, 1].map((groupIdx) => (
              <ul
                key={groupIdx}
                className="nav-marquee-list"
                aria-hidden={groupIdx === 1 ? 'true' : undefined}
              >
                {MARQUEE_ITEMS.map((item, i) => (
                  <li key={`${groupIdx}-${i}`} className="nav-marquee-item">
                    <span className="nav-marquee-dot" aria-hidden="true" />
                    <span className="nav-marquee-text">{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
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
                <li><Link to="/about-kcr/overview" onClick={handleDropdownLinkClick}>Overview</Link></li>
                <li><Link to="/about-kcr/political-career" onClick={handleDropdownLinkClick}>Political Career</Link></li>
                <li><Link to="/about-kcr/leadership-style" onClick={handleDropdownLinkClick}>Leadership Style</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/leadership" className="nav-link">Leadership</Link>
            </li>
            <li className="nav-item">
              <Link to="/vision-mission" className="nav-link">Vision & Mission</Link>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">Achievements <span className="dropdown-icon">▾</span></span>
              <ul className="dropdown-menu">
                <li><Link to="/achievements/state-formation" onClick={handleDropdownLinkClick}>State Formation</Link></li>
                <li><Link to="/achievements/irrigation" onClick={handleDropdownLinkClick}>Irrigation & Infrastructure</Link></li>
                <li><Link to="/achievements/agriculture" onClick={handleDropdownLinkClick}>Agricultural Development</Link></li>
                <li><Link to="/achievements/welfare" onClick={handleDropdownLinkClick}>Welfare Impact</Link></li>
                <li><Link to="/achievements/economic" onClick={handleDropdownLinkClick}>Economic Development</Link></li>
                <li><Link to="/achievements/culture" onClick={handleDropdownLinkClick}>Cultural Revival</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link">Schemes <span className="dropdown-icon">▾</span></span>
              <ul className="dropdown-menu">
                <li><Link to="/schemes#rythu-bandhu" onClick={handleDropdownLinkClick}>Rythu Bandhu</Link></li>
                <li><Link to="/schemes#mission-bhagiratha" onClick={handleDropdownLinkClick}>Mission Bhagiratha</Link></li>
                <li><Link to="/schemes#kcr-kit" onClick={handleDropdownLinkClick}>KCR Kit</Link></li>
                <li><Link to="/schemes#2bhk-housing" onClick={handleDropdownLinkClick}>2BHK Housing</Link></li>
                <li><Link to="/schemes#aasara-pensions" onClick={handleDropdownLinkClick}>Aasara Pension</Link></li>
                <li><Link to="/schemes#dalit-bandhu" onClick={handleDropdownLinkClick}>Dalit Bandhu</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/news-media" className="nav-link">Media</Link>
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
                className="nav-lang-trigger nav-icon-btn"
                aria-haspopup="menu"
                aria-expanded={langMenuOpen}
                aria-label={`Language: ${currentLangLabel}. Open menu`}
                title={currentLangLabel}
              >
                <span className="nav-icon-btn-inner">
                  <svg
                    className="nav-icon-svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <svg className="nav-icon-btn-outline" width="100%" height="100%" aria-hidden="true" focusable="false">
                  <rect x="0" y="0" width="100%" height="100%" rx="999" ry="999" />
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
            <Link
              to="/contact"
              className="nav-link nav-contact-btn nav-icon-btn"
              aria-label="Contact"
              title="Contact"
            >
              <span className="nav-icon-btn-inner">
                <svg
                  className="nav-icon-svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <svg className="nav-icon-btn-outline" width="100%" height="100%" aria-hidden="true" focusable="false">
                <rect x="0" y="0" width="100%" height="100%" rx="999" ry="999" />
              </svg>
            </Link>
            <button
              type="button"
              className="nav-link nav-login-btn nav-icon-btn"
              aria-label="Login"
              title="Login"
              onClick={onLoginClick}
            >
              <span className="nav-icon-btn-inner">
                <svg
                  className="nav-icon-svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <svg className="nav-icon-btn-outline" width="100%" height="100%" aria-hidden="true" focusable="false">
                <rect x="0" y="0" width="100%" height="100%" rx="999" ry="999" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
