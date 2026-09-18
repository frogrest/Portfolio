import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        prefersReducedMotion
          ? {}
          : {
              rotateX: rotate.x,
              rotateY: rotate.y,
            }
      }
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Radial cursor spotlight glow */}
      {!prefersReducedMotion && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[inherit] z-10"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(380px circle at ${spotlight.x}px ${spotlight.y}px, rgba(245, 158, 11, 0.12), transparent 75%)`,
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </motion.div>
  );
};

export default TiltCard;
