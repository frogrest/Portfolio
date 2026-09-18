import React from "react";
import { ProfileCard } from "../components/react-bits/ProfileCard";
import { portfolioData } from "../data/portfolio";
import { asset } from "../utils/assets";

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400">
          The Story & Profile
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
          About Me
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2">
          Where full-stack software architecture converges with cinematic storytelling.
        </p>
      </div>

      {/* ProfileCard Integration (React Bits) */}
      <div className="mb-14">
        <ProfileCard
          name={portfolioData.personal.name}
          titles={["Full-Stack Developer", "Creative Technologist", "Video Editor"]}
          bio="Computer Science builder who refuses to compromise between logic and art. Experienced in architecting offline-first POS platforms, multi-tenant databases, Unreal Engine simulations, and high-impact visual post-production."
          location={portfolioData.personal.location}
          availability={portfolioData.personal.status}
          imageSrc={asset(portfolioData.personal.profileImage)}
          resumeUrl={asset("ResumeLatest.pdf")}
          socials={{
            github: portfolioData.personal.githubUrl,
            linkedin: portfolioData.personal.linkedinUrl,
            email: portfolioData.personal.email,
          }}
          highlights={[
            { label: "Venture", value: "Founder @ FrogPOS" },
            { label: "Education", value: "BS Computer Science (2026)" },
            { label: "Network", value: "DevCon PH Member" },
          ]}
        />
      </div>

      {/* Narrative & Pillars Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono text-sm font-bold mb-3">
            01
          </div>
          <h3 className="text-base font-bold text-white mb-1">Production Web Architecture</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Full-stack PWAs built with React 19, TypeScript, Hono, and PostgreSQL with robust offline transaction sync.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono text-sm font-bold mb-3">
            02
          </div>
          <h3 className="text-base font-bold text-white mb-1">Game Tech & Simulation</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Unreal Engine interactive prototyping with C++ performance modules, responsive movement, and reactive AI trees.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-mono text-sm font-bold mb-3">
            03
          </div>
          <h3 className="text-base font-bold text-white mb-1">Post-Production & VFX</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Cinematic video editing, motion graphics, and audio pacing using After Effects and Sony Vegas with engine renders.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-amber-500/30 transition-colors">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono text-sm font-bold mb-3">
            04
          </div>
          <h3 className="text-base font-bold text-white mb-1">Developer Community</h3>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Active participant in DevCon Philippines, collaborating on open-source initiatives and developer ecosystems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
