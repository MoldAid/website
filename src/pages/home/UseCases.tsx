export function UseCases() {
  return (
    <>
      <section id="who" style={{ padding: '104px clamp(20px, 5vw, 80px) 96px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '16px',
              borderTop: '2px solid #0D1116',
              paddingTop: '12px',
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              letterSpacing: '0.12em',
              color: '#5A6270',
            }}
          >
            <span>03 · WHO IT'S FOR</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: '56px',
              alignItems: 'start',
            }}
          >
            <figure
              style={{
                margin: '0',
                border: '1px solid #0D1116',
                borderRadius: '8px',
                padding: '10px',
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <img
                src="/assets/img/engineer-at-printer.jpg"
                alt="Engineer working at a 3D printer workstation"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  objectPosition: '60% 30%',
                  borderRadius: '4px',
                }}
              />
            </figure>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px, 5.4vw, 72px)',
                  lineHeight: '0.95',
                }}
              >
                Built for engineers who print and mold in-house.
              </h2>
              <p style={{ margin: '0', fontSize: '19px', color: '#2A313C' }}>
                OEM engineers in SMB and enterprise teams who have a resin 3D printer and an injection molding machine,
                and want to make their own prototype molds.
              </p>
              <div
                style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #0D1116', marginTop: '8px' }}
              >
                <div
                  style={{
                    padding: '20px 0',
                    borderBottom: '1px solid #0D1116',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: '600',
                      fontSize: '28px',
                      lineHeight: '1.1',
                    }}
                  >
                    R&D prototypes
                  </h3>
                  <p style={{ margin: '0', color: '#3A424F', fontSize: '16px' }}>
                    Test parts in the real production material before you invest in metal tooling.
                  </p>
                </div>
                <div
                  style={{
                    padding: '20px 0',
                    borderBottom: '1px solid #0D1116',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: '600',
                      fontSize: '28px',
                      lineHeight: '1.1',
                    }}
                  >
                    Mass customization
                  </h3>
                  <p style={{ margin: '0', color: '#3A424F', fontSize: '16px' }}>
                    Produce special parts for specific customer needs without a new steel mold each time.
                  </p>
                </div>
                <div
                  style={{
                    padding: '20px 0',
                    borderBottom: '1px solid #0D1116',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <h3
                    style={{
                      margin: '0',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: '600',
                      fontSize: '28px',
                      lineHeight: '1.1',
                    }}
                  >
                    Low-volume spare parts
                  </h3>
                  <p style={{ margin: '0', color: '#3A424F', fontSize: '16px' }}>
                    Make small batches of spare parts on demand instead of holding stock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
