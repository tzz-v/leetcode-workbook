/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
// 暴力解，双for循环，得到距离值大于d的项数；
// 时间复杂度为O(n*m)；
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = arr1.length;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        res--;
        break;
      }
    }
  }
  return res;
};
// for循环+双指针；
// 可以先对arr2进行排序，然后遍历arr1，使用二分查找，找到第一个大于arr[i]的项和第一个小于arr[i]的项；
// 只需要判断这两项和arr[i]的距离是否小于d即可
// 时间复杂度为排序的时间复杂度 + 查找匹配的时间复杂度(O(nlogm))
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = arr1.length;
  const newArr2 = arr2.sort((a, b) => a - b);
  console.log(newArr2);

  for (let i = 0; i < arr1.length; i++) {
    let m = 0;
    let n = arr2.length - 1;
    let left = m;
    while (m <= n) {
      const mid = parseInt((m + n) / 2);
      if (newArr2[mid] <= arr1[i]) {
        left = mid;
        m = mid + 1;
      } else {
        n = mid - 1;
      }
    }
    console.log(left);
    if (
      Math.abs(arr2[left] - arr1[i]) <= d ||
      Math.abs(arr2[left + 1] - arr1[i]) <= d
    ) {
      res--;
    }
  }
  return res;
};
