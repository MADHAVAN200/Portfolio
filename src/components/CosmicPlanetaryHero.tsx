import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface CosmicPlanetaryHeroProps {
  scrollToElement: (id: string) => void;
}

// Fixed deterministic star positions for clean, jitter-free cosmic starfield
const STARS = [
  { top: "6%", left: "14%", size: 1.5, opacity: 0.6, delay: "0s" },
  { top: "10%", left: "28%", size: 2, opacity: 0.8, delay: "1.2s" },
  { top: "5%", left: "72%", size: 1.5, opacity: 0.7, delay: "2.4s" },
  { top: "12%", left: "86%", size: 1, opacity: 0.5, delay: "0.8s" },
  { top: "18%", left: "8%", size: 2, opacity: 0.9, delay: "1.8s" },
  { top: "22%", left: "93%", size: 1.5, opacity: 0.6, delay: "3.1s" },
  { top: "32%", left: "16%", size: 1, opacity: 0.4, delay: "0.5s" },
  { top: "36%", left: "84%", size: 2, opacity: 0.75, delay: "2.1s" },
  { top: "45%", left: "5%", size: 1.5, opacity: 0.55, delay: "1.5s" },
  { top: "50%", left: "95%", size: 1, opacity: 0.7, delay: "2.7s" },
  { top: "62%", left: "10%", size: 2, opacity: 0.85, delay: "0.9s" },
  { top: "66%", left: "90%", size: 1.5, opacity: 0.6, delay: "1.9s" },
  { top: "76%", left: "20%", size: 1, opacity: 0.45, delay: "3.3s" },
  { top: "80%", left: "78%", size: 2, opacity: 0.8, delay: "0.3s" },
  { top: "88%", left: "32%", size: 1.5, opacity: 0.65, delay: "2.2s" },
  { top: "90%", left: "68%", size: 1, opacity: 0.5, delay: "1.1s" },
  { top: "15%", left: "44%", size: 1.5, opacity: 0.7, delay: "2.9s" },
  { top: "24%", left: "60%", size: 1, opacity: 0.4, delay: "1.4s" },
  { top: "70%", left: "52%", size: 1.5, opacity: 0.6, delay: "0.7s" },
  { top: "84%", left: "14%", size: 2, opacity: 0.75, delay: "2.5s" },
  { top: "40%", left: "2%", size: 1, opacity: 0.5, delay: "1.7s" },
  { top: "56%", left: "98%", size: 2, opacity: 0.8, delay: "3.0s" },
  { top: "8%", left: "54%", size: 1.5, opacity: 0.6, delay: "0.4s" },
  { top: "86%", left: "84%", size: 1.5, opacity: 0.7, delay: "1.6s" }
];

export default function CosmicPlanetaryHero({ scrollToElement }: CosmicPlanetaryHeroProps) {
  const [activePlanetTip, setActivePlanetTip] = useState<string | null>(null);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 pb-16 overflow-hidden">
      {/* ── 1. Cosmic Starfield & Ambient Nebula ───────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Deep space radial vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#fafafa]/70 dark:via-[#050508]/70 to-[#fafafa] dark:to-[#050508] z-1" />

        {/* Scattered twinkling cosmic stars - static zero-overhead rendering */}
        {STARS.map((s, idx) => (
          <div
            key={idx}
            className="absolute rounded-full bg-slate-700/60 dark:bg-white"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity
            }}
          />
        ))}

        {/* Ambient atmospheric core glow - pure zero-overhead radial gradient */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none transform-gpu" />
      </div>

      {/* ── Hero Centerpiece (Text Centered with Moving Planets Behind) ────── */}
      <div className="relative w-full flex-1 min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 sm:px-6">

        {/* ── 2. The Planetary Solar System Stage (BEHIND THE TEXT) ─────────── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full flex items-center justify-center pointer-events-none select-none z-0">
          {/* Radial Orbit Container */}
          <div className="relative w-[950px] h-[950px] flex items-center justify-center scale-[0.45] xs:scale-[0.55] sm:scale-75 md:scale-90 lg:scale-105 xl:scale-115">
            {/* Pure hardware-accelerated orbit container without CPU mask */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              {/* ── Orbit 1 (Radius 95px, Diameter 190px, 24s) ── */}
              <div className="absolute w-[190px] h-[190px] rounded-full border border-slate-600/50 dark:border-white/[0.14] animate-orbit-spin-24 transform-gpu flex items-center justify-center">
                {/* Planet: Red Mars (Atmospheric crimson) */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActivePlanetTip("Neural Inference & Agents")}
                  onMouseLeave={() => setActivePlanetTip(null)}
                >
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-rose-600 via-red-500 to-amber-400 shadow-[0_0_10px_rgba(244,63,94,0.85)] group-hover:scale-135 transition-transform" />
                </div>
              </div>

              {/* ── Orbit 2 (Radius 150px, Diameter 300px, 36s Reverse) ── */}
              <div className="absolute w-[300px] h-[300px] rounded-full border border-slate-600/40 dark:border-white/[0.12] animate-orbit-spin-36-rev transform-gpu flex items-center justify-center">
                {/* Planet: Cyan Neptune (Vibrant aqua with atmosphere) */}
                <div
                  className="absolute bottom-4 left-10 pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActivePlanetTip("Real-Time Telemetry & Socket Bus")}
                  onMouseLeave={() => setActivePlanetTip(null)}
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-600 via-teal-400 to-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover:scale-135 transition-transform" />
                </div>
              </div>

              {/* ── Orbit 3 (Radius 225px, Diameter 450px, 52s) ── */}
              <div className="absolute w-[450px] h-[450px] rounded-full border border-slate-500/35 dark:border-white/[0.10] animate-orbit-spin-52 transform-gpu flex items-center justify-center">
                {/* Planet 1: Dark Textured Cratered Moon */}
                <div
                  className="absolute bottom-12 left-6 pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActivePlanetTip("Deterministic Invariants & Security")}
                  onMouseLeave={() => setActivePlanetTip(null)}
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0b0d14] via-[#1a1d29] to-[#374151] border border-gray-400/30 dark:border-white/10 shadow-[0_0_12px_rgba(0,0,0,0.5)] relative overflow-hidden group-hover:scale-120 transition-transform">
                    <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full bg-black/40" />
                    <div className="absolute bottom-2 right-1.5 w-2 h-2 rounded-full bg-black/35" />
                    <div className="absolute top-3.5 right-3 w-1 h-1 rounded-full bg-black/30" />
                  </div>
                </div>

                {/* Planet 2: Fiery Amber Gas Giant (Radiant solar corona) */}
                <div
                  className="absolute top-8 right-14 pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActivePlanetTip("LLM Finetuning & Groq Cloud")}
                  onMouseLeave={() => setActivePlanetTip(null)}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-300 shadow-[0_0_16px_rgba(249,115,22,0.85)] group-hover:scale-120 transition-transform" />
                </div>
              </div>

              {/* ── Orbit 4 (Radius 305px, Diameter 610px, 70s Reverse) ── */}
              <div className="absolute w-[610px] h-[610px] rounded-full border border-slate-500/30 dark:border-white/[0.08] animate-orbit-spin-70-rev transform-gpu flex items-center justify-center">
                {/* Planet: Purple Cosmic Star Planet (Diagram Magician with ✦ Star Glint) */}
                <div
                  className="absolute top-16 left-20 pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActivePlanetTip("Diagram AI & Autonomous Agents")}
                  onMouseLeave={() => setActivePlanetTip(null)}
                >
                  <div className="w-7.5 h-7.5 rounded-full bg-gradient-to-tr from-violet-700 via-purple-500 to-fuchsia-400 shadow-[0_0_16px_rgba(168,85,247,0.85)] flex items-center justify-center relative group-hover:scale-120 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current opacity-90 drop-shadow-[0_0_4px_white]">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── Orbit 5 (Radius 390px, Diameter 780px, 95s) ── */}
              <div className="absolute w-[780px] h-[780px] rounded-full border border-slate-400/25 dark:border-white/[0.06] animate-orbit-spin-95 transform-gpu flex items-center justify-center">
                {/* Planet 1: Saturn with Tilted 3D Ring */}
                <div
                  className="absolute top-24 right-28 pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActivePlanetTip("Distributed Cloud Architecture & AWS")}
                  onMouseLeave={() => setActivePlanetTip(null)}
                >
                  <div className="relative w-13 h-8 flex items-center justify-center group-hover:scale-125 transition-transform">
                    {/* Saturn Ring Ellipse (Tilted -24deg) */}
                    <div
                      className="absolute w-13 h-5 rounded-full border-[2.2px] border-amber-400/80 dark:border-amber-200/75 shadow-[0_0_6px_rgba(251,191,36,0.4)] transform -rotate-[24deg] pointer-events-none"
                    />
                    {/* Saturn Planet Sphere */}
                    <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-tr from-amber-700 via-amber-500 to-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.5)] relative z-1" />
                  </div>
                </div>

                {/* Planet 2: Blue Ocean Planet with Satellite */}
                <div
                  className="absolute bottom-28 left-36 pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActivePlanetTip("Scalable Microservices & Redis Queues")}
                  onMouseLeave={() => setActivePlanetTip(null)}
                >
                  <div className="relative w-7 h-7 flex items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-5.5 h-5.5 rounded-full bg-gradient-to-tr from-blue-700 via-blue-500 to-cyan-300 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                    {/* Fixed Orbiting Satellite Dot (lightweight, zero lag) */}
                    <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_white]" />
                  </div>
                </div>
              </div>

              {/* ── Orbit 6 (Radius 475px, Diameter 950px, 130s) ── */}
              <div className="absolute w-[950px] h-[950px] rounded-full border border-slate-400/20 dark:border-white/[0.05] animate-orbit-spin-130 transform-gpu flex items-center justify-center">
                {/* Planet: Emerald Neon Planet */}
                <div
                  className="absolute top-52 left-16 pointer-events-auto cursor-pointer group"
                  onMouseEnter={() => setActivePlanetTip("Vector Databases & FAISS RAG")}
                  onMouseLeave={() => setActivePlanetTip(null)}
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-lime-300 shadow-[0_0_12px_rgba(16,185,129,0.8)] group-hover:scale-135 transition-transform" />
                </div>
              </div>

            </div>

            {/* ── Central Celestial Sphere (The Diagram Half-Moon Core) - Darker in both White and Dark Mode ── */}
            <div className="relative z-0 pointer-events-auto cursor-pointer group flex items-center justify-center opacity-75 dark:opacity-85 hover:opacity-95 transition-opacity duration-200">
              {/* Subtle ambient core glow using lightweight radial gradient */}
              <div className="absolute w-44 h-44 rounded-full bg-[radial-gradient(circle,rgba(30,41,59,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(15,23,42,0.4)_0%,transparent_70%)] pointer-events-none transform-gpu" />

              {/* The Half-Lit Moon SVG Sphere: darker, richer, sculpted obsidian and slate */}
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] transition-transform duration-300 group-hover:scale-108"
              >
                <defs>
                  {/* Darker, sleek titanium/slate illuminated crescent */}
                  <radialGradient id="moonIlluminated" cx="35%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#94a3b8" />
                    <stop offset="45%" stopColor="#64748b" />
                    <stop offset="80%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#334155" />
                  </radialGradient>
                  {/* Deep, rich pitch obsidian shadow hemisphere */}
                  <radialGradient id="moonShadow" cx="65%" cy="60%" r="55%">
                    <stop offset="0%" stopColor="#0d1117" />
                    <stop offset="60%" stopColor="#06090e" />
                    <stop offset="100%" stopColor="#020406" />
                  </radialGradient>
                </defs>

                {/* Base Dark Hemisphere */}
                <circle cx="50" cy="50" r="46" fill="url(#moonShadow)" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />

                {/* Left Luminous Crescent / Half Sphere */}
                <path
                  d="M 50 4 A 46 46 0 0 0 50 96 A 16 46 0 0 1 50 4"
                  fill="url(#moonIlluminated)"
                />

                {/* Divider Rim Specular Highlight */}
                <ellipse cx="50" cy="50" rx="0.75" ry="45.5" fill="rgba(148,163,184,0.45)" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── 3. Centered Typography & CTA Buttons (IN FRONT of planets) ───── */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-7 pointer-events-none">
          {/* Lightweight ambient text contrast backdrop without expensive blur filter */}
          <div className="absolute inset-0 -m-4 sm:-m-8 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(250,250,250,0.7)_0%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(5,5,8,0.75)_0%,transparent_75%)] pointer-events-none -z-1" />

          {/* Large Commanding Display Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-1 pointer-events-auto"
          >
            <h1 className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-gray-950 dark:text-white font-display leading-[1.04] drop-shadow-xs dark:drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Design systems
              <br />
              <span className="bg-gradient-to-r from-gray-950 via-gray-700 to-gray-400 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
                from the future.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal pointer-events-auto drop-shadow-2xs"
          >
            Unleash your potential with Madhavan&apos;s AI-powered autonomous systems, multi-agent pipelines, and scalable enterprise architectures.
          </motion.p>

          {/* Call-to-Action Pill Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-1 pointer-events-auto"
          >
            {/* Primary Diagram-Style Pill Button */}
            <button
              onClick={() => scrollToElement("projects")}
              className="px-6 py-3 rounded-full bg-gray-950 hover:bg-gray-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-gray-950 text-xs sm:text-sm font-bold shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95 duration-200"
            >
              <span>Explore the future</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Secondary Contact Pill */}
            <button
              onClick={() => scrollToElement("contact")}
              className="px-6 py-3 rounded-full border border-gray-250 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] hover:bg-gray-100 dark:hover:bg-white/[0.08] text-gray-900 dark:text-white text-xs sm:text-sm font-semibold backdrop-blur-md shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95 duration-200"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Hover Toast for Planets */}
          <div className="h-7 flex items-center justify-center pointer-events-none pt-2">
            {activePlanetTip && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#13141f]/95 border border-gray-200 dark:border-white/10 backdrop-blur-md text-[11px] font-semibold text-gray-800 dark:text-zinc-200 shadow-lg flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                <span>{activePlanetTip}</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* ── 4. Stats Pills Bar (Bottom Anchor of Hero Centerpiece) ─────────── */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-10 sm:pt-14 text-xs text-gray-600 dark:text-zinc-400">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/5 backdrop-blur-xs shadow-2xs">
            <span className="font-bold text-gray-950 dark:text-white">70%</span>
            <span className="text-[11px] text-gray-500 dark:text-zinc-400">Workflow Automation</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/5 backdrop-blur-xs shadow-2xs">
            <span className="font-bold text-gray-950 dark:text-white">8+</span>
            <span className="text-[11px] text-gray-500 dark:text-zinc-400">Production Systems</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/5 backdrop-blur-xs shadow-2xs">
            <span className="font-bold text-gray-950 dark:text-white">Top 5</span>
            <span className="text-[11px] text-gray-500 dark:text-zinc-400">Smart India Hackathon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
