// 排序+模拟
// 遍历nums，每次减去最小的值。直至最后一个元素为0；
function minimumOperations(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let res = 0;
  while (nums[len - 1] !== 0) {
    res++;
    let val = 0;
    for (let i = 0; i < len; i++) {
      if (nums[i] === 0) continue;
      if (val === 0) {
        val = nums[i];
      }
      nums[i] -= val;
    }
  }
  return res;
}
