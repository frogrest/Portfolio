import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="scroll-mt-24">
      <div className="space-y-3 mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Education
        </h2>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
          Formal training in computer science, software design principles, and interactive computing.
        </p>
      </div>

      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md hover:border-amber-500/30 transition-all"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              {education.degree}
            </h3>
            <p className="text-sm text-amber-400/90 font-medium">
              Undergraduate Degree
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] w-fit">
            {education.period}
          </span>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.06]">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-3">
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-zinc-200 border border-white/[0.06]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
