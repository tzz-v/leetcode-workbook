//
function search(nums: number[], target: number): boolean {
  nums = Array.from(new Set(nums));
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return true;
    if (nums[l] <= nums[mid - 1]) {
      if (findTarget(nums.slice(l, mid), target)) return true;
      l = mid + 1;
    } else {
      if (findTarget(nums.slice(mid + 1, r + 1), target)) return true;
      r = mid - 1;
    }
  }
  return false;
}

const findTarget = (arr: number[], target: number) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] < target) {
      l = mid + 1;
    } else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      return true;
    }
  }
};
