class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.length === 1) {
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      let oldTail = this.tail;
      oldTail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    let removeNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.next.data === this.tail.data) {
          currentNode.next = null;
          break;
        }
        currentNode = currentNode.next;
      }
    }
    this.length--;
    return removeNode;
  }

  get(index) {
    if (this.length === 0 || index > this.length - 1) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex != index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  delete(index) {
    if (this.length === 0 || index > this.length - 1) {
      return null;
    }
    let removeNode = this.head;
    let removeIndex = 0;
    let beforeNode;
    while (removeIndex != index) {
      if (removeIndex + 1 === index) {
        beforeNode = removeNode;
      }
      removeNode = removeNode.next;
      removeIndex++;
    }
    this.length--;
    beforeNode.next = removeNode.next;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const sLinkedList = new SinglyLinkedList();
sLinkedList.push(1);
sLinkedList.push(2);
sLinkedList.push(3);
sLinkedList.push(4);
console.log('isEmpty: ', sLinkedList.isEmpty());
console.log('get at index 1: ', sLinkedList.get(1));
console.log('delete at index 1: ', sLinkedList.delete(1));
console.log('get at index 1: ', sLinkedList.get(1));
console.log('pop: ', JSON.stringify(sLinkedList.pop()));
console.log('isEmpty: ', sLinkedList.isEmpty());
