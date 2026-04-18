class ListNode3 {
  val: number;
  next: ListNode3 | null;

  constructor(val?: number, next?: ListNode3 | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
function isPalindrome(head: ListNode3 | null): boolean {
  if (head === null) {
    return true;
  }
  //找到链表的中间节点
  let fast: ListNode3 | null = head,
    slow: ListNode3 | null = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  //反转后半部分链表
  let prev: ListNode3 | null = null; //prev指向反转后的链表头节点
  let curr: ListNode3 | null = slow; //curr指向当前正在反转的节点
  while (curr !== null) {
    const nextTemp: ListNode3 | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  //比较前半部分和后半部分链表的节点值是否相等
  let left: ListNode3 | null = head;
  let right: ListNode3 | null = prev;
  while (right !== null) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next!;
    right = right.next;
  }

  return true;
}
