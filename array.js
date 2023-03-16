class MyArray {
  constructor() {
    this.array = {};
    this.length = 0;
  }
  get(index) {
    return this.array[index];
  }
  push(item) {
    this.array[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.array[this.length - 1];
    delete this.array[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const lastItem = this.array[index];
    this.shiftItems(index);
    return lastItem;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    delete this.array[this.length - 1];
    this.length--;
  }
  size() {
    return this.length;
  }
}

const myarray = new MyArray();
myarray.push("zero");
myarray.push("one");
myarray.push("two");
myarray.push("three");
myarray.push("four");
myarray.push("five");
myarray.push("six");
// myarray.pop();
myarray.delete(2);
console.log(myarray);
