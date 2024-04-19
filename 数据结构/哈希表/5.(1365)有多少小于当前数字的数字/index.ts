// 思路
// 先给数组从低到高排序，此时数组下标就是要统计的数目。
// 考虑数组项会重复的情况，创建一个map，从后向前遍历，采用下标较前的数据。
// 注：sort方法会更改原数组。排序前先进行一下浅拷贝
function smallerNumbersThanCurrent(nums: number[]): number[] {
  const arr = [...nums].sort((a, b) => a - b);
  const nLen = nums.length;
  const map = new Map();
  for (let i = nLen - 1; i >= 0; i--) {
    map.set(arr[i], i);
  }
  return nums.map((val) => map.get(val));
}
