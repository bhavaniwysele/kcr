import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AchievementsSlider.css';

import heroImage from '../assets/heroimage.jpeg';
import irrigation from '../assets/irrigation.jpg';
import agriculture from '../assets/agriculture.jpg';
import welfare from '../assets/welfareschemes.jpg';
import economic from '../assets/economicgrowth.jpeg';
import culture from '../assets/cultureNheritage.jpg';

gsap.registerPlugin(ScrollTrigger);

const panelStories = [
  {
    title: 'Welfare That Touches Lives',
    description:
      'From KCR Kit to Aasara pensions — initiatives designed to support mothers, families, and every vulnerable citizen across Telangana.',
    image: welfare,
    slug: 'welfare',
    cta: 'Explore Welfare',
  },
  {
    title: 'Irrigation & Infrastructure',
    description:
      'World-class dams and networks like Kaleshwaram — building water security and modern infrastructure for generations.',
    image: irrigation,
    slug: 'irrigation',
    cta: 'View Projects',
  },
  {
    title: 'Agriculture Development',
    description:
      'Rythu Bandhu, free 24×7 power, and farmer-first policies — empowering those who feed the state.',
    image: agriculture,
    slug: 'agriculture',
    cta: 'Farmer Initiatives',
  },
];

const sidePanelStories = [
  {
    title: 'Economic Development',
    description:
      'Driving TS-iPASS and making Telangana a global destination for investment and industry.',
    image: economic,
    slug: 'economic',
    cta: 'Explore Growth',
    side: 'left',
  },
  {
    title: 'Cultural Revival',
    description:
      'Restoring and celebrating the unique identity, heritage, and festivals of Telangana.',
    image: culture,
    slug: 'culture',
    cta: 'Discover Culture',
    side: 'right',
  },
];

const renderStoryCard = (story) => (
  <article className="story-card">
    <div className="story-card__thumb">
      <img src={story.image} alt="" />
    </div>
    <div className="story-card__body">
      <h3>{story.title}</h3>
      <p>{story.description}</p>
      <Link to={`/achievements/${story.slug}`} className="story-card__cta">
        {story.cta} <span aria-hidden="true">→</span>
      </Link>
    </div>
  </article>
);

const AchievementsSlider = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const splitWrapRef = useRef(null);
  const splitRowRef = useRef(null);
  const unifiedImgRef = useRef(null);
  const leftSideCardRef = useRef(null);
  const rightSideCardRef = useRef(null);
  const subtitleRef = useRef(null);
  const leftSlotRef = useRef(null);
  const rightSlotRef = useRef(null);
  const centerWrapRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;
    const splitWrap = splitWrapRef.current;
    const splitRow = splitRowRef.current;
    const unifiedImg = unifiedImgRef.current;
    const leftSideCard = leftSideCardRef.current;
    const rightSideCard = rightSideCardRef.current;
    const subtitle = subtitleRef.current;
    const leftSlot = leftSlotRef.current;
    const rightSlot = rightSlotRef.current;
    const centerWrap = centerWrapRef.current;

    if (
      !section ||
      !pin ||
      !stage ||
      !splitWrap ||
      !splitRow ||
      !unifiedImg ||
      !leftSideCard ||
      !rightSideCard ||
      !subtitle ||
      !leftSlot ||
      !rightSlot ||
      !centerWrap
    )
      return undefined;

    const panelInners = gsap.utils.toArray('.panel-inner', splitRow);
    const slices = gsap.utils.toArray('.split-slice', splitRow);
    const panelSlices = gsap.utils.toArray('.panel-slice', splitRow);
    const sheens = gsap.utils.toArray('.panel-slice__sheen', splitRow);
    const glow = splitWrap.querySelector('.split-visual__glow');
    const cardsRow = stage.querySelector('.cinematic-cards-row');

    if (!cardsRow) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (prefersReducedMotion) {
      gsap.set(splitWrap, { clearProps: 'all' });
      gsap.set(cardsRow, { clearProps: 'transform' });
      gsap.set(splitRow, { gap: 4 });
      gsap.set(unifiedImg, { opacity: 0 });
      gsap.set(panelSlices, { opacity: 1 });
      panelInners.forEach((el) => gsap.set(el, { rotateY: 180 }));
      gsap.set(leftSideCard, { x: 0, opacity: 1 });
      gsap.set(rightSideCard, { x: 0, opacity: 1 });
      gsap.set(subtitle, { y: 0, opacity: 1 });
      gsap.set([leftSlot, rightSlot, centerWrap], {
        clearProps: 'flex,flexGrow,flexShrink,flexBasis',
      });
      return undefined;
    }

    const splitGap = isMobile ? 2 : 4;
    /* Strong pre-slit shrink so the change is clearly visible */
    const splitWrapScaleHero = isMobile ? 0.86 : 0.76;

    const ctx = gsap.context(() => {
      gsap.set(splitRow, { gap: 0 });
      gsap.set(splitWrap, { scale: 1, x: 0, y: 0 });
      gsap.set(cardsRow, { scale: 1, transformOrigin: '50% 50%' });
      gsap.set(slices, { borderRadius: 0, boxShadow: 'none' });
      gsap.set(unifiedImg, { opacity: 1 });
      gsap.set(panelSlices, { opacity: 0 });
      gsap.set(sheens, { opacity: 0 });
      panelInners.forEach((el) => gsap.set(el, { rotateY: 0 }));
      gsap.set(leftSideCard, { x: isMobile ? '-108%' : '-112%', opacity: 0 });
      gsap.set(rightSideCard, { x: isMobile ? '108%' : '112%', opacity: 0 });
      gsap.set(subtitle, { y: -28, opacity: 0 });
      gsap.set([leftSlot, rightSlot], { flexGrow: 0, flexShrink: 1, flexBasis: 0 });
      gsap.set(centerWrap, { flexGrow: 1, flexShrink: 1, flexBasis: 0 });

      const tl = gsap.timeline({
        defaults: { ease: 'none', force3D: true },
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: '+=118%',
          pin: true,
          pinSpacing: true,
          scrub: 1.15,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /* Phase 1 — shrink center visual before slit */
      tl.to(
        splitWrap,
        { scale: splitWrapScaleHero, duration: 0.38, ease: 'power2.out' },
        0
      );

      tl.fromTo(
        splitWrap,
        { boxShadow: '0 0 0 rgba(26, 35, 126, 0)' },
        {
          boxShadow:
            '0 40px 80px rgba(26, 35, 126, 0.16), 0 12px 32px rgba(0, 0, 0, 0.1)',
          duration: 0.38,
          ease: 'power2.out',
        },
        0
      );

      tl.fromTo(stage, { rotateX: 5 }, { rotateX: 0, duration: 0.38, ease: 'power2.out' }, 0);
      tl.to(
        subtitle,
        {
          y: 0,
          opacity: 1,
          duration: 0.28,
          ease: 'power3.out',
        },
        0.04
      );

      const gapStart = 0.52;
      const gapDur = 0.16;

      tl.to(
        splitRow,
        { gap: splitGap, duration: gapDur, ease: 'power2.inOut' },
        gapStart
      );

      tl.to(
        slices,
        {
          borderRadius: isMobile ? 10 : 16,
          duration: gapDur,
          ease: 'power2.inOut',
        },
        gapStart
      );

      tl.to(
        splitWrap,
        { boxShadow: 'none', duration: gapDur, ease: 'power2.inOut' },
        gapStart
      );

      if (glow) {
        tl.to(glow, { opacity: 0, duration: gapDur, ease: 'power2.inOut' }, gapStart);
      }

      tl.to(
        splitRow,
        { borderRadius: 0, duration: gapDur, ease: 'power2.inOut' },
        gapStart
      );

      const revealSlices = gapStart + gapDur * 0.45;
      tl.to(unifiedImg, { opacity: 0, duration: 0.1, ease: 'power2.inOut' }, revealSlices);
      tl.to(panelSlices, { opacity: 1, duration: 0.1, ease: 'power2.inOut' }, revealSlices);

      /* Flips while center is still full width — vertical slits stay clear (no 1:3:1 squeeze yet) */
      const flipStart = revealSlices + 0.08;
      panelInners.forEach((panel, index) => {
        tl.to(
          panel,
          {
            rotateY: 180,
            duration: 0.16,
            ease: 'power2.inOut',
          },
          flipStart + index * 0.1
        );
      });

      const flipEnd = flipStart + (panelInners.length - 1) * 0.1 + 0.16;

      /* After flips: open five-column layout + side cards */
      const flexStart = flipEnd + 0.06;
      tl.to(
        [leftSlot, rightSlot],
        {
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: 0,
          duration: 0.26,
          ease: 'power2.inOut',
        },
        flexStart
      );
      tl.to(
        centerWrap,
        {
          flexGrow: 3,
          flexShrink: 1,
          flexBasis: 0,
          duration: 0.26,
          ease: 'power2.inOut',
        },
        flexStart
      );

      const sideInStart = flexStart + 0.12;
      tl.to(
        leftSideCard,
        {
          x: '0%',
          opacity: 1,
          duration: 0.32,
          ease: 'power3.out',
        },
        sideInStart
      );
      tl.to(
        rightSideCard,
        {
          x: '0%',
          opacity: 1,
          duration: 0.32,
          ease: 'power3.out',
        },
        sideInStart + 0.04
      );
      /* Grow row back to full size so five cards read large */
      tl.to(
        splitWrap,
        {
          scale: 1,
          duration: 0.34,
          ease: 'power2.inOut',
        },
        flexStart + 0.08
      );

      tl.to(
        cardsRow,
        {
          scale: 1,
          duration: 0.34,
          ease: 'power2.inOut',
        },
        flexStart + 0.08
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
    <section className="achievements-section" ref={sectionRef} id="achievements">
      <div className="achievements-container">
        <div className="cinematic-scroll-track">
          <div className="cinematic-pin" ref={pinRef}>
            <h2 className="main-section-title achievements-title-pinned">ACHIEVEMENTS</h2>
            <p className="achievements-subtitle-pinned" ref={subtitleRef}>
              Transforming Telangana through welfare, growth, and cultural pride.
            </p>
            <div className="cinematic-stage" ref={stageRef}>
              <div className="cinematic-cards-row">
                <div className="side-slot side-slot--left" ref={leftSlotRef}>
                  <div
                    ref={leftSideCardRef}
                    className="side-story-card"
                  >
                    {renderStoryCard(sidePanelStories[0])}
                  </div>
                </div>

                <div className="cinematic-center-wrap" ref={centerWrapRef}>
                  {/* One image — three slices; gap:0 reads as a single card until scroll splits it */}
                  <div className="split-visual-wrap" ref={splitWrapRef}>
                    <div className="split-visual__glow" aria-hidden="true" />
                    <div className="split-visual" ref={splitRowRef}>
                      <img
                        ref={unifiedImgRef}
                        src={heroImage}
                        alt="KCR distributing welfare kits to mothers and newborns"
                        className="split-unified-img"
                      />
                      {panelStories.map((story, index) => (
                        <div className="split-slice cinematic-panel" key={story.slug}>
                          <div className="panel-inner">
                            <div className="panel-face panel-front">
                              <div className="panel-slice" data-slice={index}>
                                <img
                                  src={heroImage}
                                  alt=""
                                  className="panel-slice__img"
                                  draggable={false}
                                />
                                <div className="panel-slice__sheen" aria-hidden="true" />
                              </div>
                            </div>
                            <div className="panel-face panel-back">
                              {renderStoryCard(story)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="side-slot side-slot--right" ref={rightSlotRef}>
                  <div
                    ref={rightSideCardRef}
                    className="side-story-card"
                  >
                    {renderStoryCard(sidePanelStories[1])}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSlider;
