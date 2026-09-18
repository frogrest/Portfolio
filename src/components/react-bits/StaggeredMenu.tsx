import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const StaggeredMenu: React.FC<{ items?: NavItem[]; className?: string }> = ({
  items = defaultNavItems,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = items.map((item) => item.href.replace("#", ""));

      // 1. Top of page: Hero is always active
      if (window.scrollY < 250) {
        setActiveSection("hero");
        return;
      }

      // 2. Near page bottom: Contact is active
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // 3. Scan from bottom to top using getBoundingClientRect (immune to offsetParent nesting)
      const threshold = window.innerHeight * 0.4;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > 0) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      setActiveSection(targetId);
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none ${className}`}>
      {/* Desktop Navigation Floating Pill */}
      <nav
        aria-label="Main Navigation"
        className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#090a0f]/80 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-auto transition-all hover:border-amber-500/30"
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="px-4 py-2 text-sm font-bold tracking-tight text-white flex items-center gap-1.5 rounded-full hover:text-amber-400 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>GN</span>
        </a>

        <div className="h-4 w-[1px] bg-white/10 mx-1" />

        {items.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative px-4 py-2 text-xs font-medium rounded-full transition-colors min-h-[44px] flex items-center justify-center ${
                isActive ? "text-amber-300" : "text-neutral-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-white/[0.08] border border-amber-500/30 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          );
        })}

        <a
          href="mailto:noriegagian01@gmail.com"
          className="ml-2 px-3.5 py-2 text-xs font-semibold rounded-full bg-amber-500 text-black hover:bg-amber-400 transition-all font-mono flex items-center gap-1 min-h-[44px]"
        >
          <span>Hire Me</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>

      {/* Mobile Top Bar with Staggered Menu Trigger */}
      <div className="md:hidden w-full flex items-center justify-between pointer-events-auto">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="p-2.5 rounded-full bg-[#090a0f]/80 backdrop-blur-lg border border-white/10 text-white font-bold text-sm tracking-tight flex items-center gap-2 min-h-[44px]"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Gian Carlo</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close Menu" : "Open Navigation Menu"}
          className="p-3 rounded-full bg-[#090a0f]/90 backdrop-blur-xl border border-white/15 text-white hover:text-amber-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer with Staggered Entrance Animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-4 top-20 p-6 rounded-2xl bg-[#090a0f]/95 backdrop-blur-2xl border border-amber-500/20 shadow-2xl pointer-events-auto flex flex-col gap-2 z-50"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Navigation</span>
              <span className="font-mono text-xs text-amber-400">Online</span>
            </div>

            {items.map((item, index) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors min-h-[48px] ${
                    isActive ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "text-neutral-300 hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
                </motion.a>
              );
            })}

            <div className="pt-3 border-t border-white/10 mt-2">
              <a
                href="mailto:noriegagian01@gmail.com"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-center block text-sm shadow-lg min-h-[44px]"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default StaggeredMenu;
