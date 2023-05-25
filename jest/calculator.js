const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },
  subtract(num1, num2) {
    return num1 - num2;
  },
  divide(num1, num2) {
    return num1 / num2;
  },
  multiply(num1, num2) {
    return num1 * num2;
  },
  analyzeArray(arr) {
    return {
      average: (arr.reduce((prev, curr) => {
        return prev + curr;
      }, 0) / arr.length),
      min: arr.reduce((prev, curr) => {
        return prev < curr ? prev : curr;
      }, arr[0]),
      max: arr.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
      }, arr[0]),
      length: arr.length
    }
  }
};

module.exports = calculator;