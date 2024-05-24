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

// 递归遍历
// 计算当前节点的左右最深节点的长度相加。取较大值

function diameterOfBinaryTree(root: TreeNode | null): number {
  let res = 0;

  const func = (root: TreeNode | null) => {
    if (!root) return 0;
    const leftLen = func(root.left);
    const rightLen = func(root.right);
    res = Math.max(leftLen + rightLen, res);
    return Math.max(leftLen, rightLen) + 1;
  };
  func(root);
  return res;
}
