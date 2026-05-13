import React, { useState } from 'react';
import './Contact.css';
import heroImage from '../assets/contactus.jpg';
import {
  ContactIconEnvelope,
  ContactIconLocation,
  ContactIconPhone,
  ContactIconSend,
  ContactSocialIcon,
} from './ContactIcons';

const SOCIAL_LINKS = [
  { href: 'https://facebook.com', label: 'Facebook', id: 'facebook' },
  { href: 'https://instagram.com', label: 'Instagram', id: 'instagram' },
  { href: 'https://twitter.com', label: 'Twitter', id: 'twitter' },
];

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="contact-page">
      <section className="contact-intro" aria-labelledby="contact-heading">
        <div className="contact-intro__grid">
          <div className="contact-intro__hero">
            <div className="contact-intro__hero-inner">
              <h1 id="contact-heading" className="contact-hero__title">
                Contact Us
              </h1>
              <p className="contact-hero__subtitle">
                For welfare programmes, outreach, and public information across Telangana.
              </p>
            </div>
          </div>

          <div className="contact-intro__visual">
            <figure className="contact-intro__figure">
              <img
                src={heroImage}
                alt="Colleagues collaborating around a table with laptops, notes, and devices"
                className="contact-intro__img"
              />
            </figure>
          </div>

          <div className="contact-intro__info">
            <header className="contact-strip__header">
              <h2 id="contact-info-heading" className="contact-strip__title">
                Contact Information
              </h2>
              <p className="contact-strip__lead">
                Reach out for scheme assistance, public welfare support, media inquiries, and community engagement
                initiatives.
              </p>
            </header>
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <span className="contact-info-item__icon" aria-hidden="true">
                  <ContactIconPhone className="contact-icon contact-icon--info" />
                </span>
                <div className="contact-info-item__text">
                  <p className="contact-info-item__value">+91 40 2345 6789</p>
                  <p className="contact-info-item__label">Public Support Helpline</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-item__icon" aria-hidden="true">
                  <ContactIconEnvelope className="contact-icon contact-icon--info" />
                </span>
                <div className="contact-info-item__text">
                  <p className="contact-info-item__value">
                    <a href="mailto:support@kcrtelangana.org">support@kcrtelangana.org</a>
                  </p>
                  <p className="contact-info-item__label">Welfare &amp; Public Queries</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-item__icon" aria-hidden="true">
                  <ContactIconLocation className="contact-icon contact-icon--info" />
                </span>
                <div className="contact-info-item__text">
                  <p className="contact-info-item__value">Hyderabad, Telangana</p>
                  <p className="contact-info-item__label">Public Relations Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-strip contact-strip--main" aria-labelledby="get-in-touch-heading">
        <div className="contact-main-grid">
          <div className="contact-form-card">
            <h2 id="get-in-touch-heading" className="contact-form-card__title">
              Get In Touch
            </h2>
            <p className="contact-form-card__hint">
              Please share your details and message. We review submissions regularly and route them to the appropriate
              welfare desk.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-form__label">
                <span className="visually-hidden">Your Name</span>
                <input
                  className="contact-form__input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </label>
              <label className="contact-form__label">
                <span className="visually-hidden">Email Address</span>
                <input
                  className="contact-form__input"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </label>
              <label className="contact-form__label">
                <span className="visually-hidden">Your Message</span>
                <textarea
                  className="contact-form__input contact-form__textarea"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <button type="submit" className="contact-form__submit">
                <ContactIconSend className="contact-icon contact-icon--submit" />
                <span>Send Message</span>
              </button>
              {sent ? <p className="contact-form__thanks" role="status">Thank you. Your message has been noted.</p> : null}
            </form>
          </div>

          <div className="contact-aside">
            <div className="contact-aside__block">
              <h2 className="contact-aside__title">Our Location</h2>
              <p className="contact-aside__text">
                Our public coordination is anchored in Hyderabad, Telangana — supporting mothers, newborns, and families
                through state-aligned health and welfare outreach with a calm, accessible presence.
              </p>
              <div className="contact-map">
                <iframe
                  title="Map preview — Hyderabad, Telangana"
                  className="contact-map__frame"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=78.447%2C17.385%2C78.502%2C17.432&amp;layer=mapnik&amp;marker=17.4085%2C78.4745"
                />
                <div className="contact-map__pin" aria-hidden="true">
                  <span className="contact-map__pin-marker contact-map__pin-marker--maps">
                    <ContactIconLocation className="contact-icon contact-icon--map-pin" />
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-aside__block">
              <h2 className="contact-aside__title contact-aside__title--social">Follow Us</h2>
              <div className="contact-social-row">
                {SOCIAL_LINKS.map(({ href, label, id }) => (
                  <a key={label} href={href} className="contact-social-btn" aria-label={label} target="_blank" rel="noopener noreferrer">
                    <ContactSocialIcon name={id} className="contact-icon contact-icon--social" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-closing-banner" role="region" aria-label="Closing message">
        <div className="contact-closing-banner__inner">
          <p className="contact-closing-banner__message">
            Together, let&apos;s build a healthier, stronger, and more prosperous Telangana for every mother and child.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
