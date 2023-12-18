// 局部最优。当前项不是O 就将当前项和其后两项都变成O
function minimumMoves(s: string): number {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'O') continue;
    res++;
    i += 2;
  }
  return res;
}
