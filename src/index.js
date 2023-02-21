const Stack = require('./Stack.js');

module.exports = function check(str, config) {
  const stack = new Stack();
  const map = new Map(config);
  if (str.length % 2 !== 0) {
    return false;
  }

  for (const bracket of str) {
    if (map.has(bracket)) {
      if (bracket === stack.peek() && map.get(bracket) === stack.peek()) {
        stack.pop();
      } else {
        stack.push(bracket);
      }
    } else {
      const popped = stack.pop();
      if (map.get(popped) !== bracket) {
        return false;
      }
    }
  }
  return !stack.length > 0
};
