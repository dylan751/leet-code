/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let res = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(res) != 0) {
      res = res.substring(0, res.length - 1);
    }
  }

  console.log(res);
  return res;
};

// Test cases
let strs = ['flower', 'flour', 'flood'];
longestCommonPrefix(strs);
