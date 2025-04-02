function calculateTax(brackets: number[][], income: number): number {
  let res = 0;
  for (let i = 0; i < brackets.length; i++) {
    if (income <= brackets[i - 1]?.[0]) break;
    res +=
      ((Math.min(brackets[i][0], income) - (brackets[i - 1]?.[0] ?? 0)) *
        brackets[i][1]) /
      100;
  }

  return res;
}
