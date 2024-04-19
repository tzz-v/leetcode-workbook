// 使用前续遍历，通过双指针，找到最小的公共值

function getCommon(nums1: number[], nums2: number[]): number {
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      return nums1[i];
    }
    if (nums1[i] < nums2[j]) {
      i++;
    }
    if (nums1[i] > nums2[j]) {
      j++;
    }
  }
  return -1;
}
