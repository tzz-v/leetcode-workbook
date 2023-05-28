给定一个函数 fn ，它返回一个新的函数，返回的函数与原始函数完全相同，只不过它确保 fn 最多被调用一次。

第一次调用返回的函数时，它应该返回与 fn 相同的结果。
第一次后的每次调用，它应该返回 undefined 。

示例 1：

输入：fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
输出：[{"calls":1,"value":6}]
解释：
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn 没有被调用
示例 2：

输入：fn = (a,b,c) => (a _ b _ c), calls = [[5,7,4],[2,3,6],[4,6,8]]
输出：[{"calls":1,"value":140}]
解释：
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn 没有被调用
onceFn(4, 6, 8); // undefined, fn 没有被调用

提示：

1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000
