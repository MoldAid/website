export function Problem() {
  return (
    <>
      <section style={{ padding: '104px clamp(20px, 5vw, 80px) 96px' }}>
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
            <span>01 · THE PROBLEM</span>
          </div>
          <h2
            style={{
              margin: '0',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: '700',
              fontSize: 'clamp(44px, 6vw, 80px)',
              lineHeight: '0.95',
              maxWidth: '900px',
            }}
          >
            Molded prototype parts are slow and costly to source.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              borderTop: '1px solid #0D1116',
              borderLeft: '1px solid #0D1116',
            }}
          >
            <div
              style={{
                borderRight: '1px solid #0D1116',
                borderBottom: '1px solid #0D1116',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#94592A' }}>01</div>
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '30px',
                  lineHeight: '1.1',
                }}
              >
                Specialist knowledge
              </h3>
              <p style={{ margin: '0', color: '#3A424F' }}>
                Designing a mold takes skills most product teams don't have in-house.
              </p>
            </div>
            <div
              style={{
                borderRight: '1px solid #0D1116',
                borderBottom: '1px solid #0D1116',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#94592A' }}>02</div>
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '30px',
                  lineHeight: '1.1',
                }}
              >
                External subcontractors
              </h3>
              <p style={{ margin: '0', color: '#3A424F' }}>
                Mold design and tooling go out of house, and every iteration adds cost.
              </p>
            </div>
            <div
              style={{
                borderRight: '1px solid #0D1116',
                borderBottom: '1px solid #0D1116',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#94592A' }}>03</div>
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '30px',
                  lineHeight: '1.1',
                }}
              >
                Slower time to market
              </h3>
              <p style={{ margin: '0', color: '#3A424F' }}>
                Waiting for molds delays testing the part in its real production material.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
