class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(item) {
    this.items.push(item);
  }

  // Remove an element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // Get the first element in the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.size()); // output: 3
console.log(q.peek()); // output: 1
console.log(q.dequeue()); // output: 1
console.log(q.size()); // output: 2
