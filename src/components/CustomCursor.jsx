"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setHoveredElement(target.dataset.cursor);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setHoveredElement(null);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[999999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          opacity: isVisible ? 1 : 0,
          scale: hoveredElement ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-5 h-5 rounded-full bg-yellow" />
      </motion.div>

      {hoveredElement && (
        <motion.div
          className="fixed z-[999999] pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: position.x + 15,
            y: position.y - 15,
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-black text-yellow px-2 py-1 text-[10px] font-bold font-[family-name:var(--font-caveat)] uppercase tracking-wider rounded whitespace-nowrap">
            {hoveredElement}
          </div>
        </motion.div>
      )}
    </>
  );
}
