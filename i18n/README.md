# 🌍 Lightweight i18n Translation System

A zero-dependency, client-side internationalization system integrated with the bubble language selector.

## Features

✅ **No external dependencies** - Pure TypeScript + React  
✅ **Type-safe** - Full TypeScript support  
✅ **Fast & instant** - No API calls or async loading  
✅ **Persistent** - Saves language preference to localStorage  
✅ **Fallback system** - Gracefully handles missing translations  
✅ **SSR-ready** - Works with Next.js App Router  
✅ **3 languages** - English (default), Spanish, French  

## File Structure

```
/i18n
  ├── en.json          # English translations
  ├── es.json          # Spanish translations
  ├── fr.json          # French translations
  └── README.md        # This file

/lib
  └── i18n.ts          # Dictionary loader & translation utils

/components/lang
  └── LanguageProvider.tsx  # React Context with t() function
```

## Usage

### 1. Basic Translation

Use the `useLanguage()` hook to access the `t()` function:

```tsx
"use client";

import { useLanguage } from "@/components/lang/LanguageProvider";

export default function MyComponent() {
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
      <button>{t("hero.cta.contact")}</button>
    </div>
  );
}
```

### 2. Get Current Language

```tsx
const { language } = useLanguage();
// language: "en" | "es" | "fr"
```

### 3. Change Language Programmatically

```tsx
const { setLanguage } = useLanguage();

<button onClick={() => setLanguage("es")}>
  Switch to Spanish
</button>
```

This will:
- Update all translated text instantly
- Save the preference to `localStorage.langPref`
- Update the HTML `lang` attribute

### 4. Full Example Component

```tsx
"use client";

import { useLanguage } from "@/components/lang/LanguageProvider";

export default function WelcomeSection() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <section>
      <h1>{t("hero.greeting")}</h1>
      <p>{t("hero.subtitle")}</p>
      
      <div>
        <p>Current: {language}</p>
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("es")}>ES</button>
        <button onClick={() => setLanguage("fr")}>FR</button>
      </div>
    </section>
  );
}
```

## Translation Keys

All translation keys follow a `section.element` pattern:

### Navigation
- `nav.home`
- `nav.about`
- `nav.experience`
- `nav.caseStudies`
- `nav.skills`
- `nav.passions`
- `nav.contact`

### Hero Section
- `hero.greeting`
- `hero.title`
- `hero.subtitle`
- `hero.cta.caseStudies`
- `hero.cta.cv`
- `hero.cta.contact`

### About Section
- `about.title`
- `about.intro`
- `about.description`

### Experience Section
- `experience.title`
- `experience.years`
- `experience.present`

### Case Studies
- `caseStudies.title`
- `caseStudies.viewDetails`
- `caseStudies.readMore`
- `caseStudies.close`
- `caseStudies.technologies`
- `caseStudies.impact`
- `caseStudies.challenge`
- `caseStudies.solution`
- `caseStudies.results`

### Skills
- `skills.title`
- `skills.category.frontend`
- `skills.category.backend`
- `skills.category.tools`
- `skills.category.testing`

### Passions
- `passions.title`
- `passions.subtitle`

### Contact
- `contact.title`
- `contact.subtitle`
- `contact.name`
- `contact.email`
- `contact.message`
- `contact.send`
- `contact.sending`
- `contact.success`
- `contact.error`
- `contact.namePlaceholder`
- `contact.emailPlaceholder`
- `contact.messagePlaceholder`

### Footer
- `footer.designedBy`
- `footer.builtWith`
- `footer.rights`

### Common
- `common.loading`
- `common.error`
- `common.learnMore`
- `common.viewProject`
- `common.liveDemo`
- `common.sourceCode`

## Adding New Translations

### 1. Add to all JSON files

In `/i18n/en.json`:
```json
{
  "newSection.title": "My New Section",
  "newSection.description": "This is a description"
}
```

In `/i18n/es.json`:
```json
{
  "newSection.title": "Mi Nueva Sección",
  "newSection.description": "Esta es una descripción"
}
```

In `/i18n/fr.json`:
```json
{
  "newSection.title": "Ma Nouvelle Section",
  "newSection.description": "Ceci est une description"
}
```

### 2. Use in your component

```tsx
const { t } = useLanguage();

<h2>{t("newSection.title")}</h2>
<p>{t("newSection.description")}</p>
```

## Fallback System

If a translation key is missing:

1. **Try current language** → If found, return it
2. **Try English fallback** → If found, return it
3. **Return the key itself** → Shows what's missing

Example:
```tsx
t("missing.key")  // Returns: "missing.key"
```

This makes it obvious when translations are missing during development.

## How It Works

### 1. Dictionary Loading

All dictionaries are imported synchronously at build time:

```ts
// lib/i18n.ts
import enDict from "@/i18n/en.json";
import esDict from "@/i18n/es.json";
import frDict from "@/i18n/fr.json";

export const dictionaries: Record<Language, Dictionary> = {
  en: enDict,
  es: esDict,
  fr: frDict,
};
```

### 2. React Context Provider

The `LanguageProvider` wraps the app and provides:
- Current language state
- `t()` translation function
- `setLanguage()` switcher

### 3. Translation Function

```ts
const t = useCallback(
  (key: string): string => {
    return translate(key, language);
  },
  [language]
);
```

The function is memoized and only re-creates when language changes.

### 4. Persistence

When language changes:
```ts
const setLanguage = useCallback((lang: Language) => {
  setLanguageState(lang);
  setLangPref(lang);  // Save to localStorage
  document.documentElement.lang = lang;  // Update HTML lang
}, []);
```

## Integration with Bubble Selector

The bubble language selector automatically integrates:

1. User pops a bubble (e.g., "ES")
2. `handleLanguageSelect("es")` is called
3. Inside the handler:
   ```ts
   setLangPref(lang);      // Save to localStorage
   setAppLanguage(lang);   // Update context
   ```
4. All components using `t()` re-render with new language
5. Overlay closes

## Performance

### Bundle Size
- `en.json`: ~2KB
- `es.json`: ~2KB
- `fr.json`: ~2KB
- `i18n.ts`: ~1KB
- **Total**: ~7KB (gzipped: ~3KB)

### Rendering
- No flicker on language change (instant)
- Memoized translation function
- Context optimized with `useMemo`
- No unnecessary re-renders

### Loading
- All dictionaries bundled at build time
- No async loading or API calls
- No loading states needed
- Works offline

## TypeScript Support

All types are inferred automatically:

```ts
import type { Language } from "@/lib/langPref";
// Language = "en" | "es" | "fr"

import type { Dictionary } from "@/lib/i18n";
// Dictionary = Record<string, string>
```

The `t()` function is fully typed:

```ts
const t: (key: string) => string
```

## Best Practices

### ✅ DO

- Use consistent key naming: `section.element`
- Add all keys to all language files
- Keep translations short and concise
- Use placeholders for dynamic content
- Test with all 3 languages

### ❌ DON'T

- Hardcode strings in components
- Skip translations in any language file
- Use deeply nested keys (keep it flat)
- Store HTML in translations (use JSX instead)

## Debugging

### Check current language

```tsx
const { language } = useLanguage();
console.log("Current language:", language);
```

### Check localStorage

```js
// In browser console:
localStorage.getItem("langPref");  // "en" | "es" | "fr"
```

### Reset language

```js
// In browser console:
localStorage.removeItem("langPref");
location.reload();
```

### Find missing translations

If you see a translation key instead of text (e.g., "hero.newKey"), it means:
1. The key exists in code but not in JSON files
2. There's a typo in the key name
3. The key is only in one language file

## Future Enhancements

### Add a new language

1. Create `/i18n/de.json` (German example)
2. Update `lib/i18n.ts`:
   ```ts
   import deDict from "@/i18n/de.json";
   
   export type Language = "en" | "es" | "fr" | "de";
   
   export const dictionaries: Record<Language, Dictionary> = {
     en: enDict,
     es: esDict,
     fr: frDict,
     de: deDict,
   };
   ```
3. Update language selector components to include German
4. Add German flag emoji: 🇩🇪

### Pluralization

For advanced pluralization, add a helper:

```ts
export function plural(count: number, singular: string, plural: string) {
  return count === 1 ? singular : plural;
}

// Usage:
{t("items")} {plural(items.length, t("item"), t("items"))}
```

### URL-based language

To support `/en`, `/es`, `/fr` routes:

1. Use Next.js middleware to detect locale from URL
2. Set initial language from URL instead of localStorage
3. Update `setLanguage` to navigate: `router.push(\`/\${lang}\${pathname}\`)`

---

**🎉 Your portfolio is now multilingual! Enjoy reaching a global audience.**

