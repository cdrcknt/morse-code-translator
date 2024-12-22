import React, { useState, useCallback, useRef } from 'react';
import { TranslatorBox } from './components/TranslatorBox';
import { SpeedControl } from './components/SpeedControl';
import { CommonPhrases } from './components/CommonPhrases';
import { textToMorse, morseToText } from './utils/morseCode';
import { MorseAudioPlayer } from './utils/audio';

function App() {
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');
  const [speed, setSpeed] = useState(10);
  const audioPlayer = useRef<MorseAudioPlayer | null>(null);

  if (!audioPlayer.current) {
    audioPlayer.current = new MorseAudioPlayer();
  }

  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
    setMorse(textToMorse(newText));
  }, []);

  const handleMorseChange = useCallback((newMorse: string) => {
    setMorse(newMorse);
    setText(morseToText(newMorse));
  }, []);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
    if (audioPlayer.current) {
      audioPlayer.current.setSpeed(newSpeed);
    }
  }, []);

  const playMorse = useCallback(() => {
    if (audioPlayer.current && morse) {
      audioPlayer.current.playMorse(morse);
    }
  }, [morse]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Morse Code Translator
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Convert text to Morse code and vice versa instantly
            </p>
            <div className="flex justify-center mb-8">
              <SpeedControl value={speed} onChange={handleSpeedChange} />
            </div>
          </div>

          <div className="space-y-8">
            <CommonPhrases onSelect={handleTextChange} />

            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              <TranslatorBox
                value={text}
                onChange={handleTextChange}
                label="Text"
                placeholder="Type your text here..."
              />

              <div className="flex justify-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </div>
              </div>

              <TranslatorBox
                value={morse}
                onChange={handleMorseChange}
                label="Morse Code"
                placeholder="Type your Morse code here... (use dots and dashes)"
                onPlay={playMorse}
              />
            </div>

            <div className="text-center text-sm text-gray-500">
              <p>Use dots (.) and dashes (-) for Morse code</p>
              <p>Separate letters with spaces and words with multiple spaces</p>
              <p className="mt-2">Click the play button to hear the Morse code</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>Developed by Cedric Kent Centeno</p>
          </div>
          <div className="flex space-x-6">
            <a href="mailto:cdrcknt@gmail.com" className="hover:text-blue-400 transition-colors">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://github.com/cdrcknt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;