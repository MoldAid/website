# MoldAid website

Beta site for MoldAid, built with React 19, TypeScript, Vite and React Router. Payments use Stripe Embedded Checkout through two Vercel functions in `api/`.

## Run it

```
npm install
npm run dev        # local dev server with hot reload (no /api functions)
npm run build      # type-check site and api, then build to dist/
npm run preview    # serve the built site locally
npm run format     # Prettier on src/
```

## Structure

| Path | What |
|---|---|
| `src/main.tsx` | Entry point: router and global CSS |
| `src/App.tsx` | All routes, see below |
| `src/lib/pricing.ts` | Plans and prices in one place. Yearly = 25% off, rounded down to whole euros |
| `src/components/` | Shared parts: `PageShell`, `HomeHeader`, `SubpageHeader`, `SiteFooter`, `BillingToggle`, `YouTubeEmbed`, `ScrollManager` |
| `src/pages/home/` | The front page, one file per section |
| `src/pages/*Page.tsx` | The other pages. `PlanHead.tsx` holds the plan headers and order buttons on `/plans` |
| `src/onboarding/` | The order flow: shared state, layout and one file per step in `steps/` |
| `api/` | Vercel functions: `checkout-session` starts Stripe Checkout, `checkout-status` reads the result |
| `public/` | Served as-is: photos, logo, favicons, `robots.txt`, `site.webmanifest` |
| `vercel.json` | Vite build, SPA fallback (not for `/api`), old `.html` redirects, noindex header |

### Routes

| Path | Page |
|---|---|
| `/`, `/waitlist`, `/contact`, `/terms`, `/privacy` | Marketing pages |
| `/plans` | Plans and pricing, with the monthly / yearly switch and "Select & order" buttons |
| `/signup` | Step 1: create account (Google, Microsoft or email + password) |
| `/signup/confirm` | Step 1b: 6-digit email code, or job title for Google / Microsoft |
| `/onboarding/company` | Step 2: company name, size, headcount, industry |
| `/onboarding/plan` | Step 3: plan and billing period |
| `/onboarding/payment` | Step 4: Stripe Embedded Checkout |
| `/onboarding/welcome` | Done: next steps |

The order buttons on `/plans` pass the plan and billing period along, e.g. `/signup?plan=advanced&billing=yearly`. Progress is kept in `sessionStorage`, so a reload resumes at the same step.

## Stripe setup

Without these settings the payment step shows a preview with a "Continue without paying (preview)" button, so the flow can be clicked through.

1. In Stripe, create products **Basic** and **Advanced**, each with two recurring EUR prices:

   | Price | Amount |
   |---|---|
   | Basic monthly | €149 / month |
   | Basic yearly | €1,332 / year |
   | Advanced monthly | €249 / month |
   | Advanced yearly | €2,232 / year |

2. In Vercel → Settings → Environment Variables, add:

   | Variable | Value |
   |---|---|
   | `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_test_…` (shown in the browser) |
   | `STRIPE_SECRET_KEY` | `sk_test_…` (server only, never in the browser) |
   | `STRIPE_PRICE_BASIC_MONTHLY`, `STRIPE_PRICE_BASIC_YEARLY`, `STRIPE_PRICE_ADVANCED_MONTHLY`, `STRIPE_PRICE_ADVANCED_YEARLY` | The `price_…` ids from step 1 |
   | `STRIPE_AUTOMATIC_TAX` | `true` once Stripe Tax is set up (adds Danish VAT and EU reverse charge) |
   | `VITE_APP_URL` | Address of the MoldAid app, used by the "Open MoldAid" buttons |

3. Redeploy. Use Stripe test mode and test cards until everything works.

Pay-per-use opens Checkout in setup mode: the card is saved and nothing is charged. Trial skips payment. Enterprise goes to the contact page.

## Not finished yet

- **Accounts are not created.** Google and Microsoft sign-in, the email code and password storage need an auth service. Until then the flow accepts any 6-digit code. Places to wire up are marked `TODO(auth)`.
- **No database.** The company and its `stripe_customer_id` are not saved, so a new Stripe customer is created per checkout (`TODO(db)`).
- **No webhook yet.** Turning a plan on must happen from Stripe's signed `checkout.session.completed` and `customer.subscription.*` webhooks, not from the return page. This needs the database first.
- **No welcome email is sent yet**, although the welcome page says so.
- The waitlist and contact forms have no backend.
- Text in square brackets, such as `[Portrait]`, is a placeholder waiting for real content.

## Search engines

The site is hidden from search engines while in beta: `public/robots.txt` blocks all crawlers, `index.html` carries `<meta name="robots" content="noindex, nofollow, noarchive, noimageindex">`, and `vercel.json` sends the same as an `X-Robots-Tag` header. Remove all three before the public launch.
