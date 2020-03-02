const HelloWorld = require('../src/hello_world');

test('Test_HelloWorld_01', () => {
  const result = HelloWorld('hoge');
  const expected = "Hello World, hoge!";
  expect(result).toBe(expected);
});

test('Test_HelloWorld_02', () => {
  const result = HelloWorld('12345');
  const expected = "Hello World, 12345!";
  expect(result).toBe(expected);
})

test('Test_HelloWorld_03', () => {
  const result = HelloWorld('');
  const expected = "Hello World!";
  expect(result).toBe(expected);
})
