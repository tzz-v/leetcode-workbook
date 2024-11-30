function countAndSay(n: number): string {
  let res = '1';
  for (let i = 1; i < n; i++) {
      res = gen(res);
  };
  return res;
};

const gen = (str: string) => {
  let count = 1;
  let res = '';

  for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
          count++;
      } else {
          res += `${count}${str[i - 1]}`;
          count = 1;
      }
  };
  return res;
}