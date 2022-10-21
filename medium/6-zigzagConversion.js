/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

let idiv = (d, n) => Math.floor(d / n);

var convert = function (s, numRows) {
  if (numRows == 1) return s;
  let res = [];

  try {
    let i = 0;
    let y = 0,
      x = 0;
    while (i < s.length) {
      res.push([y, x, s[i]]);
      if (idiv(i, numRows - 1) % 2 == 0) {
        y += 1;
      } else {
        y -= 1;
        x += 1;
      }
      i++;
    }
  } finally {
    res = res.sort((a, b) => {
      if (a[0] == b[0]) return a[1] <= b[1] ? -1 : 1;
      return a[0] <= b[0] ? -1 : 1;
    });
    return res.map(([a, b, s]) => s).join("");
  }
};
