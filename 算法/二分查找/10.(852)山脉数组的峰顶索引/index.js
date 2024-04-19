/**
 * @param {number[]} arr
 * @return {number}
 */

//
// 找到判断规律，使用二分查找；
// 注，需要注意mid等于0的情况；
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  let result = 0;
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    if ((arr[mid - 1] < arr[mid] || mid === 0) && arr[mid] < arr[mid + 1]) {
      result = mid;
      l = mid + 1;
    } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
      result = mid;
      r = mid - 1;
    } else {
      return mid;
    }
  }
  console.log('a');

  return result;
};
