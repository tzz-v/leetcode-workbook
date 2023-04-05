// 使用前缀和存储余数，
// 需要注意子数组的长度

function checkSubarraySum(nums: number[], k: number): boolean {
  const map = new Map();
  map.set(0, -1);
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    num = (num + nums[i]) % k;
    if (map.has(num)) {
      if (i - map.get(num) >= 2) return true;
    } else {
      map.set(num, i);
    }
  }
  return false;
}
