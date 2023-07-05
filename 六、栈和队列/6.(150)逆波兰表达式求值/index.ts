function evalRPN(tokens: string[]): number {
  const res: number[] = [];

  tokens.forEach((val) => {
    if (!isNaN(Number(val))) {
      res.push(Number(val));
      return;
    }
    const r = res.pop() ?? 0;
    const l = res.pop() ?? 0;
    res.push(arithmetic(val, l, r));
  });
  return res[0];
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
