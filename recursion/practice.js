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

console.log(allAreLessThanSeven); // false