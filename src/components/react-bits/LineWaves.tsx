import React, { useEffect, useRef } from "react";

interface LineWavesProps {
  className?: string;
  lineCount?: number;
  speed?: number;
  amplitude?: number;
  frequency?: number;
}

export const LineWaves: React.FC<LineWavesProps> = ({
  className = "",
  lineCount = 6,
  speed = 0.008,
  amplitude = 45,
  frequency = 0.003,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let step = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Warm amber & golden accent palettes matching obsidian theme
    const colors = [
      "rgba(245, 158, 11, 0.45)",  // Amber 500
      "rgba(251, 191, 36, 0.35)",  // Amber 400
      "rgba(217, 119, 6, 0.40)",   // Amber 600
      "rgba(245, 158, 11, 0.25)",  // Soft amber
      "rgba(255, 255, 255, 0.15)", // Crisp accent
      "rgba(251, 191, 36, 0.20)",  // Ambient gold
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerY = height * 0.55;

      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        const color = colors[i % colors.length];
        ctx.strokeStyle = color;
        ctx.lineWidth = i === 0 ? 2 : 1.25;

        // Individual wave phase offset
        const phaseOffset = (i * Math.PI) / lineCount;
        const currentAmp = amplitude * (1 + (i % 3) * 0.25);
        const currentFreq = frequency * (1 + (i % 2) * 0.2);

        for (let x = 0; x <= width; x += 4) {
          // Double sine wave combination for organic harmonic wave motion
          const y1 = Math.sin(x * currentFreq + step + phaseOffset) * currentAmp;
          const y2 = Math.cos(x * currentFreq * 0.5 - step * 0.6 + phaseOffset) * (currentAmp * 0.45);
          const y = centerY + y1 + y2;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      if (!prefersReducedMotion) {
        step += speed;
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [lineCount, speed, amplitude, frequency]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full -z-10 opacity-70 ${className}`}
      aria-hidden="true"
    />
  );
};

export default LineWaves;
