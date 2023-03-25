class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("hi");
myStack.push("hi");
myStack.push("hi");
myStack.pop();
console.log(myStack);
