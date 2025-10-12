"use client";

import { Card } from "@/components/ui/card";
import { Waves, Mountain, Dumbbell, Heart } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface Passion {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

export default function Passions() {
  const passions: Passion[] = [
    {
      title: "Scuba Diving",
      description: "Exploring underwater worlds",
      icon: Waves,
      image: "/diving.JPG",
    },
    {
      title: "Skiing",
      description: "Mountain adventures",
      icon: Mountain,
      image: "/skiing.JPG",
    },
    {
      title: "Olympic Lifting",
      description: "Building strength & discipline",
      icon: Dumbbell,
      image: "/olympicLifting.PNG",
    },
    {
      title: "Panchin",
      description: "My beloved companion",
      icon: Heart,
      image: "/panchin.PNG",
    },
  ];

  return (
    <section
      id="passions"
      className="section-secondary relative overflow-hidden"
    >
      {/* Bubbles */}
      <div className="bubbles opacity-10">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Beyond the code"
          description="Life is about balance, and I love to explore my passions and interests outside of work"
        />

        {/* Bubble Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {passions.map((passion, index) => (
            <div
              key={index}
              className="group flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Bubble Image Container */}
              <div className="relative mb-4">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-[#009293] opacity-0 group-hover:opacity-15 blur-xl transition-all duration-500 scale-110" />

                {/* Main bubble */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[rgba(17,36,48,0.40)] shadow-lg shadow-black/15 group-hover:shadow-xl group-hover:shadow-black/25 transition-all duration-500 group-hover:scale-105 group-hover:border-[#009293]/30">
                  {/* Image */}
                  <div className="w-full h-full relative">
                    <img
                      src={passion.image}
                      alt={passion.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-transparent group-hover:via-white/8 transition-all duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                </div>
              </div>

              {/* Content - simplified */}
              <div className="text-center">
                <h3 className="text-sm font-medium mb-1 text-[#E6EDF2] group-hover:text-[#009293] transition-colors">
                  {passion.title}
                </h3>
                <p className="text-xs text-[#7B8A9A] leading-relaxed">
                  {passion.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
