import React from 'react';
import { Listbox } from '@headlessui/react';

const speeds = [
  { wpm: 5, label: '5 WPM - Beginner' },
  { wpm: 10, label: '10 WPM - Learning' },
  { wpm: 15, label: '15 WPM - Practice' },
  { wpm: 20, label: '20 WPM - Advanced' },
];

interface SpeedControlProps {
  value: number;
  onChange: (wpm: number) => void;
}

export const SpeedControl: React.FC<SpeedControlProps> = ({ value, onChange }) => {
  const selectedSpeed = speeds.find(s => s.wpm === value) || speeds[0];

  return (
    <div className="w-64">
      <Listbox value={selectedSpeed} onChange={speed => onChange(speed.wpm)}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <span className="block truncate">{selectedSpeed.label}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
            {speeds.map((speed) => (
              <Listbox.Option
                key={speed.wpm}
                value={speed}
                className={({ active }) =>
                  `${active ? 'text-blue-900 bg-blue-100' : 'text-gray-900'}
                  cursor-pointer select-none relative py-2 pl-10 pr-4`
                }
              >
                {({ selected }) => (
                  <>
                    <span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>
                      {speed.label}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};