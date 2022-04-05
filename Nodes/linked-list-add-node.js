class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  add(node) {
    //if the current "next" is null, set "next" to the incoming node
    if (!this.next) {
      this.next = node;
      //otherwise, pass it to the existing "next" node's add method
    } else {
      this.next.add(node);
    }
  }

  getList() {
    //return a string with all of the values including the current and next value (and the next value...)
    //check to see if next exists (not null)
    if (!this.next) {
      return `${this.value}`;
    } else {
      //otherwise , concatenate the value of the next node
      return `${this.value} ${this.next.getList()}`;
    }
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
