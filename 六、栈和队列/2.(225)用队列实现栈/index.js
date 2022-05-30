// 创建两个栈，一个输入栈，一个输出栈；
// push的时候执行输入栈的push；
// 将输入栈顺序push到输出栈；
// pop和top的时候，执行输出栈的pop和top；
// 可以将pop（）和top（）中的重复代码提出来

var MyStack = function () {
  this.MyStackIn = [];
  this.MyStackOut = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.MyStackIn.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  stackInToStackOut(this.MyStackIn, this.MyStackOut);
  return this.MyStackOut.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  stackInToStackOut(this.MyStackIn, this.MyStackOut);
  console.log(this.MyStackOut);
  console.log(this.MyStackOut.length);
  console.log(this.MyStackOut[this.MyStackOut.length - 1]);
  return this.MyStackOut[this.MyStackOut.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.MyStackIn.length && !this.MyStackOut.length;
};

const stackInToStackOut = (stackIn, stackOut) => {
  const n = stackIn.length;
  if (n === 0) return;
  while (stackIn.length) {
    stackOut.push(stackIn.shift());
  }
};
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
