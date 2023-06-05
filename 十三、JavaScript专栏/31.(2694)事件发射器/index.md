设计一个 EventEmitter 类。这个接口与 Node.js 或 DOM 的 Event Target 接口相似，但有一些差异。EventEmitter 应该允许订阅事件和触发事件。

你的 EventEmitter 类应该有以下两个方法：

subscribe - 这个方法接收两个参数：一个作为字符串的事件名和一个回调函数。当事件被触发时，这个回调函数将被调用。 一个事件应该能够有多个监听器。当触发带有多个回调函数的事件时，应按照订阅的顺序依次调用每个回调函数。应返回一个结果数组。你可以假设传递给 subscribe 的回调函数都不是引用相同的。 subscribe 方法还应返回一个对象，其中包含一个 unsubscribe 方法，使用户可以取消订阅。当调用 unsubscribe 方法时，回调函数应该从订阅列表中删除，并返回 undefined。
emit - 这个方法接收两个参数：一个作为字符串的事件名和一个可选的参数数组，这些参数将传递给回调函数。如果没有订阅给定事件的回调函数，则返回一个空数组。否则，按照它们被订阅的顺序返回所有回调函数调用的结果数组。

示例 1：

输入：actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], values = [[], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 5; }"], ["firstEvent"]]
输出：[[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
解释：
const emitter = new EventEmitter();
emitter.emit("firstEvent"); // [], 还没有订阅任何回调函数
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
emitter.emit("firstEvent"); // [5, 6], 返回 cb1 和 cb2 的输出
示例 2：

输入：actions = ["EventEmitter", "subscribe", "emit", "emit"], values = [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]
输出：[[],["subscribed"],["emitted",["1,2,3"]],["emitted",["3,4,6"]]]
解释：注意 emit 方法应该能够接受一个可选的参数数组。

const emitter = new EventEmitter();
emitter.subscribe("firstEvent, function cb1(...args) { return args.join(','); });
emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]
示例 3：

输入：actions = ["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"], values = [[], ["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]
输出：[[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[]]]
解释：
const emitter = new EventEmitter();
const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
sub.unsubscribe(); // undefined
emitter.emit("firstEvent", [4, 5, 6]); // [], 没有订阅者

提示：

1 <= actions.length <= 10
values.length === actions.length
所有测试用例都是有效的。例如，你不需要处理取消一个不存在的订阅的情况。
只有 4 种不同的操作：EventEmitter、emit、subscribe 和 unsubscribe 。 EventEmitter 操作没有参数。
emit 操作接收 1 或 2 个参数。第一个参数是要触发的事件名，第二个参数传递给回调函数。
subscribe 操作接收 2 个参数，第一个是事件名，第二个是回调函数。
unsubscribe 操作接收一个参数，即之前进行订阅的顺序（从 0 开始）。
