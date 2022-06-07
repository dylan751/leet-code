/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 != 0) {
    return false;
  }

  let stack = [];
  // Nhét các ngoặc vào stack
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stack.push(s[i]);
    } else if (s[i] == ")" && !(stack.length == 0) && stack.pop() == "(") {
      continue;
    } else if (s[i] == "]" && !(stack.length == 0) && stack.pop() == "[") {
      continue;
    } else if (s[i] == "}" && !(stack.length == 0) && stack.pop() == "{") {
      continue;
    } else {
      return false;
    }
  }

  if (stack.length == 0) {
    return true;
  }
  return false;
};

// Test cases
let s = "(())[]{}";
isValid(s);
