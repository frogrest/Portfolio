import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MapPin, Briefcase, Mail, ExternalLink, Sparkles, FileText } from "lucide-react";

export interface ProfileCardProps {
  name: string;
  titles: string[];
  bio: string;
  location: string;
  availability: string;
  imageSrc: string;
  resumeUrl?: string;
  socials?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  highlights?: { label: string; value: string }[];
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  titles,
  bio,
  location,
  availability,
  imageSrc,
  resumeUrl = "/ResumeLatest.pdf",
  socials = {
    github: "https://github.com/giannoriega",
    linkedin: "https://www.linkedin.com/in/gian-carlo-noriega-250877239/",
    email: "giannoriega4everything@gmail.com",
  },
  highlights = [
    { label: "Focus", value: "Full-Stack & Systems" },
    { label: "Ventures", value: "Founder @ FrogPOS" },
    { label: "Community", value: "DevCon PH Member" },
  ],
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Immediate raw mouse tracking without CSS lag
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappy, instant spring with zero perceptible latency
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 450, damping: 32 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 450, damping: 32 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);

    // Update specular glow position instantly
    cardRef.current.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    cardRef.current.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className={`perspective-[1200px] w-full max-w-2xl mx-auto ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-3xl bg-neutral-900/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-2xl transition-[border-color,box-shadow] duration-200 hover:border-amber-500/40 hover:shadow-amber-500/5 group"
      >
        {/* Specular dynamic spotlight */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 158, 11, 0.12), transparent 45%)`,
          }}
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
          {/* Avatar Container */}
          <div className="relative shrink-0">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-amber-500/30 bg-neutral-950/80 shadow-xl">
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Main Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{name}</h3>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Verified
              </span>
            </div>

            {/* Titles Pill List */}
            <div className="text-sm font-mono text-amber-400/90 font-medium mb-3">
              {titles.join(" · ")}
            </div>

            {/* Bio */}
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              {bio}
            </p>

            {/* Location & Status Meta */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-neutral-400 mb-5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                {availability}
              </span>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/5 mb-5 text-left">
              {highlights.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider">{h.label}</span>
                  <span className="text-xs font-semibold text-neutral-200 truncate mt-0.5">{h.value}</span>
                </div>
              ))}
            </div>

            {/* Social & Contact Actions */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <a
                href={resumeUrl || "/ResumeLatest.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download="Gian_Carlo_Noriega_Resume.pdf"
                id="resume-button"
                className="px-4 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-amber-400 active:scale-95 transition-all min-h-[44px] shadow-lg shadow-amber-500/20"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
              {socials.email && (
                <a
                  href={`mailto:${socials.email}`}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs flex items-center gap-1.5 border border-white/15 transition-colors min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Gian</span>
                </a>
              )}
              {socials.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gian's GitHub"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-amber-500/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              )}
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gian's LinkedIn"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-amber-500/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              )}
              <a
                href="https://pos.frogrest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono hover:text-amber-400 hover:border-amber-500/30 transition-colors flex items-center gap-1 min-h-[44px]"
              >
                <span>Live POS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;
