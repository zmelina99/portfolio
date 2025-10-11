"use client";

import { useEffect, useState } from "react";

export default function DiveDepthIndicator() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const maxDepth = 40; // Maximum depth in meters
      const currentDepth = (scrollPercent / 100) * maxDepth;
      setDepth(Math.round(currentDepth));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-[#112B3C]/90 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-lg shadow-black/20">
        {/* Depth meter */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs text-[#009293] font-serif uppercase tracking-wider">
            Depth
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-[#E6EDF2] font-serif">
              {depth}
            </span>
            <span className="text-sm text-[#009293] font-serif">m</span>
          </div>
          
          {/* Visual depth bar */}
          <div className="w-2 h-32 bg-[#0F2330]/50 rounded-full overflow-hidden relative border border-white/15">
            <div 
              className="absolute bottom-0 w-full bg-gradient-to-t from-[#009293] to-[#4DCCCC] transition-all duration-300 rounded-full"
              style={{ height: `${Math.min((depth / 40) * 100, 100)}%` }}
            />
          </div>
          
          {/* Depth indicators */}
          <div className="flex flex-col gap-1 text-xs text-[#94A3B8] font-serif">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#009293]" />
              <span>Surface</span>
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
  );
}
