// 从后往前遍历，找到第一个值大于后序元素的元素。与靠后的后序元素进行交换。
// 需要考虑存在重复数字的情况。
// 时间复杂度为O(n);
function prevPermOpt1(arr: number[]): number[] {
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      let j = arr.length - 1;
      while (j > i) {
        if (arr[i] <= arr[j] || arr[j] === arr[j - 1]) {
          j--;
        } else {
          const temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
          return arr;
        }
      }
    }
  }
  return arr;
}
