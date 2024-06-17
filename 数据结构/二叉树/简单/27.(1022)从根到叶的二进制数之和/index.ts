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

// 深度优先遍历并累加
function sumRootToLeaf(root: TreeNode | null): number {
  return func(root);
}

const func = (root: TreeNode | null, val: number = 0) => {
  if (!root) return 0;
  const res = (val << 1) + root.val;
  if (!root.left && !root.right) return res;
  return func(root.left, res) + func(root.right, res);
};
