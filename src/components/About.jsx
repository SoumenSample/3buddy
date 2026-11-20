"use client";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Calendar, Heart, Users, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";
import DeveloperIllustration from "./DeveloperIllustration";
import profile from "@/data/profile";

const annotations = [
  { text: "passionate trio!", x: "right-3 top-2", rotate: 3 },
  { text: "clean architecture", x: "left-6 -bottom-3", rotate: -2 },
  { text: "creative problem solvers", x: "right-8 -bottom-3", rotate: 2 },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-paper relative overflow-hidden">
      {/* Decorative notebook dashed divider */}
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Chapter 2"
          title="WHO ARE WE?"
          subtitle="Get to know the team behind the code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
          {/* Illustration Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm">
              <div
                className="bg-white border-3 border-black p-4 sm:p-6 relative shadow-[6px_6px_0px_#111]"
                style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
              >
                <DeveloperIllustration scene="presenting" className="w-full h-auto" />
              </div>

              {/* Sticky note */}
              <motion.div
                className="absolute -top-3 -right-3 sticky-note text-xs"
                animate={{ rotate: [-2, -5, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Hi! That&apos;s us 👋
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Notebook style */}
          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="paper-card relative">
              {/* Red margin line */}
              <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-px bg-red-400/50" />

              <div className="pl-6 sm:pl-10 space-y-6">
                <p className="text-base sm:text-lg leading-relaxed font-[family-name:var(--font-inter)] text-black/90">
                  {profile.shortBio}
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-black/70">
                  As <strong>3buddy</strong>, we combine frontend artistry, backend stability, and thoughtful product design. Whether launching from scratch or optimizing complex workflows, we write code that scales and interfaces that users love.
                </p>

                {/* Info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-yellow border-2 border-black flex items-center justify-center rotate-[-3deg] shadow-[2px_2px_0px_#111]">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-black/50 uppercase tracking-wider font-extrabold font-[family-name:var(--font-inter)]">
                        Location
                      </div>
                      <div className="text-sm font-bold text-black">{profile.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-yellow border-2 border-black flex items-center justify-center rotate-[2deg] shadow-[2px_2px_0px_#111]">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-black/50 uppercase tracking-wider font-extrabold font-[family-name:var(--font-inter)]">
                        Experience
                      </div>
                      <div className="text-sm font-bold text-black">{profile.yearsExperience} Years Combined</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-yellow border-2 border-black flex items-center justify-center rotate-[-2deg] shadow-[2px_2px_0px_#111]">
                      <Users size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-black/50 uppercase tracking-wider font-extrabold font-[family-name:var(--font-inter)]">
                        Team
                      </div>
                      <div className="text-sm font-bold text-black">3 Full-Stack Buddies</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-yellow border-2 border-black flex items-center justify-center rotate-[3deg] shadow-[2px_2px_0px_#111]">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-black/50 uppercase tracking-wider font-extrabold font-[family-name:var(--font-inter)]">
                        Status
                      </div>
                      <div className="text-sm font-bold text-black">{profile.availability}</div>
                    </div>
                  </div>
                </div>

                {/* Team Philosophy box */}
                <div className="mt-4 p-4 bg-yellow/20 border-2.5 border-black rotate-[-0.5deg] shadow-[3px_3px_0px_#111]">
                  <div className="text-xs font-bold uppercase tracking-wider text-black/60 mb-1 font-[family-name:var(--font-fira)]">
                    OUR PHILOSOPHY
                  </div>
                  <p className="font-[family-name:var(--font-caveat)] text-xl sm:text-2xl text-black leading-snug">
                    &ldquo;{profile.philosophy}&rdquo;
                  </p>
                </div>
              </div>

              {/* Handwritten annotations around card */}
              {annotations.map((a, i) => (
                <motion.span
                  key={i}
                  className={`absolute ${a.x} font-[family-name:var(--font-caveat)] text-base font-bold text-black/50 hidden md:block`}
                  style={{ transform: `rotate(${a.rotate}deg)` }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                >
                  {a.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
