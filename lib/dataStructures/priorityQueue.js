class PriorityQueue {
  constructor(compareFunction) {
    this.items = [];
    this.compare = compareFunction || ((a, b) => a - b);
  }

  enqueue(element) {
    this.items.push(element);
    this.items.sort(this.compare);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  back() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  remove(element) {
    const index = this.items.indexOf(element);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.items.sort(this.compare);
    }
  }
}