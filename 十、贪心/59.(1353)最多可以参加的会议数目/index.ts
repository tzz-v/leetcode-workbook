// 每天的多个会议，优先选择结束时间最小的最优，
// 维护当天可参加的，结束时间最小堆。
//   1. 从curDay（初始值为1）开始，将开始时间等于今天的会议的结束时间放入最小堆。
//   2. 将结束时间小于curDay的会议从堆内移除，这些会议都参加不了了。
//   3. 如果剩余的堆不为空，则选择会议时间最小的会议（堆顶）参加，
//   4. curDay往后走一天，
//   5. 重复步骤1、2、3、4.直至会议全部插入到最小堆且最小堆内的会议被全部参加或移除
// 为了方便讲会议顺序插入到最小堆中，需要对会议的开始时间线排个序。
// 排序的时间复杂度是O(nlogn)。遍历的时间复杂度是O(slogn)。其中，s表示时间跨度, 堆的插入和删除的时间复杂度是O(logn)
// 总时间复杂度为O(Max(n,s)logn);

function maxEvents(events: number[][]): number {
  events.sort((a, b) => a[1] - b[1]);
  const len = events.length;
  let cur = 1;

  let i = 0;
  const heap = new Heap();
  let res = 0;
  while (i < len || heap.heap.length) {
    while (heap.heap[0] < cur) {
      heap.removeMin();
    }
    while (i < len && events[i][0] === cur) {
      heap.insert(events[i][1]);
      i++;
    }
    if (heap.heap.length) {
      res++;
      heap.removeMin();
      cur++;
    }
  }
  return res;
}

class Heap {
  public heap: number[] = [];

  public insert = (val: number) => {
    let i = this.heap.length;
    this.heap[i] = val;
    let parentIndex = Math.floor(i - 1 / 2);
    while (i > 0 && this.heap[parentIndex] > this.heap[i]) {
      this.heap[i] = this.heap[parentIndex];
      this.heap[parentIndex] = val;
      i = parentIndex;
    }
  };
  public removeMin() {
    const val = this.heap.pop() as number;
    this.heap[0] = val;
    this.heapify(this.heap, 0);
  }
  public heapify(heap: number[], i: number) {
    const n = heap.length;
    while (true) {
      let minPos = i;
      if (i * 2 + 1 <= n && heap[i] > heap[i * 2 + 1]) minPos = i * 2 + 1;
      if (i * 2 + 2 <= n && heap[minPos] > heap[i * 2 + 2]) minPos = i * 2 + 2;
      if (minPos === i) break;
      const temp = heap[i];
      heap[i] = heap[minPos];
      heap[minPos] = temp;
      i = minPos;
    }
  }
}
