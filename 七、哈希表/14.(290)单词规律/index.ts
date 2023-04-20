// 将pattern和s以键值对的形式一一存入哈希表中；
// 什么时候返回false：
//  - 将字符串s按空格分隔成数组，当数组长度不等于pattern长度时；
//  - 当hash中存在pattern->val, 但val不等于当前arr[i]时；
//  - 当hsah中不存在pattern->val, 但arr[i]与其他pattern匹配时；
function wordPattern(pattern: string, s: string): boolean {
  const map = new Map();
  const arr = s.split(' ');
  const len = pattern.length;
  if (len !== arr.length) return false;

  for (let i = 0; i < len; i++) {
    const val = map.get(pattern[i]) ?? '';
    if (!!val && val !== arr[i]) return false;

    if (!val) {
      const index = arr.indexOf(arr[i]);
      if (index !== i) return false;

      map.set(pattern[i], arr[i]);
    }
  }
  return true;
}
