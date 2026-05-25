import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/** First scheme on /schemes — scroll to page top so the hero band is fully visible. */
const SCHEMES_TOP_HERO_IDS = new Set(['rythu-bandhu', 'rythu-bandhu-hero']);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const previousPathRef = useRef(pathname);

  // Disable the browser's automatic scroll restoration so it doesn't fight us.
  useEffect(() => {
    if (typeof window === 'undefined' || !('scrollRestoration' in window.history)) {
      return undefined;
    }
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const pathChanged = previousPathRef.current !== pathname;
    previousPathRef.current = pathname;

    // For page navigation (path change) WITHOUT a hash, snap instantly to the top.
    // This prevents in-view entrance animations from being burned off by a long
    // smooth-scroll passing over the cards on the new page.
    if (!hash) {
      const behavior = pathChanged ? 'auto' : prefersReduced ? 'auto' : 'smooth';
      // Use a double rAF so we run AFTER React commits the new page DOM —
      // otherwise the scroll can land on stale layout.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior });
        });
      });
      return undefined;
    }

    // In-page anchor (#hash) navigation can keep smooth behavior.
    const behavior = prefersReduced ? 'auto' : 'smooth';
    const targetId = hash.replace(/^#/, '');
    let frameId = 0;
    let attempts = 0;
    const maxAttempts = 24;
    const timeouts = [];

    const scrollToTarget = () => {
      if (pathname === '/schemes' && SCHEMES_TOP_HERO_IDS.has(targetId)) {
        window.scrollTo({ top: 0, left: 0, behavior });
        return true;
      }

      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior, block: 'start' });
        return true;
      }
      return false;
    };

    const tryScroll = () => {
      if (scrollToTarget()) return;
      if (attempts < maxAttempts) {
        attempts += 1;
        frameId = requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
    [50, 150, 350].forEach((ms) => {
      timeouts.push(window.setTimeout(scrollToTarget, ms));
    });

    return () => {
      cancelAnimationFrame(frameId);
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
