import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-[#090a0f]/80 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-white font-semibold tracking-tight text-lg group py-1 min-h-[44px]"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-800 border border-amber-500/40 flex items-center justify-center text-amber-400 text-sm font-bold shadow-md group-hover:scale-105 group-hover:border-amber-400 transition-all">
            {portfolioData.personal.initials}
          </span>
          <span className="group-hover:text-amber-400 transition-colors">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {portfolioData.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`min-h-[44px] px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all inline-flex items-center ${
                  isActive
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Status / CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire
          </span>
          <a
            href="#contact"
            className="min-h-[44px] inline-flex items-center justify-center text-xs font-semibold px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all shadow-sm"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none flex items-center justify-center transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden px-4 pt-2 pb-5 border-t border-white/[0.06] bg-[#090a0f]/95 space-y-1 backdrop-blur-xl"
        >
          {portfolioData.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center justify-center mt-3 text-center text-sm font-semibold px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black shadow-md transition-colors"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
};
