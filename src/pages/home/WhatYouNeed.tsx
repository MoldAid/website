export function WhatYouNeed() {
  return (
    <>
      <section id="need" style={{ background: 'rgba(169, 149, 109, 0.12)', padding: '96px clamp(20px, 5vw, 80px)' }}>
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
            <span>04 · WHAT YOU NEED</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '56px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px, 6vw, 80px)',
                  lineHeight: '0.95',
                }}
              >
                Check your setup.
              </h2>
              <p style={{ margin: '0', fontSize: '19px', color: '#2A313C' }}>
                MoldAid works with the equipment engineering teams already have. Our export formats are universal.
              </p>
              <div
                style={{
                  marginTop: '12px',
                  borderLeft: '0',
                  border: '1px solid #94592A',
                  background: '#F4F1EA',
                  padding: '20px 22px',
                  fontSize: '16px',
                  color: '#3A424F',
                }}
              >
                <strong
                  style={{
                    color: '#94592A',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  NOTE · USING YOUR OWN RESIN?
                </strong>
                Add its data and MoldAid estimates cost and flow for it. Without your data, the flow check uses default
                values and results are less accurate, and we can't estimate cost.
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', border: '1px solid #0D1116', background: '#F4F1EA' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '170px minmax(0, 1fr)',
                  borderBottom: '1px solid #0D1116',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#355F84',
                    fontWeight: '500',
                    padding: '18px',
                    borderRight: '1px solid #0D1116',
                  }}
                >
                  PART FILE
                </div>
                <div style={{ padding: '16px 18px' }}>STEP in, STEP and STL out.</div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '170px minmax(0, 1fr)',
                  borderBottom: '1px solid #0D1116',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#355F84',
                    fontWeight: '500',
                    padding: '18px',
                    borderRight: '1px solid #0D1116',
                  }}
                >
                  PART SIZE
                </div>
                <div style={{ padding: '16px 18px' }}>
                  Limited only by your printer. MoldAid checks that the mold fits before you print.
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '170px minmax(0, 1fr)',
                  borderBottom: '1px solid #0D1116',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#355F84',
                    fontWeight: '500',
                    padding: '18px',
                    borderRight: '1px solid #0D1116',
                  }}
                >
                  3D PRINTER
                </div>
                <div style={{ padding: '16px 18px' }}>Any resin printer. We use its build volume and resolution.</div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '170px minmax(0, 1fr)',
                  borderBottom: '1px solid #0D1116',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#355F84',
                    fontWeight: '500',
                    padding: '18px',
                    borderRight: '1px solid #0D1116',
                  }}
                >
                  MOLD RESIN
                </div>
                <div style={{ padding: '16px 18px' }}>
                  IM 2.0 GP1 and IM 2.0 F1 are built in. Or add data for your own resin.
                </div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '170px minmax(0, 1fr)',
                  borderBottom: '1px solid #0D1116',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#355F84',
                    fontWeight: '500',
                    padding: '18px',
                    borderRight: '1px solid #0D1116',
                  }}
                >
                  MOLDING MACHINE
                </div>
                <div style={{ padding: '16px 18px' }}>Your own. The machine doesn't change the mold design.</div>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '170px minmax(0, 1fr)',
                  borderBottom: '1px solid #0D1116',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#355F84',
                    fontWeight: '500',
                    padding: '18px',
                    borderRight: '1px solid #0D1116',
                  }}
                >
                  PART MATERIALS
                </div>
                <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <span>Standard datasheets for six common thermoplastics:</span>
                  <ul
                    style={{
                      margin: '0',
                      padding: '0',
                      listStyle: 'none',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                      gap: '8px 24px',
                      fontSize: '15px',
                    }}
                  >
                    <li style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '2px 8px' }}>
                      <strong style={{ fontWeight: '600' }}>ABS</strong>
                      <span>Terluran GP-22</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#5A6270' }}>
                        INEOS Styrolution
                      </span>
                    </li>
                    <li style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '2px 8px' }}>
                      <strong style={{ fontWeight: '600' }}>PA6</strong>
                      <span>Ultramid B3S</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#5A6270' }}>
                        BASF
                      </span>
                    </li>
                    <li style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '2px 8px' }}>
                      <strong style={{ fontWeight: '600' }}>PLA</strong>
                      <span>Ingeo 3052D</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#5A6270' }}>
                        NatureWorks
                      </span>
                    </li>
                    <li style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '2px 8px' }}>
                      <strong style={{ fontWeight: '600' }}>POM</strong>
                      <span>Hostaform C9021</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#5A6270' }}>
                        Celanese
                      </span>
                    </li>
                    <li style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '2px 8px' }}>
                      <strong style={{ fontWeight: '600' }}>PP</strong>
                      <span>HD120MO</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#5A6270' }}>
                        Borealis
                      </span>
                    </li>
                    <li style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '2px 8px' }}>
                      <strong style={{ fontWeight: '600' }}>TPU</strong>
                      <span>Elastollan 1185A</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#5A6270' }}>
                        BASF
                      </span>
                    </li>
                  </ul>
                  <span>Using another material? Add its data and MoldAid uses it for the flow check.</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '170px minmax(0, 1fr)' }}>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: '#94592A',
                    fontWeight: '500',
                    padding: '18px',
                    borderRight: '1px solid #0D1116',
                  }}
                >
                  NO EQUIPMENT YET?
                </div>
                <div style={{ padding: '16px 18px' }}>Starter packages for printing and molding. [Coming soon]</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
