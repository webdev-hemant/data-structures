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
  prepend(value) {
    const newNode = new NewNode(value);
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
    const holdingPointer = leader.next;
    newNode.next = holdingPointer;
    leader.next = newNode;
    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
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

const mylinkedlist = new LinkedList(1);

mylinkedlist.append(2);
mylinkedlist.append(3);
mylinkedlist.append(4);
mylinkedlist.append(5);
mylinkedlist.prepend(0);
// mylinkedlist.printList();
console.log(mylinkedlist.remove(2));
// console.log(mylinkedlist.insert(4, "hemant"));
// console.log(mylinkedlist.printList(), "size =" + " " + mylinkedlist.length);
