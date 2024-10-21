function maxRepeating(sequence: string, word: string): number {
  let k = Math.floor(sequence.length / word.length); 
  while (true) {
      if (sequence.includes(word.repeat(k))) {
          break;
      } 
      k--;
  };
  return k;

};