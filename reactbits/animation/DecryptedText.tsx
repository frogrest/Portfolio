import React, { useState, useEffect, useRef } from 'react';

export interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover';
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=0123456789';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = DEFAULT_CHARS,
  className = '',
  parentClassName = '',
  animateOn = 'hover',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
    : characters.split('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    const shouldAnimate =
      animateOn === 'view' ? hasAnimated : isHovering;

    if (shouldAnimate) {
      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';

              if (sequential) {
                const totalLength = text.length;
                let isDecrypted = false;
                if (revealDirection === 'start') {
                  isDecrypted = index < (iteration / maxIterations) * totalLength;
                } else if (revealDirection === 'end') {
                  isDecrypted = index > totalLength - (iteration / maxIterations) * totalLength;
                } else {
                  const center = totalLength / 2;
                  const spread = (iteration / maxIterations) * (totalLength / 2);
                  isDecrypted = Math.abs(index - center) <= spread;
                }

                if (isDecrypted) return char;
              } else if (iteration >= maxIterations) {
                return char;
              }

              return availableChars[Math.floor(Math.random() * availableChars.length)];
            })
            .join('');
        });

        iteration++;
        if (iteration > maxIterations + (sequential ? text.length : 0)) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, speed);
    } else {
      setDisplayText(text);
    }

    return () => clearInterval(interval);
  }, [isHovering, hasAnimated, text, speed, maxIterations, sequential, revealDirection, availableChars, animateOn]);

  useEffect(() => {
    if (animateOn !== 'view') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [animateOn]);

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono cursor-default select-none ${parentClassName}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
};

export default DecryptedText;
