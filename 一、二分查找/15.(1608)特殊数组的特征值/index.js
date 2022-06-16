/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分查找；
// 根据题意，（nums中如果有x个>=x的值，返回x）可以得到x的取值范围（0 ~ nums.length）;
// 因为0~nums.length是有序的，可以使用二分查找，从中找到x；
// 时间复杂度为O(nLogn)
var specialArray = function (nums) {
  let l = 0;
  let r = nums.length;
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    let num;
    for (let val of nums) {
      if (val >= mid) {
        num = (num ?? 0) + 1;
      }
    }
    if (mid === num) return mid;
    if (mid > num) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

// 可以将nums先排个序，这样内层计算也可以使用二分查找；
// 时间复杂度为O(logn) + 排序的时间复杂度
var specialArray = function (nums) {
  let l = 0;
  let r = nums.length;
  const arr = nums.sort((a, b) => a - b);
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    const num = getSumByGreaterThanValue(mid, arr);
    if (mid === num) return mid;
    if (mid > num) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
const getSumByGreaterThanValue = (val, arr) => {
  let i = 0;
  let j = arr.length - 1;
  let index;
  while (i <= j) {
    const mid = parseInt((i + j) / 2);
    if (arr[mid] >= val) {
      index = mid;
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return arr.length - index;
};
