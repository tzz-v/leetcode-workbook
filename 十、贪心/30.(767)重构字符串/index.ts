// 统计字符串各字母出现次数；字母最大出现次数大于字符串长度一半（（n+1）/2）时，说明无法排列。
// 排列方式，存在字母最大出现次数为（n+1）/2时，应将当前全部放到偶数下标，以确保相邻字符不同。
// 其余情况可隔次插入。

function reorganizeString(s: string): string {
  let len = s.length;
  let arr = new Array(26).fill(0);
  let max = 0;
  for (let i = 0; i < len; i++) {
    let index = getIdxByStr(s[i]);
    arr[index] += 1;
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  if (len - max + 1 < max) return '';
  let res = new Array(len);
  let evenIndex = 0;
  let oddIndex = 1;
  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < 26; i++) {
    while (arr[i] && arr[i] <= halfLen && oddIndex < len) {
      arr[i]--;
      res[oddIndex] = getStrByIdx(i);
      oddIndex += 2;
    }
    while (arr[i]) {
      arr[i]--;
      res[evenIndex] = getStrByIdx(i);
      evenIndex += 2;
    }
  }
  return res.join('');
}

const getIdxByStr = (str: string) => {
  return str.charCodeAt(0) - 'a'.charCodeAt(0);
};
const getStrByIdx = (idx: number) => {
  return String.fromCharCode(idx + 'a'.charCodeAt(0));
};
