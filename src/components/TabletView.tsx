import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Sparkles,
  ArrowDown,
  Globe,
  Award,
  ArrowRight,
  Send,
  Download,
  Code2,
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  MapPin,
  Phone,
  FileText,
  CheckCircle2,
  ChevronRight,
  Blocks,
  Trophy,
  Terminal,
  Search,
  Zap,
  Apple,
  Smartphone,
  TrendingUp,
  GitBranch,
  Users,
  Flame,
  Compass,
  GraduationCap
} from "lucide-react";
import { profile, summary, education, internships, projects, achievements, responsibilities, personalDetails, techStackCategories } from "../data";
import MacBookWindow from "./MacBookWindow";
import GithubOverview from "./GithubOverview";

const resumeUrl = (import.meta.env?.VITE_RESUME_URL) || "/resume.pdf";

// ─── Animation Helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 95,
      damping: 15
    }
  }
};
const fadeLeft = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 95,
      damping: 15
    }
  }
};
const fadeRight = {
  hidden: { opacity: 0, x: 16 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 95,
      damping: 15
    }
  }
};
const stagger = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03
    }
  }
};

function SectionWrap({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

function CardStagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface TabletViewProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  scrollToElement: (id: string) => void;
  showScrollTop: boolean;
}

export default function TabletView({
  theme,
  toggleTheme,
  scrollToElement,
  showScrollTop
}: TabletViewProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeInternship, setActiveInternship] = useState(0);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState("All");
  const [skillsSearch, setSkillsSearch] = useState("");
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: ""
  });

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about1", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "github", label: "GitHub" },
    { id: "contact", label: "Contact" }
  ];
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setIsSubmittingContact(true);
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactForm)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save message");
        setContactSuccess(true);
        setContactForm({ name: "", email: "", subject: "", company: "", message: "" });
        setTimeout(() => setContactSuccess(false), 5000);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSubmittingContact(false));
  };

  const handleDownloadResume = () => {
    const text = `
========================================
MADHAVAN NADAR - AI & DATA SCIENCE ENGINEER
========================================
Email: ${personalDetails.emails[0]} | ${personalDetails.emails[1]}
Address: ${personalDetails.address}
BirthDate: ${personalDetails.dateOfBirth}
Languages: ${personalDetails.languages.join(", ")}
Phone: ${personalDetails.phoneNumbers.join(" / ")}
`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Madhavan_Nadar_AI_Engineer_CV.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeProject = projects.find((p) => p.slug === selectedProjectSlug);
  const filteredProjects = projectFilter === "All" ? projects : projects.filter((p) => p.category === projectFilter);
  const projectCategories = ["All", "AI & Deep Tech Solutions", "Enterprise & Full-Stack Systems"];

  const searchedCategories = techStackCategories
    .map((cat) => {
      const skills = cat.skills.filter((s) => s.name.toLowerCase().includes(skillsSearch.toLowerCase()));
      return { ...cat, skills };
    })
    .filter((cat) => cat.skills.length > 0);

  // ─── Scroll tracking for navbar ───────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 dark:bg-[#050505] bg-[#fafafa] selection:bg-blue-500 selection:text-white transition-colors duration-300 font-sans text-xs">
      {/* Background Glows */}
      <div className="fixed top-0 left-10 w-[400px] h-[400px] bg-blue-600/[0.04] dark:bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed top-[800px] right-0 w-[300px] h-[300px] bg-indigo-600/[0.03] dark:bg-indigo-500/[0.05] rounded-full blur-[90px] pointer-events-none z-0" />

      {/* ── Dedicated Tablet Navbar ─────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2.5 px-5 bg-white/90 dark:bg-[#050505]/92 border-b border-gray-200/60 dark:border-zinc-800/70 backdrop-blur-lg shadow-md"
          : "py-3.5 px-5 bg-transparent"
      }`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => { scrollToElement("hero"); setIsMenuOpen(false); }}
            className="flex items-center gap-2 font-display font-bold text-gray-900 dark:text-white group shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-sm font-bold tracking-wide">MADHAVAN</span>
            </div>
          </button>

          {/* Horizontal scrollable pill nav — shows all items */}
          <div className="flex-1 flex items-center justify-center overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-0.5 bg-gray-100/60 dark:bg-white/5 px-1 py-1 rounded-full border border-gray-200/40 dark:border-white/10 w-max">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { scrollToElement(item.id); setIsMenuOpen(false); }}
                  className="relative px-3 py-1 rounded-full text-[10.5px] font-medium cursor-pointer transition-colors duration-200 outline-none select-none whitespace-nowrap"
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="tablet-active-pill"
                      className="absolute inset-0 bg-white dark:bg-[#121212] rounded-full shadow-sm border border-gray-200/50 dark:border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white"
                  }`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: theme + CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-700" />}
            </button>
            <button
              onClick={() => { scrollToElement("contact"); setIsMenuOpen(false); }}
              className="px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 text-[11px] font-bold shadow-sm hover:opacity-90 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              Collaborate <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu overlay kept for overflow cases — not used in regular tablet layout */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[52px] z-40 bg-white/97 dark:bg-[#07070a]/97 backdrop-blur-xl border-b border-gray-200/60 dark:border-zinc-800/70 shadow-xl"
          >
            <div className="max-w-4xl mx-auto px-5 pt-4 pb-3 grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { scrollToElement(item.id); setIsMenuOpen(false); }}
                  className={`py-2.5 px-4 rounded-xl text-left text-sm font-semibold transition-all flex items-center justify-between group ${
                    activeSection === item.id
                      ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </button>
              ))}
            </div>
            <div className="max-w-4xl mx-auto px-5 pb-5 pt-2 border-t border-gray-100 dark:border-zinc-800/70 flex items-center justify-between">
              <span className="text-[9px] font-mono text-gray-400">AI Systems Engineer</span>
              <div className="flex gap-2">
                <a href="https://github.com/MADHAVAN200" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a href="https://www.linkedin.com/in/madhavan-nadar-33a489265/" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=madhavannadar23@gmail.com" target="_blank" rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <header id="hero" className="pt-20 pb-8 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto grid grid-cols-12 gap-4 items-center">
          <div className="col-span-7 space-y-4 text-left">


            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 95, damping: 15, delay: 0.08 }}
              className="space-y-1.5"
            >
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white leading-tight">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                {profile.headline}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Systems Engineer specializing in Generative AI (RAG pipelines, Fine-tuning) and scalable web architectures. Proven track record of optimizing AI model inference by 35% and automating 70% of enterprise work pipelines across multiple software developer roles.
            </motion.p>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 95, damping: 15, delay: 0.24 }}
              className="grid grid-cols-3 gap-2.5 py-1"
            >
              {[
                { value: "70%", label: "Workflow Auto" },
                { value: "8+", label: "Client Deliveries" },
                { value: "Top 5", label: "SIH Finalist" }
              ].map((m) => (
                <motion.div
                  key={m.label}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-2.5 rounded-lg bg-white/70 dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 text-center shadow-sm cursor-default"
                >
                  <span className="block text-lg font-black text-blue-600 dark:text-blue-400">{m.value}</span>
                  <span className="block text-[8.5px] font-bold text-gray-800 dark:text-gray-200 mt-0.5">{m.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 95, damping: 15, delay: 0.32 }}
              className="flex gap-2.5 pt-1.5"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToElement("projects")}
                className="px-4.5 py-2 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-1.5 shadow text-[10.5px] cursor-pointer"
              >
                Projects Showcase <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToElement("contact")}
                className="px-4.5 py-2 bg-white dark:bg-zinc-900 border border-gray-250 dark:border-zinc-700 text-gray-950 dark:text-white rounded-xl font-bold shadow-sm text-[10.5px] cursor-pointer"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Right MacBook Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 95, damping: 15, delay: 0.2 }}
            className="col-span-5 flex justify-center relative"
          >
            <div className="w-[260px] h-[260px] absolute rounded-full border border-blue-500/5 animate-[spin_40s_linear_infinite] transform-gpu will-change-transform" />
            <div className="relative z-10 w-full">
              <MacBookWindow />
            </div>
          </motion.div>
        </div>
      </header>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section id="about1" className="py-6 px-4 bg-gray-50/20 dark:bg-zinc-950/40 border-t border-gray-200/50 dark:border-zinc-800/60">
        <div className="max-w-4xl mx-auto space-y-6">
          <SectionWrap>
            <div className="text-center">

              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mt-0.5">AI Systems Specialist</h2>
            </div>
          </SectionWrap>

          <div className="grid grid-cols-12 gap-3 items-stretch">
            <SectionWrap className="col-span-7">
              <div className="p-4.5 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm flex flex-col justify-between h-full hover:border-blue-500/20 transition-colors">
                <div>
                  <h3 className="text-base font-bold text-gray-950 dark:text-white mb-1">Madhavan Nadar</h3>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                    {summary.text}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-150 dark:border-zinc-700/60 mt-4">
                  <div className="flex gap-2">
                    <div className="p-1.5 h-7 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[9.5px] font-bold text-gray-900 dark:text-white uppercase">Mission</h4>
                      <p className="text-[9.5px] text-gray-500 dark:text-gray-400 mt-0.5 leading-normal">Build production AI pipelines, automation workflows, and cloud data backends.</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="p-1.5 h-7 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-[9.5px] font-bold text-gray-900 dark:text-white uppercase">Values</h4>
                      <p className="text-[9.5px] text-gray-500 dark:text-gray-400 mt-0.5 leading-normal">Uphold analytical integrity, focus on customer UX, and scale workloads easily.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrap>

            <div className="col-span-5 flex flex-col gap-3">
              <SectionWrap className="flex-1">
                <div className="p-4 rounded-xl bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 border border-blue-200/30 dark:border-zinc-700/50 flex-1 flex flex-col justify-center h-full">
                  <h4 className="text-[9.5px] font-bold text-blue-600 dark:text-blue-400 uppercase mb-0.5">Philosophy</h4>
                  <p className="text-[9.5px] text-gray-600 dark:text-gray-300 leading-normal font-light">
                    "True craftsmanship in technical leadership is born from bridging computer-science foundations with a strategic understanding of business outcomes."
                  </p>
                </div>
              </SectionWrap>
              <SectionWrap className="flex-1">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-900/60 border border-gray-150 dark:border-zinc-700/50 flex-1 flex flex-col justify-center h-full">
                  <h4 className="text-[9.5px] font-bold text-indigo-600 dark:text-indigo-400 uppercase mb-1.5">Strategic Focus</h4>
                  <div className="space-y-1 text-[9.5px] text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> <span>Deploy GenAI &amp; RAG systems</span></div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> <span>Optimize model latency</span></div>
                    <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> <span>Automate workflow ERP nodes</span></div>
                  </div>
                </div>
              </SectionWrap>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────────────────────── */}
      <section id="education" className="py-6 px-4 border-t border-gray-200/50 dark:border-zinc-800/60">
        <div className="max-w-4xl mx-auto space-y-5">
          <SectionWrap>
            <div className="text-center">

              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mt-0.5">Educational Milestones</h2>
            </div>
          </SectionWrap>

          <CardStagger className="relative pl-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200 dark:before:bg-zinc-700 space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="relative group cursor-default"
              >
                <div className="absolute -left-[19px] top-2 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-[#050505] shadow-sm" />
                <div className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm grid grid-cols-12 gap-3 items-center hover:border-blue-500/20 transition-colors">
                  <div className="col-span-8 space-y-0.5">
                    <span className="text-[8px] font-mono uppercase bg-blue-100/50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                      {edu.year}
                    </span>
                    <h3 className="text-sm font-bold text-gray-950 dark:text-white mt-1">{edu.degree}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{edu.institute}</p>
                    <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">{edu.detail}</p>
                  </div>
                  <div className="col-span-4 flex flex-wrap gap-1">
                    {edu.modules && edu.modules.slice(0, 6).map((m) => (
                      <span key={m} className="text-[8px] font-mono bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded border border-gray-200 dark:border-zinc-700">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </CardStagger>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ───────────────────────────────────────────────────── */}
      <section className="py-6 px-4 bg-gray-50/20 dark:bg-zinc-950/40 border-t border-gray-200/50 dark:border-zinc-800/60">
        <div className="max-w-4xl mx-auto space-y-5">
          <SectionWrap>
            <div className="text-center">

              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mt-0.5">Hackathons &amp; Trophies</h2>
            </div>
          </SectionWrap>

          <CardStagger className="grid grid-cols-3 gap-3.5">
            {achievements.map((ach, idx) => {
              const highlights = [
                { title: "Smart India Hackathon", subtitle: "Top 5 Finalist" },
                { title: "Ideation Hackathon", subtitle: "3rd Place Honor" },
                { title: "Cognition Showcase", subtitle: "1st Place Rank" }
              ];
              const highlight = highlights[idx % highlights.length];
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="p-4 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm flex flex-col justify-between relative overflow-hidden group cursor-default"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full blur-xl" />
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2.5">
                      <Trophy className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[8px] uppercase tracking-wider text-blue-600 dark:text-blue-400 block font-bold">{highlight.subtitle}</span>
                    <h3 className="text-xs font-bold text-gray-900 dark:text-white mt-1">{highlight.title}</h3>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">{ach}</p>
                  </div>
                </motion.div>
              );
            })}
          </CardStagger>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────────────────── */}
      <section id="experience" className="py-6 px-4 border-t border-gray-200/50 dark:border-zinc-800/60">
        <div className="max-w-4xl mx-auto space-y-5">
          <SectionWrap>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mt-0.5">Enterprise Experience</h2>
            </div>
          </SectionWrap>

          <SectionWrap>
            <div className="grid grid-cols-12 gap-4 items-start">
              {/* Left side tabs */}
              <div className="col-span-4 flex flex-col gap-1.5">
                {internships.map((intern, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveInternship(idx)}
                    className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${activeInternship === idx
                        ? "bg-white dark:bg-zinc-900 border-blue-500/40 shadow-sm"
                        : "bg-transparent border-transparent hover:bg-white/40 dark:hover:bg-zinc-900/40"
                      }`}
                  >
                    <div className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center ${activeInternship === idx ? "bg-blue-500/10 text-blue-500" : "bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-gray-500"}`}>
                      <Blocks className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase leading-none">{intern.duration}</span>
                      <span className="block text-[11px] font-bold mt-1 text-gray-900 dark:text-white">{intern.company}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Right details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInternship}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="col-span-8 p-4.5 rounded-xl bg-white/40 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">{internships[activeInternship].domain}</span>
                      <h3 className="text-lg font-bold text-gray-950 dark:text-white mt-1.5">{internships[activeInternship].role}</h3>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono mt-0.5">{internships[activeInternship].company} &bull; {internships[activeInternship].duration}</p>
                    </div>
                  </div>

                  <div className="p-2.5 bg-blue-500/[0.02] dark:bg-blue-500/[0.05] border border-blue-500/10 dark:border-blue-500/15 rounded-lg">
                    <p className="text-[10px] text-gray-600 dark:text-gray-300 italic">"{internships[activeInternship].summary}"</p>
                  </div>

                  <div>
                    <span className="text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1.5">Quantified KPI Metrics</span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {Object.entries(internships[activeInternship].metrics).map(([k, v]) => (
                        <div key={k} className="p-2.5 rounded-lg bg-gray-50 dark:bg-zinc-800/70 border border-gray-150 dark:border-zinc-700/50 text-center">
                          <span className="block text-base font-black text-blue-600 dark:text-blue-400">{v}</span>
                          <span className="block text-[8px] uppercase font-mono text-gray-500 dark:text-gray-400 mt-0.5">{k.replace(/_/g, " ")}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest block">Core Deliverables</span>
                    {internships[activeInternship].details.map((det, idx) => (
                      <div key={idx} className="flex gap-2.5 text-[10px] text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="w-5 h-5 rounded bg-blue-500/5 dark:bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">0{idx + 1}</span>
                        <p className="pt-0.5">{det}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stack Matrix — fixed dark colors */}
                  <div>
                    <span className="text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1.5">Stack Matrix</span>
                    <div className="flex flex-wrap gap-1.5">
                      {internships[activeInternship].technologies.map((t) => (
                        <span key={t} className="text-[9px] font-mono bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 px-2 py-0.5 rounded border border-gray-200 dark:border-zinc-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </SectionWrap>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────────────────────── */}
      <section id="projects" className="py-6 px-4 bg-gray-50/20 dark:bg-zinc-950/40 border-t border-gray-200/50 dark:border-zinc-800/60">
        <div className="max-w-4xl mx-auto space-y-5">
          <SectionWrap>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mt-0.5">Showcase of Engineering Depth</h2>
            </div>
          </SectionWrap>

          <SectionWrap>
            <div className="flex justify-center gap-1.5">
              {projectCategories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-3.5 py-1 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${projectFilter === cat
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-950 border-gray-900 dark:border-white shadow-sm"
                      : "bg-white dark:bg-zinc-900 text-gray-500 dark:text-gray-300 border-gray-200 dark:border-zinc-700"
                    }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </SectionWrap>

          <CardStagger className="grid grid-cols-2 gap-4">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.995 }}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm flex flex-col justify-between gap-3 cursor-default"
              >
                <div>
                  <div className="mb-3.5">
                    <span className="inline-block text-[8px] font-mono bg-blue-100/50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded border border-blue-200/20 dark:border-blue-800/40">
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-950 dark:text-white leading-snug">{p.title}</h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed mt-1.5">{p.description}</p>
                </div>

                <div className="space-y-2.5 pt-2.5 border-t border-gray-150 dark:border-zinc-700/60">
                  <div className="flex flex-wrap gap-1">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-[8px] font-mono bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded border border-gray-200 dark:border-zinc-700">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && <span className="text-[8px] text-gray-400 self-center font-medium">+{p.tech.length - 4} more</span>}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    {p.link && (
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 text-[9px] font-semibold text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all"
                        title="GitHub Repository"
                      >
                        <Github className="w-3 h-3 shrink-0" />
                        <span>GitHub Link</span>
                      </motion.a>
                    )}
                    {"liveLink" in p && p.liveLink && (
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={p.liveLink as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-blue-200 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-950/20 text-[9px] font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-950/40 transition-all"
                        title="Live Application Demo"
                      >
                        <Globe className="w-3 h-3 shrink-0" />
                        <span>App Link</span>
                      </motion.a>
                    )}
                    {"playStoreLink" in p && p.playStoreLink && (
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={p.playStoreLink as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-green-200 dark:border-green-900/40 bg-green-50 dark:bg-green-950/15 text-[9px] font-medium text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-950/30 transition-all"
                        title="Google Play Store"
                      >
                        <Smartphone className="w-3 h-3 shrink-0" />
                        <span>Play Store</span>
                      </motion.a>
                    )}
                    {"appStoreLink" in p && p.appStoreLink && (
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={p.appStoreLink as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-900/40 bg-indigo-50 dark:bg-indigo-950/15 text-[9px] font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950/30 transition-all"
                        title="Apple App Store"
                      >
                        <Apple className="w-3 h-3 shrink-0" />
                        <span>App Store</span>
                      </motion.a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedProjectSlug(p.slug)}
                      className="text-blue-600 dark:text-blue-400 flex items-center gap-0.5 hover:underline cursor-pointer text-[9px] font-semibold ml-auto"
                    >
                      Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardStagger>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────────────────── */}
      <section id="skills" className="py-6 px-4 border-t border-gray-200/50 dark:border-zinc-800/60">
        <div className="max-w-4xl mx-auto space-y-5">
          <SectionWrap>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mt-0.5">Competency Canopy</h2>
            </div>
          </SectionWrap>

          <SectionWrap>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 w-4.5 h-4.5" />
              <input
                type="text"
                placeholder="Search skills (Llama, AWS, React)..."
                value={skillsSearch}
                onChange={(e) => setSkillsSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-[11px] rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1.5 focus:ring-violet-500/40 shadow-sm"
              />
            </div>
          </SectionWrap>

          <CardStagger className="grid grid-cols-2 gap-4">
            {searchedCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm flex flex-col justify-start cursor-default"
              >
                <h3 className="text-xs font-bold text-gray-950 dark:text-white border-b border-gray-100 dark:border-zinc-700 pb-2 mb-2.5 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                  {cat.title}
                </h3>
                <div className="space-y-1.5">
                  {cat.skills.map((s) => (
                    <div key={s.name} className="flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors">
                      <div>
                        <span className="text-[10px] font-semibold text-gray-900 dark:text-gray-100 block">{s.name}</span>
                        <span className="text-[8px] text-gray-400 mt-0.5 block">Experience: {s.experience}</span>
                      </div>
                      <span className={`text-[7.5px] px-1.5 py-0.5 rounded font-mono font-bold shrink-0 uppercase tracking-wide border ${s.level === "Expert"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                          : s.level === "Advanced"
                            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                            : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                        }`}>
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </CardStagger>
        </div>
      </section>

      <GithubOverview />

      {/* ── LEADERSHIP ─────────────────────────────────────────────────────── */}
      <section id="leadership" className="py-6 px-4 border-t border-gray-200/50 dark:border-zinc-800/60 font-sans">
        <div className="max-w-4xl mx-auto space-y-5">
          <SectionWrap>
            <div className="text-center">

              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mt-0.5">Executive Roles</h2>
            </div>
          </SectionWrap>

          <CardStagger className="grid grid-cols-3 gap-3.5">
            {responsibilities.map((role, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm relative overflow-hidden flex flex-col justify-between group h-full cursor-default"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div>
                  <h3 className="text-sm font-bold text-gray-950 dark:text-white leading-tight">{role.title}</h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{role.detail}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-700/60 space-y-2">
                  <span className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide block">Outcomes</span>
                  <ul className="space-y-1.5 text-[10px] text-gray-600 dark:text-gray-300">
                    {role.highlights.slice(0, 3).map((hl, hIdx) => (
                      <li key={hIdx} className="flex gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </CardStagger>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-6 px-4 bg-gray-50/20 dark:bg-zinc-950/40 border-t border-gray-200/50 dark:border-zinc-800/60">
        <div className="max-w-4xl mx-auto space-y-5">
          <SectionWrap>
            <div className="text-center">

              <h2 className="text-2xl font-bold text-gray-950 dark:text-white mt-0.5">Secure Inbox &amp; CV</h2>
            </div>
          </SectionWrap>

          <SectionWrap>
            <div className="grid grid-cols-12 gap-4 items-stretch">
              {/* Coordinates */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                className="col-span-5 p-4.5 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm flex flex-col justify-between h-full cursor-default"
              >
                <div className="space-y-5">
                  <h3 className="text-sm font-bold text-gray-950 dark:text-white">Coordinates</h3>
                  <div className="space-y-4">
                    <div className="flex gap-2.5">
                      <div className="p-2 rounded bg-emerald-500/10 text-emerald-600 shrink-0">
                        <Phone className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-wider text-gray-400 dark:text-gray-500 block">Hotlines</span>
                        <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 block mt-0.5">{personalDetails.phoneNumbers.join(" / ")}</span>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="p-2 rounded bg-indigo-500/10 text-indigo-500 shrink-0">
                        <Mail className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-wider text-gray-400 dark:text-gray-500 block">Inquiries</span>
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalDetails.emails[0]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-blue-600 dark:text-blue-400 block mt-0.5"
                        >
                          {personalDetails.emails[0]}
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="p-2 rounded bg-neutral-500/10 text-neutral-500 shrink-0">
                        <Github className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-wider text-gray-400 dark:text-gray-500 block">GitHub</span>
                        <a href="https://github.com/MADHAVAN200" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 dark:text-blue-400 block mt-0.5">github.com/MADHAVAN200</a>
                      </div>
                    </div>
                    <div className="flex gap-2.5">
                      <div className="p-2 rounded bg-blue-500/10 text-blue-500 shrink-0">
                        <Linkedin className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-wider text-gray-400 dark:text-gray-500 block">LinkedIn</span>
                        <a href="https://www.linkedin.com/in/madhavan-nadar-33a489265/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-blue-600 dark:text-blue-400 block mt-0.5">linkedin.com/in/madhavan-nadar-33a489265</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-150 dark:border-zinc-700/60 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => window.open(resumeUrl, "_blank")}
                    className="w-full py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-250 dark:border-zinc-700 text-gray-900 dark:text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-indigo-500" /> View Resume
                  </motion.button>
                </div>
              </motion.div>

              {/* Message Form */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
                className="col-span-7 p-4.5 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-gray-200/50 dark:border-zinc-700/50 shadow-sm flex flex-col justify-between cursor-default"
              >
                <div>
                  <h3 className="text-sm font-bold text-gray-950 dark:text-white mb-4 flex items-center gap-2">
                    <Send className="w-4 h-4 text-blue-500" /> Send Secure Transmission
                  </h3>
                  {contactSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 text-center bg-emerald-500/5 border border-emerald-500/20 rounded-lg"
                    >
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto mb-3" />
                      <h4 className="text-sm font-bold text-gray-950 dark:text-white">Message Synced</h4>
                      <p className="text-xs text-gray-500 mt-2">Payload dispatched securely. Expect a response within 6 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            placeholder="Enter name"
                            className="w-full px-3 py-2 text-xs rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1.5 focus:ring-blue-500/40"
                          />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            placeholder="Enter email"
                            className="w-full px-3 py-2 text-xs rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1.5 focus:ring-blue-500/40"
                          />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase mb-1">Subject Line</label>
                          <input
                            type="text"
                            value={contactForm.subject}
                            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                            placeholder="Enter subject"
                            className="w-full px-3 py-2 text-xs rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1.5 focus:ring-blue-500/40"
                          />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase mb-1">Company Name</label>
                          <input
                            type="text"
                            value={contactForm.company}
                            onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                            placeholder="Enter organization"
                            className="w-full px-3 py-2 text-xs rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1.5 focus:ring-blue-500/40"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono text-gray-400 dark:text-gray-500 uppercase mb-1">Message *</label>
                        <textarea
                          required
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          placeholder="Enter message"
                          className="w-full px-3 py-2.5 text-xs rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1.5 focus:ring-blue-500/40 resize-none"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={isSubmittingContact}
                        className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg disabled:opacity-50 cursor-pointer shadow-sm transition-colors"
                      >
                        {isSubmittingContact ? "Encrypting Payload..." : "Send Secure Transmission"}
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </SectionWrap>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="bg-white dark:bg-[#030303] border-t border-gray-200/50 dark:border-zinc-800/60 py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto flex justify-between items-center gap-6">
          <div className="text-left space-y-1 max-w-sm">
            <div className="flex items-center gap-2 font-display text-sm font-bold text-gray-900 dark:text-white">
              <Code2 className="w-4 h-4 text-blue-500" />
              <span>Madhavan Nadar</span>
            </div>
            <p className="text-[9px] text-gray-500 dark:text-zinc-400 leading-normal">
              AI Systems Developer &amp; UI/UX Specialist. Focused on robust backend systems, distributed AI pipelines, and high-performance frontend engineering.
            </p>
          </div>
          <div className="flex gap-2.5">
            <a href="https://github.com/MADHAVAN200" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-700 hover:border-blue-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/madhavan-nadar-33a489265/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-700 hover:border-blue-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=madhavannadar23@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-50 dark:bg-zinc-900 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-700 hover:border-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto pt-6 mt-6 border-t border-gray-100 dark:border-zinc-800/60 text-left text-[9px] text-gray-400 dark:text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Madhavan Nadar. All rights reserved.</p>
        </div>
      </footer>


      {/* ── Case Study Drawer ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 bg-gray-900/40 dark:bg-black/60 backdrop-blur-sm flex items-end justify-center"
            onClick={() => setSelectedProjectSlug(null)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="bg-white dark:bg-[#0d0d10] w-full max-w-2xl h-[75vh] rounded-t-2xl border-t border-gray-200 dark:border-zinc-800 shadow-2xl flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white/95 dark:bg-[#0d0d10]/95 border-b border-gray-150 dark:border-zinc-800 p-5 flex justify-between items-center z-25">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block leading-none">{activeProject.category}</span>
                  <h3 className="text-sm font-bold text-gray-950 dark:text-white mt-1">{activeProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProjectSlug(null)} className="p-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 font-bold cursor-pointer">
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
              <div className="p-5 overflow-y-auto space-y-6 flex-1 text-left">
                <div className="space-y-1.5">
                  <h4 className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Brief</h4>
                  <p className="text-[10px] text-gray-600 dark:text-gray-300 leading-relaxed">{activeProject.detailedDescription}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Features</h4>
                  <ul className="space-y-1.5 text-[10px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    {activeProject.features.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-zinc-500 shrink-0 select-none">&bull;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-50/50 dark:bg-zinc-900/40 border border-gray-150 dark:border-zinc-800 rounded-lg space-y-3">
                  <h4 className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Architecture Pipeline</h4>
                  <div className="space-y-2">
                    {activeProject.architecture.map((a, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[10px]">
                        <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-300 flex items-center justify-center font-mono font-bold shrink-0">{i + 1}</span>
                        <span className="text-gray-700 dark:text-gray-200">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-50/50 dark:bg-zinc-900/40 border border-gray-150 dark:border-zinc-800 rounded-lg">
                  <h4 className="text-[9px] font-bold uppercase tracking-wider text-red-500 mb-2">Challenges</h4>
                  <ul className="space-y-1.5 text-[10px] text-gray-600 dark:text-gray-300">
                    {activeProject.challenges.map((c, i) => (
                      <li key={i} className="flex gap-1"><span className="text-red-400">&bull;</span><span>{c}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gray-50/50 dark:bg-zinc-900/40 border border-gray-150 dark:border-zinc-800 rounded-lg">
                  <h4 className="text-[9px] font-bold uppercase tracking-wider text-emerald-500 mb-2">Outcomes</h4>
                  <ul className="space-y-1.5 text-[10px] text-gray-600 dark:text-gray-300">
                    {activeProject.outcomes.map((o, i) => (
                      <li key={i} className="flex gap-1"><span className="text-emerald-400">&bull;</span><span>{o}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Resume Modal ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white text-gray-900 w-full max-w-2xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden max-h-[85vh] flex flex-col"
            >
              <div className="p-5 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                <span className="font-bold text-sm text-gray-900">Curriculum Vitae Preview</span>
                <div className="flex gap-2">
                  <button onClick={handleDownloadResume} className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer">
                    <Download className="w-3.5 h-3.5" /> Download TXT
                  </button>
                  <button onClick={() => setShowResumeModal(false)} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-600 text-xs font-bold cursor-pointer">
                    Close
                  </button>
                </div>
              </div>
              <div className="p-6 overflow-y-auto space-y-6 text-xs text-left">
                <div className="text-center pb-5 border-b border-gray-200">
                  <h4 className="text-xl font-black text-gray-950">MADHAVAN NADAR</h4>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-indigo-600 font-bold">AI Engineer &bull; Full-Stack Architect</p>
                  <p className="text-[10px] text-gray-500 mt-1 font-mono">Mumbai, India &bull; madhavannadar23@gmail.com</p>
                </div>
                <div className="space-y-1.5">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-indigo-600 border-b border-gray-200 pb-1">Professional summary</h5>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    Driven AI undergraduate passionate about leveraging data and AI to solve complex enterprise problems. Highly competent in designing ML neural systems, prompting, federated architectures, construction ERP, and automated workflow modules.
                  </p>
                </div>
                <div className="space-y-4">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-indigo-600 border-b border-gray-200 pb-1">Experience Tenure</h5>
                  {internships.map((intern, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-gray-900">{intern.role} &bull; {intern.company}</span>
                        <span className="text-gray-500 font-mono text-[9px]">{intern.duration}</span>
                      </div>
                      <p className="text-[9px] text-gray-500 italic mt-0.5">{intern.summary}</p>
                      <ul className="list-disc pl-4 text-xs text-gray-600 space-y-0.5 mt-1.5">
                        {intern.details.map((d, dIdx) => <li key={dIdx}>{d}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 pb-4">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-indigo-600 border-b border-gray-200 pb-1">Education</h5>
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start text-xs">
                      <div>
                        <span className="font-bold block text-gray-900">{edu.degree}</span>
                        <span className="text-gray-500 block text-[10px]">{edu.institute}</span>
                      </div>
                      <span className="font-mono text-[9px] text-gray-400 shrink-0">{edu.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Liquid Glass Toaster for Contact Success */}
      <AnimatePresence>
        {contactSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 20, scale: 0.9, x: "-50%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-8 left-1/2 z-[200] flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/20 dark:border-white/10 bg-white/50 dark:bg-[#0c0c0f]/50 backdrop-blur-xl shadow-2xl text-gray-900 dark:text-white w-[90%] max-w-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-500 animate-bounce animate-pulse" />
            <div className="text-left flex-1 min-w-0">
              <p className="text-xs font-bold leading-tight font-display">Message Sent</p>
              <p className="text-[10px] text-gray-500 dark:text-zinc-400 mt-0.5 truncate">Your transmission has been securely routed.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
