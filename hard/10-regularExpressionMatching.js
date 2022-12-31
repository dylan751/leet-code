/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  if (!p.match(/\.|\*/)) {
    return s === p;
  }

  var regResult = s.match(new RegExp(p));
  return regResult !== null && regResult[0] === regResult['input'];
};
