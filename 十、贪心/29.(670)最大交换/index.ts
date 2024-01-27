// 假设num从左到右的数字分别为（d0,d1,d2...dn）
//  -1 < j < k < n；存在当dj < dk的时候：j越靠前且数字dk越大。交换后的值越大。
// 从后往前遍历，维护最大值dk。
// 迭代下标j，在符合条件（dj < dk）的时候保证j最靠前。

function maximumSwap(num: number): number {
  let arr = `${num}`.split('');
  let len = arr.length;
  let maxIndex = len - 1;
  let l, r;
  for (let i = len - 1; i >= 0; i--) {
    if (Number(arr[i]) > Number(arr[maxIndex])) {
      maxIndex = i;
    }
    if (Number(arr[i]) < Number(arr[maxIndex])) {
      l = i;
      r = maxIndex;
    }
  }

  if (l !== undefined) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
  }
  return Number(arr.join(''));
}
