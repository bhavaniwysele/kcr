import React, { useEffect, useState } from 'react';
import './ContactJoinCard.css';

const VIEW_SWAP_MS = 360;

const DISTRICTS = [
  'Adilabad',
  'Hyderabad',
  'Karimnagar',
  'Khammam',
  'Mahabubnagar',
  'Medak',
  'Nalgonda',
  'Nizamabad',
  'Rangareddy',
  'Warangal',
];

const HELP_TOPICS = [
  'General Inquiry',
  'Welfare Schemes',
  'Membership',
  'Volunteering',
  'Press / Media',
];

const MEMBER_INTENT = [
  'Become a Member',
  'Volunteer with us',
  'Support a cause',
  'Organise locally',
];

/* ——— Inline icons ——— */
const IconPhone = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const IconUsers = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconUserPlus = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M19 8v6M22 11h-6" />
  </svg>
);
const IconEnvelope = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const IconClock = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const IconSend = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    <path d="M22 2 11 13" />
  </svg>
);
const IconChevron = (p) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const IconShield = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
);
const IconTrendUp = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 17 9 11l4 4 8-8" />
    <path d="M14 7h7v7" />
  </svg>
);
const IconHeart = (p) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
  </svg>
);

const CONTACT_HIGHLIGHTS = [
  { id: 'clock', Icon: IconClock, text: 'We typically respond within 24 hours' },
  { id: 'mail', Icon: IconEnvelope, text: 'support@kcrtelangana.org' },
  { id: 'phone', Icon: IconPhone, text: '+91 40 2345 6789' },
];

const JOIN_HIGHLIGHTS = [
  { id: 'shield', Icon: IconShield, text: 'Be a part of change' },
  { id: 'users', Icon: IconUsers, text: 'Work for a better Telangana' },
  { id: 'trend', Icon: IconTrendUp, text: 'Together we can build the future' },
  { id: 'heart', Icon: IconHeart, text: 'Your voice matters' },
];

const ContactJoinCard = () => {
  const [tab, setTab] = useState('contact'); // 'contact' | 'join'
  const [displayedTab, setDisplayedTab] = useState('contact');

  // Contact form state
  const [c, setC] = useState({ topic: '', name: '', email: '', phone: '' });
  // Join form state
  const [j, setJ] = useState({
    intent: '',
    name: '',
    mobile: '',
    district: '',
    constituency: '',
  });
  const [submitted, setSubmitted] = useState(null);

  const isAnimating = tab !== displayedTab;

  useEffect(() => {
    if (tab === displayedTab) return undefined;
    const t = window.setTimeout(() => setDisplayedTab(tab), VIEW_SWAP_MS);
    return () => window.clearTimeout(t);
  }, [tab, displayedTab]);

  const switchTab = (next) => {
    if (next === tab || isAnimating) return;
    setTab(next);
  };

  const updateC = (k) => (e) => setC((prev) => ({ ...prev, [k]: e.target.value }));
  const updateJ = (k) => (e) => setJ((prev) => ({ ...prev, [k]: e.target.value }));

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted('contact');
    setC({ topic: '', name: '', email: '', phone: '' });
    window.setTimeout(() => setSubmitted(null), 3500);
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    setSubmitted('join');
    setJ({ intent: '', name: '', mobile: '', district: '', constituency: '' });
    window.setTimeout(() => setSubmitted(null), 3500);
  };

  return (
    <section className="qc-section" aria-label="Quick contact and membership">
      <div className="qc-section__inner">
        <div className="qc-card">
          <div className="qc-tabs" role="tablist" aria-label="Choose action">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'contact'}
              className={`qc-tab${tab === 'contact' ? ' is-active' : ''}`}
              onClick={() => switchTab('contact')}
            >
              <IconPhone />
              <span>Contact Us</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'join'}
              className={`qc-tab${tab === 'join' ? ' is-active' : ''}`}
              onClick={() => switchTab('join')}
            >
              <IconUsers />
              <span>Join the Movement</span>
            </button>
          </div>

          <div
            key={displayedTab}
            className={`qc-panel${isAnimating ? ' is-exiting' : ''}`}
          >
            {displayedTab === 'contact' ? (
              <form className="qc-form" onSubmit={handleContactSubmit}>
                <div className="qc-form__row">
                  <label className="qc-field qc-field--select">
                    <span className="qc-field__label">I need help with</span>
                    <div className="qc-field__control">
                      <select
                        className="qc-input qc-input--select"
                        value={c.topic}
                        onChange={updateC('topic')}
                        required
                      >
                        <option value="" disabled>
                          General Inquiry
                        </option>
                        {HELP_TOPICS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className="qc-input__chevron" aria-hidden="true">
                        <IconChevron />
                      </span>
                    </div>
                  </label>

                  <label className="qc-field">
                    <span className="qc-field__label">Your Name</span>
                    <input
                      className="qc-input"
                      type="text"
                      placeholder="Enter your name"
                      value={c.name}
                      onChange={updateC('name')}
                      required
                    />
                  </label>

                  <label className="qc-field">
                    <span className="qc-field__label">Email Address</span>
                    <input
                      className="qc-input"
                      type="email"
                      placeholder="Enter your email"
                      value={c.email}
                      onChange={updateC('email')}
                      required
                    />
                  </label>

                  <label className="qc-field">
                    <span className="qc-field__label">Phone Number</span>
                    <input
                      className="qc-input"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={c.phone}
                      onChange={updateC('phone')}
                      required
                    />
                  </label>

                  <button type="submit" className="qc-submit">
                    <IconSend />
                    <span>Send Message</span>
                  </button>
                </div>

                <ul className="qc-highlights" aria-label="Contact highlights">
                  {CONTACT_HIGHLIGHTS.map(({ id, Icon, text }) => (
                    <li key={id} className="qc-highlight">
                      <span className="qc-highlight__icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="qc-highlight__text">{text}</span>
                    </li>
                  ))}
                </ul>
              </form>
            ) : (
              <form className="qc-form" onSubmit={handleJoinSubmit}>
                <div className="qc-form__row">
                  <label className="qc-field qc-field--select">
                    <span className="qc-field__label">I want to</span>
                    <div className="qc-field__control">
                      <select
                        className="qc-input qc-input--select"
                        value={j.intent}
                        onChange={updateJ('intent')}
                        required
                      >
                        <option value="" disabled>
                          Become a Member
                        </option>
                        {MEMBER_INTENT.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className="qc-input__chevron" aria-hidden="true">
                        <IconChevron />
                      </span>
                    </div>
                  </label>

                  <label className="qc-field">
                    <span className="qc-field__label">Full Name</span>
                    <input
                      className="qc-input"
                      type="text"
                      placeholder="Enter your full name"
                      value={j.name}
                      onChange={updateJ('name')}
                      required
                    />
                  </label>

                  <label className="qc-field">
                    <span className="qc-field__label">Mobile Number</span>
                    <input
                      className="qc-input"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={j.mobile}
                      onChange={updateJ('mobile')}
                      required
                    />
                  </label>

                  <label className="qc-field qc-field--select">
                    <span className="qc-field__label">Select District</span>
                    <div className="qc-field__control">
                      <select
                        className="qc-input qc-input--select"
                        value={j.district}
                        onChange={updateJ('district')}
                        required
                      >
                        <option value="" disabled>
                          Select your district
                        </option>
                        {DISTRICTS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <span className="qc-input__chevron" aria-hidden="true">
                        <IconChevron />
                      </span>
                    </div>
                  </label>

                  <label className="qc-field qc-field--select">
                    <span className="qc-field__label">Select Constituency</span>
                    <div className="qc-field__control">
                      <select
                        className="qc-input qc-input--select"
                        value={j.constituency}
                        onChange={updateJ('constituency')}
                        required
                      >
                        <option value="" disabled>
                          Select constituency
                        </option>
                        <option value="general">General</option>
                        <option value="reserved">Reserved</option>
                      </select>
                      <span className="qc-input__chevron" aria-hidden="true">
                        <IconChevron />
                      </span>
                    </div>
                  </label>

                  <button type="submit" className="qc-submit">
                    <IconUserPlus />
                    <span>Join Now</span>
                  </button>
                </div>

                <ul className="qc-highlights" aria-label="Membership highlights">
                  {JOIN_HIGHLIGHTS.map(({ id, Icon, text }) => (
                    <li key={id} className="qc-highlight">
                      <span className="qc-highlight__icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="qc-highlight__text">{text}</span>
                    </li>
                  ))}
                </ul>
              </form>
            )}
          </div>

          {submitted ? (
            <p className="qc-thanks" role="status">
              {submitted === 'contact'
                ? 'Thanks — your message has been received.'
                : 'Welcome aboard — your membership request has been received.'}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ContactJoinCard;
