import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export const Background: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -2000, y: -2000, active: false };

    // Responsive particle count: fewer on mobile screens for 60fps smoothness
    const isMobile = width < 768;
    const count = isMobile ? 24 : 48;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.35),
        vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.35),
        size: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -2000;
      mouse.y = -2000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReduced) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Render point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha * 0.7})`;
        ctx.fill();

        // Connect nearby points
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = isMobile ? 85 : 120;
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `rgba(245, 158, 11, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Mouse proximity connection
        if (mouse.active && !isMobile) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const mouseAlpha = (1 - mdist / 140) * 0.22;
            ctx.strokeStyle = `rgba(251, 191, 36, ${mouseAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      if (!prefersReduced) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`pointer-events-none fixed inset-0 -z-50 overflow-hidden ${className}`} aria-hidden="true">
      {/* Deep Obsidian Gradient Foundation */}
      <div className="absolute inset-0 bg-[#090a0f]" />

      {/* Atmospheric Ambient Glows */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-amber-500/10 blur-[140px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[450px] w-[600px] rounded-full bg-orange-600/5 blur-[160px]"
        style={{ willChange: "transform" }}
      />
      <div
        className="absolute bottom-10 -left-40 h-[500px] w-[600px] rounded-full bg-amber-600/5 blur-[150px]"
        style={{ willChange: "transform" }}
      />

      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Interactive Particle Constellation */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-80" />
    </div>
  );
};

export default Background;
