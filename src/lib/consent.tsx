import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

/**
 * Samtykke til cookies og lignende lagring (GDPR + cookiebekendtgørelsen).
 *
 * - Nødvendig lagring kræver ikke samtykke og er altid slået til.
 * - Statistik og marketing er slået FRA, indtil brugeren aktivt siger ja. Ingen forudvalgte felter.
 * - Valget gemmes med dato og version og spørges igen efter 12 måneder, eller når VERSION hæves
 *   (fx når et nyt værktøj kommer til, som kræver samtykke).
 * - Brug hasConsent('statistics') før et sådant værktøj indlæses. I dag bruger sitet ingen af dem.
 */
export type Category = 'statistics' | 'marketing';
export type Choices = Record<Category, boolean>;

type Stored = Choices & { version: number; date: string };

const KEY = 'moldaid.consent';
const VERSION = 1;
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

function read(): Stored | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as Stored;
    if (s.version !== VERSION || Date.now() - Date.parse(s.date) > MAX_AGE_MS) return null;
    return s;
  } catch {
    return null;
  }
}

type Ctx = {
  /** null = ikke besvaret endnu (banneret vises). */
  choices: Choices | null;
  hasConsent: (c: Category) => boolean;
  save: (c: Choices) => void;
  settingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
};

const ConsentCtx = createContext<Ctx | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [choices, setChoices] = useState<Choices | null>(() => {
    const s = read();
    return s ? { statistics: s.statistics, marketing: s.marketing } : null;
  });
  const [settingsOpen, setSettingsOpen] = useState(false);

  const save = useCallback((c: Choices) => {
    setChoices(c);
    setSettingsOpen(false);
    try {
      localStorage.setItem(KEY, JSON.stringify({ ...c, version: VERSION, date: new Date().toISOString() }));
    } catch {
      // Blokeret lager: valget gælder for dette besøg.
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      choices,
      hasConsent: (c) => !!choices?.[c],
      save,
      settingsOpen,
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
    }),
    [choices, save, settingsOpen],
  );

  return <ConsentCtx.Provider value={value}>{children}</ConsentCtx.Provider>;
}

export function useConsent(): Ctx {
  const ctx = useContext(ConsentCtx);
  if (!ctx) throw new Error('useConsent must be used inside <ConsentProvider>');
  return ctx;
}
