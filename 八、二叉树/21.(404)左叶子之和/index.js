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
// 左叶子节点： 左节点 && 叶子结点
// 当前节点无法判断是否为左节点，可以给递归函数额外传递一个参数来区分左右，也可以通过节点的父节点来判断其左子节点是否是叶子节点。
var sumOfLeftLeaves = function (root) {
  if (!root) return null;
  const leftValue = sumOfLeftLeaves(root.left);
  const rightValue = sumOfLeftLeaves(root.right);
  let midValue = 0;
  if (root.left && !root.left.left && !root.left.right) {
    midValue = root.left.val;
  }
  return leftValue + rightValue + midValue;
};
