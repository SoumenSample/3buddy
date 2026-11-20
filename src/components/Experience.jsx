"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download, CheckCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { experience, education, certifications } from "@/data/experience";
import profile from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-paper relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Chapter 5"
          title="OUR EXPERIENCE"
          subtitle="Where we've contributed, teams we've empowered, and how we've grown as engineers"
        />

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20 mt-10">
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-black/20 -translate-x-1/2" />

            {experience.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  className={`relative flex items-start gap-6 mb-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Card Content */}
                  <div className={`flex-1 md:w-1/2 ${isEven ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <div
                      className={`hand-drawn-card bg-white text-left ${isEven ? "md:ml-auto" : ""}`}
                      style={{ transform: `rotate(${isEven ? -0.8 : 0.8}deg)` }}
                      whileHover={{ rotate: 0 }}
                    >
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="bg-yellow border-2 border-black px-2.5 py-0.5 text-xs font-bold rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[1.5px_1.5px_0px_#111]">
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-black">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-bold text-black/60 font-[family-name:var(--font-inter)]">
                        {exp.company} &middot; {exp.location}
                      </div>

                      <p className="text-xs sm:text-sm mt-3 text-black/80 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.responsibilities && (
                        <div className="mt-3 space-y-1">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <div key={rIdx} className="flex items-start gap-1.5 text-[11.5px] text-black/70">
                              <CheckCircle size={13} className="text-black flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 mt-4 pt-2 border-t border-black/10">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="bg-paper border border-black px-2 py-0.5 text-[10px] font-bold text-black rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline node icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow border-3 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0_#111]">
                      <Briefcase size={20} className="text-black" />
                    </div>
                  </div>

                  <div className="hidden md:block flex-1 md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Education */}
          <div>
            <h3 className="font-[family-name:var(--font-caveat)] text-3xl font-bold mb-6 flex items-center gap-2 text-black">
              <GraduationCap size={28} /> Formal Education
            </h3>

            {education.map((edu) => (
              <div
                key={edu.id}
                className="hand-drawn-card bg-white"
                style={{ transform: "rotate(-0.5deg)" }}
              >
                <span className="bg-yellow border-2 border-black px-2.5 py-0.5 text-xs font-bold inline-block mb-2 shadow-[1.5px_1.5px_0px_#111]">
                  {edu.year}
                </span>
                <h4 className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-black">
                  {edu.degree}
                </h4>
                <div className="text-xs font-bold text-black/60 mt-1">
                  {edu.institution} &middot; {edu.location}
                </div>
                <p className="text-xs sm:text-sm mt-3 text-black/70">
                  {edu.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {edu.relevantSkills.map((s) => (
                    <span
                      key={s}
                      className="bg-paper border border-black/30 px-2 py-0.5 text-[10px] font-bold text-black rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-[family-name:var(--font-caveat)] text-3xl font-bold mb-6 flex items-center gap-2 text-black">
              <Award size={28} /> Verified Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.id}
                  className="hand-drawn-card bg-white flex items-center gap-4 py-3.5 px-4"
                  style={{ transform: `rotate(${idx % 2 === 0 ? 0.6 : -0.6}deg)` }}
                >
                  <div className="w-11 h-11 bg-yellow border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_#111]">
                    <Award size={20} className="text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-[family-name:var(--font-caveat)] text-xl font-bold text-black truncate">
                      {cert.name}
                    </h4>
                    <div className="text-xs text-black/60 flex items-center justify-between">
                      <span>{cert.issuer}</span>
                      <span className="font-bold text-black">{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume / Collaboration CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="bg-white border-3 border-black p-8 md:p-12 inline-block max-w-xl mx-auto shadow-[6px_6px_0px_#111]"
            style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
          >
            <span className="comic-label text-xs mb-3">WORK WITH US</span>
            <h3 className="font-[family-name:var(--font-caveat)] text-3xl sm:text-4xl font-bold mb-3 text-black">
              Want To See Our Full Credentials?
            </h3>
            <p className="text-sm text-black/70 mb-6 max-w-md mx-auto">
              Download our comprehensive portfolio deck and resume detailing our technical capabilities, architectures, and client results.
            </p>
            <a
              href={profile.resume}
              className="sketch-button"
              data-cursor="RESUME"
              download
            >
              <Download size={18} />
              Download Portfolio / Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
