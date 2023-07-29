/**
 Do not return anything, modify arr in-place instead.
 */

// 遍历数组，遇到0时，就在0后插入一个0并删掉数组末尾元素
function duplicateZeros(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      i++;
      arr.pop();
    }
  }
}
