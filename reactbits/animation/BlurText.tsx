import React, { useRef, useState, useEffect } from 'react';
import { motion, type TargetAndTransition } from 'motion/react';

export interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
  stepDuration?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 50,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const yOffset = direction === 'top' ? -15 : 15;

  const defaultFrom: TargetAndTransition = {
    filter: 'blur(10px)',
    opacity: 0,
    y: yOffset
  };

  const defaultTo: TargetAndTransition = {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0
  };

  return (
    <p ref={ref} className={`inline-block whitespace-normal ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={defaultFrom}
          animate={inView ? defaultTo : defaultFrom}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.1, 0.25, 1.0]
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          className="inline-block will-change-[filter,transform,opacity]"
        >
          {element === ' ' ? '\u00A0' : element}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
