// 创建两个栈，一个输入栈，一个输出栈；
// push的时候执行输入栈的push；
// 将输入栈倒序push到输出栈；
// pop和peek的时候，执行输出栈的pop和peek；
var MyQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let n = this.stackIn.length;
  let m = this.stackOut.length;
  if (m === 0 && n === 0) return false;
  if (m === 0) {
    for (let i = n - 1; i >= 0; i--) {
      this.stackOut.push(this.stackIn[i]);
    }
    this.stackIn = [];
  }
  return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let n = this.stackIn.length;
  let m = this.stackOut.length;
  if (m === 0 && n === 0) return null;
  if (m === 0) {
    for (let i = n - 1; i >= 0; i--) {
      this.stackOut.push(this.stackIn[i]);
    }
    this.stackIn = [];
  }
  return this.stackOut[this.stackOut.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  let n = this.stackIn.length;
  let m = this.stackOut.length;
  return m === 0 && n === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
