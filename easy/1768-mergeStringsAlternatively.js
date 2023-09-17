/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = '';

  if (word1.length === 0) {
    console.log(word2);
    return word2;
  }

  if (word2.length === 0) {
    console.log(word1);
    return word1;
  }

  let i = 0,
    j = 0;
  while (i < word1.length) {
    res = res.concat(word1[i]);
    i++;

    if (j < word2.length) {
      res = res.concat(word2[j]);
      j++;
    }
  }

  // Push the res of word 2 into the res if word 2 is longer than word 1
  while (j < word2.length) {
    res = res.concat(word2[j]);
    j++;
  }

  console.log(res);
  return res;
};

// Test cases
let word1 = 'abc',
  word2 = 'pqr'; // Expected output: "apbqcr"
mergeAlternately(word1, word2);

let word3 = 'ab',
  word4 = 'pqrs';
mergeAlternately(word3, word4); // Expected output: "apbqrs"
