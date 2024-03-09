// 先假设全都去b地。总价格是num。
// 挑出n个人去a地。 总价格需要n个人中每个人都 (- priceB + priceA);
// 那么去往a地的人，价格priceB越大于priceA 总价格num越小。
// 按照两地差价进行排序，前n个人去a地，后n个人去b地。
// 排序时间复杂度为O(nlogn)，累加时间复杂度为O(n)。总时间复杂度为O(nlogn)

function twoCitySchedCost(costs: number[][]): number {
  costs.sort((a, b) => {
    return b[1] - b[0] - (a[1] - a[0]);
  });

  return costs.reduce(
    (pre, cur, i) => (i < costs.length / 2 ? pre + cur[0] : pre + cur[1]),
    0
  );
}
