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
// 向res push 每一层的平均值
var averageOfLevels = function (root) {
  const res = [];
  const queue = [root];
  if (!root) return res;
  while (queue.length) {
    let num = 0;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      num += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(num / len);
  }
  return res;
};
