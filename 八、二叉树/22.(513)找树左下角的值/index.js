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

// 层序遍历，
// 找到最后一层的最左侧的值。
var findBottomLeftValue = function (root) {
  const queue = [root];
  let leftValue;
  while (queue.length) {
    leftValue = queue[0].val;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }
  return leftValue;
};
