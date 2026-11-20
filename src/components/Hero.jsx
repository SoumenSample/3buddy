"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Terminal, Code, Folder, Database, Rocket, Laptop } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import DeveloperIllustration from "./DeveloperIllustration";
import CartoonHand from "./CartoonHand";
import profile from "@/data/profile";

const floatingIcons = [
  { Icon: Terminal, x: "8%", y: "22%", delay: 0, rotate: -10 },
  { Icon: Code, x: "88%", y: "18%", delay: 0.5, rotate: 15 },
  { Icon: Folder, x: "82%", y: "70%", delay: 1, rotate: -5 },
  { Icon: Database, x: "6%", y: "75%", delay: 1.5, rotate: 8 },
  { Icon: Rocket, x: "92%", y: "45%", delay: 2, rotate: -15 },
  { Icon: Laptop, x: "12%", y: "48%", delay: 0.8, rotate: 5 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-paper flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle notebook/grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating dev icons */}
      {floatingIcons.map(({ Icon, x, y, delay, rotate }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex pointer-events-none text-black/25"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.6, type: "spring" }}
        >
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [rotate, rotate + 4, rotate] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={32 + i * 3} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      ))}

      {/* Sticky notes */}
      <motion.div
        className="absolute top-24 right-6 md:right-16 sticky-note hidden lg:block z-10"
        initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
        animate={{ opacity: 1, rotate: -4, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="text-xs font-extrabold uppercase tracking-wider mb-1">TEAM GOALS:</div>
        <div className="text-sm font-semibold">✓ Build remarkable apps</div>
        <div className="text-sm font-semibold">✓ Ship clean code</div>
        <div className="text-sm font-semibold">✓ Have fun doing it!</div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Story & Hero Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="comic-label mb-5 inline-block">Chapter 1 &middot; Introduction</div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-caveat)] leading-[1.05] mb-6 text-black"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hey there!{" "}
              <CartoonHand className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 inline-block align-middle ml-1 -mt-2 sm:-mt-3" />
              <br />
              We are{" "}
              <span className="relative inline-block text-black">
                {profile.name}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-yellow/80 border-b-2 border-black -rotate-1 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl text-black/80 max-w-xl mx-auto lg:mx-0 mb-6 font-[family-name:var(--font-inter)] font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              className="text-sm sm:text-base text-black/60 max-w-lg mx-auto lg:mx-0 mb-8 font-[family-name:var(--font-fira)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              ✦ Three passionate developers united to engineer fast, scalable, and delightful web products.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="sketch-button"
                data-cursor="WORK"
              >
                View Our Work
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="sketch-button-outline"
                data-cursor="TALK"
              >
                Let&apos;s Connect
              </a>
            </motion.div>

            {/* Social Icons row */}
            <motion.div
              className="flex justify-center lg:justify-start gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sketch-border-thin bg-white flex items-center justify-center hover:bg-yellow hover:scale-105 transition-all shadow-[2px_2px_0px_#111]"
                data-cursor="GITHUB"
                aria-label="GitHub profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sketch-border-thin bg-white flex items-center justify-center hover:bg-yellow hover:scale-105 transition-all shadow-[2px_2px_0px_#111]"
                data-cursor="LINKEDIN"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sketch-border-thin bg-white flex items-center justify-center hover:bg-yellow hover:scale-105 transition-all shadow-[2px_2px_0px_#111]"
                data-cursor="TWITTER"
                aria-label="Twitter profile"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 sketch-border-thin bg-white flex items-center justify-center hover:bg-yellow hover:scale-105 transition-all shadow-[2px_2px_0px_#111]"
                data-cursor="EMAIL"
                aria-label="Email 3buddy"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Illustration of the 3 Buddies */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
          >
            <div className="relative w-full max-w-md">
              {/* Back offset shadow card */}
              <div
                className="absolute inset-0 bg-yellow border-3 border-black rotate-2 translate-x-3 translate-y-3"
                style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
              />
              {/* Front main card */}
              <div
                className="relative bg-white border-3 border-black p-4 sm:p-6 shadow-[5px_5px_0px_#111]"
                style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
              >
                <DeveloperIllustration scene="sitting" className="w-full h-auto" />
              </div>

              {/* Floating tag badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-yellow border-2.5 border-black px-3 py-1 font-[family-name:var(--font-fira)] text-xs font-bold shadow-[2px_2px_0px_#111] rotate-2"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {"<3buddy />"}
              </motion.div>
            </div>

            {/* Sticky note on the right side below the illustration */}
            <motion.div
              className="mt-6 self-start sm:self-center sticky-note sticky-note-rotate z-10 shadow-[3px_3px_0px_#111]"
              initial={{ opacity: 0, rotate: 5, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 2, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-xs font-mono font-bold text-black/85">
                console.log(&quot;3buddy ready!&quot;)
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs font-bold tracking-widest font-[family-name:var(--font-caveat)] text-black/60">
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-black/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
