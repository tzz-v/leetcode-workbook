/**
 * 最长平衡子字符串
 * 难度：Easy
 * 标签：字符串
 */

// 在这里实现你的解决方案
function findTheLongestBalancedSubstring(s: string): number {
  let zaroCount = 0;
  let oneCount = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      if (oneCount > 0) {
        res = Math.max(res, Math.min(zaroCount, oneCount) * 2);
        zaroCount = 1;
        oneCount = 0;
      } else {
        zaroCount++;
      }
    } else {
      oneCount++;
    }
  }
  res = Math.max(res, Math.min(zaroCount, oneCount) * 2);

  return res;
}
