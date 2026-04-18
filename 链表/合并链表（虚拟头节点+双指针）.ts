class ListNode5 {
  val: number;
  next: ListNode5 | null;

  constructor(val?: number, next?: ListNode5 | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function mergeTwoLists(list1: ListNode5 | null, list2: ListNode5 | null): ListNode5 | null {
  const dummy = new ListNode5();
  let tail = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1; // 添加节点
      list1 = list1.next!;
      tail = tail.next!;
    } else {
      tail.next = list2; // 添加节点
      list2 = list2.next!;
      tail = tail.next!;
    }
  }
  // 将剩余的节点连接到结果链表
  tail.next = list1 || list2;

  return dummy.next;
}
