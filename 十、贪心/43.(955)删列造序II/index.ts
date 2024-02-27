// 字符串列数：strs[0].length;
// 遍历字符串列，将有序的列单独存储并维护；确保新字符串数组中的字符串有。

function minDeletionSize(strs: string[]): number {
  const strLen = strs[0].length;
  let arr = new Array(strs.length).fill('');

  for (let i = 0; i < strLen; i++) {
    const copyArr = arr.map((val, idx) => val + strs[idx][i]);
    if (isSorted(copyArr)) {
      arr = copyArr;
    }
  }
  return strLen - arr[0].length;
}

const isSorted = (arr: string[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};
