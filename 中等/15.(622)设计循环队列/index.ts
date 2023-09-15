// 使用数组模拟循环队列，
class MyCircularQueue {
  count: number;
  arr: number[];
  start = 0;
  end = 0;
  constructor(k: number) {
    this.count = k;
    this.arr = new Array(k).fill(0);
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.arr[this.end % this.count] = value;
    this.end++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.start++;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;
    return this.arr[this.start % this.count];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    return this.arr[(this.end - 1) % this.count];
  }

  isEmpty(): boolean {
    return this.end === this.start;
  }

  isFull(): boolean {
    return this.end - this.start === this.count;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
