import React, { useState } from "react";
import { AccordionGallery, type AccordionGalleryItem } from "../components/react-bits/AccordionGallery";
import { ChatbotModal } from "../components/ChatbotModal";
import { portfolioData } from "../data/portfolio";
import { asset } from "../utils/assets";
import { X } from "lucide-react";

export const Projects: React.FC = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Format projects data for the React Bits AccordionGallery
  const galleryItems: AccordionGalleryItem[] = portfolioData.projects.map((p) => {
    let mainImg = "Images/Cover.jpg";
    if (p.id === "frogpos") mainImg = "Images/FrogPOS-Dashboard.png";
    else if (p.id === "prepaview") mainImg = "Images/Prepaview.jpg";
    else if (p.id === "restaurant-bot") mainImg = "Images/RestaurantChatbot.png";

    return {
      id: p.id,
      title: p.title,
      subtitle: p.subtitle,
      description: p.description,
      image: asset(mainImg),
      tags: p.tags,
      featuredBadge: p.featured ? "Featured System" : "Shipped",
      links: {
        demo: p.demoUrl || p.marketingUrl || p.liveAppUrl,
        github: p.githubUrl,
        video: p.videoUrl,
      },
    };
  });

  return (
    <section id="projects" className="scroll-mt-28 py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400">
          Featured Systems
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-1">
          Production Projects
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-2">
          Click or hover across the accordion cards to inspect live web architectures, point-of-sale systems, and interactive prototypes.
        </p>
      </div>

      {/* React Bits AccordionGallery */}
      <AccordionGallery
        items={galleryItems}
        defaultActiveId="frogpos"
        onOpenVideo={(url) => setActiveVideoUrl(url)}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      {/* Interactive Chatbot Modal from Legacy Portfolio */}
      <ChatbotModal
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />

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
    </section>
  );
};

export default Projects;
