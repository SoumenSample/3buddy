"use client";
import { motion } from "framer-motion";
import { Mail, Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import profile from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-black">
      {/* Yellow top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-11 h-11 bg-yellow text-black border-2.5 border-white rounded-[255px_15px_225px_15px/15px_225px_15px_255px] flex items-center justify-center font-[family-name:var(--font-caveat)] font-bold text-2xl shadow-[3px_3px_0px_#FFF]">
              3B
            </div>
            <span className="font-[family-name:var(--font-caveat)] text-3xl font-extrabold text-white tracking-wide">
              3buddy
            </span>
          </motion.div>

          {/* Subtitle / Philosophy */}
          <p className="font-[family-name:var(--font-caveat)] text-xl sm:text-2xl text-yellow max-w-md mb-6 leading-relaxed">
            Crafted with <Heart size={16} className="inline text-red-500 fill-red-500 mx-1" /> and lots of ☕ by the 3buddy team.
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mb-8 font-[family-name:var(--font-inter)]">
            We turn bold ideas into high-performance, lovable software products. Available for select freelance, contract, and studio engagements.
          </p>

          {/* Social links row */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { Icon: GithubIcon, href: profile.github, label: "GitHub" },
              { Icon: LinkedinIcon, href: profile.linkedin, label: "LinkedIn" },
              { Icon: TwitterIcon, href: profile.twitter, label: "Twitter" },
              { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-900 border-2 border-white/40 text-white flex items-center justify-center hover:bg-yellow hover:text-black hover:border-yellow hover:shadow-[3px_3px_0px_#FFF] transition-all"
                style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                whileHover={{ y: -3 }}
                data-cursor={label.toUpperCase()}
                aria-label={label}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xl h-px bg-neutral-800 mb-8" />

          {/* Copyright & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl gap-4 text-xs text-neutral-400 font-[family-name:var(--font-fira)]">
            <div>
              &copy; {new Date().getFullYear()} 3buddy &middot; All rights reserved.
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 bg-yellow text-black border-2 border-black font-extrabold text-xs hover:bg-white transition-colors shadow-[2px_2px_0px_#FFF]"
              style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="TOP"
            >
              <span>Back To Top</span>
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
