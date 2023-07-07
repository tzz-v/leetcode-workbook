function calculate(s: string): number {
  s = s.trim();
  const stack: (number | string)[] = [];
  let num = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue;
    if (isNaN(Number(s[i]))) {
      stack.push(Number(num));
      num = '';
      stack.push(s[i]);
    } else {
      num += s[i];
      if (i === s.length - 1) {
        stack.push(Number(num));
        num = '';
      }
    }
  }
  const multipStack: (number | string)[] = [];
  stack.forEach((val) => {
    if (
      multipStack[multipStack.length - 1] === '*' ||
      multipStack[multipStack.length - 1] === '/'
    ) {
      const symbol = multipStack.pop();
      const l = multipStack.pop();
      multipStack.push(arithmetic(symbol, l, val));
    } else {
      multipStack.push(val);
    }
  });
  const plusStack: (number | string)[] = [];
  multipStack.forEach((val) => {
    if (
      plusStack[plusStack.length - 1] === '+' ||
      plusStack[plusStack.length - 1] === '-'
    ) {
      const symbol = plusStack.pop();
      const l = plusStack.pop();
      plusStack.push(arithmetic(symbol, l, val));
    } else {
      plusStack.push(val);
    }
  });
  return Number(plusStack.join(''));
}

const arithmetic = (symbol: string, l: number, r: number) => {
  switch (symbol) {
    case '+':
      return l + r;
    case '-':
      return l - r;
    case '*':
      return l * r;
    case '/':
      return parseInt(`${l / r}`);
    default:
      return 0;
  }
};
