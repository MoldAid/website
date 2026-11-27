import { useEffect, useState } from 'react';
import { Navigate, useSearchParams } from 'react-router';
import { getPlan } from '../../lib/pricing';
import { OnboardingLayout } from '../OnboardingLayout';
import { useOnboarding } from '../OnboardingContext';

// Adressen på selve appen. Sættes i Vercel, når appen har sit domæne.
const APP_URL = import.meta.env.VITE_APP_URL || '#';

type Status = 'checking' | 'paid' | 'processing' | 'failed';

function NextCard({ num, title, text, path }: { num: string; title: string; text: string; path: string }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #0D1116',
        borderRadius: '8px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#94592A' }}>{num}</span>
      <h3
        style={{
          margin: 0,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: 1.05,
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, color: '#3A424F', flex: 1 }}>{text}</p>
      <a className="ob-btn" href={APP_URL === '#' ? '#' : `${APP_URL}${path}`} style={{ alignSelf: 'flex-start' }}>
        Open MoldAid Studio
      </a>
    </div>
  );
}

export function WelcomeStep() {
  const { data, update } = useOnboarding();
  const [params] = useSearchParams();
  const sessionId = params.get('session_id');
  const [status, setStatus] = useState<Status>(sessionId ? 'checking' : 'paid');

  // Efter Stripe: spørg serveren om sessionens status. Webhooken er stadig den, der tænder planen.
  useEffect(() => {
    if (!sessionId) return;
    let alive = true;
    fetch(`/api/checkout-status?session_id=${encodeURIComponent(sessionId)}`)
      .then((r) => r.json() as Promise<{ status?: string; paymentStatus?: string }>)
      .then((s) => {
        if (!alive) return;
        if (s.status === 'complete') {
          setStatus(s.paymentStatus === 'unpaid' ? 'processing' : 'paid');
          update({ completed: true });
        } else setStatus('failed');
      })
      .catch(() => alive && setStatus('failed'));
    return () => {
      alive = false;
    };
  }, [sessionId, update]);

  if (!sessionId && !data.completed) return <Navigate to="/onboarding/plan" replace />;

  const plan = getPlan(data.plan);
  const first = data.name.split(' ')[0] || 'there';
  const seatsLeft = Math.max(0, data.headcount - 1);

  if (status === 'checking') {
    return (
      <OnboardingLayout title="Confirming payment" step={4}>
        <p className="ob-lead" role="status">
          Confirming your payment with Stripe…
        </p>
      </OnboardingLayout>
    );
  }
  if (status === 'failed') {
    return (
      <OnboardingLayout title="Payment not completed" step={4}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '640px' }}>
          <h1 className="ob-h1" style={{ fontSize: 'clamp(44px, 5vw, 72px)' }}>
            The payment did not go through.
          </h1>
          <p className="ob-lead">Nothing was charged. You can try again, or pick another payment method.</p>
          <a className="ob-btn" href="/onboarding/payment" style={{ alignSelf: 'flex-start' }}>
            Back to payment
          </a>
        </div>
      </OnboardingLayout>
    );
  }

  const facts: [string, string][] = [
    ['PLAN', plan.subscription ? `${plan.name} · ${data.billing === 'yearly' ? 'Yearly' : 'Monthly'}` : plan.name],
    ['USERS', `1 of ${data.headcount}`],
    ['STATUS', status === 'processing' ? 'Payment processing' : plan.id === 'trial' ? '14-day trial' : 'Active'],
    ['RECEIPT', plan.id === 'trial' ? 'No payment' : 'Sent by email'],
  ];

  return (
    <OnboardingLayout title="Welcome" step={5}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '32px', flexWrap: 'wrap' }}>
          <span
            aria-hidden="true"
            style={{
              width: '112px',
              height: '112px',
              borderRadius: '50%',
              background: '#94592A',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="56" height="56" viewBox="0 0 14 14">
              <path
                d="M2.5 7.3l2.8 2.8 6-6.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="ob-eyebrow">Welcome to MoldAid Studio</div>
            <h1 className="ob-h1" style={{ fontSize: 'clamp(56px, 7vw, 100px)' }}>
              You're all <em>set</em>, {first}.
            </h1>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '20px', color: '#2A313C' }}>
          <svg width="32" height="32" viewBox="0 0 56 56" aria-hidden="true" style={{ flexShrink: 0 }}>
            <rect x="5" y="12" width="46" height="32" rx="5" fill="#FFFFFF" stroke="#0D1116" strokeWidth="2.4" />
            <path d="M7 15l21 16 21-16" fill="none" stroke="#94592A" strokeWidth="2.6" strokeLinejoin="round" />
          </svg>
          <p style={{ margin: 0 }}>
            We sent you a welcome email at <strong style={{ color: '#0D1116' }}>{data.email}</strong> with everything
            you need to get started.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            border: '1px solid #0D1116',
            borderRadius: '8px',
            background: '#F4F1EA',
          }}
        >
          {facts.map(([k, v], i) => (
            <div
              key={k}
              style={{ padding: '18px 24px', borderRight: i < facts.length - 1 ? '1px solid #0D1116' : undefined }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  color: '#5A6270',
                }}
              >
                {k}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: '26px',
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          <NextCard
            num="01"
            title="Upload your first part"
            text="Drop a STEP file and MoldAid Studio suggests split line, gate and vents."
            path="/upload"
          />
          <NextCard
            num="02"
            title="Invite your team"
            text={
              seatsLeft > 0
                ? `You have room for ${seatsLeft} more ${seatsLeft === 1 ? 'person' : 'people'}. They get their own login and share your company workspace.`
                : 'Add colleagues any time. They get their own login and share your company workspace.'
            }
            path="/team"
          />
          <NextCard
            num="03"
            title="Add your printer and resin"
            text="MoldAid Studio compensates for your printer and uses your resin data in the flow check."
            path="/equipment"
          />
        </div>
        {plan.id !== 'trial' && (
          <p style={{ margin: 0, color: '#5A6270', fontSize: '15px' }}>
            Change plan, update your card or download invoices any time under Settings → Billing in MoldAid Studio.
          </p>
        )}
      </div>
    </OnboardingLayout>
  );
}
