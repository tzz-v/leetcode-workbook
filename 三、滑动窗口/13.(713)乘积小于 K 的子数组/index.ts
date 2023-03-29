// 维护一个窗口，不断更新满足条件的子数组的数量res，当product >= k时，left--；
// res += right - left + 1;
//   满足条件的连续子数组的数量为： 1+2+...+n(n为可以组合的长度)；比如[10, 5, 2, 6],第一个满足的[10],第二个满足的是，[10, 5].
//   第二个数组子集[10]和前面的重复了，所以我们只需要计算包含最右边的数字的连续子串数量。刚好是right - left + 1；

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let product = 1;
  let left = 0;
  let res = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (left <= right && product >= k) {
      product /= nums[left];
      left++;
    }

    res += right - left + 1;
  }
  return res;
}
