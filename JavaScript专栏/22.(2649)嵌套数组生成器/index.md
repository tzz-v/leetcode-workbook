现给定一个整数的 多维数组 ，请你返回一个生成器对象，按照 中序遍历 的顺序逐个生成整数。

多维数组 是一个递归数据结构，包含整数和其他 多维数组。

中序遍历 是从左到右遍历每个数组，在遇到任何整数时生成它，遇到任何数组时递归应用 中序遍历 。

示例 1：

输入：arr = [[[6]],[1,3],[]]
输出：[6,1,3]
解释：
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
generator.next().done; // true
示例 2：

输入：arr = []
输出：[]
解释：输入的多维数组没有任何参数，所以生成器不需要生成任何值。

提示：

0 <= arr.flat().length <= 105
0 <= arr.flat()[i] <= 105
maxNestingDepth <= 105
