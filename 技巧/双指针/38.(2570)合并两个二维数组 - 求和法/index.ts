function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const res: number[][] = [];

  let i = 0;
  let j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (j >= nums2.length || nums1[i]?.[0] < nums2[j][0]) {
      res.push(nums1[i]);
      i++;
      continue;
    }
    if (i >= nums1.length || nums1[i]?.[0] > nums2[j][0]) {
      res.push(nums2[j]);
      j++;
      continue;
    }
    res.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
    i++;
    j++;
  }
  return res;
}
