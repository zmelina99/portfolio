# Language Selection

The site ships in English (EN), Spanish (ES) and French (FR). Visitors pick a language from the selector in the header (`LanguageSwitcher.tsx`); there is no first-visit popup, so the homepage is usable immediately.

## How it works

- `LanguageProvider.tsx` (wired up in `app/layout.tsx`) holds the active language and exposes `t()` via `useLanguage()`.
- On load it applies the saved preference from `localStorage["langPref"]`, defaulting to English.
- Choosing a language in the header updates every `t()` call, saves the choice, and sets `<html lang>`.

## Usage

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
Removes the stored language preference (the site falls back to English).

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

## Accessibility

- The header switcher is a real `<button>` with `aria-expanded`/`aria-haspopup`, closes on `Escape` and outside click, and shows a visible focus ring.
- `<html lang>` is kept in sync with the active language for screen readers.

## Testing for Development

To reset to the default (English) language:

```js
// In browser console:
localStorage.removeItem("langPref");
location.reload();
```

## Integration with i18n Routing

If you add Next.js i18n routing later, extend `setLanguage` in `LanguageProvider.tsx` to push the localized route as well.

## Browser Support

- ✅ Chrome, Edge, Safari, Firefox (last 2 versions)
- ✅ iOS Safari, Chrome Mobile
- ✅ Works without JavaScript (falls back to default language)

