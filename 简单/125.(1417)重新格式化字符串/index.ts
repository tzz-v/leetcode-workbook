function reformat(s: string): string {
  let letter: string[] = [];
  let number: string[] = [];

  for (const str of s) {
    if (isNaN(Number(str))) {
      letter.push(str);
    } else {
      number.push(str);
    }
  }
  if (Math.abs(letter.length - number.length) > 1) return '';
  let res = '';
  letter.forEach((str, i) => {
    res += str;
    if (number[i]) {
      res += number[i];
    }
  });
  if (number.length > letter.length) {
    res = number[number.length - 1] + res;
  }
  return res;
}
