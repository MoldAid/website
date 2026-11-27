/**
 * Én kilde til planer og priser: Plans-siden, plantrinnet og betalingen læser herfra.
 * Priser i hele euro, uden moms.
 *
 * Ejeren 25-11-2026: Basic er fjernet. Advanced koster €249 pr. måned for én plads (seat),
 * hver ekstra plads €100 pr. måned. Alle planer har de samme funktioner; kun grænserne er forskellige.
 */

export type PlanId = 'trial' | 'payg' | 'advanced' | 'enterprise';
export type Billing = 'monthly' | 'yearly';

export type Plan = {
  id: PlanId;
  tag: string;
  name: string;
  /** Månedspris for én plads (abonnement), pris pr. form for pay-per-use. */
  price: number | null;
  unit: string;
  blurb: string;
  /** Korte punkter på plankortene i bestillingsflowet. */
  highlights: string[];
  /** Grænserne, der adskiller planerne. */
  limits: { molds: string; storage: string; seats: string };
  /** Nummeret på lagringsnoten under tabellen. */
  storageNote: number;
  /** Kun abonnementer kan betales årligt og have ekstra pladser. */
  subscription: boolean;
};

/** Arbejdsnavn på appen. Skift her, når det endelige navn er besluttet. */
export const APP_NAME = 'MoldAid Studio';

export const YEARLY_DISCOUNT = 0.25;
export const VAT_RATE_DK = 0.25;
/** Ekstra plads på Advanced, pr. måned. Ingen årsrabat (ejeren angav kun €100). */
export const EXTRA_SEAT = 100;

export const PLANS: Plan[] = [
  {
    id: 'trial',
    tag: 'TRIAL',
    name: 'Trial',
    price: 0,
    unit: '14 days',
    blurb: 'Try everything on one mold. No card needed.',
    highlights: ['1 mold', 'Every MoldAid Studio tool', 'Download link valid 48 hours'],
    limits: {
      molds: '1',
      storage: 'Limited',
      seats: '1',
    },
    storageNote: 1,
    subscription: false,
  },
  {
    id: 'payg',
    tag: 'PAY-PER-USE',
    name: 'Pay-per-use',
    price: 149,
    unit: 'per mold',
    blurb: 'For the occasional mold. Pay only when you download.',
    highlights: ['1 mold per purchase', 'Every MoldAid Studio tool', 'Download link valid 48 hours'],
    limits: {
      molds: '1 per purchase',
      storage: 'Limited',
      seats: '1',
    },
    storageNote: 1,
    subscription: false,
  },
  {
    id: 'advanced',
    tag: 'ADVANCED',
    name: 'Advanced',
    price: 249,
    unit: 'per seat / month',
    blurb: 'For teams that iterate on molds every month.',
    highlights: [
      '5 molds a month',
      'Every MoldAid Studio tool',
      `Every mold version saved in ${APP_NAME}`,
      `1 seat included, extra seats €${EXTRA_SEAT} / month`,
    ],
    limits: {
      molds: '5 / month',
      storage: 'Yes',
      seats: `1 included, extra €${EXTRA_SEAT} / month`,
    },
    storageNote: 2,
    subscription: true,
  },
  {
    id: 'enterprise',
    tag: 'ENTERPRISE',
    name: 'Enterprise',
    price: null,
    unit: 'priced per customer',
    blurb: 'Custom limits, invoicing and onboarding.',
    highlights: [],
    limits: {
      molds: 'By quote',
      storage: 'Yes',
      seats: 'By quote',
    },
    storageNote: 2,
    subscription: false,
  },
];

/** Noterne til «Storage» under plantabellen. Tabellen viser kun Yes/No. */
export const STORAGE_NOTES: { n: number; plans: string; text: string }[] = [
  {
    n: 1,
    plans: 'Trial and Pay-per-use',
    text: `You get a download link by email. It works for 48 hours. Files are not saved in ${APP_NAME}.`,
  },
  {
    n: 2,
    plans: 'Advanced and Enterprise',
    text: `You get a download link by email. Every version of each mold is also saved in ${APP_NAME} for as long as you subscribe.`,
  },
];

/** Det, alle planer får. Grupperne fra den tidligere sammenligningstabel. */
export const INCLUDED: { title: string; text: string }[] = [
  {
    title: 'Mold build & shell',
    text: 'STEP and STL files, shell settings, architecture, shrinkage and cavity options',
  },
  { title: 'Parting & cores', text: 'Parting direction and surface, parting details and cores' },
  { title: 'Frame & assembly', text: 'Frame, chamfers, fused mold pieces, locking pins, dowels and nut field' },
  {
    title: 'Gating, runners & venting',
    text: 'Gate types and path, runner section, custom runner path, vents and vacuum',
  },
  { title: 'Pins', text: 'Metal pins, guide pins and ejector pins' },
  { title: 'Flow check & analysis', text: 'Flow check, thermal behavior, advisor, measurements and roughness' },
  {
    title: 'Materials, printers & machines',
    text: 'Own materials and datasheets, own printers, printer compensation and molding machines',
  },
  { title: 'Print & cost', text: 'Print setup and requests, cost estimates and resin prices' },
  { title: 'Sharing & account', text: 'Design sharing, viewer-paid downloads and two-factor login' },
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
  /** Fuld pris uden årsrabat for samme periode. */
  list: number;
  discount: number;
  /** Ekstra pladser i perioden (indgår i subtotal). */
  extraSeats: number;
  extraSeatsAmount: number;
  vat: number;
  total: number;
  period: 'month' | 'year' | 'mold' | null;
  /** Hvad det svarer til pr. måned, alt inklusive. */
  perMonth: number | null;
};

/** Beløb til visning. Det endelige beløb og momsen beregnes af Stripe ved betaling. */
export function quote(plan: Plan, billing: Billing, seats = 1): Quote {
  const none = { discount: 0, extraSeats: 0, extraSeatsAmount: 0 };
  if (plan.price === null || plan.price === 0) {
    return { ...none, subtotal: 0, list: 0, vat: 0, total: 0, period: null, perMonth: null };
  }
  if (!plan.subscription) {
    const vat = plan.price * VAT_RATE_DK;
    return {
      ...none,
      subtotal: plan.price,
      list: plan.price,
      vat,
      total: plan.price + vat,
      period: 'mold',
      perMonth: null,
    };
  }
  const extraSeats = Math.max(0, seats - 1);
  const months = billing === 'yearly' ? 12 : 1;
  const base = billing === 'yearly' ? yearlyMonthly(plan.price) : plan.price;
  const extraSeatsAmount = extraSeats * EXTRA_SEAT * months;
  const subtotal = base * months + extraSeatsAmount;
  const list = plan.price * months + extraSeatsAmount;
  const vat = subtotal * VAT_RATE_DK;
  return {
    subtotal,
    list,
    discount: list - subtotal,
    extraSeats,
    extraSeatsAmount,
    vat,
    total: subtotal + vat,
    period: billing === 'yearly' ? 'year' : 'month',
    perMonth: subtotal / months,
  };
}

const whole = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const cents = new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });

export const eur = (n: number) => whole.format(n);
export const eurCents = (n: number) => cents.format(n);
