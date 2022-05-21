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
 * @return {boolean}
 */

// 和上一题类似，使用递归；
// 区别就是左边的左子节点和右边的右子节点相比较，左边的右子节点和右边的左子节点相比较
var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }
  return func(root.left, root.right);
};
const func = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null || p.val !== q.val) return false;
  return func(p.left, q.right) && func(p.right, q.left);
};
