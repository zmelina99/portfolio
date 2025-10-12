# 🫧 Underwater Language Selector

A delightful, accessible, and lightweight language selector with a bubble-popping game interface.

## Features

- **First-visit only**: Appears once for new visitors; persists language choice
- **3 languages**: English (EN), Spanish (ES), French (FR)
- **Accessible**: Full keyboard navigation, screen reader support, reduced motion support
- **Lightweight**: <20KB; no external dependencies; CSS-only animations
- **Underwater themed**: Matches the portfolio's ocean aesthetic with teal accents

## Usage

### Basic Setup

The language selector is already integrated into `app/layout.tsx`. It will automatically:
1. Show on first visit (when no `langPref` in localStorage)
2. Hide on subsequent visits and auto-apply the saved language
3. Update the app-wide language context

### Using Language in Components

```tsx
"use client";

import { useLanguage } from "@/components/lang/LanguageProvider";

export default function MyComponent() {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => setLanguage("es")}>Switch to Spanish</button>
    </div>
  );
}
```

### Creating Translations

Create a simple translation object:

```tsx
const translations = {
  en: {
    welcome: "Welcome to my portfolio",
    about: "About me",
  },
  es: {
    welcome: "Bienvenido a mi portafolio",
    about: "Sobre mí",
  },
  fr: {
    welcome: "Bienvenue sur mon portfolio",
    about: "À propos de moi",
  },
};

// In your component:
const { language } = useLanguage();
const t = translations[language];

return <h1>{t.welcome}</h1>;
```

## API Reference

### `getLangPref()`
Returns the stored language preference or `null`.

```ts
const currentLang = getLangPref(); // "en" | "es" | "fr" | null
```

### `setLangPref(lang)`
Stores a language preference.

```ts
setLangPref("es"); // Saves "es" to localStorage
```

### `clearLangPref()`
Removes the stored language preference (resets to first-visit state).

```ts
clearLangPref(); // Clears localStorage["langPref"]
```

### `useLanguage()`
React hook for accessing and updating language state.

```ts
const { language, setLanguage } = useLanguage();
// language: "en" | "es" | "fr"
// setLanguage: (lang: Language) => void
```

## User Experience

### Bubble Game Mode (Default)
- 3 floating bubbles with flag emojis
- Smooth drift animations (respects `prefers-reduced-motion`)
- Hover/focus: bubbles wobble
- Click/Enter: bubble pops with scale+fade animation
- Easter egg: After 2+ quick wrong attempts, shows hint "Try the one you want to read 😉"

### Plain Selector Mode
- Accessible dropdown fallback
- Triggered by "☰ Plain selector" link or pressing `Escape`
- Standard `<select>` element with flag emojis

### Skip Option
- "Skip / choose later" link at bottom
- Closes overlay without persisting; defaults to English
- User can select language later via a manual trigger

## Accessibility Features

✅ **ARIA roles**: `role="dialog"` with `aria-modal="true"`  
✅ **Keyboard navigation**: Arrow keys, Enter/Space to select, Escape for plain selector  
✅ **Focus management**: Auto-focuses first bubble; visible focus rings  
✅ **Reduced motion**: Disables animations when `prefers-reduced-motion: reduce`  
✅ **Screen readers**: All buttons have descriptive `aria-label` attributes  
✅ **Color contrast**: Passes WCAG AA on dark backgrounds  

## Performance

- **Bundle size**: ~8KB total (components + utilities)
- **CSS animations**: No JS animation loops; GPU-accelerated transforms
- **Lazy loading**: Only renders when needed (first-visit detection)
- **No images**: Uses emoji and CSS gradients

## Theming

The selector uses your existing design tokens:

```css
--teal-900: #002A2A       /* Background gradient */
--accent-teal: #009293     /* Focus rings, hints */
--text-primary: #E6EDF2    /* Text */
--text-secondary: #A7B3C2  /* Muted text */
```

To customize, update these variables in `app/globals.css`.

## Testing for Development

To test the first-visit experience again:

```js
// In browser console:
localStorage.removeItem("langPref");
location.reload();
```

## Integration with i18n Routing

If you add Next.js i18n or a routing solution later, update the `applyLanguage` function in `LanguageOverlay.tsx`:

```tsx
const applyLanguage = (lang: Language) => {
  setAppLanguage(lang);
  
  // Add routing:
  const router = useRouter();
  const currentPath = window.location.pathname.replace(/^\/(en|es|fr)/, "");
  router.push(`/${lang}${currentPath}`);
};
```

## Browser Support

- ✅ Chrome, Edge, Safari, Firefox (last 2 versions)
- ✅ iOS Safari, Chrome Mobile
- ✅ Works without JavaScript (falls back to default language)

---

**Built with ❤️ for a delightful multilingual experience**

