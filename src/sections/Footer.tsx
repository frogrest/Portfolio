import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#090a0f]/90 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span>© {currentYear} {portfolioData.personal.name}.</span>
          <span className="text-zinc-600">•</span>
          <span>Crafted with React, Tailwind & Motion.</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={portfolioData.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gian Carlo Noriega GitHub profile (opens in new tab)"
            className="min-h-[44px] min-w-[44px] px-2.5 inline-flex items-center justify-center text-xs text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={portfolioData.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gian Carlo Noriega LinkedIn profile (opens in new tab)"
            className="min-h-[44px] min-w-[44px] px-2.5 inline-flex items-center justify-center text-xs text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.personal.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gian Carlo Noriega Online Portfolio (opens in new tab)"
            className="min-h-[44px] min-w-[44px] px-2.5 inline-flex items-center justify-center text-xs text-amber-400 hover:text-amber-300 transition-colors"
          >
            Portfolio
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="min-h-[44px] min-w-[44px] px-2.5 inline-flex items-center justify-center text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors gap-1"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
