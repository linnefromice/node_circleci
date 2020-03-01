const HelloWorld = text => {
  const baseText = 'Hello World';
  if (text == '') {
    return baseText + "!";
  } else {
    return baseText + ", " + text + "!";
  }
}
module.exports = HelloWorld;
