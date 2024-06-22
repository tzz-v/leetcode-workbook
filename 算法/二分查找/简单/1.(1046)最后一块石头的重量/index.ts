function lastStoneWeight(stones: number[]): number {
  stones.sort((a, b) => a - b);

  while (stones.length > 1) {
    const first = stones.pop() as number;
    const second = stones.pop() as number;
    if (first > second) {
      insert(stones, first - second);
    }
  }
  return stones[0] ?? 0;
}

const insert = (arr: number[], val: number) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  arr.splice(left, 0, val);
};
