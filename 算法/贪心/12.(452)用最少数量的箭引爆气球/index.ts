// 思路：
// 先对其进行排序，保证射出的箭能穿过更多的气球；
// 当当前节点的起始位置大于上一个元素的终止位置时，说明两个节点没有重叠，需要加一支箭；
// 「注」当气球重叠后，记得更新一下当前的箭的终止位置，选择更小的终止位置。
function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);
  let num = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      num++;
    } else {
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
    }
  }
  return num;
}
