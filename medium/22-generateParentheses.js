/**
 * @param {number} n
 * @return {string[]}
 */
// you count open and close
// close can never be greater than open otherwise it's not valid parenthesis
// open can never be greater than n otherwise it will bring maximum stack issues from the recursion
// the only time we want to add valid parenthesis is when both open and close are equal to n

var generateParenthesis = function (n) {
  const res = [];
  backtracking(0, 0, "");
  return res;

  function backtracking(open, close, cur) {
    if (close > open || open > n) return;
    if (open == n && close == n) {
      res.push(cur);
      return;
    }
    backtracking(open + 1, close, cur + "(");
    backtracking(open, close + 1, cur + ")");
  }
};

// O(2^n) time, O(n) space
