/**
 * i18n Dictionary Loader
 * Lightweight translation system without external dependencies
 */

import enDict from "@/i18n/en.json";
import esDict from "@/i18n/es.json";
import frDict from "@/i18n/fr.json";

export type Language = "en" | "es" | "fr";

export type Dictionary = Record<string, string>;

export const dictionaries: Record<Language, Dictionary> = {
  en: enDict,
  es: esDict,
  fr: frDict,
};

/**
 * Get default language from localStorage or fallback to English
 */
export function getDefaultLang(): Language {
  if (typeof window === "undefined") return "en";
  
  try {
    const stored = localStorage.getItem("langPref");
    if (stored === "en" || stored === "es" || stored === "fr") {
      return stored;
    }
  } catch {
    // localStorage unavailable
  }
  
  return "en";
}

/**
 * Get dictionary for a specific language with English fallback
 */
export function getDictionary(lang: Language): Dictionary {
  return dictionaries[lang] || dictionaries.en;
}

/**
 * Translate a key with fallback to English and then to the key itself
 */
export function translate(
  key: string,
  lang: Language,
  fallbackLang: Language = "en"
): string {
  const dict = dictionaries[lang];
  
  // Try current language
  if (dict && dict[key]) {
    return dict[key];
  }
  
  // Try fallback language
  if (lang !== fallbackLang) {
    const fallbackDict = dictionaries[fallbackLang];
    if (fallbackDict && fallbackDict[key]) {
      return fallbackDict[key];
    }
  }
  
  // Return key if translation not found
  return key;
}

