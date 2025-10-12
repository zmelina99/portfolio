"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { getLangPref, setLangPref, type Language } from "@/lib/langPref";
import { getDictionary, translate } from "@/lib/i18n";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize from localStorage on mount
    const savedLang = getLangPref();
    if (savedLang) {
      setLanguageState(savedLang);
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    setLangPref(lang);

    // Update HTML lang attribute for accessibility
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, []);

  // Memoized translation function
  const t = useCallback(
    (key: string): string => {
      return translate(key, language);
    },
    [language]
  );

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  // Prevent flash of untranslated content on initial load
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

