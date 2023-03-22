class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new NewNode(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new NewNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new NewNode(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new NewNode(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    follower.prev = leader;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    array.push(currentNode.value);
    return array;
  }
}

const myDoublylinkedlist = new DoublyLinkedList("chetan");

// myDoublylinkedlist.append(2);
// myDoublylinkedlist.append(3);
// myDoublylinkedlist.append(4);
// myDoublylinkedlist.append(5);
myDoublylinkedlist.insert(2, "hemant");
// myDoublylinkedlist.prepend(0);
console.log(myDoublylinkedlist);
// myDoublylinkedlist.printList();
// console.log(myDoublylinkedlist.remove(2));
// console.log(myDoublylinkedlist.insert(4, "hemant"));
// console.log(myDoublylinkedlist.printList(), "size =" + " " + myDoublylinkedlist.length);
