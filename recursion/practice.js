const sumRange = (int) => {
  if (int === 1) {
    return 1;
  } else {
    return sumRange(int - 1) + int;
  }
}

// sumRange(1) === 1
// sumRange(2 - 1) + 2 === 3
// sumRange(3 - 1) + 3 === 6;
/*
console.log(sumRange(3));
*/

const power = (base, exp) => {
  if (exp === 1) return base;

  return base * power(base, exp - 1);
};

/*
console.log(power(2, 4));
console.log(power(2, 3));
console.log(power(2, 2));
console.log(power(2, 1));
*/

const factorial = (int) => {
  if (int === 1) return 1;

  return int * factorial(int - 1);
}

/*
console.log(factorial(5));
*/

const all = (arr, cb) => {
  // returns true if every value in the array returns true when passed as parameter to the callback function.
  if (arr.length === 1) {
    return cb(arr[0]);
  }

  if (cb(arr[0]) === true) {
    return all(arr.slice(1), cb);
  } else {
    return false;
  }
};

const allAreLessThanSeven = all([1, 2, 4, 3], (num) => {
  return num < 7;
});

// all[]
/*
console.log(allAreLessThanSeven); // false
*/

const productOfArray = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  return productOfArray(arr.slice(1)) * arr[0]; 
}

/*
const six = productOfArray([2, 5, 10]); // 6
const sixty = productOfArray([1, 2, 3, 10]); // 60
console.log(six);
console.log(sixty);
*/

const contains = (obj, value) => {
  let key = Object.keys(obj)[0];

  if (typeof obj[key] !== 'object') {
    let iterableObj = Object.keys(obj);

    for (let i = 0; i < iterableObj.length; i++) {
      const key = iterableObj[i];

      if (obj[key] === value) {
        return true;
      }
    }
    return false;
  }

  if (!obj.value) {
    const otherKey = Object.keys(obj)[0];

    return contains(obj[otherKey], value);
  }
};

const nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}

let hasIt = contains(nestedObject, "foo2") // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

/*
console.log(hasIt);
console.log(doesntHaveIt);
*/

// Given a multi-dimensional integer array,
// return the total number of integers stored inside this array
const totalIntegers = (array) => {
  // Iterate through the array argument
  let numIntegersInArray = 0;
  for (let i = 0; i < array.length; i++) {
    // If the iterated value is an array, we run totalIntegers on it, and iterate through it.
    if (Array.isArray(array[i])) {
      numIntegersInArray += totalIntegers(array[i]);
    } else {
      // It's a value so we return 1?
      if (Number.isInteger(array[i])) {
        numIntegersInArray += 1;
      }
    }
  }

  return numIntegersInArray;
};

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], ['boo', [5, 6]]]); // 7

/*
console.log(seven);
*/

// Write a function that sums squares of numbers in list that may contain more lists
const sumSquares = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    let value = array[i];

    if (Array.isArray(value)) {
      total += sumSquares(value);
    } else {
      total += (value * value) ;
    }
  }

  return total;
};

/*
var l = [1,2,3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(sumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400
*/

// The function should return an array containing repetitions of the number argument.
// For instance, replicate(3, 5) should return [5,5,5].
// If the times argument is negative, return an empty array.
const replicate = (reps, num) => {
  if (reps <= 0) {
    return [];
  }
  if (reps === 1) {
    return [num];
  }

  return [num].concat(replicate(reps - 1, num));
};


/*
console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(2, 69)); // [69]
console.log(replicate(-2, 6)); // []
*/

const iterFibs = (num) => {
  let array = [0, 1];
  for (let i = 2; i < num; i++) {
    const sum = array[i - 1] + array[i - 2];
    array.push(sum);
  }
  
  return array;
}

/*
console.log(iterFibs(8));
*/

// sums each number with the one before it.

const fibs = (num) => {
  if (num === 2) return [0, 1];

  let array = fibs(num - 1);
  return array.concat(array[array.length-1] + array[array.length-2]);
  
  /*
  if (num < 2) return num;

  return fibs(num - 1) + fibs(num - 2);
  */
}

/*
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
*/

// Merge Sort
// Time Complexity: O(nlog(n)) Linearithmic

// Goal of Merge Sort: Sort array from smallest to largest
// Example Arr: [4, 1, 43, 32, 9, 68, 199];

const mergeSort = (arr) => {
  // Split array in half until array length is just one element.
  if (arr.length <= 1) {
    return arr;
  }

  // Split Array in half.
  const midIdx = Math.floor(arr.length / 2);

  // Recursively run mergesort on both sides
  const leftSide = mergeSort(arr.slice(0, midIdx));
  const rightSide = mergeSort(arr.slice(midIdx));

  // Merge both sides.
  return merge(leftSide, rightSide);
}

const merge = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  while (left.length) {
    sortedArr.push(left.shift());
  }

  while (right.length) {
    sortedArr.push(right.shift());
  }

  return sortedArr;
}

/*
console.log(mergeSort([4, 1, 43, 32, 9, 68, 199]));
*/

/* Linked List */

class LinkedList {
  constructor() {
    this.data = [];
    this._head = null;
    this._tail = null;
  }

  // Add new node to end of the list
  append(value) {
    // If the list is empty
    if (this.data.length === 0) {
      // We do not need to make any changes to nodes in the existing list.
      value.next = null;
      this.data.push(value);
      this._head = value;
      this._tail = value;
      return this.data;
    } else {
      // There are items in the list, and we need to get the tail node and make it's next to be our newly inserted value
      const prevTail = this.data[this.data.length - 1];
      prevTail.next = value;
      value.next = null;

      this.data.push(value);
      this._tail = value;
      return this.data;
    }
  }

  // Add new node to the beginning of the list
  prepend(value) {
    if (this.data.length === 0) {
      value.next = null;
      this.data.unshift(value);
      this._head = value;
      this._tail = value;
      return this.data;
    } else {
      const firstNode = this.data[0];
      value.next = firstNode;

      this.data.unshift(value);
      this._head = value;
      return this.data;
    }
  }

  // Return the total number of nodes in the list
  size() {
    return this.data.length;
  }

  // Return the first node in the list
  head() {
    return this._head;
  }

  // Return the last node in the list
  tail() {
    return this._tail;
  }

  // Return the node at the given index, zero indexed
  at(index) {
    return this.data[index] ? this.data[index] : null;
  }

  // Removes the last element from the list
  pop() {
    // If there is one or less than one element in the list, we don't need to make any changes to the nodes next value.
    if (this.data.length === 0) {
      return this.data;
    } else if (this.data.length === 1) {
      this.data.pop();
    } else {
      const newLastEle = this.data[this.data.length - 2];
      newLastEle.next = null;
      this._tail = newLastEle;

      this.data.pop();
    }

    return this.data;
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === value) return true;
    }

    return false;
  }

  // Returns the index of the node containing value, or null if not found.
  find(value) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === value) return i;
    }
    return null;
  }

  // Returns linked list as a string: ( value ) => ( value ) => ( value ) => null
  toString() {
    let string = `( ${this._head.value} ) => `;

    let next = this._head.next;

    while (next.next !== null) {
      string += `( ${next.value} ) => `;
      next = next.next;
    }

    string += `( ${this._tail.value} ) => null`;
  
    return string;
  }

  // Insert a new node with the provided value at the given index
  insertAt(value, index) {
    if (index > this.data.length || index < 0) {
      return 'Out of Range';
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.data.length) {
      this.append(value);
    } else {
      const prevIndexNode = this.data[index - 1];
      const currentIndexNode = this.data[index];
      prevIndexNode.next = value;
      value.next = currentIndexNode;
    }

    return this.data;
  }

  // Removes the node at the given index
  removeAt(index) {
    if (index > this.data.length || index < 0) {
      return 'Out of Range';
    }

    // if user chooses root element
    if (index === 0) {
      const nextHead = this._head.next;

      this._head = nextHead;
      this.data.shift();
    } else if (index === this.data.length - 1) {
      const nextTail = this.at(this.data.length - 2);
      console.log(nextTail);
      
      nextTail.next = null;
      this._tail = nextTail;
      this.data.pop();
    } else {
      const previousIndexNode = this.data[index - 1];
      const afterIndexNode = this.data[index + 1];

      previousIndexNode.next = afterIndexNode;
      
      this.data = this.data.splice(index, 1);
    }

    return this.data;
  }
}

class Node {
  constructor(value) {
    this.data = {
      value: value || '',
      next: null
    }
  }

  get value() {
    return this.data.value;
  }

  set value(value) {
    this.data.value = value;
  }

  // Get next element in linked list
  get next() {
    return this.data.next;
  }

  // Set  next node in linked list
  set next(value) {
    this.data.next = value;
  }
}

/* Balanced Binery Tree */

// Where the left subtree and right subtree do not differ in depth by > 1
// Key to making a balanced Binery tree is finding the middle element of the nodes.
/*
  - Set The middle element of the array as root.
  - Recursively do the same for the left half and right half.
  - Get the middle of the left half and make it the left child of the root created in step 1.
  - Get the middle of the right half and make it the right child of the root created in step 1.
  - Print the preorder of the tree.
*/

const balanceBST = (array, start, end) => {
  if (start > end) {
    return null;
  }

  const midIdx = Math.floor(array.length / 2);
  const root = array[midIdx];

  balanceBST(array.slice(0, midIdx), 0, midIdx - 1);
  balanceBST(array.slice(midIdx), midIdx, array.length - 1);

  
  return root;
}

console.log(balanceBST([1, 4, 6, 8, 10]))