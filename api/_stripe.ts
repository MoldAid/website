import Stripe from 'stripe';
import type { IncomingMessage, ServerResponse } from 'node:http';

/** Det, Vercel giver en Node-funktion: forespørgslen med færdig-parset body og query. */
export type Req = IncomingMessage & { body?: unknown; query?: Record<string, string | string[] | undefined> };

export function json(res: ServerResponse, status: number, body: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

let client: Stripe | null = null;

/** Stripe-klienten, eller null hvis STRIPE_SECRET_KEY ikke er sat i Vercel. */
export function stripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  client ??= new Stripe(key);
  return client;
}

/**
 * Pris-id'erne oprettes én gang i Stripe og sættes som miljøvariabler.
 * Browseren sender kun plan og periode, aldrig et beløb eller et pris-id.
 */
export function priceId(plan: string, billing: string): string | undefined {
  const key = `STRIPE_PRICE_${plan.toUpperCase()}_${billing.toUpperCase()}`;
  return process.env[key];
}
