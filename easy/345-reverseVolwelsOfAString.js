const isVowel = (c) => {
  return ['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase());
};

const replaceVowels = (arr, start, end) => {
  const temp = arr[end];
  arr[end] = arr[start];
  arr[start] = temp;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  if (s.length === 0) {
    return s;
  }

  const arr = s.split('');
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (!isVowel(arr[start]) && start < end) {
      start++;
    }

    while (!isVowel(arr[end]) && start < end) {
      end--;
    }

    if (start < end) {
      replaceVowels(arr, start, end);
    }

    start++;
    end--;
  }

  console.log(arr.join(''));
  return arr.join('');
};

// Test cases
const s = 'leetcode';
reverseVowels(s); // Expected output: leotcede
