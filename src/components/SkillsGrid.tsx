import React, { useState } from "react";
import { techStackCategories } from "../data";
import {
  Search,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Cpu,
  Layers,
  Database,
  Cloud,
  Terminal,
  Shield,
  Zap,
  Globe,
  Code2,
  Box,
  Bot,
  Activity,
  GitBranch,
  Network
} from "lucide-react";
import { motion } from "motion/react";

// --- Clean Professional Vector SVGs for Tech Stack (No Emojis) ----------------
const PythonSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M11.914 2C6.732 2 7.054 4.254 7.054 4.254l.006 2.34h4.94v.702H5.06S2 7.054 2 12.235c0 5.183 2.668 5.02 2.668 5.02h1.594v-2.261s-.086-2.669 2.628-2.669h4.9v-.742H8.89s-2.585.04-2.585-2.545c0-2.585 2.257-2.505 2.257-2.505h7.294s2.425.04 2.425-2.302c0-2.342-2.138-2.232-2.138-2.232l-4.228.001z"
      fill="#387EB8"
    />
    <path
      d="M12.086 22c5.182 0 4.86-2.254 4.86-2.254l-.006-2.34h-4.94v-.702h6.938S22 16.946 22 11.765c0-5.183-2.668-5.02-2.668-5.02h-1.594v2.261s.086 2.669-2.628 2.669h-4.9v.742h4.898s2.585-.04 2.585 2.545c0 2.585-2.257 2.505-2.257 2.505H8.102s-2.425-.04-2.425 2.302c0 2.342 2.138 2.232 2.138 2.232l4.271-.001z"
      fill="#FFE052"
    />
    <circle cx="9.2" cy="4.4" r="0.8" fill="#ffffff" />
    <circle cx="14.8" cy="19.6" r="0.8" fill="#ffffff" />
  </svg>
);

const PyTorchSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M13.4 3.5a8.5 8.5 0 105.7 13.9l-1.8-1.8a6 6 0 11-3.9-9.6V3.5z"
      fill="#EE4C2C"
    />
    <circle cx="15.8" cy="7.2" r="1.5" fill="#EE4C2C" />
  </svg>
);

const TypeScriptSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path
      d="M11.5 14.5H9.2V8.5H7.5V7h5.1v1.5h-1.7v6H11.5zm3.8-1.2c.4.3.9.5 1.5.5.6 0 1-.2 1-.6 0-.3-.2-.5-.8-.7l-.8-.3c-1.1-.4-1.6-1-1.6-1.8 0-1.1.9-1.9 2.3-1.9.7 0 1.3.2 1.7.5l-.4 1.2c-.4-.3-.8-.4-1.3-.4-.6 0-.9.2-.9.5 0 .3.2.5.8.7l.7.3c1.2.4 1.7 1 1.7 1.9 0 1.2-.9 2-2.5 2-.8 0-1.5-.2-2-.6l.4-1.3z"
      fill="#ffffff"
    />
  </svg>
);

const ReactSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#00D8FF">
    <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
  </svg>
);

const AWSSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M6.8 14.5c0 .6.4 1 1.1 1 .8 0 1.6-.5 2.1-1.2v2c-.7.5-1.6.7-2.5.7-1.8 0-2.8-1.1-2.8-2.7 0-2 1.3-3.1 3.2-3.1.8 0 1.5.2 2 .5v2.8H7.9v-.8h2.3v-.6c-.3-.3-.8-.5-1.3-.5-1.1 0-1.8.8-1.8 1.9zm8.9 2.3l-1.8-5.3h1.8l1 3.4 1-3.4h1.8l-1.9 5.3h-1.9zm-4.7-.2c-3.8 2-8.3 1.2-10-.3l-.4-.4 1-.8.3.3c1.4 1.2 5.1 1.8 8.4-.1l.7 1.3z"
      fill="#FF9900"
    />
    <path
      d="M18.8 18.2c-.4.5-1.1.9-1.9 1.1l-.3-.7c.6-.2 1.1-.5 1.4-.8l.8.4z"
      fill="#FF9900"
    />
  </svg>
);

const DockerSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#2496ED">
    <path d="M2.5 12.8c.3 3.5 3 6.3 6.5 6.7 4.2.4 7.9-1.7 9.8-4.9.4.1.8.1 1.2.1 2.2 0 3.8-1.5 4-3.5-1.4.1-2.7-.4-3.6-1.4-.4-.5-.7-1-1-1.6-1.5.2-2.9.8-3.9 1.9-1.2-.2-2.4-.2-3.6 0v-1.6H9.7v1.7c-.5 0-1 .1-1.5.2v-1.9H6.1v2.1c-.8.3-1.6.7-2.3 1.3l-.2.1c-.5.4-.9.9-1.1 1.5zm6.1-5.7h1.9v1.9H8.6V7.1zm2.4 0h1.9v1.9H11V7.1zm-4.8 0h1.9v1.9H6.2V7.1zm2.4-2.4h1.9v1.9H8.6V4.7zm2.4 0h1.9v1.9H11V4.7z" />
  </svg>
);

const PostgresSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#4169E1">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6 9.1v-3.2c-.6-.2-1.2-.6-1.7-1.1l1.1-1.1c.4.4.8.7 1.3.8v-2.3c-.8-.4-1.5-1-1.9-1.8l1.3-.8c.3.6.8 1 1.4 1.2v-2c-.5-.3-.9-.7-1.2-1.3l1.3-.7c.2.4.5.7.9.8V7h1.6v2.5c.4-.2.8-.5 1-.9l1.3.7c-.3.6-.7 1-1.2 1.3v2c.6-.2 1.1-.6 1.4-1.2l1.3.8c-.4.8-1.1 1.4-1.9 1.8v2.3c.5-.1.9-.4 1.3-.8l1.1 1.1c-.5.5-1.1.9-1.7 1.1v3.2c3.5-1.5 6-5 6-9.1 0-5.5-4.5-10-10-10z" />
  </svg>
);

const LangChainSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="7" cy="12" r="3.8" stroke="#10B981" strokeWidth="2.2" />
    <circle cx="17" cy="12" r="3.8" stroke="#10B981" strokeWidth="2.2" />
    <path d="M10.8 12h2.4M12 7.2v9.6" stroke="#34D399" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const NextJsSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="10" className="fill-black dark:fill-white" />
    <path d="M7.5 7.5v9h2v-5.6l6 6.6h1.5v-10h-2v5.6l-6-6.6H7.5z" className="fill-white dark:fill-black" />
  </svg>
);

const RedisSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M12 2.5l8 4.2v9.6l-8 4.2-8-4.2V6.7l8-4.2z"
      fill="#DC382D"
      stroke="#B3261E"
      strokeWidth="1.2"
    />
    <path d="M12 2.5v18M4 6.7l8 4.5 8-4.5M4 16.3l8-4.5 8 4.5" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
  </svg>
);

const FlutterSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path d="M13.5 2.5L4 12l2.8 2.8L19.2 2.5h-5.7z" fill="#42A5F5" />
    <path d="M13.5 13.5L9.2 17.8 12 20.6l4.3-4.3 2.9 2.9h5.7l-5.7-5.7h-5.7z" fill="#0D47A1" />
    <path d="M12 20.6l2.8 2.8h5.7l-5.7-5.7-2.8 2.9z" fill="#42A5F5" />
  </svg>
);

const FastAPISVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <circle cx="12" cy="12" r="10" fill="#009688" />
    <path d="M11 5l-4 8h5l-1 6 6-9h-5l1-5h-2z" fill="#ffffff" />
  </svg>
);

// --- 3D Purple Stars Component (Card 1) --------------------------------------
function Purple3DStars() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center overflow-hidden">
      {/* Liquid Purple Glow Orb */}
      <div className="absolute w-32 h-32 bg-purple-500/25 dark:bg-purple-600/35 rounded-full blur-2xl animate-pulse" />

      {/* Main 3D 4-point star */}
      <svg
        viewBox="0 0 100 100"
        className="w-28 h-28 drop-shadow-[0_12px_24px_rgba(168,85,247,0.45)] transition-transform duration-500 hover:scale-105"
      >
        <defs>
          <linearGradient id="purpleStarG1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset="35%" stopColor="#c084fc" />
            <stop offset="70%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#581c87" />
          </linearGradient>
          <linearGradient id="purpleStarG2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b0764" />
          </linearGradient>
        </defs>
        {/* 4-point star curvature */}
        <path
          d="M50 0 C50 30 30 50 0 50 C30 50 50 70 50 100 C50 70 70 50 100 50 C70 50 50 30 50 0 Z"
          fill="url(#purpleStarG1)"
        />
        {/* Diagonal lighting highlight */}
        <path
          d="M50 0 C50 30 30 50 0 50 C50 50 50 50 50 50 Z"
          fill="url(#purpleStarG2)"
          opacity="0.45"
        />
      </svg>

      {/* Secondary mini 3D star */}
      <svg
        viewBox="0 0 100 100"
        className="w-11 h-11 absolute top-3 right-6 drop-shadow-[0_6px_14px_rgba(168,85,247,0.4)] animate-bounce"
        style={{ animationDuration: "3.5s" }}
      >
        <path
          d="M50 0 C50 30 30 50 0 50 C30 50 50 70 50 100 C50 70 70 50 100 50 C70 50 50 30 50 0 Z"
          fill="url(#purpleStarG1)"
        />
      </svg>
    </div>
  );
}

// --- 4x3 Icon Grid (Card 2) - Clean SVGs & Liquid Glass -----------------------
function TechIconGrid() {
  const techItems = [
    { name: "Python", icon: <PythonSVG className="w-5 h-5" /> },
    { name: "PyTorch", icon: <PyTorchSVG className="w-5 h-5" /> },
    { name: "TypeScript", icon: <TypeScriptSVG className="w-5 h-5" /> },
    { name: "React", icon: <ReactSVG className="w-5 h-5" /> },
    { name: "AWS Cloud", icon: <AWSSVG className="w-5 h-5" /> },
    { name: "Docker", icon: <DockerSVG className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <PostgresSVG className="w-5 h-5" /> },
    { name: "LangChain", icon: <LangChainSVG className="w-5 h-5" /> },
    { name: "Next.js", icon: <NextJsSVG className="w-5 h-5" /> },
    { name: "Redis", icon: <RedisSVG className="w-5 h-5" /> },
    { name: "Flutter", icon: <FlutterSVG className="w-5 h-5" /> },
    { name: "FastAPI", icon: <FastAPISVG className="w-5 h-5" /> },
  ];

  return (
    <div className="relative w-full pt-2 pb-2">
      {/* 4x3 Grid of tactile liquid glass tiles */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {techItems.map((item) => (
          <div
            key={item.name}
            className="group relative aspect-square rounded-2xl bg-white/80 dark:bg-[#161722]/90 border border-gray-200/80 dark:border-white/5 hover:border-purple-400 dark:hover:border-purple-500/50 p-2 flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1 shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-inner hover:shadow-[0_8px_20px_rgba(168,85,247,0.15)] backdrop-blur-md"
          >
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <span className="text-[9.5px] text-gray-700 dark:text-zinc-300 font-medium tracking-tight mt-1.5 truncate max-w-full">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Semantic RAG Vector Space Visualization (Card 3) - Liquid Glass ----------
function SemanticRAGCard() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <div className="relative w-36 h-36 rounded-3xl bg-gradient-to-br from-purple-50/90 via-white/80 to-blue-50/90 dark:from-[#0c0d18] dark:via-[#141525] dark:to-[#0d0920] border border-purple-200/70 dark:border-purple-500/30 p-2.5 shadow-[0_8px_24px_rgba(168,85,247,0.12)] dark:shadow-xl flex flex-col justify-between overflow-hidden backdrop-blur-xl">
        {/* Star dust dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:10px_10px] opacity-25 dark:opacity-35" />

        {/* Vector Space Node Cluster Graphic */}
        <div className="relative z-10 w-full h-20 rounded-2xl bg-white/70 dark:bg-black/60 border border-gray-200/80 dark:border-white/10 flex items-center justify-center overflow-hidden shadow-inner backdrop-blur-md">
          <svg viewBox="0 0 100 60" className="w-full h-full p-2">
            {/* Coordinate grid lines */}
            <line x1="10" y1="30" x2="90" y2="30" stroke="rgba(148,163,184,0.3)" strokeDasharray="2 2" />
            <line x1="50" y1="5" x2="50" y2="55" stroke="rgba(148,163,184,0.3)" strokeDasharray="2 2" />
            
            {/* Connection edges */}
            <line x1="50" y1="30" x2="25" y2="18" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
            <line x1="50" y1="30" x2="75" y2="16" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />
            <line x1="50" y1="30" x2="35" y2="46" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
            <line x1="50" y1="30" x2="68" y2="44" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />

            {/* Document chunk vector points */}
            <circle cx="25" cy="18" r="3" fill="#a855f7" className="animate-pulse" />
            <circle cx="75" cy="16" r="3" fill="#38bdf8" />
            <circle cx="35" cy="46" r="2.5" fill="#c084fc" />
            <circle cx="68" cy="44" r="2.5" fill="#34d399" />
            
            {/* Central Query Vector with radiating wave */}
            <circle cx="50" cy="30" r="5" fill="#10b981" />
            <circle cx="50" cy="30" r="8" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5" />
          </svg>
          <span className="absolute bottom-1 right-2 text-[8px] font-semibold text-purple-700 dark:text-purple-300">
            AI: 99.4%
          </span>
        </div>

        {/* Mini chip bottom row */}
        <div className="relative z-10 flex items-center justify-between text-[9px] text-gray-700 dark:text-zinc-300 bg-white/90 dark:bg-white/5 rounded-xl px-2 py-1 border border-gray-200/80 dark:border-white/10 shadow-xs">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Semantic RAG
          </span>
          <span className="text-purple-600 dark:text-purple-400 font-semibold">Hybrid Search</span>
        </div>
      </div>
    </div>
  );
}

// --- Computer Vision Mockup (Card 4) - Liquid Glass -------------------------
function VisionDetectionMockup() {
  return (
    <div className="relative w-full pt-2 flex items-center justify-center gap-4">
      {/* High-Tech Computer Vision Viewport Graphic */}
      <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black border border-gray-200/80 dark:border-white/10 flex items-center justify-center overflow-hidden shrink-0 shadow-md backdrop-blur-md">
        {/* Geometric Vision Mesh SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full p-3">
          {/* Target Corner Crosshairs */}
          <path d="M15 25 L15 15 L25 15" stroke="#a855f7" strokeWidth="2" fill="none" />
          <path d="M85 25 L85 15 L75 15" stroke="#a855f7" strokeWidth="2" fill="none" />
          <path d="M15 75 L15 85 L25 85" stroke="#a855f7" strokeWidth="2" fill="none" />
          <path d="M85 75 L85 85 L75 85" stroke="#a855f7" strokeWidth="2" fill="none" />

          {/* Neural Landmark Mesh Polygon */}
          <polygon
            points="50,20 68,34 60,65 50,78 40,65 32,34"
            fill="none"
            stroke="rgba(168,85,247,0.5)"
            strokeWidth="1.2"
          />
          <circle cx="50" cy="20" r="2" fill="#a855f7" />
          <circle cx="68" cy="34" r="2" fill="#38bdf8" />
          <circle cx="60" cy="65" r="2" fill="#38bdf8" />
          <circle cx="50" cy="78" r="2" fill="#10b981" />
          <circle cx="40" cy="65" r="2" fill="#38bdf8" />
          <circle cx="32" cy="34" r="2" fill="#38bdf8" />

          {/* Eye landmarks */}
          <circle cx="42" cy="40" r="2.5" fill="#10b981" />
          <circle cx="58" cy="40" r="2.5" fill="#10b981" />
        </svg>

        <div className="absolute bottom-1 bg-white/90 dark:bg-black/85 px-1.5 py-0.5 rounded text-[8px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-xs">
          TensorRT FP16
        </div>
      </div>

      {/* Stacked vision feature cards */}
      <div className="relative flex-1 max-w-[220px] space-y-2">
        <div className="rounded-2xl bg-white/80 dark:bg-[#181926] border border-gray-200/80 dark:border-white/10 p-2.5 shadow-xs backdrop-blur-md">
          <div className="flex items-center justify-between text-[9.5px] text-gray-600 dark:text-zinc-400 mb-1">
            <span className="text-purple-700 dark:text-purple-300 font-medium">Confidence Score</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">98.7%</span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-zinc-800 rounded-full h-1.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-[98.7%]" />
          </div>
        </div>

        <div className="rounded-2xl bg-white/80 dark:bg-[#181926] border border-gray-200/80 dark:border-purple-500/20 p-2.5 shadow-xs flex items-center justify-between text-[9.5px] backdrop-blur-md">
          <span className="text-gray-700 dark:text-zinc-300 font-medium">Inference Engine</span>
          <span className="text-blue-600 dark:text-cyan-400 font-bold">TensorRT GPU</span>
        </div>
      </div>
    </div>
  );
}

// --- Real-time Streaming Intelligence (Card 5) - Liquid Glass -----------------
function StardustCopyStream() {
  return (
    <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-purple-50/60 via-indigo-50/50 to-purple-50/60 dark:from-purple-950/20 dark:via-purple-900/30 dark:to-purple-950/20 border border-purple-200/60 dark:border-purple-500/20 backdrop-blur-md">
      {/* Liquid stardust particle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-30 dark:opacity-60 pointer-events-none" />

      {/* Streaming copy text pills */}
      <div className="relative z-10 px-4 space-y-2.5 w-full max-w-sm">
        <div className="text-[10px] text-purple-900 dark:text-purple-200 font-medium bg-white/90 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-500/30 rounded-xl px-3 py-1.5 shadow-xs backdrop-blur-md flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
          <span>Automated Agent Orchestration</span>
        </div>
        <div className="text-[10px] text-gray-800 dark:text-zinc-300 font-medium bg-white/90 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-3 py-1.5 shadow-xs backdrop-blur-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shrink-0" />
          <span>Zero boilerplate, event-driven streaming</span>
        </div>
      </div>
    </div>
  );
}

// --- AI Grimoire / Spellbook (Card 6) -----------------------------------------
function AISpellbook() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      {/* Liquid Purple glow */}
      <div className="absolute w-24 h-24 bg-purple-500/25 dark:bg-purple-600/35 rounded-full blur-xl" />

      {/* 3D Book */}
      <div className="relative w-28 h-36 rounded-r-2xl rounded-l-xs bg-gradient-to-r from-purple-800 via-indigo-900 to-purple-950 dark:from-purple-950 dark:via-[#261047] dark:to-[#3b0764] border-t border-b border-r border-purple-400/40 shadow-[0_12px_28px_rgba(147,51,234,0.25)] dark:shadow-[0_12px_28px_rgba(0,0,0,0.8)] p-3 flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300">
        {/* Spine line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-1 bg-purple-400/40 rounded-full border-r border-purple-300/30" />

        {/* Arcane neural seal */}
        <div className="w-12 h-12 rounded-full border border-purple-300/50 bg-purple-900/60 flex items-center justify-center shadow-inner">
          <Bot className="w-6 h-6 text-purple-200 filter drop-shadow-[0_0_6px_rgba(233,213,255,0.8)]" />
        </div>

        <span className="text-[9px] tracking-wider text-purple-100 mt-2.5 font-semibold uppercase">
          LoRA • PEFT
        </span>
        <span className="text-[8px] text-purple-300/90 font-medium">vLLM 4-bit</span>
      </div>
    </div>
  );
}

// --- System Architecture Tree (Card 7) - Liquid Glass ------------------------
function SystemArchitectureTree() {
  return (
    <div className="relative w-full pt-2 flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white/80 dark:bg-[#0f1017] border border-gray-200/80 dark:border-white/10 p-3 shadow-sm dark:shadow-xl space-y-1.5 relative overflow-hidden backdrop-blur-md">
        {/* Layer 1 - Root cluster */}
        <div className="flex items-center justify-between text-[10px] text-gray-700 dark:text-zinc-400 px-2.5 py-1 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 dark:text-zinc-500 font-bold">#</span>
            <span className="font-semibold text-gray-900 dark:text-zinc-300">Cluster::Production-East</span>
          </div>
          <span className="text-[8px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-1.5 py-0.2 rounded font-semibold">
            Healthy
          </span>
        </div>

        {/* Layer 2 - Selected Active RAG frame */}
        <div className="flex items-center justify-between text-[10px] bg-blue-50/90 dark:bg-blue-500/15 border border-blue-300/80 dark:border-cyan-400/50 text-blue-900 dark:text-cyan-200 px-2.5 py-1.5 rounded-xl shadow-xs">
          <div className="flex items-center gap-2">
            <span className="text-blue-600 dark:text-cyan-400 font-bold">#</span>
            <span className="font-semibold">service-rag-vector-ingest</span>
          </div>
          <span className="text-[8px] bg-blue-600/10 dark:bg-cyan-400/20 text-blue-700 dark:text-cyan-200 border border-blue-400/30 dark:border-cyan-300/40 px-1.5 py-0.2 rounded font-semibold">
            Active
          </span>
        </div>

        {/* Layer 3 */}
        <div className="flex items-center justify-between text-[10px] text-gray-600 dark:text-zinc-400 px-2.5 py-1 rounded-lg pl-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 dark:text-zinc-500 font-medium">↳ #</span>
            <span className="font-medium">worker-gemini-multimodal</span>
          </div>
          <span className="text-[8px] text-gray-500 dark:text-zinc-500 font-semibold">340 req/s</span>
        </div>

        {/* Layer 4 */}
        <div className="flex items-center justify-between text-[10px] text-gray-600 dark:text-zinc-400 px-2.5 py-1 rounded-lg pl-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 dark:text-zinc-500 font-medium">↳ #</span>
            <span className="font-medium">database-postgres-shards</span>
          </div>
          <span className="text-[8px] text-gray-500 dark:text-zinc-500 font-semibold">Synchronized</span>
        </div>
      </div>
    </div>
  );
}

// --- 3D UI Stack Pills (Card 8) ----------------------------------------------
function StackPills3D() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center gap-2">
      {/* 3D colorful pill column */}
      <div className="flex flex-col gap-1.5">
        <div className="w-8 h-4 rounded-full bg-gradient-to-r from-red-500 to-amber-500 shadow-md" />
        <div className="w-8 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-md" />
        <div className="w-8 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md" />
        <div className="w-8 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-md" />
      </div>

      {/* 3D curved violet ribbon */}
      <svg viewBox="0 0 100 100" className="w-20 h-20 drop-shadow-[0_8px_16px_rgba(168,85,247,0.4)]">
        <defs>
          <linearGradient id="ribbonG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
        </defs>
        <path
          d="M20 10 C60 10 80 40 80 60 C80 80 50 90 30 80 C10 70 30 40 50 30"
          fill="none"
          stroke="url(#ribbonG)"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// --- Main Skills Bento Grid Section with Liquid Glassmorphism in Light & Dark -
export default function SkillsGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFullDirectory, setShowFullDirectory] = useState(false);

  // Filter categories and their skills based on the search input
  const searchedCategories = techStackCategories
    .map((category) => {
      const filteredSkills = category.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter((category) => category.skills.length > 0);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff] dark:from-[#06070c] dark:via-[#090a12] dark:to-[#06070c]"
    >
      {/* ── Liquid Ambient Mesh Glow Orbs (Dynamic in both light & dark) ───── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.24),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-purple-400/15 to-indigo-300/15 dark:from-purple-600/20 dark:to-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/12 to-blue-300/12 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Subtle micro-dot canvas overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-35 dark:opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 dark:text-white">
            Skills & Capabilities
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Autonomous multi-agent orchestration, enterprise vector RAG, distributed cloud backends, and human-centered interfaces.
          </p>
        </div>

        {/* ─── 8-CARD BENTO GRID (LIQUID GLASS IN BOTH BLACK & WHITE MODES) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: 1 col */}
          <div className="lg:col-span-1 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/70 dark:bg-[#12131b]/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)] dark:hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-white/20 before:to-transparent">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Design with AI magic
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                Autonomous multi-agent orchestration with LangChain, tool calling, and structured reasoning.
              </p>
            </div>
            <Purple3DStars />
          </div>

          {/* Card 2: 2 cols */}
          <div className="lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/70 dark:bg-[#12131b]/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)] dark:hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-white/20 before:to-transparent">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Generate scalable tooling for anything
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                Production-grade languages, libraries, and cloud runtimes battle-tested across enterprise systems.
              </p>
            </div>
            <TechIconGrid />
          </div>

          {/* Card 3: 1 col */}
          <div className="lg:col-span-1 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/70 dark:bg-[#12131b]/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)] dark:hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-white/20 before:to-transparent">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Conjure up intelligence
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                Semantic vector retrieval with hybrid dense-sparse search, embeddings, and chunk reranking.
              </p>
            </div>
            <SemanticRAGCard />
          </div>

          {/* Card 4: 2 cols */}
          <div className="lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/70 dark:bg-[#12131b]/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)] dark:hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-white/20 before:to-transparent">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Computer Vision & Deep Learning
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                Real-time object detection, CNN feature maps, and facial recognition with TensorRT FP16 acceleration.
              </p>
            </div>
            <VisionDetectionMockup />
          </div>

          {/* Card 5: 2 cols */}
          <div className="lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/70 dark:bg-[#12131b]/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)] dark:hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-white/20 before:to-transparent">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Wave goodbye to boilerplate & downtime
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                Replacing static pipelines with event-driven streaming, automated token optimization, and zero downtime.
              </p>
            </div>
            <StardustCopyStream />
          </div>

          {/* Card 6: 1 col */}
          <div className="lg:col-span-1 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/70 dark:bg-[#12131b]/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)] dark:hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-white/20 before:to-transparent">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Your AI spellbook
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                Fine-tuned LoRA adapters, PEFT optimization, and 4-bit quantized edge deployment recipes.
              </p>
            </div>
            <AISpellbook />
          </div>

          {/* Card 7: 2 cols */}
          <div className="lg:col-span-2 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/70 dark:bg-[#12131b]/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)] dark:hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-white/20 before:to-transparent">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Magically architect your systems
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                Self-healing microservice clusters, automated AWS orchestration, and distributed PostgreSQL shards.
              </p>
            </div>
            <SystemArchitectureTree />
          </div>

          {/* Card 8: 1 col */}
          <div className="lg:col-span-1 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group bg-white/70 dark:bg-[#12131b]/80 backdrop-blur-2xl border border-white/80 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.14)] dark:hover:shadow-[0_16px_40px_rgba(168,85,247,0.22)] hover:border-purple-400/60 dark:hover:border-purple-500/50 before:absolute before:inset-x-0 before:top-0 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-white/90 dark:before:via-white/20 before:to-transparent">
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                Full-Stack ecosystem
              </h3>
              <p className="mt-1.5 text-xs text-gray-600 dark:text-zinc-400 leading-relaxed">
                Fluid, interactive responsive web and mobile interfaces built with React 19, Flutter, and Tailwind.
              </p>
            </div>
            <StackPills3D />
          </div>
        </div>

        {/* ─── EXPANDABLE FULL SKILLS DIRECTORY WITH SEARCH ────────────────── */}
        <div className="mt-14 pt-10 border-t border-gray-200/80 dark:border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                Detailed Technical Competency Directory
              </h4>
              <p className="text-xs text-gray-500 dark:text-zinc-400">
                Explore all 60+ categorized languages, frameworks, and tools.
              </p>
            </div>

            <button
              onClick={() => setShowFullDirectory(!showFullDirectory)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-xs font-medium text-gray-700 dark:text-zinc-300 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
            >
              <span>{showFullDirectory ? "Collapse Directory" : "Browse All Skills & Levels"}</span>
              {showFullDirectory ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {showFullDirectory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Search bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search skills (e.g. React, Python, AWS, RAG)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 text-xs rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/40 shadow-xs"
                />
              </div>

              {/* Categorized chips */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchedCategories.map((category) => (
                  <div
                    key={category.title}
                    className="rounded-3xl bg-white/80 dark:bg-[#14151f]/90 border border-gray-200/80 dark:border-white/5 p-5 flex flex-col gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-md backdrop-blur-xl"
                  >
                    <h5 className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                      {category.title}
                    </h5>

                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 text-[10px] bg-gray-50/90 dark:bg-white/5 border border-gray-200/70 dark:border-white/10 text-gray-800 dark:text-zinc-200 px-2.5 py-1 rounded-xl font-medium"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              skill.level === "Expert"
                                ? "bg-emerald-500 dark:bg-emerald-400"
                                : skill.level === "Advanced"
                                ? "bg-blue-500 dark:bg-blue-400"
                                : "bg-amber-500 dark:bg-amber-400"
                            }`}
                          />
                          {skill.name}
                          <span className="text-[8px] text-gray-500 dark:text-zinc-500">({skill.experience})</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
