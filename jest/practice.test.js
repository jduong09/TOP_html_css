const variableToHoldImports = require('./practice');
const calculator = require('./calculator');

test('takes a string and returns it with the first letter capitalized', () => {
  expect(variableToHoldImports.capitalized('hello')).toBe('Hello');
});

test('takes a string and returns it reversed', () => {
  expect(variableToHoldImports.reversed('hello')).toBe('olleh');
});

test('calculator object takes two nums and performs basic arithmetic operations', () => {
  expect(calculator.add(3, 7)).toBe(10);
  expect(calculator.subtract(8, 4)).toBe(4);
  expect(calculator.divide(32, 4)).toBe(8);
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('takes a string and shift factor, and returns string with each character shifted', () => {
  expect(variableToHoldImports.caesarCipher('abcde', 1)).toBe('bcdef');
});

test('takes an array of numbers and returns object with correct values', () => {
  expect(calculator.analyzeArray([1, 8, 3, 4, 2, 6]))
    .toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
});