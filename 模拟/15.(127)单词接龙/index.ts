// 思路：遍历wordList，将满足条件（元素字符相差一个）的元素放到队列里进行循环。
// 定义一个map countMap 来保存到达所有元素的路径长度。

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const wordSet = new Set(wordList);
  if (wordSet.size === 0 || !wordSet.has(endWord)) return 0;
  const queue = [beginWord];
  const countMap = new Map();
  countMap.set(beginWord, 1);

  while (queue.length) {
    const word = queue.shift();
    const count = countMap.get(word);
    for (const val of wordSet) {
      if (diff(word ?? '', val) && !countMap.has(val)) {
        if (val === endWord) {
          return count + 1;
        }
        queue.push(val);
        countMap.set(val, count + 1);
      }
    }
  }
  return 0;
}

const diff = (str1: string, str2: string) => {
  let change = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      change++;
    }
  }
  return change <= 1;
};
