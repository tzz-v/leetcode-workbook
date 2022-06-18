/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 双指针；
// 两个指针分别指向numbers的第一项和最后一项；
// 计算两个指针指向值的和，与target进行比较，大了右指针-1，小了左指针+1；直至相等，得到唯一解；
var twoSum = function (numbers, target) {
  const arr = [0, numbers.length - 1];
  while (numbers[arr[0]] + numbers[arr[1]] !== target) {
    if (numbers[arr[0]] + numbers[arr[1]] > target) {
      arr[1]--;
    } else {
      arr[0]++;
    }
  }
  return [arr[0] + 1, arr[1] + 1];
};

// 二分查找；
// 先固定第一个值，然后寻找第二个值；利用数组有序的性质，使用二分查找的方法；
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let l = i + 1;
    let r = numbers.length - 1;
    while (l <= r) {
      const mid = parseInt((l + r) / 2);
      const num = numbers[i] + numbers[mid];
      if (num === target) {
        return [i + 1, mid + 1];
      } else if (num > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
};
