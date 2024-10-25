function countConsistentStrings(allowed: string, words: string[]): number {
  const arr = new Array(26).fill(0);
  for (const str of allowed) {
      arr[str.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
  };

  let res = 0;

  words.forEach((word) => {
      for (const str of word) {
          if (arr[str.charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
              return;
          }
      };
      res++;
  })
  return res;
};