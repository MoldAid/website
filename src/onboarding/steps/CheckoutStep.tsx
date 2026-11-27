import { useCallback, useMemo, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
// «pure» henter først Stripes script, når loadStripe kaldes; ellers indlæses det på alle sider.
import { loadStripe } from '@stripe/stripe-js/pure';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { EXTRA_SEAT, eur, eurCents, getPlan, quote, VAT_RATE_DK } from '../../lib/pricing';
import { OnboardingLayout } from '../OnboardingLayout';
import { useOnboarding } from '../OnboardingContext';

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
// Indlæses kun én gang, og kun når nøglen findes.
const stripePromise = PUBLISHABLE_KEY ? loadStripe(PUBLISHABLE_KEY) : null;

function Row({ label, value, strong, muted }: { label: string; value: string; strong?: boolean; muted?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '16px',
        color: muted ? '#A7B0BF' : '#F4F1EA',
        ...(strong ? { fontWeight: 600, fontSize: '19px' } : {}),
      }}
    >
      <span>{label}</span>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{value}</span>
    </div>
  );
}

export function CheckoutStep() {
  const { data, update } = useOnboarding();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const plan = getPlan(data.plan);
  const q = quote(plan, data.billing, data.headcount);
  const yearly = q.period === 'year';
  const setup = plan.id === 'payg';

  const fetchClientSecret = useCallback(async () => {
    setError('');
    const res = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        plan: data.plan,
        billing: data.billing,
        seats: data.headcount,
        email: data.email,
        name: data.name,
        companyName: data.companyName,
      }),
    });
    const body = (await res.json().catch(() => ({}))) as { clientSecret?: string; error?: string };
    if (!res.ok || !body.clientSecret) {
      const msg = body.error ?? 'We could not start the payment. Please try again.';
      setError(msg);
      throw new Error(msg);
    }
    return body.clientSecret;
  }, [data.plan, data.billing, data.headcount, data.email, data.name, data.companyName]);

  const options = useMemo(() => ({ fetchClientSecret }), [fetchClientSecret]);

  if (!data.companyName) return <Navigate to="/onboarding/company" replace />;
  if (plan.id === 'trial') return <Navigate to="/onboarding/plan" replace />;
  if (plan.id === 'enterprise') return <Navigate to="/contact" replace />;

  const vatPct = `${Math.round(VAT_RATE_DK * 100)}%`;

  const summary = (
    <aside
      style={{
        background: '#0B0F18',
        color: '#F4F1EA',
        borderRadius: '8px',
        padding: '36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
      }}
    >
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '12px',
          letterSpacing: '0.12em',
          color: '#A7B0BF',
        }}
      >
        ORDER SUMMARY
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <strong style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '44px', lineHeight: 1 }}>
          MoldAid Studio {plan.name}
        </strong>
        <span style={{ color: '#C5CCD8' }}>
          {data.companyName} · {data.headcount} {data.headcount === 1 ? 'seat' : 'seats'}
        </span>
      </div>
      {setup ? (
        <p style={{ margin: 0, color: '#D5DAE2' }}>
          Save a card now. Nothing is charged today; each mold download costs {eur(plan.price ?? 0)} excl. VAT.
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <strong
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '64px',
                lineHeight: 1,
                color: '#D99A5E',
              }}
            >
              {eur(q.subtotal)}
            </strong>
            <span style={{ color: '#C5CCD8' }}>per {q.period}</span>
          </div>
          {q.period === 'year' && (
            <span style={{ color: '#A7B0BF', fontSize: '15px' }}>
              {eur(q.perMonth ?? 0)} a month, billed yearly ·{' '}
              <Link to="/onboarding/plan" style={{ color: '#9DBFDD' }}>
                switch to monthly
              </Link>
            </span>
          )}
        </div>
      )}
      <ul className="ob-feat" style={{ color: '#D5DAE2' }}>
        {plan.highlights.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div style={{ height: '1px', background: '#2A3345' }} />
      {setup ? (
        <Row label="Due today" value={eurCents(0)} strong />
      ) : (
        <>
          <Row
            label={`${plan.name}, 1 seat${yearly ? `, 12 × ${eurCents(plan.price ?? 0)}` : ''}`}
            value={eurCents((plan.price ?? 0) * (yearly ? 12 : 1))}
            muted
          />
          {q.extraSeats > 0 && (
            <Row
              label={`Extra seats, ${q.extraSeats} × ${eurCents(EXTRA_SEAT)}${yearly ? ' × 12' : ''}`}
              value={eurCents(q.extraSeatsAmount)}
              muted
            />
          )}
          {q.discount > 0 && <Row label="Yearly discount" value={`−${eurCents(q.discount)}`} muted />}
          <Row label="Subtotal" value={eurCents(q.subtotal)} />
          <Row label={`VAT (${vatPct}, Denmark)`} value={eurCents(q.vat)} muted />
          <div style={{ height: '1px', background: '#2A3345' }} />
          <Row label="Due today" value={eurCents(q.total)} strong />
        </>
      )}
      <p style={{ margin: 0, fontSize: '14px', color: '#A7B0BF' }}>
        {setup ? '' : `Renews ${q.period === 'year' ? 'yearly' : 'monthly'} on the same date. `}
        The final VAT is calculated by Stripe from your billing address. EU business customers outside Denmark with a
        valid VAT number pay no Danish VAT (reverse charge).
      </p>
      <Link to="/onboarding/plan" style={{ color: '#C5CCD8', fontSize: '15px', fontWeight: 600 }}>
        ← Change plan
      </Link>
    </aside>
  );

  const payment = stripePromise ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid #0D1116',
          borderRadius: '8px',
          padding: '8px',
          minHeight: '420px',
        }}
      >
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
      {error && (
        <span className="ob-error" role="alert">
          {error}
        </span>
      )}
    </div>
  ) : (
    // Uden Stripe-nøgle (lokalt og i previews) kan flowet stadig gennemgås.
    <section
      style={{
        position: 'relative',
        border: '1.5px dashed #5A6270',
        borderRadius: '10px',
        padding: '34px 28px 28px',
        background: 'rgba(255,255,255,0.6)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '-12px',
          left: '20px',
          background: '#F2EADC',
          padding: '2px 10px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '11px',
          letterSpacing: '0.1em',
          color: '#5A6270',
        }}
      >
        STRIPE EMBEDDED CHECKOUT
      </span>
      <strong style={{ fontSize: '19px' }}>Stripe is not connected on this site yet.</strong>
      <p style={{ margin: 0, color: '#3A424F' }}>
        When it is, the secure Stripe payment form appears here: card, MobilePay, SEPA Debit or Link, with VAT number
        and 3-D Secure handled by Stripe.
      </p>
      <button
        type="button"
        className="ob-btn"
        style={{ alignSelf: 'flex-start' }}
        onClick={() => {
          update({ completed: true });
          navigate('/onboarding/welcome');
        }}
      >
        Continue without paying (preview)
      </button>
    </section>
  );

  return (
    <OnboardingLayout title="Payment" step={4}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="ob-eyebrow">Step 4 of 4 · Payment</div>
          <h1 className="ob-h1" style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}>
            {setup ? (
              <>
                Save your <em>card</em>.
              </>
            ) : (
              <>
                Confirm and <em>pay</em>.
              </>
            )}
          </h1>
        </div>
        <div className="ob-two" style={{ gridTemplateColumns: 'minmax(0, 0.85fr) minmax(0, 1.15fr)', gap: '40px' }}>
          {summary}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {payment}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#5A6270' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <rect x="3.5" y="8" width="11" height="8" rx="1.5" fill="none" stroke="#5A6270" strokeWidth="1.4" />
                <path d="M6 8V5.5a3 3 0 016 0V8" fill="none" stroke="#5A6270" strokeWidth="1.4" />
              </svg>
              Payments are handled by Stripe. MoldAid never sees or stores your card details.
            </div>
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
}
