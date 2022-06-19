/**
 * @param {number} n
 * @return {number}
 */
let res = 0;
var climbStairs = function (n) {
  let a = [0, 1, 2, 3];

  for (let i = 4; i <= n; i++) {
    a.push(a[i - 1] + a[i - 2]);
  }

  console.log(a[n]);
  return a[n];
};

// Test cases
let n = 5;
climbStairs(n);
