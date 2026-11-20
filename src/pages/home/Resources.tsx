export function Resources() {
  return (
    <>
      <section id="resources" style={{ padding: '0 clamp(20px, 5vw, 80px) 96px' }}>
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
            <span>07 · RESOURCES</span>
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
            Judge the output before you join.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '24px',
            }}
          >
            <div
              style={{
                border: '1px solid #0D1116',
                borderRadius: '8px',
                background: '#FFFFFF',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  height: '220px',
                  border: '1px dashed #5A6270',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '0 16px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  color: '#5A6270',
                }}
              >
                [Render or photo of the example mold]
              </div>
              <div
                style={{
                  padding: '14px 14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    color: '#355F84',
                  }}
                >
                  EXAMPLE MOLD · STEP AND STL
                </div>
                <h3
                  style={{
                    margin: '0',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: '600',
                    fontSize: '32px',
                    lineHeight: '1.05',
                  }}
                >
                  Download an example mold
                </h3>
                <p style={{ margin: '0', color: '#3A424F' }}>
                  [One or two sentences: which part the mold is for, and what the download contains]
                </p>
                <a
                  href="#example-mold"
                  style={{
                    marginTop: '4px',
                    background: '#355F84',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: '600',
                    padding: '14px 24px',
                    borderRadius: '8px',
                  }}
                >
                  Download example mold
                </a>
              </div>
            </div>
            <div
              style={{
                border: '1px solid #0D1116',
                borderRadius: '8px',
                background: '#FFFFFF',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div
                style={{
                  height: '220px',
                  border: '1px dashed #5A6270',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '0 16px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  color: '#5A6270',
                }}
              >
                [Drawing: a part with the design rules marked]
              </div>
              <div
                style={{
                  padding: '14px 14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    color: '#94592A',
                  }}
                >
                  DESIGN RULES
                </div>
                <h3
                  style={{
                    margin: '0',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: '600',
                    fontSize: '32px',
                    lineHeight: '1.05',
                  }}
                >
                  Design rules for printed molds
                </h3>
                <p style={{ margin: '0', color: '#3A424F' }}>
                  [One or two sentences: what the rules cover, e.g. part size, wall thickness and draft]
                </p>
                <a
                  href="#design-rules"
                  style={{
                    marginTop: '4px',
                    color: '#0D1116',
                    textDecoration: 'none',
                    fontWeight: '600',
                    padding: '13px 24px',
                    border: '1px solid #0D1116',
                    borderRadius: '8px',
                  }}
                >
                  Read the design rules
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
