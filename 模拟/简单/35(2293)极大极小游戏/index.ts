// 模拟，俺题意进行模拟

function minMaxGame(nums: number[]): number {
  let arr = [];
  while (nums.length > 1) {
    for (let i = 0; i < nums.length; i += 2) {
      if (i % 2 === 0 && i % 4 === 0) {
        arr.push(Math.min(nums[i], nums[i + 1] ?? Infinity));
      } else {
        arr.push(Math.max(nums[i], nums[i + 1] ?? Infinity));
      }
    }
    nums = arr;
    arr = [];
  }
  return nums[0];
}
