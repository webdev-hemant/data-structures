class HashTable {
  constructor(size = 20) {
    this.data = new Array(size);
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return this.data[address];
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length;
    }
    return hash;
  }
}

const myhashtable = new HashTable(10);

myhashtable.set("hemant", "greatest of all time");

console.log(myhashtable.get("hemant"));
