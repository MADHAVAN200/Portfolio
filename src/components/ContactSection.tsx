import React, { useState } from "react";
import { personalDetails } from "../data";
import { Mail, MapPin, Globe, Send, CheckCircle2, Phone, Calendar, Download, FileText, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to save contact message to database.");
        }
        return res.json();
      })
      .then((data) => {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", company: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        console.error("Error committing contact transmission to backend:", err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleDownloadDraft = () => {
    // Generate a simple print-ready text file representation of the portfolio details and download it
    const text = `
========================================
MADHAVAN NADAR - AI & DATA SCIENCE ENGINEER
========================================
Email: ${personalDetails.emails[0]} | ${personalDetails.emails[1]}
Address: ${personalDetails.address}
BirthDate: ${personalDetails.dateOfBirth}
Languages: ${personalDetails.languages.join(", ")}
Phone: ${personalDetails.phoneNumbers.join(" / ")}

----------------------------------------
EXECUTIVE BIOGRAPHY
----------------------------------------
Passionate about leveraging data and AI to solve complex problems and create impactful business solutions. Aspires to lead innovation through technology and strategic thinking while delivering scalable success.

----------------------------------------
EDUCATION OVERVIEW
----------------------------------------
B.E. - Artificial Intelligence and Data Science (CGPA: 8.68)
SIES Graduate School of Technology (2022 - 2026)

----------------------------------------
PROFESSIONAL EXPERIENCE
----------------------------------------
1. MitrasAI Inc | Software Engineering Intern — AI/ML (June 2024 - Present)
   * Engineered production-grade LLM applications, RAG Pipelines, and optimized prompts.
   * Boosted prediction accuracy by 35%, automated manual report pipelines by 70%.

2. Kloudkraft | Software Developer Intern (Jan 2024 - May 2024)
   * Deployed AWS serverless compute with React & Node.js, achieved 99.9% uptime SLA.

3. Mano Project Private Limited | Software Developer Intern (June 2023 - Dec 2023)
   * Architected full construction tracker ERP, reduced client reporting timeline by 60%.

----------------------------------------
PROJECTS METRICS
----------------------------------------
* AI-Powered Consultant Evaluation (Groq Llama 3.3 / PDF Case Parsing / Live Sims) - HA Rotating Failover
* Voice2Viz (Speech & Text Visualisation / Safe SQL SELECT Sandbox) - Natural Language Analytics & Charting
* LabsKraft (React 19 / Node.js / MySQL / Proctored Assessment Platform) - Automated Evaluation Engine
* AWS Manager Cloud Optimization (Boto3 / Cost Explorer / Idle-Stop Engine) - 70% Workflow Automation
* AI-Powered B2B Scraper & Analytics (Llama-3.1 / Scraping / Chart.js) - 239+ Products Processed
* AI Powered Forecasting System (LSTM / Flower Federated) - 92% Forecast Accuracy
* Mintech Mining Safety App (Flutter / AI) - 70% Less Report Latency
* DisasterIQ (Satellite imagery / ML decision) - 92% Incident Classification
* AI Construction ERP (Durable MySQL / LLM summarise) - 60% Effort Saved
* AI Railway Traffic Optimizer (MILP scheduling / Edge) - 60% Train Delay Reduction
* SkillMapper AI Skill Sorting - 94% Recommendation Match
* MANO Attendance Workforce Platform - 99.2% Attendance accuracy

Generated securely from madhavan-portfolio.local
========================================
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

  return (
    <section id="contact" className="py-10 relative overflow-hidden bg-gray-50/50 dark:bg-black/30">
      {/* Light highlights */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold font-mono tracking-wide text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5 mb-2">
            <Globe className="w-3.5 h-3.5" /> Secure Inbox & Dossier
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display">
            Collaborate on Intelligent Systems
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Secure client inquiries, enterprise project coordination, research partnerships, and talent procurement.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">
          {/* Left panel: Info details */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="bg-white/60 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-xl glass-panel text-left h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                  Location & Coordinates
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10 shrink-0 mt-0.5">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wide text-gray-400 block">Primary Hub</span>
                      <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5 leading-snug">
                        {personalDetails.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10 shrink-0 mt-0.5">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wide text-gray-400 block">Contact Channels</span>
                      <a
                        href={`mailto:${personalDetails.emails[0]}`}
                        className="block text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors mt-0.5"
                      >
                        {personalDetails.emails[0]}
                      </a>
                      <a
                        href={`mailto:${personalDetails.emails[1]}`}
                        className="block text-xs font-mono text-gray-500 mt-1"
                      >
                        {personalDetails.emails[1]}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10 shrink-0 mt-0.5">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wide text-gray-400 block">Hotlines</span>
                      <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                        {personalDetails.phoneNumbers.join("  |  ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio facts summary */}
              <div className="mt-8 pt-6 border-t border-gray-150 dark:border-zinc-800 space-y-4">
                <div>
                  <span className="text-[10px] font-mono tracking-wide text-gray-400">Languages Fluency</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {personalDetails.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setShowResumeModal(true)}
                    className="w-full py-3 rounded-xl border border-gray-250/50 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 hover:bg-neutral-50 dark:hover:bg-zinc-800/80 text-gray-950 dark:text-white text-xs font-bold shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-indigo-500" /> View Comprehensive CV
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Glass-morphism Form */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div className="bg-white/60 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-xl glass-panel text-left h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-display flex items-center gap-2">
                  <Send className="w-4.5 h-4.5 text-blue-500" /> Send a Message
                </h3>

                {success ? (
                  <div className="p-8 text-center bg-emerald-500/5 border border-emerald-500/10 rounded-lg animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6 animate-bounce" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Message Synced Successfully</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2.5 max-w-sm mx-auto leading-relaxed">
                      Thank you. Your inquiry was processed and routed to Madhavan's primary system. You will receive a secure response within 6 standard business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 flex flex-col h-full justify-between">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono tracking-wide text-gray-400 mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-blue-500/40"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono tracking-wide text-gray-400 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john.doe@enterprise.com"
                            className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-blue-500/40"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-mono tracking-wide text-gray-400 mb-1.5">
                            Subject Line
                          </label>
                          <input
                            type="text"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="AI Product Inquiry"
                            className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-blue-500/40"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono tracking-wide text-gray-400 mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Acme Corp"
                            className="w-full px-4 py-2.5 text-xs rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-blue-500/40"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono tracking-wide text-gray-400 mb-1.5">
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Discuss custom model calibration, full-stack pipelines, or cloud workloads here..."
                          className="w-full px-4 py-3 text-xs rounded-xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-1.5 focus:ring-blue-500/40 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-4"
                    >
                      {isSubmitting ? (
                        <span>Encrypting Payload...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Send Secure Transmission
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stylized print ready resume modal preview */}
      {showResumeModal && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-gray-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-gray-900 w-full max-w-3xl rounded-xl border border-gray-250 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transform transition-transform scale-100 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h3 className="font-extrabold text-sm sm:text-base text-gray-900">
                  Madhavan Nadar — Interactive Curriculum Vitae
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleDownloadDraft}
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold shadow flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Download TXT File
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-150 text-gray-600 text-[11px] font-bold cursor-pointer"
                >
                  Collapse
                </button>
              </div>
            </div>

            {/* Resume content viewport */}
            <div className="p-6 overflow-y-auto space-y-6 font-sans text-xs bg-white text-left selection:bg-indigo-200">
              {/* Header block */}
              <div className="text-center pb-5 border-b border-gray-200 space-y-1">
                <h4 className="text-2xl font-extrabold text-gray-900">MADHAVAN NADAR</h4>
                <p className="text-xs uppercase font-mono tracking-widest text-indigo-600 font-bold">
                  AI Engineer &bull; Data Scientist &bull; Full-Stack Architect
                </p>
                <p className="text-[10px] text-gray-500 font-mono">
                  Sion-Koliwada, Mumbai, India - 400037 &bull; madhavannadar23@gmail.com &bull; +91-9869140691
                </p>
              </div>

              {/* Bio block */}
              <div className="space-y-1.5">
                <h5 className="font-extrabold text-xs uppercase tracking-wider text-indigo-600 border-b border-gray-200 pb-1">
                  Professional summary
                </h5>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  Driven AI undergraduate passionate about leveraging data and AI to solve complex enterprise problems. Highly competent in designing ML neural systems, prompting, federated architectures, construction ERP, and automated workflow modules. Proven leader elected as Design head and UI/UX leads at GDG and GST.
                </p>
              </div>

              {/* Work history */}
              <div className="space-y-4">
                <h5 className="font-extrabold text-xs uppercase tracking-wider text-indigo-600 border-b border-gray-200 pb-1">
                  Professional Tenure
                </h5>

                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between items-center text-xs">
                      <strong className="text-gray-950">Software Engineering Intern — AI/ML &bull; MitrasAI Inc</strong>
                      <span className="font-mono text-gray-500 text-[10px]">June 2024 - Present</span>
                    </div>
                    <p className="text-[10px] italic text-gray-500 mt-0.5">Prompt Engineering, LLM applications, RAG pipelines, NLP</p>
                    <ul className="list-disc pl-4 space-y-1 mt-1.5 text-[11px] text-gray-700">
                      <li>Designed and optimized prompt engineering pipelines, improving output accuracy by 35% across client cases.</li>
                      <li>Built automated model evaluation frameworks measuring precision, response latency across 5+ variants.</li>
                      <li>Integrated speech-to-text transcription and report generation, reducing manual workflows by 70%.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs">
                      <strong className="text-gray-950">Software Developer Intern &bull; Kloudkraft</strong>
                      <span className="font-mono text-gray-500 text-[10px]">Jan 2024 - May 2024</span>
                    </div>
                    <p className="text-[10px] italic text-gray-500 mt-0.5">SaaS Serverless Deployments, AWS Lambda, DynamoDB, Cognito</p>
                    <ul className="list-disc pl-4 space-y-1 mt-1.5 text-[11px] text-gray-700">
                      <li>Developed 15+ responsive React frontend panels improving benchmarks by 28%.</li>
                      <li>Configured multi-region failover strategies achieving 99.9% uptime SLA compliance.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-center text-xs">
                      <strong className="text-gray-950">Software Developer Intern &bull; Mano Project Pvt Ltd</strong>
                      <span className="font-mono text-gray-500 text-[10px]">June 2023 - Dec 2023</span>
                    </div>
                    <p className="text-[10px] italic text-gray-500 mt-0.5">Construction ERP development, Database Schemas, WebSockets</p>
                    <ul className="list-disc pl-4 space-y-1 mt-1.5 text-[11px] text-gray-700">
                      <li>Built custom construction enterprise ERP with live progress widgets, reducing manual timeline audits by 60%.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education section */}
              <div className="space-y-2">
                <h5 className="font-extrabold text-xs uppercase tracking-wider text-indigo-600 border-b border-gray-200 pb-1">
                  Academia
                </h5>
                <div>
                  <div className="flex justify-between items-center font-semibold text-gray-900">
                    <span>SIES Graduate School of Technology, Mumbai</span>
                    <span className="font-mono text-[10px]">2022 - 2026</span>
                  </div>
                  <p className="text-xs mt-0.5 text-gray-700">
                    B.E. in Artificial Intelligence and Data Science &mdash; <strong>CGPA: 8.68 / 10</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
