给定一个异步函数数组 functions，返回一个新的 promise 对象 promise。数组中的每个函数都不接受参数并返回一个 promise。

promise resolve 条件：

当所有从 functions 返回的 promise 都成功解析时。promise 的解析值应该是一个按照它们在 functions 中的顺序排列的 promise 的解析值数组。
promise reject 条件：

当任何从 functions 返回的 promise 被拒绝时。promise 也会被拒绝，并返回第一个拒绝的原因。
请在不使用内置的 Promise.all 函数的情况下解决。

示例 1：

输入：functions = [
() => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
输出：{"t": 200, "resolved": [5]}
解释：
promiseAll(functions).then(console.log); // [5]

单个函数在 200 毫秒后以值 5 成功解析。
示例 2：

输入：functions = [
() => new Promise(resolve => setTimeout(() => resolve(1), 200)),
() => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
输出：{"t": 100, "rejected": "Error"}
解释：由于其中一个 promise 被拒绝，返回的 promise 也在同一时间被拒绝并返回相同的错误。
示例 3：

输入：functions = [
() => new Promise(resolve => setTimeout(() => resolve(4), 50)),
() => new Promise(resolve => setTimeout(() => resolve(10), 150)),
() => new Promise(resolve => setTimeout(() => resolve(16), 100))
]
输出：{"t": 150, "resolved": [4, 10, 16]}
解释：所有的 promise 都成功执行。当最后一个 promise 被解析时，返回的 promise 也被解析了。

提示：

functions is an array of functions that returns promises
1 <= functions.length <= 10
