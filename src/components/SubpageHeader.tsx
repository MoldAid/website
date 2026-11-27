import { Link } from 'react-router';

/** Toppen på undersiderne: logo og et Back-link til forsiden. */
export function SubpageHeader() {
  return (
    <header
      className="site-nav"
      style={{ padding: '18px clamp(20px, 5vw, 80px)', borderBottom: '1px solid #0D1116', background: '#F2EADC' }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#0D1116' }}
        >
          <img
            src="/assets/brand/moldaid-logo-horizontal-light-bg.svg"
            alt="MoldAid"
            style={{ display: 'block', height: '32px', width: 'auto', background: '#F2EADC' }}
          />
        </Link>
        <Link
          to="/"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '12px 0',
          }}
        >
          Back
        </Link>
      </div>
    </header>
  );
}
