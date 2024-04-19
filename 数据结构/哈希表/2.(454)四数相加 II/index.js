/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

// 分组 + 哈希表；
// 直接4个for循环，时间复杂度太高。分成两组，将a[i]+b[j]的和存入map，判断和c[k] + d[l]加在一起是否为0；
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const n = nums1.length;
  const arr = new Map();
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const num = nums1[i] + nums2[j];
      arr.set(num, (arr.get(num) ?? 0) + 1);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const num = nums3[i] + nums4[j];
      if (arr.has(0 - num)) {
        res = res + arr.get(0 - num);
      }
    }
  }
  return res;
};
