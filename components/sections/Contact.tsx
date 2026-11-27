"use client";

import { ArrowRight, Send } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { useLanguage } from "@/components/lang/LanguageProvider";

const EMAIL = "zmelina@gmail.com";

// A few slow bubbles in the outer margins (same classes as the page scene,
// so they hold still when motion is reduced).
const BUBBLES = [
  { x: "2.5%", size: 9, dur: 16, delay: -5, drift: 9, sway: 5, rest: "58%" },
  { x: "95%", size: 13, dur: 19, delay: -12, drift: 11, sway: 6, rest: "40%" },
  { x: "6%", size: 5, dur: 13, delay: -2, drift: 6, sway: 4, rest: "76%" },
  { x: "91%", size: 7, dur: 15, delay: -9, drift: 8, sway: 4.6, rest: "68%" },
];

const fieldClass =
  "w-full rounded-lg border border-[rgba(244,239,227,0.28)] bg-[rgba(244,239,227,0.07)] px-4 py-2.5 text-[var(--deep-ivory)] placeholder:text-[rgba(244,239,227,0.6)] transition-colors duration-200 focus:border-[var(--deep-ivory)] focus:outline-none focus:ring-2 focus:ring-[rgba(244,239,227,0.55)]";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Submission behaviour is unchanged from the previous version.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(t("contact.success"));
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="deep-water relative overflow-hidden pt-40 pb-20 sm:pt-52 sm:pb-28">
      <div className="uw-bubbles !absolute" aria-hidden="true">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="uw-bubble-track"
            style={{ left: b.x, width: b.size, "--rest": b.rest, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` } as CSSProperties}
          >
            <span
              className="uw-bubble"
              style={{ width: b.size, height: b.size, "--drift": `${b.drift}px`, animationDuration: `${b.sway}s` } as CSSProperties}
            />
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16 lg:px-8">
        <div>
          <h2
            id="contact-title"
            className="font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[var(--deep-ivory)] sm:text-7xl"
          >
            {t("contact.title")}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--deep-ivory-soft)]">{t("contact.description")}</p>
          <a
            href={`mailto:${EMAIL}`}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--deep-ivory)] px-7 py-3.5 text-lg font-medium text-[#082F38] shadow-lg shadow-black/20 transition-colors hover:bg-white"
          >
            {t("contact.emailMe")}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <p className="mt-3 text-sm text-[var(--deep-ivory-soft)]">{EMAIL}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label={t("contact.formLabel")}
          className="space-y-5 rounded-2xl border border-[rgba(244,239,227,0.14)] bg-[rgba(4,30,36,0.35)] p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--deep-ivory)]">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={fieldClass}
              placeholder={t("contact.namePlaceholder")}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--deep-ivory)]">
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={fieldClass}
              placeholder={t("contact.emailPlaceholder")}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--deep-ivory)]">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${fieldClass} resize-none`}
              placeholder={t("contact.messagePlaceholder")}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[rgba(244,239,227,0.45)] px-6 py-3 text-base font-medium text-[var(--deep-ivory)] transition-colors hover:bg-[rgba(244,239,227,0.1)]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
