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
// 同上一题，裁掉不在范围内的。
// 如果节点值小于low，说明该节点以及他的左子树都不符合要求。
// 如果节点值大于hign，说明该节点以及他的右子树都不符合要求。

function trimBST(
  root: TreeNode | null,
  low: number,
  high: number
): TreeNode | null {
  if (!root) return null;
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  if (root.val > high) {
    return root.left;
  }
  if (root.val < low) {
    return root.right;
  }
  return root;
}
