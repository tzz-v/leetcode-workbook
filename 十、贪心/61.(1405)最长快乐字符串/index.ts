// 45.(984)不含 AAA 或 BBB 的字符串的升级版，多了个参数。
// 贪心，累积三个字母中，与前两位不一致且个数最多的字母。
// 思路很好理，就是实现起来很麻烦，需要考虑的场景很多，比如怎么找到剩余次数最多，又不和前两位一致的字母。比如这剩下一个字母有次数的时候退出循环。。

function longestDiverseString(a: number, b: number, c: number): string {
  const arr: [number, string][] = [
    [a, 'a'],
    [b, 'b'],
    [c, 'c'],
  ];
  let res = '';
  while (true) {
    let isPush = false;
    arr.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < 3; i++) {
      if (arr[i][0] <= 0) break;
      const len = res.length;
      if (res[len - 1] === arr[i][1] && res[len - 2] === arr[i][1]) continue;
      isPush = true;
      res += arr[i][1];
      arr[i][0]--;
      break;
    }
    if (!isPush) break;
  }
  return res;
}
