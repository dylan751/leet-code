/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let num_arr = [];

  // -121 -> Return false (Negative number always return false since it don't symmetric)
  if (x < 0) {
    return false;
  }

  // Convert number into an array
  while (x > 0) {
    num_arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  // Compare the 2 ends of the array
  for (let i = 0; i < num_arr.length; i++) {
    if (num_arr[i] == num_arr[num_arr.length - i - 1]) {
      continue;
    }
    return false;
  }
  return true;
};

// --- Test cases ---
let x = -1221;
isPalindrome(x);
