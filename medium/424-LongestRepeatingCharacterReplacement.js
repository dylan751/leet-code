/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (str, maxFlipCount) {
  //if every char or all but one char can be flipped, return the length of the string
  if (maxFlipCount >= str.length - 1) {
    return str.length;
  }

  const hashMap = {};
  let maxLetterFrequency = 0;
  let left = 0;

  //iterate from left to right until the right pointer is at the end of the string
  for (right = left; right < str.length; right++) {
    const rightLetter = str[right];
    //add the current letter to  the hashmap
    if (hashMap[rightLetter] === undefined) hashMap[rightLetter] = 1;
    else hashMap[rightLetter]++;

    maxLetterFrequency = Math.max(maxLetterFrequency, hashMap[rightLetter]);

    //if too many characters need flipped, move the left pointer right
    let windowSize = right - left + 1;
    if (windowSize - maxLetterFrequency > maxFlipCount) {
      const leftLetter = str[left];
      //decrement the count of the left letter in the hashmap
      hashMap[leftLetter]--;
      //move the left pointer right
      left++;
    }
  }
  //return the size of the window
  console.log(str.length - left);
  return str.length - left;
};

let s = "ABAB";
let k = 2;
characterReplacement(s, k); // Expected output: 4
