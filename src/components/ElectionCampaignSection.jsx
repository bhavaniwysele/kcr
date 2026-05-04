import React, { useEffect, useState } from 'react';
import campaignImage from '../assets/election_campaign_extension.png';
import './ElectionCampaignSection.css';

const campaignCards = [
  {
    title: 'Our Vision',
    description:
      'A developed Telangana with quality education, healthcare, jobs and opportunities for all.',
    cta: 'Know Our Vision',
    icon: '◉',
  },
  {
    title: 'Campaign Events',
    description:
      'Join us at public meetings, roadshows and events across Telangana.',
    cta: 'View Schedule',
    icon: '◉',
  },
  {
    title: 'Volunteer With Us',
    description:
      "Be a part of the movement. Together, let's win the future of Telangana.",
    cta: 'Join the Movement',
    icon: '◉',
  },
];

const INITIAL_COUNTDOWN_SECONDS = ((25 * 24 + 18) * 60 + 42) * 60 + 37;

const formatCountdown = (totalSeconds) => {
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return [
    { value: String(days).padStart(2, '0'), label: 'Days' },
    { value: String(hours).padStart(2, '0'), label: 'Hours' },
    { value: String(minutes).padStart(2, '0'), label: 'Minutes' },
    { value: String(seconds).padStart(2, '0'), label: 'Seconds' },
  ];
};

const ElectionCampaignSection = () => {
  const [secondsLeft, setSecondsLeft] = useState(INITIAL_COUNTDOWN_SECONDS);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : INITIAL_COUNTDOWN_SECONDS));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const countdownItems = formatCountdown(secondsLeft);

  return (
    <section className="election-campaign-section">
      <div className="campaign-banner">
        <div
          className="campaign-image-pane"
          style={{ backgroundImage: `url(${campaignImage})` }}
        />
        <div className="campaign-overlay" />
        <div className="campaign-content">
          <p className="campaign-tag">
            <span className="campaign-tag-icon" aria-hidden="true">
              <span className="campaign-tag-ring campaign-tag-ring-left" />
              <span className="campaign-tag-ring campaign-tag-ring-right" />
              <span className="campaign-tag-dot campaign-tag-dot-1" />
              <span className="campaign-tag-dot campaign-tag-dot-2" />
            </span>
            Election Campaign 2025
          </p>
          <h2 className="campaign-title">
            Together for a <span>Stronger Telangana</span>
          </h2>
          <p className="campaign-subtitle">
            Let&apos;s build a progressive, inclusive and prosperous Telangana.
            <br />
            Your vote. Our future.
          </p>

          <div className="campaign-countdown">
            {countdownItems.map((item) => (
              <div key={item.label} className="countdown-item">
                <p className="countdown-value">{item.value}</p>
                <p className="countdown-label">{item.label}</p>
              </div>
            ))}
          </div>

          <button type="button" className="campaign-cta">
            Vote for BRS
          </button>
        </div>
      </div>

      <div className="campaign-cards-wrapper">
        {campaignCards.map((card) => (
          <article key={card.title} className="campaign-card">
            <div className="campaign-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button type="button">{card.cta}</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ElectionCampaignSection;
