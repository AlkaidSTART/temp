// 将有序数组转换为二叉搜索树
// 递归法
//找到中间节点作为根节点
// 递归调用左右两边的数组

class TreeNode6 {
  val: number;
  left: TreeNode6 | null;
  right: TreeNode6 | null;
  constructor(val: number, left?: TreeNode6 | null, right?: TreeNode6 | null) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
function sortedArrayToBST(nums: number[]): TreeNode6 | null {
  if (!nums.length) return null;
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode6(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
}
