export {};
declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}
Function.prototype.callPolyfill = function (context, ...args): any {
  if (!context) {
    context = window;
  }
  context.__proto__.fn = this;
  const res = context.fn(...args);
  delete context.__proto__.fn;
  return res;
};

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
