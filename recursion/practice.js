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

console.log(iterFibs(8));

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

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
