import React, { useState } from "react";
import { techStackCategories } from "../data";
import { Terminal, Search, CheckCircle2, Award } from "lucide-react";
import { motion } from "motion/react";

export default function SkillsGrid() {
  const [searchQuery, setSearchQuery] = useState("");

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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-16 pb-16 relative overflow-hidden bg-gray-50/30 dark:bg-black/20"
    >
      {/* Soft atmospheric gradient backdrops */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.02] dark:bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-12 w-[500px] h-[500px] bg-violet-500/[0.02] dark:bg-violet-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display">
            Professional Skill Canopy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
            Explore core competencies, tech stacks, and methodologies gathered across key production projects, full-stack simulations, and elite software engineering engagements.
          </p>
        </div>

        {/* Unified Search Bar */}
        <div className="max-w-md mx-auto mb-14">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Filter competencies (e.g., Llama, React, AWS, Postgres)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm rounded-xl bg-white/80 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800/80 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        {searchedCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {searchedCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="h-full bg-white/60 dark:bg-zinc-900/40 border border-gray-200/50 dark:border-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-zinc-700/80 transition-all duration-300 glass-panel flex flex-col justify-start"
              >
                {/* Category Header */}
                <h3 className="text-sm font-bold font-display tracking-wide text-gray-950 dark:text-white border-b border-gray-100 dark:border-zinc-800/60 pb-3 mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shrink-0" />
                  {category.title}
                </h3>

                {/* Skills List layout */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-zinc-800/30 border border-transparent hover:border-gray-200/30 dark:hover:border-zinc-800/40 transition-all duration-200"
                    >
                      {/* Skill Title & Level badge */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-gray-900 dark:text-zinc-100 font-sans tracking-tight">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded font-mono font-semibold shrink-0 uppercase tracking-wider ${
                            skill.level === "Expert"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                              : skill.level === "Advanced"
                              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {/* Experience Tag */}
                      <div className="flex items-center text-[10px] text-gray-500 dark:text-zinc-400 font-sans">
                        <span className="flex items-center gap-1 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-indigo-500 timeline-pulse shrink-0" />
                          Experience: {skill.experience}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-400 flex items-center justify-center mx-auto mb-4">
              <Award className="w-5 h-5" />
            </div>
            <p className="text-sm font-semibold text-gray-900 dark:text-zinc-350">
              No matching competencies found.
            </p>
            <p className="text-xs text-gray-500 dark:text-zinc-500 mt-1.5">
              Refine your search term or enter a general stack (such as <strong>AI, React, Python, or SQL</strong>) to discover listed competencies.
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
}
