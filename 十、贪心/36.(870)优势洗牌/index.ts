// 给nums1排序，改造nums2，维护下标后按值大小排序。
// 遍历nums2，维护单调栈，从数组nums1中找到略大于当前元素的元素，

function advantageCount(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  const arr2 = nums2.map((val, i) => [val, i]).sort((a, b) => a[0] - b[0]);
  let i = 0;
  let res: number[] = [];
  const extra: number[] = [];
  arr2.forEach((item) => {
    while (i < nums1.length && nums1[i] <= item[0]) {
      extra.push(nums1[i]);
      i++;
    }
    if (nums1[i]) {
      res[item[1]] = nums1[i];
    } else {
      res[item[1]] = extra.shift()!;
    }
    i++;
  });

  return res;
}
