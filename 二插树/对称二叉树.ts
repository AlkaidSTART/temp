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
