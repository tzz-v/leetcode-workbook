// 遍历数组，找到最大连续1长度
function findMaxConsecutiveOnes(nums: number[]): number {
  let res = 0;
  let cur = 0;
  nums.forEach((val) => {
    if (val === 0) {
      res = Math.max(res, cur);
      cur = 0;
    } else {
      cur++;
    }
  });
  res = Math.max(res, cur);
  return res;
}
