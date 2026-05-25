import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import {
  ContactIconEnvelope,
  ContactIconLocation,
  ContactIconPhone,
} from './ContactIcons';

const CONTACT_ITEMS = [
  {
    id: 'phone',
    label: 'Call us',
    Icon: ContactIconPhone,
    lines: ['+91 40 2345 6789'],
  },
  {
    id: 'email',
    label: 'Email us',
    Icon: ContactIconEnvelope,
    lines: ['support@kcrtelangana.org'],
    hrefPrefix: 'mailto:',
  },
  {
    id: 'address',
    label: 'Office address',
    Icon: ContactIconLocation,
    lines: ['Hyderabad, Telangana', 'Public Relations Office'],
  },
];

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

const INTERESTS = [
  'Volunteering',
  'Donations & Contributions',
  'Local Events',
  'Welfare Outreach',
  'Membership',
];

const VIEW_SWAP_MS = 420;

// ——— Small inline icons used inside the member form fields ———
const FieldUserIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 21a8 8 0 1 0-16 0" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const FieldPhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const FieldMailIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const FieldCalendarIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const FieldPinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const FieldHomeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" />
  </svg>
);
const FieldChevronIcon = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const BackArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);
const MemberSubmitIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M19 8v6M22 11h-6" />
  </svg>
);

const Contact = () => {
  const [view, setView] = useState('message'); // 'message' | 'member'
  const [displayedView, setDisplayedView] = useState('message');

  // Message form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  // Member form state
  const [m, setM] = useState({
    name: '',
    mobile: '',
    email: '',
    dob: '',
    district: '',
    constituency: '',
    pincode: '',
    address: '',
    interest: '',
    agreed: false,
  });
  const [joined, setJoined] = useState(false);

  // Swap displayed view after the exit animation finishes
  useEffect(() => {
    if (view === displayedView) return undefined;
    const t = window.setTimeout(() => setDisplayedView(view), VIEW_SWAP_MS);
    return () => window.clearTimeout(t);
  }, [view, displayedView]);

  const isAnimating = view !== displayedView;
  const isMemberActive = displayedView === 'member';

  const switchView = (next) => {
    if (next === view || isAnimating) return;
    setView(next);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    window.setTimeout(() => setSent(false), 4000);
  };

  const handleMemberSubmit = (e) => {
    e.preventDefault();
    setJoined(true);
    setM({
      name: '',
      mobile: '',
      email: '',
      dob: '',
      district: '',
      constituency: '',
      pincode: '',
      address: '',
      interest: '',
      agreed: false,
    });
    window.setTimeout(() => setJoined(false), 4000);
  };

  const updateM = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setM((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="contact-page">
      <header
        className={`contact-page-header${isMemberActive ? ' contact-page-header--member' : ''}`}
        aria-labelledby="contact-heading"
      >
        <div className="contact-page-header__dots" aria-hidden="true" />
        <div className="contact-page-header__inner">
          <div
            key={displayedView}
            className={`contact-page-header__swap${isAnimating ? ' is-exiting' : ''}`}
          >
            <h1 id="contact-heading" className="contact-page-header__title">
              {isMemberActive ? 'Join the Movement' : 'Contact Us'}
            </h1>
            <nav className="contact-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="contact-breadcrumb__sep" aria-hidden="true">
                &gt;
              </span>
              <span aria-current="page">
                {isMemberActive ? 'Join the Movement' : 'Contact'}
              </span>
            </nav>
          </div>
        </div>
      </header>

      <section className="contact-body" aria-label="Contact form and information">
        <div className="contact-body__inner">
          <aside className="contact-touch-card" aria-labelledby="get-in-touch-heading">
            <div className="contact-touch-card__head">
              <h2 id="get-in-touch-heading" className="contact-touch-card__title">
                Get In Touch
              </h2>
              <p className="contact-touch-card__desc">
                Feel free to contact us with any questions about welfare programmes, outreach, or public
                information — our team will respond as soon as possible.
              </p>
            </div>
            <hr className="contact-touch-card__rule" />
            <ul className="contact-touch-list">
              {CONTACT_ITEMS.map(({ id, label, Icon, lines, hrefPrefix }) => (
                <li key={id} className="contact-touch-item">
                  <span className="contact-touch-item__icon" aria-hidden="true">
                    <Icon className="contact-icon contact-icon--touch" />
                  </span>
                  <div className="contact-touch-item__body">
                    <p className="contact-touch-item__label">{label}</p>
                    {lines.map((line) =>
                      hrefPrefix ? (
                        <a
                          key={line}
                          href={`${hrefPrefix}${line}`}
                          className="contact-touch-item__value"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="contact-touch-item__value">
                          {line}
                        </p>
                      ),
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div
            className={`contact-form-panel${isMemberActive ? ' contact-form-panel--member' : ''}`}
          >
            <div
              key={displayedView}
              className={`contact-form-panel__view${isAnimating ? ' is-exiting' : ''}`}
            >
              {displayedView === 'message' ? (
                <>
                  <p className="contact-form-panel__eyebrow">Contact Us</p>
                  <h2 className="contact-form-panel__title">Send us a message</h2>
                  <p className="contact-form-panel__desc">
                    If you have any questions about membership, welfare schemes, or public outreach, fill out the
                    form and our team will get back to you within 24 hours.
                  </p>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <label className="contact-form__field">
                      <span className="contact-form__field-label">Full Name</span>
                      <input
                        className="contact-form__input"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label className="contact-form__field">
                      <span className="contact-form__field-label">Email</span>
                      <input
                        className="contact-form__input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                      />
                    </label>
                    <label className="contact-form__field">
                      <span className="contact-form__field-label">Message</span>
                      <textarea
                        className="contact-form__input contact-form__textarea"
                        name="message"
                        rows={5}
                        placeholder="Write us your question here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </label>
                    <div className="contact-form__actions">
                      <button type="submit" className="contact-form__submit">
                        Send Message
                      </button>
                      <button
                        type="button"
                        className="contact-form__submit contact-form__submit--secondary"
                        onClick={() => switchView('member')}
                      >
                        Join the Movement
                      </button>
                    </div>
                    {sent ? (
                      <p className="contact-form__thanks" role="status">
                        Thank you. Your message has been noted.
                      </p>
                    ) : null}
                  </form>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="contact-form-panel__back"
                    onClick={() => switchView('message')}
                    aria-label="Back to message form"
                  >
                    <BackArrowIcon />
                    <span>Back</span>
                  </button>
                  <p className="contact-form-panel__eyebrow">Join the Movement</p>
                  <h2 className="contact-form-panel__title">
                    Become a <span className="contact-form-panel__title-accent">Member</span>
                  </h2>
                  <p className="contact-form-panel__desc">
                    Join hands with us in building a strong, progressive and prosperous Telangana. Fill in your
                    details below and become a part of the movement.
                  </p>
                  <form className="contact-form contact-form--member" onSubmit={handleMemberSubmit}>
                    <div className="contact-form__grid">
                      <label className="contact-form__field">
                        <span className="contact-form__field-label">Full Name</span>
                        <div className="contact-form__input-wrap">
                          <input
                            className="contact-form__input contact-form__input--with-icon"
                            type="text"
                            placeholder="Enter your full name"
                            value={m.name}
                            onChange={updateM('name')}
                            autoComplete="name"
                            required
                          />
                          <span className="contact-form__input-icon" aria-hidden="true">
                            <FieldUserIcon />
                          </span>
                        </div>
                      </label>

                      <label className="contact-form__field">
                        <span className="contact-form__field-label">Mobile Number</span>
                        <div className="contact-form__input-wrap">
                          <input
                            className="contact-form__input contact-form__input--with-icon"
                            type="tel"
                            placeholder="Enter your mobile number"
                            value={m.mobile}
                            onChange={updateM('mobile')}
                            autoComplete="tel"
                            required
                          />
                          <span className="contact-form__input-icon" aria-hidden="true">
                            <FieldPhoneIcon />
                          </span>
                        </div>
                      </label>

                      <label className="contact-form__field">
                        <span className="contact-form__field-label">Email Address</span>
                        <div className="contact-form__input-wrap">
                          <input
                            className="contact-form__input contact-form__input--with-icon"
                            type="email"
                            placeholder="Enter your email"
                            value={m.email}
                            onChange={updateM('email')}
                            autoComplete="email"
                            required
                          />
                          <span className="contact-form__input-icon" aria-hidden="true">
                            <FieldMailIcon />
                          </span>
                        </div>
                      </label>

                      <label className="contact-form__field">
                        <span className="contact-form__field-label">Date of Birth</span>
                        <div className="contact-form__input-wrap">
                          <input
                            className="contact-form__input contact-form__input--with-icon"
                            type="text"
                            placeholder="DD / MM / YYYY"
                            value={m.dob}
                            onChange={updateM('dob')}
                            onFocus={(e) => {
                              e.target.type = 'date';
                            }}
                            onBlur={(e) => {
                              if (!e.target.value) e.target.type = 'text';
                            }}
                            required
                          />
                          <span className="contact-form__input-icon" aria-hidden="true">
                            <FieldCalendarIcon />
                          </span>
                        </div>
                      </label>

                      <label className="contact-form__field">
                        <span className="contact-form__field-label">Select District</span>
                        <div className="contact-form__input-wrap">
                          <select
                            className="contact-form__input contact-form__input--with-icon contact-form__select"
                            value={m.district}
                            onChange={updateM('district')}
                            required
                          >
                            <option value="">Select your district</option>
                            {DISTRICTS.map((d) => (
                              <option key={d} value={d}>
                                {d}
                              </option>
                            ))}
                          </select>
                          <span className="contact-form__input-icon" aria-hidden="true">
                            <FieldChevronIcon />
                          </span>
                        </div>
                      </label>

                      <label className="contact-form__field">
                        <span className="contact-form__field-label">Select Constituency</span>
                        <div className="contact-form__input-wrap">
                          <select
                            className="contact-form__input contact-form__input--with-icon contact-form__select"
                            value={m.constituency}
                            onChange={updateM('constituency')}
                            required
                          >
                            <option value="">Select your constituency</option>
                            <option value="general">General</option>
                            <option value="reserved">Reserved</option>
                          </select>
                          <span className="contact-form__input-icon" aria-hidden="true">
                            <FieldChevronIcon />
                          </span>
                        </div>
                      </label>

                      <label className="contact-form__field">
                        <span className="contact-form__field-label">Pincode</span>
                        <div className="contact-form__input-wrap">
                          <input
                            className="contact-form__input contact-form__input--with-icon"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]{6}"
                            placeholder="Enter pincode"
                            value={m.pincode}
                            onChange={updateM('pincode')}
                            required
                          />
                          <span className="contact-form__input-icon" aria-hidden="true">
                            <FieldPinIcon />
                          </span>
                        </div>
                      </label>

                      <label className="contact-form__field">
                        <span className="contact-form__field-label">Address</span>
                        <div className="contact-form__input-wrap">
                          <input
                            className="contact-form__input contact-form__input--with-icon"
                            type="text"
                            placeholder="Enter your address"
                            value={m.address}
                            onChange={updateM('address')}
                            autoComplete="street-address"
                            required
                          />
                          <span className="contact-form__input-icon" aria-hidden="true">
                            <FieldHomeIcon />
                          </span>
                        </div>
                      </label>
                    </div>

                    <label className="contact-form__field contact-form__field--full">
                      <span className="contact-form__field-label">I am interested in</span>
                      <div className="contact-form__input-wrap">
                        <select
                          className="contact-form__input contact-form__input--with-icon contact-form__select"
                          value={m.interest}
                          onChange={updateM('interest')}
                          required
                        >
                          <option value="">Select an option</option>
                          {INTERESTS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span className="contact-form__input-icon" aria-hidden="true">
                          <FieldChevronIcon />
                        </span>
                      </div>
                    </label>

                    <label className="contact-form__agree">
                      <input
                        type="checkbox"
                        checked={m.agreed}
                        onChange={updateM('agreed')}
                        required
                      />
                      <span>
                        I agree to the <a href="#terms">terms &amp; conditions</a> and{' '}
                        <a href="#privacy">privacy policy</a>.
                      </span>
                    </label>

                    <div className="contact-form__actions contact-form__actions--member">
                      <button
                        type="submit"
                        className="contact-form__submit contact-form__submit--member"
                      >
                        <MemberSubmitIcon />
                        <span>Join the Movement</span>
                      </button>
                      <button
                        type="button"
                        className="contact-form__submit contact-form__submit--secondary contact-form__submit--member-alt"
                        onClick={() => switchView('message')}
                      >
                        <FieldMailIcon />
                        <span>Contact Us</span>
                      </button>
                    </div>

                    {joined ? (
                      <p className="contact-form__thanks" role="status">
                        Welcome aboard. Your membership request has been received.
                      </p>
                    ) : null}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
