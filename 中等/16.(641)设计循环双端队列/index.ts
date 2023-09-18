class MyCircularDeque {
  start = 0;
  end = 0;
  len = 0;
  k = 0;
  arr: number[];
  constructor(k: number) {
    this.k = k;
    this.arr = new Array(k).fill(0);
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    this.start = (this.start + this.k - 1) % this.k;
    this.arr[this.start] = value;
    this.len++;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.arr[this.end] = value;
    this.len++;
    this.end = (this.end + 1) % this.k;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.start = (this.start + 1) % this.k;
    this.len--;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.end = (this.end + this.k - 1) % this.k;
    this.len--;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) return -1;
    return this.arr[this.start];
  }

  getRear(): number {
    if (this.isEmpty()) return -1;
    return this.arr[(this.end + this.k - 1) % this.k];
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  isFull(): boolean {
    return this.len === this.k;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
