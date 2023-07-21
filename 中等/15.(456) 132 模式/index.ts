// 使用max单调栈维护相对最大值。使用right维护最大值右侧列表的次大值。
// 因为right是从max单调栈中获取，当right值存在（表示最大值和次大值已存在）此时， nums[i] < right，表示三个值全部找到，返回true

function find132pattern(nums: number[]): boolean {
  let max: number[] = [];
  let right = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < right) return true;

    while (!!max.length && max[max.length - 1] < nums[i]) {
      right = Math.max(right, max.pop() ?? -Infinity);
    }
    max.push(nums[i]);
  }
  return false;
}
