/**
 * Filename: sophisticated_code.js
 * 
 * Description: This is a sophisticated and elaborate JavaScript code example that demonstrates various concepts
 *              and techniques. It is designed to be more professional and creative than a simple "hello world" 
 *              example or a simple calculator.
 * 
 * Author: Your Name
 * Date: MM/DD/YYYY
 */

// Define a complex class with inheritance and private properties

class Animal {
  constructor(name, color) {
    this.name = name;
    this._color = color; // Private property (_color conventionally represents private members)
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks! Woof woof!`);
  }
}

// Create instances of the class

const animal = new Animal("Generic Animal", "Brown");
const dog = new Dog("Bobby", "White", "Golden Retriever");

// Access properties and call methods

animal.speak(); // Generic Animal makes a sound.
dog.speak(); // Bobby makes a sound.
dog.bark(); // Bobby barks! Woof woof!

// Implement a complex algorithm: Fibonacci sequence

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  let prev = 1;
  let current = 1;

  for (let i = 3; i <= n; i++) {
    let next = prev + current;
    prev = current;
    current = next;
  }

  return current;
}

console.log(fibonacci(10)); // Output: 55

// Utilize closures and higher-order functions

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`Current count: ${count}`);
  }

  function decrement() {
    count--;
    console.log(`Current count: ${count}`);
  }

  return {
    increment,
    decrement,
  };
}

const counter = createCounter();
counter.increment(); // Current count: 1
counter.increment(); // Current count: 2
counter.decrement(); // Current count: 1

// Demonstrate the use of asynchronous programming with Promises

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

console.log("Fetching data...");
fetchData().then((data) => {
  console.log(data);
});

// Implement complex data structure and algorithms: Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return undefined;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.contains(5)); // Output: true

// Implement a more complex event-driven system with callbacks

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => callback(...args));
    }
  }
}

const emitter = new EventEmitter();

emitter.on("event1", (data) => {
  console.log(`Event 1: ${data}`);
});

emitter.on("event2", (data) => {
  console.log(`Event 2: ${data}`);
});

emitter.emit("event1", "Hello!"); // Output: Event 1: Hello!
emitter.emit("event2", "World!"); // Output: Event 2: World!