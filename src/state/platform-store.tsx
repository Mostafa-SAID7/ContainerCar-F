import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { BusinessApplication } from "@/services/api";

interface PlatformState {
  budget: number;
  compare: string[];
  saved: string[];
  application: BusinessApplication | null;
}

const STORAGE_KEY = "containercar.state.v1";

const initialState: PlatformState = { budget: 0, compare: [], saved: [], application: null };

interface PlatformContextValue extends PlatformState {
  hydrated: boolean;
  setBudget: (value: number) => void;
  toggleCompare: (id: string) => void;
  clearCompare: () => void;
  toggleSaved: (id: string) => void;
  setApplication: (app: BusinessApplication | null) => void;
}

const PlatformContext = createContext<PlatformContextValue | null>(null);

export function PlatformProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PlatformState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...initialState, ...JSON.parse(raw) });
    } catch {
      /* ignore corrupted storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage unavailable */
    }
  }, [state, hydrated]);

  const setBudget = useCallback((budget: number) => setState((s) => ({ ...s, budget })), []);

  const toggleCompare = useCallback(
    (id: string) =>
      setState((s) => ({
        ...s,
        compare: s.compare.includes(id)
          ? s.compare.filter((c) => c !== id)
          : s.compare.length >= 3
            ? s.compare
            : [...s.compare, id],
      })),
    [],
  );

  const clearCompare = useCallback(() => setState((s) => ({ ...s, compare: [] })), []);

  const toggleSaved = useCallback(
    (id: string) =>
      setState((s) => ({
        ...s,
        saved: s.saved.includes(id) ? s.saved.filter((c) => c !== id) : [...s.saved, id],
      })),
    [],
  );

  const setApplication = useCallback(
    (application: BusinessApplication | null) => setState((s) => ({ ...s, application })),
    [],
  );

  const value = useMemo(
    () => ({ ...state, hydrated, setBudget, toggleCompare, clearCompare, toggleSaved, setApplication }),
    [state, hydrated, setBudget, toggleCompare, clearCompare, toggleSaved, setApplication],
  );

  return <PlatformContext.Provider value={value}>{children}</PlatformContext.Provider>;
}

export function usePlatform() {
  const ctx = useContext(PlatformContext);
  if (!ctx) throw new Error("usePlatform must be used inside PlatformProvider");
  return ctx;
}
