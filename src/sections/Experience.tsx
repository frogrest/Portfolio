import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <div className="space-y-3 mb-10">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400">
          The Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
          Experience & Milestones
        </h2>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
          Founder engineering, game prototyping, and developer community leadership.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-4 before:w-0.5 before:bg-white/[0.08]">
        {portfolioData.experience.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="relative pl-8 md:pl-10 group"
          >
            {/* Timeline bullet dot */}
            <div className="absolute left-1.5 md:left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#090a0f] border-2 border-amber-400 group-hover:bg-amber-400 transition-colors shadow-sm shadow-amber-400/50" />

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md hover:border-amber-500/30 transition-all shadow-lg shadow-black/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-white font-sans">
                  {item.role}{' '}
                  <span className="text-amber-400 font-medium font-sans">
                    @ {item.company}
                  </span>
                </h3>
                <span className="text-xs font-mono text-zinc-400 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] w-fit">
                  {item.period}
                </span>
              </div>

              <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-2 mb-4">
                {item.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2.5"
                  >
                    <span className="text-amber-400 mt-1 shrink-0 text-xs">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {item.link && (
                <div className="pt-3 border-t border-white/[0.05]">
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="min-h-[44px] px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 border border-amber-500/20 text-xs font-mono inline-flex items-center gap-1.5 transition-all"
                  >
                    <span>Visit {item.link.label}</span>
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
