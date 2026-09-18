import React from 'react';

export interface StatusBadgeProps {
  statusText?: string;
  variant?: 'success' | 'warning' | 'info' | 'neutral';
  ping?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  statusText = 'Available for hire',
  variant = 'success',
  ping = true,
  className = '',
}) => {
  const variantStyles = {
    success: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 dot-bg-emerald-400',
    warning: 'text-amber-400 bg-amber-500/10 border-amber-500/20 dot-bg-amber-400',
    info: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20 dot-bg-indigo-400',
    neutral: 'text-gray-300 bg-white/[0.04] border-white/[0.08] dot-bg-gray-400',
  }[variant];

  const dotColor = {
    success: 'bg-emerald-400',
    warning: 'bg-amber-400',
    info: 'bg-indigo-400',
    neutral: 'bg-gray-400',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full border backdrop-blur-md ${variantStyles} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        {ping && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}
          />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`} />
      </span>
      <span>{statusText}</span>
    </span>
  );
};

export default StatusBadge;
