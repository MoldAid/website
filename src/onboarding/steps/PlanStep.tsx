import { Link, Navigate, useNavigate } from 'react-router';
import { BillingToggle } from '../../components/BillingToggle';
import { EXTRA_SEAT, PLANS, eur, getPlan, quote, yearlyMonthly, type Plan, type PlanId } from '../../lib/pricing';
import { OnboardingLayout } from '../OnboardingLayout';
import { suggestedPlan, useOnboarding } from '../OnboardingContext';

const big = { fontFamily: "'Barlow Condensed', sans-serif", fontSize: '52px', lineHeight: 1 } as const;
const small = { fontSize: '13px', color: '#5A6270', minHeight: '20px', marginTop: '6px' } as const;

function Price({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  if (plan.price === null) return null;
  if (plan.subscription && yearly) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', whiteSpace: 'nowrap' }}>
          <strong style={big}>{eur(yearlyMonthly(plan.price))}</strong>
          <span style={{ fontSize: '15px', color: '#5A6270' }}>per seat / month</span>
        </div>
        <div style={small}>
          <s>{eur(plan.price)}</s> · {eur(yearlyMonthly(plan.price) * 12)} billed yearly ·{' '}
          <span style={{ color: '#2F7A45', fontWeight: 600 }}>−25%</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <strong style={big}>{plan.price === 0 ? 'Free' : eur(plan.price)}</strong>
        <span style={{ fontSize: '15px', color: '#5A6270' }}>{plan.unit}</span>
      </div>
      <div style={small}>
        {plan.subscription
          ? 'Billed monthly'
          : plan.price === 0
            ? 'No payment'
            : yearly
              ? 'Paid per download, not yearly'
              : ''}
      </div>
    </div>
  );
}

export function PlanStep() {
  const { data, update } = useOnboarding();
  const navigate = useNavigate();
  if (!data.companyName) return <Navigate to={data.verified ? '/onboarding/company' : '/signup'} replace />;

  const yearly = data.billing === 'yearly';
  const selected = getPlan(data.plan);
  const q = quote(selected, data.billing, data.headcount);
  const seatText =
    q.extraSeats > 0
      ? `${data.headcount} seats (${q.extraSeats} extra at ${eur(EXTRA_SEAT)} / month)`
      : '1 seat';
  const suggested = suggestedPlan(data.headcount);
  const choosable = PLANS.filter((p) => p.id !== 'enterprise');

  function next() {
    if (selected.id === 'trial') {
      // Trial kræver ingen betaling: kontoen er klar med det samme.
      update({ completed: true });
      navigate('/onboarding/welcome');
    } else {
      navigate('/onboarding/payment');
    }
  }

  const ctaLabel =
    selected.id === 'trial'
      ? 'Start free trial'
      : selected.id === 'payg'
        ? 'Continue to save a card'
        : 'Continue to payment';

  const summary =
    selected.id === 'trial'
      ? { head: 'Trial · free for 14 days', sub: 'No card needed' }
      : selected.id === 'payg'
        ? {
            head: `Pay-per-use · ${eur(selected.price ?? 0)} per mold`,
            sub: 'excl. VAT · charged when you download a mold',
          }
        : yearly
          ? {
              head: `${selected.name} · ${eur(q.subtotal)} / year`,
              sub: `${seatText} · excl. VAT · billed yearly · you save ${eur(q.discount)}`,
            }
          : {
              head: `${selected.name} · ${eur(q.subtotal)} / month`,
              sub: `${seatText} · excl. VAT · billed monthly · cancel any time`,
            };

  const footer = (
    <div className="ob-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: '#A7B0BF',
          }}
        >
          SELECTED
        </span>
        <strong
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '30px', fontWeight: 600 }}
          aria-live="polite"
        >
          {summary.head}
        </strong>
        <span style={{ fontSize: '15px', color: '#C5CCD8' }}>{summary.sub}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link to="/onboarding/company" style={{ color: '#C5CCD8', fontWeight: 600, textDecoration: 'none' }}>
          ← Back
        </Link>
        <button type="button" className="ob-btn hot" onClick={next}>
          {ctaLabel}
        </button>
      </div>
    </div>
  );

  return (
    <OnboardingLayout title="Choose your plan" step={3} footer={footer}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        <div
          className="ob-two"
          style={{ gap: '32px 64px', alignItems: 'end', gridTemplateColumns: 'minmax(0,1fr) minmax(280px,.7fr)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="ob-eyebrow">Step 3 of 4 · Plan</div>
            <h1 className="ob-h1">
              Choose your <em>plan</em>.
            </h1>
          </div>
          <div style={{ borderLeft: '1px solid #0D1116', paddingLeft: '24px', color: '#3A424F' }}>
            <p style={{ margin: '0 0 8px' }}>
              Based on {data.headcount} {data.headcount === 1 ? 'user' : 'users'} at {data.companyName}, we suggest{' '}
              {getPlan(suggested).name}. Every plan can be changed later.
            </p>
            <p style={{ margin: 0, fontSize: '15px' }}>
              Prices in euro, excluding VAT. <Link to="/plans">Compare plans</Link>
            </p>
          </div>
        </div>

        <BillingToggle value={data.billing} onChange={(billing) => update({ billing })} />

        <div className="ob-plans" role="radiogroup" aria-label="Plans">
          {choosable.map((p) => (
            <label key={p.id} className="ob-plan">
              {p.id === suggested && (
                <span className="ob-badge">
                  SUGGESTED FOR {data.headcount} {data.headcount === 1 ? 'USER' : 'USERS'}
                </span>
              )}
              <input
                type="radio"
                name="plan"
                value={p.id}
                checked={data.plan === p.id}
                onChange={() => update({ plan: p.id as PlanId, planChosen: true })}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    color: '#94592A',
                  }}
                >
                  {p.tag}
                </span>
                <span className="ob-radio" aria-hidden="true" />
              </div>
              <Price plan={p} yearly={yearly} />
              <p style={{ margin: 0, fontSize: '15px', color: '#3A424F', minHeight: '48px' }}>{p.blurb}</p>
              <div style={{ height: '1px', background: '#CFC8B8' }} />
              <ul className="ob-feat">
                {p.highlights.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </label>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            border: '1px solid #0D1116',
            borderRadius: '8px',
            background: '#EAE5DA',
            padding: '22px 28px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                letterSpacing: '0.1em',
                color: '#94592A',
              }}
            >
              ENTERPRISE
            </span>
            <strong style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '30px', fontWeight: 600 }}>
              Custom limits, invoicing and onboarding
            </strong>
            <span style={{ color: '#3A424F', fontSize: '15px' }}>Priced per customer.</span>
          </div>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '50px',
              padding: '0 22px',
              border: '1px solid #0D1116',
              borderRadius: '8px',
              color: '#0D1116',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Talk to us
          </Link>
        </div>
      </div>
    </OnboardingLayout>
  );
}
