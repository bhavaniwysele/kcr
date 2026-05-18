import React, { useState } from 'react';
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
      <header className="contact-page-header" aria-labelledby="contact-heading">
        <div className="contact-page-header__dots" aria-hidden="true" />
        <div className="contact-page-header__inner">
          <h1 id="contact-heading" className="contact-page-header__title">
            Contact Us
          </h1>
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="contact-breadcrumb__sep" aria-hidden="true">
              &gt;
            </span>
            <span aria-current="page">Contact</span>
          </nav>
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

          <div className="contact-form-panel">
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
              <button type="submit" className="contact-form__submit">
                Send Message
              </button>
              {sent ? (
                <p className="contact-form__thanks" role="status">
                  Thank you. Your message has been noted.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

