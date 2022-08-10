/* In computer science, a linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing efficient insertion or removal from arbitrary element references. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.

 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/* const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
 */
// the "new" keyword
// 1- it creates a new empty object {}
//2- it binds the values of "this" to the new empty object
// 3- it calls the constructor function to build the object

const a = new Node(14);
const b = new Node(540);
const c = new Node(26);
const d = new Node(-400);

a.next = b;
b.next = c;
c.next = d;

/* const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

printLinkedList(a);
 */

// LinkedList problem 1: Pushing values into array:

/* const LinkedListValues = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

console.log(LinkedListValues(a));
 */

// LinkedList problem 2: Sum of LinkedList:



const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

console.log(sumList(a));
