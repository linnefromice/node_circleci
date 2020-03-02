const Calculator = require('./calcurater');

test('Test_plus_01', () => {
  const result = Calculator.plus(8, 4);
  const expected = 12;
  expect(result).toBe(expected);
});

test('Test_minus_01', () => {
  const result = Calculator.minus(8, 4);
  const expected = 4;
  expect(result).toBe(expected);
});

test('Test_multiple_01', () => {
  const result = Calculator.multiple(8, 4);
  const expected = 32;
  expect(result).toBe(expected);
});

test('Test_divide_01', () => {
  const result = Calculator.divide(8, 4);
  const expected = 2;
  expect(result).toBe(expected);
});
