/**
 * 保龄球游戏的获胜者
 * 难度：Easy
 * 标签：数组, 模拟
 */

// 在这里实现你的解决方案
function isWinner(player1: number[], player2: number[]): number {
  const value1 = getVal(player1);
  const value2 = getVal(player2);
  if (value1 > value2) return 1;
  if (value1 < value2) return 2;
  return 0;
}
const getVal = (arr: number[]) => {
  return arr.reduce((prev, cur, idx) => {
    const flag = arr[idx - 1] === 10 || arr[idx - 2] === 10;
    const val = flag ? cur * 2 : cur;

    return prev + val;
  });
};
