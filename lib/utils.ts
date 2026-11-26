import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

/** Scrolls to a section; its CSS scroll-margin keeps it clear of the fixed header. */
export function scrollToSection(sectionId: string): boolean {
  const element = document.getElementById(sectionId)
  if (!element) return false
  element.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" })
  return true
}
