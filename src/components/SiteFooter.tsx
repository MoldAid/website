import { Link } from 'react-router';
import { useConsent } from '../lib/consent';
import './SiteFooter.css';

// Kort sitemap: hvert punkt peger på en side eller en sektion på forsiden.
const SITEMAP: { title: string; links: [string, string][] }[] = [
  {
    title: 'Product',
    links: [
      ['/#how', 'STEP to mold'],
      ['/#who', 'Applications'],
      ['/#need', 'Requirements'],
      ['/#resources', 'Design rules'],
    ],
  },
  {
    title: 'Pricing',
    links: [
      ['/plans', 'Plans & pricing'],
      ['/signup?plan=trial', 'Start free trial'],
      ['/waitlist', 'Join the waitlist'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['/#team', 'Team'],
      ['/#faq', 'FAQ'],
      ['/contact', 'Contact'],
      ['/login', 'Log in'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['/terms', 'Terms'],
      ['/privacy', 'Privacy'],
    ],
  },
];

export function SiteFooter() {
  const { openSettings } = useConsent();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <nav className="sitemap" aria-label="Sitemap">
          {SITEMAP.map((col) => (
            <div key={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map(([to, label]) => (
                  <li key={to}>
                    <Link to={to}>{label}</Link>
                  </li>
                ))}
                {col.title === 'Legal' && (
                  <li>
                    <button type="button" onClick={openSettings}>
                      Cookie settings
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>
        <div className="site-footer-base">
          <img src="/assets/brand/moldaid-mark.svg" alt="" width="24" height="24" />
          <span>MoldAid ApS · CVR DK12121212</span>
        </div>
      </div>
    </footer>
  );
}
