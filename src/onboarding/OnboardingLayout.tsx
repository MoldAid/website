import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { PageShell } from '../components/PageShell';
import './onboarding.css';

const STEPS = ['Account', 'Company', 'Plan', 'Payment'];

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
    <path
      d="M2.5 7.3l2.8 2.8 6-6.4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Props = {
  title: string;
  /** 1–4 = aktivt trin, 5 = alle færdige, 0 = ingen trinviser (log ind). */
  step: number;
  children: ReactNode;
  /** Fast bundlinje (plantrinnet). */
  footer?: ReactNode;
};

export function OnboardingLayout({ title, step, children, footer }: Props) {
  return (
    <PageShell title={`${title} · MoldAid`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="ob-top">
        <Link to="/" aria-label="MoldAid home">
          <img src="/assets/brand/moldaid-logo-horizontal-light-bg.svg" alt="MoldAid" />
        </Link>
        {step > 0 ? (
          <ol className="ob-steps" aria-label="Sign-up progress">
            {STEPS.map((name, i) => {
              const n = i + 1;
              const state = n < step ? 'done' : n === step ? 'current' : '';
              return [
                <li key={name} className={state} aria-current={n === step ? 'step' : undefined}>
                  <span className="ob-dot">{n < step ? <Check /> : `0${n}`}</span>
                  <span>{name}</span>
                </li>,
                n < STEPS.length && (
                  <li key={`${name}-line`} aria-hidden="true" className={`ob-line ${n < step ? 'done' : ''}`} />
                ),
              ];
            })}
          </ol>
        ) : (
          <span />
        )}
        <Link className="ob-help" to="/contact">
          Need help?
        </Link>
      </header>
      <main className="ob-main">
        <div className="ob-wrap">{children}</div>
      </main>
      {footer}
    </PageShell>
  );
}

export { Check };
