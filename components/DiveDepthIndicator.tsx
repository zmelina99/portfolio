"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/lang/LanguageProvider";

const MAX_DEPTH = 40; // Maximum depth in meters

export default function DiveDepthIndicator() {
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0);
    };
    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const depth = Math.round(progress * MAX_DEPTH);
  const fill = `${progress * 100}%`;

  return (
    <>
      {/* Compact rail for narrow screens: sits inside the 16px page gutter,
          below the fixed header, so it never covers content or controls. */}
      <div
        className="xl:hidden fixed right-1 top-20 bottom-6 w-[3px] z-40 rounded-full bg-[rgba(20,184,166,0.12)] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 w-full rounded-full bg-gradient-to-b from-[#4DCCCC] to-[#009293] transition-[height] duration-150"
          style={{ height: fill }}
        />
      </div>

      {/* Full gauge only where the page has side margin to hold it (≥1280px). */}
      <div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block pointer-events-none"
        role="img"
        aria-label={`${t("depthMeter.depth")}: ${depth}m`}
      >
        <div className="card-standard px-3 py-4">
          <div className="flex flex-col items-center gap-2">
            <div className="text-[10px] text-[#4DCCCC] font-serif uppercase tracking-wider">
              {t("depthMeter.depth")}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#E6EDF2] font-serif tabular-nums">
                {depth}
              </span>
              <span className="text-sm text-[#4DCCCC] font-serif">m</span>
            </div>

            {/* Visual depth bar */}
            <div className="w-2 h-32 bg-[rgba(15,35,48,0.50)] rounded-full overflow-hidden relative border border-[rgba(20,184,166,0.20)]">
              <div
                className="absolute bottom-0 w-full bg-gradient-to-t from-[#009293] to-[#4DCCCC] transition-[height] duration-300 rounded-full"
                style={{ height: fill }}
              />
            </div>

            {/* Depth indicators */}
            <div className="flex flex-col gap-1 text-xs text-[#94A3B8] font-serif">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-[#009293]" />
                <span>{t("depthMeter.surface")}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-[#00787A]" />
                <span>20m</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-[#F8A58E]" />
                <span>40m</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
