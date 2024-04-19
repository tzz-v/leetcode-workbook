class MyLinkedList {
  public size = 0;
  public head = new ListNode(0);
  constructor() {}

  get(index: number): number {
    if (index >= this.size) return -1;
    let cur = this.head;
    let i = 0;
    while (cur && i !== index + 1) {
      cur = cur.next;
      i++;
    }
    return cur.val;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return;
    let cur = this.head;
    let i = 0;
    while (cur && i !== index) {
      cur = cur.next;
      i++;
    }
    const node = new ListNode(val, cur.next);
    cur.next = node;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size) return;
    this.size--;
    let cur = this.head;
    let i = 0;
    while (cur && i !== index) {
      cur = cur.next;
      i++;
    }
    cur.next = cur?.next?.next;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
