class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new NewNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new NewNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const mylinkedlist = new LinkedList("hemant");

mylinkedlist.append(4);
mylinkedlist.append(5);
mylinkedlist.append(6);

console.log(mylinkedlist);
