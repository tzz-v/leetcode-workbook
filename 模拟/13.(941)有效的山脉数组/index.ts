// 思路：按题意模拟即可
// 遍历arr数组，找到拐点（arr[i] > arr[i - 1] && arr[i] > arr[i + 1]）；
// 应满足：
// 1.遇到拐点之前，arr[i]应始终大于arr[i - 1]。
// 2.遇到拐点之后，arr[i]应始终大于arr[i + 1]。

function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;
  let isChanged = false;

  for (let i = 1; i < arr.length; i++) {
    if (isChanged) {
      if (arr[i] >= arr[i - 1]) return false;
    } else {
      if (arr[i] <= arr[i - 1]) return false;
      const flag = arr[i] > arr[i - 1] && arr[i] > arr[i + 1];
      isChanged = flag ? true : isChanged;
    }
  }

  return isChanged;
}
