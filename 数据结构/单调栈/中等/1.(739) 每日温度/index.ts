// 单调栈，从后往前遍历数组，并维护一个单调递增栈。
// 返回的数组具有单调栈特性，因此可以省略掉单调栈的维护

function dailyTemperatures(temperatures: number[]): number[] {
  const len = temperatures.length;
  const arr = new Array(len).fill(0);
  for (let i = len - 2; i >= 0; i--) {
    let index = i + 1;
    while (index < len) {
      if (temperatures[i] < temperatures[index]) {
        arr[i] = index - i;
        break;
      } else if (arr[index]) {
        index += arr[index];
      } else {
        break;
      }
    }
  }
  return arr;
}
