import React, { useRef } from "react";
import { ProjectItem } from "../data";
import {
  Github,
  Globe,
  X,
  Play,
  ExternalLink,
  Sliders,
  Plus,
  Search,
} from "lucide-react";
import { motion } from "motion/react";

// ─── Authentic Vector Brand SVGs for 3x3 Tactile App Tiles ───────────────────
function TechBrandSVG({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const norm = name.toLowerCase();

  if (norm.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    );
  }
  if (norm.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M11.914 2C6.732 2 7.054 4.254 7.054 4.254l.006 2.34h4.94v.702H5.06S2 7.054 2 12.235c0 5.183 2.668 5.02 2.668 5.02h1.594v-2.261s-.086-2.669 2.628-2.669h4.9v-.742H8.89s-2.585.04-2.585-2.545c0-2.585 2.257-2.505 2.257-2.505h7.294s2.425.04 2.425-2.302c0-2.342-2.138-2.232-2.138-2.232l-4.228.001zM9.2 4.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm2.886 17.6c5.182 0 4.86-2.254 4.86-2.254l-.006-2.34h-4.94v-.702h6.938S22 16.946 22 11.765c0-5.183-2.668-5.02-2.668-5.02h-1.594v2.261s.086 2.669-2.628 2.669h-4.9v.742h4.898s2.585-.04 2.585 2.545c0 2.585-2.257 2.505-2.257 2.505H8.102s-2.425-.04-2.425 2.302c0 2.342 2.138 2.232 2.138 2.232l4.271-.001zm2.714-2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" />
      </svg>
    );
  }
  if (norm.includes("typescript") || norm === "ts") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="2" y="2" width="20" height="20" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8.5 15.5V9.5h4v1.5h-2.3v4.5H8.5zm5.5 0v-1.4c.5.3 1.1.5 1.7.5.7 0 1.1-.3 1.1-.7 0-.4-.3-.6-.9-.8l-.6-.2c-1.1-.4-1.6-.9-1.6-1.8 0-1.2 1-2 2.4-2 .8 0 1.5.2 2 .5l-.5 1.3c-.4-.3-.9-.4-1.4-.4-.6 0-.9.3-.9.6 0 .4.3.6.9.8l.6.2c1.2.4 1.8 1 1.8 1.9 0 1.3-1 2.1-2.5 2.1-.9 0-1.7-.3-2.1-.6z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (norm.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M2.5 12.8c.3 3.5 3 6.3 6.5 6.7 4.2.4 7.9-1.7 9.8-4.9.4.1.8.1 1.2.1 2.2 0 3.8-1.5 4-3.5-1.4.1-2.7-.4-3.6-1.4-.4-.5-.7-1-1-1.6-1.5.2-2.9.8-3.9 1.9-1.2-.2-2.4-.2-3.6 0v-1.6H9.7v1.7c-.5 0-1 .1-1.5.2v-1.9H6.1v2.1c-.8.3-1.6.7-2.3 1.3l-.2.1c-.5.4-.9.9-1.1 1.5zm6.1-5.7h1.9v1.9H8.6V7.1zm2.4 0h1.9v1.9H11V7.1zm-4.8 0h1.9v1.9H6.2V7.1zm2.4-2.4h1.9v1.9H8.6V4.7zm2.4 0h1.9v1.9H11V4.7z" />
      </svg>
    );
  }
  if (norm.includes("aws")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M6.8 14.5c0 .6.4 1 1.1 1 .8 0 1.6-.5 2.1-1.2v2c-.7.5-1.6.7-2.5.7-1.8 0-2.8-1.1-2.8-2.7 0-2 1.3-3.1 3.2-3.1.8 0 1.5.2 2 .5v2.8H7.9v-.8h2.3v-.6c-.3-.3-.8-.5-1.3-.5-1.1 0-1.8.8-1.8 1.9zm8.9 2.3l-1.8-5.3h1.8l1 3.4 1-3.4h1.8l-1.9 5.3h-1.9zm-4.7-.2c-3.8 2-8.3 1.2-10-.3l-.4-.4 1-.8.3.3c1.4 1.2 5.1 1.8 8.4-.1l.7 1.3zm7.8 1.6c-.4.5-1.1.9-1.9 1.1l-.3-.7c.6-.2 1.1-.5 1.4-.8l.8.4z" />
      </svg>
    );
  }
  if (norm.includes("postgres") || norm.includes("sql") || norm.includes("mysql") || norm.includes("sqlite") || norm.includes("database") || norm.includes("knex")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    );
  }
  if (norm.includes("redis")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2.5l8 4.2v9.6l-8 4.2-8-4.2V6.7l8-4.2z" />
        <path d="M12 2.5v18M4 6.7l8 4.5 8-4.5M4 16.3l8-4.5 8 4.5" strokeWidth="1.2" opacity="0.6" />
      </svg>
    );
  }
  if (norm.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.3-.9 1.4.3 2.4 1.3 3.5 2.4 1.8 1.8 3.9 3.9 8.7 3.9 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.3.9-1.4-.3-2.4-1.3-3.5-2.4C18.9 8.1 16.8 6 12 6zm-8 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.2 3.3-.9 1.4.3 2.4 1.3 3.5 2.4 1.8 1.8 3.9 3.9 8.7 3.9 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.2-3.3.9-1.4-.3-2.4-1.3-3.5-2.4C10.9 14.1 8.8 12 4 12z" />
      </svg>
    );
  }
  if (norm.includes("fastapi")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M13 3L6 14h6l-1 7 8-11h-6l1-7z" />
      </svg>
    );
  }
  if (norm.includes("vite")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M19.5 3.5L12.5 18 10 13l-4.5-9 6 1.5 8-2z" />
        <path d="M12 6.5L8.5 12h3.5l-.5 4.5 4.5-6h-3.5L12 6.5z" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }
  if (norm.includes("node")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2l9 5.2v10.4L12 22l-9-4.4V7.2L12 2zm0 2.3L5.5 8.1v7.8L12 19.7l6.5-3.8V8.1L12 4.3z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }
  if (norm.includes("express")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M7 9h4M7 12h3M7 15h4M14 9l3 6M17 9l-3 6" />
      </svg>
    );
  }
  if (norm.includes("socket")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    );
  }
  if (norm.includes("gemini") || norm.includes("groq") || norm.includes("ai") || norm.includes("llm") || norm.includes("transformers")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
      </svg>
    );
  }
  if (norm.includes("engine") || norm.includes("ledger") || norm.includes("double-entry") || norm.includes("algorithm")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18M5 8l7-5 7 5M5 8c0 3 3 5 3 5s3-2 3-5M13 8c0 3 3 5 3 5s3-2 3-5M3 21h18" />
      </svg>
    );
  }
  if (norm.includes("framer") || norm.includes("motion") || norm.includes("recharts") || norm.includes("chart")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 20h16M7 16V10M12 16V6M17 16v-4" />
      </svg>
    );
  }

  // Fallback crisp chip icon
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
    </svg>
  );
}

// ─── Rainbow Iris Circle (Authentic Automator Logo) ───────────────────────────
function RainbowIris() {
  return (
    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
  );
}

// ─── Project Unique Bento Metadata Generator ──────────────────────────────────
interface ProjectBentoData {
  card1: {
    yellow: { tag: string; metric: string; sub: string; title: string; value: string; status: string };
    blue: { tag: string; metric: string; sub: string; title: string; value: string; status: string };
    features: [string, string, string, string];
  };
  capabilities: string[];
  outcomeTitles: [string, string];
}

function getProjectBentoData(project: ProjectItem): ProjectBentoData {
  const slug = project.slug || "";

  if (slug === "accounting-automation") {
    return {
      card1: {
        yellow: { tag: "LEDGER", metric: "0.00", sub: "Drift Free", title: "Invoice Voucher", value: "$4,250.00", status: "Reconciled" },
        blue: { tag: "SHA-256", metric: "99.8%", sub: "SHA Match", title: "Bank Statement", value: "142 Txns", status: "Verified" },
        features: ["Double-Entry Core", "SHA-256 Deduplication", "3-Way Fuzzy Match", "Statutory Tax Engine"]
      },
      capabilities: ["# Ingest Feeds", "Hash SHA-256", "Schema Extract", "3-Way Match", "Rule Engine", "Maker-Checker"],
      outcomeTitles: ["85%+ Manual Work Reduction", "100% Ledger Balance Guarantee"]
    };
  }

  if (slug === "ai-research-ops") {
    return {
      card1: {
        yellow: { tag: "BENCHMARK", metric: "100+", sub: "Audited", title: "API Specs", value: "11 Claims", status: "Audited" },
        blue: { tag: "VERIFIER", metric: "95.0%", sub: "Verified", title: "Corroboration", value: "0 Hallucination", status: "Verified" },
        features: ["6-Stage Agent Pipe", "100-App Benchmark", "Pydantic Schema QA", "Dual-Agent Verifier"]
      },
      capabilities: ["# Doc Discovery", "Pydantic v2", "Tri-Rubric", "Blind Verify", "Human QA", "MCP Adapters"],
      outcomeTitles: ["95.0% Verified Corroboration Accuracy", "Zero Schema Defects via Pydantic v2"]
    };
  }

  if (slug === "text2viz-ai-analytics-visualization-platform") {
    return {
      card1: {
        yellow: { tag: "VOICE SQL", metric: "<2.0s", sub: "Fast Query", title: "Speech Stream", value: "Natural English", status: "Synthesized" },
        blue: { tag: "AUTO-VIZ", metric: "7 Types", sub: "Auto-Viz", title: "Dynamic Chart", value: "Read-Only SELECT", status: "Rendered" },
        features: ["Voice & SQL Studio", "Schema Catalog Sync", "Auto-Chart Engine", "Safe Read-Only SELECT"]
      },
      capabilities: ["# Speech-to-Text", "LLaMA-3 SQL", "Catalog Cache", "Syntax Sanitize", "Chart Auto-Pick", "Insight Engine"],
      outcomeTitles: ["Direct Speech & Voice to SQL Querying", "Destructive Query Prevention & Safety"]
    };
  }

  if (slug === "labskraft-assessment-learning-cloud-platform") {
    return {
      card1: {
        yellow: { tag: "EXAM RUN", metric: "4 Types", sub: "Exam Labs", title: "Assessment", value: "SQL & MCQ Labs", status: "Active" },
        blue: { tag: "PROCTOR", metric: "Live", sub: "Proctoring", title: "Candidate", value: "Anti-Tamper Scan", status: "Proctored" },
        features: ["Multi-Round Exam Core", "Live Browser Sandbox", "Candidate Proctoring", "Cloud VM Runtimes"]
      },
      capabilities: ["# Deploy Schema", "Knex MySQL", "Live Sandbox", "Webcam Proctor", "VM Terminals", "Score Exports"],
      outcomeTitles: ["80% Evaluator Assessment Overhead Cut", "High-Throughput Sandboxed Cloud Engine"]
    };
  }

  if (slug === "aws-manager-automated-cloud-optimization-billing-suite") {
    return {
      card1: {
        yellow: { tag: "IDLE SCAN", metric: "70%", sub: "Idle Rate", title: "Cloud Instance", value: "Non-Whitelisted", status: "Halted" },
        blue: { tag: "FIN-OPS", metric: "30%+", sub: "Cost Saved", title: "Cost Ledger", value: "Google Sheets", status: "Optimized" },
        features: ["Idle-Stop Automation", "CPU Utilization Scans", "Regional Resource Map", "Google Sheets Sync"]
      },
      capabilities: ["# Boto3 Audit", "Idle Scanner", "Cron Schedule", "Fernet SQLite", "Sheets Sync", "Regional Maps"],
      outcomeTitles: ["30%+ Cloud Infrastructure Cost Savings", "Automated Multi-Region Audit Feeds"]
    };
  }

  if (slug === "ai-powered-b2b-scraper-analytics-platform") {
    return {
      card1: {
        yellow: { tag: "CATALOG", metric: "239+", sub: "Products", title: "Product Data", value: "12+ Categories", status: "Harvested" },
        blue: { tag: "STREAM", metric: "100%", sub: "SSE Stream", title: "Live Terminal", value: "5 Chart Widgets", status: "Streaming" },
        features: ["Multi-Market Crawler", "Synthetic Fallback", "LLaMA Clean Parser", "Live SSE Terminal"]
      },
      capabilities: ["# Header Rotate", "LLaMA-3.1 Clean", "SQLite Schema", "SSE Streamer", "Chart.js View", "Synthetic Fallback"],
      outcomeTitles: ["Automated Multi-Platform B2B Parsing", "Continuous Uptime via Synthetic Fallback"]
    };
  }

  if (slug === "ai-ppt-presentation-generator") {
    return {
      card1: {
        yellow: { tag: "AI SLIDES", metric: "1,500", sub: "Decks Built", title: "Slide Deck", value: "11+ Themes", status: "Compiled" },
        blue: { tag: "HYBRID DB", metric: "<3.0s", sub: "AI Speed", title: "Deck Outline", value: "JSON Fallback", status: "Synced" },
        features: ["AI Outline Generator", "Vector SVG Synthesis", "Open Office XML Engine", "Theme & Font Pairings"]
      },
      capabilities: ["# Prompt Ingest", "Groq LLaMA 3.3", "PptxGenJS XML", "SVG Synthesis", "JWT Sessions", "Theme Layouts"],
      outcomeTitles: ["Native Microsoft PowerPoint (.pptx) Compiler", "Dual-Redundant AI Generation Fallback"]
    };
  }

  if (slug === "mano-workforce-intelligence-platform") {
    return {
      card1: {
        yellow: { tag: "GEOFENCE", metric: "500+", sub: "Staff Users", title: "Check-In Log", value: "GPS Validated", status: "Verified" },
        blue: { tag: "SOCKET BUS", metric: "<30ms", sub: "Socket Ping", title: "Message Bus", value: "Encrypted Logs", status: "Connected" },
        features: ["GPS Polygon Check-Ins", "Socket.io Direct Messaging", "AI Candidate Resume Scorer", "HR Document Studio"]
      },
      capabilities: ["# GPS Boundary", "Socket.io Hub", "JWT Cookie Auth", "AI PDF Resume", "CTC Calculator", "Redis Queues"],
      outcomeTitles: ["Production Workforce Platform with 500+ Daily Users", "Real-Time Geofenced Attendance & Socket Hub"]
    };
  }

  if (slug === "ai-powered-forecasting-inventory-optimization") {
    return {
      card1: {
        yellow: { tag: "FORECAST", metric: "92%", sub: "Accuracy", title: "Perishable Stock", value: "Dynamic Pricing", status: "Optimized" },
        blue: { tag: "SPOILAGE", metric: "-30%", sub: "Waste Cut", title: "Markdown Engine", value: "Automated Alerts", status: "Calculated" },
        features: ["Time Series Forecasting", "Dynamic Markdown Solver", "Perishable Shelf-Life ML", "Supply Chain Alerts"]
      },
      capabilities: ["# Time Series", "Spoilage Scoring", "Price Elasticity", "REST Alerts", "Heatmap Map", "Stock Forecast"],
      outcomeTitles: ["92%+ Perishable Demand Forecasting Accuracy", "30% Food Spoilage & Inventory Waste Reduction"]
    };
  }

  if (slug === "ai-driven-construction-erp-rag-intelligence") {
    return {
      card1: {
        yellow: { tag: "RAG CHAT", metric: "1,000", sub: "Files RAG", title: "Review Board", value: "Vector Q&A", status: "Indexed" },
        blue: { tag: "REPORTS", metric: "60%", sub: "Speed Gain", title: "Variance KPI", value: "Automated Draft", status: "Generated" },
        features: ["FAISS RAG Chatbot", "LLM Weekly Summarizer", "Multi-Module ERP Core", "Schedule Variance KPIs"]
      },
      capabilities: ["# FAISS Vectors", "LangChain Hub", "MySQL Relational", "RAG Chatbot", "Weekly Summarizer", "Approval Chains"],
      outcomeTitles: ["60% Reduction in Administrative Reporting Time", "Sub-3s RAG Search Over 1,000+ Project Files"]
    };
  }

  if (slug === "ai-based-crisis-management-system") {
    return {
      card1: {
        yellow: { tag: "SATELLITE", metric: "92%", sub: "Accuracy", title: "Hazard Map", value: "Damage Vision", status: "Detected" },
        blue: { tag: "SOS ROUTE", metric: "<8 min", sub: "Dispatch", title: "Evacuation Plan", value: "Offline SMS Link", status: "Dispatched" },
        features: ["Satellite Vision Bands", "Multi-Source Signal Fusion", "NLP Distress Prioritizer", "Offline SMS Routing"]
      },
      capabilities: ["# Sentinel Ingest", "Deep Learning CV", "NLP Citizen SOS", "Graph Escapes", "SMS Fallback", "Civil Feeds"],
      outcomeTitles: ["Emergency Response Time Cut from 45 to 8 Minutes", "92% Disaster Level Classification Accuracy"]
    };
  }

  if (slug === "ai-powered-skill-mapper") {
    return {
      card1: {
        yellow: { tag: "ROADMAP", metric: "500+", sub: "Roadmaps", title: "Career Map", value: "Adaptive Flow", status: "Synthesized" },
        blue: { tag: "GAP MATRIX", metric: "94%", sub: "Match Score", title: "Audit Report", value: "100+ Gaps Mapped", status: "Resolved" },
        features: ["LangChain Career Agent", "Psychometric Assessment", "Skill-Gap Sync", "Milestone Planner"]
      },
      capabilities: ["# Psychometrics", "RAG Vector Store", "LangChain Match", "Career Simulator", "Progress Planner", "CV Parser"],
      outcomeTitles: ["94% User Approval Rating for Career Pathways", "Automated Skill Gap Mapping Across 500+ Roles"]
    };
  }

  // Default dynamic extraction for any other project
  const statKeys = Object.keys(project.stats || {});
  const s1Val = statKeys[0] ? project.stats[statKeys[0]].replace(/\n/g, " ") : "High-Performance";
  const s2Val = statKeys[1] ? project.stats[statKeys[1]].replace(/\n/g, " ") : "Production Ready";

  return {
    card1: {
      yellow: {
        tag: "METRIC",
        metric: s1Val.slice(0, 8),
        sub: "Deterministic",
        title: "Primary Module",
        value: "Verified Spec",
        status: "Active"
      },
      blue: {
        tag: "QA AUDIT",
        metric: s2Val.slice(0, 8),
        sub: "Execution Pass",
        title: "Secondary Unit",
        value: "Audited Invariant",
        status: "Verified"
      },
      features: [
        project.features[0] ? project.features[0].split(":")[0].slice(0, 24) : "Autonomous Core",
        project.features[1] ? project.features[1].split(":")[0].slice(0, 24) : "Deterministic QA",
        project.features[2] ? project.features[2].split(":")[0].slice(0, 24) : "Real-Time Telemetry",
        project.features[3] ? project.features[3].split(":")[0].slice(0, 24) : "Security Engine"
      ]
    },
    capabilities: [
      "# Data Pipeline",
      "Schema Extract",
      "Core Invariant",
      "Event Dispatch",
      "Audit Logging",
      "Rule Engine"
    ],
    outcomeTitles: [
      project.outcomes[0] ? project.outcomes[0].split(" ").slice(0, 4).join(" ") : "Verified Execution Impact",
      project.outcomes[1] ? project.outcomes[1].split(" ").slice(0, 4).join(" ") : "High Reliability Assurance"
    ]
  };
}

// ─── Main Project Automator Popup Component ───────────────────────────────────
export default function ProjectAutomatorPopup({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const techArchRef = useRef<HTMLDivElement | null>(null);

  // Clean URL string for domain capsule
  const domainString = project.liveLink
    ? project.liveLink.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : project.link
    ? project.link.replace(/^https?:\/\/github\.com\//, "github.com/")
    : "project.live";

  // Unique metadata tailored for THIS specific project
  const bentoData = getProjectBentoData(project);

  // Clean deduplicated list of tech icons for the 3x3 tactile grid
  const rawTech = (project.tech || []).map((t) => {
    if (t.includes("React")) return "React";
    if (t.includes("TypeScript") || t === "TS") return "TypeScript";
    if (t.includes("Python")) return "Python";
    if (t.includes("FastAPI")) return "FastAPI";
    if (t.includes("Tailwind")) return "Tailwind CSS";
    if (t.includes("Vite")) return "Vite";
    if (t.includes("Express")) return "Express";
    if (t.includes("Node")) return "Node.js";
    if (t.includes("MySQL") || t.includes("PostgreSQL") || t.includes("SQLite") || t.includes("SQL")) return "SQL";
    if (t.includes("AWS")) return "AWS";
    if (t.includes("Redis")) return "Redis";
    if (t.includes("Socket")) return "Socket.io";
    if (t.includes("Gemini") || t.includes("Groq") || t.includes("LLaMA") || t.includes("AI")) return "AI";
    return t;
  });

  const displayTechList = Array.from(
    new Set([
      ...rawTech,
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "AWS",
      "SQL",
      "Redis",
      "Tailwind CSS",
    ])
  ).slice(0, 9);

  const scrollToTechArch = () => {
    techArchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 4 Workflow stages unique to THIS project for Card 3's diagram window
  const rawWorkflow = project.workflow || [];
  const card3Workflow = [
    rawWorkflow[0] ? rawWorkflow[0].split(":")[0] : "Primary Ingestion & Discovery",
    rawWorkflow[1] ? rawWorkflow[1].split(":")[0] : "Schema Normalization & Parsing",
    rawWorkflow[2] ? rawWorkflow[2].split(":")[0] : "Core Execution & Verification",
    rawWorkflow[3] ? rawWorkflow[3].split(":")[0] : "Consolidated Audit & Reporting",
  ];

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/40 dark:bg-black/80 backdrop-blur-sm dark:backdrop-blur-md flex justify-end transition-opacity duration-300 font-poppins text-gray-900 dark:text-white"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 280 }}
        className="w-full max-w-full lg:max-w-4xl xl:max-w-5xl h-screen bg-white dark:bg-[#0c0d14] text-gray-900 dark:text-white border-l border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-[0_0_90px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col relative transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dot Matrix Background for both Light and Dark themes */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff18_1px,transparent_1px)] [background-size:24px_24px] opacity-75 z-0" />

        {/* ── Compact Sticky Top Bar ────────────────────────────────────────── */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#0c0d14]/95 py-3 px-4 sm:px-6 flex justify-between items-center z-30 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shrink-0 transition-colors duration-200">
          <div className="flex items-center gap-2 min-w-0 pr-3">
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 dark:text-zinc-500 uppercase">
              Projects
            </span>
            <span className="text-gray-300 dark:text-zinc-700">/</span>
            <span className="text-[10.5px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-900/40">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Quick jump to Technical Architecture */}
            <button
              onClick={scrollToTechArch}
              className="hidden md:inline-flex items-center px-3.5 py-1 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-gray-200 dark:border-white/10 text-[11px] font-medium text-gray-800 dark:text-zinc-200 shadow-xs transition-all cursor-pointer hover:border-gray-300 dark:hover:border-white/20"
            >
              Technical Architecture
            </button>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-gray-800 dark:text-zinc-200 text-xs font-semibold shadow-xs transition-all hover:scale-102"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span>GitHub</span>
              </a>
            )}

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-all hover:scale-102"
                title="Open Live Application"
              >
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span>Live App</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-700 dark:text-zinc-200 transition-all cursor-pointer hover:scale-105"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Scrollable Body with Exact Automator Bento Layout ─────────────── */}
        <div
          ref={scrollContainerRef}
          className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 relative z-10 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-zinc-800"
        >
          {/* Header Title & Description (Full text, no ellipsis) */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-2 pt-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-950 dark:text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 dark:text-zinc-300 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Capsule Link */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
              <a
                href={project.liveLink || project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white dark:bg-[#161722] border border-gray-200 dark:border-white/10 shadow-xs text-xs font-medium text-gray-800 dark:text-zinc-200 hover:border-blue-500/50 hover:scale-102 transition-all duration-200 group"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-900 dark:text-white font-medium">{domainString}</span>
                <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>

              {project.badge && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-[11px] font-medium text-blue-700 dark:text-blue-400">
                  {project.badge}
                </span>
              )}
            </div>
          </div>

          {/* Video Walkthrough Player */}
          {project.video && (
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-xl overflow-hidden bg-black border border-gray-200 dark:border-white/10 shadow-xl aspect-video group">
                <video
                  key={project.video}
                  src={project.video}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-3 left-3 pointer-events-none flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] text-white font-medium shadow-md">
                  <Play className="w-3 h-3 fill-current text-blue-400" />
                  <span>Full Demo & Architecture Walkthrough</span>
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* THE 4 BENTO CARDS: LESS ROUNDED CORNERS (rounded-xl) & UNIQUE PER PROJECT */}
          {/* ─────────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 max-w-6xl mx-auto">

            {/* ── CARD 1: "Automate the busy work away" ─────────────────────── */}
            <div className="rounded-xl bg-[#f8fafc] dark:bg-[#13141f] border border-gray-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-sm dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden transition-colors duration-200">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white tracking-tight">
                  Automate the busy work away
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-snug font-normal">
                  Automator turns hours of long, tedious busy work into a single click.
                </p>
              </div>

              {/* Exact Layout: 2 Perfectly Aligned Preview Cards on Left + Matched Automator Window on Right */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-4 items-stretch">
                {/* 2 Preview Item Cards on Left (6 cols, perfectly equalized heights and baselines) */}
                <div className="sm:col-span-6 grid grid-cols-2 gap-2 h-full min-w-0">
                  {/* Preview Item 1: Yellow/Amber Card */}
                  <div className="rounded-lg bg-white dark:bg-[#1a1b27] border border-amber-200/70 dark:border-white/[0.08] p-2.5 flex flex-col justify-between shadow-xs h-full min-w-0 overflow-hidden transition-colors duration-200">
                    {/* Upper thumbnail container with fixed height for 100% precision alignment */}
                    <div className="h-24 sm:h-26 rounded-md bg-gradient-to-tr from-amber-50 to-orange-50/70 dark:from-amber-500/20 dark:via-orange-500/15 dark:to-yellow-500/10 border border-amber-300/40 dark:border-amber-500/25 flex flex-col justify-between p-2 min-w-0 overflow-hidden">
                      <div className="flex items-center justify-between min-w-0">
                        <span className="text-[7.5px] font-bold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 uppercase tracking-wider truncate max-w-full block">
                          {bentoData.card1.yellow.tag}
                        </span>
                      </div>
                      <div className="text-center my-auto py-0.5 px-0.5 min-w-0 w-full overflow-hidden">
                        <span className="text-sm sm:text-[15px] font-black text-gray-950 dark:text-white block leading-tight truncate">
                          {bentoData.card1.yellow.metric}
                        </span>
                        <span className="text-[8px] sm:text-[8.5px] text-amber-900/80 dark:text-zinc-300 block mt-0.5 leading-tight truncate">
                          {bentoData.card1.yellow.sub}
                        </span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-amber-200 dark:bg-amber-400/20 overflow-hidden shrink-0">
                        <div className="w-3/4 h-full bg-amber-500 dark:bg-amber-400 rounded-full" />
                      </div>
                    </div>

                    {/* Lower info area with matched lines and heights */}
                    <div className="pt-2 flex flex-col justify-between flex-1 min-w-0">
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-[10.5px] font-bold text-gray-950 dark:text-white leading-snug line-clamp-2" title={bentoData.card1.yellow.title}>
                          {bentoData.card1.yellow.title}
                        </div>
                        <div className="text-[9px] font-semibold text-gray-500 dark:text-zinc-400 mt-0.5 line-clamp-1" title={bentoData.card1.yellow.value}>
                          {bentoData.card1.yellow.value}
                        </div>
                      </div>
                      <div className="mt-1.5 min-w-0">
                        <span className="inline-block text-[8px] font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 dark:bg-white/10 dark:text-zinc-300 truncate max-w-full">
                          {bentoData.card1.yellow.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Preview Item 2: Blue/Cyan Card */}
                  <div className="rounded-lg bg-white dark:bg-[#1a1b27] border border-blue-200/70 dark:border-white/[0.08] p-2.5 flex flex-col justify-between shadow-xs h-full min-w-0 overflow-hidden transition-colors duration-200">
                    {/* Upper thumbnail container with matched fixed height */}
                    <div className="h-24 sm:h-26 rounded-md bg-gradient-to-tr from-blue-50 to-cyan-50/70 dark:from-blue-500/20 dark:via-indigo-500/15 dark:to-cyan-500/10 border border-blue-300/40 dark:border-blue-500/25 flex flex-col justify-between p-2 min-w-0 overflow-hidden">
                      <div className="flex items-center justify-between min-w-0">
                        <span className="text-[7.5px] font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 uppercase tracking-wider truncate max-w-full block">
                          {bentoData.card1.blue.tag}
                        </span>
                      </div>
                      <div className="text-center my-auto py-0.5 px-0.5 min-w-0 w-full overflow-hidden">
                        <span className="text-sm sm:text-[15px] font-black text-gray-950 dark:text-white block leading-tight truncate">
                          {bentoData.card1.blue.metric}
                        </span>
                        <span className="text-[8px] sm:text-[8.5px] text-blue-900/80 dark:text-zinc-300 block mt-0.5 leading-tight truncate">
                          {bentoData.card1.blue.sub}
                        </span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-blue-200 dark:bg-blue-400/20 overflow-hidden shrink-0">
                        <div className="w-3/4 h-full bg-blue-600 dark:bg-blue-400 rounded-full" />
                      </div>
                    </div>

                    {/* Lower info area with matched lines and heights */}
                    <div className="pt-2 flex flex-col justify-between flex-1 min-w-0">
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-[10.5px] font-bold text-gray-950 dark:text-white leading-snug line-clamp-2" title={bentoData.card1.blue.title}>
                          {bentoData.card1.blue.title}
                        </div>
                        <div className="text-[9px] font-semibold text-gray-500 dark:text-zinc-400 mt-0.5 line-clamp-1" title={bentoData.card1.blue.value}>
                          {bentoData.card1.blue.value}
                        </div>
                      </div>
                      <div className="mt-1.5 min-w-0">
                        <span className="inline-block text-[8px] font-semibold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 dark:bg-white/10 dark:text-zinc-300 truncate max-w-full">
                          {bentoData.card1.blue.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Automator Action Window on Right (6 cols, perfectly matching left card height) */}
                <div className="sm:col-span-6 rounded-xl bg-white dark:bg-[#1b1c28] border border-gray-200 dark:border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-3 space-y-2 z-20 flex flex-col justify-between h-full transition-colors duration-200">
                  {/* Window Title Bar */}
                  <div className="flex items-center justify-between border-b border-gray-150 dark:border-white/[0.08] pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <RainbowIris />
                      <span className="text-[10.5px] font-semibold text-gray-900 dark:text-white">
                        Automator
                      </span>
                    </div>
                    <X className="w-3 h-3 text-gray-400 dark:text-zinc-400 cursor-pointer hover:text-gray-700 dark:hover:text-white" />
                  </div>

                  {/* Tabs Row */}
                  <div className="flex items-center justify-between text-[9px] text-gray-500 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-950 dark:text-white">You</span>
                      <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Team</span>
                      <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Community</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 dark:text-zinc-400">
                      <Sliders className="w-2.5 h-2.5" />
                      <Plus className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-100 dark:bg-[#13141f] border border-gray-200/80 dark:border-white/5 text-[9px] text-gray-500 dark:text-zinc-400">
                    <Search className="w-2.5 h-2.5" />
                    <span>Search</span>
                  </div>

                  {/* Action List with Colored Dots (Punchy, perfectly fitted without cutoffs) */}
                  <div className="space-y-1.5 pt-0.5">
                    <div className="flex items-center gap-2 text-[9.5px] text-gray-800 dark:text-zinc-200">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B] dark:bg-[#FBBF24] shrink-0" />
                      <span className="leading-tight">{bentoData.card1.features[0]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[9.5px] text-gray-800 dark:text-zinc-200">
                      <span className="w-2 h-2 rounded-full bg-[#F97316] shrink-0" />
                      <span className="leading-tight">{bentoData.card1.features[1]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[9.5px] text-gray-800 dark:text-zinc-200">
                      <span className="w-2 h-2 rounded-full bg-[#EF4444] shrink-0" />
                      <span className="leading-tight">{bentoData.card1.features[2]}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[9.5px] text-gray-800 dark:text-zinc-200">
                      <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shrink-0" />
                      <span className="leading-tight">{bentoData.card1.features[3]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 2: "Build powerful automations without code" ─────────── */}
            <div className="rounded-xl bg-[#f8fafc] dark:bg-[#13141f] border border-gray-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-sm dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden transition-colors duration-200">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white tracking-tight">
                  Build powerful automations without code
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-snug font-normal">
                  Build any automation with drag-and-drop ease.
                </p>
              </div>

              {/* Exact Layout: Action Node Grid on Left + Floating Automator Hierarchy Window on Right */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-4 items-center min-h-[220px]">
                {/* Action Node Grid on Left (6 cols) */}
                <div className="sm:col-span-6 grid grid-cols-2 gap-1.5 text-[9px] text-gray-700 dark:text-zinc-300 select-none">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-2xs">
                    <span className="text-gray-400 dark:text-zinc-500">#</span>
                    <span>{bentoData.capabilities[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-2xs">
                    <span>{bentoData.capabilities[1]}</span>
                  </div>

                  {/* Highlighted Node with White Border and Diamond Logo (Exact Reference Match) */}
                  <div className="col-span-2 flex items-center gap-2 p-1.5 rounded-md border-2 border-blue-600 dark:border-white bg-blue-50 dark:bg-[#222436] text-blue-700 dark:text-white font-bold shadow-xs dark:shadow-[0_0_15px_rgba(255,255,255,0.12)]">
                    <span className="w-2.5 h-2.5 rotate-45 border-2 border-current shrink-0" />
                    <span>Insert Instance</span>
                  </div>

                  <div className="flex items-center gap-1.5 p-1.5 rounded-md border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-2xs">
                    <span>{bentoData.capabilities[2]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-2xs">
                    <span>{bentoData.capabilities[3]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-2xs">
                    <span>{bentoData.capabilities[4]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-md border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-2xs">
                    <span>{bentoData.capabilities[5]}</span>
                  </div>
                </div>

                {/* Floating Hierarchy Tree Window on Right (6 cols) */}
                <div className="sm:col-span-6 rounded-xl bg-white dark:bg-[#1b1c28] border border-gray-200 dark:border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-3 space-y-2 z-20 transition-colors duration-200">
                  {/* Window Title Bar */}
                  <div className="flex items-center justify-between border-b border-gray-150 dark:border-white/[0.08] pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <RainbowIris />
                      <span className="text-[10.5px] font-semibold text-gray-900 dark:text-white">
                        Automator
                      </span>
                    </div>
                    <X className="w-3 h-3 text-gray-400 dark:text-zinc-400 cursor-pointer hover:text-gray-700 dark:hover:text-white" />
                  </div>

                  {/* Component Replacement Action */}
                  <div className="flex items-center justify-between text-[9px] font-semibold text-gray-700 dark:text-zinc-300 pb-1 border-b border-gray-150 dark:border-white/[0.06]">
                    <span>Replace with component</span>
                    <span className="text-blue-600 dark:text-white font-bold">+</span>
                  </div>

                  {/* Component Hierarchy Tree (Dynamically read from project.architecture) */}
                  <div className="space-y-1.5 pt-0.5 text-[9.5px]">
                    <div className="flex items-center gap-1.5 text-gray-900 dark:text-white font-medium">
                      <span className="text-gray-400 dark:text-zinc-500 text-[8px]">&#9662;</span>
                      <span className="w-2.5 h-2.5 border border-current rounded-xs inline-block shrink-0" />
                      <span className="leading-tight">{project.architecture[0] || "Get current selection"}</span>
                    </div>

                    <div className="pl-4 space-y-1 text-gray-600 dark:text-zinc-400 border-l border-gray-200 dark:border-zinc-800 ml-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-600 dark:text-emerald-400 text-[10px]">&#8635;</span>
                        <span className="leading-tight">{project.architecture[1] || "Execute pipeline invariant"}</span>
                      </div>
                      {project.architecture[2] && (
                        <div className="flex items-center gap-1.5 text-[8.5px] pl-1 text-gray-500 dark:text-zinc-500">
                          <span>&bull;</span>
                          <span className="leading-tight">{project.architecture[2]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CARD 3: "Sync automations with your entire team" ──────────── */}
            <div className="rounded-xl bg-[#f8fafc] dark:bg-[#13141f] border border-gray-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-sm dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden transition-colors duration-200">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white tracking-tight">
                  Sync automations with your entire team
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-snug font-normal">
                  With Automator for Teams, automations sync to the cloud so everyone gets a speed boost.
                </p>
              </div>

              {/* Exact Layout: Floating Diagram Window on Left + 3x3 Tactile App Tiles on Right */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-4 items-center min-h-[220px]">
                {/* Floating Diagram Window on Left (6 cols, populated from this project's real workflow) */}
                <div className="sm:col-span-6 rounded-xl bg-white dark:bg-[#1b1c28] border border-gray-200 dark:border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-3 space-y-2 z-20 transition-colors duration-200">
                  {/* Window Title Bar */}
                  <div className="flex items-center justify-between border-b border-gray-150 dark:border-white/[0.08] pb-1.5">
                    <div className="flex items-center gap-1.5">
                      <RainbowIris />
                      <span className="text-[10.5px] font-semibold text-gray-900 dark:text-white">
                        Automator
                      </span>
                    </div>
                    <X className="w-3 h-3 text-gray-400 dark:text-zinc-400 cursor-pointer hover:text-gray-700 dark:hover:text-white" />
                  </div>

                  {/* Tabs Row */}
                  <div className="flex items-center justify-between text-[9px] text-gray-500 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">You</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">Team</span>
                      <span className="hover:text-gray-900 dark:hover:text-white cursor-pointer">Community</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 dark:text-zinc-400">
                      <Sliders className="w-2.5 h-2.5" />
                      <Plus className="w-2.5 h-2.5" />
                    </div>
                  </div>

                  {/* Section Title */}
                  <div className="pt-0.5">
                    <span className="text-[8.5px] font-semibold text-gray-400 dark:text-zinc-400 uppercase tracking-wider block mb-1">
                      Diagram
                    </span>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[9.5px] text-gray-800 dark:text-zinc-200">
                        <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shrink-0" />
                        <span>{card3Workflow[0]}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[9.5px] text-gray-800 dark:text-zinc-200">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
                        <span>{card3Workflow[1]}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[9.5px] text-gray-800 dark:text-zinc-200">
                        <span className="w-2 h-2 rounded-full bg-[#EF4444] shrink-0" />
                        <span>{card3Workflow[2]}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[9.5px] text-gray-800 dark:text-zinc-200">
                        <span className="w-2 h-2 rounded-full bg-[#F59E0B] dark:bg-[#FBBF24] shrink-0" />
                        <span>{card3Workflow[3]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3x3 Tactile App Tiles on Right (Unique stack per project, responsive light/dark styles) */}
                <div className="sm:col-span-6 grid grid-cols-3 gap-2">
                  {displayTechList.map((tName) => (
                    <div
                      key={tName}
                      title={tName}
                      className="group/tile aspect-square rounded-xl bg-white dark:bg-[#1c1d27] border border-gray-200 dark:border-white/[0.08] shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)] flex items-center justify-center p-2.5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.7)] cursor-default text-gray-750 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-white"
                    >
                      <TechBrandSVG name={tName} className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover/tile:scale-110" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── CARD 4: "Tap into the Automator community" (DOWNLOAD BUTTON REMOVED) */}
            <div className="rounded-xl bg-[#f8fafc] dark:bg-[#13141f] border border-gray-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-sm dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden transition-colors duration-200">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white tracking-tight">
                  Tap into the Automator community
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-snug font-normal">
                  Run & remix automations built and used by thousands of other designers.
                </p>
              </div>

              {/* Stacked Layout: Community Outcome Cards One Below the Other (Zero Redundant Space) */}
              <div className="flex flex-col gap-3 mt-4 flex-1">
                {/* Community Outcome Card 1 */}
                <div className="p-4 rounded-xl bg-white dark:bg-[#1a1b27] border border-gray-200 dark:border-white/[0.08] space-y-2 flex flex-col justify-start shadow-xs transition-colors duration-200 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold shadow-xs shrink-0">
                      P
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[8.5px] font-semibold bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20">
                      Productivity
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-950 dark:text-white leading-tight">
                    {bentoData.outcomeTitles[0]}
                  </div>
                  {/* Full text directly, no line-clamp, no ellipsis */}
                  <p className="text-[11px] text-gray-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {project.outcomes[0] ||
                      "Automated high-overhead operational pipelines into instantaneous sub-second cycles."}
                  </p>
                </div>

                {/* Community Outcome Card 2 */}
                <div className="p-4 rounded-xl bg-white dark:bg-[#1a1b27] border border-gray-200 dark:border-white/[0.08] space-y-2 flex flex-col justify-start shadow-xs transition-colors duration-200 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white text-[10px] font-bold shadow-xs shrink-0">
                      R
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[8.5px] font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                      Design Systems
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-950 dark:text-white leading-tight">
                    {bentoData.outcomeTitles[1]}
                  </div>
                  {/* Full text directly, no line-clamp, no ellipsis */}
                  <p className="text-[11px] text-gray-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {project.outcomes[1] ||
                      "Enforced mathematical reliability and deterministic schema guarantees across all transactions."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────── */}
          {/* TECHNICAL ARCHITECTURE: ALWAYS OPEN, STRICTLY NO ICONS ON HEADINGS */}
          {/* ─────────────────────────────────────────────────────────────────── */}
          <div ref={techArchRef} className="max-w-6xl mx-auto pt-3 space-y-4">
            {/* Clean Text Heading (STRICTLY NO ICON) */}
            <div className="border-b border-gray-200 dark:border-white/10 pb-2">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-950 dark:text-white tracking-tight">
                Technical Architecture & Execution Deep Dive
              </h2>
              <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                Core system specifications, execution pipelines, and deterministic invariants.
              </p>
            </div>

            {/* Always Open Content: System Architecture Overview */}
            <div className="p-5 sm:p-6 rounded-xl bg-[#f8fafc] dark:bg-[#13141f] border border-gray-200 dark:border-white/[0.08] shadow-xs dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)] space-y-2 transition-colors duration-200">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                System Architecture Overview
              </h3>
              {/* Full text displayed directly (no ellipsis) */}
              <p className="text-xs sm:text-sm text-gray-700 dark:text-zinc-200 leading-relaxed font-normal">
                {project.detailedDescription}
              </p>
            </div>

            {/* Always Open Content: Pipeline Execution Phases */}
            <div className="space-y-3 py-1">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Pipeline Execution Phases
              </h3>
              <div className="relative pl-6 space-y-3 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-400 dark:before:via-indigo-500 before:to-gray-300 dark:before:to-zinc-800">
                {project.workflow.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-3">
                    <div className="absolute -left-[18px] top-1 w-3 h-3 rounded-full border-2 border-blue-500 bg-white dark:bg-[#0c0d14] shadow-[0_0_8px_#3B82F6]" />
                    <div className="flex-1 py-0.5 text-xs">
                      <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block mb-0.5">
                        Phase 0{idx + 1}
                      </span>
                      {/* Full step text directly */}
                      <p className="text-xs text-gray-700 dark:text-zinc-200 leading-relaxed font-normal">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Always Open Content: Challenges & Outcomes (NO ICONS ON HEADINGS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 sm:p-6 rounded-xl bg-red-50/50 dark:bg-red-500/[0.04] border border-red-200 dark:border-red-500/20 space-y-2.5 transition-colors duration-200">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                  Challenges Solved
                </h3>
                <ul className="space-y-2 text-xs text-gray-700 dark:text-zinc-200 leading-relaxed">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 dark:text-red-400 shrink-0 select-none font-bold">&bull;</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-emerald-50/50 dark:bg-emerald-500/[0.04] border border-emerald-200 dark:border-emerald-500/20 space-y-2.5 transition-colors duration-200">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Verified Outcomes
                </h3>
                <ul className="space-y-2 text-xs text-gray-700 dark:text-zinc-200 leading-relaxed">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 shrink-0 select-none font-bold">&bull;</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Compact Sticky Bottom Bar (NO CLOSE BUTTON) ────────────────────── */}
        <div className="px-4 sm:px-6 py-3 border-t border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0c0d14]/95 backdrop-blur-xl flex flex-wrap items-center justify-between gap-2 text-xs shrink-0 z-30 transition-colors duration-200">
          <div className="flex flex-wrap items-center gap-1.5 max-w-xl">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[9px] font-medium bg-gray-100 dark:bg-white/[0.06] text-gray-700 dark:text-zinc-300 px-2 py-0.5 rounded-full border border-gray-200 dark:border-white/10 shadow-xs"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-all hover:scale-102"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Project</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
