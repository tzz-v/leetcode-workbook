function freqAlphabets(s: string): string {
  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] !== '#') {
      res += String.fromCharCode(Number(s[i]) + 'a'.charCodeAt(0) - 1);
    } else {
      res += String.fromCharCode(
        Number(s.slice(i, i + 2)) + 'a'.charCodeAt(0) - 1
      );
      i += 2;
    }
  }

  return res;
}
