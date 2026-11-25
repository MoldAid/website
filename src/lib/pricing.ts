/**
 * Én kilde til planer og priser: Plans-siden, plantrinnet og betalingen læser herfra.
 * Priser i hele euro, uden moms.
 */

export type PlanId = 'trial' | 'payg' | 'basic' | 'advanced' | 'enterprise';
export type Billing = 'monthly' | 'yearly';

export type Plan = {
  id: PlanId;
  tag: string;
  name: string;
  /** Månedspris for abonnementer, pris pr. form for pay-per-use. */
  price: number | null;
  unit: string;
  blurb: string;
  features: string[];
  missing?: string[];
  /** Kun abonnementer kan betales årligt. */
  subscription: boolean;
};

export const YEARLY_DISCOUNT = 0.25;
export const VAT_RATE_DK = 0.25;

export const PLANS: Plan[] = [
  {
    id: 'trial',
    tag: 'TRIAL',
    name: 'Trial',
    price: 0,
    unit: '14 days',
    blurb: 'Try every feature on one mold. No card needed.',
    features: ['1 mold', 'All mold tools and flow check'],
    missing: ['No job-file storage'],
    subscription: false,
  },
  {
    id: 'payg',
    tag: 'PAY-PER-USE',
    name: 'Pay-per-use',
    price: 149,
    unit: 'per mold',
    blurb: 'For the occasional mold. Pay only when you download.',
    features: ['1 mold per purchase', 'All mold tools and flow check'],
    missing: ['No job-file storage'],
    subscription: false,
  },
  {
    id: 'basic',
    tag: 'BASIC',
    name: 'Basic',
    price: 149,
    unit: 'per month',
    blurb: 'Mold builds for a small team that molds regularly.',
    features: ['5 molds a month', 'Mold build, shell and cavity', 'Job files kept 1 month'],
    missing: ['Parting, gating and flow check'],
    subscription: true,
  },
  {
    id: 'advanced',
    tag: 'ADVANCED',
    name: 'Advanced',
    price: 249,
    unit: 'per month',
    blurb: 'Every tool, for teams that iterate on molds every week.',
    features: [
      '10 molds a month',
      'All mold tools and flow check',
      'Own materials and printers',
      'Job files kept 3 months',
    ],
    subscription: true,
  },
  {
    id: 'enterprise',
    tag: 'ENTERPRISE',
    name: 'Enterprise',
    price: null,
    unit: 'priced per customer',
    blurb: 'Custom limits, invoicing and onboarding.',
    features: [],
    subscription: false,
  },
];

export function getPlan(id: PlanId): Plan {
  const plan = PLANS.find((p) => p.id === id);
  if (!plan) throw new Error(`Unknown plan: ${id}`);
  return plan;
}

export function isPlanId(value: unknown): value is PlanId {
  return typeof value === 'string' && PLANS.some((p) => p.id === value);
}

/** Årspris pr. måned: 25 % rabat, rundet NED til hele euro (ejeren 25-11-2026). */
export function yearlyMonthly(monthly: number): number {
  return Math.floor(monthly * (1 - YEARLY_DISCOUNT));
}

export type Quote = {
  /** Det, kunden betaler pr. periode uden moms. */
  subtotal: number;
  /** Fuld pris uden rabat for samme periode (12 × månedspris ved årlig). */
  list: number;
  discount: number;
  vat: number;
  total: number;
  period: 'month' | 'year' | 'mold' | null;
  perMonth: number | null;
};

/** Beløb til visning. Det endelige beløb og momsen beregnes af Stripe ved betaling. */
export function quote(plan: Plan, billing: Billing): Quote {
  if (plan.price === null || plan.price === 0) {
    return { subtotal: 0, list: 0, discount: 0, vat: 0, total: 0, period: null, perMonth: null };
  }
  if (!plan.subscription) {
    const vat = plan.price * VAT_RATE_DK;
    return {
      subtotal: plan.price,
      list: plan.price,
      discount: 0,
      vat,
      total: plan.price + vat,
      period: 'mold',
      perMonth: null,
    };
  }
  if (billing === 'yearly') {
    const perMonth = yearlyMonthly(plan.price);
    const subtotal = perMonth * 12;
    const list = plan.price * 12;
    const vat = subtotal * VAT_RATE_DK;
    return { subtotal, list, discount: list - subtotal, vat, total: subtotal + vat, period: 'year', perMonth };
  }
  const vat = plan.price * VAT_RATE_DK;
  return {
    subtotal: plan.price,
    list: plan.price,
    discount: 0,
    vat,
    total: plan.price + vat,
    period: 'month',
    perMonth: plan.price,
  };
}

const whole = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const cents = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });

export const eur = (n: number) => whole.format(n);
export const eurCents = (n: number) => cents.format(n);
