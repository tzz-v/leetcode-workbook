class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 后序遍历
// 思路：把所有路径的路径和存到数组里，然后查看数组中是否存在targetSum。
// 方法：参考「20.(257)二叉树的所有路径」, 得到所有路径的路径和。通过indexOf判断targetSum在数组中的下标是否等于-1；

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const func = (node) => {
    if (!node) return null;
    const leftValue = func(node.left);
    const rightValue = func(node.right);
    const value = [...(leftValue ?? []), ...(rightValue ?? [])];
    if (!value.length) {
      return [node.val];
    }
    return value.map((item) => item + node.val);
  };
  const valueArr = func(root);
  return !!valueArr?.length && valueArr.indexOf(targetSum) !== -1;
}
