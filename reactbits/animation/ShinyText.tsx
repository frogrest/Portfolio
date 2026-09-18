import React from 'react';

export interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  shineColor?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3,
  className = '',
  shineColor = 'rgba(255, 255, 255, 0.95)'
}) => {
  if (disabled) {
    return <span className={className}>{text}</span>;
  }

  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block relative overflow-hidden bg-clip-text text-transparent font-medium ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(255, 255, 255, 0.3) 0%, ${shineColor} 50%, rgba(255, 255, 255, 0.3) 100%)`,
        backgroundSize: '200% 100%',
        animation: `shiny-sweep ${animationDuration} linear infinite`,
      }}
    >
      {text}
      <style>{`
        @keyframes shiny-sweep {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;
