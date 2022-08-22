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
 * @return {number[][]}
 */

// 和上一题思路一样，只是把push操作改成unshift操作
var levelOrderBottom = function (root) {
  const res = [];
  const queue = [root];
  if (!root) {
    return res;
  }
  while (queue.length) {
    const len = queue.length;
    const arr = [];
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      arr.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    res.unshift(arr);
  }
  return res;
};
