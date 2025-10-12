/**
 * Language Preference Utilities
 * Lightweight localStorage wrapper for language selection
 */

const LANG_KEY = "langPref";
export type Language = "es" | "en" | "fr";

export function getLangPref(): Language | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored === "es" || stored === "en" || stored === "fr") {
      return stored;
    }
    return null;
  } catch {
    return null;
  }
}

export function setLangPref(lang: Language): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // Fail silently if localStorage unavailable
  }
}

export function clearLangPref(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(LANG_KEY);
  } catch {
    // Fail silently
  }
}

