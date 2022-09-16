/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

// 同二叉树的最大深度，使用层序遍历，得到N叉树的总层数；
var maxDepth = function (root) {
  if (!root) return 0;
  let count = 0;
  const queue = [root];
  while (queue.length) {
    count++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (cur.children) {
        for (item of cur.children) {
          queue.push(item);
        }
      }
    }
  }
  return count;
};
