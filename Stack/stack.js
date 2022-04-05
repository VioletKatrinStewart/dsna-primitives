class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }

  hasNext() {
    return !!this.length;
  }
}

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
stack.push('llama');
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
