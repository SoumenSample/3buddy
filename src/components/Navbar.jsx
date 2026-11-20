"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#team", label: "TEAM" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection("#" + sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none"
    >
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 border-3 border-black bg-white/95 backdrop-blur-md ${
            scrolled ? "shadow-[5px_5px_0px_#111]" : "shadow-[4px_4px_0px_#111]"
          }`}
          style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 group"
            data-cursor="HOME"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-yellow border-2.5 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] flex items-center justify-center font-[family-name:var(--font-caveat)] font-bold text-xl sm:text-2xl group-hover:rotate-6 transition-transform shadow-[2px_2px_0px_#111]">
              3B
            </div>
            <span className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              3buddy
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3 py-1.5 text-xs font-extrabold tracking-wider transition-all font-[family-name:var(--font-inter)] rounded-full ${
                    isActive
                      ? "text-black bg-yellow border-2 border-black shadow-[2px_2px_0px_#111]"
                      : "text-black/70 hover:text-black hover:bg-yellow/20"
                  }`}
                  data-cursor={link.label}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Contact CTA button on desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden md:inline-flex sketch-button text-xs py-1.5 px-3.5 shadow-[2px_2px_0px_#111]"
              data-cursor="HIRE US"
            >
              Hire Us
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 sketch-border-thin bg-yellow flex items-center justify-center hover:scale-105 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <button
            className="sm:hidden w-9 h-9 sketch-border-thin bg-yellow flex items-center justify-center hover:scale-105 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-3 bg-white border-3 border-black shadow-[5px_5px_0px_#111] overflow-hidden"
              style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`px-4 py-2.5 text-xs font-bold tracking-wider font-[family-name:var(--font-inter)] transition-colors border-2 ${
                        isActive
                          ? "bg-yellow border-black text-black shadow-[2px_2px_0px_#111]"
                          : "bg-paper/40 border-black/10 text-black/80 hover:bg-yellow/30"
                      }`}
                      style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
