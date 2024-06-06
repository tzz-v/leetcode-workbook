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

// 中序遍历二叉树

function isUnivalTree(root: TreeNode | null): boolean {
  return func(root, root.val);
}

const func = (root: TreeNode | null, val: number) => {
  if (!root) return true;
  return root.val === val && func(root.left, val) && func(root.right, val);
};
