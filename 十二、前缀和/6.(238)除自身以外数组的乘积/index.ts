// 前缀和的变形，存储当前项左边的乘积，和一个当前项右边的乘积
// 两个值相乘，就是除自身以外数组的乘积

function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;
  const arr = new Array(len).fill(0).map((_) => new Array());

  let product = 1;
  for (let i = 0; i < len; i++) {
    arr[i][0] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = len - 1; i >= 0; i--) {
    arr[i][1] = product;
    product *= nums[i];
  }
  return arr.map(([left, right]) => left * right);
}
