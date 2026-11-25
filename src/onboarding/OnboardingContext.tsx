import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Billing, PlanId } from '../lib/pricing';

export type AuthMethod = 'email' | 'google' | 'microsoft';

export type OnboardingData = {
  method: AuthMethod | null;
  name: string;
  email: string;
  jobTitle: string;
  verified: boolean;
  companyName: string;
  companySize: string;
  headcount: number;
  industry: string;
  plan: PlanId;
  billing: Billing;
  /** Planen blev valgt på Plans-siden; så foreslår vi ikke en anden ud fra antal brugere. */
  planChosen: boolean;
  /** Sat når betalingen er bekræftet (eller springes over for Trial). */
  completed: boolean;
};

const EMPTY: OnboardingData = {
  method: null,
  name: '',
  email: '',
  jobTitle: '',
  verified: false,
  companyName: '',
  companySize: '',
  headcount: 1,
  industry: '',
  plan: 'advanced',
  billing: 'yearly',
  planChosen: false,
  completed: false,
};

const KEY = 'moldaid.onboarding.v1';

// Gemmes i fanen, så et genindlæst eller lukket-og-genåbnet trin fortsætter samme sted.
function load(): OnboardingData {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? { ...EMPTY, ...(JSON.parse(raw) as Partial<OnboardingData>) } : EMPTY;
  } catch {
    return EMPTY;
  }
}

type Ctx = {
  data: OnboardingData;
  update: (patch: Partial<OnboardingData>) => void;
  reset: () => void;
};

const OnboardingCtx = createContext<Ctx | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardingData>(load);

  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(data));
    } catch {
      // Privat vindue eller blokeret lager: flowet virker stadig, det huskes bare ikke.
    }
  }, [data]);

  const update = useCallback((patch: Partial<OnboardingData>) => setData((d) => ({ ...d, ...patch })), []);
  const reset = useCallback(() => setData(EMPTY), []);
  const value = useMemo(() => ({ data, update, reset }), [data, update, reset]);

  return <OnboardingCtx.Provider value={value}>{children}</OnboardingCtx.Provider>;
}

export function useOnboarding(): Ctx {
  const ctx = useContext(OnboardingCtx);
  if (!ctx) throw new Error('useOnboarding must be used inside <OnboardingProvider>');
  return ctx;
}

/** Plan suggested from headcount: Advanced from 3 people up, Basic for 1–2. */
export function suggestedPlan(headcount: number): PlanId {
  return headcount >= 3 ? 'advanced' : 'basic';
}

/** Første trin, brugeren ikke har gjort færdigt. Bruges til at sende folk tilbage, hvis de springer frem. */
export function firstOpenStep(d: OnboardingData): string {
  if (!d.method || !d.email) return '/signup';
  if (!d.verified || !d.jobTitle) return '/signup/confirm';
  if (!d.companyName || !d.companySize || !d.industry) return '/onboarding/company';
  return '/onboarding/plan';
}
