import React, { useId } from 'react';

export interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  hint,
  error,
  className = '',
  id: customId,
  ...props
}) => {
  const generatedId = useId();
  const id = customId || generatedId;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;

  return (
    <div className="space-y-1.5 w-full">
      <label
        htmlFor={id}
        className="block text-xs font-medium text-gray-300 tracking-wide"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          aria-invalid={!!error}
          className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border text-white placeholder-gray-500 text-sm transition-all focus:outline-none focus:ring-1 ${
            error
              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30'
              : 'border-white/[0.08] focus:border-indigo-500/60 focus:ring-indigo-500/40'
          } ${className}`}
          {...props}
        />
      </div>

      {error ? (
        <p id={errorId} className="text-xs text-red-400 mt-1">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-xs text-gray-400 mt-1">
          {hint}
        </p>
      ) : null}
    </div>
  );
};

export default InputWithLabel;
