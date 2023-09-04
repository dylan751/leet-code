/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim().split(' ');

  console.log(s[s.length - 1].length);
  return s[s.length - 1].length;
};

// Test cases
let s = '   fly me   to   the moon  '; // Expected output: 4
// let s = 'a'; // Expected output: 1
lengthOfLastWord(s);
