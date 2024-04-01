// 贪心+前缀和
// 维护两个长度为26的数组。统计字符传每个字符出现的次数。
// 计算前缀和，如果存在某个字符串能打破另一个字符串，那么两个前缀和的大小关系应该是一定的

function checkIfCanBreak(s1: string, s2: string): boolean {
  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    arr1[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    arr2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let flag1 = true;
  let flag2 = true;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) continue;
    sum1 += arr1[i];
    sum2 += arr2[i];
    if (sum1 > sum2) {
      flag2 = false;
    }
    if (sum2 > sum1) {
      flag1 = false;
    }
    if (!flag1 && !flag2) return false;
  }
  return true;
}
