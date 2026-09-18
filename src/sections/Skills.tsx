import React from "react";
import { FolderFloat } from "../components/react-bits/FolderFloat";
import { defaultSkillFolders } from "../data/skills";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-28 py-12">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400">
          The Arsenal
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
          Skills & Technologies
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2">
          Explore production competencies organized by domain — from full-stack systems to real-time engine rendering.
        </p>
      </div>

      {/* FolderFloat Component Integration */}
      <FolderFloat categories={defaultSkillFolders} />

      {/* Production Footnote */}
      <div className="mt-8 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="font-mono text-neutral-300">
            <strong className="text-amber-400 font-bold uppercase">Primary Core: </strong>
            React 19, Node.js & Offline-First PostgreSQL Architecture
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span className="font-mono text-neutral-400">
            <strong className="text-purple-400 font-bold uppercase">Creative Core: </strong>
            Unreal Engine (C++/Blueprints), After Effects, Premiere & Video VFX
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
