import type { ServerResponse } from 'node:http';
import { json, stripe, type Req } from './_stripe.js';

/**
 * GET /api/checkout-status?session_id=cs_…
 * Til velkomstsiden efter Stripe. Planen tændes af webhooken, ikke af dette kald.
 */
export default async function handler(req: Req, res: ServerResponse) {
  const s = stripe();
  if (!s) return json(res, 503, { error: 'Payments are not set up yet.' });
  const raw = req.query?.session_id;
  const id = Array.isArray(raw) ? raw[0] : raw;
  if (!id || !id.startsWith('cs_')) return json(res, 400, { error: 'Missing session_id.' });
  try {
    const session = await s.checkout.sessions.retrieve(id);
    return json(res, 200, { status: session.status, paymentStatus: session.payment_status });
  } catch {
    return json(res, 404, { error: 'Session not found.' });
  }
}
