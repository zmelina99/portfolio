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
      <div className="bg-[#252b47]/90 backdrop-blur-md border-2 border-[#a8dadc]/30 rounded-lg p-4 shadow-lg shadow-[#f1c6d9]/20">
        {/* Depth meter */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs text-[#f1c6d9] font-serif uppercase tracking-wider">
            Depth
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-[#a8dadc] font-serif">
              {depth}
            </span>
            <span className="text-sm text-[#f1c6d9] font-serif">m</span>
          </div>
          
          {/* Visual depth bar */}
          <div className="w-2 h-32 bg-[#2d3b5f]/50 rounded-full overflow-hidden relative border border-[#a8dadc]/30">
            <div 
              className="absolute bottom-0 w-full bg-gradient-to-t from-[#f1c6d9] to-[#a8dadc] transition-all duration-300 rounded-full"
              style={{ height: `${Math.min((depth / 40) * 100, 100)}%` }}
            />
          </div>
          
          {/* Depth indicators */}
          <div className="flex flex-col gap-1 text-xs text-[#d4d4d8]/60 font-serif">
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#a8dadc]" />
              <span>Surface</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#c4b5fd]" />
              <span>20m</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-[#ffa6b8]" />
              <span>40m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

