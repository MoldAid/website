import { Link } from 'react-router';

export function Faq() {
  return (
    <>
      <section id="faq" style={{ padding: '104px clamp(20px, 5vw, 80px) 96px' }}>
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
            <span>09 · FAQ</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '48px',
            }}
          >
            <h2
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(44px, 6vw, 80px)',
                lineHeight: '0.95',
              }}
            >
              Questions engineers ask first
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #0D1116' }}>
              <details style={{ borderBottom: '1px solid #0D1116', padding: '20px 0' }}>
                <summary style={{ fontWeight: '600', fontSize: '19px' }}>Can I use Mold Studio today?</summary>
                <p style={{ margin: '12px 0 0', color: '#3A424F' }}>
                  Mold Studio is in private beta. Public release is January 2027. Try our studio to get early access.
                </p>
              </details>
              <details style={{ borderBottom: '1px solid #0D1116', padding: '20px 0' }}>
                <summary style={{ fontWeight: '600', fontSize: '19px' }}>
                  Do I need my own printer and molding machine?
                </summary>
                <p style={{ margin: '12px 0 0', color: '#3A424F' }}>
                  Mold Studio is built for teams that print and mold in-house. If you don't have the equipment, tell us when
                  you sign up and we'll help.
                </p>
              </details>
              <details style={{ borderBottom: '1px solid #0D1116', padding: '20px 0' }}>
                <summary style={{ fontWeight: '600', fontSize: '19px' }}>Which file formats do you accept?</summary>
                <p style={{ margin: '12px 0 0', color: '#3A424F' }}>
                  You upload a STEP file and download the mold as STEP and STL. Part size is limited only by your
                  printer.
                </p>
              </details>
              <details style={{ borderBottom: '1px solid #0D1116', padding: '20px 0' }}>
                <summary style={{ fontWeight: '600', fontSize: '19px' }}>Can I use my own resin?</summary>
                <p style={{ margin: '12px 0 0', color: '#3A424F' }}>
                  Yes. Add your resin's data and Mold Studio uses it for the flow check and cost estimate. Two resins are
                  built in if you don't have your own.
                </p>
              </details>
              <details style={{ borderBottom: '1px solid #0D1116', padding: '20px 0' }}>
                <summary style={{ fontWeight: '600', fontSize: '19px' }}>What does it cost?</summary>
                <p style={{ margin: '12px 0 0', color: '#3A424F' }}>
                  You pay per mold you download - or by subscription. See our <Link to="/plans">plans</Link>.
                </p>
              </details>
              <details style={{ borderBottom: '1px solid #0D1116', padding: '20px 0' }}>
                <summary style={{ fontWeight: '600', fontSize: '19px' }}>What happens to my CAD files?</summary>
                <p style={{ margin: '12px 0 0', color: '#3A424F' }}>
                  They stay yours. We only access them, or use them for training or statistics, with your explicit
                  permission. See our <Link to="/privacy">privacy policy</Link>.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
