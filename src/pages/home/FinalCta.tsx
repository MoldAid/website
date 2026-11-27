import { Link } from 'react-router';

export function FinalCta() {
  return (
    <>
      <section style={{ background: '#0B0F18', color: '#F4F1EA', padding: '96px clamp(20px, 5vw, 80px)' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          <img
            src="/assets/brand/moldaid-mark.svg"
            alt=""
            style={{ display: 'block', width: '88px', height: '88px', flexShrink: '0' }}
          />
          <div
            style={{
              flex: '1 1 420px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'flex-start',
            }}
          >
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(36px, 4.4vw, 56px)',
                lineHeight: '1',
              }}
            >
              Be first in line when Mold Studio opens.
            </h2>
            <p style={{ margin: '0', fontSize: '18px', color: '#C5CCD8' }}>
              Pick a plan, or start with a free 14-day trial.
            </p>
            <Link
              to="/plans"
              style={{
                background: '#B97335',
                color: '#0B0F18',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '15px',
                padding: '12px 22px',
                borderRadius: '8px',
              }}
            >
              Try our studio
            </Link>
          </div>
          <address
            style={{
              marginLeft: 'auto',
              alignSelf: 'flex-start',
              paddingTop: '3px',
              fontStyle: 'normal',
              textAlign: 'right',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              lineHeight: '1.6',
              color: '#A7B0BF',
            }}
          >
            [Company name]
            <br />
            [Street and number]
            <br />
            [Postcode] [City]
            <br />
            Denmark
          </address>
        </div>
      </section>
    </>
  );
}
