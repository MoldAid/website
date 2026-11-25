import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import './HomeHeader.css';

// Menuen, i samme rækkefølge som sektionerne på forsiden. Ordene er valgt til ingeniører:
// konkrete fagord frem for marketing-ord (25-11-2026).
const MENU: [string, string][] = [
  ['#how', 'STEP to mold'],
  ['#who', 'Applications'],
  ['#need', 'Requirements'],
  ['#pricing', 'Pricing'],
  ['#resources', 'Design rules'],
  ['#faq', 'FAQ'],
];

/**
 * Hvilken menusektion læseren er i. Linjen ligger lige under den faste top; den sektion, der krydser
 * linjen, er aktiv. Mellem sektioner uden menupunkt (fx Team) er intet markeret.
 * Efter et klik holdes det valgte punkt fast, mens siden glider derhen, så menuen ikke blinker forbi.
 */
function useActiveSection(header: React.RefObject<HTMLElement | null>) {
  const [active, setActive] = useState<string | null>(null);
  const lockUntil = useRef(0);

  useEffect(() => {
    // Seks målinger pr. scroll er billigt; React springer genrender over, når sektionen er den samme.
    const measure = () => {
      if (performance.now() < lockUntil.current) return;
      const line = (header.current?.getBoundingClientRect().bottom ?? 0) + 24;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let found: string | null = null;
      for (const [href] of MENU) {
        const el = document.getElementById(href.slice(1));
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) found = href;
        // Helt nederst kan den sidste, korte sektion ikke nå linjen; så tæller den, hvis den er synlig.
        if (atBottom && r.top < window.innerHeight) found = href;
      }
      setActive(found);
    };
    const unlock = () => {
      lockUntil.current = 0;
      measure();
    };
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('scrollend', unlock);
    return () => {
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      window.removeEventListener('scrollend', unlock);
    };
  }, [header]);

  const choose = (href: string) => {
    setActive(href);
    // Browsere uden «scrollend» slipper låsen efter rulletiden.
    lockUntil.current = performance.now() + 1200;
  };

  return { active, choose };
}

export function HomeHeader() {
  const menu = useRef<HTMLDetailsElement>(null);
  const header = useRef<HTMLElement>(null);
  const closeMenu = () => menu.current?.removeAttribute('open');
  const { active, choose } = useActiveSection(header);

  return (
    <>
      <header
        ref={header}
        className="site-nav"
        style={{ padding: '18px clamp(20px, 5vw, 80px)', borderBottom: '1px solid #0D1116', background: '#F4F1EA' }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px 32px',
          }}
        >
          <a
            href="#top"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#0D1116' }}
          >
            <img
              src="/assets/brand/moldaid-logo-horizontal-light-bg.svg"
              alt="MoldAid"
              style={{ display: 'block', height: '32px', width: 'auto', background: '#F4F1EA' }}
            />
          </a>
          <nav className="nav-desktop main-menu" aria-label="Main">
            {MENU.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className={active === href ? 'active' : undefined}
                aria-current={active === href ? 'location' : undefined}
                onClick={() => choose(href)}
              >
                {label}
              </a>
            ))}
          </nav>
          <Link
            className="nav-desktop"
            to="/waitlist"
            style={{
              background: '#355F84',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '15px',
              padding: '13px 22px',
              borderRadius: '8px',
            }}
          >
            Join the beta waitlist
          </Link>
          <details className="nav-mobile" ref={menu}>
            <summary
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                minHeight: '44px',
                padding: '0 14px',
                border: '1px solid #0D1116',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#0D1116',
              }}
            >
              <svg className="ic-open" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  fill="none"
                  stroke="#0D1116"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <svg className="ic-close" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" fill="none" stroke="#0D1116" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span>Menu</span>
            </summary>
            <nav
              aria-label="Main"
              onClick={closeMenu}
              style={{
                position: 'absolute',
                left: '0',
                right: '0',
                top: '100%',
                background: '#F4F1EA',
                borderBottom: '1px solid #0D1116',
                padding: '4px clamp(20px, 5vw, 80px) 24px',
                boxShadow: '0 16px 32px rgba(11, 15, 24, 0.12)',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '15px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {MENU.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  aria-current={active === href ? 'location' : undefined}
                  onClick={() => choose(href)}
                  style={{
                    display: 'block',
                    color: active === href ? '#94592A' : '#0D1116',
                    fontWeight: active === href ? 600 : undefined,
                    textDecoration: 'none',
                    padding: '15px 0',
                    borderBottom: '1px solid #CFC8B8',
                  }}
                >
                  {label}
                </a>
              ))}
              <Link
                to="/waitlist"
                style={{
                  display: 'block',
                  marginTop: '20px',
                  background: '#355F84',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  fontWeight: '600',
                  fontSize: '16px',
                  letterSpacing: '0',
                  textTransform: 'none',
                  textAlign: 'center',
                  padding: '15px 22px',
                  borderRadius: '8px',
                }}
              >
                Join the beta waitlist
              </Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
