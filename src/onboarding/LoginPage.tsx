import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { OnboardingLayout } from './OnboardingLayout';
import { GoogleIcon, MicrosoftIcon } from './steps/SignupStep';

/**
 * Log ind. Samme udtryk som opret konto.
 * TODO(auth): kobl Google, Microsoft og e-mail/adgangskode til login-tjenesten og send videre til appen.
 * Indtil da siger siden ærligt, at log ind åbner med den offentlige lancering.
 */
export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState('');

  const notYet = () =>
    setNotice('Log in opens with the public release in January 2027. Beta testers get their login by email.');

  function submit(e: FormEvent) {
    e.preventDefault();
    notYet();
  }

  return (
    <OnboardingLayout title="Log in" step={0}>
      <div className="ob-two">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', paddingTop: '8px' }}>
          <div className="ob-eyebrow">Log in</div>
          <h1 className="ob-h1">
            Welcome <em>back</em>.
          </h1>
          <p className="ob-lead">Log in to open your molds, invite your team and manage your plan.</p>
        </div>

        <form className="ob-card" onSubmit={submit} noValidate>
          <div className="ob-strip">
            <span>Log in</span>
            <span>
              New here? <Link to="/signup">Create an account</Link>
            </span>
          </div>
          <div className="ob-body" style={{ gap: '20px' }}>
            <div className="ob-pair" style={{ gap: '12px' }}>
              <button type="button" className="ob-sso" onClick={notYet}>
                <GoogleIcon />
                Continue with Google
              </button>
              <button type="button" className="ob-sso" onClick={notYet}>
                <MicrosoftIcon />
                Continue with Microsoft
              </button>
            </div>
            <div className="ob-divider">or log in with email</div>
            <div className="ob-field">
              <label htmlFor="li-email" className="ob-label">
                Work email
              </label>
              <input
                id="li-email"
                className="ob-input"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="ob-field">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <label htmlFor="li-pw" className="ob-label">
                  Password
                </label>
                <button
                  type="button"
                  className="ob-ghost"
                  style={{ padding: 0, fontSize: '14px', color: '#355F84' }}
                  onClick={notYet}
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="li-pw"
                className="ob-input"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {notice && (
              <p
                role="status"
                style={{
                  margin: 0,
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: '#EAE5DA',
                  color: '#0D1116',
                  fontSize: '15px',
                }}
              >
                {notice}
              </p>
            )}
            <button type="submit" className="ob-btn">
              Log in
            </button>
          </div>
        </form>
      </div>
    </OnboardingLayout>
  );
}
