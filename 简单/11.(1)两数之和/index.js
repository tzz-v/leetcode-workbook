/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力解，一个双for循环对所有项进行枚举；
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// 通过map保存遍历后的值，使用单个for循环解决问题。
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
    map.set(nums[i], i);
  }
};
