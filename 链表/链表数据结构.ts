class ListNode1 {
  val: number;
  next: ListNode1 | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  } //构造函数，new ListNode() 创建链表节点时调用
}
