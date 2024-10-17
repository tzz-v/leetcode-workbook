function decrypt(code: number[], k: number): number[] {
  if (k === 0) return new Array(code.length).fill(0);
  const n = code.length;

  let l = k > 0 ? 1 : n + k;
  let r = k > 0 ? k : n - 1;
  const newCode = new Array(n * 2).fill(0).map((_, idx) => {
      return code[idx % n]
  });

  let sum = 0;
  for (let i = l; i <= r; i++) {
      sum += newCode[i];
  };


  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
      res[i] = sum;
      sum -= newCode[l];
      sum += newCode[r + 1];
      l++;
      r++;
  }
  return res;
};
