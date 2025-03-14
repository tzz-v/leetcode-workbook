function findClosestNumber(nums: number[]): number {
  let res = - Infinity;

  nums.forEach((item) => {
      if (Math.abs(item - 0) < Math.abs(res - 0)) {
          res = item;
      } else if (Math.abs(item - 0) === Math.abs(res - 0)) {
          res = Math.max(res,item);
      };
  })
  return res;
};