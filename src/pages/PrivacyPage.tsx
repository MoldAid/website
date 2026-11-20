import { PageShell } from '../components/PageShell';
import { SubpageHeader } from '../components/SubpageHeader';
import { SiteFooter } from '../components/SiteFooter';
import './legal.css';

export function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy · MoldAid"
      description="How MoldAid collects, uses and protects your data."
      style={{ lineHeight: '1.65' }}
    >
      <SubpageHeader />
      <main style={{ padding: '56px clamp(20px, 5vw, 80px) 96px' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '48px 64px',
            alignItems: 'start',
          }}
        >
          <div className="legal-side" style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
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
              <span style={{ width: '40px', height: '2px', background: '#B97335' }} aria-hidden="true"></span>Legal
            </div>
            <h1
              style={{
                margin: '0',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: '700',
                fontSize: 'clamp(48px, 5vw, 76px)',
                lineHeight: '0.88',
                letterSpacing: '-0.015em',
                color: '#0D1116',
              }}
            >
              Privacy <span style={{ color: '#94592A' }}>Policy</span>.
            </h1>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#5A6270' }}>
              Last updated: [date]
            </div>
            <nav aria-label="On this page" style={{ borderTop: '1px solid #0D1116', paddingTop: '14px' }}>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  color: '#5A6270',
                  marginBottom: '8px',
                }}
              >
                ON THIS PAGE
              </div>
              <ol
                style={{
                  margin: '0',
                  padding: '0',
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontSize: '15px',
                }}
              >
                <li>
                  <a href="#s1" style={{ color: '#355F84', textDecoration: 'none' }}>
                    1. Who we are
                  </a>
                </li>
                <li>
                  <a href="#s2" style={{ color: '#355F84', textDecoration: 'none' }}>
                    2. What we collect
                  </a>
                </li>
                <li>
                  <a href="#s3" style={{ color: '#355F84', textDecoration: 'none' }}>
                    3. How we use your data
                  </a>
                </li>
                <li>
                  <a href="#s4" style={{ color: '#355F84', textDecoration: 'none' }}>
                    4. Your CAD files
                  </a>
                </li>
                <li>
                  <a href="#s5" style={{ color: '#355F84', textDecoration: 'none' }}>
                    5. Storage and retention
                  </a>
                </li>
                <li>
                  <a href="#s6" style={{ color: '#355F84', textDecoration: 'none' }}>
                    6. Sharing with third parties
                  </a>
                </li>
                <li>
                  <a href="#s7" style={{ color: '#355F84', textDecoration: 'none' }}>
                    7. Your rights
                  </a>
                </li>
                <li>
                  <a href="#s8" style={{ color: '#355F84', textDecoration: 'none' }}>
                    8. Cookies
                  </a>
                </li>
                <li>
                  <a href="#s9" style={{ color: '#355F84', textDecoration: 'none' }}>
                    9. Contact
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <article
            className="legal-body"
            style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '760px', gridColumn: 'span 2' }}
          >
            <div
              role="note"
              style={{
                border: '1px solid #94592A',
                borderRadius: '8px',
                background: '#FFFFFF',
                padding: '16px 20px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  color: '#94592A',
                  whiteSpace: 'nowrap',
                  paddingTop: '2px',
                }}
              >
                PLACEHOLDER
              </span>
              <span style={{ fontSize: '15px', color: '#3A424F' }}>
                This page holds filler text while the real wording is being written. Nothing here is binding.
              </span>
            </div>
            <section
              id="s1"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                1. Who we are
              </h2>
              <p style={{ margin: '0' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p style={{ margin: '0' }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </section>
            <section
              id="s2"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                2. What we collect
              </h2>
              <p style={{ margin: '0' }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
              <p style={{ margin: '0' }}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet.
              </p>
            </section>
            <section
              id="s3"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                3. How we use your data
              </h2>
              <p style={{ margin: '0' }}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet.
              </p>
              <p style={{ margin: '0' }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident.
              </p>
              <p style={{ margin: '0' }}>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
            </section>
            <section
              id="s4"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                4. Your CAD files
              </h2>
              <p style={{ margin: '0' }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident.
              </p>
              <p style={{ margin: '0' }}>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
            </section>
            <section
              id="s5"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                5. Storage and retention
              </h2>
              <p style={{ margin: '0' }}>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
              <p style={{ margin: '0' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </section>
            <section
              id="s6"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                6. Sharing with third parties
              </h2>
              <p style={{ margin: '0' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p style={{ margin: '0' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p style={{ margin: '0' }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </section>
            <section
              id="s7"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                7. Your rights
              </h2>
              <p style={{ margin: '0' }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <p style={{ margin: '0' }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
            </section>
            <section
              id="s8"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                8. Cookies
              </h2>
              <p style={{ margin: '0' }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
              </p>
              <p style={{ margin: '0' }}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet.
              </p>
            </section>
            <section
              id="s9"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingTop: '28px',
                borderTop: '1px solid #CFC8B8',
              }}
            >
              <h2
                style={{
                  margin: '0',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: '600',
                  fontSize: '32px',
                  lineHeight: '1.1',
                }}
              >
                9. Contact
              </h2>
              <p style={{ margin: '0' }}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet.
              </p>
              <p style={{ margin: '0' }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident.
              </p>
              <p style={{ margin: '0' }}>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
