function numDifferentIntegers(word: string): number {
  const set = new Set<string>();
  let cur = '';
  for (let i = 0; i < word.length; i++) {
      if (isNaN(parseInt(word[i]))) {
          if (cur) {
              set.add(cur.replace(/^0+/, ''));
              cur = '';
          }
      } else {
          cur += word[i]
      }
  };
  if (cur) set.add(cur.replace(/^0+/, ''));
  return set.size;
};