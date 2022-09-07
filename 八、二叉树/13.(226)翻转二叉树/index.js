/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 使用二叉树的深度优先遍历，交换两个子节点的位置；
var invertTree = function (root) {
  if (!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
