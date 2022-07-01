/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = new Map();

  // Make a map contains
  // key = element
  // value = number of that elements in the string
  for (let char of s) {
    map.set(char, map.get(char) + 1 || 1);
  }
  console.log(map);

  // Loop through t
  // If t's character has in map -> Remove it from the map
  for (let char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) map.delete(char);
    } else {
      map.set(char, 1);
    }
  }

  console.log(map);
  return map.size === 0;
};

// Test cases
let s = "anagram";
let t = "nagarams";
isAnagram(s, t);
