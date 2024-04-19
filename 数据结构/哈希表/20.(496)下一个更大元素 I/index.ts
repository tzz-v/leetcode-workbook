// 从后往前遍历数组nums2，使用单调栈，获取每个元素的下一个更大元素。并保存到哈希表中。
// 题意说明在nums1中的所有整数同样会出现在nums2中，因此通过nums1的值为key，去哈希表中寻找对应的值。

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const stack: number[] = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    let num = nums2[i];
    while (stack.length && num > stack[stack.length - 1]) {
      stack.pop();
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  const res = new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
  return res;
}
