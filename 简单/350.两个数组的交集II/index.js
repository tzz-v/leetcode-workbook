/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//看起来和349题差距不大，其实区别还是挺大的，349题是去重过的，这个才是求交集
 var intersect = function(nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
          if (nums1[i] === nums2[j]) {
              result.push(nums2[j])
              nums2.splice(j,1)
              break;
          }
      }
  }
  return result
};