function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const arr: number[] = [];
  nums.forEach((val, idx) => {
      if (val === key) {
          arr.push(idx);
      };
  });
  const res: number[] = [];

  arr.forEach((item) => {
      for (let i = -1 * k; i <= k; i++) {
          const idx = item + i;
          if (idx < 0 || idx > nums.length - 1) continue;
          if (res.length && idx <= res[res.length - 1]) continue
          res.push(idx);
      }
  });
  return res;
}; 