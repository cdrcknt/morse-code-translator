const MORSE_CODE = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': ' '
};

export const textToMorse = (text: string): string => {
  return text
    .toUpperCase()
    .split('')
    .map(char => MORSE_CODE[char] || char)
    .join(' ');
};

export const morseToText = (morse: string): string => {
  const reverseMorse = Object.fromEntries(
    Object.entries(MORSE_CODE).map(([key, value]) => [value, key])
  );
  
  return morse
    .split(' ')
    .map(code => reverseMorse[code] || code)
    .join('');
};