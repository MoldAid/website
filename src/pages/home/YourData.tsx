export function YourData() {
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
            <span>06 · YOUR DATA</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(44px, 6vw, 80px)',
                lineHeight: '0.95',
              }}
            >
              Your designs and data stay yours.
            </h2>
            <p style={{ margin: '0', fontSize: '19px', color: '#2A313C', maxWidth: '620px' }}>
              Engineers upload confidential parts. Here is exactly what happens to them.
            </p>
          </div>
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
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>Where it's stored</h3>
              <p style={{ margin: '0', color: '#3A424F', fontSize: '16px' }}>
                {' '}
                Hosted withing EU on secure servers in Finland, managed by a GDPR-compliant provider.{' '}
              </p>
            </div>
            <div
              style={{
                borderRight: '1px solid #0D1116',
                borderBottom: '1px solid #0D1116',
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>How long we keep it</h3>
              <p style={{ margin: '0', color: '#3A424F', fontSize: '16px' }}>
                {' '}
                As default, data is kept for 30 days. You can delete your files at any time, and we will remove them
                from our servers.{' '}
              </p>
            </div>
            <div
              style={{
                borderRight: '1px solid #0D1116',
                borderBottom: '1px solid #0D1116',
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>Who can see it</h3>
              <p style={{ margin: '0', color: '#3A424F', fontSize: '16px' }}>
                Your data belong to you and the users you invite to collaborate on them.
              </p>
            </div>
            <div
              style={{
                borderRight: '1px solid #0D1116',
                borderBottom: '1px solid #0D1116',
                padding: '26px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>Training and statistics</h3>
              <p style={{ margin: '0', color: '#3A424F', fontSize: '16px' }}>
                We dont use your data for training our AI models. Statistics are aggregated and anonymized.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
