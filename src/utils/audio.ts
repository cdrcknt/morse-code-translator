export class MorseAudioPlayer {
  private audioContext: AudioContext;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode;
  private dotDuration: number = 60; // milliseconds

  constructor() {
    this.audioContext = new AudioContext();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.connect(this.audioContext.destination);
    this.gainNode.gain.value = 0;
  }

  setSpeed(wpm: number) {
    this.dotDuration = 1200 / wpm;
  }

  async playMorse(morseCode: string) {
    const timing = {
      '.': this.dotDuration,
      '-': this.dotDuration * 3,
      ' ': this.dotDuration * 7
    };

    for (const char of morseCode) {
      if (char === '.' || char === '-') {
        await this.playTone(timing[char]);
        await this.pause(this.dotDuration);
      } else if (char === ' ') {
        await this.pause(timing[char]);
      }
    }
  }

  private async playTone(duration: number) {
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.frequency.value = 600;
    this.oscillator.connect(this.gainNode);
    this.gainNode.gain.value = 0.5;
    this.oscillator.start();
    await this.wait(duration);
    this.oscillator.stop();
    this.oscillator.disconnect();
    this.oscillator = null;
  }

  private pause(duration: number) {
    this.gainNode.gain.value = 0;
    return this.wait(duration);
  }

  private wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}