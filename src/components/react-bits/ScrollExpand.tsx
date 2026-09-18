import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { LineWaves } from "./LineWaves";

interface ScrollExpandProps {
  stageOneContent: React.ReactNode;
  stageTwoContent: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
}

export const ScrollExpand: React.FC<ScrollExpandProps> = ({
  stageOneContent,
  stageTwoContent,
  imageSrc,
  imageAlt = "Gian Carlo Noriega",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track window dimensions for pixel-exact 3:4 ratio initial state and 100% full-page expansion
  const [winSize, setWinSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1280,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWinSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics for responsive cinematic progression
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 26,
    restDelta: 0.001,
  });

  // Strict 3:4 Aspect Ratio initial calculation:
  // Height clamped to fit viewport harmoniously; width is strictly 0.75 * height
  const maxH = Math.min(winSize.height * 0.48, 480);
  const maxW = Math.min(winSize.width * 0.75, 360);
  let initialHeight = maxH;
  let initialWidth = initialHeight * 0.75;
  if (initialWidth > maxW) {
    initialWidth = maxW;
    initialHeight = initialWidth * (4 / 3);
  }

  // Dimension interpolation: from 3:4 card to 100% full-screen coverage
  const imageWidth = useTransform(smoothProgress, [0, 0.65], [initialWidth, winSize.width]);
  const imageHeight = useTransform(smoothProgress, [0, 0.65], [initialHeight, winSize.height]);
  const imageRadius = useTransform(smoothProgress, [0, 0.5], ["24px", "0px"]);
  const borderColor = useTransform(
    smoothProgress,
    [0, 0.45],
    ["rgba(245, 158, 11, 0.3)", "rgba(245, 158, 11, 0)"]
  );
  const imageScale = useTransform(smoothProgress, [0, 0.7], [1, 1.05]);

  // Stage 1 content (Gian Carlo Noriega headline) fades and translates up as scroll starts
  const stageOneOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const stageOneY = useTransform(smoothProgress, [0, 0.25], [0, -35]);

  // Stage 2 content emerges over the expanded image
  const stageTwoOpacity = useTransform(smoothProgress, [0.45, 0.75], [0, 1]);
  const stageTwoY = useTransform(smoothProgress, [0.45, 0.75], [30, 0]);

  // Contrast overlay darkens as it expands to provide crystal-clear readability for Stage 2 text
  const overlayOpacity = useTransform(smoothProgress, [0, 0.55], [0.12, 0.78]);

  // Scroll down indicator hint
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0]);

  return (
    <div ref={containerRef} className={`relative min-h-[220vh] ${className}`} id="hero">
      {/* Sticky viewport frame - fills 100vw and 100dvh with no mobile browser bar jump */}
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">

        {/* Ambient LineWaves Canvas directly behind the hero viewport */}
        <LineWaves className="opacity-75 z-0" lineCount={7} speed={0.008} amplitude={45} />

        {/* Stage 1: Only the centered headline text positioned cleanly above the 3:4 card */}
        <motion.div
          style={{ opacity: stageOneOpacity, y: stageOneY }}
          className="absolute z-20 top-20 sm:top-24 md:top-28 left-0 right-0 flex flex-col items-center text-center px-4 pointer-events-auto"
        >
          {stageOneContent}
        </motion.div>

        {/* Full Expanding Image Container starting at exact 3:4 ratio */}
        <motion.div
          style={{
            width: imageWidth,
            height: imageHeight,
            borderRadius: imageRadius,
            borderColor: borderColor,
          }}
          className="relative z-10 flex items-center justify-center overflow-hidden shadow-2xl border bg-neutral-950 transition-[box-shadow] duration-500"
        >
          {/* Cinematic Background Image (Cover.jpg) */}
          <motion.img
            style={{
              scale: imageScale,
              objectPosition: "45% 65%",
            }}
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover select-none"
            loading="eager"
          />

          {/* Dynamic Contrast Overlay: subtle at 3:4, dark when covering full screen */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-[#090a0f] pointer-events-none"
          />

          {/* Subtle Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Stage 2 Content Revealed over the fully expanded image */}
          <motion.div
            style={{ opacity: stageTwoOpacity, y: stageTwoY }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 sm:p-12 pointer-events-auto"
          >
            {stageTwoContent}
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
            Scroll to expand
          </span>
          <div className="w-5 h-7 rounded-full border border-neutral-700 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-amber-400"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ScrollExpand;
