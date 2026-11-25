import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { useConsent, type Category, type Choices } from '../lib/consent';
import './CookieBanner.css';

const CATEGORIES: { id: 'necessary' | Category; title: string; text: string }[] = [
  {
    id: 'necessary',
    title: 'Necessary',
    text: 'Keeps the site working, for example your progress through sign-up and this choice. Always on.',
  },
  {
    id: 'statistics',
    title: 'Statistics',
    text: 'Anonymous numbers on how the site is used, so we can improve it. Not in use yet.',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    text: 'Measures whether our ads work. Not in use yet.',
  },
];

/**
 * Cookiebanneret nederst. God praksis (EDPB, Datatilsynet):
 * «Reject all» og «Accept all» lige synlige, ingen forudvalgte felter, intet lukkekryds uden valg,
 * siden kan bruges, mens banneret står, og valget kan ændres igen fra sidefoden.
 */
export function CookieBanner() {
  const { choices, save, settingsOpen, closeSettings } = useConsent();
  const visible = choices === null || settingsOpen;
  const [draft, setDraft] = useState<Choices>({ statistics: false, marketing: false });
  const [expanded, setExpanded] = useState(false);
  const box = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);

  // Åbnes indstillingerne fra sidefoden, starter de med det nuværende valg.
  useEffect(() => {
    if (settingsOpen) {
      setDraft(choices ?? { statistics: false, marketing: false });
      setExpanded(true);
      box.current?.focus();
    }
  }, [settingsOpen, choices]);

  // Plads under siden, så banneret ikke dækker sidefoden.
  useEffect(() => {
    if (!visible || !box.current) {
      setHeight(0);
      return;
    }
    const el = box.current;
    const ro = new ResizeObserver(() => setHeight(el.getBoundingClientRect().height + 32));
    ro.observe(el);
    return () => ro.disconnect();
  }, [visible, expanded]);

  if (!visible) return null;

  const all = (value: boolean) => save({ statistics: value, marketing: value });

  return (
    <>
      <div aria-hidden="true" style={{ height }} />
      <section ref={box} className="cookie" role="region" aria-labelledby="cookie-h" tabIndex={-1}>
        <div className="cookie-main">
          <div className="cookie-text">
            <h2 id="cookie-h">Cookies on moldaid.com</h2>
            <p>
              We only use what is needed to run the site. With your consent we may later add statistics to see how the
              site is used. You can change your choice at any time under <em>Cookie settings</em> at the bottom of every
              page. <Link to="/privacy">Privacy policy</Link>
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="cookie-btn" onClick={() => all(false)}>
              Reject all
            </button>
            <button type="button" className="cookie-btn" onClick={() => all(true)}>
              Accept all
            </button>
            <button
              type="button"
              className="cookie-link"
              aria-expanded={expanded}
              aria-controls="cookie-settings"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? 'Hide settings' : 'Settings'}
            </button>
          </div>
        </div>

        {expanded && (
          <div id="cookie-settings" className="cookie-settings">
            {CATEGORIES.map((c) => {
              const fixed = c.id === 'necessary';
              const checked = fixed ? true : draft[c.id as Category];
              return (
                <label key={c.id} className="cookie-cat">
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={fixed}
                    onChange={(e) => setDraft((d) => ({ ...d, [c.id]: e.target.checked }))}
                  />
                  <span>
                    <strong>{c.title}</strong>
                    <span>{c.text}</span>
                  </span>
                </label>
              );
            })}
            <div className="cookie-save">
              <button type="button" className="cookie-btn" onClick={() => save(draft)}>
                Save my choices
              </button>
              {choices !== null && (
                <button type="button" className="cookie-link" onClick={closeSettings}>
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
