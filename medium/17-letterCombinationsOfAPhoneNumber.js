/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let combs = digits ? [""] : [];
  for (const digit of digits) {
    let newCombs = [];
    for (const comb of combs) {
      for (const letter of map[digit]) {
        newCombs.push(comb + letter);
      }
    }
    combs = newCombs;
  }
  return combs;
};
