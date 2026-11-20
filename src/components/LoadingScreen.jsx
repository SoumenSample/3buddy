"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 18 + 8;
      });
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-paper"
        >
          <div className="flex flex-col items-center gap-6 px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 bg-yellow border-3 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] flex items-center justify-center font-[family-name:var(--font-caveat)] font-bold text-3xl shadow-[3px_3px_0px_#111]">
                3B
              </div>
              <div className="font-[family-name:var(--font-caveat)] text-4xl md:text-6xl font-bold text-black mb-1">
                Loading 3buddy...
              </div>
              <div className="font-[family-name:var(--font-fira)] text-xs sm:text-sm text-black/60">
                $ initializing 3buddy_studio --verbose
              </div>
            </motion.div>

            <div className="w-64 md:w-80">
              <div className="sketch-border-thin bg-white p-1">
                <div
                  className="h-3.5 bg-yellow transition-all duration-150 border border-black"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 font-[family-name:var(--font-fira)] text-xs font-bold text-black/60">
                <span>SHIPPING CODE...</span>
                <span>{Math.min(Math.round(progress), 100)}%</span>
              </div>
            </div>

            <div className="flex gap-4 text-xl sm:text-2xl animate-float text-black/50 font-bold">
              <span className="animate-float-delay-1">&lt;3buddy&gt;</span>
              <span className="animate-float-delay-2 font-[family-name:var(--font-caveat)] font-bold text-black">
                {"{ we: craft }"}
              </span>
              <span className="animate-float-delay-3">&lt;/studio&gt;</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
