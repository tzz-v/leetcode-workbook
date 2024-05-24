/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

// 一层层的更新queue队列（移出当前层数据，移入下一层数据）。
// 将每层的数据push进res数组中。
var levelOrder = function (root) {
  const res = [];
  let queue = [root];
  if (!root) return res;
  while (queue.length) {
    const arr = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      arr.push(node.val);
      if (node.children.length) {
        queue = queue.concat(node.children);
      }
    }
    res.push(arr);
  }
  return res;
};
