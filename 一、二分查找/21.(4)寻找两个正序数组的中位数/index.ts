// 题目要求时间复杂度为O(log(m+n));瞬间想到二分；
// 可求中位数可以当成求第k小数，k此时为两个数组长度的一半；采用递归进行二分，找到第k小的数。

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let len = nums1.length + nums2.length;
  const k = Math.floor((len + 1) / 2);
  if (len % 2 !== 0) {
    return func({
      nums1,
      nums2,
      start1: 0,
      end1: nums1.length - 1,
      start2: 0,
      end2: nums2.length - 1,
      k,
    });
  } else {
    const left = func({
      nums1,
      nums2,
      start1: 0,
      end1: nums1.length - 1,
      start2: 0,
      end2: nums2.length - 1,
      k,
    });
    const right = func({
      nums1,
      nums2,
      start1: 0,
      end1: nums1.length - 1,
      start2: 0,
      end2: nums2.length - 1,
      k: k + 1,
    });
    return (left + right) * 0.5;
  }
}

const func = ({
  nums1,
  nums2,
  start1,
  start2,
  end1,
  end2,
  k,
}: {
  nums1: number[];
  nums2: number[];
  start1: number;
  end1: number;
  start2: number;
  end2: number;
  k: number;
}) => {
  const len1 = end1 - start1 + 1;
  const len2 = end2 - start2 + 1;
  if (len1 === 0) return nums2[start2 + k - 1];
  if (len2 === 0) return nums1[start1 + k - 1];
  if (k === 1) return Math.min(nums1[start1], nums2[start2]);

  let index1 = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
  let index2 = start2 + Math.min(len2, Math.floor(k / 2)) - 1;
  if (nums1[index1] > nums2[index2]) {
    return func({
      nums1,
      nums2,
      start1,
      end1,
      start2: index2 + 1,
      end2,
      k: k - (index2 - start2 + 1),
    });
  } else {
    return func({
      nums1,
      nums2,
      start1: index1 + 1,
      end1,
      start2,
      end2,
      k: k - (index1 - start1 + 1),
    });
  }
};
