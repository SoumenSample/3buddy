"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Star,
  Code2,
  Globe,
  Info,
  X,
  Package,
  Store,
  Wrench,
  Users,
  ShoppingBag,
  Pill,
  UtensilsCrossed,
  Stethoscope,
  ArrowRight,
  Layers,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import projects, { projectCategories } from "@/data/projects";

const SOFTWARE_ICONS = {
  Package,
  Store,
  Wrench,
  Users,
  ShoppingBag,
  Pill,
  UtensilsCrossed,
  Stethoscope,
};

function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!mounted || !project) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white border-4 border-black w-full max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto shadow-[10px_10px_0px_#111] p-5 sm:p-8 relative my-auto"
        style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 bg-yellow hover:bg-white border-2.5 border-black rounded-full flex items-center justify-center font-bold text-black shadow-[3px_3px_0px_#111] transition-all hover:scale-110 active:scale-95 cursor-pointer z-20"
          aria-label="Close modal"
          data-cursor="CLOSE"
        >
          <X size={20} />
        </button>

        {/* Modal Browser Mock Header */}
        <div className="border-2 border-black bg-paper mb-6 overflow-hidden shadow-[3px_3px_0px_#111] rounded-[8px]">
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-yellow/40 border-b-2 border-black">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black inline-block" />
            </div>
            <div className="text-[11px] sm:text-xs font-mono font-bold text-black/75 px-2 truncate">
              3buddy://case-study/{project.name.toLowerCase().replace(/\s+/g, "-")}
            </div>
            <div className="w-10" />
          </div>

          {project.image && (
            <div className="w-full h-64 sm:h-80 md:h-[400px] overflow-hidden bg-neutral-900 border-b-2 border-black">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div className="space-y-4">
          <div>
            <div className="inline-block bg-yellow border border-black px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase mb-2 shadow-[1.5px_1.5px_0px_#111]">
              Case Study & Details
            </div>
            <h3 className="font-[family-name:var(--font-caveat)] text-3xl sm:text-4xl font-extrabold text-black leading-tight">
              {project.name}
            </h3>
            <p className="text-sm text-black/80 mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-yellow/30 border border-black px-2.5 py-0.5 text-xs font-bold text-black rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Problem & Solution */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {project.problem && (
                <div className="p-3 bg-red-50 border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[2px_2px_0px_#111]">
                  <strong className="block text-red-700 font-extrabold uppercase text-[11px] mb-1 font-mono">
                    The Problem:
                  </strong>
                  <span className="text-black/85 leading-relaxed">{project.problem}</span>
                </div>
              )}
              {project.solution && (
                <div className="p-3 bg-green-50 border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[2px_2px_0px_#111]">
                  <strong className="block text-green-700 font-extrabold uppercase text-[11px] mb-1 font-mono">
                    Our Solution:
                  </strong>
                  <span className="text-black/85 leading-relaxed">{project.solution}</span>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="p-4 bg-paper border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[2px_2px_0px_#111]">
              <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-black/70 mb-2">
                Key Highlights & Capabilities:
              </div>
              <ul className="space-y-1.5 text-xs text-black/85">
                {project.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold shrink-0">✦</span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Software Suite Breakdown (if applicable) */}
          {project.softwareTypes && project.softwareTypes.length > 0 && (
            <div className="pt-3 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-black/10 pb-2 gap-1">
                <div>
                  <h4 className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-extrabold text-black">
                    8 Modular Management Systems Included
                  </h4>
                  <p className="text-xs text-black/70">
                    Deploy any software as a standalone solution or combine into an integrated ERP.
                  </p>
                </div>
                <span className="bg-yellow border border-black px-2 py-0.5 text-[10px] font-mono font-extrabold rounded self-start sm:self-auto shadow-[1px_1px_0px_#111]">
                  Customizable Workflows
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.softwareTypes.map((item) => {
                  const IconComponent = SOFTWARE_ICONS[item.icon] || Package;
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 bg-paper/70 border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[2px_2px_0px_#111] flex flex-col justify-between hover:bg-yellow/15 transition-all"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-8 h-8 rounded bg-yellow border-1.5 border-black flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#111]">
                            <IconComponent size={16} className="text-black" />
                          </div>
                          <div className="min-w-0">
                            <h5 className="font-bold text-xs sm:text-sm text-black leading-tight truncate">
                              {item.title}
                            </h5>
                            <span className="text-[10px] font-mono text-black/60 uppercase">
                              {item.tag}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-black/75 mb-2 leading-relaxed">
                          {item.description}
                        </p>

                        <ul className="space-y-1 mb-3">
                          {item.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-1.5 text-[11px] text-black/85">
                              <span className="text-green-700 font-bold shrink-0">✓</span>
                              <span className="leading-snug">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          window.dispatchEvent(
                            new CustomEvent("prefill-contact-subject", {
                              detail: item.title,
                            })
                          );
                          const el = document.getElementById("contact");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="mt-2 w-full py-1.5 px-3 bg-white hover:bg-yellow border border-black rounded text-[11px] font-mono font-bold text-black flex items-center justify-center gap-1.5 shadow-[1.5px_1.5px_0px_#111] transition-all cursor-pointer active:scale-95"
                        data-cursor="INQUIRE"
                      >
                        <span>Inquire for {item.title.replace(" System", "").replace(" Management", "")}</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t-2 border-black/10">
            <button
              onClick={onClose}
              className="sketch-button-outline text-xs py-2 px-4 cursor-pointer"
              data-cursor="CLOSE"
            >
              Close
            </button>
            {project.live && (
              <a
                href={project.live}
                onClick={(e) => {
                  if (project.live.startsWith("#")) {
                    e.preventDefault();
                    onClose();
                    window.dispatchEvent(
                      new CustomEvent("prefill-contact-subject", {
                        detail: project.name,
                      })
                    );
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                target={project.live.startsWith("#") ? "_self" : "_blank"}
                rel={project.live.startsWith("#") ? undefined : "noopener noreferrer"}
                className="sketch-button text-xs py-2 px-5 flex items-center gap-1.5"
                data-cursor={project.live.startsWith("#") ? "CONTACT" : "DEMO"}
              >
                <ExternalLink size={14} />{" "}
                {project.live.startsWith("#") ? "Request Demo (Contact Us)" : "Visit Live Project"}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

function ProjectCard({ project, onOpenDetails }) {
  const hasDetails = Boolean(
    (project.features && project.features.length > 0) ||
    project.problem ||
    project.solution
  );
  const tilt = project.id % 2 === 0 ? 0.7 : -0.7;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="hand-drawn-card bg-white flex flex-col justify-between h-full"
      style={{ transform: `rotate(${tilt}deg)` }}
      whileHover={{ rotate: 0, scale: 1.015 }}
    >
      <div>
        {/* Mock Browser/Window Header */}
        <div className="border-2 border-black bg-paper mb-4 overflow-hidden shadow-[2px_2px_0px_#111] rounded-[8px]">
          <div className="flex items-center justify-between px-3 py-2 bg-yellow/40 border-b-2 border-black">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black inline-block" />
            </div>
            <div className="text-[10px] font-mono font-bold text-black/60 truncate px-2">
              3buddy://{project.name.toLowerCase().replace(/\s+/g, "-")}
            </div>
            <div className="flex items-center gap-1">
              {project.featured && (
                <span className="bg-yellow border border-black px-1.5 py-0.5 text-[9px] font-extrabold flex items-center gap-0.5 shadow-[1px_1px_0px_#111]">
                  <Star size={9} fill="currentColor" /> FEATURED
                </span>
              )}
            </div>
          </div>

          {/* Card preview visual */}
          {project.isSoftwareSuite ? (
            <div className="p-3.5 bg-gradient-to-br from-yellow/30 via-white to-yellow/15 border-b-2 border-black">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-extrabold uppercase bg-black text-white px-2 py-0.5 rounded shadow-[1px_1px_0px_#FFD633]">
                  8-in-1 Software Suite
                </span>
                <span className="text-[10px] font-mono font-bold text-black/60">
                  Ready to Deploy
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 py-1">
                {[
                  { label: "Inventory", icon: Package },
                  { label: "Store POS", icon: Store },
                  { label: "Technician", icon: Wrench },
                  { label: "HRMS", icon: Users },
                  { label: "E-Commerce", icon: ShoppingBag },
                  { label: "Pharmacy", icon: Pill },
                  { label: "Restaurant", icon: UtensilsCrossed },
                  { label: "Clinic OPD", icon: Stethoscope },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="p-1.5 bg-white border border-black rounded shadow-[1px_1px_0px_#111] flex flex-col items-center text-center justify-center hover:bg-yellow/40 transition-colors"
                  >
                    <Icon size={14} className="text-black mb-0.5" />
                    <span className="text-[8.5px] font-mono font-extrabold text-black/90 truncate w-full">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-1.5 border-t border-black/15 flex items-center justify-between text-[10.5px] font-mono text-black/80">
                <span className="font-extrabold">✦ Modular Systems</span>
                <span className="text-black font-extrabold underline decoration-yellow decoration-2">
                  View All 8 &rarr;
                </span>
              </div>
            </div>
          ) : project.image ? (
            <div className="relative w-full overflow-hidden bg-neutral-900 group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 sm:h-52 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-[11px] font-mono font-bold bg-black/85 px-2.5 py-1 rounded border border-white/20">
                  {project.name} — live preview
                </span>
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-5 flex flex-col justify-center items-center bg-white min-h-[140px] text-center">
              <div className="w-10 h-10 rounded-full bg-yellow/40 border-2 border-black flex items-center justify-center mb-2">
                <Code2 size={20} className="text-black" />
              </div>
              <p className="text-xs text-black/70 font-mono max-w-xs font-semibold">
                {project.shortDescription}
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-[family-name:var(--font-caveat)] text-2xl sm:text-3xl font-extrabold text-black leading-tight">
              {project.name}
            </h3>
            {project.live && (
              <a
                href={project.live}
                onClick={(e) => {
                  if (project.live.startsWith("#")) {
                    e.preventDefault();
                    window.dispatchEvent(
                      new CustomEvent("prefill-contact-subject", {
                        detail: project.name,
                      })
                    );
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                target={project.live.startsWith("#") ? "_self" : "_blank"}
                rel={project.live.startsWith("#") ? undefined : "noopener noreferrer"}
                className="text-xs font-mono font-bold text-black/70 hover:text-black flex items-center gap-1 shrink-0 pt-1"
                title={project.live.startsWith("#") ? "Request demo via contact" : "Open live site"}
              >
                <Globe size={13} />
                <span className="hidden sm:inline">
                  {project.live.startsWith("#") ? "Demo" : "Live"}
                </span>
              </a>
            )}
          </div>

          <p className="text-sm text-black/80 leading-relaxed">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-yellow/30 border border-black px-2 py-0.5 text-[10.5px] font-bold text-black rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons (Details Modal Trigger & Live Demo - No Code button) */}
      <div className="flex items-center gap-2 pt-4 mt-4 border-t-2 border-black/10">
        {hasDetails && (
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="sketch-button-outline text-xs py-1.5 px-3 flex-1 justify-center items-center gap-1.5 cursor-pointer font-bold"
          >
            <Info size={13} />
            <span>{project.isSoftwareSuite ? "Explore 8 Systems" : "Details"}</span>
          </button>
        )}
        {project.live && (
          <a
            href={project.live}
            onClick={(e) => {
              if (project.live.startsWith("#")) {
                e.preventDefault();
                window.dispatchEvent(
                  new CustomEvent("prefill-contact-subject", {
                    detail: project.name,
                  })
                );
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            target={project.live.startsWith("#") ? "_self" : "_blank"}
            rel={project.live.startsWith("#") ? undefined : "noopener noreferrer"}
            className={`sketch-button text-xs py-1.5 px-3 justify-center items-center gap-1.5 ${
              hasDetails ? "flex-1" : "w-full"
            }`}
            data-cursor={project.live.startsWith("#") ? "CONTACT" : "DEMO"}
          >
            <ExternalLink size={13} />{" "}
            {project.live.startsWith("#") ? "Request Demo" : "Live Demo"}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  const featuredProject = projects.find((p) => p.featured);

  return (
    <section id="projects" className="py-20 md:py-28 bg-paper relative overflow-hidden">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Chapter 5"
          title="WHAT WE BUILD"
          subtitle="A selection of client products, SaaS platforms, and open-source projects crafted by 3buddy"
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 mt-6">
          {projectCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-extrabold tracking-wider border-2 border-black transition-all ${
                  isActive
                    ? "bg-yellow shadow-[2.5px_2.5px_0px_#111] -translate-y-0.5"
                    : "bg-white hover:bg-yellow/30 shadow-[1.5px_1.5px_0px_#111]"
                }`}
                style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Featured Project - Commented out for now as requested by user
        {activeFilter === "all" && featuredProject && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Star size={18} className="text-yellow fill-yellow" />
              <span className="font-[family-name:var(--font-caveat)] text-2xl font-bold text-black">
                Featured Case Study
              </span>
            </div>
            <ProjectCard project={featuredProject} onOpenDetails={setSelectedProject} />
          </div>
        )}
        */}

        {/* All Projects Grid - Uniform height cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="font-[family-name:var(--font-caveat)] text-2xl text-black/50">
              No projects found in this category yet!
            </p>
          </div>
        )}
      </div>

      {/* Case Study Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
