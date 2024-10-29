function reformatNumber(number: string): string {
  const str = number.replace(/[\s|-]/g, '');
  const len = str.length;
  let res = '';
  for (let i = 0; i < len; i++) {
      if (len - i === 2) {
          res += `${str[i]}${str[i+ 1]}`;
          break;
      } else if (len - i === 4) {
          res += `${str[i]}${str[i+1]}-${str[i+2]}${str[i+3]}`
          break;
      }
      res += `${str[i]}${str[i+ 1]}${str[i+ 2]}`;
      i += 2;
      if (i < len - 1) {
          res += '-';
      }
  }
  return res;
};