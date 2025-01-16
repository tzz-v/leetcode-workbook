function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    arr1[word1[i].charCodeAt(0) - 97]++;
    arr2[word2[i].charCodeAt(0) - 97]++;
  }
  return arr1.every((item, i) => Math.abs(item - arr2[i]) <= 3);
}
