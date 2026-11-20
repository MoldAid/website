import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Ved sideskift: til toppen, eller til ankeret når linket har et (fx /#pricing fra en underside).
 * Klik på #-links inden for samme side klarer browseren selv.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
