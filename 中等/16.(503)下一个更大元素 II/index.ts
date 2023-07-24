// 维护一个单调栈，由于是循环数组，因此需要遍历两遍。

function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const stack: number[] = [];
  const res = new Array(n).fill(-1);
  for (let i = 2 * n - 1; i >= 0; i--) {
    const num = nums[i % n];
    while (stack.length && num >= stack[stack.length - 1]) {
      stack.pop();
    }
    if (i < n && stack.length) {
      res[i] = stack[stack.length - 1];
    }
    stack.push(num);
  }
  return res;
}
