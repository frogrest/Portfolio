import React, { useEffect, useState } from "react";

interface DotFieldProps {
  className?: string;
  dotSize?: number;
  gap?: number;
  dotColor?: string;
  glowColor?: string;
}

export const DotField: React.FC<DotFieldProps> = ({
  className = "",
  gap = 28,
  dotColor = "rgba(245, 158, 11, 0.14)",
  glowColor = "rgba(245, 158, 11, 0.08)",
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Base CSS Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-85"
        style={{
          backgroundImage: `radial-gradient(${dotColor} 1.2px, transparent 1.2px), radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: `${gap}px ${gap}px, ${gap * 2}px ${gap * 2}px`,
          backgroundPosition: `0 0, ${gap / 2}px ${gap / 2}px`,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%)",
        }}
      />

      {/* 2. Interactive Cursor Light Aura (Desktop) */}
      {mousePos && (
        <div
          className="fixed pointer-events-none transition-transform duration-75 ease-out will-change-transform hidden md:block"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            width: 450,
            height: 450,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${glowColor} 0%, rgba(245, 158, 11, 0.02) 45%, transparent 70%)`,
            zIndex: 1,
          }}
        />
      )}

      {/* 3. Ambient Static Glow Highlights to give depth across the sections */}
      <div
        className="absolute top-[15%] left-[5%] w-[450px] h-[450px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[45%] right-[5%] w-[550px] h-[550px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[75%] left-[10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};

export default DotField;
