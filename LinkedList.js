class LinkedList {
  constructor() {
    this.head = null
  }

  print() {
    let currentNode = this.head;

    while(currentNode.next !== null) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }

  insert(value) {
    let currentNode = this.head;

    if (this.head === null) {
      this.head = new _Node(value)
    } else {
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new _Node(value)
    }
  }

  insertCircular(value) {
    let currentNode = this.head;

    if (this.head === null) {
      this.head = new _Node(value)
    } else {
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new _Node(value, this.head.next)
    }
  }

  isCircular() {
    let currentNode = this.head;

    while(currentNode.next !== null) {
      if(currentNode.next === this.head) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  isExtraCircular() {
    let currentNode = this.head;
    let nextNode = currentNode

    while(currentNode.next !== null) {
      nextNode = nextNode.next.next;
      currentNode = currentNode.next;

      if(nextNode === currentNode){
        return true
      }
    }

    return false;
  }

  duplicates() {
    let currentNode = this.head;
    const array = [];
    const values = {};

    while(currentNode.next !== null) { 
      if(values[currentNode.value] !== undefined) {
        array.push(currentNode.value)
      }

      values[currentNode.value] = currentNode.value

      currentNode = currentNode.next
    }

    return array;
  }
}


// return a new array with the duplicates [2, 3]

class _Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;