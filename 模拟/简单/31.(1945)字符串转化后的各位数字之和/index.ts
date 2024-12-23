function getLucky(s: string, k: number): number {
  let res = '';

  for (const str of s) {
    res += str.codePointAt(0) - 'a'.codePointAt(0) + 1;
  }

  while (k > 0) {
    k--;
    let num = 0;
    for (const str of res) {
      num += Number(str);
    }
    res = num.toString();
  }

  return Number(res);
}
