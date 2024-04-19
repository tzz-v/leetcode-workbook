// 使用二分查找，锁定target的区间位置。
// 当nums[mid] === nums[mid + 1]的时候，看看左区间的长度的奇偶性，是奇数则说明target在左区间。
// 当nums[mid] === nums[mid - 1]的时候，看看左区间的长度的奇偶性，是偶数则说明target在左区间。

function singleNonDuplicate(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    }
    if (nums[mid] === nums[mid + 1]) {
      if (mid % 2 === 0) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (mid % 2 === 0) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return nums[l];
}
