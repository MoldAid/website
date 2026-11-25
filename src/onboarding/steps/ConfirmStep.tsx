import { useEffect, useRef, useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { OnboardingLayout } from '../OnboardingLayout';
import { useOnboarding } from '../OnboardingContext';

const RESEND_AFTER = 45;

function CodeEntry({ email, onDone }: { email: string; onDone: () => void }) {
  const [digits, setDigits] = useState<string[]>(Array(6).fill(''));
  const [wait, setWait] = useState(RESEND_AFTER);
  const [error, setError] = useState('');
  const boxes = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (wait <= 0) return;
    const t = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(t);
  }, [wait]);

  function set(i: number, v: string) {
    // Flere cifre på én gang (hurtig indtastning, autoudfyldt engangskode på mobil) fordeles på de næste felter.
    const typed = v.replace(/\D/g, '');
    const prevDigit = digits[i];
    const incoming = typed.length > 1 && typed.startsWith(prevDigit) ? typed.slice(prevDigit.length) : typed;
    const chars = incoming.slice(0, 6 - i).split('');
    setDigits((prev) => prev.map((x, j) => (j < i ? x : j < i + chars.length ? chars[j - i] : j === i ? '' : x)));
    setError('');
    if (chars.length) boxes.current[Math.min(i + chars.length, 5)]?.focus();
  }

  function key(i: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !digits[i] && i > 0) boxes.current[i - 1]?.focus();
  }

  function paste(e: ClipboardEvent<HTMLInputElement>) {
    const code = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (code.length < 2) return;
    e.preventDefault();
    setDigits(Array.from({ length: 6 }, (_, j) => code[j] ?? ''));
    boxes.current[Math.min(code.length, 5)]?.focus();
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (digits.join('').length < 6) {
      setError('Enter all 6 digits.');
      return;
    }
    // TODO(auth): bekræft koden på serveren. Indtil da godtages enhver 6-cifret kode.
    onDone();
  }

  const mm = Math.floor(wait / 60);
  const ss = String(wait % 60).padStart(2, '0');

  return (
    <form className="ob-card" onSubmit={submit} aria-labelledby="cf-email-h">
      <div className="ob-strip">
        <span>Signed up with email</span>
        <span>Step 1b</span>
      </div>
      <div className="ob-body" style={{ padding: '40px 36px' }}>
        <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
          <rect x="5" y="12" width="46" height="32" rx="5" fill="#F4F1EA" stroke="#0D1116" strokeWidth="1.6" />
          <path d="M7 15l21 16 21-16" fill="none" stroke="#94592A" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
        <h2
          id="cf-email-h"
          style={{
            margin: 0,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: 0.95,
          }}
        >
          Check your inbox.
        </h2>
        <p style={{ margin: 0, color: '#3A424F' }}>
          We sent a 6-digit code to <strong style={{ color: '#0D1116' }}>{email}</strong>. Enter it below. It is valid
          for 15 minutes.
        </p>
        <div className="ob-code" role="group" aria-label="Verification code">
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                boxes.current[i] = el;
              }}
              aria-label={`Digit ${i + 1}`}
              inputMode="numeric"
              autoComplete={i === 0 ? 'one-time-code' : 'off'}
              maxLength={6}
              value={d}
              autoFocus={i === 0}
              onChange={(e) => set(i, e.target.value)}
              onKeyDown={(e) => key(i, e)}
              onPaste={paste}
            />
          ))}
        </div>
        {error && <span className="ob-error">{error}</span>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', fontSize: '15px', color: '#5A6270' }}>
          {wait > 0 ? (
            <span>
              Resend code in{' '}
              <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {mm}:{ss}
              </span>
            </span>
          ) : (
            <button
              type="button"
              className="ob-ghost"
              style={{ padding: 0, color: '#355F84' }}
              onClick={() => setWait(RESEND_AFTER)}
            >
              Resend code
            </button>
          )}
          <Link to="/signup">Wrong email? Change it</Link>
        </div>
        <button type="submit" className="ob-btn" style={{ alignSelf: 'flex-start' }}>
          Verify and continue
        </button>
      </div>
    </form>
  );
}

function SsoProfile({ onDone }: { onDone: (p: { name: string; email: string; jobTitle: string }) => void }) {
  const { data } = useOnboarding();
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [jobTitle, setJobTitle] = useState(data.jobTitle);
  const [tried, setTried] = useState(false);
  const provider = data.method === 'microsoft' ? 'Microsoft' : 'Google';
  const ok = name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && jobTitle.trim();

  function submit(e: FormEvent) {
    e.preventDefault();
    setTried(true);
    if (ok) onDone({ name: name.trim(), email: email.trim(), jobTitle: jobTitle.trim() });
  }

  return (
    <form className="ob-card" onSubmit={submit} noValidate aria-labelledby="cf-sso-h">
      <div className="ob-strip">
        <span>Signed up with {provider}</span>
        <span>Step 1b</span>
      </div>
      <div className="ob-body" style={{ padding: '40px 36px' }}>
        <h2
          id="cf-sso-h"
          style={{
            margin: 0,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: 0.95,
          }}
        >
          One more thing.
        </h2>
        <p style={{ margin: 0, color: '#3A424F' }}>
          Your email is verified by {provider}, so there is no code to enter. We only need your job title.
        </p>
        {/* TODO(auth): navn og e-mail kommer fra OAuth-svaret og bliver skrivebeskyttede. */}
        <div className="ob-pair">
          <div className="ob-field">
            <label htmlFor="cf-name" className="ob-label">
              Full name
            </label>
            <input
              id="cf-name"
              className="ob-input"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="ob-field">
            <label htmlFor="cf-email" className="ob-label">
              Work email
            </label>
            <input
              id="cf-email"
              className="ob-input"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="ob-field">
          <label htmlFor="cf-title" className="ob-label">
            Job title
          </label>
          <input
            id="cf-title"
            className="ob-input"
            autoComplete="organization-title"
            placeholder="e.g. Product engineer"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            aria-invalid={tried && !jobTitle.trim()}
          />
          {tried && !ok && <span className="ob-error">Fill in your name, work email and job title.</span>}
        </div>
        <button type="submit" className="ob-btn" style={{ alignSelf: 'flex-start' }}>
          Continue
        </button>
      </div>
    </form>
  );
}

export function ConfirmStep() {
  const { data, update } = useOnboarding();
  const navigate = useNavigate();
  if (!data.method) return <Navigate to="/signup" replace />;

  const sso = data.method !== 'email';
  return (
    <OnboardingLayout title="Confirm your account" step={1}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '640px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="ob-eyebrow">Step 1 of 4 · Account</div>
          <h1 className="ob-h1" style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}>
            Confirm who <em>you</em> are.
          </h1>
        </div>
        {sso ? (
          <SsoProfile
            onDone={(p) => {
              update({ ...p, verified: true });
              navigate('/onboarding/company');
            }}
          />
        ) : (
          <CodeEntry
            email={data.email}
            onDone={() => {
              update({ verified: true });
              navigate('/onboarding/company');
            }}
          />
        )}
      </div>
    </OnboardingLayout>
  );
}
