// 保证分块排序后的位置和原数组排序后一致，即max === i。表示当前分块是符合题意最小的分割块，计入分割块数目。

function maxChunksToSorted(arr: number[]): number {
  let max = -1;
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (max === i) {
      res++;
    }
  }
  return res;
}
