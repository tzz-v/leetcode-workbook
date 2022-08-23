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

// 同层序遍历，有选择的进行res的push操作；
// 只push queue的队列的最后一项的值，即当前层的最右项。
var rightSideView = function (root) {
  const res = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length !== 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      if (i === len - 1) {
        res.push(node.val);
      }
    }
  }
  return res;
};
