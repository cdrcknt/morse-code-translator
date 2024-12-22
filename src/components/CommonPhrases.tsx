import React from 'react';

const phrases = {
  emergency: [
    { text: 'SOS', morse: '... --- ...' },
    { text: 'HELP', morse: '.... . .-.. .--.' },
    { text: 'MAYDAY', morse: '-- .- -.-- -.. .- -.--' },
  ],
  greetings: [
    { text: 'HELLO', morse: '.... . .-.. .-.. ---' },
    { text: 'HI', morse: '.... ..' },
    { text: 'GOOD MORNING', morse: '--. --- --- -.. / -- --- .-. -. .. -. --.' },
    { text: 'GOOD NIGHT', morse: '--. --- --- -.. / -. .. --. .... -' },
  ],
  common: [
    { text: 'OK', morse: '--- -.-' },
    { text: 'THANK YOU', morse: '- .... .- -. -.- / -.-- --- ..-' },
    { text: 'PLEASE', morse: '.--. .-.. . .- ... .' },
    { text: 'ROGER', morse: '.-. --- --. . .-.' },
    { text: 'OVER', morse: '--- ...- . .-.' },
    { text: 'OUT', morse: '--- ..- -' },
  ],
  phrases: [
    { text: 'I LOVE YOU', morse: '.. / .-.. --- ...- . / -.-- --- ..-' },
    { text: 'TAKE CARE', morse: '- .- -.- . / -.-. .- .-. .' },
    { text: 'GOOD LUCK', morse: '--. --- --- -.. / .-.. ..- -.-. -.-' },
    { text: 'WELL DONE', morse: '.-- . .-.. .-.. / -.. --- -. .' },
  ],
};

interface CommonPhrasesProps {
  onSelect: (text: string) => void;
}

export const CommonPhrases: React.FC<CommonPhrasesProps> = ({ onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Quick Access Phrases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(phrases).map(([category, categoryPhrases]) => (
          <div key={category} className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 capitalize mb-3 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categoryPhrases.map(({ text, morse }) => (
                <button
                  key={text}
                  onClick={() => onSelect(text)}
                  className="px-4 py-2 text-sm bg-white hover:bg-blue-50 border border-gray-200 rounded-full transition-colors hover:border-blue-200 hover:text-blue-600"
                  title={morse}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};