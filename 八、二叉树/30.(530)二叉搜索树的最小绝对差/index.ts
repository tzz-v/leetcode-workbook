/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 搜索二叉树的一个性质： 中序遍历搜索二叉树得到的数组是一个有序数组；

// 思考：
// 既然可以是有序的，只需要逐一比较相邻元素，就可以得到树中节点值的最小绝对差。

// 解决：
// 递归函数外部维护min和prev
// 通过中序遍历，逐一得到相邻元素的绝对差，并与min进行比较，取较小值。

function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity;
  let prev = Infinity;
  const func = (root: TreeNode | null) => {
    if (!root) return;
    func(root.left);

    const val = Math.abs(root.val - prev);
    min = Math.min(val, min);
    prev = root.val;

    func(root.right);
  };
  func(root);
  return min;
}
