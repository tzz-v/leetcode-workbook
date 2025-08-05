/**
 * 距离原点最远的点
 * 难度：Easy
 * 标签：字符串, 计数
 */

// 在这里实现你的解决方案
function furthestDistanceFromOrigin(moves: string): number {
  const obj = { left: 0, right: 0, other: 0 };
  for (const s of moves) {
    if (s === 'L') {
      obj.left++;
    } else if (s === 'R') {
      obj.right++;
    } else {
      obj.other++;
    }
  }
  return Math.abs(obj.left - obj.right) + obj.other;
}
