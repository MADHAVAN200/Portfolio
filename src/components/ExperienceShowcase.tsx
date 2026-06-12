import React, { useState } from "react";
import { internships } from "../data";
import {
  Calendar,
  Briefcase,
  ChevronRight,
  Zap,
  Blocks,
  ExternalLink,
  Globe,
  Smartphone
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ExperienceShowcase() {
  const [activeInternship, setActiveInternship] = useState(0);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 relative overflow-hidden bg-gray-50/50 dark:bg-black/30 border-t border-gray-100 dark:border-white/5"
    >
      {/* Visual background lights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.02] dark:bg-blue-500/[0.01] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/[0.02] dark:bg-indigo-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold font-sans tracking-wide text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1.5 mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Professional History
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display">
            Enterprise Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Formulating context-aware generative AI pipelines, optimizing cloud infrastructure topologies, and shipping scalable full-stack applications.
          </p>
        </div>

        {/* Master Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Vertical Tab Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-4 lg:pb-0 scrollbar-none"
          >
            {internships.map((internship, idx) => {
              const isActive = activeInternship === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveInternship(idx)}
                  className={`flex-none lg:w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer outline-hidden relative ${
                    isActive
                      ? "bg-white dark:bg-zinc-950 border-blue-500/40 dark:border-blue-500/30 shadow-md"
                      : "bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-zinc-900/40 text-gray-500"
                  }`}
                >
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
                          : "bg-gray-100 dark:bg-zinc-900 border-gray-200/50 dark:border-zinc-800 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      <Blocks className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-sans font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase">
                        {internship.duration}
                      </span>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5 truncate">
                        {internship.company}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform hidden lg:block opacity-40 ${isActive ? "translate-x-1 opacity-100 text-blue-500" : ""}`} />
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Right Core Detail Panel (Bento Layout) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-8 min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInternship}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="bg-white/40 dark:bg-zinc-900/40 border border-gray-200/50 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-xl glass-panel relative overflow-visible"
              >
                {/* Visual Accent Glow */}
                <div className="absolute -top-1/4 -right-1/4 w-72 h-72 bg-blue-500/[0.03] dark:bg-blue-500/[0.015] rounded-full blur-[80px] pointer-events-none" />

                {/* Sub-Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-gray-200/40 dark:border-zinc-800/60">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-semibold font-sans px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/15">
                        {internships[activeInternship].domain}
                      </span>
                      <span className="text-[11px] font-semibold font-sans px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-400 border border-zinc-200/30 dark:border-zinc-700/30">
                        Internship Appointment
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-3 font-display tracking-tight">
                      {internships[activeInternship].role}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-sans font-medium">
                      <span className="flex items-center gap-1.5 text-gray-800 dark:text-gray-300 font-semibold">
                        <Briefcase className="w-4 h-4 text-blue-500" /> {internships[activeInternship].company}
                      </span>
                      <span className="text-gray-300 dark:text-zinc-600 hidden sm:inline">&bull;</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-emerald-500" /> {internships[activeInternship].duration}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Main Content Breakdown - Clean 2 Column Bento Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mt-6">
                  
                  {/* LEFT COLUMN: Summary / Mandate, Stack, Deliverables */}
                  <div className="xl:col-span-5 space-y-6">
                    
                    {/* Executive Summary */}
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-blue-500/[0.03] to-indigo-500/[0.01] dark:from-blue-500/[0.015] dark:to-transparent border border-blue-500/10">
                      <h5 className="text-[10px] font-bold font-sans text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1.5">
                        Core Objective & Mandate
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-zinc-300 leading-relaxed font-sans italic">
                        "{internships[activeInternship].summary}"
                      </p>
                    </div>

                    {/* Technologies Capsule Matrix */}
                    <div>
                      <h4 className="text-[10px] font-bold font-sans text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2.5">
                        Technical Stack Leveraged
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {internships[activeInternship].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-zinc-800/40 text-neutral-800 dark:text-neutral-300 border border-neutral-200/40 dark:border-zinc-800/50 font-mono font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Live Production Links if available */}
                    {internships[activeInternship].links && (
                      <div className="pt-4 border-t border-gray-200/45 dark:border-zinc-800/45">
                        <h4 className="text-[10px] font-bold font-sans text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-blue-500" /> Active Deliverables
                        </h4>
                        <div className="flex flex-col gap-2">
                          {internships[activeInternship].links.map((link, idx) => {
                            const isMobileStore = link.type === "appstore" || link.type === "playstore";
                            const Icon = isMobileStore ? Smartphone : Globe;
                            return (
                              <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-2.5 rounded-lg bg-blue-500/[0.02] dark:bg-blue-500/[0.01] hover:bg-blue-500/10 dark:hover:bg-blue-500/10 border border-blue-500/10 hover:border-blue-500/25 transition-all text-xs text-blue-600 dark:text-blue-400 font-semibold group"
                              >
                                <span className="flex items-center gap-2 truncate">
                                  <Icon className="w-3.5 h-3.5 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                                  <span className="truncate">{link.label}</span>
                                </span>
                                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN: Key Metrics Grid & Accomplishments List Cards */}
                  <div className="xl:col-span-7 space-y-6">
                    
                    {/* Key Business & KPI Metrics */}
                    <div>
                      <h4 className="text-[10px] font-bold font-sans text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3.5">
                        Measurable Quantified Performance
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(internships[activeInternship].metrics).map(([key, val]) => (
                          <div
                            key={key}
                            className="p-3 rounded-xl bg-gray-50/70 dark:bg-zinc-950/60 border border-gray-150 dark:border-zinc-800 text-center hover:border-blue-500/15 transition-all animate-fade-in"
                          >
                            <span className="block text-lg sm:text-xl font-black text-blue-600 dark:text-blue-400 font-display tracking-tight whitespace-nowrap">
                              {val}
                            </span>
                            <span className="block text-[8px] sm:text-[9px] font-bold uppercase tracking-wide text-gray-500 dark:text-zinc-500 mt-1 font-mono break-words leading-tight">
                              {key.replace(/_/g, " ")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Accomplishments list details */}
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold font-sans text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                        Core Implementations & Deliverables
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {internships[activeInternship].details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-3.5 rounded-xl bg-white dark:bg-zinc-950/20 border border-gray-200/40 dark:border-zinc-800/60 hover:border-blue-500/15 dark:hover:border-zinc-700/50 hover:shadow-xs transition-all relative group flex gap-3 text-left"
                          >
                            <div className="w-6 h-6 rounded-md bg-blue-500/5 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono text-[10px] font-extrabold shrink-0 group-hover:scale-105 transition-all">
                              0{dIdx + 1}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-300 leading-relaxed font-sans pt-0.5">
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

