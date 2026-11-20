"use client";
import { Plus, Minus, Compass, MapPin, Milestone } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { journey } from "@/data/experience";

const pins = [
  { label: "KOLKATA (HQ)", top: "54%", left: "68%" },
  { label: "EUROPE (CLIENTS)", top: "35%", left: "48%" },
  { label: "GLOBAL (REMOTE)", top: "42%", left: "30%" },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-28 bg-paper relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Chapter 6"
          title="OUR JOURNEY"
          subtitle="How our collective story unfolded — from writing our first lines of code to building 3buddy"
        />

        {/* Container combining Milestones + Map in hand-drawn style */}
        <div
          className="mx-auto mt-10 max-w-6xl overflow-hidden bg-white border-3 border-black shadow-[6px_6px_0px_#111]"
          style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left timeline column */}
            <div className="lg:col-span-5 p-6 sm:p-8 border-b-3 lg:border-b-0 lg:border-r-3 border-black bg-paper/40">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-yellow border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_#111]">
                  <Milestone size={16} className="text-black" />
                </div>
                <h3 className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-black">
                  Milestones Along The Way
                </h3>
              </div>

              <div className="relative space-y-6 border-l-2 border-dashed border-black/40 pl-5 ml-3">
                {journey.map((item) => (
                  <div key={item.year} className="relative">
                    {/* Node dot */}
                    <span className="absolute -left-[27px] top-1 h-3.5 w-3.5 rounded-full bg-yellow border-2 border-black" />

                    <div className="flex items-center gap-2">
                      <span className="bg-yellow border border-black px-2 py-0.2 text-[10px] font-bold font-mono">
                        {item.year}
                      </span>
                      <h4 className="text-xs font-extrabold text-black uppercase tracking-wider font-[family-name:var(--font-inter)]">
                        {item.title}
                      </h4>
                    </div>

                    <p className="mt-1 text-xs sm:text-[12.5px] leading-relaxed text-black/75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right map column */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px] bg-slate-100 overflow-hidden">
              <Image
                src="/map.jpg"
                alt="3buddy journey map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority
              />

              {/* Map controls styled as hand-drawn widgets */}
              <div className="absolute left-4 top-4 flex flex-col overflow-hidden border-2 border-black bg-white shadow-[2px_2px_0px_#111] z-10 rounded">
                <button
                  className="flex h-8 w-8 items-center justify-center border-b-2 border-black text-black hover:bg-yellow transition-colors"
                  aria-label="Zoom in"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  className="flex h-8 w-8 items-center justify-center text-black hover:bg-yellow transition-colors"
                  aria-label="Zoom out"
                >
                  <Minus className="h-4 w-4" />
                </button>
              </div>

              {/* Compass widget */}
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border-2 border-black bg-white shadow-[2px_2px_0px_#111] z-10 rounded-full">
                <Compass className="h-5 w-5 text-black" />
              </div>

              {/* Map Pins */}
              {pins.map((pin, i) => (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-full z-10"
                  style={{
                    top: pin.top,
                    left: pin.left,
                  }}
                >
                  <div className="flex items-center gap-1.5 rounded-full border-2 border-black bg-yellow px-2.5 py-1 text-[10px] font-extrabold text-black shadow-[2px_2px_0px_#111]">
                    <span className="h-2 w-2 rounded-full bg-black animate-ping" />
                    {pin.label}
                  </div>
                  <div className="mx-auto h-2.5 w-2.5 -translate-y-px rotate-45 border-b-2 border-r-2 border-black bg-yellow" />
                </div>
              ))}

              {/* Bottom map caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border-2 border-black p-2.5 shadow-[3px_3px_0px_#111] z-10 rounded flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-black flex-shrink-0" />
                  <span className="text-xs font-bold text-black">
                    Headquartered in Kolkata &middot; Collaborating Globally
                  </span>
                </div>
                <span className="hidden sm:inline-block text-[10px] font-mono font-bold bg-yellow px-2 py-0.5 border border-black rounded">
                  EST. 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
