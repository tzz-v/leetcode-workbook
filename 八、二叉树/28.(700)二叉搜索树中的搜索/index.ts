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

// 二叉搜索树的定义：
// 二叉搜索树是一个有序树，
// - 如果根结点的左子树存在，则左子树的所有值均小于根结点的值。
// - 如果根结点的右子树存在，则右子树的所有值均大于根结点的值。
// - 根结点的左右子树均为二叉搜索树。

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root || root.val === val) return root;
  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
}
