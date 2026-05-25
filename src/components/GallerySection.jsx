import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GallerySection.css';

// Importing assets
import img1 from '../assets/kaleshwaram1.jpg';
import img2 from '../assets/agri1.png';
import img3 from '../assets/telangana_lush_green_paddy_field_sunset.png';
import img4 from '../assets/Aasara-pension.jpg';
import img5 from '../assets/rythu_bandhu_farmer_happy_smiling_field.png';
import img6 from '../assets/cultureNheritage.jpg';
import img7 from '../assets/mission_kakatiya.jpg';
import img8 from '../assets/Growth & Infrastructure.jpg';
import img9 from '../assets/kaleshwaram2.jpg';
import img10 from '../assets/agri2.png';

const row1 = [
  { img: img1, title: 'Kaleshwaram Project' },
  { img: img2, title: 'Bumper Harvest' },
  { img: img3, title: 'Lush Greenery' },
  { img: img4, title: 'Aasara Pensions' },
  { img: img5, title: 'Happy Farmers' },
];

const row2 = [
  { img: img6, title: 'Telangana Culture' },
  { img: img7, title: 'Mission Kakatiya' },
  { img: img8, title: 'Modern Growth' },
  { img: img9, title: 'Global Vision' },
  { img: img10, title: 'Sustainable Agri' },
];

const deckCards = [...row1, ...row2];
const LOOP_COPIES = 2;

const loopDeck = Array.from({ length: deckCards.length * LOOP_COPIES }, (_, index) => ({
  ...deckCards[index % deckCards.length],
  uid: index,
}));

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const deckRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;
    const deck = deckRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !pin || !stage || !deck || cards.length === 0) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const isTablet = window.matchMedia('(max-width: 1100px)').matches;
    const cardCount = deckCards.length;
    const centerIndex = (cards.length - 1) / 2;
    const deckCardSize = isMobile ? 175 : isTablet ? 215 : 260;
    const cardGap = isMobile ? 14 : isTablet ? 18 : 22;
    const spreadStep = deckCardSize + cardGap;
    const loopWidth = cardCount * spreadStep;

    if (prefersReducedMotion) {
      gsap.set(cards, {
        clearProps: 'all',
        opacity: 1,
        x: (index) => (index - centerIndex) * spreadStep,
        yPercent: -50,
        y: 0,
        rotate: 0,
      });
      deck.classList.add('is-spread');
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(stage, { perspective: 1700, transformStyle: 'preserve-3d' });
      gsap.set(deck, { transformStyle: 'preserve-3d' });
      gsap.set(cards, {
        x: (index) => (index - centerIndex) * 3,
        yPercent: 95,
        z: (index) => -index * 8,
        rotate: (index) => (index - centerIndex) * 1.1,
        scale: 0.92,
        opacity: 1,
        transformOrigin: '50% 100%',
      });

      const overlays = cards.map((card) => card.querySelector('.gallery-card-overlay'));
      gsap.set(overlays, { opacity: 0.35 });
      const secondsPerCard = isMobile ? 2.8 : 3.6;
      const deckScroll = gsap.to(deck, {
        x: -loopWidth,
        ease: 'none',
        duration: cardCount * secondsPerCard,
        repeat: -1,
        paused: true,
      });

      const tl = gsap.timeline({
        defaults: { ease: 'none', force3D: true },
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: '+=230%',
          pin: true,
          scrub: 1.1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const shouldAutoScroll = self.progress > 0.83;
            if (shouldAutoScroll) {
              stage.classList.add('gallery-auto-scroll');
              deckScroll.play();
            } else {
              stage.classList.remove('gallery-auto-scroll');
              deckScroll.pause();
              gsap.set(deck, { x: 0 });
            }
          },
        },
      });

      tl.to(
        cards,
        {
          yPercent: -28,
          z: (index) => -index * 5,
          rotate: (index) => (index - centerIndex) * 0.8,
          scale: 0.95,
          duration: 0.34,
          stagger: 0.02,
          ease: 'power3.out',
        },
        0
      );

      tl.to(
        cards,
        {
          yPercent: -40,
          duration: 0.12,
          stagger: 0.018,
          ease: 'power2.out',
        },
        0.32
      );
      tl.to(
        cards,
        {
          yPercent: -34,
          duration: 0.12,
          stagger: 0.018,
          ease: 'back.out(1.2)',
        },
        0.44
      );

      tl.to(
        cards,
        {
          x: (index) => (index - centerIndex) * spreadStep,
          yPercent: -50,
          z: 0,
          rotate: (index) => (index - centerIndex) * 0.12,
          scale: 1,
          duration: 0.42,
          stagger: 0.028,
          ease: 'power3.inOut',
          onStart: () => deck.classList.add('is-spread'),
          onReverseComplete: () => deck.classList.remove('is-spread'),
        },
        0.54
      );

      tl.to(
        overlays,
        {
          opacity: 0.08,
          duration: 0.3,
          stagger: 0.02,
          ease: 'power2.out',
        },
        0.66
      );

      tl.call(
        () => {
          deck.classList.add('is-spread');
        },
        [],
        0.86
      );
    }, section);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="gallery-cinematic-track">
        <div className="gallery-cinematic-pin" ref={pinRef}>
          <div className="gallery-header gallery-header--fixed">
            <h4 className="subtitle">Visual Legacy</h4>
            <h2 className="title">Telangana <span>Gallery</span></h2>
          </div>
          <div className="gallery-cinematic-stage" ref={stageRef}>
            <div className="gallery-deck" ref={deckRef}>
              {loopDeck.map((item, index) => (
                <article
                  key={`${item.title}-${item.uid}`}
                  className="gallery-deck-card"
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                >
                  <img src={item.img} alt={item.title} />
                  <div className="gallery-card-overlay" />
                  <h3 className="gallery-card-title">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default GallerySection;
