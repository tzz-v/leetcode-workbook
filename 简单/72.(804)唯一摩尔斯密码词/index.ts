function uniqueMorseRepresentations(words: string[]): number {
  const password = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  const wordsSet = new Set();

  words.forEach((word) => {
    let pass = '';
    for (const str of word) {
      pass += password[str.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    wordsSet.add(pass);
  });
  return wordsSet.size;
}
