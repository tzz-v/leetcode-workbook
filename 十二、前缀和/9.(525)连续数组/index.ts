// 维护一个变量count来存储数组中，0和1的差值；并存入map中。
// 设0 <= i <= j <= nums.length;
// 当存在 数组[0,j]区间 0和1的差值 === [0,i]区间 0和1的差值时， 说明数组区间[i,j]子数组中0和1的数量相等。
// 找到最长的[i,j]区间。
function findMaxLength(nums: number[]): number {
  const map = new Map();
  map.set(0, -1);
  let res = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;

    if (map.has(count)) {
      res = Math.max(res, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }
  return res;
}
