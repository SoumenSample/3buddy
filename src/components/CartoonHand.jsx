"use client";
import { motion } from "framer-motion";

export default function CartoonHand({
  className = "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20",
}) {
  return (
    <motion.span
      className={`inline-block align-middle select-none origin-[70%_85%] cursor-pointer ${className}`}
      animate={{
        rotate: [0, 18, -12, 18, -6, 0],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        repeatDelay: 0.8,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2, rotate: 25 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Cartoon waving hand"
      role="img"
    >
      <svg
        viewBox="0 0 105 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[2.5px_2.5px_0px_#111]"
      >
        {/* Cartoon Waving Motion Arcs */}
        <motion.path
          d="M 12 32 C 6 22 10 12 20 6"
          stroke="#111"
          strokeWidth="3.2"
          strokeLinecap="round"
          animate={{ opacity: [0.3, 1, 0.3], x: [-1, 1, -1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 5 42 C 1 30 5 18 14 12"
          stroke="#111"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <motion.path
          d="M 88 12 C 96 20 98 32 90 42"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{ opacity: [1, 0.4, 1], x: [1, -1, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hand Shadow Offset for Comic 2.5D Depth */}
        <g transform="translate(2.5, 3)" opacity="0.15">
          <path
            d="M 42 88 C 38 80 28 72 24 64 C 18 54 26 47 32 52 C 37 56 40 62 42 67 C 40 54 40 32 46 24 C 51 18 57 20 58 26 L 58 46 C 59 38 62 13 68 12 C 74 11 78 15 78 22 L 78 46 C 80 40 83 22 89 23 C 94 24 96 30 94 38 L 92 54 C 95 48 99 45 102 50 C 105 56 101 66 96 73 C 88 82 78 86 74 88 Z"
            fill="#111"
          />
          <rect x="36" y="84" width="44" height="13" rx="6.5" fill="#111" />
        </g>

        {/* Main Cartoon Hand Body (Yellow with bold ink border) */}
        <path
          d="M 42 88 C 38 80 28 72 24 64 C 18 54 26 47 32 52 C 37 56 40 62 42 67 C 40 54 40 32 46 24 C 51 18 57 20 58 26 L 58 46 C 59 38 62 13 68 12 C 74 11 78 15 78 22 L 78 46 C 80 40 83 22 89 23 C 94 24 96 30 94 38 L 92 54 C 95 48 99 45 102 50 C 105 56 101 66 96 73 C 88 82 78 86 74 88 Z"
          fill="#FFD633"
          stroke="#111"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Thumb inner crease line */}
        <path
          d="M 33 51 C 38 58 42 67 44 76"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Finger Separation Lines */}
        <path
          d="M 58 36 L 58 55"
          stroke="#111"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 78 34 L 78 56"
          stroke="#111"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 91 47 L 90 62"
          stroke="#111"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Comic Palm Life-Lines */}
        <path
          d="M 47 71 Q 59 75 73 69"
          stroke="#111"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 52 79 Q 62 82 72 78"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Glossy White Comic Highlights on finger tips */}
        <ellipse
          cx="47"
          cy="30"
          rx="2"
          ry="5"
          fill="#FFFFFF"
          opacity="0.75"
          transform="rotate(-10 47 30)"
        />
        <ellipse
          cx="67"
          cy="20"
          rx="2"
          ry="6"
          fill="#FFFFFF"
          opacity="0.75"
          transform="rotate(-5 67 20)"
        />
        <ellipse
          cx="85"
          cy="28"
          rx="1.8"
          ry="5"
          fill="#FFFFFF"
          opacity="0.75"
          transform="rotate(5 85 28)"
        />

        {/* Classic Cartoon Rounded Wrist Cuff (Caps off bottom cleanly) */}
        <rect
          x="36"
          y="84"
          width="44"
          height="13"
          rx="6.5"
          fill="#FFFFFF"
          stroke="#111"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Subtle comic folds on cuff */}
        <line
          x1="52"
          y1="88"
          x2="52"
          y2="94"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
        <line
          x1="64"
          y1="88"
          x2="64"
          y2="94"
          stroke="#111"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </motion.span>
  );
}
