"use client";

import { useState, useEffect, useRef } from "react";
import { getLangPref, setLangPref, type Language } from "@/lib/langPref";
import { useLanguage } from "./LanguageProvider";
import BubbleButton from "./BubbleButton";

interface LanguageConfig {
  code: Language;
  label: string;
  emoji: string;
}

const LANGUAGES: LanguageConfig[] = [
  { code: "en", label: "English", emoji: "🇬🇧" },
  { code: "es", label: "Español", emoji: "🇪🇸" },
  { code: "fr", label: "Français", emoji: "🇫🇷" },
];

export default function LanguageOverlay() {
  const { setLanguage: setAppLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showPlainSelector, setShowPlainSelector] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const lastAttemptTime = useRef<number>(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has already set a language preference
    const existingPref = getLangPref();
    if (existingPref) {
      // User has already chosen, apply it and don't show overlay
      applyLanguage(existingPref);
      // return; // COMMENTED OUT FOR TESTING - Show overlay every time
    }

    // Show overlay on every load (for testing)
    setIsVisible(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isVisible && overlayRef.current) {
      // Focus management for accessibility
      const firstFocusable =
        overlayRef.current.querySelector<HTMLButtonElement>(
          "button:not([disabled])"
        );
      firstFocusable?.focus();
    }
  }, [isVisible]);

  const applyLanguage = (lang: Language) => {
    // Apply language via context
    setAppLanguage(lang);

    // If you have i18n routing, uncomment and adapt:
    // const router = useRouter();
    // router.push(`/${lang}${window.location.pathname}`);
  };

  const handleLanguageSelect = (lang: Language) => {
    // Easter egg: track wrong attempts
    const now = Date.now();
    if (now - lastAttemptTime.current < 1000) {
      setWrongAttempts((prev) => {
        const newCount = prev + 1;
        if (newCount >= 2 && !showHint) {
          setShowHint(true);
          setTimeout(() => setShowHint(false), 3000);
        }
        return newCount;
      });
    }
    lastAttemptTime.current = now;

    // Pop animation
    setIsPopping(true);

    // Persist preference
    setLangPref(lang);
    applyLanguage(lang);

    // Close overlay after animation
    setTimeout(() => {
      setIsVisible(false);
    }, 350);
  };

  const handleSkip = () => {
    // Close without persisting; default to EN
    applyLanguage("en");
    setIsVisible(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowPlainSelector(true);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop - subtle, not full opacity */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] animate-fade-in"
        onClick={handleSkip}
      />

      {/* Compact modal */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Choose your language"
        onKeyDown={handleKeyDown}
        className={`
          fixed z-50
          bottom-4 right-4 sm:bottom-8 sm:right-8
          w-full max-w-[calc(100vw-2rem)] sm:w-[420px]
          bg-[var(--surface-default)] backdrop-blur-md
          border border-[var(--border-muted)]
          rounded-2xl
          shadow-2xl
          animate-fade-scale
          ${isPopping ? "pointer-events-none" : ""}
        `}
      >
        {/* Content container */}
        <div className="relative z-10 p-6">
          {/* Octopus mascot with speech bubble */}
          <div className="flex items-start gap-4 mb-6">
            <div className="text-6xl animate-wave" aria-hidden="true">
              🐙
            </div>
            <div className="flex-1">
              <div className="relative bg-white/10 rounded-xl p-4 border border-white/20">
                <h2 className="text-lg font-semibold text-slate-100 mb-1">
                  Hello? Hola? Bonjour ?
                </h2>
                <p className="text-sm text-slate-300/90">
                  Pop a bubble to continue 🫧
                </p>
                {/* Speech bubble tail */}
                <div
                  className="absolute -left-2 top-6 w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-white/10 border-b-[8px] border-b-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Bubble Game or Plain Selector */}
          {!showPlainSelector ? (
            <div className="relative">
              {/* Bubbles - compact horizontal layout */}
              <div
                className={`
              flex items-center justify-center gap-3
              ${isPopping ? "bubble-pop-all" : ""}
            `}
              >
                {LANGUAGES.map((lang, idx) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code)}
                    aria-label={`Choose ${lang.label}`}
                    className={`
                    group relative
                    w-20 h-20
                    rounded-full
                    bg-white/10 backdrop-blur-sm
                    border border-white/20
                    flex flex-col items-center justify-center gap-1
                    transition-all duration-150
                    hover:scale-110 hover:bg-white/15 hover:border-white/30
                    focus-visible:scale-110 focus-visible:bg-white/15 focus-visible:border-[var(--accent-teal)]
                    active:scale-95
                    ${reducedMotion ? "" : "bubble-float"}
                  `}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    {/* Inner highlight */}
                    <div
                      className="absolute inset-3 rounded-full bg-gradient-to-br from-white/15 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Content */}
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {lang.emoji}
                    </span>
                    <span className="text-[10px] font-medium tracking-wide text-slate-100">
                      {lang.code.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>

              {/* Easter egg hint */}
              {showHint && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-xs text-[var(--accent-teal)] animate-fade-in">
                    Try the one you want to read 😉
                  </p>
                </div>
              )}
            </div>
          ) : (
            // Plain selector fallback
            <div className="animate-fade-scale">
              <label
                htmlFor="lang-select"
                className="block text-xs text-slate-300 mb-2"
              >
                Select language:
              </label>
              <select
                id="lang-select"
                onChange={(e) =>
                  handleLanguageSelect(e.target.value as Language)
                }
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-teal)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose...
                </option>
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.emoji} {lang.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Bottom actions */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <button
              onClick={handleSkip}
              className="text-slate-400 hover:text-slate-200 transition-colors ml-auto"
            >
              Skip for now →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
