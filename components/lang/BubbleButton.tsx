"use client";

import { useEffect, useRef } from "react";
import type { Language } from "@/lib/langPref";

interface BubbleButtonProps {
  code: Language;
  label: string;
  emoji: string;
  onClick: (code: Language) => void;
  delay: number;
  reducedMotion: boolean;
}

export default function BubbleButton({
  code,
  label,
  emoji,
  onClick,
  delay,
  reducedMotion,
}: BubbleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && !reducedMotion) {
      // Stagger the animation delay
      buttonRef.current.style.animationDelay = `${delay}ms`;
    }
  }, [delay, reducedMotion]);

  return (
    <button
      ref={buttonRef}
      onClick={() => onClick(code)}
      aria-label={`Choose ${label}`}
      className={`
        group relative
        w-36 h-36 sm:w-44 sm:h-44
        rounded-full
        bg-white/10 backdrop-blur-sm
        border border-white/20
        flex flex-col items-center justify-center gap-2
        transition-all duration-150
        hover:scale-105 hover:bg-white/15 hover:border-white/30
        focus-visible:scale-105 focus-visible:bg-white/15 focus-visible:border-[var(--accent-teal)]
        active:scale-95
        ${reducedMotion ? "" : "bubble-float"}
      `}
    >
      {/* Inner highlight for depth */}
      <div 
        className="absolute inset-4 rounded-full bg-gradient-to-br from-white/15 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Ripples beneath bubble (CSS pseudo-element effect) */}
      <div 
        className={`
          absolute -bottom-8 left-1/2 -translate-x-1/2
          w-32 h-8 rounded-full
          bg-[var(--teal-900)]/20
          blur-md
          ${reducedMotion ? "opacity-40" : "bubble-ripple"}
        `}
        aria-hidden="true"
      />

      {/* Content */}
      <span className="text-4xl sm:text-5xl leading-none" aria-hidden="true">
        {emoji}
      </span>
      <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-100">
        {code.toUpperCase()}
      </span>
      <span className="text-xs text-slate-300/80">
        {label}
      </span>
    </button>
  );
}

