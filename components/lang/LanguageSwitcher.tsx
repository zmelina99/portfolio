/**
 * Manual Language Switcher
 * 
 * A small dropdown/button group for users who want to change
 * their language after the initial selection.
 * Can be placed in Navigation or Footer.
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import type { Language } from "@/lib/langPref";

interface LanguageOption {
  code: Language;
  label: string;
  emoji: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", emoji: "🇬🇧" },
  { code: "es", label: "Español", emoji: "🇪🇸" },
  { code: "fr", label: "Français", emoji: "🇫🇷" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((lang) => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={dropdownRef} className="relative" onKeyDown={handleKeyDown}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`
          flex items-center gap-2 px-3 py-2 rounded-lg
          bg-white/10 hover:bg-white/15
          border border-white/20 hover:border-white/30
          text-slate-200 text-sm
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-teal)]
        `}
      >
        <span aria-hidden="true">{currentLang?.emoji}</span>
        <span className="hidden sm:inline">{currentLang?.label}</span>
        <span className="sm:hidden">{currentLang?.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`
            absolute top-full mt-2 right-0
            min-w-[160px]
            bg-[var(--surface-default)] backdrop-blur-md
            border border-[var(--border-muted)]
            rounded-lg
            shadow-xl
            animate-fade-scale
            z-50
          `}
          role="menu"
          aria-orientation="vertical"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              role="menuitem"
              className={`
                w-full flex items-center gap-3 px-4 py-2.5
                text-left text-sm
                transition-colors
                first:rounded-t-lg last:rounded-b-lg
                ${
                  language === lang.code
                    ? "bg-[var(--accent-teal)]/20 text-[var(--accent-teal)]"
                    : "text-slate-200 hover:bg-white/10"
                }
                focus-visible:outline-none focus-visible:bg-white/10
              `}
            >
              <span className="text-lg" aria-hidden="true">
                {lang.emoji}
              </span>
              <span className="flex-1">{lang.label}</span>
              {language === lang.code && (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

