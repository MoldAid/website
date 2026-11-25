import type { ServerResponse } from 'node:http';
import type Stripe from 'stripe';
import { json, priceId, stripe, type Req } from './_stripe.js';

type Body = { plan?: string; billing?: string; email?: string; name?: string; companyName?: string };

/**
 * POST /api/checkout-session
 * Starter Stripe Embedded Checkout for den valgte plan og returnerer client_secret.
 * Basic/Advanced: abonnement (månedlig eller årlig pris). Pay-per-use: kortet gemmes, intet trækkes.
 */
export default async function handler(req: Req, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { error: 'Method not allowed' });
  }
  const s = stripe();
  if (!s) return json(res, 503, { error: 'Payments are not set up yet.' });

  const body = (typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {})) as Body;
  const plan = body.plan ?? '';
  const billing = body.billing === 'monthly' ? 'monthly' : 'yearly';
  const email = (body.email ?? '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(res, 400, { error: 'A valid email is required.' });

  const origin = `https://${req.headers['x-forwarded-host'] ?? req.headers.host}`;
  const returnUrl = `${origin}/onboarding/welcome?session_id={CHECKOUT_SESSION_ID}`;

  try {
    // TODO(db): genbrug kundens stripe_customer_id, når virksomheden er gemt i en database.
    const customer = await s.customers.create({
      email,
      name: body.companyName || body.name || undefined,
      metadata: { contact_name: body.name ?? '', company_name: body.companyName ?? '' },
    });

    const common = {
      ui_mode: 'embedded_page',
      customer: customer.id,
      return_url: returnUrl,
      billing_address_collection: 'required',
      customer_update: { address: 'auto', name: 'auto' },
      tax_id_collection: { enabled: true },
      metadata: { plan, billing },
    } satisfies Partial<Stripe.Checkout.SessionCreateParams>;

    let params: Stripe.Checkout.SessionCreateParams;
    if (plan === 'basic' || plan === 'advanced') {
      const price = priceId(plan, billing);
      if (!price) return json(res, 503, { error: `No Stripe price is configured for ${plan} (${billing}).` });
      params = {
        ...common,
        mode: 'subscription',
        line_items: [{ price, quantity: 1 }],
        allow_promotion_codes: true,
        subscription_data: { metadata: { plan, billing } },
        ...(process.env.STRIPE_AUTOMATIC_TAX === 'true' ? { automatic_tax: { enabled: true } } : {}),
      };
    } else if (plan === 'payg') {
      params = { ...common, mode: 'setup', currency: 'eur' };
    } else {
      return json(res, 400, { error: 'This plan does not need a payment.' });
    }

    const session = await s.checkout.sessions.create(params);
    return json(res, 200, { clientSecret: session.client_secret });
  } catch (err) {
    console.error('checkout-session failed', err);
    return json(res, 502, { error: 'Stripe could not start the payment. Please try again.' });
  }
}
