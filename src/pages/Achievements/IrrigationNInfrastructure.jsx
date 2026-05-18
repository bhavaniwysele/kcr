import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './IrrigationNInfrastructure.css';
import heroBg from '../../assets/kaleshwaram_main_final.jpg';
import kaleshwaramImg from '../../assets/kaleshwaram.png';
import beforeDroughtImg from '../../assets/irr-before-drought.png';
import topicFarmerImg from '../../assets/irr-topic-farmer.png';
import topicDrinkingImg from '../../assets/irr-topic-drinking-water.png';
import topicVillageImg from '../../assets/irr-topic-village-revival.png';
import topicGroundwaterImg from '../../assets/irr-topic-groundwater.png';
import footerLakeImg from '../../assets/irr-footer-lake.png';
import cardBhagirathaBg from '../../assets/irr-card-bhagiratha-bg.png';
import cardKakatiyaBg from '../../assets/irr-card-kakatiya-bg.png';
import cardSitaramaBg from '../../assets/irr-card-sitarama-bg.png';
import logoKcr from '../../assets/logo_kcr.png';

const PINK = '#e91e63';
const PINK_SOFT = '#fce4ec';
const PINK_PALE = '#f3e8f8';
const INK = '#1a1a1a';
const MUTED = '#5c667a';
const BORDER = '#e8eaef';

const SLIDE_EASE = [0.22, 1, 0.36, 1];
const slideFromLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: SLIDE_EASE, delay },
  }),
};

const pageStyles = `
.irr-ref-page { background: #fff; color: ${INK}; overflow-x: hidden; }
.irr-ref-mega-wrap { max-width: 1240px; margin: 0 auto; padding: 2.5rem 1.5rem 2rem; }
.irr-ref-mega-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
  align-items: start;
}
.irr-ref-visual {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  min-height: 380px;
  max-height: 380px;
  background: #e8edf2;
}
.irr-ref-visual img {
  width: 100%;
  height: 100%;
  min-height: 380px;
  max-height: 380px;
  object-fit: cover;
  display: block;
}
.irr-ref-overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 220px;
  padding: 1.1rem 1.2rem 1.2rem;
  background: ${PINK};
  color: #fff;
  text-align: center;
}
.irr-ref-overlay-label {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.irr-ref-overlay-value {
  display: block;
  margin-top: 0.3rem;
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1;
}
.irr-ref-overlay-unit {
  display: block;
  margin-top: 0.1rem;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.irr-ref-overlay-desc {
  display: block;
  margin-top: 0.55rem;
  font-size: 0.75rem;
  line-height: 1.4;
}
.irr-ref-mega-right { display: flex; flex-direction: column; gap: 2rem; }
.irr-ref-mega-heading {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;
  font-size: 1.15rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: ${PINK};
  text-transform: uppercase;
}
.irr-ref-mega-heading::before {
  content: '';
  width: 36px;
  height: 3px;
  background: ${PINK};
  border-radius: 2px;
  flex-shrink: 0;
}
.irr-ref-project { display: flex; flex-direction: column; gap: 0.85rem; }
.irr-ref-project-head { display: flex; gap: 0.85rem; align-items: flex-start; }
.irr-ref-project-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${PINK};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.irr-ref-project-icon svg { width: 22px; height: 22px; fill: currentColor; }
.irr-ref-project-head h3 {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: ${INK};
}
.irr-ref-project-head p {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.55;
  color: ${MUTED};
}
.irr-ref-project-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.65rem;
}
.irr-ref-stat-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.55rem;
  background: #fff;
  border: 1px solid ${BORDER};
  border-radius: 10px;
  min-width: 0;
}
.irr-ref-stat-box-icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${PINK_SOFT};
  color: ${PINK};
  display: flex;
  align-items: center;
  justify-content: center;
}
.irr-ref-stat-box-icon svg { width: 16px; height: 16px; fill: currentColor; }
.irr-ref-stat-box-text { display: flex; flex-direction: column; min-width: 0; }
.irr-ref-stat-box-text strong {
  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1.25;
  color: ${INK};
}
.irr-ref-stat-box-text span {
  font-size: 0.62rem;
  color: ${MUTED};
  line-height: 1.2;
}
.irr-ref-initiatives-wrap {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.85rem 1.4rem 2rem;
}
.irr-ref-initiatives-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.6rem;
}
.irr-ref-wave { color: ${PINK}; width: 64px; height: 20px; display: flex; }
.irr-ref-wave svg { width: 100%; height: 100%; }
.irr-ref-wave--bottom { transform: scaleY(-1); }
.irr-ref-initiatives-title {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 800;
  letter-spacing: 0.075em;
  text-align: center;
  color: ${INK};
  text-transform: uppercase;
}
.irr-ref-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.05rem;
}
.irr-ref-card {
  position: relative;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${BORDER};
  border-radius: 13px;
  padding: 0;
  box-shadow: 0 5px 18px rgba(15, 23, 42, 0.045);
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.irr-ref-card-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.irr-ref-card-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}
.irr-ref-card-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.93) 0%,
    rgba(255, 255, 255, 0.88) 38%,
    rgba(255, 255, 255, 0.72) 58%,
    rgba(255, 255, 255, 0.94) 100%
  );
}
.irr-ref-card-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 1.2rem 1.1rem 1rem;
}
.irr-ref-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${PINK_SOFT};
  color: ${PINK};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.72rem;
}
.irr-ref-card-icon svg { width: 24px; height: 24px; fill: currentColor; }
.irr-ref-card h3 {
  margin: 0 0 0.22rem;
  font-size: 0.97rem;
  font-weight: 800;
  color: ${INK};
  text-align: left;
}
.irr-ref-card-sub {
  margin: 0 0 0.52rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: ${PINK};
  text-align: left;
}
.irr-ref-card-desc {
  margin: 0 0 0.82rem;
  font-size: 0.78rem;
  line-height: 1.5;
  color: ${MUTED};
  text-align: left;
  flex: 1;
}
.irr-ref-card-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.42rem;
  padding-top: 0.72rem;
  border-top: 1px solid ${BORDER};
}
.irr-ref-card-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.18rem;
  min-width: 0;
}
.irr-ref-card-stat-icon {
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: ${PINK_SOFT};
  color: ${PINK};
  display: flex;
  align-items: center;
  justify-content: center;
}
.irr-ref-card-stat-icon svg { width: 13px; height: 13px; fill: currentColor; }
.irr-ref-card-stat strong {
  font-size: 0.62rem;
  font-weight: 800;
  line-height: 1.18;
  color: ${INK};
}
.irr-ref-card-stat span {
  font-size: 0.56rem;
  color: ${MUTED};
  line-height: 1.12;
}
.irr-ref-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.78rem;
  max-width: 1240px;
  margin: 0 auto;
  padding: 1rem 1.4rem;
  background: ${PINK_PALE};
}
.irr-ref-summary-icon {
  flex-shrink: 0;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background: ${PINK_SOFT};
  color: ${PINK};
  display: flex;
  align-items: center;
  justify-content: center;
}
.irr-ref-summary-icon svg { width: 16px; height: 16px; fill: currentColor; }
.irr-ref-summary p {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.48;
  color: ${MUTED};
  text-align: center;
}
.irr-ref-transform-wrap {
  max-width: 1240px;
  margin: 0 auto;
  padding: 1.5rem 1.4rem 1.25rem;
}
.irr-ref-transform-heading {
  margin: 0 0 0.45rem;
  font-size: 1.12rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  color: ${PINK};
}
.irr-ref-transform-sub {
  margin: 0 0 0.85rem;
  font-size: 0.75rem;
  line-height: 1.4;
  text-align: center;
  color: ${MUTED};
}
.irr-ref-impact-panel {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.irr-ref-impact-panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0 0.15rem;
}
.irr-ref-impact-panel-label {
  margin: 0;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${PINK};
}
.irr-ref-impact-panel-count {
  margin: 0;
  font-size: 0.65rem;
  font-weight: 700;
  color: ${MUTED};
  padding: 0.15rem 0.45rem;
  background: ${PINK_PALE};
  border-radius: 999px;
}
.irr-ref-transform-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.2fr);
  gap: 1.25rem 1.5rem;
  align-items: center;
}
.irr-ref-compare-col {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
.irr-ref-impact-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.irr-ref-impact-list > li {
  margin: 0;
  padding: 0;
}
.irr-ref-impact-item {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  padding: 0.55rem 0.65rem;
  margin: 0;
  border: 1px solid ${BORDER};
  background: #fff;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
.irr-ref-impact-item:hover {
  border-color: rgba(233, 30, 99, 0.35);
  box-shadow: 0 4px 14px rgba(233, 30, 99, 0.1);
}
.irr-ref-impact-item--active {
  border-color: ${PINK};
  background: linear-gradient(135deg, #fff 0%, ${PINK_PALE} 100%);
  box-shadow: 0 6px 20px rgba(233, 30, 99, 0.14);
  transform: translateX(2px);
}
button.irr-ref-impact-item {
  border: 1px solid ${BORDER};
  background: #fff;
  width: 100%;
  text-align: left;
  font: inherit;
  color: inherit;
}
button.irr-ref-impact-item.irr-ref-impact-item--active {
  border-color: ${PINK};
  background: linear-gradient(135deg, #fff 0%, ${PINK_PALE} 100%);
}
.irr-ref-impact-step {
  flex-shrink: 0;
  width: 1.55rem;
  height: 1.55rem;
  border-radius: 6px;
  background: ${PINK_SOFT};
  color: ${PINK};
  font-size: 0.62rem;
  font-weight: 800;
  line-height: 1.55rem;
  text-align: center;
  letter-spacing: 0.02em;
}
.irr-ref-impact-item--active .irr-ref-impact-step {
  background: ${PINK};
  color: #fff;
}
.irr-ref-impact-body {
  flex: 1;
  min-width: 0;
}
.irr-ref-impact-swiper-wrap {
  display: none;
  min-width: 0;
}
.irr-ref-impact-swiper .swiper-slide {
  height: auto;
}
.irr-ref-impact-pagination {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.5rem;
  min-height: 1rem;
}
.irr-ref-impact-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  margin: 0 !important;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
}
.irr-ref-impact-pagination .swiper-pagination-bullet-active {
  background: ${PINK};
}
.irr-ref-impact-icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${PINK_SOFT};
  color: ${PINK};
  display: flex;
  align-items: center;
  justify-content: center;
}
.irr-ref-impact-icon svg { width: 15px; height: 15px; fill: currentColor; }
.irr-ref-impact-item h3 {
  margin: 0 0 0.22rem;
  font-size: 0.8rem;
  font-weight: 800;
  color: ${INK};
  line-height: 1.25;
}
.irr-ref-impact-item ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.35rem;
}
.irr-ref-impact-item li {
  font-size: 0.62rem;
  color: ${MUTED};
  padding: 0.14rem 0.4rem;
  background: #f5f6f8;
  border-radius: 999px;
  border: 1px solid ${BORDER};
}
.irr-ref-compare {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  width: 100%;
  min-height: 280px;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.08);
  touch-action: none;
  user-select: none;
  cursor: ew-resize;
}
.irr-ref-compare img {
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
  object-position: center;
  display: block;
  pointer-events: none;
}
.irr-ref-compare-after {
  position: absolute;
  inset: 0;
}
.irr-ref-compare-before {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.irr-ref-compare-before img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: none;
  height: 100%;
  min-height: 280px;
}
.irr-ref-compare-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  transform: translateX(-50%);
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.12);
  z-index: 3;
}
.irr-ref-compare-handle-knob {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: transparent;
  border: none;
  box-shadow: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  box-sizing: border-box;
  pointer-events: none;
}
.irr-ref-compare-handle-knob img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
}
.irr-ref-compare-label {
  position: absolute;
  top: 12px;
  z-index: 4;
  padding: 0.25rem 0.65rem;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 4px;
  color: #fff;
  background: rgba(0, 0, 0, 0.55);
  pointer-events: none;
}
.irr-ref-compare-label--before { left: 12px; }
.irr-ref-compare-label--after {
  right: 12px;
  background: ${PINK};
}
.irr-ref-compare-swiper-wrap {
  position: relative;
  min-width: 0;
  width: 100%;
  margin: 0 auto;
}
.irr-ref-compare-swiper {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.08);
}
.irr-ref-compare-swiper .swiper-slide {
  height: auto;
}
.irr-ref-compare-pagination {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 0.65rem;
  min-height: 1rem;
}
.irr-ref-compare-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  margin: 0 !important;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
}
.irr-ref-compare-pagination .swiper-pagination-bullet-active {
  background: ${PINK};
}
.irr-ref-impact-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-top: 1rem;
  padding: 1rem 1.1rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid ${BORDER};
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.05);
}
.irr-ref-impact-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
}
.irr-ref-impact-stat-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${PINK_SOFT};
  color: ${PINK};
  display: flex;
  align-items: center;
  justify-content: center;
}
.irr-ref-impact-stat-icon svg { width: 16px; height: 16px; fill: currentColor; }
.irr-ref-impact-stat strong {
  font-size: 0.78rem;
  font-weight: 800;
  color: ${INK};
  line-height: 1.2;
}
.irr-ref-impact-stat span {
  font-size: 0.62rem;
  color: ${MUTED};
  line-height: 1.2;
}
.irr-ref-footer {
  position: relative;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.irr-ref-footer-bg {
  position: absolute;
  inset: 0;
}
.irr-ref-footer-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.irr-ref-footer-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.55));
}
.irr-ref-footer-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2.5rem 1.5rem;
  max-width: 900px;
}
.irr-ref-footer-content h2 {
  margin: 0 0 0.5rem;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.irr-ref-footer-content p {
  margin: 0 0 1.75rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: rgba(255,255,255,0.9);
}
.irr-ref-footer-pillars {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.irr-ref-pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
.irr-ref-pillar-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.25);
}
.irr-ref-pillar-icon svg { width: 22px; height: 22px; fill: currentColor; }
.irr-ref-pillar strong {
  font-size: 0.78rem;
  font-weight: 800;
  color: #fff;
}
.irr-ref-pillar span {
  font-size: 0.62rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.3;
  text-align: center;
}
@media (max-width: 1024px) {
  .irr-ref-mega-grid { grid-template-columns: 1fr; }
  .irr-ref-visual, .irr-ref-visual img { min-height: 280px; max-height: 280px; }
  .irr-ref-cards-grid { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; }
  .irr-ref-transform-grid { grid-template-columns: 1fr; }
  .irr-ref-impact-list--desktop { display: none; }
  .irr-ref-impact-swiper-wrap { display: block; }
  .irr-ref-impact-stats { grid-template-columns: repeat(2, 1fr); }
  .irr-ref-footer-pillars { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 720px) {
  .irr-ref-project-stats { grid-template-columns: 1fr; }
  .irr-ref-card-stats { grid-template-columns: 1fr; }
  .irr-ref-wave { width: 52px; height: 16px; }
  .irr-ref-compare,
  .irr-ref-compare img,
  .irr-ref-compare-before img { min-height: 220px; }
  .irr-ref-impact-stats { grid-template-columns: 1fr; }
  .irr-ref-footer-pillars { grid-template-columns: 1fr; }
}
`;

function SlideIn({ children, className, delay = 0, style }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      variants={slideFromLeft}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

const IconArrowUp = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4l-1.4 1.4 4.6 4.6H4v2h11.2l-4.6 4.6L12 20l8-8-8-8z" transform="rotate(-90 12 12)" />
  </svg>
);

const IconLocation = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);

const IconCrops = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 22V10M12 10C12 6 8 4 5 4c0 4 3 6 7 6M12 10c0-4 4-6 7-6-3 0-7 2-7 6M7 14l-2 6M17 14l2 6" />
  </svg>
);

const IconWaves = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
  </svg>
);

const IconGrid = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconTap = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 3h6v2H9V3zm-1 4h8l-1 10c0 2.2-1.8 4-4 4s-4-1.8-4-4L8 7zm4 14a6 6 0 01-6-6h12a6 6 0 01-6 6z" />
  </svg>
);

const IconTemple = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3L4 9v2h16V9l-8-6zm-8 12h16v2H4v-2zm2 4h12v2H6v-2z" />
  </svg>
);

const IconDam = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 20h16v-2H4v2zm2-4h12l-2-8H8L6 16zm6-12l2 4h-4l2-4z" />
  </svg>
);

const IconDrop = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.32 0L12 2.69z" />
  </svg>
);

const WaveSvg = () => (
  <svg viewBox="0 0 80 24" fill="none" aria-hidden="true">
    <path d="M0 12 Q10 4 20 12 T40 12 T60 12 T80 12" stroke="currentColor" strokeWidth="2" />
    <path d="M0 18 Q10 10 20 18 T40 18 T60 18 T80 18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconHome = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3l8 7v11H4V10l8-7zm-6 16h12v-6H6v6z" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm8 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4zM8 13c-.3 0-.6 0-1 .1 1.6.6 3 1.9 3 3.9V19h6v-2c0-2-1.4-3.3-3-3.9-.4-.1-.7-.1-1-.1z" />
  </svg>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17 3C10 3 5 8 5 15c0 3 1 5 3 6 1-4 4-7 8-8-1-5 1-10 6-10z" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
  </svg>
);

const impactAreas = [
  {
    id: 'farmer',
    icon: <IconCrops />,
    title: 'Farmer Transformation',
    topics: ['Increased cultivation', 'Stable farming', 'Multiple crop cycles', 'Reduced migration'],
  },
  {
    id: 'drinking',
    icon: <IconTap />,
    title: 'Drinking Water Access',
    topics: ['Village households', "Women's relief", 'Safer water', 'Reduced hardship'],
  },
  {
    id: 'village',
    icon: <IconTemple />,
    title: 'Village Revival',
    topics: ['Restored lakes', 'Greener villages', 'Economic activity', 'Water security'],
  },
  {
    id: 'groundwater',
    icon: <IconWaves />,
    title: 'Groundwater Improvement',
    topics: ['Recharge', 'Sustainable agriculture', 'Restored ecosystems'],
  },
];

const transformStats = [
  { icon: <IconCrops />, value: '45L+', label: 'Acres Under Irrigation' },
  { icon: <IconGrid />, value: 'Thousands', label: 'Villages Transformed' },
  { icon: <IconTap />, value: '>99%', label: 'Rural Drinking Water Coverage' },
  { icon: <IconPeople />, value: 'Lakhs', label: 'Farmers Empowered' },
];

const transformCompareSlides = [
  {
    id: 'farmer',
    before: beforeDroughtImg,
    after: topicFarmerImg,
    beforeAlt: 'Parched fields before irrigation',
    afterAlt: 'Farmer with irrigated crops after water projects',
  },
  {
    id: 'drinking',
    before: beforeDroughtImg,
    after: topicDrinkingImg,
    beforeAlt: 'Water hardship before tap connections',
    afterAlt: 'Safe drinking water at village household',
  },
  {
    id: 'village',
    before: beforeDroughtImg,
    after: topicVillageImg,
    beforeAlt: 'Dry village tank before restoration',
    afterAlt: 'Restored lake and greener village',
  },
  {
    id: 'groundwater',
    before: beforeDroughtImg,
    after: topicGroundwaterImg,
    beforeAlt: 'Depleted groundwater before recharge',
    afterAlt: 'Recharged aquifer and sustainable agriculture',
  },
];

const footerPillars = [
  { icon: <IconLeaf />, title: 'Sustainable', desc: 'Responsible water management' },
  { icon: <IconShield />, title: 'Resilient', desc: 'Climate-ready systems' },
  { icon: <IconPeople />, title: 'Inclusive', desc: 'Water for every home & farm' },
  { icon: <IconWaves />, title: 'Future-Ready', desc: 'A stronger, greener Telangana' },
];

const megaProjects = [
  {
    id: 'kaleshwaram',
    icon: <IconArrowUp />,
    title: 'Kaleshwaram (KLIP)',
    description:
      "The world's largest multi-stage lift irrigation project, ensuring water for agriculture and drinking needs across Telangana.",
    stats: [
      { icon: <IconCrops />, value: '37+ Lakh Acres', label: 'Irrigated' },
      { icon: <IconWaves />, value: '7 Major Reservoirs', label: 'Connected' },
      { icon: <IconGrid />, value: '13 Districts', label: 'Benefited' },
    ],
  },
  {
    id: 'palamuru',
    icon: <IconLocation />,
    title: 'Palamuru-Rangareddy',
    description:
      'Eliminating drought in South Telangana by providing sustainable irrigation to upland areas and stabilizing farm incomes.',
    stats: [
      { icon: <IconCrops />, value: '12+ Lakh Acres', label: 'Irrigated' },
      { icon: <IconGrid />, value: '80+ Mandals', label: 'Benefited' },
      { icon: <IconWaves />, value: '7 Districts', label: 'Covered' },
    ],
  },
];

const waterInitiatives = [
  {
    id: 'bhagiratha',
    bgImage: cardBhagirathaBg,
    icon: <IconTap />,
    title: 'Mission Bhagiratha',
    subtitle: 'Water to Every Household',
    description:
      'Providing safe, treated drinking water to every rural and urban household through a vast pipeline network.',
    stats: [
      { icon: <IconTap />, value: '1.12 Cr+', label: 'Households' },
      { icon: <IconGrid />, value: '>99%', label: 'Rural Coverage' },
      { icon: <IconWaves />, value: 'All', label: 'Villages Covered' },
    ],
  },
  {
    id: 'kakatiya',
    bgImage: cardKakatiyaBg,
    icon: <IconTemple />,
    title: 'Mission Kakatiya',
    subtitle: "Reviving Telangana's Tanks",
    description:
      'Restoring minor irrigation tanks and lakes to recharge groundwater and strengthen rural water security.',
    stats: [
      { icon: <IconTemple />, value: '46,000+', label: 'Tanks Restored' },
      { icon: <IconWaves />, value: 'Improved', label: 'Groundwater' },
      { icon: <IconCrops />, value: 'Better', label: 'Irrigation' },
    ],
  },
  {
    id: 'sitarama',
    bgImage: cardSitaramaBg,
    icon: <IconDam />,
    title: 'Sitarama Lift Irrigation',
    subtitle: 'Expanding Irrigation to New Regions',
    description:
      'Extending irrigation benefits to backward and drought-prone areas through lift-based water delivery.',
    stats: [
      { icon: <IconCrops />, value: '4+ Lakh', label: 'Acres' },
      { icon: <IconGrid />, value: 'Multiple', label: 'Mandals' },
      { icon: <IconWaves />, value: 'Several', label: 'Districts' },
    ],
  },
];

function MegaStatBox({ icon, value, label }) {
  return (
    <div className="irr-ref-stat-box">
      <span className="irr-ref-stat-box-icon">{icon}</span>
      <div className="irr-ref-stat-box-text">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function CardStat({ icon, value, label }) {
  return (
    <div className="irr-ref-card-stat">
      <span className="irr-ref-card-stat-icon">{icon}</span>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ImpactAreaItem({ area, index, active, onSelect }) {
  const step = String(index + 1).padStart(2, '0');
  return (
    <button
      type="button"
      className={`irr-ref-impact-item${active ? ' irr-ref-impact-item--active' : ''}`}
      onClick={onSelect}
      aria-pressed={active}
      aria-label={`${area.title}, section ${index + 1} of 4`}
    >
      <span className="irr-ref-impact-step" aria-hidden="true">
        {step}
      </span>
      <span className="irr-ref-impact-icon">{area.icon}</span>
      <span className="irr-ref-impact-body">
        <h3>{area.title}</h3>
        <ul>
          {area.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </span>
    </button>
  );
}

function TransformCompareCarousel({ slides, activeIndex, onIndexChange, onSwiperReady }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeIndex) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <div className="irr-ref-compare-swiper-wrap">
      <Swiper
        className="irr-ref-compare-swiper"
        modules={[Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        speed={650}
        nested
        allowTouchMove
        pagination={{ clickable: true, el: '.irr-ref-compare-pagination' }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          onSwiperReady?.(swiper);
        }}
        onSlideChange={(swiper) => onIndexChange(swiper.activeIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <BeforeAfterCompare
              beforeSrc={slide.before}
              afterSrc={slide.after}
              beforeAlt={slide.beforeAlt}
              afterAlt={slide.afterAlt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="irr-ref-compare-pagination" />
    </div>
  );
}

function BeforeAfterCompare({ beforeSrc, afterSrc, beforeAlt, afterAlt }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const beforeImgRef = useRef(null);
  const draggingRef = useRef(false);

  const syncBeforeWidth = useCallback(() => {
    const container = containerRef.current;
    const beforeImg = beforeImgRef.current;
    if (!container || !beforeImg) return;
    beforeImg.style.width = `${container.offsetWidth}px`;
  }, []);

  useEffect(() => {
    syncBeforeWidth();
    window.addEventListener('resize', syncBeforeWidth);
    return () => window.removeEventListener('resize', syncBeforeWidth);
  }, [syncBeforeWidth, afterSrc]);

  useEffect(() => {
    setPosition(50);
    requestAnimationFrame(syncBeforeWidth);
  }, [afterSrc, syncBeforeWidth]);

  const setFromClientX = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (event) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  };

  const onPointerMove = (event) => {
    if (!draggingRef.current) return;
    setFromClientX(event.clientX);
  };

  const onPointerUp = (event) => {
    draggingRef.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      className="irr-ref-compare swiper-no-swiping"
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="irr-ref-compare-after">
        <img src={afterSrc} alt={afterAlt} />
      </div>
      <div className="irr-ref-compare-before" style={{ width: `${position}%` }}>
        <img ref={beforeImgRef} src={beforeSrc} alt={beforeAlt} />
      </div>
      <div className="irr-ref-compare-handle" style={{ left: `${position}%` }} aria-hidden="true">
        <span className="irr-ref-compare-handle-knob">
          <img src={logoKcr} alt="" />
        </span>
      </div>
      <span className="irr-ref-compare-label irr-ref-compare-label--before">Before</span>
      <span className="irr-ref-compare-label irr-ref-compare-label--after">After</span>
    </div>
  );
}

const IrrigationNInfrastructure = () => {
  const reduceMotion = useReducedMotion();
  const [activeImpact, setActiveImpact] = useState(0);
  const compareSwiperRef = useRef(null);
  const impactSwiperRef = useRef(null);

  const syncImpactIndex = useCallback((index) => {
    setActiveImpact(index);
    const compare = compareSwiperRef.current;
    const impact = impactSwiperRef.current;
    if (compare && compare.activeIndex !== index) compare.slideTo(index);
    if (impact && impact.activeIndex !== index) impact.slideTo(index);
  }, []);

  return (
    <>
      <style>{pageStyles}</style>
      <motion.div
        className="achievement-detail-page irr-ref-page"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section
          className="irrigation-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-label="Irrigation and infrastructure hero"
        >
          <h1>
            <span>Modern</span>
            <span className="accent-text">Irrigation</span>
          </h1>
          <p>Building the backbone of Telangana</p>
        </section>

        <section className="irr-ref-mega-wrap" aria-labelledby="irr-mega-title">
          <div className="irr-ref-mega-grid">
            <SlideIn className="irr-ref-visual" delay={0}>
              <img src={kaleshwaramImg} alt="Kaleshwaram irrigation project" />
              <div className="irr-ref-overlay">
                <span className="irr-ref-overlay-label">Total Area Benefited</span>
                <span className="irr-ref-overlay-value">45L+</span>
                <span className="irr-ref-overlay-unit">Acres</span>
                <span className="irr-ref-overlay-desc">Irrigated &amp; Stabilized Across Telangana</span>
              </div>
            </SlideIn>

            <div className="irr-ref-mega-right">
              <SlideIn delay={0.05}>
                <h2 className="irr-ref-mega-heading" id="irr-mega-title">
                  Mega Irrigation Projects
                </h2>
              </SlideIn>

              {megaProjects.map((project, index) => (
                <SlideIn key={project.id} className="irr-ref-project" delay={0.1 + index * 0.08}>
                  <div className="irr-ref-project-head">
                    <span className="irr-ref-project-icon">{project.icon}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <div className="irr-ref-project-stats">
                    {project.stats.map((stat) => (
                      <MegaStatBox key={stat.label} {...stat} />
                    ))}
                  </div>
                </SlideIn>
              ))}
            </div>
          </div>
        </section>

        <section className="irr-ref-initiatives-wrap" aria-labelledby="irr-initiatives-title">
          <header className="irr-ref-initiatives-header">
            <span className="irr-ref-wave" aria-hidden="true">
              <WaveSvg />
            </span>
            <h2 className="irr-ref-initiatives-title" id="irr-initiatives-title">
              Statewide Water Initiatives
            </h2>
            <span className="irr-ref-wave irr-ref-wave--bottom" aria-hidden="true">
              <WaveSvg />
            </span>
          </header>

          <div className="irr-ref-cards-grid">
            {waterInitiatives.map((card, index) => (
              <SlideIn key={card.id} className="irr-ref-card" delay={0.06 + index * 0.07}>
                <div className="irr-ref-card-bg" aria-hidden="true">
                  <img src={card.bgImage} alt="" />
                </div>
                <div className="irr-ref-card-inner">
                  <span className="irr-ref-card-icon">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p className="irr-ref-card-sub">{card.subtitle}</p>
                  <p className="irr-ref-card-desc">{card.description}</p>
                  <div className="irr-ref-card-stats">
                    {card.stats.map((stat) => (
                      <CardStat key={stat.label} {...stat} />
                    ))}
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </section>

        <SlideIn className="irr-ref-summary" delay={0.05}>
          <span className="irr-ref-summary-icon">
            <IconDrop />
          </span>
          <p>
            From mega lift projects to tank restoration and drinking water connectivity — building a
            water-secure and drought-free Telangana.
          </p>
        </SlideIn>

        <section className="irr-ref-transform-wrap" aria-labelledby="irr-transform-title">
          <h2 className="irr-ref-transform-heading" id="irr-transform-title">
            Transforming Lives Through Water
          </h2>
          <div className="irr-ref-transform-grid">
            <div className="irr-ref-impact-panel irr-ref-impact-list--desktop">
              <div className="irr-ref-impact-panel-head">
                <p className="irr-ref-impact-panel-label">4 impact areas</p>
                <p className="irr-ref-impact-panel-count" aria-live="polite">
                  {activeImpact + 1} / 4
                </p>
              </div>
              <ol className="irr-ref-impact-list">
                {impactAreas.map((area, index) => (
                  <li key={area.id}>
                    <ImpactAreaItem
                      area={area}
                      index={index}
                      active={activeImpact === index}
                      onSelect={() => syncImpactIndex(index)}
                    />
                  </li>
                ))}
              </ol>
            </div>
            <div className="irr-ref-impact-swiper-wrap">
              <Swiper
                className="irr-ref-impact-swiper"
                modules={[Pagination]}
                spaceBetween={12}
                slidesPerView={1}
                speed={700}
                pagination={{ clickable: true, el: '.irr-ref-impact-pagination' }}
                onSwiper={(swiper) => {
                  impactSwiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => syncImpactIndex(swiper.activeIndex)}
              >
                {impactAreas.map((area, index) => (
                  <SwiperSlide key={area.id}>
                    <ImpactAreaItem
                      area={area}
                      index={index}
                      active={activeImpact === index}
                      onSelect={() => syncImpactIndex(index)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="irr-ref-impact-pagination" />
            </div>
            <SlideIn delay={0.1} className="irr-ref-compare-col">
              <TransformCompareCarousel
                slides={transformCompareSlides}
                activeIndex={activeImpact}
                onIndexChange={syncImpactIndex}
                onSwiperReady={(swiper) => {
                  compareSwiperRef.current = swiper;
                }}
              />
            </SlideIn>
          </div>
          <SlideIn className="irr-ref-impact-stats" delay={0.12}>
            {transformStats.map((stat) => (
              <div key={stat.label} className="irr-ref-impact-stat">
                <span className="irr-ref-impact-stat-icon">{stat.icon}</span>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </SlideIn>
        </section>

        <section className="irr-ref-footer" aria-labelledby="irr-footer-title">
          <div className="irr-ref-footer-bg">
            <img src={footerLakeImg} alt="" />
          </div>
          <motion.div className="irr-ref-footer-content">
            <h2 id="irr-footer-title">A Water-Secure Telangana</h2>
            <p>
              Sustainable water management for agriculture, drinking water, and village ecosystems —
              securing livelihoods today and for generations ahead.
            </p>
            <motion.div className="irr-ref-footer-pillars">
              {footerPillars.map((pillar) => (
                <div key={pillar.title} className="irr-ref-pillar">
                  <span className="irr-ref-pillar-icon">{pillar.icon}</span>
                  <strong>{pillar.title}</strong>
                  <span>{pillar.desc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default IrrigationNInfrastructure;
