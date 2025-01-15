function countVowelSubstrings(word: string): number {
  const aeiou = ['a', 'e', 'i', 'o', 'u'];

  let res = 0;
  for (let i = 0; i < word.length; i++) {
    if (!aeiou.includes(word[i])) continue;

    let obj: Record<string, number> = {};
    for (let j = i; j < word.length; j++) {
      if (!aeiou.includes(word[j])) break;
      obj[word[j]] = (obj[word[j]] ?? 0) + 1;
      if (Object.keys(obj).length === 5) {
        res++;
      }
    }
  }

  return res;
}
