import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (hash) {
        const targetId = hash.replace(/^#/, '');
        const el = document.getElementById(targetId);
        if (el) {
          const prefersReduced =
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
