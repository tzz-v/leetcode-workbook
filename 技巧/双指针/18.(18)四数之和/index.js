/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// 双指针；
// 相较于上一题，多加了一层for循环；
// 注意考虑值重复的问题；
var fourSum = function (nums, target) {
  const arr = nums.sort((a, b) => a - b);
  const n = arr.length;
  const res = [];
  for (let i = 0; i < n - 3; i++) {
    if (arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      let l = j + 1;
      let r = n - 1;
      while (l < r) {
        const num = arr[i] + arr[j] + arr[l] + arr[r];
        if (num > target) {
          r--;
          continue;
        }
        if (num < target) {
          l++;
          continue;
        }
        res.push([arr[i], arr[j], arr[l], arr[r]]);
        while (arr[l] === arr[++l]);
        while (arr[r] === arr[--r]);
      }
    }
  }
  return res;
};
