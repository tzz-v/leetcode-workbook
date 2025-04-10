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

// 递归中序遍历

function evaluateTree(root: TreeNode | null): boolean {
  if (!root.left && !root.right) return !!root.val;
  const left = evaluateTree(root.left);
  const right = evaluateTree(root.right);
  if (root.val === 2) {
    return left || right;
  }
  return left && right;
}
