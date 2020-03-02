const Calculator = require('../calcurater');

test('Test_plus_01', () => {
  const result = Calculator.plus(8, 4);
  const expected = 12;
  expect(result).toBe(expected);
});

test('Test_plus_02', () => {
  const result = Calculator.plus(0, -1);
  const expected = -1;
  expect(result).toBe(expected);
});

test('Test_minus_01', () => {
  const result = Calculator.minus(8, 4);
  const expected = 4;
  expect(result).toBe(expected);
});

test('Test_minus_02', () => {
  const result = Calculator.minus(0, -1);
  const expected = 1;
  expect(result).toBe(expected);
});

test('Test_multiple_01', () => {
  const result = Calculator.multiple(8, 4);
  const expected = 32;
  expect(result).toBe(expected);
});

test('Test_multiple_02', () => {
  const result = Calculator.multiple(-1, -1);
  const expected = 1;
  expect(result).toBe(expected);
});

test('Test_divide_01', () => {
  const result = Calculator.divide(8, 4);
  const expected = 2;
  expect(result).toBe(expected);
});

test('Test_divide_02', () => {
  const result = Calculator.divide(0, 4);
  const expected = 0;
  expect(result).toBe(expected);
});
