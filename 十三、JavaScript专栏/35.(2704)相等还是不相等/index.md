请你编写一个名为 expect 的函数，用于帮助开发人员测试他们的代码。它应该接受任何值 val 并返回一个包含以下两个函数的对象。

toBe(val) 接受另一个值并在两个值相等（ === ）时返回 true 。如果它们不相等，则应抛出错误 "Not Equal" 。
notToBe(val) 接受另一个值并在两个值不相等（ !== ）时返回 true 。如果它们相等，则应抛出错误 "Equal" 。

示例 1：

输入：func = () => expect(5).toBe(5)
输出：{"value": true}
解释：5 === 5 因此该表达式返回 true。
示例 2：

输入：func = () => expect(5).toBe(null)
输出：{"error": "Not Equal"}
解释：5 !== null 因此抛出错误 "Not Equal".
示例 3：

输入：func = () => expect(5).notToBe(null)
输出：{"value": true}
解释：5 !== null 因此该表达式返回 true.
