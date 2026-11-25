import { Link } from 'react-router';
import { eur, yearlyMonthly, type Billing, type Plan } from '../lib/pricing';

const tagStyle = {
  fontFamily: "'IBM Plex Mono',monospace",
  fontSize: '12px',
  letterSpacing: '.1em',
  color: '#94592A',
} as const;
const priceStyle = { fontFamily: "'Barlow Condensed',sans-serif", fontSize: '38px', lineHeight: '1' } as const;
const unitStyle = { fontSize: '14px', color: '#5A6270' } as const;

/** Hvor knappen fører hen: abonnementer og pay-per-use ind i bestillingsflowet med plan og periode. */
export function orderLink(plan: Plan, billing: Billing): { to: string; label: string; variant: '' | 'hot' | 'line' } {
  switch (plan.id) {
    case 'trial':
      return { to: '/signup?plan=trial', label: 'Start free trial', variant: 'line' };
    case 'enterprise':
      return { to: '/contact', label: 'Get a quote', variant: 'line' };
    default:
      return {
        to: `/signup?plan=${plan.id}${plan.subscription ? `&billing=${billing}` : ''}`,
        label: 'Select & order',
        variant: plan.id === 'advanced' ? 'hot' : '',
      };
  }
}

export function OrderButton({ plan, billing }: { plan: Plan; billing: Billing }) {
  const { to, label, variant } = orderLink(plan, billing);
  return (
    <Link className={`plan-cta ${variant}`.trim()} to={to} aria-label={`${label} – ${plan.name}`}>
      {label === 'Select & order' ? (
        // Smalle kolonner må bryde linjen, men «order →» holdes samlet.
        <span>
          Select &amp;{' '}
          <span style={{ whiteSpace: 'nowrap' }}>
            order <span aria-hidden="true">→</span>
          </span>
        </span>
      ) : (
        label
      )}
    </Link>
  );
}

export function PlanHead({ plan, billing, last }: { plan: Plan; billing: Billing; last?: boolean }) {
  const yearly = billing === 'yearly' && plan.subscription && plan.price !== null;
  return (
    <div className="plan-head" style={last ? { borderRight: '0' } : undefined}>
      <div style={tagStyle}>{plan.tag}</div>
      {plan.id === 'advanced' && <span className="plan-badge">MOST CHOSEN</span>}
      {yearly ? (
        <>
          <strong style={priceStyle}>{eur(yearlyMonthly(plan.price!))}</strong>
          <span style={unitStyle}>per seat / month, billed yearly</span>
          <span style={{ fontSize: '13px', color: '#5A6270' }}>
            <s>{eur(plan.price!)}</s> · {eur(yearlyMonthly(plan.price!) * 12)} a year ·{' '}
            <span style={{ color: '#2F7A45', fontWeight: 600 }}>−25%</span>
          </span>
        </>
      ) : (
        <>
          <strong style={priceStyle}>
            {plan.price === null ? 'Quote' : plan.price === 0 ? 'Free' : eur(plan.price)}
          </strong>
          <span style={unitStyle}>{plan.unit}</span>
        </>
      )}
      <OrderButton plan={plan} billing={billing} />
    </div>
  );
}
