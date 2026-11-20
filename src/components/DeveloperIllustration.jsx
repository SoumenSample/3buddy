"use client";
import { motion } from "framer-motion";

export default function DeveloperIllustration({ scene = "sitting", className = "" }) {
  const scenes = {
    // 3buddy collaborative team sitting and working
    sitting: (
      <svg viewBox="0 0 380 280" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
        {/* Table / Desk */}
        <rect x="25" y="190" width="330" height="12" rx="4" fill="#111" />
        <rect x="35" y="202" width="10" height="65" rx="2" fill="#111" />
        <rect x="335" y="202" width="10" height="65" rx="2" fill="#111" />
        
        {/* BUDDY 1 (Left - Designer / Frontend) */}
        <g id="buddy-left">
          {/* Body */}
          <rect x="55" y="105" width="55" height="90" rx="10" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Head */}
          <circle cx="82" cy="70" r="32" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Hair - Curly / stylish */}
          <path d="M54 62 Q65 38 82 44 Q100 38 111 62" fill="#111" stroke="#111" strokeWidth="2" />
          {/* Glasses */}
          <rect x="65" y="62" width="14" height="10" rx="3" fill="#FFF" stroke="#111" strokeWidth="2" />
          <rect x="85" y="62" width="14" height="10" rx="3" fill="#FFF" stroke="#111" strokeWidth="2" />
          <line x1="79" y1="67" x2="85" y2="67" stroke="#111" strokeWidth="2" />
          <circle cx="72" cy="67" r="2.5" fill="#111" />
          <circle cx="92" cy="67" r="2.5" fill="#111" />
          {/* Smile */}
          <path d="M73 82 Q82 90 91 82" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          {/* Tablet / Coffee */}
          <rect x="75" y="150" width="30" height="38" rx="4" fill="#FFF" stroke="#111" strokeWidth="2.5" transform="rotate(-10 75 150)" />
          <circle cx="88" cy="165" r="4" fill="#FFD633" />
          {/* Coffee mug */}
          <rect x="35" y="168" width="18" height="22" rx="3" fill="#FFF" stroke="#111" strokeWidth="2" />
          <path d="M53 173 C57 173 57 182 53 182" stroke="#111" strokeWidth="2" fill="none" />
          <path d="M41 162 Q44 156 41 152" stroke="#111" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* BUDDY 2 (Center - Full Stack Lead / Coding) */}
        <g id="buddy-center">
          {/* Chair back */}
          <rect x="155" y="90" width="70" height="95" rx="12" fill="#E5E5E5" stroke="#111" strokeWidth="3" />
          {/* Body */}
          <rect x="160" y="115" width="60" height="80" rx="10" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Head */}
          <circle cx="190" cy="75" r="34" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Cap / Hair */}
          <path d="M158 65 Q190 40 222 65" fill="#111" stroke="#111" strokeWidth="2" />
          <path d="M152 65 L190 60 L226 65" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          {/* Eyes with sparkle */}
          <circle cx="178" cy="73" r="4.5" fill="#111" />
          <circle cx="202" cy="73" r="4.5" fill="#111" />
          <circle cx="179.5" cy="71.5" r="1.5" fill="#FFF" />
          <circle cx="203.5" cy="71.5" r="1.5" fill="#FFF" />
          {/* Big happy smile */}
          <path d="M178 88 Q190 100 202 88" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Laptop */}
          <rect x="145" y="145" width="90" height="52" rx="4" fill="#222" stroke="#111" strokeWidth="2.5" />
          <rect x="150" y="150" width="80" height="40" rx="2" fill="#1A1A2E" />
          {/* Code lines */}
          <text x="155" y="163" fill="#4ADE80" fontFamily="monospace" fontSize="8" fontWeight="bold">&lt;3buddy&gt;</text>
          <text x="160" y="174" fill="#FFD633" fontFamily="monospace" fontSize="7">we.build()</text>
          <text x="155" y="184" fill="#60A5FA" fontFamily="monospace" fontSize="7">&lt;/code&gt;</text>
          {/* Hands on keyboard */}
          <ellipse cx="148" cy="188" rx="8" ry="5" fill="#FFD633" stroke="#111" strokeWidth="2" />
          <ellipse cx="232" cy="188" rx="8" ry="5" fill="#FFD633" stroke="#111" strokeWidth="2" />
        </g>

        {/* BUDDY 3 (Right - Backend / Cloud Arch) */}
        <g id="buddy-right">
          {/* Body */}
          <rect x="270" y="105" width="55" height="90" rx="10" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Head */}
          <circle cx="298" cy="70" r="32" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Hair - Spike / modern */}
          <path d="M272 58 L282 45 L295 52 L310 44 L322 58" fill="#111" stroke="#111" strokeWidth="2" />
          {/* Eyes */}
          <circle cx="288" cy="68" r="4" fill="#111" />
          <circle cx="308" cy="68" r="4" fill="#111" />
          <circle cx="289.5" cy="66.5" r="1.5" fill="#FFF" />
          <circle cx="309.5" cy="66.5" r="1.5" fill="#FFF" />
          {/* Grin */}
          <path d="M289 82 Q298 92 308 82" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          {/* Headphone on neck */}
          <path d="M275 88 C275 102 320 102 320 88" stroke="#333" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="274" cy="88" r="5" fill="#111" />
          <circle cx="321" cy="88" r="5" fill="#111" />
          {/* Second screen / monitor */}
          <rect x="260" y="135" width="65" height="45" rx="4" fill="#333" stroke="#111" strokeWidth="2" />
          <rect x="264" y="139" width="57" height="35" rx="2" fill="#0F172A" />
          <circle cx="274" cy="148" r="3" fill="#38BDF8" />
          <line x1="282" y1="148" x2="310" y2="148" stroke="#38BDF8" strokeWidth="2" />
          <line x1="270" y1="158" x2="305" y2="158" stroke="#F43F5E" strokeWidth="1.5" />
          <line x1="270" y1="165" x2="295" y2="165" stroke="#A855F7" strokeWidth="1.5" />
        </g>

        {/* Small floating speech/sparkle */}
        <circle cx="125" cy="40" r="3" fill="#FFD633" stroke="#111" strokeWidth="1" />
        <circle cx="255" cy="35" r="4" fill="#FFD633" stroke="#111" strokeWidth="1" />
        <path d="M190 20 L193 26 L200 28 L194 32 L195 38 L190 34 L185 38 L186 32 L180 28 L187 26 Z" fill="#FFD633" stroke="#111" strokeWidth="1.5" />
      </svg>
    ),

    // Presenting / Studio mode for About section
    presenting: (
      <svg viewBox="0 0 340 300" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
        {/* Presentation Board */}
        <rect x="30" y="130" width="280" height="145" rx="8" fill="#FFFFFF" stroke="#111" strokeWidth="3.5" />
        <line x1="30" y1="165" x2="310" y2="165" stroke="#111" strokeWidth="2" />
        {/* Board title */}
        <text x="50" y="153" fill="#111" fontFamily="Caveat, cursive" fontSize="18" fontWeight="bold">3BUDDY DEV STUDIO</text>
        <circle cx="285" cy="150" r="5" fill="#FFD633" stroke="#111" strokeWidth="1.5" />
        
        {/* Board content cards */}
        <rect x="45" y="178" width="75" height="45" rx="4" fill="#FFD633" stroke="#111" strokeWidth="2" />
        <text x="55" y="196" fill="#111" fontFamily="sans-serif" fontSize="9" fontWeight="bold">FRONTEND</text>
        <text x="55" y="210" fill="#111" fontFamily="monospace" fontSize="8">React / Next</text>

        <rect x="132" y="178" width="75" height="45" rx="4" fill="#F5F3EA" stroke="#111" strokeWidth="2" />
        <text x="142" y="196" fill="#111" fontFamily="sans-serif" fontSize="9" fontWeight="bold">BACKEND</text>
        <text x="142" y="210" fill="#111" fontFamily="monospace" fontSize="8">Node / APIs</text>

        <rect x="220" y="178" width="75" height="45" rx="4" fill="#FFD633" stroke="#111" strokeWidth="2" />
        <text x="230" y="196" fill="#111" fontFamily="sans-serif" fontSize="9" fontWeight="bold">CLOUD</text>
        <text x="230" y="210" fill="#111" fontFamily="monospace" fontSize="8">Full Scale</text>

        <text x="50" y="250" fill="#666" fontFamily="Caveat, cursive" fontSize="14">✦ Clean Code  ✦ Creative UX  ✦ Fast Shipping</text>

        {/* BUDDY 1 (Left presenter) */}
        <g id="pres-buddy-1">
          <circle cx="85" cy="65" r="26" fill="#FFD633" stroke="#111" strokeWidth="3" />
          <path d="M62 60 Q85 40 108 60" fill="#111" stroke="#111" strokeWidth="2" />
          <circle cx="78" cy="65" r="3.5" fill="#111" />
          <circle cx="94" cy="65" r="3.5" fill="#111" />
          <path d="M80 75 Q86 82 92 75" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <rect x="65" y="90" width="40" height="45" rx="8" fill="#FFD633" stroke="#111" strokeWidth="3" />
        </g>

        {/* BUDDY 2 (Center presenter pointing to board) */}
        <g id="pres-buddy-2">
          <circle cx="170" cy="55" r="28" fill="#FFD633" stroke="#111" strokeWidth="3" />
          <path d="M145 50 Q170 30 195 50" fill="#111" stroke="#111" strokeWidth="2" />
          {/* Cap */}
          <path d="M142 50 L170 45 L198 50" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="162" cy="55" r="4" fill="#111" />
          <circle cx="180" cy="55" r="4" fill="#111" />
          <path d="M162 67 Q171 75 180 67" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <rect x="145" y="82" width="50" height="52" rx="8" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Pointing arm */}
          <line x1="195" y1="100" x2="225" y2="125" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          <circle cx="228" cy="127" r="5" fill="#FFD633" stroke="#111" strokeWidth="2" />
        </g>

        {/* BUDDY 3 (Right presenter) */}
        <g id="pres-buddy-3">
          <circle cx="255" cy="65" r="26" fill="#FFD633" stroke="#111" strokeWidth="3" />
          <path d="M235 55 L245 44 L258 50 L270 42 L278 55" fill="#111" stroke="#111" strokeWidth="2" />
          <circle cx="248" cy="65" r="3.5" fill="#111" />
          <circle cx="264" cy="65" r="3.5" fill="#111" />
          <path d="M250 75 Q256 82 262 75" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <rect x="235" y="90" width="40" height="45" rx="8" fill="#FFD633" stroke="#111" strokeWidth="3" />
        </g>
      </svg>
    ),

    // Waving team for Contact section
    waving: (
      <svg viewBox="0 0 340 240" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
        {/* Speech Bubble */}
        <ellipse cx="255" cy="40" rx="55" ry="25" fill="#FFF" stroke="#111" strokeWidth="2.5" />
        <polygon points="230,62 245,62 235,76" fill="#FFF" stroke="#111" strokeWidth="2" />
        <text x="220" y="46" fill="#111" fontFamily="Caveat, cursive" fontSize="18" fontWeight="bold">Say hello! 👋</text>

        {/* BUDDY 1 */}
        <g id="wave-buddy-1">
          <circle cx="95" cy="100" r="30" fill="#FFD633" stroke="#111" strokeWidth="3" />
          <path d="M70 95 Q95 72 120 95" fill="#111" stroke="#111" strokeWidth="2" />
          <circle cx="87" cy="100" r="4" fill="#111" />
          <circle cx="105" cy="100" r="4" fill="#111" />
          <path d="M88 112 Q96 122 104 112" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <rect x="70" y="130" width="50" height="75" rx="10" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Arm waving left */}
          <line x1="70" y1="145" x2="45" y2="120" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          <circle cx="42" cy="116" r="6" fill="#FFD633" stroke="#111" strokeWidth="2" />
        </g>

        {/* BUDDY 2 (Center) */}
        <g id="wave-buddy-2">
          <circle cx="170" cy="90" r="32" fill="#FFD633" stroke="#111" strokeWidth="3" />
          <path d="M142 85 Q170 60 198 85" fill="#111" stroke="#111" strokeWidth="2" />
          <path d="M138 85 L170 78 L202 85" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="160" cy="90" r="4.5" fill="#111" />
          <circle cx="180" cy="90" r="4.5" fill="#111" />
          <path d="M161 104 Q170 114 180 104" stroke="#111" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="142" y="122" width="56" height="85" rx="10" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Waving high arm */}
          <line x1="198" y1="135" x2="225" y2="85" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          <circle cx="227" cy="80" r="8" fill="#FFD633" stroke="#111" strokeWidth="2.5" />
        </g>

        {/* BUDDY 3 */}
        <g id="wave-buddy-3">
          <circle cx="245" cy="100" r="30" fill="#FFD633" stroke="#111" strokeWidth="3" />
          <path d="M220 90 L230 78 L245 84 L260 76 L270 90" fill="#111" stroke="#111" strokeWidth="2" />
          <circle cx="237" cy="100" r="4" fill="#111" />
          <circle cx="255" cy="100" r="4" fill="#111" />
          <path d="M238 112 Q246 122 254 112" stroke="#111" strokeWidth="2" strokeLinecap="round" />
          <rect x="220" y="130" width="50" height="75" rx="10" fill="#FFD633" stroke="#111" strokeWidth="3" />
          {/* Arm waving right */}
          <line x1="270" y1="145" x2="295" y2="120" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          <circle cx="298" cy="116" r="6" fill="#FFD633" stroke="#111" strokeWidth="2" />
        </g>

        {/* Ground shadow */}
        <ellipse cx="170" cy="215" rx="140" ry="10" fill="#111" opacity="0.08" />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
    >
      {scenes[scene] || scenes.sitting}
    </motion.div>
  );
}
