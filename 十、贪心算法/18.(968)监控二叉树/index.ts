/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 用尽可能少的摄像头，监视二叉树的所有节点。思路：
// 可以采后序遍历，从下往上遍历：尽可能将摄像头放在叶子结点的父节点，以保证更少的摄像头（毕竟跟节点只有一个，而叶子结点可能有多个）
// 可以给遍历过的节点添加状态，（本节点有摄像头：camera、）（本节点可以被摄像头覆盖：cover、）（本节点不能被摄像头覆盖：noCover）
// 遍历时查看当前节点的左右节点的状态，根据左右子节点的状态生成自己的状态：
// - 当左右子节点至少存在一个摄像头时：说明本节点可以被覆盖掉，返回 cover；
// - 当左右子节点都是被覆盖的状态时：说明本几点不能被覆盖，需要他的父节点安装摄像头进行覆盖；
// - 当左右子节点至少有一个未覆盖时：需要安装摄像头对子节点进行覆盖 摄像头数量加1；
// - 空节点的处理：根据当前的逻辑，空节点的状态只能是 有覆盖，这样，叶子结点就是没有覆盖，将在叶子结点的父节点安装摄像头

const TypeEnum = {
  camera: 'camera',
  cover: 'cover',
  noCover: 'noCover',
};

function minCameraCover(root: TreeNode | null): number {
  let res = 0;
  const func = (root) => {
    if (!root) return TypeEnum.cover;
    const left = func(root.left);
    const right = func(root.right);
    if (left === TypeEnum.camera || right === TypeEnum.camera) {
      return TypeEnum.cover;
    }
    if (left === TypeEnum.cover && right === TypeEnum.cover) {
      return TypeEnum.noCover;
    }
    if (left === TypeEnum.noCover || right === TypeEnum.noCover) {
      res++;
      return TypeEnum.camera;
    }
    return -1;
  };
  if (func(root) === TypeEnum.noCover) {
    res++;
  }
  return res;
}
