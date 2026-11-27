/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Stripe publishable key (pk_test_… / pk_live_…). Uden den viser betalingstrinnet en forhåndsvisning. */
  readonly VITE_STRIPE_PUBLISHABLE_KEY?: string;
  /** Adressen på MoldAid Studio, som «Open MoldAid Studio» peger på. */
  readonly VITE_APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
