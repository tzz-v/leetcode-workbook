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

// 思路：
// 需要一个变量来维护node的累加值。
// 根据二叉搜索数的性质，按照后序遍历的顺序来给二叉树重新赋值。

function convertBST(root: TreeNode | null): TreeNode | null {
  let num = 0;
  const func = (root: TreeNode | null) => {
    if (!root) return;
    func(root.right);
    num += root.val;
    root.val = num;
    func(root.left);
  };
  func(root);
  return root;
}
