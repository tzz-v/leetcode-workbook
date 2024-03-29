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
 * @return {number[]}
 */

// 递归
// 终止条件：node === null
var preorderTraversal = function (root) {
  const arr = [];
  const func = (node) => {
    if (node === null) {
      return;
    }
    arr.push(node.val);
    func(node.left);
    func(node.right);
  };
  func(root);
  return arr;
};
