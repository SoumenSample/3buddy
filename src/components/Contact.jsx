"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, ExternalLink, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import SectionTitle from "./SectionTitle";
import DeveloperIllustration from "./DeveloperIllustration";
import profile from "@/data/profile";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const handlePrefill = (e) => {
      if (e.detail) {
        setFormData((prev) => ({
          ...prev,
          subject: `Demo Request: ${e.detail}`,
        }));

        setTimeout(() => {
          const input = document.getElementById("contact-subject");
          if (input) {
            input.focus();
          }
        }, 500);
      }
    };

    window.addEventListener("prefill-contact-subject", handlePrefill);
    return () => window.removeEventListener("prefill-contact-subject", handlePrefill);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");
    setPreviewUrl(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        if (data.previewUrl) {
          setPreviewUrl(data.previewUrl);
        }
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setSubmitStatus("error");
      setStatusMessage("An unexpected error occurred. Please check your connection or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      fullWidth: true,
    },
    {
      icon: Phone,
      label: "Direct Phone Lines",
      phones: profile.phones || [
        "+91 9800166299",
        "+91 9883756335",
        "+91 7601802441",
      ],
      value: profile.phone,
      fullWidth: true,
    },
    { icon: MapPin, label: "Location", value: profile.location, href: null, fullWidth: true },
    // GitHub, LinkedIn, Twitter hidden for now
    // { icon: GithubIcon, label: "GitHub", value: "github.com/3buddy", href: profile.github },
    // { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/company/3buddy", href: profile.linkedin },
    // { icon: TwitterIcon, label: "Twitter", value: "@3buddy", href: profile.twitter },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-paper relative overflow-hidden">
      <div className="section-divider mb-16" />

      {/* Floating decorative symbols */}
      <motion.div
        className="absolute top-24 right-10 text-4xl opacity-20 font-[family-name:var(--font-caveat)] font-bold hidden lg:block"
        animate={{ y: [-6, 6, -6], rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {"</3buddy>"}
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-10 text-3xl opacity-20 font-[family-name:var(--font-caveat)] font-bold hidden lg:block"
        animate={{ y: [6, -6, 6], rotate: [3, -3, 3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{ we: code }"}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          label="Chapter 6"
          title="LET'S BUILD SOMETHING TOGETHER"
          subtitle="Have a product in mind, need full-stack power, or want to collaborate? We'd love to chat!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_#111]"
              style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
            >
              {/* Prominent, readable sticky note badge */}
              <div className="sticky-note text-xl sm:text-2xl font-bold font-[family-name:var(--font-caveat)] inline-flex items-center gap-2 mb-6 -rotate-2 shadow-[3px_3px_0px_#111] px-4 py-2 text-black">
                <span>Send us a message!</span>
                <span className="text-xl">✍️</span>
              </div>

              {/* Status alerts */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-4 bg-green-50 border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[3px_3px_0px_#111] flex flex-col gap-1 text-black"
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-green-900">
                    <CheckCircle size={18} className="text-green-700" />
                    <span>{statusMessage}</span>
                  </div>
                  {previewUrl && (
                    <div className="mt-2 text-xs font-mono text-black/70">
                      <span>Dev preview: </span>
                      <a
                        href={previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 font-bold hover:text-blue-800"
                      >
                        View sent test email &rarr;
                      </a>
                    </div>
                  )}
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-4 bg-red-50 border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[3px_3px_0px_#111] flex items-center gap-2 text-red-900 text-sm font-semibold"
                >
                  <AlertCircle size={18} className="text-red-700 flex-shrink-0" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-extrabold uppercase tracking-wider block mb-1 font-[family-name:var(--font-inter)] text-black">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 border-2 border-black bg-paper/60 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-yellow text-sm font-medium transition-all disabled:opacity-60"
                      placeholder="Jane Doe"
                      style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-extrabold uppercase tracking-wider block mb-1 font-[family-name:var(--font-inter)] text-black">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2.5 border-2 border-black bg-paper/60 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-yellow text-sm font-medium transition-all disabled:opacity-60"
                      placeholder="jane@company.com"
                      style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider block mb-1 font-[family-name:var(--font-inter)] text-black">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 border-2 border-black bg-paper/60 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-yellow text-sm font-medium transition-all disabled:opacity-60"
                    placeholder="New Project Inquiry / Product Build"
                    style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                  />
                </div>

                <div>
                  <label className="text-xs font-extrabold uppercase tracking-wider block mb-1 font-[family-name:var(--font-inter)] text-black">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 border-2 border-black bg-paper/60 focus:bg-white focus:border-black focus:outline-none focus:ring-2 focus:ring-yellow text-sm font-medium transition-all resize-none disabled:opacity-60"
                    placeholder="Tell us about your project, goals, and timeline..."
                    style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sketch-button w-full justify-center text-sm py-3 disabled:opacity-75 disabled:cursor-not-allowed"
                  data-cursor={isSubmitting ? "SENDING" : "SEND"}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2 text-black font-extrabold">
                      <Loader2 size={18} className="animate-spin text-black" />
                      SENDING MESSAGE...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 text-black font-extrabold">
                      SEND MESSAGE <Send size={16} />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Illustration */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Waving team illustration card */}
            <div
              className="bg-white border-3 border-black p-4 shadow-[5px_5px_0px_#111] flex justify-center"
              style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
            >
              <DeveloperIllustration scene="waving" className="w-full max-w-[280px] h-auto" />
            </div>

            {/* Contact links cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const isPhoneCard = Boolean(info.phones);
                const Wrapper = info.href && !isPhoneCard ? "a" : "div";
                return (
                  <Wrapper
                    key={info.label}
                    {...(info.href && !isPhoneCard
                      ? { href: info.href, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`flex items-start gap-3 bg-white border-2 border-black p-3 hover:bg-yellow/15 transition-all shadow-[2.5px_2.5px_0px_#111] group ${
                      info.fullWidth || isPhoneCard ? "sm:col-span-2" : ""
                    }`}
                    style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}
                    data-cursor={info.label.toUpperCase()}
                  >
                    <div className="w-8 h-8 bg-yellow border-2 border-black flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors mt-0.5">
                      <Icon size={14} className="text-black" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-black/50 uppercase tracking-wider font-extrabold">
                        {info.label}
                      </div>
                      {isPhoneCard ? (
                        <div className="flex flex-wrap items-center gap-2 mt-1.5">
                          {info.phones.map((phoneNum) => (
                            <a
                              key={phoneNum}
                              href={`tel:${phoneNum.replace(/\s+/g, "")}`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-paper hover:bg-yellow border border-black px-2.5 py-1 rounded shadow-[1.5px_1.5px_0px_#111] transition-colors"
                              title={`Call ${phoneNum}`}
                            >
                              <Phone size={11} className="text-black" />
                              <span>{phoneNum}</span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="text-xs sm:text-sm font-bold text-black break-all sm:break-normal mt-0.5">
                          {info.value}
                        </div>
                      )}
                    </div>
                    {info.href && !isPhoneCard && (
                      <ExternalLink
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                      />
                    )}
                  </Wrapper>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
