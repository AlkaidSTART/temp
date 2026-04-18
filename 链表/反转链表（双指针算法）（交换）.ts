class ListNode2 {
  val: number;
  next: ListNode2 | null;

  constructor(val?: number, next?: ListNode2 | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
function reverseList(head: ListNode2 | null): ListNode2 | null {
  let pre = null,
    cur = head, // pre指向前一个节点，cur指向当前节点
    temp = null;
  while (cur !== null) {
    temp = cur.next; //保存当前节点的下一个节点
    cur.next = pre; //将当前节点的next指向前一个节点，实现反转
    pre = cur; //将pre移动到当前节点
    cur = temp; //将cur移动到下一个节点
  }
  return pre; //返回反转后的链表头节点
}
