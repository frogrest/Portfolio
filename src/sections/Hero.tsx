import React from "react";
import { ScrollExpand } from "../components/react-bits/ScrollExpand";
import SplitText from "../components/SplitText";
import { portfolioData } from "../data/portfolio";
import { asset } from "../utils/assets";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  // Stage 1: Centered ONLY with the text "Gian Carlo Noriega" (status badge removed)
  const stageOneContent = (
    <div className="w-full flex justify-center">
      <SplitText
        text={portfolioData.personal.name}
        tag="h1"
        className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white font-sans text-center justify-center"
        delay={30}
        duration={0.7}
        splitType="words, chars"
      />
    </div>
  );

  // Stage 2: Revealed upon scrolling over the full-page expanded image
  const stageTwoContent = (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 pt-14 sm:pt-0">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-sans mb-3 sm:mb-4 drop-shadow-xl">
        Gian Carlo Noriega
      </h1>

      <h2 className="text-sm sm:text-xl md:text-2xl font-bold tracking-tight text-amber-400 font-mono mb-3 sm:mb-4 drop-shadow-lg">
        Full-Stack Developer · Creative Technologist · Video Editor
      </h2>

      <p className="text-xs sm:text-base md:text-lg text-neutral-100 leading-relaxed max-w-2xl mb-6 sm:mb-8 drop-shadow-md font-sans">
        Building production multi-tenant platforms, offline-first systems, interactive 3D simulations, and cinematic visual storytelling.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition-all shadow-lg shadow-amber-500/25 flex items-center gap-1.5 min-h-[44px]"
        >
          <span>View Featured Projects</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>

        <a
          href="#about"
          className="px-5 py-3 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-white font-medium text-xs border border-white/15 hover:border-amber-500/40 transition-all flex items-center gap-1.5 min-h-[44px] backdrop-blur-md"
        >
          <span>Meet Gian Carlo</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      <ScrollExpand
        stageOneContent={stageOneContent}
        stageTwoContent={stageTwoContent}
        imageSrc={asset("Images/Cover.jpg")}
        imageAlt="Gian Carlo Noriega Cinematic Portfolio Visual"
      />
    </div>
  );
};

export default Hero;
