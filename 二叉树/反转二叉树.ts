//反转二叉树
//只需要交换每个节点的左右子树即可

class TreeNode2 {
  val: number;
  left: TreeNode2 | null;
  right: TreeNode2 | null;
  constructor(val: number, left?: TreeNode2 | null, right?: TreeNode2 | null) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function invertTree(root: TreeNode2 | null): TreeNode2 | null {
  if (!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}
