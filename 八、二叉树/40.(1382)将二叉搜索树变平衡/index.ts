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

// 思路：
// 先使用中序遍历把它转成数组，
// 在根据数组递归创建一个平衡树。

function balanceBST(root: TreeNode | null): TreeNode | null {
  const arr: number[] = [];
  const getArrFromTreeNode = (root: TreeNode | null) => {
    if (!root) return [];
    getArrFromTreeNode(root.left);
    arr.push(root.val);
    getArrFromTreeNode(root.right);
  };
  const getTreeNodeFromArr = (arr: number[]) => {
    if (arr.length === 0) return null;
    const mid = Math.ceil((arr.length - 1) / 2);
    const left = getTreeNodeFromArr(arr.slice(0, mid));
    const right = getTreeNodeFromArr(arr.slice(mid + 1));
    return new TreeNode(arr[mid], left, right);
  };
  getArrFromTreeNode(root);
  return getTreeNodeFromArr(arr);
}
