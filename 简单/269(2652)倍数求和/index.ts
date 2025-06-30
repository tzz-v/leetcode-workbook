/**
 * 倍数求和
 * 难度：Easy
 * 标签：数学
 */

// 在这里实现你的解决方案
function sumOfMultiples(n: number): number {
  const set = new Set<number>();
  let i = 3;
  while (i <= n) {
    set.add(i);
    i += 3;
  }
  i = 5;
  while (i <= n) {
    set.add(i);
    i += 5;
  }
  i = 7;
  while (i <= n) {
    set.add(i);
    i += 7;
  }
  return Array.from(set.values())?.reduce((prev, cur) => prev + cur, 0);
}
