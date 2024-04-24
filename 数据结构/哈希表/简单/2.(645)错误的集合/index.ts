// 两次遍历，第一次遍历统计数字出现次数，第二次遍历查找出现两次和0次的数字

function findErrorNums(nums: number[]): number[] {
  const map = new Map();

  nums.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
  });
  const res: number[] = [];
  for (let i = 1; i <= nums.length; i++) {
    if (map.get(i) === 2) {
      res[0] = i;
    }
    if (!map.has(i)) {
      res[1] = i;
    }
  }
  return res;
}
