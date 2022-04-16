/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

// 通过二分查找得到mat每一项士兵的数量，和下标一起存入nums中；
// 排序，截取k个返回下标数组；
var kWeakestRows = function (mat, k) {
  const nums = [];

  mat.forEach((arr, index) => {
    let l = 0;
    let r = arr.length - 1;
    let result = 0;
    while (l <= r) {
      const mid = parseInt((l + r) / 2);
      if (arr[mid] === 0) {
        r = mid - 1;
      } else {
        l = mid + 1;
        result = l;
      }
    }
    nums.push([result, index]);
  });
  return nums
    .sort((a, b) => {
      return a[0] - b[0];
    })
    .slice(0, k)
    .map((item) => item[1]);
};
