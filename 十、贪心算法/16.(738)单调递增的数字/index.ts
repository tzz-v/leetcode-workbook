// 思路：
// 可以从后往前遍历，当前一位比后一位小的时候，让前一位 -1 ，后面所有的数都变为 9（保证数字递增且尽值可能的更大）

function monotoneIncreasingDigits(n: number): number {
  const arr = [...`${n}`].map((str) => parseInt(str));
  let index = Infinity;
  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i - 1] > arr[i]) {
      index = i;
      arr[i - 1]--;
    }
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = 9;
  }
  return parseInt(arr.join(''));
}
