/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// 同二叉树的后序遍历
var postorder = function (root) {
  const res = [];
  const order = (node) => {
    if (!node) return;
    for (const child of node.children) {
      order(child);
    }
    res.push(node.val);
  };
  order(root);
  return res;
};
