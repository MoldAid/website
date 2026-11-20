export function Benefits() {
  return (
    <>
      <section style={{ background: '#355F84', color: '#FFFFFF', padding: '72px clamp(20px, 5vw, 80px)' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '48px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '44px',
                lineHeight: '1',
              }}
            >
              Minutes, not hours
            </h3>
            <p style={{ margin: '0', color: '#EAF0F6' }}>
              Design prototype molds in minutes, for in-house manufacturing or rapid sourcing.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '44px',
                lineHeight: '1',
              }}
            >
              Instant estimates
            </h3>
            <p style={{ margin: '0', color: '#EAF0F6' }}>
              Know what your prototype mold costs to print before you commit.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h3
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: '44px',
                lineHeight: '1',
              }}
            >
              Your shop, our help
            </h3>
            <p style={{ margin: '0', color: '#EAF0F6' }}>
              Print and mold yourself, or get help from us if you need it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
