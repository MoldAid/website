import { Link } from 'react-router';
import { PageShell } from '../components/PageShell';
import { SubpageHeader } from '../components/SubpageHeader';

export function NotFoundPage() {
  return (
    <PageShell title="Page not found · MoldAid" style={{ minHeight: '100vh' }}>
      <SubpageHeader />
      <main style={{ padding: '96px clamp(20px, 5vw, 80px)' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(44px, 7vw, 100px)',
              lineHeight: 0.84,
            }}
          >
            Page not found.
          </h1>
          <p style={{ margin: 0, fontSize: '20px', color: '#2A313C' }}>
            The page you were looking for isn't here. <Link to="/">Go to the front page</Link>.
          </p>
        </div>
      </main>
    </PageShell>
  );
}
