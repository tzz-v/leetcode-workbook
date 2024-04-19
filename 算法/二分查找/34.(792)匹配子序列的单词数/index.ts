// 遍历数组words，一一与字符串 s 进行比较；
// 为了加快比较速度，根据字符串s字符与下标生成一个map。使用二分查找进行比较；

function numMatchingSubseq(s: string, words: string[]): number {
  const map = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], []);
    }
    map.get(s[i])?.push(i);
  }
  let res = 0;
  words.forEach((word) => {
    let isOk = true;
    let idx = -1;
    for (let i = 0; i < word.length; i++) {
      if (!map.has(word[i])) {
        isOk = false;
        break;
      }
      const arr = map.get(word[i]) ?? [];
      let x = 0;
      let y = arr.length - 1;
      while (x < y) {
        const mid = Math.floor((x + y) / 2);
        if (arr[mid] > idx) {
          y = mid;
        } else {
          x = mid + 1;
        }
      }
      if (arr[y] <= idx) {
        isOk = false;
        break;
      }
      idx = arr[y];
    }
    if (isOk) res++;
  });
  return res;
}
