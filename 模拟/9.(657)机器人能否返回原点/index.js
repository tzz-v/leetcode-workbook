/**
 * @param {string} moves
 * @return {boolean}
 */

// 模拟；
// 遍历机器人动作，最后判断x，y是否归零；
var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;
  for (let v of moves) {
    switch (v) {
      case 'L':
        y--;
        break;
      case 'R':
        y++;
        break;
      case 'U':
        x--;
        break;
      case 'D':
        x++;
        break;
    }
  }
  return x === 0 && y === 0;
};
