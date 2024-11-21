function checkIfPangram(sentence: string): boolean {
  const arr = new Array(26).fill(0);

  for (const s of sentence) {
      arr[s.charCodeAt(0) - 97]++;
  };
  return arr.every((val) => !!val)

};