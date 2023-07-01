// n个括号组合：在n-1的括号组合每个位置插入新的‘()’，去重后组成的新的组合。
function generateParenthesis(n: number): string[] {
  let prevSet = new Set(['()']);
  let set = new Set<string>([]);
  for (let i = 2; i <= n; i++) {
    prevSet.forEach((val) => {
      for (let j = 0; j < val.length; j++) {
        set.add(`${val.slice(0, j)}` + '()' + val.slice(j));
      }
    });
    [prevSet, set] = [set, prevSet];
    set.clear();
  }
  return Array.from(prevSet);
}
