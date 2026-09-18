import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 400);
  };

  const copyToClipboard = (text: string, label: string, key: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setToastMessage(`Copied ${label} to clipboard!`);
      setTimeout(() => setCopiedKey(null), 2000);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 relative">
      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/95 border border-amber-500/40 text-white text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-xl"
            role="status"
            aria-live="polite"
          >
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0">
              ✓
            </span>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-3 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Let's Build Something Exceptional
        </h2>
        <p className="text-zinc-400 max-w-2xl text-sm sm:text-base">
          Whether you have an upcoming project, questions about my work, or just want to connect, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Direct contact info card */}
        <div
          className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">
              Contact Information
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I am open to contract roles, full-time opportunities, and select technical advisory engagements.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-3 text-zinc-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/25 transition-all group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-amber-400 font-mono text-xs w-14 shrink-0">EMAIL</span>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="min-h-[44px] flex items-center hover:text-amber-300 underline underline-offset-4 decoration-white/20 transition-colors truncate text-xs sm:text-sm"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(portfolioData.personal.email, 'email', 'email')}
                  aria-label="Copy email address to clipboard"
                  className="min-h-[44px] min-w-[44px] px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-amber-400 text-zinc-400 transition-all flex items-center justify-center shrink-0 active:scale-95"
                >
                  {copiedKey === 'email' ? (
                    <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">✓ Copied</span>
                  ) : (
                    <span className="text-xs text-zinc-400 group-hover:text-amber-300 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 text-zinc-300 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/25 transition-all group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-amber-400 font-mono text-xs w-14 shrink-0">PHONE</span>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="min-h-[44px] flex items-center hover:text-amber-300 transition-colors text-xs sm:text-sm font-mono"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone number', 'phone')}
                  aria-label="Copy phone number to clipboard"
                  className="min-h-[44px] min-w-[44px] px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-amber-400 text-zinc-400 transition-all flex items-center justify-center shrink-0 active:scale-95"
                >
                  {copiedKey === 'phone' ? (
                    <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">✓ Copied</span>
                  ) : (
                    <span className="text-xs text-zinc-400 group-hover:text-amber-300 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy
                    </span>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 text-zinc-300 p-2.5">
                <span className="text-amber-400 font-mono text-xs w-14 shrink-0">LOCATION</span>
                <span className="text-xs sm:text-sm">{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-white/[0.06] flex flex-wrap items-center gap-3 text-xs font-medium">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gian Carlo Noriega on GitHub (opens in new tab)"
              className="min-h-[44px] px-4 py-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-300 hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <a
              href={portfolioData.personal.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gian Carlo Noriega Online Portfolio (opens in new tab)"
              className="min-h-[44px] px-4 py-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-300 hover:text-amber-200 transition-all inline-flex items-center gap-1.5"
            >
              <span>Online Portfolio</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md"
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
              <span className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-xl">
                ✓
              </span>
              <h4 className="text-lg font-bold text-white">Message Received!</h4>
              <p className="text-sm text-zinc-400 max-w-xs">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-zinc-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Alex Vance"
                  className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-zinc-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  spellCheck={false}
                  required
                  maxLength={120}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-zinc-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  maxLength={1500}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="min-h-[44px] w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 active:scale-[0.99] flex items-center justify-center"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
