import React from 'react';
import { CopyButton } from './CopyButton';

interface TranslatorBoxProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  onPlay?: () => void;
}

export const TranslatorBox: React.FC<TranslatorBoxProps> = ({
  value,
  onChange,
  label,
  placeholder,
  onPlay
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="flex items-center space-x-2">
          {onPlay && (
            <button
              onClick={onPlay}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              title="Play Morse code"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          )}
          <CopyButton text={value} />
        </div>
      </div>
      <textarea
        className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};