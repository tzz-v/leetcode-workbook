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
 * @return {number}
 */

// 递归，
// 当前二叉树的个数等于“左子树的个数+右子树的个数+1（本身）”
// 终止条件：当前树为null；
var countNodes = function (root) {
  if (!root) {
    return null;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};
