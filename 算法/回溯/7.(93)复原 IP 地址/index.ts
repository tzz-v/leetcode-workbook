// 思路：
// 单层逻辑：遍历字符串的下标，根据下标把第一份数字push进数组里，在递归剩余字符串。。。直至最后一次，把所有数字push进arr数组；

// 存入数组之前可以加一个ip校验，不符合标准可以直接break退出当前循环。

function restoreIpAddresses(s: string): string[] {
  const res: string[] = [];

  const func = (i: number, arr: string[]) => {
    if (arr.length === 4) {
      res.push(arr.join('.'));
      return;
    }
    for (let j = i; j < s.length; j++) {
      let str = '';
      if (arr.length === 3) {
        str = s.slice(i);
        j = s.length;
      } else {
        str = s.slice(i, j + 1);
      }
      if (!isIp(str)) break;
      arr.push(str);
      func(j + 1, arr);
      arr.pop();
    }
  };
  func(0, []);
  return res;
}

const isIp = (str: string) => {
  if (str.length > 1 && str.startsWith('0')) {
    return false;
  }
  if (Number(str) > 255) {
    return false;
  }
  return true;
};
