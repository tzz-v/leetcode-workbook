// 在arr中找到最接近数字x的下标项当窗口的右边界；
// 定义左边界为right - k；
// 滑动窗口。
// 得到最后的左右边界

// 注：可以通过二分 来查找最接近的数字，降低查找部分的时间复杂度。

function findClosestElements(arr: number[], k: number, x: number): number[] {
  if (x < arr[0]) {
    return arr.slice(0, k);
  }
  const len = arr.length;
  let right = 0;
  while (x >= arr[right]) {
    right++;
  }
  right = Math.max(right, k);
  let left = right - k;

  while (right < len) {
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      break;
    }
    right++;
    left++;
  }
  return arr.slice(left, right);
}
