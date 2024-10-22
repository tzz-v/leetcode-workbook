function maximumWealth(accounts: number[][]): number {
  return accounts.reduce((prev, cur) => {
      const curSum = cur.reduce((prev, cur) => prev + cur);
      return Math.max(prev, curSum);
  }, 0);
};