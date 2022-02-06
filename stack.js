class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  get length() {
    return this.stack.length;
  }
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.push(5);
console.log('length: ', st.length);
console.log('pop: ', st.pop());
console.log('length: ', st.length);
console.log('peek: ', st.peek());
console.log('length: ', st.length);
