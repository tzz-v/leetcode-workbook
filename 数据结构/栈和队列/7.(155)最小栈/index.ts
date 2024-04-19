// 新增一个辅助栈，每当元素被压入栈顶时，将栈内最小元素压入辅助栈栈顶。
// 栈内最小元素： Math.min(新压入栈的元素，辅助栈栈顶元素)；

class MinStack {
  stack: number[] = [];
  minStack: number[] = [];
  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    const top = this.minStack[this.minStack.length - 1] ?? Infinity;
    this.minStack.push(val < top ? val : top);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
