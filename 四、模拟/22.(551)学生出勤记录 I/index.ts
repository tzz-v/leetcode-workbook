function checkRecord(s: string): boolean {
  let Absent = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      Absent++;
      continue;
    }

    if (i > 1 && s[i] === 'L' && s[i] === s[i - 1] && s[i] === s[i - 2]) {
      return false;
    }
  }

  return Absent < 2;
}
