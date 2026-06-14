import React from "react";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import AboutAndEducation from "./AboutAndEducation";
import ExperienceShowcase from "./ExperienceShowcase";
import ProjectShowcase from "./ProjectShowcase";
import SkillsGrid from "./SkillsGrid";
import GithubOverview from "./GithubOverview";
import LeadershipSection from "./LeadershipSection";
import ContactSection from "./ContactSection";
import MacBookWindow from "./MacBookWindow";
import { profile } from "../data";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

interface DesktopViewProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  scrollToElement: (id: string) => void;
}

export default function DesktopView({
  theme,
  toggleTheme,
  scrollToElement
}: DesktopViewProps) {
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-150 dark:bg-[#050505] bg-[#fafafa] selection:bg-blue-500 selection:text-white transition-colors duration-500">
      {/* 500px abstract background glass orb blur */}
      <div className="absolute top-0 left-1/4 -translate-y-24 w-[600px] h-[600px] bg-blue-600/[0.04] dark:bg-blue-500/[0.05] rounded-full blur-[140px] pointer-events-none animate-pulse-slow transform-gpu" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-indigo-600/[0.03] dark:bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none transform-gpu" />

      {/* Corporate Glass Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* 1. HERO SECTION */}
      <header id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Dynamic mesh dot overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Large Display Heading */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-1.5"
              >
                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-950 dark:text-white font-display leading-[1.08]">
                  {profile.name}
                </h1>
                <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent leading-relaxed tracking-tight">
                  {profile.headline}
                </p>
              </motion.div>

              {/* Core Statement */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-sm sm:text-base text-gray-650 dark:text-gray-400 max-w-xl leading-relaxed"
              >
                Systems Engineer specializing in Generative AI (RAG pipelines, Fine-tuning) and scalable web architectures. Proven track record of optimizing AI model inference by 35% and automating 70% of enterprise work pipelines across multiple software developer roles.
              </motion.p>

              {/* Metric stats counters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-3 gap-4 py-4 max-w-lg"
              >
                <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800/80 shadow-sm hover:scale-102 hover:border-blue-500/30 transition-all">
                  <span className="block text-2xl font-black text-blue-600 dark:text-blue-400 font-display">
                    70%
                  </span>
                  <span className="block text-[10px] font-bold text-gray-900 dark:text-white font-sans mt-1">
                    Workflow Automation
                  </span>
                  <span className="block text-[9px] font-mono text-gray-500 dark:text-zinc-500 mt-0.5">
                    Enterprise Operations
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800/80 shadow-sm hover:scale-102 hover:border-blue-500/30 transition-all">
                  <span className="block text-2xl font-black text-blue-600 dark:text-blue-400 font-display">
                    8+
                  </span>
                  <span className="block text-[10px] font-bold text-gray-900 dark:text-white font-sans mt-1">
                    Client Deliveries
                  </span>
                  <span className="block text-[9px] font-mono text-gray-500 dark:text-zinc-500 mt-0.5">
                    Production systems
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800/80 shadow-sm hover:scale-102 hover:border-blue-500/30 transition-all">
                  <span className="block text-2xl font-black text-blue-600 dark:text-blue-400 font-display">
                    Top 5
                  </span>
                  <span className="block text-[10px] font-bold text-gray-900 dark:text-white font-sans mt-1">
                    National Finalist
                  </span>
                  <span className="block text-[9px] font-mono text-gray-500 dark:text-zinc-500 mt-0.5">
                    Smart India Hackathon
                  </span>
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <button
                  onClick={() => scrollToElement("projects")}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer hover:scale-102"
                >
                  View Project Showcase <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToElement("contact")}
                  className="px-6 py-3 rounded-xl border border-gray-250/50 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 hover:bg-neutral-50 dark:hover:bg-zinc-800/60 text-gray-950 dark:text-white text-xs font-bold shadow-sm transition-all cursor-pointer hover:scale-102"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>

            {/* Right Display: Premium Interactive macOS MacBook Style Sandbox */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center items-center relative min-h-[450px] w-full"
            >
              {/* Spinning subtle outer orbit rings (optimized with GPU transform acceleration) */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-blue-500/10 dark:border-blue-500/5 animate-[spin_45s_linear_infinite] pointer-events-none transform-gpu will-change-transform" />
              <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-indigo-500/5 dark:border-indigo-500/[0.02] animate-[spin_70s_linear_infinite] pointer-events-none transform-gpu will-change-transform" />

              {/* The Interactive MacBook Window Wrapper */}
              <div className="relative z-10 w-full">
                <MacBookWindow />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator anchor links */}
        <button
          onClick={() => scrollToElement("about1")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 cursor-pointer animate-bounce shadow-sm"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </header>

      {/* CORE INTEGRATION PANELS */}
      <main>
        {/* 2. ABOUT ME, 3. EDUCATION, and 7. ACHIEVEMENTS */}
        <AboutAndEducation />

        {/* 4. EXPERIENCE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="transform-gpu"
        >
          <ExperienceShowcase />
        </motion.div>

        {/* 5. PROJECTS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="transform-gpu"
        >
          <ProjectShowcase />
        </motion.div>

        {/* 6. TECH STACK / SKILLS GRID SECTION */}
        <motion.div
          initial={{ opacity: 0, rotateX: 6, y: 55 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="transform-gpu"
        >
          <SkillsGrid />
        </motion.div>

        {/* GITHUB & OPEN SOURCE ANALYTICS (Merged immediately after SkillsGrid) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="transform-gpu"
        >
          <GithubOverview />
        </motion.div>

        {/* 8. LEADERSHIP & RESPONSIBILITIES */}
        <motion.div
          initial={{ opacity: 0, x: 60, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="transform-gpu"
        >
          <LeadershipSection />
        </motion.div>

        {/* 10. CONTACT SECTION & RESUME DOSSIER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 45, damping: 13 }}
          className="transform-gpu"
        >
          <ContactSection />
        </motion.div>
      </main>

      {/* FOOTER BLOCK OF THE SITE */}
      <footer className="bg-white dark:bg-[#030303] border-t border-gray-200/50 dark:border-zinc-900 py-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Design summary credits */}
            <div className="text-center md:text-left space-y-1.5 md:max-w-md">
              <div className="flex items-center justify-center md:justify-start gap-2 font-display text-base font-bold text-gray-900 dark:text-white">
                <Code2 className="w-4.5 h-4.5 text-blue-500" />
                <span>Madhavan Nadar</span>
              </div>
              <p className="text-xs text-gray-505 dark:text-zinc-400 leading-relaxed font-sans">
                AI Systems Developer & UI/UX Specialist. Focused on robust backend systems, distributed AI training pipelines, and high-performance frontend engineering.
              </p>
            </div>

            {/* Social channels links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/MADHAVAN200"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-zinc-900/65 dark:hover:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-800 transition-all cursor-pointer"
                title="GitHub Link"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/madhavan-nadar-33a489265/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-zinc-900/65 dark:hover:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-800 transition-all cursor-pointer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=madhavannadar23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-zinc-900/65 dark:hover:bg-zinc-800/80 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-800 transition-all cursor-pointer"
                title="Primary Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-zinc-900 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-zinc-500 font-sans">
            <p>&copy; {new Date().getFullYear()} Madhavan Nadar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
