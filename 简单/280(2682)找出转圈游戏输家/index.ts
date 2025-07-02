/**
 * 找出转圈游戏输家
 * 难度：Easy
 * 标签：数组, 哈希表, 模拟
 */

// 在这里实现你的解决方案
function circularGameLosers(n: number, k: number): number[] {
  const set = new Set<number>(new Array(n).fill(0).map((_, idx) => idx + 1));

  let cur = 1;
  for (let i = 1; set.has(cur); i++) {
    set.delete(cur);
    cur = (cur + k * i) % n;
    cur = cur === 0 ? n : cur;
  }

  return Array.from(set.values());
}
