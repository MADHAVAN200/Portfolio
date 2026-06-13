import React from "react";
import { responsibilities } from "../data";
import { Users, Figma, Compass, Eye, Server, Award, ChevronRight, CheckCircle2 } from "lucide-react";

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-10 relative overflow-hidden bg-white dark:bg-[#050505] border-t border-gray-100 dark:border-white/5">
      {/* Visual background decorations */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white font-display">
            Executive Roles
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Fostering technical growth, designing beautiful products, and managing high-performance creative departments.
          </p>
        </div>

        {/* Leadership Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {responsibilities.map((role, idx) => {
            // Setup direct icon classes representing roles
            const icons = [
              <Server className="w-5.5 h-5.5 text-blue-500" />,
              <Figma className="w-5.5 h-5.5 text-purple-500" />,
              <Compass className="w-5.5 h-5.5 text-orange-500" />
            ];

            return (
              <div
                key={idx}
                className="group flex flex-col justify-between h-full bg-white/60 dark:bg-zinc-900/40 hover:bg-neutral-50 dark:hover:bg-zinc-800/50 border border-gray-200/50 dark:border-zinc-800 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 glass-panel relative overflow-hidden"
              >
                {/* Visual anchor line bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center">
                      {icons[idx] || <Users className="w-5.5 h-5.5" />}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-gray-950 dark:text-white font-display leading-tight">
                    {role.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-zinc-400 mt-3.5 leading-relaxed">
                    {role.detail}
                  </p>

                  {/* Highlights Bullet-points */}
                  <div className="mt-6 space-y-3 pt-4 border-t border-gray-150 dark:border-zinc-800">
                    <h4 className="text-[10px] font-semibold font-sans tracking-wide text-gray-500 dark:text-zinc-400">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-700 dark:text-zinc-300">
                      {role.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech list tag */}
                <div className="flex flex-wrap gap-1.5 mt-8 border-t border-gray-100/50 dark:border-zinc-800 pt-4">
                  {role.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-medium bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-zinc-200 px-2 py-0.5 rounded border border-transparent dark:border-zinc-700/45"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
