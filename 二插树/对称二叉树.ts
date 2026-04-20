//写一个辅助函数 isMirror(left, right)
// 都为空 → 对称
// 一个空一个不空 → 不对称
// 值不等 → 不对称
// 递归判断：
// 左左 <-> 右右
// 左右 <-> 右左

class TreeNode3 {
  val: number;
  left: TreeNode2 | null;
  right: TreeNode3 | null;
  constructor(val: number, left?: TreeNode3 | null, right?: TreeNode3 | null) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function isMirror(t1: TreeNode3 | null, t2: TreeNode3 | null): boolean {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  return t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}
function isSymmetric(root: TreeNode3 | null): boolean {
  if (!root) return true;
  return isMirror(root.left, root.right);

  return false;
}
