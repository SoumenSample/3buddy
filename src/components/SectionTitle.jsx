"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ label, title, subtitle, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && <div className="comic-label mb-4 inline-block">{label}</div>}
      <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-caveat)] text-black mt-3">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-black/60 max-w-xl mx-auto font-[family-name:var(--font-inter)]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
