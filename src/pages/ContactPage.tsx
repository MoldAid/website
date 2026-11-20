import { Link } from 'react-router';
import { PageShell } from '../components/PageShell';
import { SubpageHeader } from '../components/SubpageHeader';

export function ContactPage() {
  return (
    <PageShell
      title="Contact · MoldAid"
      description="Contact the MoldAid team about the platform, the private beta or a partnership."
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
                <span style={{ width: '40px', height: '2px', background: '#B97335' }} aria-hidden="true"></span>Contact
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
                Get in <span style={{ color: '#94592A' }}>touch</span>.
              </h1>
              <p style={{ margin: '0', fontSize: '20px', color: '#2A313C', maxWidth: '500px' }}>
                Questions about MoldAid, the beta or working with us? Send a message and the team will get back to you.
              </p>
              <div
                style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #0D1116', maxWidth: '500px' }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '110px minmax(0, 1fr)',
                    gap: '18px',
                    padding: '14px 0',
                    borderBottom: '1px solid #0D1116',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '13px',
                      letterSpacing: '0.08em',
                      color: '#94592A',
                      paddingTop: '2px',
                    }}
                  >
                    EMAIL
                  </span>
                  <span>[contact email]</span>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '110px minmax(0, 1fr)',
                    gap: '18px',
                    padding: '14px 0',
                    borderBottom: '1px solid #0D1116',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '13px',
                      letterSpacing: '0.08em',
                      color: '#94592A',
                      paddingTop: '2px',
                    }}
                  >
                    ADDRESS
                  </span>
                  <address style={{ fontStyle: 'normal' }}>
                    [Company name]
                    <br />
                    [Street and number]
                    <br />
                    [Postcode] [City], Denmark
                  </address>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '110px minmax(0, 1fr)',
                    gap: '18px',
                    padding: '14px 0',
                    borderBottom: '1px solid #0D1116',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '13px',
                      letterSpacing: '0.08em',
                      color: '#94592A',
                      paddingTop: '2px',
                    }}
                  >
                    CVR
                  </span>
                  <span>[number]</span>
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
                  src="/assets/img/part-in-mold.jpg"
                  alt="Black molded fan part sitting in a blue printed mold cavity"
                  style={{ display: 'block', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px' }}
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
                <span>CONTACT FORM</span>
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
                    <label htmlFor="ct-name" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Name
                    </label>
                    <input
                      id="ct-name"
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
                    <label htmlFor="ct-email" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Work email
                    </label>
                    <input
                      id="ct-email"
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
                    <label htmlFor="ct-company" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Company <span style={{ fontWeight: '400', color: '#5A6270' }}>(optional)</span>
                    </label>
                    <input
                      id="ct-company"
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
                    <label htmlFor="ct-phone" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Phone <span style={{ fontWeight: '400', color: '#5A6270' }}>(optional)</span>
                    </label>
                    <input
                      id="ct-phone"
                      type="tel"
                      autoComplete="tel"
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
                  <label htmlFor="ct-topic" style={{ fontWeight: '600', fontSize: '15px' }}>
                    What is it about? <span style={{ fontWeight: '400', color: '#5A6270' }}>(optional)</span>
                  </label>
                  <select
                    id="ct-topic"
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
                    <option>A question about MoldAid</option>
                    <option>The private beta</option>
                    <option>Partnership</option>
                    <option>Press</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="ct-message" style={{ fontWeight: '600', fontSize: '15px' }}>
                    Message
                  </label>
                  <textarea
                    id="ct-message"
                    rows={6}
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
                    id="ct-consent"
                    type="checkbox"
                    style={{
                      width: '22px',
                      height: '22px',
                      margin: '2px 0 0',
                      accentColor: '#355F84',
                      flexShrink: '0',
                    }}
                  />
                  <label htmlFor="ct-consent" style={{ fontSize: '15px', color: '#3A424F' }}>
                    I agree that MoldAid may use my details to answer this message. See the{' '}
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
                  Send message
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </PageShell>
  );
}
