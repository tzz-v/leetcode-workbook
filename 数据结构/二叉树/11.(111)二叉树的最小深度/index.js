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

// 一层层的更新queue队列（移出当前层数据，移入下一层数据）。
// 判断当前层是否存在叶子结点（没有left子节点且没有right子节点）。
var minDepth = function (root) {
  if (!root) return 0;
  let layer = 0;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    layer++;
    let flag = false;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) {
        console.log('11');
        flag = true;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (flag) break;
  }
  return layer;
};
