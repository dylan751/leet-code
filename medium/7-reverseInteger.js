/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let stack = [];
  let el = 0;
  let res = 0;
  let count = 0;

  // Check if the number is negative
  if (x < 0) {
    x = Math.abs(x);

    // Reverse to a stack
    while (x > 0) {
      remainder = x % 10;
      stack.push(remainder);
      x = Math.floor(x / 10);
    }
    console.log(stack);

    // Assemble the stack's elements into a reverse number
    while (stack.length > 0) {
      el = stack.pop();

      res = res + el * Math.pow(10, count);
      count++;
    }

    // Check the limit range
    if (res > Math.pow(2, 31) - 1 || res < -1 * Math.pow(2, 31)) {
      return 0;
    }

    console.log(res * -1);
    return res * -1;
  } else {
    // Reverse to a stack
    while (x > 0) {
      remainder = x % 10;
      stack.push(remainder);
      x = Math.floor(x / 10);
    }
    console.log(stack);

    // Assemble the stack's elements into a reverse number
    while (stack.length > 0) {
      el = stack.pop();

      res = res + el * Math.pow(10, count);
      count++;
    }

    // Check the limit range
    if (res > Math.pow(2, 31) - 1 || res < -1 * Math.pow(2, 31)) {
      return 0;
    }

    console.log(res);
    return res;
  }
};

// Test cases
let x = 1534236469;
reverse(x);
