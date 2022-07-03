/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // Convert all letters to lowecase + removes all non-alphanumeric characters
  let formattedS = s.toLowerCase().replace(/[^0-9a-z]/gi, ""); // Use regex to removes all non-alphanumeric characters
  console.log(formattedS);

  // Check if palindrome
  for (let i = 0; i < formattedS.length; i++) {
    if (formattedS[i] === formattedS[formattedS.length - i - 1]) {
      continue;
    }
    console.log("False");
    return false;
  }

  console.log("True");
  return true;
};

// Test cases
let s = "ab_a";
isPalindrome(s);
