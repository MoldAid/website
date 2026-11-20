import { Link } from 'react-router';

export function Pricing() {
  return (
    <>
      <section id="pricing" style={{ background: '#0B0F18', color: '#F4F1EA', padding: '88px clamp(20px, 5vw, 80px)' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '40px',
            alignItems: 'end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                letterSpacing: '0.12em',
                color: '#A7B0BF',
              }}
            >
              05 · PRICING · PAY PER USE
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(96px, 15vw, 208px)',
                lineHeight: '0.82',
                color: '#C98548',
              }}
            >
              €149
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#A7B0BF' }}>
              PER MOLD DOWNLOAD
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(36px, 4.4vw, 56px)',
                lineHeight: '1',
              }}
            >
              Pay per use. From €149 per mold download.
            </h2>
            <p style={{ margin: '0', fontSize: '19px', color: '#C5CCD8' }}>
              Pay as you go - or choose one of our plans.
            </p>
            <Link
              to="/plans"
              style={{
                background: '#F4F1EA',
                color: '#0D1116',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '16px 28px',
                borderRadius: '8px',
              }}
            >
              See our plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
