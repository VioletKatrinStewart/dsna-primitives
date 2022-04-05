class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  enqueue(item) {
    return this.queue.unshift(item);
  }

  dequeue() {
    return this.queue.pop();
  }

  peek() {
    return queue[this.length - 1];
  }

  hasNext() {
    return !!this.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue());
console.log(queue.hasNext());
console.log(queue.dequeue());
queue.enqueue('llama');
console.log(queue.dequeue());
console.log(queue.hasNext());
console.log(queue.dequeue());
console.log(queue.hasNext());
console.log(queue.dequeue());
