// 找到两个积最小的连续值。res进行乘积累加并移除较小元素
// 重复上面的步骤

// 可以使用单调递减栈来实现。
// 遍历数组的同时向栈内推入元素。
// 当当前元素大于站内末尾元素时，比较当前元素和站内最后两个元素，对较小的两个元素乘积进行累加。并移除最小元素。

function mctFromLeafValues(arr: number[]): number {
  let res = 0;
  let stack: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && stack[stack.length - 1] < arr[i]) {
      const min = stack.pop() ?? 1;
      if (stack.length && stack[stack.length - 1] < arr[i]) {
        res += stack[stack.length - 1] * min;
      } else {
        res += arr[i] * min;
      }
    }
    stack.push(arr[i]);
  }
  while (stack.length > 1) {
    let min = stack.pop() ?? 1;
    res += min * stack[stack.length - 1];
  }
  return res;
}
