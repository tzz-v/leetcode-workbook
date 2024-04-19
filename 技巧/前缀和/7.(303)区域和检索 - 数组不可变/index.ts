// 利用前缀和的特性，nums[left~right] = arr[right] - arr[left - 1];

class NumArray {
  public arr: number[] = [];
  constructor(nums: number[]) {
    this.arr[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.arr[i] = this.arr[i - 1] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.arr[right];
    return this.arr[right] - this.arr[left - 1];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
