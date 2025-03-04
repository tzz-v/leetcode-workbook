// 把两个数组都存在的元素删除，剩下的就是只在各自数组中存在的元素
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  set1.forEach((val) => {
    if (set2.has(val)) {
      set1.delete(val);
      set2.delete(val);
    }
  });

  return [Array.from(set1), Array.from(set2)];
}
