class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
    console.log(this);
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let item = new Node(val);
    if (!this.head) {
      this.head = item;
      this.tail = item;
    } else {
      let temp = this.tail;
      this.tail = item;
      item.prev = temp;
      temp.next = item;
    }
    this.length++;
    return this;
  }
}
let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);
console.log(list);
