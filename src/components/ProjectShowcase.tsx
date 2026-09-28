import React, { useState, useEffect, useRef } from "react";
import { projects, ProjectItem } from "../data";
import {
  Github,
  Globe,
  TrendingUp,
  X,
  ArrowRight,
  Apple,
  Smartphone,
  Play,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function ProjectVideoBanner({
  video,
  title,
  onClick,
}: {
  video?: string;
  title: string;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [video]);

  return (
    <div
      onClick={onClick}
      className="relative w-full aspect-video bg-black overflow-hidden cursor-pointer group/thumb border-b border-gray-100/80 dark:border-zinc-800"
    >
      {video ? (
        <video
          key={video}
          ref={videoRef}
          src={video}
                    muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-103"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-zinc-950" />
      )}
    </div>
  );
}

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

  const openProjectDetails = (slug: string) => {
    setSelectedSlug(slug);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-12 sm:py-16 relative overflow-hidden bg-white dark:bg-[#050505]"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Full-width container from left to right */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white font-display">
            Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Each project includes a full video walkthrough and a detailed case study. Click any card to explore.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                filterCategory === cat
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-950 border-gray-900 dark:border-white shadow-md scale-102"
                  : "bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border-gray-200/60 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-2 Format: 2-Column Responsive Grid across full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            const isSingle = filteredProjects.length === 1 || (filteredProjects.length % 2 === 1 && idx === filteredProjects.length - 1);
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => openProjectDetails(project.slug)}
                className={`group flex flex-col bg-white dark:bg-[#0c0c10] border border-gray-200/80 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer select-none ${
                  isSingle ? "col-span-1 md:col-span-2" : ""
                }`}
              >
                {/* Top: Clean Running Video Thumbnail (Pure video, no overlays) */}
                <ProjectVideoBanner
                  video={project.video}
                                    title={project.title}
                  onClick={() => openProjectDetails(project.slug)}
                />

                {/* Bottom: Card Body & Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      className="text-lg sm:text-xl font-semibold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display leading-snug"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal leading-relaxed font-sans line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-poppins font-medium bg-blue-50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="text-[10px] font-poppins font-normal text-gray-400 dark:text-zinc-500 self-center">
                        +{project.tech.length - 6} more
                      </span>
                    )}
                  </div>

                  {/* Quantitative Metric Counters Mini-Grid */}
                  <div className="grid grid-cols-3 gap-2.5 py-2">
                    {Object.entries(project.stats).slice(0, 3).map(([key, val]) => (
                      <div
                        key={key}
                        className="p-2.5 rounded-xl bg-gray-50/80 dark:bg-zinc-950/70 border border-gray-150 dark:border-zinc-800 text-center flex flex-col justify-center min-w-0"
                      >
                        <span className="block text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 leading-tight whitespace-pre-line truncate">
                          {String(val)}
                        </span>
                        <span className="block text-[8px] sm:text-[9px] uppercase font-poppins font-normal tracking-wider text-gray-500 dark:text-zinc-400 mt-1 truncate">
                          {key.replace(/_/g, " ")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-gray-100 dark:border-zinc-800">
                    {/* Primary Trigger Button: Opens right sidebar with video */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectDetails(project.slug);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium shadow-sm transition-all hover:scale-102 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Video &amp; Details</span>
                    </button>

                    {/* External links */}
                    <div className="flex items-center gap-2">

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-250 dark:border-zinc-800 bg-gray-50/80 dark:bg-zinc-900/60 text-xs font-semibold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all hover:scale-102"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5 shrink-0" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 px-3 py-2 rounded-xl border border-blue-200 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-100/50 dark:hover:bg-blue-950/40 transition-all hover:scale-102"
                        title="Live Application Demo"
                      >
                        <Globe className="w-3.5 h-3.5 shrink-0" />
                        <span className="hidden sm:inline">Live App</span>
                      </a>
                    )}

                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 px-2.5 py-2 rounded-xl border border-green-200 dark:border-green-900/40 bg-green-50/50 dark:bg-green-950/20 text-xs font-semibold text-green-600 dark:text-green-400 transition-all hover:scale-102"
                        title="Google Play Store"
                      >
                        <Smartphone className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    )}

                    {project.appStoreLink && (
                      <a
                        href={project.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 px-2.5 py-2 rounded-xl border border-indigo-200 dark:border-indigo-900/40 bg-indigo-50/50 dark:bg-indigo-950/20 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-all hover:scale-102"
                        title="Apple App Store"
                      >
                        <Apple className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ); })}
        </div>
      </div>

      {/* Right Sidebar Popup Drawer with Embedded Video & Deep Specs */}
      <AnimatePresence>
        {activeProject && (
          <div 
            className="fixed inset-0 z-[120] bg-gray-900/60 dark:bg-black/75 backdrop-blur-xs flex justify-end transition-opacity animate-in fade-in duration-300"
            onClick={() => setSelectedSlug(null)}
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="bg-white dark:bg-[#0b0b0e] w-full max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-screen border-l border-gray-200/80 dark:border-zinc-800 shadow-3xl overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sidebar Header Sticky */}
              <div className="sticky top-0 bg-white/95 dark:bg-[#0b0b0e]/95 py-4 px-6 flex justify-between items-center z-25 backdrop-blur-md shrink-0">
                <div className="min-w-0 pr-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-950 dark:text-white font-display truncate">
                    {activeProject.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-800 bg-gray-50 hover:bg-gray-100 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-gray-800 dark:text-zinc-200 text-xs font-semibold shadow-xs transition-all hover:scale-102"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5 shrink-0" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {activeProject.liveLink && (
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all hover:scale-102"
                      title="Live Application Demo"
                    >
                      <Globe className="w-3.5 h-3.5 shrink-0" />
                      <span>Live App</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedSlug(null)}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-600 dark:text-gray-300 transition-all cursor-pointer hover:scale-105"
                    title="Close Sidebar (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sidebar Body Scrollable */}
              <div className="p-4 sm:p-5 overflow-y-auto space-y-5 flex-1">
                {/* 1. FEATURED FULL VIDEO WALKTHROUGH AT TOP */}
                {activeProject.video && (
                  <div className="space-y-3">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-gray-200 dark:border-zinc-800">
                      <video
                        key={activeProject.video}
                        src={activeProject.video}
                                                controls
                        autoPlay
                        playsInline
                        preload="auto"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* 2. Executive Project Brief */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400">
                    Overview
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                    {activeProject.detailedDescription}
                  </p>
                </div>

                {/* 3. Grid: Features & Architecture */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Features Implemented */}
                  <div className="lg:col-span-7 space-y-3.5">
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400">
                      Key Features
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Architecture & Tech stats */}
                  <div className="lg:col-span-5 space-y-4 bg-gray-50 dark:bg-zinc-900/40 border border-gray-200/70 dark:border-zinc-800 rounded-xl p-5">
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400">
                      Architecture
                    </h4>
                    <div className="space-y-2.5">
                      {activeProject.architecture.map((layer, lIdx) => (
                        <div key={lIdx} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-300 flex items-center justify-center text-[10px] font-poppins font-bold shrink-0">
                            {lIdx + 1}
                          </span>
                          <span className="text-xs font-sans text-gray-800 dark:text-zinc-200 font-medium">
                            {layer}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-gray-200/60 dark:border-zinc-800">
                      <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-2">
                        Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(activeProject.stats).map(([k, v]) => (
                          <div key={k} className="p-2.5 text-center rounded-lg bg-white dark:bg-zinc-900/80 border border-gray-200/50 dark:border-zinc-800 shadow-xs flex flex-col justify-center min-w-0">
                            <span className="block text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 break-words leading-tight whitespace-pre-line">
                              {String(v)}
                            </span>
                            <span className="block text-[8px] font-poppins font-normal tracking-wide text-gray-500 dark:text-zinc-400 capitalize mt-1 leading-tight">
                              {keyNameToTitle(k)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Operational & ML Workflow Pipeline */}
                <div>
                  <h4 className="text-xs font-semibold font-display uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-5">
                    Workflow
                  </h4>
                  <div className="relative pl-6 space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500/60 before:to-gray-300 dark:before:to-zinc-800">
                    {activeProject.workflow.map((step, idx) => {
                      const words = step.split(" ");
                      const titlePrefix = words.slice(0, 2).join(" ");
                      const remainingText = words.slice(2).join(" ");

                      return (
                        <div
                          key={idx}
                          className="relative group flex items-start gap-4 transition-all duration-300"
                        >
                          <div className="absolute -left-[19px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-white dark:bg-[#0c0c0f] group-hover:border-indigo-500 group-hover:scale-110 transition-all z-10" />

                          <div className="flex-1 p-3.5 rounded-xl border border-gray-150 dark:border-zinc-800 bg-gray-50/50 dark:bg-white/[0.015] hover:bg-white dark:hover:bg-zinc-900/40 hover:border-blue-500/30 transition-all duration-300">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-poppins font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                Phase 0{idx + 1}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700" />
                              <span className="text-[9px] font-poppins text-gray-400 uppercase font-normal">Automated Pipeline</span>
                            </div>
                            <p className="text-xs text-gray-650 dark:text-gray-300 leading-relaxed font-sans font-normal">
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

                {/* 5. Challenges and Deliverables */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 dark:border-red-900/30 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-1.5 font-display">
                      <AlertTriangle className="w-3.5 h-3.5" /> Challenges
                    </h4>
                    <ul className="space-y-1.5">
                      {activeProject.challenges.map((chal, cIdx) => (
                        <li key={cIdx} className="text-xs text-gray-700 dark:text-zinc-200 flex items-start gap-1.5 leading-relaxed font-normal">
                          <span className="text-red-500 shrink-0 select-none">&bull;</span>
                          <span>{chal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 dark:border-emerald-900/30 space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-display">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Outcomes
                    </h4>
                    <ul className="space-y-1.5">
                      {activeProject.outcomes.map((out, oIdx) => (
                        <li key={oIdx} className="text-xs text-gray-700 dark:text-zinc-200 flex items-start gap-1.5 leading-relaxed">
                          <span className="text-emerald-500 shrink-0 select-none">&bull;</span>
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar Footer Sticky */}
              <div className="px-4 sm:px-5 py-3 border-t border-gray-150 dark:border-zinc-800 bg-gray-50/90 dark:bg-[#0b0b0e]/95 flex flex-wrap items-center justify-between gap-2 text-xs shrink-0">
                <div className="flex flex-wrap items-center gap-1.5">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-poppins font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md border border-blue-200/70 dark:border-blue-800/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  
                  {activeProject.liveLink && (
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold transition-all hover:scale-102 shadow-xs"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Project</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function keyNameToTitle(str: string): string {
  return str.replace(/_/g, " ");
}
