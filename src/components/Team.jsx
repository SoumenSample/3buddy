"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles, ArrowRight, Code, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import SectionTitle from "./SectionTitle";
import teamMembers from "@/data/team";

// Individual stylized comic avatar illustrations for each member
function MemberAvatar({ id, accent }) {
  if (id === 1) {
    // Alex - Frontend & UI lead with glasses & smile
    return (
      <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="16" fill="#FFF9D2" />
        {/* Hair */}
        <path d="M42 62 Q80 26 118 62" fill="#111" />
        {/* Face */}
        <circle cx="80" cy="74" r="36" fill="#FFD633" stroke="#111" strokeWidth="3" />
        {/* Glasses */}
        <rect x="56" y="66" width="18" height="13" rx="3" fill="#FFF" stroke="#111" strokeWidth="2.5" />
        <rect x="86" y="66" width="18" height="13" rx="3" fill="#FFF" stroke="#111" strokeWidth="2.5" />
        <line x1="74" y1="72" x2="86" y2="72" stroke="#111" strokeWidth="2.5" />
        <circle cx="65" cy="72" r="3" fill="#111" />
        <circle cx="95" cy="72" r="3" fill="#111" />
        <circle cx="66" cy="71" r="1" fill="#FFF" />
        <circle cx="96" cy="71" r="1" fill="#FFF" />
        {/* Smile */}
        <path d="M70 88 Q80 97 90 88" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
        {/* Body / Hoodie */}
        <path d="M38 160 C38 126 56 115 80 115 C104 115 122 126 122 160 Z" fill="#111" />
        <path d="M70 115 L80 135 L90 115" stroke="#FFD633" strokeWidth="2.5" fill="none" />
      </svg>
    );
  }

  if (id === 2) {
    // Devon - Full Stack & System Architect with cap
    return (
      <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="160" rx="16" fill="#DCFCE7" />
        {/* Cap */}
        <path d="M46 54 Q80 28 114 54" fill="#111" />
        <path d="M38 54 L80 48 L122 54" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        {/* Face */}
        <circle cx="80" cy="76" r="36" fill="#4ADE80" stroke="#111" strokeWidth="3" />
        {/* Eyes */}
        <circle cx="68" cy="74" r="4" fill="#111" />
        <circle cx="92" cy="74" r="4" fill="#111" />
        <circle cx="69.5" cy="72.5" r="1.5" fill="#FFF" />
        <circle cx="93.5" cy="72.5" r="1.5" fill="#FFF" />
        {/* Grin */}
        <path d="M68 89 Q80 102 92 89" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
        {/* Body */}
        <path d="M38 160 C38 126 56 116 80 116 C104 116 122 126 122 160 Z" fill="#111" />
        <circle cx="80" cy="130" r="4" fill="#4ADE80" />
      </svg>
    );
  }

  // Shivam - MERN Stack Developer with headphones
  return (
    <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="160" rx="16" fill="#DBEAFE" />
      {/* Headphone band */}
      <path d="M42 70 C42 42 118 42 118 70" stroke="#111" strokeWidth="4" strokeLinecap="round" />
      <rect x="36" y="65" width="10" height="20" rx="4" fill="#111" />
      <rect x="114" y="65" width="10" height="20" rx="4" fill="#111" />
      {/* Hair */}
      <path d="M52 52 L62 40 L76 46 L90 38 L104 50" fill="#111" />
      {/* Face */}
      <circle cx="80" cy="76" r="36" fill="#60A5FA" stroke="#111" strokeWidth="3" />
      {/* Eyes */}
      <circle cx="68" cy="74" r="4" fill="#111" />
      <circle cx="92" cy="74" r="4" fill="#111" />
      <circle cx="69.5" cy="72.5" r="1.5" fill="#FFF" />
      <circle cx="93.5" cy="72.5" r="1.5" fill="#FFF" />
      {/* Smile */}
      <path d="M70 90 Q80 98 90 90" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
      {/* Body */}
      <path d="M38 160 C38 126 56 116 80 116 C104 116 122 126 122 160 Z" fill="#111" />
      <line x1="72" y1="122" x2="88" y2="122" stroke="#60A5FA" strokeWidth="2.5" />
    </svg>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-paper relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Chapter 3"
          title="MEET THE SQUAD"
          subtitle="Three passionate engineers collaborating as one team — here's a look at our individual qualifications, experience, and craft"
        />

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, idx) => {
            const tilt = idx === 0 ? -1 : idx === 1 ? 0.6 : -0.8;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="hand-drawn-card bg-white flex flex-col justify-between"
                style={{ transform: `rotate(${tilt}deg)` }}
                whileHover={{ rotate: 0, scale: 1.015 }}
              >
                <div>
                  {/* Top Avatar Box */}
                  <div className="relative border-3 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] overflow-hidden mb-5 shadow-[3px_3px_0px_#111] aspect-[4/3] flex items-center justify-center bg-paper">
                    <MemberAvatar id={member.id} accent={member.accent} />

                    {/* Badge */}
                    <div
                      className="absolute top-2.5 right-2.5 border-2 border-black px-2 py-0.5 text-[9.5px] font-extrabold tracking-wider shadow-[1.5px_1.5px_0px_#111] rounded"
                      style={{ backgroundColor: member.accent }}
                    >
                      {member.badge}
                    </div>

                    <div className="absolute bottom-2 left-2.5 bg-black/80 text-white font-mono text-[9px] px-2 py-0.5 rounded">
                      buddy_0{member.id}
                    </div>
                  </div>

                  {/* Member Name & Role */}
                  <div className="mb-4">
                    <h3 className="font-[family-name:var(--font-caveat)] text-3xl sm:text-4xl font-extrabold text-black leading-tight">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-black/70 font-[family-name:var(--font-inter)] mt-0.5">
                      {member.role}
                    </div>
                  </div>

                  {/* Qualifications & Experience details */}
                  <div className="space-y-2.5 pt-2 border-t-2 border-black/10 text-xs">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-yellow border border-black rounded flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[1px_1px_0px_#111]">
                        <GraduationCap size={13} className="text-black" />
                      </div>
                      <div>
                        <span className="font-extrabold text-black uppercase text-[10px] tracking-wider block font-mono">
                          Qualifications:
                        </span>
                        <span className="text-black/85 font-medium leading-snug">
                          {member.qualifications}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-yellow border border-black rounded flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[1px_1px_0px_#111]">
                        <Briefcase size={13} className="text-black" />
                      </div>
                      <div>
                        <span className="font-extrabold text-black uppercase text-[10px] tracking-wider block font-mono">
                          Experience:
                        </span>
                        <span className="text-black/85 font-medium leading-snug">
                          {member.experience}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-yellow border border-black rounded flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[1px_1px_0px_#111]">
                        <Sparkles size={13} className="text-black" />
                      </div>
                      <div>
                        <span className="font-extrabold text-black uppercase text-[10px] tracking-wider block font-mono">
                          Core Focus:
                        </span>
                        <span className="text-black/85 font-medium leading-snug">
                          {member.specialization}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bio quote */}
                  <div className="mt-4 p-3 bg-paper border border-black/20 text-xs text-black/75 italic rounded font-[family-name:var(--font-inter)] leading-relaxed">
                    &ldquo;{member.bio}&rdquo;
                  </div>

                  {/* Key Skills */}
                  <div className="mt-4">
                    <div className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-black/60 mb-2">
                      Primary Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-yellow/25 border border-black px-2 py-0.5 text-[10px] font-bold text-black rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Reach (GitHub, LinkedIn, Twitter hidden for now) */}
                <div className="flex items-center justify-between pt-4 mt-5 border-t-2 border-black/10">
                  <span className="text-[11px] font-mono font-bold text-black/50">DIRECT REACH:</span>
                  <div className="flex items-center gap-2">
                    {/* Socials hidden for now:
                    <a href={member.socials.github} ...><GithubIcon size={13} /></a>
                    <a href={member.socials.linkedin} ...><LinkedinIcon size={13} /></a>
                    <a href={member.socials.twitter} ...><TwitterIcon size={13} /></a>
                    */}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s+/g, "")}`}
                        className="px-2.5 py-1 bg-yellow border border-black flex items-center gap-1.5 hover:bg-white hover:scale-105 transition-all rounded shadow-[1px_1px_0px_#111] text-xs font-mono font-bold text-black"
                        aria-label={`Call ${member.name} at ${member.phone}`}
                        title={member.phone}
                      >
                        <Phone size={12} className="text-black" />
                        <span>{member.phone}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div
          className="mt-14 p-6 bg-white border-3 border-black shadow-[5px_5px_0px_#111] flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
        >
          <div>
            <h4 className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-extrabold text-black">
              Need a dedicated engineering team for your next big product?
            </h4>
            <p className="text-xs sm:text-sm text-black/70">
              We collaborate closely with founders, companies, and startups to build production-grade web applications.
            </p>
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="sketch-button whitespace-nowrap text-xs py-2 px-4 flex-shrink-0"
            data-cursor="CHAT"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

