/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// 将缺失的数据存起来；
var findKthPositive = function (arr, k) {
  const res = [];
  for (let i = 0; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      res.push(i);
    }
  }
  if (res.length <= k) {
    return arr[arr.length - 1] - (arr[arr.length - 1] - arr.length) + k;
  }
  return res[k];
};
