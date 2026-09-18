import React from "react";
import { Sparkles, Video, Camera, Film, Gamepad2, Layers } from "lucide-react";

interface CreativeItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const creativeDisciplines: CreativeItem[] = [
  {
    id: "game-development",
    title: "Game Development & Simulation",
    category: "Unreal Engine 5",
    description: "Architecting interactive 3D worlds, reactive AI behavior navigation, physics simulations, and custom C++ performance integrations.",
    tags: ["Unreal Engine 5", "Blueprints", "C++", "Simulation"],
    icon: <Gamepad2 className="w-5 h-5 text-amber-400" />,
  },
  {
    id: "video-editing",
    title: "Cinematic Video Post-Production",
    category: "Motion & Rhythm",
    description: "Precision video pacing, multi-track audio engineering, and dynamic narrative storytelling utilizing After Effects and Sony Vegas.",
    tags: ["After Effects", "Sony Vegas", "Sound Design", "VFX"],
    icon: <Video className="w-5 h-5 text-purple-400" />,
  },
  {
    id: "cinematography",
    title: "Cinematography & Framing",
    category: "Visual Direction",
    description: "Composing camera angles, color science, dramatic lighting contrast, and visual rhythm inspired by modern cinematic aesthetics.",
    tags: ["Composition", "Lighting", "Color Science"],
    icon: <Film className="w-5 h-5 text-cyan-400" />,
  },
  {
    id: "photography",
    title: "Urban & Ambient Photography",
    category: "Street & Architecture",
    description: "Observing environmental geometry, streetscapes, high-contrast natural lighting, and architectural symmetry.",
    tags: ["Street Photography", "High Contrast", "Framing"],
    icon: <Camera className="w-5 h-5 text-emerald-400" />,
  },
  {
    id: "design-experiments",
    title: "Design Experiments & Shaders",
    category: "Creative Technology",
    description: "Exploring dark-tech interfaces, kinetic typography, procedural canvas animations, and cyber-minimalist user experiences.",
    tags: ["Obsidian UI", "Kinetic Type", "Canvas 2D", "WebGL"],
    icon: <Layers className="w-5 h-5 text-amber-300" />,
  },
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400">
          Personal Work & Disciplines
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
          Creative Pursuits
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2">
          Beyond commercial code — creative disciplines exploring visual storytelling, game physics, and audio-visual direction. (Visual media showcased in Skills &gt; Creative &amp; VFX folder).
        </p>
      </div>

      {/* Clean Editorial Card Grid Without Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {creativeDisciplines.map((item, index) => (
          <div
            key={item.id}
            className="group relative p-6 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-amber-500/40 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-amber-500/30 group-hover:bg-amber-500/10 transition-colors">
                  {item.icon}
                </div>
                <span className="font-mono text-xs text-neutral-500 font-bold">
                  0{index + 1}
                </span>
              </div>

              <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400/90 font-semibold">
                {item.category}
              </span>

              <h3 className="text-lg font-bold text-white tracking-tight mt-1 mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 font-mono text-[10px] text-neutral-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-neutral-500 group-hover:text-amber-400 transition-colors">
                <Sparkles className="w-3 h-3" />
                Active
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
