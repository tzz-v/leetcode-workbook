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

// 和前序遍历比，把push的顺序变化一下
var inorderTraversal = function (root) {
  const arr = [];
  const func = (node) => {
    if (node === null) return;

    func(node.left);
    arr.push(node.val);
    func(node.right);
  };
  func(root);
  return arr;
};
