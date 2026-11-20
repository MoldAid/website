import { Link } from 'react-router';
import { PageShell } from '../components/PageShell';
import { SubpageHeader } from '../components/SubpageHeader';

export function WaitlistPage() {
  return (
    <PageShell
      title="Join the waitlist · MoldAid"
      description="Join the MoldAid private beta waitlist. Early access before public release in January 2027."
      style={{ minHeight: '1120px', boxSizing: 'border-box', padding: '0 0 80px' }}
    >
      <SubpageHeader />
      <div style={{ padding: '56px clamp(20px, 5vw, 80px) 0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <main
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: '64px',
              alignItems: 'start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  letterSpacing: '0.14em',
                  color: '#5A6270',
                  textTransform: 'uppercase',
                  marginBottom: '-6px',
                }}
              >
                <span style={{ width: '40px', height: '2px', background: '#B97335' }} aria-hidden="true"></span>Private
                beta
              </div>
              <h1
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '700',
                  fontSize: 'clamp(44px, 7vw, 100px)',
                  lineHeight: '0.84',
                  letterSpacing: '-0.015em',
                  color: '#0D1116',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Join the MoldAid</span>
                <br />
                <span style={{ color: '#94592A' }}>waitlist</span>.
              </h1>
              <p style={{ margin: '0', fontSize: '20px', color: '#2A313C', maxWidth: '500px' }}>
                We open access in January 2027. Waitlist members get in first, with a launch discount.
              </p>
              <div
                style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #0D1116', maxWidth: '500px' }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'baseline',
                    padding: '14px 0',
                    borderBottom: '1px solid #0D1116',
                  }}
                >
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#94592A' }}>
                    01
                  </span>
                  <span>Early access before public release</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'baseline',
                    padding: '14px 0',
                    borderBottom: '1px solid #0D1116',
                  }}
                >
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#94592A' }}>
                    02
                  </span>
                  <span>Launch discount on your first molds</span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'baseline',
                    padding: '14px 0',
                    borderBottom: '1px solid #0D1116',
                  }}
                >
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#94592A' }}>
                    03
                  </span>
                  <span>A direct line to the team behind it</span>
                </div>
              </div>
              <figure
                style={{
                  margin: '0',
                  maxWidth: '500px',
                  boxSizing: 'border-box',
                  border: '1px solid #0D1116',
                  borderRadius: '8px',
                  padding: '8px',
                  background: '#FFFFFF',
                }}
              >
                <img
                  src="/assets/img/engineer-at-printer.jpg"
                  alt="Engineer working at a 3D printer workstation"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                    objectPosition: '60% 30%',
                    borderRadius: '4px',
                  }}
                />
              </figure>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                background: '#FFFFFF',
                border: '1px solid #0D1116',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '12px clamp(20px, 3vw, 36px)',
                  borderBottom: '1px solid #0D1116',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: '#5A6270',
                }}
              >
                <span>WAITLIST FORM</span>
                <span>3 REQUIRED FIELDS</span>
              </div>
              <div style={{ padding: 'clamp(20px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                    gap: '22px',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="bw-name" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Name
                    </label>
                    <input
                      id="bw-name"
                      type="text"
                      autoComplete="name"
                      style={{
                        height: '50px',
                        boxSizing: 'border-box',
                        background: '#F4F1EA',
                        border: '1px solid #5A6270',
                        borderRadius: '8px',
                        color: '#0D1116',
                        font: 'inherit',
                        padding: '0 14px',
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="bw-email" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Work email
                    </label>
                    <input
                      id="bw-email"
                      type="email"
                      autoComplete="email"
                      style={{
                        height: '50px',
                        boxSizing: 'border-box',
                        background: '#F4F1EA',
                        border: '1px solid #5A6270',
                        borderRadius: '8px',
                        color: '#0D1116',
                        font: 'inherit',
                        padding: '0 14px',
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="bw-company" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Company
                    </label>
                    <input
                      id="bw-company"
                      type="text"
                      autoComplete="organization"
                      style={{
                        height: '50px',
                        boxSizing: 'border-box',
                        background: '#F4F1EA',
                        border: '1px solid #5A6270',
                        borderRadius: '8px',
                        color: '#0D1116',
                        font: 'inherit',
                        padding: '0 14px',
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="bw-role" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Role <span style={{ fontWeight: '400', color: '#5A6270' }}>(optional)</span>
                    </label>
                    <input
                      id="bw-role"
                      type="text"
                      autoComplete="organization-title"
                      style={{
                        height: '50px',
                        boxSizing: 'border-box',
                        background: '#F4F1EA',
                        border: '1px solid #5A6270',
                        borderRadius: '8px',
                        color: '#0D1116',
                        font: 'inherit',
                        padding: '0 14px',
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="bw-area" style={{ fontWeight: '600', fontSize: '15px' }}>
                    Business area <span style={{ fontWeight: '400', color: '#5A6270' }}>(optional)</span>
                  </label>
                  <select
                    id="bw-area"
                    style={{
                      height: '50px',
                      boxSizing: 'border-box',
                      background: '#F4F1EA',
                      border: '1px solid #5A6270',
                      borderRadius: '8px',
                      color: '#0D1116',
                      font: 'inherit',
                      padding: '0 12px',
                    }}
                  >
                    <option>Choose one</option>
                    <option>[Business area options]</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="bw-resin" style={{ fontWeight: '600', fontSize: '15px' }}>
                    Which mold resin do you use? <span style={{ fontWeight: '400', color: '#5A6270' }}>(optional)</span>
                  </label>
                  <select
                    id="bw-resin"
                    style={{
                      height: '50px',
                      boxSizing: 'border-box',
                      background: '#F4F1EA',
                      border: '1px solid #5A6270',
                      borderRadius: '8px',
                      color: '#0D1116',
                      font: 'inherit',
                      padding: '0 12px',
                    }}
                  >
                    <option>Choose one</option>
                    <option>IM 2.0 GP1</option>
                    <option>IM 2.0 F1</option>
                    <option>Another resin</option>
                    <option>Not printing molds yet</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="bw-why" style={{ fontWeight: '600', fontSize: '15px' }}>
                    Why are you interested in MoldAid?{' '}
                    <span style={{ fontWeight: '400', color: '#5A6270' }}>(optional)</span>
                  </label>
                  <textarea
                    id="bw-why"
                    rows={4}
                    style={{
                      boxSizing: 'border-box',
                      background: '#F4F1EA',
                      border: '1px solid #5A6270',
                      borderRadius: '8px',
                      color: '#0D1116',
                      font: 'inherit',
                      padding: '12px 14px',
                      resize: 'vertical',
                    }}
                  ></textarea>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <input
                    id="bw-consent"
                    type="checkbox"
                    style={{
                      width: '22px',
                      height: '22px',
                      margin: '2px 0 0',
                      accentColor: '#355F84',
                      flexShrink: '0',
                    }}
                  />
                  <label htmlFor="bw-consent" style={{ fontSize: '15px', color: '#3A424F' }}>
                    I agree that MoldAid may email me about beta access. See the{' '}
                    <Link to="/privacy">privacy policy</Link>.
                  </label>
                </div>
                <button
                  type="button"
                  style={{
                    alignSelf: 'flex-start',
                    background: '#355F84',
                    color: '#FFFFFF',
                    border: '0',
                    borderRadius: '8px',
                    font: 'inherit',
                    fontWeight: '600',
                    padding: '16px 30px',
                    cursor: 'pointer',
                  }}
                >
                  Join the waitlist
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </PageShell>
  );
}
