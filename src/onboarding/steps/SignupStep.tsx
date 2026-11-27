import { useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { isPlanId } from '../../lib/pricing';
import { OnboardingLayout } from '../OnboardingLayout';
import { useOnboarding, type AuthMethod } from '../OnboardingContext';

export const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
    />
  </svg>
);
export const MicrosoftIcon = () => (
  <svg width="19" height="19" viewBox="0 0 21 21" aria-hidden="true">
    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
  </svg>
);

/** Groft mål for styrke: længde tæller mest (NIST 800-63B), ingen krav om specialtegn. */
function strength(pw: string): number {
  if (pw.length < 8) return pw.length ? 1 : 0;
  if (pw.length < 12) return 2;
  return pw.length >= 16 || /\s/.test(pw) ? 4 : 3;
}

export function SignupStep() {
  const { data, update } = useOnboarding();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [name, setName] = useState(data.name);
  const [jobTitle, setJobTitle] = useState(data.jobTitle);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [terms, setTerms] = useState(false);
  const [news, setNews] = useState(false);
  const [tried, setTried] = useState(false);

  // Plan og betalingsperiode valgt på Plans-siden følger med ind i flowet.
  useEffect(() => {
    const plan = params.get('plan');
    const billing = params.get('billing');
    update({
      ...(isPlanId(plan) ? { plan, planChosen: true } : {}),
      ...(billing === 'monthly' || billing === 'yearly' ? { billing } : {}),
    });
  }, [params, update]);

  const errors = {
    name: !name.trim() ? 'Enter your name.' : '',
    jobTitle: !jobTitle.trim() ? 'Enter your job title.' : '',
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Enter a valid work email.' : '',
    password: password.length < 12 ? 'Use at least 12 characters.' : '',
    terms: !terms ? 'Please accept the Terms and Privacy Policy.' : '',
  };
  const valid = !Object.values(errors).some(Boolean);
  const level = strength(password);

  function sso(method: AuthMethod) {
    // TODO(auth): send til Google/Microsoft OAuth. Indtil da fortsætter vi til profil-trinnet.
    update({ method, verified: true });
    navigate('/signup/confirm');
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    setTried(true);
    if (!valid) return;
    // TODO(auth): opret kontoen på serveren og send koden. Adgangskoden gemmes aldrig i browseren.
    update({ method: 'email', name: name.trim(), email: email.trim(), jobTitle: jobTitle.trim(), verified: false });
    navigate('/signup/confirm');
  }

  const err = (k: keyof typeof errors) => (tried && errors[k] ? errors[k] : '');

  return (
    <OnboardingLayout title="Create your account" step={1}>
      <div className="ob-two">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', paddingTop: '8px' }}>
          <div className="ob-eyebrow">Step 1 of 4 · Account</div>
          <h1 className="ob-h1">
            Create your
            <br />
            Mold Studio <em>account</em>.
          </h1>
          <p className="ob-lead">
            Four short steps, about two minutes. Start on a free 14-day trial, or go straight to a paid plan.
          </p>
          <div className="ob-list">
            {[
              'Upload a STEP file, get a printable mold',
              'Your CAD files stay private to your company',
              'Change plan or cancel any time',
            ].map((t, i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="ob-card" onSubmit={submit} noValidate>
          <div className="ob-strip">
            <span>Create account</span>
            <span>
              Have one? <Link to="/login">Log in</Link>
            </span>
          </div>
          <div className="ob-body" style={{ gap: '20px' }}>
            <div className="ob-pair" style={{ gap: '12px' }}>
              <button type="button" className="ob-sso" onClick={() => sso('google')}>
                <GoogleIcon />
                Continue with Google
              </button>
              <button type="button" className="ob-sso" onClick={() => sso('microsoft')}>
                <MicrosoftIcon />
                Continue with Microsoft
              </button>
            </div>
            <div className="ob-divider">or sign up with email</div>
            <div className="ob-pair">
              <div className="ob-field">
                <label htmlFor="su-name" className="ob-label">
                  Full name
                </label>
                <input
                  id="su-name"
                  className="ob-input"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!err('name')}
                  aria-describedby="su-name-err"
                />
                {err('name') && (
                  <span id="su-name-err" className="ob-error">
                    {err('name')}
                  </span>
                )}
              </div>
              <div className="ob-field">
                <label htmlFor="su-title" className="ob-label">
                  Job title
                </label>
                <input
                  id="su-title"
                  className="ob-input"
                  autoComplete="organization-title"
                  list="su-titles"
                  placeholder="e.g. Product engineer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  aria-invalid={!!err('jobTitle')}
                />
                {err('jobTitle') && <span className="ob-error">{err('jobTitle')}</span>}
                <datalist id="su-titles">
                  {['Product engineer', 'Mechanical engineer', 'R&D manager', 'Tooling engineer', 'Designer'].map(
                    (t) => (
                      <option key={t} value={t} />
                    ),
                  )}
                </datalist>
              </div>
            </div>
            <div className="ob-field">
              <label htmlFor="su-email" className="ob-label">
                Work email
              </label>
              <input
                id="su-email"
                className="ob-input"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!err('email')}
                aria-describedby="su-email-hint"
              />
              <span id="su-email-hint" className={err('email') ? 'ob-error' : 'ob-hint'}>
                {err('email') || 'We send a 6-digit code to confirm it.'}
              </span>
            </div>
            <div className="ob-field">
              <label htmlFor="su-pw" className="ob-label">
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="su-pw"
                  className="ob-input"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingRight: '72px' }}
                  aria-invalid={!!err('password')}
                  aria-describedby="su-pw-hint"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  aria-pressed={showPw}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '8px',
                    height: '34px',
                    padding: '0 10px',
                    border: 0,
                    background: 'transparent',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    color: '#355F84',
                    cursor: 'pointer',
                  }}
                >
                  {showPw ? 'HIDE' : 'SHOW'}
                </button>
              </div>
              <div aria-hidden="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {[1, 2, 3, 4].map((n) => (
                  <span
                    key={n}
                    style={{
                      height: '4px',
                      borderRadius: '2px',
                      background: n <= level ? (level < 3 ? '#B97335' : '#2F7A45') : '#CFC8B8',
                    }}
                  />
                ))}
              </div>
              <span id="su-pw-hint" className={err('password') ? 'ob-error' : 'ob-hint'}>
                {err('password') || 'At least 12 characters. A short sentence works well.'}
              </span>
            </div>
            <label className="ob-check">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                aria-invalid={!!err('terms')}
              />
              <span>
                I agree to the <Link to="/terms">Terms</Link> and the <Link to="/privacy">Privacy Policy</Link>.
                {err('terms') && (
                  <span className="ob-error" style={{ display: 'block' }}>
                    {err('terms')}
                  </span>
                )}
              </span>
            </label>
            <label className="ob-check">
              <input type="checkbox" checked={news} onChange={(e) => setNews(e.target.checked)} />
              <span>
                Send me product news now and then. <span style={{ color: '#5A6270' }}>(optional)</span>
              </span>
            </label>
            <button type="submit" className="ob-btn">
              Create account
            </button>
          </div>
        </form>
      </div>
    </OnboardingLayout>
  );
}
