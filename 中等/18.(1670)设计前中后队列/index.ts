// 主要考虑往中间插入/移除元素
// 插入时，中间节点下标是Math.floor(this.arr.length / 2)
// 移除时，中间节点下标是Math.floor((this.arr.length - 1) / 2)

class FrontMiddleBackQueue {
  public arr: number[] = [];

  pushFront(val: number): void {
    this.arr.unshift(val);
  }

  pushMiddle(val: number): void {
    const i = Math.floor(this.arr.length / 2);
    this.arr.splice(i, 0, val);
  }

  pushBack(val: number): void {
    this.arr.push(val);
  }

  popFront(): number {
    return this.arr.shift() ?? -1;
  }

  popMiddle(): number {
    const i = Math.floor((this.arr.length - 1) / 2);
    const res = this.arr.splice(i, 1);
    return res[0] ?? -1;
  }

  popBack(): number {
    return this.arr.pop() ?? -1;
  }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
