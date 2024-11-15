function secondHighest(s: string): number {
  let first = '';
  let second= '';
  for (const str of s) {
      if (!/\d/.test(str)) continue;
      if (str > first) {
          second = first;
          first = str;
      } else if (str !== first && str > second) {
          second = str;
      };
  };
  if (!second) return -1;
  return parseInt(second);
};