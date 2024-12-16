// function buildArray(nums: number[]): number[] {
//   const res = [];
//   nums.forEach((item, i) => {
//     res[i] = nums[item];
//   });
//   return res;
// }

// 原地修改，利用数组项小于1000的机制， 在一个位置存两个值（原值和最终值）。
// nums[i] = 1; nums[nums[i]] = 8
// 转换后： nums[i] = 8001;
// 8001 % 1000 = 1(原值)
// 8001 / 1000 = 8(最终值)
function buildArray(nums: number[]): number[] {
  nums.forEach((item, i) => {
    nums[i] += (nums[item] % 1000) * 1000;
  });

  nums.forEach((item, i) => {
    nums[i] = Math.floor(nums[i] / 1000);
  });

  return nums;
}
