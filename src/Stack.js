module.exports = class Stack {
    stack = [];
  
    get length() {
      return this.stack.length;
    }
  
    push(value) {
      this.stack.push(value);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack.at(-1)
    }
  }