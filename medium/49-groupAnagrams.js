/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(words) {
  const map = Object.create(null);

  for (const word of words) {
    const hash = hashWord(word);
    if (!(hash in map)) {
      map[hash] = [];
    }
    map[hash].push(word);
  }

  console.log(map);

  const groups = [];
  for (const key in map) {
    groups.push(map[key]);
  }

  console.log(groups);
  return groups;
}

function hashWord(word) {
  const count = new Array(26).fill(0); // Array contains the number of each characters of 'word'
  for (const ch of word) {
    count[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  return count.toString();
}

// Test cases
let strs = ['eat', 'tan', 'tea', 'ate', 'nat', 'bat'];
groupAnagrams(strs);
