import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Folder, Code2, Server, Terminal, Palette, Wrench, CheckCircle2, Play, ExternalLink, X } from "lucide-react";
import { defaultSkillFolders, type SkillCategory } from "../../data/skills";
import { asset } from "../../utils/assets";

const getCategoryIcon = (iconName: SkillCategory["iconName"]) => {
  switch (iconName) {
    case "frontend":
      return <Code2 className="w-4 h-4 text-amber-400" />;
    case "backend":
      return <Server className="w-4 h-4 text-emerald-400" />;
    case "programming":
      return <Terminal className="w-4 h-4 text-cyan-400" />;
    case "creative":
      return <Palette className="w-4 h-4 text-purple-400" />;
    case "tools":
      return <Wrench className="w-4 h-4 text-amber-500" />;
    default:
      return <Folder className="w-4 h-4 text-amber-400" />;
  }
};

export const FolderFloat: React.FC<{
  categories?: SkillCategory[];
  className?: string;
}> = ({ categories = defaultSkillFolders, className = "" }) => {
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const activeCategory = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <div className={`w-full max-w-5xl mx-auto flex flex-col gap-6 ${className}`}>
      {/* Folder Navigation Tabs with Floating Hover Physics */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-neutral-900/60 backdrop-blur-xl border border-white/10">
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`relative px-4 py-2.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 flex items-center gap-2 min-h-[44px] ${
                isActive
                  ? "text-white shadow-lg"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-folder-tab"
                  className="absolute inset-0 rounded-xl bg-neutral-800 border border-amber-500/40 -z-10 shadow-md shadow-amber-500/5"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {getCategoryIcon(cat.iconName)}
              <span>{cat.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? "bg-amber-500/20 text-amber-300" : "bg-neutral-800 text-neutral-500"}`}>
                {cat.skills.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Floating Active Folder Content Sheet */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative rounded-3xl bg-neutral-900/80 backdrop-blur-xl border border-amber-500/20 p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          {/* Top Folder Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                {getCategoryIcon(activeCategory.iconName)}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">{activeCategory.name} Stack</h4>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">{activeCategory.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Production Ready
              </span>
            </div>
          </div>

          {/* Interactive Floating Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6">
            {activeCategory.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.2 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group relative p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/40 hover:bg-neutral-800/80 transition-all duration-200 cursor-default flex items-center justify-between shadow-sm min-h-[44px]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 group-hover:bg-amber-300 group-hover:scale-125 transition-all" />
                  <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-500 group-hover:text-amber-400/80 transition-colors">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Embedded Creative Showcase with Real Media Images */}
          {activeCategory.media && activeCategory.media.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h5 className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                  <span>Creative Works & In-Engine Visuals</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                </h5>
                <span className="text-[11px] font-mono text-neutral-500">Live Media Showcase</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeCategory.media.map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/90 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl"
                  >
                    {/* Media Thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                      <img
                        src={asset(item.image)}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                      {item.badge && (
                        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300 font-medium">
                          {item.badge}
                        </div>
                      )}
                    </div>

                    {/* Content & Description */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider">
                          {item.category}
                        </span>
                        <h6 className="text-sm font-bold text-white tracking-tight mt-0.5 group-hover:text-amber-300 transition-colors">
                          {item.title}
                        </h6>
                        <p className="text-xs text-neutral-300 line-clamp-2 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Tags & Action Buttons */}
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1">
                          {item.tags.slice(0, 2).map((t) => (
                            <span key={t} className="px-1.5 py-0.5 rounded bg-white/5 font-mono text-[9px] text-neutral-400">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-1.5">
                          {item.videoUrl && (
                            <button
                              onClick={() => setActiveVideoUrl(item.videoUrl!)}
                              className="px-2.5 py-1.5 rounded-lg bg-amber-500 text-black font-semibold text-[10px] flex items-center gap-1 hover:bg-amber-400 transition-colors min-h-[36px]"
                            >
                              <Play className="w-3 h-3 fill-black" />
                              <span>Reel</span>
                            </button>
                          )}
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-mono flex items-center gap-1 transition-colors min-h-[36px]"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Video Modal Player */}
      {activeVideoUrl && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveVideoUrl(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-neutral-950"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoUrl(null)}
              aria-label="Close Video"
              className="absolute top-3 right-3 z-10 p-2.5 rounded-full bg-black/70 hover:bg-black text-white hover:text-amber-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={activeVideoUrl}
              title="Project Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderFloat;
