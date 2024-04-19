// 思路：
// 有两个维度，h和k，应当先确认一个纬度，然后在按另一个纬度重新排列
// 把身高从大到小排列，此时，前面的节点比后面的节点高，
// 然后根据k进行重新插入操作，这样插入的节点也不会影响前面插入的节点。

function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
  const queue: number[][] = [];
  for (let i = 0; i < people.length; i++) {
    const val = people[i];
    queue.splice(val[1], 0, val);
  }
  return queue;
}
