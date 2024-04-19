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

// 队列：每次循环，存放一层节点的数据，
// 每次循环，把当前层节点的值数组push到res中，并移除队列queue中当前层的节点，存入下一层的节点。
var levelOrder = function (root) {
  const res = [];
  const queue = [root];
  if (!root) return res;
  while (queue.length) {
    const arr = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curNode = queue.shift();
      arr.push(curNode.val);
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }

    res.push(arr);
  }
  return res;
};
