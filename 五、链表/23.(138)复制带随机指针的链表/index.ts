class ListNodeByRandom {
  val: number;
  next: ListNodeByRandom | null;
  random: ListNodeByRandom | null;
  constructor(
    val?: number,
    next?: ListNodeByRandom,
    random?: ListNodeByRandom
  ) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

// 读了两遍题目，原来是给一个特殊的链表做深拷贝

// 特殊链表：每个节点额外存在random属性，随机指向链表的任意节点。
// 深拷贝：拷贝出的新链表的任意节点的next或random都不能指向旧链表

function copyRandomList(
  head: ListNodeByRandom | null
): ListNodeByRandom | null {
  if (!head) return null;
  const newHead = new ListNodeByRandom(head.val);

  let cur = head;
  let newCur = newHead;
  const map = new Map<ListNodeByRandom | null, ListNodeByRandom>([
    [cur, newCur],
  ]);
  while (cur && cur.next) {
    cur = cur.next;
    newCur.next = new ListNodeByRandom(cur.val);
    newCur = newCur.next;
    map.set(cur, newCur);
  }

  Array.from(map.entries()).forEach(([node, newNode]) => {
    newNode.random = map.get(node?.random ?? null) ?? null;
  });
  return newHead;
}
