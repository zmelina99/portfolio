"use client";

import { Leaf, Mountain, Menu } from "lucide-react";
import { useLanguage } from "@/components/lang/LanguageProvider";

/**
 * Illustrative mockup: the same energy app rendered with two client themes.
 * Not real client branding. Swap for real screenshots once they can be shared.
 */

type Theme = {
  name: string;
  Icon: typeof Leaf;
  header: string;
  headerText: string;
  bar: string;
  barMuted: string;
};

const THEMES: Theme[] = [
  {
    name: "Client A",
    Icon: Leaf,
    header: "#2E6B4E",
    headerText: "#F3FAF5",
    bar: "#5E9C7D",
    barMuted: "#A9CDB9",
  },
  {
    name: "Client B",
    Icon: Mountain,
    header: "#D9D1EE",
    headerText: "#2D2550",
    bar: "#9C8FC9",
    barMuted: "#CFC7E8",
  },
];

const BARS = [18, 34, 22, 40, 28, 52, 36, 44, 70, 48, 82, 60, 38, 50, 66, 44, 58, 90];

function Phone({ theme, title, period }: { theme: Theme; title: string; period: string }) {
  const { Icon } = theme;
  return (
    <div className="relative w-[45%] max-w-[280px] shrink-0 rounded-t-[2.2rem] border-[7px] border-b-0 border-[#1B2226] bg-[#1B2226] shadow-[0_24px_40px_-18px_rgba(6,40,46,0.55)]">
      <div className="overflow-hidden rounded-t-[1.7rem]" style={{ background: theme.header }}>
        {/* status bar + notch */}
        <div className="relative flex items-center justify-between px-5 pt-2 text-[10px] font-semibold" style={{ color: theme.headerText }}>
          <span>9:41</span>
          <span className="absolute left-1/2 top-0 h-[18px] w-[38%] -translate-x-1/2 rounded-b-xl bg-[#1B2226]" />
          <span className="flex items-center gap-1">
            <span className="h-[7px] w-[3px] rounded-sm bg-current opacity-80" />
            <span className="h-[7px] w-[14px] rounded-[2px] border border-current opacity-80" />
          </span>
        </div>
        {/* app bar */}
        <div className="flex items-center justify-between px-3 pb-5 pt-4 sm:px-4" style={{ color: theme.headerText }}>
          <span className="flex items-center gap-1.5 whitespace-nowrap font-serif text-[13px] sm:gap-2 sm:text-base">
            <Icon className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" strokeWidth={1.75} />
            {theme.name}
          </span>
          <Menu className="h-4 w-4 shrink-0" strokeWidth={1.75} />
        </div>
        {/* card */}
        <div className="mx-1.5 rounded-t-xl bg-[#F7F9F8] px-3 pb-10 pt-5 sm:mx-2 sm:px-4">
          <p className="font-serif text-base leading-tight sm:text-xl text-[#162126]">{title}</p>
          <p className="mt-1.5 text-[11px] leading-none text-[#56656B]">{period}</p>
          <div className="mt-6 flex h-24 items-end gap-[3px]">
            {BARS.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-[2px]"
                style={{ height: `${h}%`, background: i % 3 === 1 ? theme.barMuted : theme.bar }}
              />
            ))}
          </div>
          <div className="mt-4 border-t border-[#DDE3E1] pt-4 font-serif text-lg leading-none sm:text-2xl text-[#162126]">
            432 kWh
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhitelabelMockup() {
  const { t } = useLanguage();
  return (
    <figure className="uw-panel flex h-full min-h-[340px] flex-col sm:min-h-[420px]">
      <figcaption className="uw-label relative z-10 px-5 pt-4">
        {t("caseStudies.hive.visualLabel")}
      </figcaption>
      <div
        className="relative mt-auto flex items-end justify-center gap-[6%] px-4 pt-6"
        aria-hidden="true"
      >
        {THEMES.map((theme) => (
          <Phone
            key={theme.name}
            theme={theme}
            title={t("caseStudies.hive.mock.title")}
            period={t("caseStudies.hive.mock.period")}
          />
        ))}
      </div>
      <p className="sr-only">{t("caseStudies.hive.visualAlt")}</p>
    </figure>
  );
}
