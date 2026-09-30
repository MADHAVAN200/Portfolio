import React, { useState, useEffect, useRef } from "react";
import { projects, ProjectItem } from "../data";
import ProjectAutomatorPopup from "./ProjectAutomatorPopup";
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    const vid = videoRef.current;
    if (!el || !vid) return;

    const handleCanPlay = () => {
      vid.play().catch(() => { });
    };
    vid.addEventListener("canplay", handleCanPlay);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vid.play().catch(() => { });
          } else {
            vid.pause();
          }
        });
      },
      { rootMargin: "300px 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => {
      vid.removeEventListener("canplay", handleCanPlay);
      observer.disconnect();
    };
  }, [video]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="relative w-full aspect-video bg-zinc-950 overflow-hidden cursor-pointer group/thumb border-b border-gray-100/80 dark:border-zinc-800"
    >
      {video ? (
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-103"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-zinc-900/60">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center text-white/80 group-hover/thumb:scale-110 group-hover/thumb:bg-blue-600 transition-all shadow-md">
            <Play className="w-4 h-4 fill-current ml-0.5 text-white" />
          </div>
        </div>
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
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${filterCategory === cat
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
                transition={{ duration: 0.3, delay: idx * 0.02, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={() => openProjectDetails(project.slug)}
                className={`group flex flex-col bg-white dark:bg-[#0c0c10] border border-gray-200/80 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer select-none ${isSingle ? "col-span-1 md:col-span-2" : ""
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
            );
          })}
        </div>
      </div>

      {/* Automator Liquid Glass Sidebar Popup Drawer with Video & Deep Specs */}
      <AnimatePresence>
        {activeProject && (
          <ProjectAutomatorPopup
            project={activeProject}
            onClose={() => setSelectedSlug(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

function keyNameToTitle(str: string): string {
  return str.replace(/_/g, " ");
}
