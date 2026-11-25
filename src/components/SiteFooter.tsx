import { Link } from 'react-router';
import { useConsent } from '../lib/consent';

export function SiteFooter() {
  const { openSettings } = useConsent();
  return (
    <>
      <footer style={{ background: '#0B0F18', borderTop: '1px solid #2A3345', padding: '32px clamp(20px, 5vw, 80px)' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '12px 48px',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '13px',
            lineHeight: '1.6',
            color: '#A7B0BF',
          }}
        >
          <span>MoldAid ApS · CVR DK12121212</span>
          <div
            style={{
              marginLeft: 'auto',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              gap: '8px 24px',
            }}
          >
            <Link to="/terms" style={{ color: '#C5CCD8' }}>
              Terms
            </Link>
            <Link to="/privacy" style={{ color: '#C5CCD8' }}>
              Privacy
            </Link>
            <Link to="/contact" style={{ color: '#C5CCD8' }}>
              Contact
            </Link>
            <button
              type="button"
              onClick={openSettings}
              style={{
                background: 'none',
                border: 0,
                padding: 0,
                font: 'inherit',
                color: '#C5CCD8',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Cookie settings
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
