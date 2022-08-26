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

// 比较当前层的最大值
var largestValues = function (root) {
  const res = [];
  const queue = [root];
  if (!root) return res;
  while (queue.length) {
    const len = queue.length;
    let max = -Infinity;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      max = Math.max(node.val, max);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(max);
  }
  return res;
};
