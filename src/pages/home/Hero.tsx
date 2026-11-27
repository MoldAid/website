import { useState } from 'react';
import { Link } from 'react-router';

const heroImages = [
  { src: '/assets/img/pvc-1.jpg', position: '72% 50%', alt: 'White 3D printed mold and clear molded part' },
  {
    src: '/assets/img/molds-and-parts.jpg',
    position: '75% 55%',
    alt: 'Blue 3D printed resin mold halves with clear and white parts',
  },
];

export function Hero() {
  const [hero] = useState(() => heroImages[Math.floor(Math.random() * heroImages.length)]);

  return (
    <>
      <section id="top" style={{ position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            minHeight: '780px',
            background: '#0B0F18',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            padding: '96px clamp(20px, 5vw, 80px) 152px',
            boxSizing: 'border-box',
          }}
        >
          <img
            src={hero.src}
            alt={hero.alt}
            style={{
              position: 'absolute',
              inset: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: hero.position,
            }}
          />
          <div
            className="mh-scrim"
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '0',
              background:
                'linear-gradient(90deg, rgba(11, 15, 24, 0.94) 0%, rgba(11, 15, 24, 0.82) 34%, rgba(11, 15, 24, 0.28) 62%, rgba(11, 15, 24, 0) 82%)',
            }}
          ></div>
          <div
            className="mh-gate"
            aria-hidden="true"
            style={{
              position: 'absolute',
              zIndex: '2',
              top: '0',
              left: '66%',
              width: '84px',
              height: 'calc(100% - 71px)',
              filter: 'drop-shadow(1px 0 0 #0D1116) drop-shadow(-1px 0 0 #0D1116)',
            }}
          >
            <div
              className="mh-pour"
              style={{ position: 'absolute', inset: '0', clipPath: 'polygon(0 0, 100% 0, 64% 100%, 36% 100%)' }}
            ></div>
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1240px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                letterSpacing: '0.14em',
                color: '#C5CCD8',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '40px', height: '2px', background: '#C98548' }} aria-hidden="true"></span>Mold
              design for 3D printed injection molds
            </div>
            <h1
              style={{
                margin: '0',
                maxWidth: '1000px',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(56px, 9vw, 136px)',
                lineHeight: '0.84',
                letterSpacing: '-0.015em',
                color: '#F4F1EA',
              }}
            >
              Prototype molds
              <br />
              in <span style={{ color: '#C98548' }}>minutes</span>,<br />
              not hours.
            </h1>
            <p style={{ margin: '8px 0 0', maxWidth: '520px', fontSize: '20px', lineHeight: '1.5', color: '#D5DAE2' }}>
              Upload your part as a STEP file. Mold Studio turns it into a printable injection mold with split line, gate
              and vents, ready for your own printer and molding machine.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <Link
                to="/plans"
                style={{
                  background: '#B97335',
                  color: '#0B0F18',
                  textDecoration: 'none',
                  fontWeight: '600',
                  padding: '17px 30px',
                  borderRadius: '8px',
                }}
              >
                Register
              </Link>
              <a
                href="#how"
                style={{
                  color: '#F4F1EA',
                  textDecoration: 'none',
                  fontWeight: '600',
                  padding: '16px 26px',
                  border: '1px solid rgba(244, 241, 234, 0.7)',
                  borderRadius: '8px',
                }}
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
        {/* Title block, overlapping the photo */}
        <div style={{ position: 'relative', marginTop: '-72px', padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div className="mh-gate mh-plug" aria-hidden="true"></div>
          <div
            className="mh-panel"
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              border: '1px solid #0D1116',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 18px 40px rgba(11, 15, 24, 0.18)',
            }}
          >
            <div style={{ padding: '20px 24px', borderRight: '1px solid #0D1116' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: '#5A6270',
                }}
              >
                INPUT
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: '600', fontSize: '28px' }}>
                STEP file
              </div>
            </div>
            <div style={{ padding: '20px 24px', borderRight: '1px solid #0D1116' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: '#5A6270',
                }}
              >
                OUTPUT
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: '600', fontSize: '28px' }}>
                STEP and STL mold
              </div>
            </div>
            <div style={{ padding: '20px 24px', borderRight: '1px solid #0D1116' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: '#5A6270',
                }}
              >
                PRICE
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: '600', fontSize: '28px' }}>
                From €149 per download
              </div>
            </div>
            <div style={{ padding: '20px 24px' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: '#5A6270',
                }}
              >
                STATUS
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ width: '10px', height: '10px', background: '#2F7A45', borderRadius: '50%' }}></span>
                Private beta
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
