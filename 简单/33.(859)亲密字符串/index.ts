// 情况比较多，需要一一排除；
// 字符串s和goal长度不一致时，返回false；
// 遍历字符串，将两个字符串不一致的下标存储起来，
//   - 当diffs.length等于2，且对应元素交换后相等时，满足题意，返回true；
//   - 当diffs.length等于0，但字符串存在相同元素时，满足题意，返回true；
//   - 其余diffs.length情况不符合题意，返回false；

function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  const diffs: number[] = [];
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
    if (s[i] === goal[i]) continue;
    diffs.push(i);
  }
  if (diffs.length === 2) {
    return s[diffs[0]] === goal[diffs[1]] && s[diffs[1]] === goal[diffs[0]];
  }
  if (diffs.length === 0) {
    return set.size < s.length;
  }
  return false;
}
