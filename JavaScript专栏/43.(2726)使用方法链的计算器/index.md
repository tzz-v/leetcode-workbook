设计一个类 Calculator 。该类应提供加法、减法、乘法、除法和乘方等数学运算功能。同时，它还应支持连续操作的方法链式调用。Calculator 类的构造函数应接受一个数字作为 result 的初始值。

你的 Calculator 类应包含以下方法：

add - 将给定的数字 value 与 result 相加，并返回更新后的 Calculator 对象。
subtract - 从 result 中减去给定的数字 value ，并返回更新后的 Calculator 对象。
multiply - 将 result 乘以给定的数字 value ，并返回更新后的 Calculator 对象。
divide - 将 result 除以给定的数字 value ，并返回更新后的 Calculator 对象。如果传入的值为 0 ，则抛出错误 "Division by zero is not allowed" 。
power - 将 result 的值乘以给定的数字 value ，并返回更新后的 Calculator 对象。
getResult - 返回 result 的值。
结果与实际结果相差在 10-5 范围内的解被认为是正确的。

示例 1：

输入：actions = ["Calculator", "add", "subtract", "getResult"], values = [10, 5, 7]
输出：8
解释：
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
示例 2：

输入：actions = ["Calculator", "multiply", "power", "getResult"], values = [2, 5, 2]
输出：100
解释：
new Calculator(2).multiply(5).power(2).getResult() // (2 \* 5) ^ 2 = 100
示例 3：

输入：actions = ["Calculator", "divide", "getResult"], values = [20, 0]
输出："Division by zero is not allowed"
解释：
new Calculator(20).divide(0).getResult() // 20 / 0

由于不能除以零，因此应抛出错误。

提示：

2 <= actions.length <= 2 _ 104
1 <= values.length <= 2 _ 104 - 1
actions[i] 是 "Calculator", "add", "subtract", "multiply", "divide", "power", 和 "getResult" 其中的元素
最后一个操作总是 "getResult"
values 是一个数字的 JSON 数组
