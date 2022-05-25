/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// for循环 + 双指针；
// 对数组进行排序；
// 使用for循环先固定一个数，使用双指针找其他两个数，使arr[i] + arr[l] + arr[r] === 0；
// 若num > 0，则r--; 若num < 0，则l++; 直至l >= r;

var threeSum = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1]) continue; // 去重操作，当 arr[i] === arr[i - 1]时无需操作，跳出当前循环；
    let l = i + 1;
    let r = arr.length - 1;
    while (l < r) {
      const num = arr[i] + arr[l] + arr[r];
      if (num > 0) {
        r--;
        continue;
      }
      if (num < 0) {
        l++;
        continue;
      }
      res.push([arr[i], arr[l], arr[r]]);
      l++;
      while (arr[l] === arr[l - 1]) l++; // 去重操作，当 arr[i]固定，arr[l] === arr[l - 1]时无需操作，l继续+1；
      r--;
      while (arr[r] === arr[r + 1]) r--; // 去重操作，当 arr[i]固定，arr[r] === arr[r + 1]时无需操作，r继续-1；
    }
  }
  return res;
};
