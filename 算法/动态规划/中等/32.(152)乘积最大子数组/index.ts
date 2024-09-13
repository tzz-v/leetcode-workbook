// 维护一个 正最大值max和负最大值。
function maxProduct(nums: number[]): number {
  let max = nums[0] > 0 ? nums[0] : 0;
  let min = nums[0] < 0 ? nums[0] : 0;
  let res = nums[0];
  nums.forEach((num, i) => {
    if (i === 0) return;
    if (num === 0) {
      max = 0;
      min = 0;
    } else if (num > 0) {
      max = (max || 1) * num;
      min = min === 0 ? 0 : min * num;
    } else {
      const newMax = min === 0 ? 0 : min * num;
      min = (max || 1) * num;
      max = newMax;
    }
    console.log(max);
    res = Math.max(res, max);
  });
  return res;
}
