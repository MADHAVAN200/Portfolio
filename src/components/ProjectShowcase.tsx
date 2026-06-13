import React, { useState, useEffect } from "react";
import { projects } from "../data";
import {
  Code,
  Github,
  Globe,
  Maximize2,
  Minimize2,
  Layers,
  Sparkles,
  Trophy,
  AlertTriangle,
  Flame,
  CheckCircle,
  TrendingUp,
  X,
  Workflow,
  ArrowRight,
  Apple,
  Smartphone
} from "lucide-react";
import { motion } from "motion/react";

export default function ProjectShowcase() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSlug(null);
      }
    };
    if (selectedSlug) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedSlug]);

  const activeProject = projects.find((p) => p.slug === selectedSlug);

  const categories = ["All", "AI & Deep Tech Solutions", "Enterprise & Full-Stack Systems"];

  const filteredProjects =
    filterCategory === "All"
      ? projects
      : projects.filter((p) => p.category === filterCategory);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 relative overflow-hidden bg-white dark:bg-[#050505]"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display">
            Showcase of Engineering Depth
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Real deployments designed with meticulous research, rigorous architecture pipelines, and proven field validation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                filterCategory === cat
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-950 border-gray-900 dark:border-white shadow"
                  : "bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border-gray-200/50 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-3xl lg:max-w-4xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col sm:flex-row gap-5 bg-white/60 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800 rounded-lg p-5 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-0.5 glass-panel relative"
            >
              {/* Left Column: Details */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-mono bg-blue-100/50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-md border border-blue-200/30 dark:border-blue-900/40">
                      {project.category}
                    </span>
                    <span className="text-gray-300 dark:text-gray-700 text-xs font-normal">•</span>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">
                      <TrendingUp className="w-3 h-3 text-indigo-500" />
                      <span>Validated Metrics</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech & Actions wrapper */}
                <div className="flex flex-col gap-3.5 pt-2">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono bg-gray-50 dark:bg-[#1a1a1f] border border-gray-100 dark:border-zinc-800 text-gray-600 dark:text-zinc-300 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action row (labeled buttons for better interpretation) */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 text-[10px] font-sans font-semibold text-gray-800 dark:text-white hover:text-gray-950 dark:hover:text-white transition-all hover:bg-gray-200 dark:hover:bg-zinc-700 hover:scale-102 shadow-xs"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5 shrink-0" />
                        <span>GitHub Link</span>
                      </a>
                    )}
                    {"liveLink" in project && project.liveLink && (
                      <a
                        href={project.liveLink as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-200 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20 text-[10px] font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all hover:bg-blue-100/50 dark:hover:bg-blue-950/40 hover:scale-102"
                        title="Live Application Demo"
                      >
                        <Globe className="w-3.5 h-3.5 shrink-0" />
                        <span>App Link</span>
                      </a>
                    )}
                    {"playStoreLink" in project && project.playStoreLink && (
                      <a
                        href={project.playStoreLink as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-green-200 dark:border-green-900/40 bg-green-50/55 dark:bg-green-950/15 text-[10px] font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-all hover:scale-102"
                        title="Google Play Store App"
                      >
                        <Smartphone className="w-3.5 h-3.5 shrink-0" />
                        <span>Play Store Link</span>
                      </a>
                    )}
                    {"appStoreLink" in project && project.appStoreLink && (
                      <a
                        href={project.appStoreLink as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-900/40 bg-indigo-50/55 dark:bg-indigo-950/15 text-[10px] font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all hover:scale-102"
                        title="Apple App Store App"
                      >
                        <Apple className="w-3.5 h-3.5 shrink-0" />
                        <span>App Store Link</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedSlug(project.slug)}
                      className="text-xs font-semibold text-blue-650 dark:text-blue-400 flex items-center gap-1 hover:underline cursor-pointer transition-colors"
                    >
                      Deep Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Quantitative Stats Panel */}
              <div className="sm:w-44 shrink-0 flex sm:flex-col justify-around sm:justify-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-zinc-950/60 border border-gray-100 dark:border-zinc-800 text-center">
                {Object.entries(project.stats).slice(0, 2).map(([key, val]) => (
                  <div key={key} className="flex-1 sm:flex-none">
                    <span className="block text-base font-black text-blue-600 dark:text-blue-400">{val}</span>
                    <span className="block text-[8px] uppercase font-mono tracking-wider text-gray-450 dark:text-gray-500 mt-0.5 leading-snug">
                      {key.replace(/_/g, " ")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Drawer style Sidebar deep study */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-[100] bg-gray-900/40 dark:bg-black/60 backdrop-blur-xs flex justify-end transition-opacity animate-in fade-in duration-300"
          onClick={() => setSelectedSlug(null)}
        >
          <div 
            className="bg-white dark:bg-[#0d0d10] w-full max-w-full md:max-w-xl lg:max-w-3xl h-screen border-l border-gray-200/80 dark:border-zinc-800 shadow-3xl overflow-hidden flex flex-col transform animate-in slide-in-from-right duration-350 ease-out relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar header sticky */}
            <div className="sticky top-0 bg-white/95 dark:bg-[#0d0d10]/95 border-b border-gray-150 dark:border-zinc-800 py-4 px-6 flex justify-between items-start z-20 backdrop-blur-md">
              <div className="space-y-2.5">
                <div>
                  <span className="text-[9px] font-display font-semibold uppercase tracking-wider text-gray-500">{activeProject.category} Case Study</span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white font-display mt-0.5">
                    {activeProject.title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 text-[11px] font-medium text-gray-800 dark:text-white hover:text-gray-950 dark:hover:text-white transition-all hover:bg-gray-200 dark:hover:bg-zinc-700 hover:scale-102"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5 shrink-0" />
                      <span>GitHub Link</span>
                    </a>
                  )}
                  {"liveLink" in activeProject && activeProject.liveLink && (
                    <a
                      href={activeProject.liveLink as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-zinc-850 bg-blue-50/50 dark:bg-blue-950/20 text-[11px] font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all hover:scale-102"
                      title="Live Application Demo"
                    >
                      <Globe className="w-3.5 h-3.5 text-gray-800 dark:text-zinc-200 shrink-0" />
                      <span>App Link</span>
                    </a>
                  )}
                  {"playStoreLink" in activeProject && activeProject.playStoreLink && (
                    <a
                      href={activeProject.playStoreLink as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-green-200 dark:border-zinc-850 bg-green-50/50 dark:bg-green-950/20 text-[11px] font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-all hover:scale-102"
                      title="Google Play Store App"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-gray-800 dark:text-zinc-200 shrink-0" />
                      <span>Play Store Link</span>
                    </a>
                  )}
                  {"appStoreLink" in activeProject && activeProject.appStoreLink && (
                    <a
                      href={activeProject.appStoreLink as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-indigo-200 dark:border-zinc-850 bg-indigo-50/50 dark:bg-indigo-950/20 text-[11px] font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all hover:scale-102"
                      title="Apple App Store App"
                    >
                      <Apple className="w-3.5 h-3.5 text-gray-800 dark:text-zinc-200 shrink-0" />
                      <span>App Store Link</span>
                    </a>
                  )}
                </div>
              </div>
              <button
                onClick={() => setSelectedSlug(null)}
                className="p-1 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-600 dark:text-gray-300 transition-all cursor-pointer hover:scale-105"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal body scrollable */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Intro summary */}
              <div>
                <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-2">Project Brief</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                  {activeProject.detailedDescription}
                </p>
              </div>

              {/* Grid KPI and details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Interactive KPIs / Features list */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400">Features Implemented</h4>
                  <ul className="space-y-3">
                    {activeProject.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-2 text-xs text-gray-650 dark:text-gray-300 leading-relaxed">
                        <span className="text-gray-405 dark:text-zinc-500 shrink-0 select-none">&bull;</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Architecture & Tech stats */}
                <div className="lg:col-span-5 space-y-4 bg-gray-50 dark:bg-zinc-900/35 border border-gray-150 dark:border-zinc-800 rounded-lg p-5">
                  <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-2">
                    Pipeline Architecture
                  </h4>
                  <div className="space-y-3.5">
                    {activeProject.architecture.map((layer, lIdx) => (
                      <div key={lIdx} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                          {lIdx + 1}
                        </span>
                        <span className="text-xs font-sans text-gray-750 dark:text-zinc-200">{layer}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-200/55 dark:border-zinc-800/80">
                    <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-2">Metrics Validated</h4>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-2">
                      {Object.entries(activeProject.stats).map(([k, v]) => (
                        <div key={k} className="p-2.5 text-center rounded-lg bg-white dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-850 shadow-xs flex flex-col justify-center min-w-0 h-full">
                          <span className="block text-xs sm:text-sm font-black text-blue-600 dark:text-blue-400 break-words leading-tight whitespace-pre-line" title={String(v)}>
                            {String(v)}
                          </span>
                          <span className="block text-[8px] font-mono tracking-wide text-gray-500 dark:text-zinc-400 capitalize mt-1.5 whitespace-normal leading-normal">
                            {k.replace(/_/g, " ")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated workflow step pipeline visual */}
              <div>
                <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-5">
                  Operational & ML Workflow Pipeline
                </h4>
                <div className="relative pl-6 space-y-5 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500/60 before:to-gray-250 dark:before:to-zinc-800">
                  {activeProject.workflow.map((step, idx) => {
                    const words = step.split(" ");
                    const titlePrefix = words.slice(0, 2).join(" ");
                    const remainingText = words.slice(2).join(" ");

                    return (
                      <div
                        key={idx}
                        className="relative group flex items-start gap-4 transition-all duration-300"
                      >
                        {/* Centered Bullet Node */}
                        <div className="absolute -left-[19px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-white dark:bg-[#0c0c0f] group-hover:border-indigo-500 group-hover:scale-110 transition-all z-10" />

                        {/* Step content panel */}
                        <div className="flex-1 p-4 rounded-lg border border-gray-150 dark:border-zinc-800 bg-gray-50/50 dark:bg-white/[0.015] hover:bg-white dark:hover:bg-zinc-900/40 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-sm transition-all duration-300">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                              Phase 0{idx + 1}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700" />
                            <span className="text-[9px] font-mono text-gray-400 uppercase">Automated Pipeline</span>
                          </div>
                          <p className="text-xs text-gray-650 dark:text-gray-300 leading-relaxed font-sans">
                            <span className="font-semibold text-gray-950 dark:text-white mr-1">
                              {titlePrefix}
                            </span>
                            {remainingText}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Challenges and outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-500/5 dark:bg-zinc-900/35 rounded-lg border border-red-500/10 dark:border-zinc-800 p-5 animate-in fade-in duration-300">
                <div>
                  <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-red-700 dark:text-red-400 mb-2.5">
                    Technical Hurdles
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.challenges.map((chal, cIdx) => (
                      <li key={cIdx} className="text-xs text-gray-700 dark:text-zinc-200 flex items-start gap-1.5 leading-relaxed">
                        <span className="text-red-500 dark:text-red-400 self-start shrink-0 select-none">&bull;</span>
                        <span>{chal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-red-200/50 dark:border-zinc-800 pt-4 md:pt-0 md:pl-5">
                  <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2.5">
                    Deliverables & Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {activeProject.outcomes.map((out, oIdx) => (
                      <li key={oIdx} className="text-xs text-gray-700 dark:text-zinc-200 flex items-start gap-1.5 leading-relaxed">
                        <span className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5 select-none">&bull;</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
