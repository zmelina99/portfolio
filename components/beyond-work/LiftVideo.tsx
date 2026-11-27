"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/components/lang/LanguageProvider";

/**
 * Portrait player for the 10-second snatch clip. Nothing downloads until the
 * visitor presses play (preload="none"), it never autoplays, and it plays
 * inline on phones. The large play button sits over the poster; once the
 * clip has started, the browser's standard controls take over.
 */
export default function LiftVideo() {
  const { t } = useLanguage();
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const focusAfterStart = useRef(false);

  // The play button unmounts once the clip starts; move keyboard focus to the
  // video (now showing its controls) so it isn't lost.
  useEffect(() => {
    if (started && focusAfterStart.current) {
      focusAfterStart.current = false;
      ref.current?.focus();
    }
  }, [started]);

  const start = () => {
    const video = ref.current;
    if (!video) return;
    focusAfterStart.current = true;
    setStarted(true);
    video.play().catch(() => {
      // If playback is refused, the native controls are still there to retry.
    });
  };

  return (
    <figure className="w-full">
      {/* 9:16 frame matches the clip exactly, so nothing is cropped */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[8px] bg-[#0B2A30] shadow-[0_28px_50px_-26px_rgba(6,40,46,0.6)]">
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-contain"
          poster="/beyond-work/snatch-poster.jpg"
          preload="none"
          playsInline
          controls={started}
          width={720}
          height={1280}
          aria-label={t("passions.video.label")}
          onPlay={() => setStarted(true)}
        >
          <source src="/beyond-work/snatch.mp4" type="video/mp4" />
          <a href="/beyond-work/snatch.mp4">{t("passions.video.fallback")}</a>
        </video>

        {!started && (
          <button
            type="button"
            onClick={start}
            className="group absolute inset-0 flex items-center justify-center focus-visible:outline-none"
            aria-label={t("passions.video.play")}
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[rgba(246,252,251,0.92)] text-[#0A3A40] shadow-lg ring-1 ring-[rgba(10,74,82,0.18)] transition-transform duration-200 group-hover:scale-105 group-focus-visible:outline group-focus-visible:outline-[3px] group-focus-visible:outline-offset-4 group-focus-visible:outline-white">
              <Play className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="absolute bottom-3 left-3 rounded-sm bg-[rgba(10,44,53,0.7)] px-2 py-0.5 text-xs tabular-nums text-white" aria-hidden="true">
              0:10
            </span>
          </button>
        )}
      </div>
    </figure>
  );
}
