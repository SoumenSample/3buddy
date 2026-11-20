"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Code2,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const skillCategories = [
  {
    title: "FRONTEND",
    icon: Layout,
    accent: "#FFD633",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux / Zustand",
      "Framer Motion",
      "HTML5 / CSS3",
      "Responsive UI",
    ],
  },
  {
    title: "BACKEND & APIs",
    icon: Server,
    accent: "#4ADE80",
    items: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "RESTful APIs",
      "GraphQL",
      "WebSockets",
      "JWT / OAuth",
      "Microservices",
    ],
  },
  {
    title: "DATABASES",
    icon: Database,
    accent: "#60A5FA",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Prisma ORM",
      "Mongoose",
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    icon: Cloud,
    accent: "#F472B6",
    items: [
      "AWS (S3, EC2)",
      "Google Cloud",
      "Docker",
      "Vercel",
      "CI/CD Pipelines",
      "Linux / Bash",
    ],
  },
  {
    title: "LANGUAGES",
    icon: Code2,
    accent: "#FBBF24",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "SQL",
      "C / C++",
    ],
  },
  {
    title: "DEV TOOLS & WORKFLOW",
    icon: Wrench,
    accent: "#A78BFA",
    items: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "Jest & Testing",
      "Figma to Code",
      "Agile / Scrum",
    ],
  },
];

const principles = [
  "Clean & Scalable Architecture",
  "High Performance & SEO",
  "Type-Safe Codebases",
  "Pixel-Perfect UI & Motion",
  "Comprehensive Code Reviews",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-paper relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Chapter 4"
          title="OUR TECH ARSENAL"
          subtitle="The tools, languages, and frameworks we use to turn concepts into high-performance web products"
        />

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const tilt = idx % 2 === 0 ? -0.8 : 0.8;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="hand-drawn-card bg-white flex flex-col justify-between"
                style={{ transform: `rotate(${tilt}deg)` }}
                whileHover={{ rotate: 0, scale: 1.02 }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b-2 border-black/15 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] flex items-center justify-center shadow-[2px_2px_0px_#111]"
                        style={{ backgroundColor: cat.accent }}
                      >
                        <Icon size={18} className="text-black" />
                      </div>
                      <h3 className="font-extrabold text-sm sm:text-base tracking-wide text-black font-[family-name:var(--font-inter)]">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-black/40">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-bold text-black bg-paper border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[1.5px_1.5px_0px_#111] hover:bg-yellow transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* How We Work / Principles banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 p-6 bg-white border-3 border-black shadow-[5px_5px_0px_#111]"
          style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span className="comic-label text-xs mb-2">HOW WE WORK</span>
              <h4 className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-bold text-black">
                Engineering Standards We Live By
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {principles.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow/30 border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] text-xs font-bold text-black shadow-[2px_2px_0px_#111]"
                >
                  <CheckCircle2 size={14} className="text-black" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
