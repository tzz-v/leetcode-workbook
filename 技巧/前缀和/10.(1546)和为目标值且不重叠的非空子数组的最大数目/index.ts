// 类似于「1.(560)和为k的子数组」。区别是不能出现重复子数组。只需要匹配到子数组后清空一下set即可

function maxNonOverlapping(nums: number[], target: number): number {
  let res = 0;
  const set = new Set<number>([0]);
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += nums[i];
    if (set.has(sum - target)) {
      res++;
      set.clear();
    }
    set.add(sum);
  }
  return res;
}
