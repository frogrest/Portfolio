import React, { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Play, Sparkles, MessageSquare } from "lucide-react";

export interface AccordionGalleryItem {
  id: string;
  title: string;
  category?: string;
  subtitle?: string;
  description: string;
  image: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
    video?: string;
  };
  featuredBadge?: string;
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItem[];
  defaultActiveId?: string;
  onOpenVideo?: (videoUrl: string) => void;
  onOpenChatbot?: () => void;
  className?: string;
}

export const AccordionGallery: React.FC<AccordionGalleryProps> = ({
  items,
  defaultActiveId,
  onOpenVideo,
  onOpenChatbot,
  className = "",
}) => {
  const [activeId, setActiveId] = useState<string>(defaultActiveId || items[0]?.id || "");

  return (
    <div className={`w-full flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px] ${className}`}>
      {items.map((item, index) => {
        const isActive = item.id === activeId;

        return (
          <motion.div
            key={item.id}
            layout
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={() => setActiveId(item.id)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-500 flex flex-col justify-end p-6 ${
              isActive
                ? "lg:flex-[3.5] border-amber-500/50 shadow-2xl shadow-amber-500/10 min-h-[380px] lg:min-h-0"
                : "lg:flex-1 border-white/10 hover:border-white/30 bg-neutral-900/60 min-h-[140px] lg:min-h-0 opacity-80 hover:opacity-100"
            }`}
          >
            {/* Background Image Container */}
            <img
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                isActive ? "scale-105 brightness-75" : "brightness-50 group-hover:scale-105"
              }`}
            />

            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[#090a0f]/30 pointer-events-none" />

            {/* Inactive State: Vertical Title for Desktop */}
            {!isActive && (
              <div className="relative z-10 flex items-center justify-between lg:justify-end lg:h-full">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-amber-400 font-bold">0{index + 1}</span>
                  <h4 className="text-base font-bold text-white tracking-tight">{item.title}</h4>
                </div>
                <span className="lg:hidden text-xs font-mono text-neutral-400">Tap to expand</span>
              </div>
            )}

            {/* Active State: Full Rich Content */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="relative z-10 flex flex-col justify-end max-w-2xl"
              >
                {/* Top Badge & Number */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-amber-400 font-bold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                    0{index + 1}
                  </span>
                  {item.featuredBadge && (
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-neutral-300 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {item.featuredBadge}
                    </span>
                  )}
                  {item.category && (
                    <span className="font-mono text-xs text-neutral-400">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-200 leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1" onClick={(e) => e.stopPropagation()}>
                  {item.links?.demo === "chatbot-prototype" || item.id === "restaurant-bot" ? (
                    <button
                      onClick={() => onOpenChatbot?.()}
                      className="px-4 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-amber-400 transition-colors shadow-lg min-h-[44px]"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Try Live Bot</span>
                    </button>
                  ) : item.links?.demo ? (
                    <a
                      href={item.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs flex items-center gap-1.5 hover:bg-amber-400 transition-colors shadow-lg min-h-[44px]"
                    >
                      <span>{item.id === "prepaview" ? "Play on itch.io" : "Live Site"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}

                  {item.links?.video && onOpenVideo && (
                    <button
                      onClick={() => onOpenVideo(item.links!.video!)}
                      className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white font-medium text-xs flex items-center gap-1.5 hover:bg-white/20 transition-colors min-h-[44px]"
                    >
                      <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>Watch Demo</span>
                    </button>
                  )}

                  {item.links?.github && (
                    <a
                      href={item.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-neutral-200 hover:text-white hover:border-amber-500/40 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label={`${item.title} GitHub Source`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
