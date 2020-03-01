const HelloWorld = require('./hello_world');

test('Test_HelloWorld_01', () => {
  const result = HelloWorld('');
  const expected = "Hello World!";
  expect(result).toBe(expected);
});
