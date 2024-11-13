function areAlmostEqual(s1: string, s2: string): boolean {
  let i1 = -1;
  let i2 = -1;
  for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) continue;
      if (i1 === -1) {
          i1 = i;
      } else if (i2 === -1) {
          i2 = i;
      } else {
          return false;
      }
  };
  if (i1 === -1 && i2 === -1) return true;
  return s1[i1] === s2[i2] && s1[i2] === s2[i1];
};