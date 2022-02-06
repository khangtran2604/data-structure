class Node {
  constructor(data, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }

  print() {
    console.log(
      `data: ${this.data} - prev: ${JSON.stringify(
        this.prev
      )} - next: ${JSON.stringify(this.next)}`
    );
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    if (this.length === 0) {
      const newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
    } else if (this.length === 1) {
      const newNode = new Node(data, this.head);
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      let prevTail = this.tail;
      const newNode = new Node(data, this.tail);
      prevTail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    let removeNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      removeNode = this.tail;
      this.tail = removeNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return removeNode;
  }

  get(index) {
    if (this.length === 0 || index > this.length - 1) {
      return;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  delete(index) {
    if (this.length === 0 || index > this.length - 1) {
      return;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    let prevNode = currentNode.prev;
    let nextNode = currentNode.next;
    prevNode.next = currentNode.next;
    nextNode.prev = currentNode.prev;
    this.length--;
    return currentNode;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const dbLinkedList = new DoublyLinkedList();
dbLinkedList.push(1);
dbLinkedList.push(2);
dbLinkedList.push(3);
dbLinkedList.push(4);
dbLinkedList.push(5);
console.log('isEmpty:', dbLinkedList.isEmpty());
console.log('get item at 1: ', dbLinkedList.get(1));
console.log('delete item at 1: ', dbLinkedList.delete(1));
console.log('get item at 1: ', dbLinkedList.get(1));
console.log('isEmpty:', dbLinkedList.isEmpty());
