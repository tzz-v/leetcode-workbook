// 满足三角形条件：两条短边加起来大于长边。
// 先给数组排序，然后遍历数组，确定一条边，使用双指针确定另外两条边；
// 时间复杂度为O（n^2）

function triangleNumber(nums: number[]): number {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let res = 0;

  nums.forEach((num, x) => {
    let z = x + 1;
    for (let y = x + 1; y < len; y++) {
      while (z < len && num + nums[y] > nums[z]) {
        z++;
      }
      res += Math.max(0, z - y - 1);
    }
  });
  return res;
}
