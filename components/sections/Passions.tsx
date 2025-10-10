"use client";

import { Card } from "@/components/ui/card";
import { Waves, Mountain, Dumbbell, Heart } from "lucide-react";

interface Passion {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  color: string;
}

export default function Passions() {
  const passions: Passion[] = [
    {
      title: "Scuba Diving",
      description: "Exploring the underwater world and its incredible marine life",
      icon: Waves,
      image: "bg-gradient-to-br from-[#a8dadc] to-[#3AAFA9]", // Placeholder - replace with actual image
      color: "from-[#a8dadc] to-[#c4b5fd]",
    },
    {
      title: "Skiing",
      description: "Finding freedom and adventure on the mountain slopes",
      icon: Mountain,
      image: "bg-gradient-to-br from-[#c4b5fd] to-[#f1c6d9]", // Placeholder
      color: "from-[#c4b5fd] to-[#f1c6d9]",
    },
    {
      title: "Olympic Lifting",
      description: "Building strength, discipline, and pushing my limits",
      icon: Dumbbell,
      image: "bg-gradient-to-br from-[#ffa6b8] to-[#f1c6d9]", // Placeholder
      color: "from-[#ffa6b8] to-[#f1c6d9]",
    },
    {
      title: "Panchin",
      description: "My beloved companion and constant source of joy",
      icon: Heart,
      image: "bg-gradient-to-br from-[#f1c6d9] to-[#b8e6d5]", // Placeholder
      color: "from-[#f1c6d9] to-[#b8e6d5]",
    },
  ];

  return (
    <section id="passions" className="py-20 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-35">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#faf7f5]">
            Beyond the Code
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f1c6d9] via-[#c4b5fd] to-[#a8dadc] mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${passion.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 scale-110`} />
                
                {/* Main bubble */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#a8dadc]/30 shadow-xl shadow-[#f1c6d9]/20 group-hover:shadow-2xl group-hover:shadow-[#f1c6d9]/40 transition-all duration-500 group-hover:scale-105 group-hover:border-[#f1c6d9]/50">
                  {/* Image placeholder with gradient */}
                  <div className={`w-full h-full ${passion.image} flex items-center justify-center`}>
                    <passion.icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-transparent group-hover:via-white/20 transition-all duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />
                </div>

                {/* Floating bubbles around main bubble */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#a8dadc]/30 backdrop-blur-sm border border-[#a8dadc]/40 animate-float-up" style={{ animationDelay: '0s' }} />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#f1c6d9]/30 backdrop-blur-sm border border-[#f1c6d9]/40 animate-float-up" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 -right-4 w-4 h-4 rounded-full bg-[#c4b5fd]/30 backdrop-blur-sm border border-[#c4b5fd]/40 animate-float-up" style={{ animationDelay: '1s' }} />
              </div>

              {/* Content Card */}
              <Card className="p-5 text-center border-[#a8dadc]/20 bg-card/80 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-[#f1c6d9]/20 transition-all duration-300 group-hover:-translate-y-1 w-full">
                <h3 className="text-xl font-semibold mb-2 text-[#faf7f5] group-hover:text-[#f1c6d9] transition-colors">
                  {passion.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {passion.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Personal Note */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-[#f1c6d9]/10 to-[#c4b5fd]/10 border-[#f1c6d9]/30 backdrop-blur-sm">
            <p className="text-lg text-muted-foreground italic">
              "I believe in living a full, adventurous life. Whether I'm diving into the ocean depths, 
              conquering mountain slopes, challenging myself in the gym, or spending quality time with Panchin, 
              these passions remind me to stay curious, strong, and grateful. They fuel my creativity 
              and bring the same energy and dedication I apply to my work."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

