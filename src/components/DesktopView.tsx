import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./Navbar";
import CosmicPlanetaryHero from "./CosmicPlanetaryHero";
import AboutAndEducation from "./AboutAndEducation";
import ExperienceShowcase from "./ExperienceShowcase";
import ProjectShowcase from "./ProjectShowcase";
import SkillsGrid from "./SkillsGrid";
import GithubOverview from "./GithubOverview";
import LeadershipSection from "./LeadershipSection";
import ContactSection from "./ContactSection";
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
  toggleTheme: (e?: React.MouseEvent) => void;
  scrollToElement: (id: string) => void;
  showScrollTop?: boolean;
}

export default function DesktopView({
  theme,
  toggleTheme,
  scrollToElement,
  showScrollTop = false
}: DesktopViewProps) {
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 dark:bg-[#050505] bg-[#fafafa] selection:bg-blue-500 selection:text-white">
      {/* 500px abstract background glass orb blur */}
      <div className="absolute top-0 left-1/4 -translate-y-24 w-[600px] h-[600px] bg-blue-600/[0.04] dark:bg-blue-500/[0.05] rounded-full blur-[140px] pointer-events-none animate-pulse-slow transform-gpu" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-indigo-600/[0.03] dark:bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none transform-gpu" />

      {/* Corporate Glass Header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* 1. COSMIC PLANETARY HERO SECTION (Inspired by diagram.com) */}
      <CosmicPlanetaryHero scrollToElement={scrollToElement} />

      {/* CORE INTEGRATION PANELS */}
      <main>
        {/* 2. ABOUT ME, 3. EDUCATION, and 7. ACHIEVEMENTS */}
        <AboutAndEducation />

        {/* 4. EXPERIENCE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="transform-gpu"
        >
          <ExperienceShowcase />
        </motion.div>

        {/* 5. PROJECTS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="transform-gpu"
        >
          <ProjectShowcase />
        </motion.div>

        {/* 6. TECH STACK / SKILLS GRID SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="transform-gpu"
        >
          <SkillsGrid />
        </motion.div>

        {/* GITHUB & OPEN SOURCE ANALYTICS (Merged immediately after SkillsGrid) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="transform-gpu"
        >
          <GithubOverview />
        </motion.div>

        {/* 8. LEADERSHIP & RESPONSIBILITIES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="transform-gpu"
        >
          <LeadershipSection />
        </motion.div>

        {/* 10. CONTACT SECTION & RESUME DOSSIER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
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

      {/* Floating Scroll-to-Top Button for Mobile, Tablet, and Desktop */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => scrollToElement("hero")}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gray-950/85 hover:bg-gray-900 dark:bg-white/10 dark:hover:bg-white/20 text-white backdrop-blur-md border border-gray-800/60 dark:border-white/15 shadow-xl cursor-pointer transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowDown className="w-4 h-4 rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
