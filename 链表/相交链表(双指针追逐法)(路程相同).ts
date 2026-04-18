class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
    //：的意思是如果pA为null，则将pA指向headB，否则将pA指向pA.next。同样的逻辑适用于pB。这种方法确保了两个指针在第二次遍历时会相遇于交点（如果存在）或者同时为null（如果不存在交点）。
  }
  return pA;
}
