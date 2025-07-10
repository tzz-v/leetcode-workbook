/**
 * 判断一个数是否迷人
 * 难度：Easy
 * 标签：哈希表, 数学
 */

// 在这里实现你的解决方案
function isFascinating(n: number): boolean {
  if (n > 333) return false;
  const n2 = n * 2;
  const n3 = n * 3;
  const str = `${n}${n2}${n3}`;
  const set = new Set(str);
  if (set.size === 9 && !str.includes('0')) {
    return true;
  }
  return false;
}
