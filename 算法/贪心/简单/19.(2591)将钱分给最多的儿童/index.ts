function distMoney(money: number, children: number): number {
  if (money < children) return -1;

  money -= children;
  const res = Math.floor(money / 7);
  const extra = money % 7;
  if (res > children || (res === children && !!extra)) return children - 1;
  if (res > 0 && extra === 3) return Math.min(children - 2, res);
  return res;
}
