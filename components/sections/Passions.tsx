"use client";

import { Card } from "@/components/ui/card";
import { Waves, Mountain, Dumbbell, Heart } from "lucide-react";

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
      description: "Exploring the underwater world and its incredible marine life",
      icon: Waves,
      image: "/diving.JPG",
    },
    {
      title: "Skiing",
      description: "Finding freedom and adventure on the mountain slopes",
      icon: Mountain,
      image: "/skiing.JPG",
    },
    {
      title: "Olympic Lifting",
      description: "Building strength, discipline, and pushing my limits",
      icon: Dumbbell,
      image: "/olympicLifting.PNG",
    },
    {
      title: "Panchin",
      description: "My beloved companion and constant source of joy",
      icon: Heart,
      image: "/panchin.PNG",
    },
  ];

  return (
    <section id="passions" className="py-14 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-20">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-[#E6EDF2]">
            Beyond the Code
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-[#009293] to-[#00787A] opacity-40 mx-auto rounded-full mb-4" />
          <p className="text-base text-[#94A3B8] max-w-2xl mx-auto" style={{ lineHeight: '1.8' }}>
            Life is about balance. Here are the passions that keep me energized and inspired outside of development
          </p>
        </div>

        {/* Bubble Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {passions.map((passion, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Bubble Image Container */}
              <div className="relative mb-6">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-[#009293] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-110" />
                
                {/* Main bubble */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#0F2330]/40 shadow-xl shadow-black/20 group-hover:shadow-2xl group-hover:shadow-black/30 transition-all duration-500 group-hover:scale-105 group-hover:border-[#F8A58E]/40">
                  {/* Image or gradient background */}
                  {passion.image.startsWith('/') ? (
                    // Actual image
                    <div className="w-full h-full relative">
                      <img 
                        src={passion.image} 
                        alt={passion.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    // Gradient background with icon
                    <div className="w-full h-full bg-gradient-to-br from-[#009293] to-[#00787A] flex items-center justify-center">
                      <passion.icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  )}
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-transparent group-hover:via-white/10 transition-all duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                </div>

                {/* Floating bubbles around main bubble */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#009293]/20 backdrop-blur-sm border border-[#009293]/30 animate-float-up" style={{ animationDelay: '0s' }} />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#009293]/15 backdrop-blur-sm border border-[#009293]/25 animate-float-up" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 -right-4 w-4 h-4 rounded-full bg-[#009293]/10 backdrop-blur-sm border border-[#009293]/20 animate-float-up" style={{ animationDelay: '1s' }} />
              </div>

              {/* Content Card */}
              <Card className="p-5 text-center border border-[#0F2330]/40 bg-[#112B3C]/60 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-black/20 transition-all duration-300 group-hover:-translate-y-1 w-full rounded-2xl">
                <h3 className="text-lg font-medium mb-2 text-[#E6EDF2] group-hover:text-[#F8A58E] transition-colors">
                  {passion.title}
                </h3>
                <p className="text-sm text-[#94A3B8]" style={{ lineHeight: '1.8' }}>
                  {passion.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Personal Note */}
        {/* <div className="mt-12 text-center max-w-3xl mx-auto">
          <Card className="p-6 bg-gradient-to-br from-[#009293]/10 to-[#00787A]/10 border border-[#009293]/20 backdrop-blur-sm rounded-2xl">
            <p className="text-base text-[#94A3B8] italic" style={{ lineHeight: '1.8' }}>
              "I believe in living a full, adventurous life. Whether I'm diving into the ocean depths, 
              conquering mountain slopes, challenging myself in the gym, or spending quality time with Panchin, 
              these passions remind me to stay curious, strong, and grateful. They fuel my creativity 
              and bring the same energy and dedication I apply to my work."
            </p>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
