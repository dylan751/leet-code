/**
 * @param {string} s
 * @return {boolean}
 */
// Method 1: Using Left + Right Pointer
var isPalindrome = function (s) {
  // Convert all letters to lowecase + removes all non-alphanumeric characters
  let formattedS = s.toLowerCase().replace(/[^0-9a-z]/gi, ''); // Use regex to removes all non-alphanumeric characters
  console.log(formattedS);

  let left = 0;
  let right = formattedS.length - 1;
  while (left <= right) {
    if (formattedS[left] !== formattedS[right]) {
      console.log('False');
      return false;
    }
    left++;
    right--;
  }
  console.log('True');
  return true;
};

// ------------------------------------------------------------------------------------------------
// Method 2: Revert the array -> Compare the 2 arrays
var isPalindrome2 = function (s) {
  // Convert all letters to lowecase + removes all non-alphanumeric characters
  let formattedS = s.toLowerCase().replace(/[^0-9a-z]/gi, ''); // Use regex to removes all non-alphanumeric characters
  console.log(formattedS);

  // Check if palindrome
  for (let i = 0; i < formattedS.length; i++) {
    if (formattedS[i] === formattedS[formattedS.length - i - 1]) {
      continue;
    }
    console.log('False');
    return false;
  }

  console.log('True');
  return true;
};

// Test cases
let s = 'A man, a plan, a canal: Panama';
isPalindrome(s);
