/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// 递归，同二叉树前序遍历
var preorder = function (root) {
  const arr = [];
  const order = (node) => {
    if (!node) return;
    arr.push(node.val);
    for (let child of node.children) {
      order(child);
    }
  };
  order(root);
  return arr;
};
