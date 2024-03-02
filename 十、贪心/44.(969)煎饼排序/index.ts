// 找到数组最大值，最多反转两次将最大值挪到最后。
// 重复

function pancakeSort(arr: number[]): number[] {
  let res: number[] = [];
  for (let i = arr.length - 1; i > 0; i--) {
    const maxIndex = findMaxIndex(arr, i);
    if (maxIndex !== i) {
      if (maxIndex !== 0) {
        res.push(maxIndex + 1);
        reverseArrayPart(arr, 0, maxIndex + 1);
      }
      res.push(i + 1);
      reverseArrayPart(arr, 0, i + 1);
    }
  }
  return res;
}

const findMaxIndex = (arr: number[], end: number) => {
  let maxIndex = 0;
  for (let i = 0; i <= end; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

const reverseArrayPart = (arr, start, end) => {
  const reversedPart = arr.slice(start, end).reverse();
  arr.splice(start, reversedPart.length, ...reversedPart);
  return arr;
};
