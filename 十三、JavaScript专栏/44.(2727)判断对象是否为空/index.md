给定一个对象或数组，判断它是否为空。

一个空对象不包含任何键值对。
一个空数组不包含任何元素。
你可以假设对象或数组是通过 JSON.parse 解析得到的。

示例 1：

输入：obj = {"x": 5, "y": 42}
输出：false
解释：The object has 2 key-value pairs so it is not empty.
示例 2：

输入：obj = {}
输出：true
解释：The object doesn't have any key-value pairs so it is empty.
示例 3：

输入：obj = [null, false, 0]
输出：false
解释：The array has 3 elements so it is not empty.

提示：

2 <= JSON.stringify(obj).length <= 105

你可以在 O(1) 时间复杂度内解决这个问题吗？
