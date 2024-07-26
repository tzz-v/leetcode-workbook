// 思路
// 题意有点不太好理解，总结了下规律，根据数组排列组成的数字，「下一个排列」比当前排列组成的数字下一个更大的排列。例如[1,2,4,3] ->1243 => 1324 -> [1,3,2,4];
// 找到要进位的下标，交换元素（第一个比后续元素小的元素）。
// 下标后续元素重新从小到大重新排序。
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let index = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        index = i + 1;
        break;
      }
    }
    if (index !== 0) break;
  }
  nums.splice(
    index,
    nums.length - index,
    ...nums.slice(index).sort((a, b) => a - b)
  );
}
