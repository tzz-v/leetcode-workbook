function cellsInRange(s: string): string[] {
  const res: string[] = [];
  const [start, end] = s.split(':');
  const rowRange = [Number(start[1]), Number(end[1])];
  const colRange = [start[0].charCodeAt(0), end[0].charCodeAt(0)];

  for (let j = colRange[0]; j <= colRange[1]; j++) {
    for (let i = rowRange[0]; i <= rowRange[1]; i++) {
      res.push(`${String.fromCharCode(j)}${i}`);
    };
  };

  return res;
};