import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** First scheme on /schemes — scroll to page top so the hero band is fully visible. */
const SCHEMES_TOP_HERO_IDS = new Set(['rythu-bandhu', 'rythu-bandhu-hero']);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = prefersReduced ? 'auto' : 'smooth';

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior });
      return undefined;
    }

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
