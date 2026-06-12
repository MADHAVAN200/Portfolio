import React from "react";
import { education, achievements, summary } from "../data";
import { GraduationCap, Trophy, Target, Award, Compass, Heart, Shield, CheckCircle2, Flame } from "lucide-react";
import { motion } from "motion/react";

export default function AboutAndEducation() {
  return (
    <div className="space-y-10">
      {/* 2. ABOUT ME SECTION */}
      <motion.section
        id="about1"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-10 relative overflow-x-hidden"
      >
        {/* Decorative glass glow */}
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold font-sans tracking-wide text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1.5 mb-2">
              <Compass className="w-3.5 h-3.5" /> Core Biography & Perspective
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display">
              Systems Engineer & AI Specialist
            </h2>
          </div>
 
          {/* About Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Core Summary */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="bg-white/60 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800 rounded-xl p-6 sm:p-8 shadow-xl glass-panel flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                    Madhavan Nadar
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-normal font-light">
                    {summary.text}
                  </p>
                </div>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-150 dark:border-zinc-800">
                  <div className="flex gap-3">
                    <div className="p-2 h-9 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 self-start">
                      <Flame className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 dark:text-white tracking-wide font-sans">
                        My Mission
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                        To build production-grade Generative AI pipelines, engineer scalable enterprise automation workflows, and design high-performance data systems that unlock real-world value.
                      </p>
                    </div>
                  </div>
 
                  <div className="flex gap-3">
                    <div className="p-2 h-9 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 self-start">
                      <Target className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 dark:text-white tracking-wide font-sans">
                        Visions & Values
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                        Prioritize analytical integrity, optimize human-centric UX surfaces, and commit to engineering robust architectures that scale effortlessly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
 
            {/* Right Column: Executive Mindset Panels */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.25 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              <div className="p-6 rounded-lg bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 border border-blue-200/40 dark:border-zinc-800 shadow-sm relative overflow-hidden flex-1 flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-3 text-blue-500/10 select-none">
                  <Shield className="w-40 h-40" />
                </div>
                <h4 className="text-xs font-sans font-semibold tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                  Leadership Philosophy
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-sans font-light">
                  "True craftsmanship in technical leadership is born from bridging rigorous computer-science foundations with a strategic understanding of organizational objectives." My intent is guiding engineering divisions that embrace failure as research data.
                </p>
              </div>
 
              <div className="p-6 rounded-lg bg-gray-50 dark:bg-zinc-900/60 border border-gray-150 dark:border-zinc-800 shadow-sm flex-1 flex flex-col justify-center">
                <h4 className="text-xs font-sans font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 mb-3">
                  Strategic Goals
                </h4>
                <div className="space-y-2.5 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shadow-sm" />
                    <span>Deploy robust Generative AI & RAG systems into production</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Optimize model inference times and machine learning pipelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Engineer scalable enterprise ERP and workflow automation tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Build secure, high-contrast user interfaces with cloud integration</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. EDUCATION TIMELINE */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-10 relative overflow-hidden bg-gray-50/20 dark:bg-[#080808]/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold font-sans tracking-wide text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5 mb-2">
              <GraduationCap className="w-3.5 h-3.5" /> Academic Chronology
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display">
              Educational Milestones
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Rigorous theoretical training in machine learning systems, deep neural nets, and cloud engineering topologies.
            </p>
          </div>

          {/* Interactive Timeline Layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gray-200 dark:bg-white/10" />

            <div className="space-y-12">
              {/* Timeline item 1 */}
              <div className="relative flex flex-col sm:flex-row items-start sm:justify-between group">
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-[#050505] shadow-md z-10 group-hover:scale-125 transition-transform" />

                {/* Left card: University block */}
                <motion.div
                  initial={{ opacity: 0, x: -65, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 45, damping: 11, delay: 0.1 }}
                  className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right text-left"
                >
                  <div className="bg-white/60 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800 rounded-lg p-5 shadow-sm hover:shadow transition-all hover:border-gray-300 dark:hover:border-zinc-700 text-left">
                    <span className="text-[10px] font-mono uppercase bg-blue-100/50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md">
                      {education[0].year}
                    </span>
                    <h3 className="text-base font-extrabold text-gray-900 dark:text-white mt-2.5 font-display">
                      {education[0].degree}
                    </h3>
                    <p className="text-xs font-normal text-gray-500 dark:text-gray-400 mt-1">
                      {education[0].institute}
                    </p>
                    <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium mt-2.5">
                      {education[0].detail}
                    </p>

                    {/* Expandable Module Badges */}
                    <div className="mt-4 pt-4 border-t border-gray-150 dark:border-zinc-800">
                      <h4 className="text-[10px] font-semibold font-sans text-gray-400 tracking-wide mb-2">Subject Specialisms</h4>
                      <div className="flex flex-wrap gap-1">
                        {education[0].modules.map((m) => (
                          <span key={m} className="text-[9px] font-mono bg-gray-50 dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 text-gray-600 dark:text-zinc-300 px-1.5 py-0.5 rounded">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Card: Empty spacer for grid symmetry */}
                <div className="w-full sm:w-[45%] pl-10 sm:pl-8 mt-4 sm:mt-0">
                  {/* Empty spacer for grid symmetry */}
                </div>
              </div>

              {/* Timeline item 2 (Colleges) */}
              <div className="relative flex flex-col sm:flex-row items-start sm:justify-between group">
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-[#050505] shadow-md z-10" />

                <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right">
                  {/* Empty spacer for grid symmetry */}
                </div>

                {/* Right block: HSC */}
                <motion.div
                  initial={{ opacity: 0, x: 65, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 45, damping: 11, delay: 0.2 }}
                  className="w-full sm:w-[45%] pl-10 sm:pl-8"
                >
                  <div className="bg-white/60 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800 rounded-lg p-5 shadow-sm hover:shadow transition-all hover:border-gray-300 dark:hover:border-zinc-700">
                    <span className="text-[10px] font-mono uppercase bg-indigo-100/50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-md">
                      {education[1].year}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-2 font-display">
                      {education[1].degree}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {education[1].institute}
                    </p>
                    <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium mt-2">
                      {education[1].detail}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Timeline item 3 (Schooling) */}
              <div className="relative flex flex-col sm:flex-row items-start sm:justify-between group">
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-400 border-4 border-white dark:border-[#050505] shadow-md z-10" />

                <motion.div
                  initial={{ opacity: 0, x: -65, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 45, damping: 11, delay: 0.35 }}
                  className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-right"
                >
                  <div className="bg-white/60 dark:bg-zinc-900/60 border border-gray-200/50 dark:border-zinc-800 rounded-lg p-5 shadow-sm hover:shadow transition-all hover:border-gray-300 dark:hover:border-zinc-700 text-left">
                    <span className="text-[10px] font-mono uppercase bg-gray-100 dark:bg-white/15 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-md">
                      {education[2].year}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mt-2 font-display">
                      {education[2].degree}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {education[2].institute}
                    </p>
                    <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium mt-2">
                      {education[2].detail}
                    </p>
                  </div>
                </motion.div>

                <div className="w-full sm:w-[45%] pl-10 sm:pl-8">
                  {/* Empty spacer */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. ACHIEVEMENTS TROPHIES SECTION */}
      <motion.section
        id="achievements"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-10 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-semibold font-sans tracking-wide text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1.5 mb-2">
              <Award className="w-3.5 h-3.5" /> Awards & Distinctions
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display">
              Hackathons & Trophies
            </h2>
          </div>

          {/* Bento grids display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((ach, idx) => {
              const highlights = [
                { title: "Smart India Hackathon", subtitle: "Top 5 Finalist", desc: "Out of 500+ National teams in deep database systems." },
                { title: "Ideation Hackathon", subtitle: "3rd Place Honor", desc: "Awarded from 40+ competitor teams." },
                { title: "Cognition Showcase", subtitle: "1st Place Rank", desc: " secured within AI and construction Presentation competition." }
              ];
              const highlight = highlights[idx % highlights.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.72, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 75, 
                    damping: 10,  // low damping for playful bouncy spring elasticity
                    delay: idx * 0.16 
                  }}
                  className="h-full p-6 rounded-xl bg-white/60 dark:bg-zinc-900/65 hover:bg-neutral-50 dark:hover:bg-zinc-800/80 border border-gray-200/50 dark:border-zinc-800 shadow-md hover:shadow-xl hover:border-gray-300 dark:hover:border-zinc-700 transition-all text-left glass-panel relative overflow-hidden group flex flex-col justify-between"
                >
                  {/* Glowing light effect behind trophies */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-[30px] pointer-events-none group-hover:scale-125 transition-transform" />

                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25 flex items-center justify-center mb-4 text-center">
                      <Trophy className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-blue-650 dark:text-blue-400 block mb-1">
                      {highlight.subtitle}
                    </span>
                    <h3 className="text-lg font-extrabold text-gray-900 dark:text-white font-display">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2.5 leading-relaxed font-semibold">
                      {ach}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-[11px] font-sans text-gray-400 font-medium">
                    <span>{highlight.desc}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
