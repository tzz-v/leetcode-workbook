/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 先筛选，在去重
var intersection = function(nums1, nums2) {
    const result = new Set();
    const nums1Set = new Set(nums1);
    for (let i = 0; i < nums2.length; i++) {
        if (nums1Set.has(nums2[i])) {
            result.add(nums2[i])
        }
    }
    return Array.from(result)
};

//或者这样，用es6新语法
var intersection = function(nums1, nums2) {
  return Array.from(new Set(nums1.filter(item => nums2.includes(item))));
};