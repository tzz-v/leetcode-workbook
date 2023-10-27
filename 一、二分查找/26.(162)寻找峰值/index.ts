// 峰值：（当前元素为第一个元素或大于他的前一个元素）且（当前元素为最后一个元素或大于他的后一个元素）；
// 使用二分查找；
//  比较当前元素和当前元素的下一个元素的大小关系，判断当前元素是递增还是递减。
//  递增则在后半段区间继续查找，递减则在前半段区间进行查找
//  时间复杂度为O（logn）

function findPeakElement(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (isPeak(mid, nums)) return mid;

    if (nums[mid] < nums[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
}

const isPeak = (mid: number, nums: number[]) => {
  return (
    nums[mid] > (nums[mid - 1] ?? -Infinity) &&
    nums[mid] > (nums[mid + 1] ?? -Infinity)
  );
};
