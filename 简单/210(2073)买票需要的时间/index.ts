// 第k位之前的人最多可以买tickets[k]张票，第k位之后的人，最多可以买tickets[k] - 1张票
function timeRequiredToBuy(tickets: number[], k: number): number {
  return tickets.reduce((prev, cur, idx) => {
    if (idx > k) {
      return prev + Math.min(cur, tickets[k] - 1);
    }
    return prev + Math.min(cur, tickets[k]);
  }, 0);
}
